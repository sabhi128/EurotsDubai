import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

import { supabase } from "./integrations/supabase/client";

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    if (request.method.toUpperCase() === "POST" && url.pathname === "/api/bookings") {
      try {
        const input = await request.json();

        // 1. Insert into Supabase
        const { error } = await supabase.from("bookings").insert([
          {
            first_name: (input.first_name || "").trim(),
            last_name: (input.last_name || "").trim(),
            email: (input.email || "").trim().toLowerCase(),
            phone: input.phone?.trim() || null,
            service: input.service || "",
            details: input.details?.trim() || null,
            source: input.source || null,
          },
        ]);

        if (error) {
          console.error("Supabase insert error:", error);
          throw new Error(error.message);
        }

        // 2. Send email notification using Resend API (Server-side only)
        const apiKey = process.env.RESEND_API_KEY;
        const recipient = process.env.NOTIFICATION_EMAIL;

        if (apiKey && recipient) {
          try {
            const response = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                from: "Eurots Dubai <onboarding@resend.dev>",
                to: [recipient],
                subject: `New Booking Request - ${input.first_name} ${input.last_name}`,
                html: `
                  <h2>New Booking Request Received</h2>
                  <p><strong>Name:</strong> ${input.first_name} ${input.last_name}</p>
                  <p><strong>Email:</strong> ${input.email}</p>
                  <p><strong>Phone:</strong> ${input.phone || "N/A"}</p>
                  <p><strong>Service:</strong> ${input.service}</p>
                  <p><strong>Details:</strong> ${input.details || "N/A"}</p>
                  <p><strong>Source/Page:</strong> ${input.source || "N/A"}</p>
                `,
              }),
            });

            if (!response.ok) {
              const errText = await response.text();
              console.error("Failed to send email notification via Resend:", errText);
            } else {
              console.log("Email notification sent successfully!");
            }
          } catch (emailError) {
            console.error("Error sending email notification:", emailError);
          }
        } else {
          console.warn("Resend API key or notification email is missing, skipping email notification.");
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
