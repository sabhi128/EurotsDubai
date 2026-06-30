import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitBooking } from "@/lib/bookings";
import { site } from "@/lib/site";

type Props = {
  source?: string;
  defaultService?: string;
  variant?: "card" | "plain";
};

export function BookingForm({ source, defaultService, variant = "card" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const f = new FormData(e.currentTarget);
    try {
      await submitBooking({
        first_name: String(f.get("first_name") || ""),
        last_name: String(f.get("last_name") || ""),
        email: String(f.get("email") || ""),
        phone: String(f.get("phone") || ""),
        service: String(f.get("service") || ""),
        details: String(f.get("details") || ""),
        source,
      });
      setStatus("done");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please call us instead.");
    }
  }

  const wrapClass =
    variant === "card"
      ? "rounded-3xl border border-gold/20 bg-emerald-deep/60 p-8 backdrop-blur-xl shadow-[var(--shadow-emerald)]"
      : "";

  return (
    <div className={wrapClass}>
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center py-8"
          >
            <CheckCircle2 className="size-12 text-gold" />
            <h3 className="mt-4 font-display text-2xl text-cream">Request received</h3>
            <p className="mt-2 max-w-md text-sm text-cream/70">
              Thank you — one of our team will call you back shortly. For anything
              urgent, call <a href={site.phoneHref} className="text-gold underline">{site.phoneDisplay}</a> or
              WhatsApp <a href={site.whatsappHref} className="text-gold underline">{site.whatsappDisplay}</a>.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-xs uppercase tracking-[0.25em] text-cream/70 hover:text-gold"
            >
              Submit another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="first_name" label="First name" required />
              <Field name="last_name" label="Last name" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="email" type="email" label="Email" required />
              <Field name="phone" label="Phone / WhatsApp" />
            </div>
            <label className="grid gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-cream/60">Service required</span>
              <select
                name="service"
                required
                defaultValue={defaultService || ""}
                className="rounded-xl border border-gold/20 bg-emerald-deep/70 px-4 py-3 text-sm text-cream outline-none focus:border-gold transition-colors"
              >
                <option value="" disabled>Select a service…</option>
                {site.serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-cream/60">Tell us about the job</span>
              <textarea
                name="details"
                rows={4}
                placeholder="Property type, location, what's wrong, any photos…"
                className="rounded-xl border border-gold/20 bg-emerald-deep/70 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-gold transition-colors resize-none"
              />
            </label>
            {errorMsg && (
              <p className="text-sm text-red-300/90">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-ink transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "loading" ? (
                <><Loader2 className="size-4 animate-spin" /> Sending…</>
              ) : (
                "Request a callback"
              )}
            </button>
            <p className="text-[11px] text-cream/50 text-center">
              No spam. Your details are used only to schedule your service.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.25em] text-cream/60">
        {label}{required && <span className="text-gold"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-gold/20 bg-emerald-deep/70 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-gold transition-colors"
      />
    </label>
  );
}