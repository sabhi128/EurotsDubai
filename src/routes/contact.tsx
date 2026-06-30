import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · We Will Fix It Dubai" },
      { name: "description", content: "Speak to a team lead, book a service, or request a callback. 24-hour customer call centre." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">Contact</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
              Get in touch.
            </h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              Call, WhatsApp, email or send a request below. Our customer call centre is open 24 hours — a real person answers, every time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-emerald-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <Reveal>
            <div className="space-y-8">
              <ContactRow icon={Phone} label="Phone" lines={[
                { text: site.phoneDisplay, href: site.phoneHref },
                { text: site.freephoneDisplay, href: site.freephoneHref },
              ]} />
              <ContactRow icon={MessageCircle} label="WhatsApp" lines={[
                { text: site.whatsappDisplay, href: site.whatsappHref, target: "_blank" },
              ]} />
              <ContactRow icon={Mail} label="Email" lines={[
                { text: site.email, href: site.emailHref },
              ]} />
              <ContactRow icon={MapPin} label="Office" lines={[
                { text: `${site.address.line1}, ${site.address.line2}` },
              ]} />

              <div className="rounded-3xl border border-gold/20 bg-emerald-deep/50 p-6">
                <div className="flex items-center gap-3 text-gold">
                  <Clock className="size-4" />
                  <span className="text-xs uppercase tracking-[0.25em]">Opening Hours</span>
                </div>
                <ul className="mt-4 grid gap-1.5 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-cream/80">
                      <span>{h.day}</span>
                      <span className={h.time === "CLOSED" ? "text-cream/40" : "text-cream"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-gold/20">
                <iframe
                  title="We Will Fix It - Dubai Investments Park"
                  src="https://www.google.com/maps?q=Dubai+Investments+Park+Plot+194&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h2 className="font-display text-2xl font-bold text-cream lg:text-3xl">Request a callback</h2>
              <p className="mt-2 text-sm text-cream/70">
                Tell us a little about the job — we'll be back to you shortly.
              </p>
              <div className="mt-6">
                <BookingForm source="contact" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, lines }: { icon: any; label: string; lines: { text: string; href?: string; target?: string }[] }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid size-11 place-items-center rounded-2xl bg-gold/15 text-gold">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-gold">{label}</div>
        <div className="mt-1 space-y-0.5">
          {lines.map((l) =>
            l.href ? (
              <a key={l.text} href={l.href} target={l.target} rel={l.target === "_blank" ? "noopener noreferrer" : undefined} className="block text-lg text-cream hover:text-gold transition-colors">{l.text}</a>
            ) : (
              <div key={l.text} className="text-lg text-cream">{l.text}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
