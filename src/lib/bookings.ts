import { createServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const bookingInputSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string().nullish(),
  service: z.string(),
  details: z.string().nullish(),
  source: z.string().nullish(),
});

export type BookingInput = z.infer<typeof bookingInputSchema>;

export const submitBooking = createServerFn({ method: "POST" })
  .validator(bookingInputSchema)
  .handler(async ({ data: input }) => {
    // 1. Insert into Supabase
    const { error } = await supabase.from("bookings").insert([
      {
        first_name: input.first_name.trim(),
        last_name: input.last_name.trim(),
        email: input.email.trim().toLowerCase(),
        phone: input.phone?.trim() || null,
        service: input.service,
        details: input.details?.trim() || null,
        source: input.source || null,
      },
    ]);
    if (error) throw new Error(error.message);

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

    return { ok: true };
  });