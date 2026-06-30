import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, MapPin, Mail, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about/careers")({
  head: () => ({
    meta: [
      { title: "Careers · We Will Fix It Dubai" },
      { name: "description", content: "Join Dubai's largest independent home maintenance company. Current vacancies for AC Technicians, Plumbers and Drivers." },
    ],
  }),
  component: CareersPage,
});

const vacancies = [
  {
    title: "AC Technician",
    type: "Full-time · Dubai",
    summary: "We are looking for experienced AC technicians to join our HVAC team. Candidates must have a minimum of 3 years' experience servicing split, ducted and VRF systems in the UAE, hold a valid UAE driving licence and be able to communicate in English.",
    bullets: [
      "Minimum 3 years' UAE experience on split, ducted and VRF systems",
      "Valid UAE driving licence (mandatory)",
      "Working knowledge of coil cleaning, duct cleaning and refrigerant work",
      "Conversational English; additional languages an advantage",
    ],
  },
  {
    title: "Plumber",
    type: "Full-time · Dubai",
    summary: "Skilled plumbers required across our residential and commercial teams. The role covers leak detection, water-heater repair and installation, full bathroom refits and pump and pressure-kit replacement.",
    bullets: [
      "Minimum 3 years' plumbing experience, ideally in the UAE",
      "Valid UAE driving licence preferred",
      "Confident with leak detection, pressure testing and concealed pipework",
      "Customer-facing — clean, polite and presentable on site",
    ],
  },
  {
    title: "Driver / Helper",
    type: "Full-time · Dubai",
    summary: "We Will Fix It operates a fleet of more than 50 vehicles. We are recruiting drivers to support our technician teams, transport materials and provide on-site assistance.",
    bullets: [
      "Valid UAE manual driving licence (mandatory)",
      "Clean driving record",
      "Physically able to load and unload equipment",
      "Reliable, punctual and presentable",
    ],
  },
];

function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">Careers</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">Work with us.</h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              We Will Fix It is one of Dubai's largest independent maintenance employers. We invest in our technicians — proper tools, proper training, proper pay — and we look for people who take pride in their work and care about the customer experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">Current vacancies</h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            {vacancies.map((v, i) => (
              <Reveal key={v.title} delay={0.05 + i * 0.08}>
                <article className="group rounded-3xl border border-emerald-deep/10 bg-cream p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-deep/60">
                        <Briefcase className="size-3.5" /> {v.type}
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-bold text-emerald-deep lg:text-3xl">{v.title}</h3>
                    </div>
                    <a
                      href={`mailto:${site.email}?subject=Application: ${encodeURIComponent(v.title)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-xs uppercase tracking-[0.25em] text-cream hover:bg-emerald transition-colors"
                    >
                      Apply <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                  <p className="mt-5 text-ink/75 leading-relaxed">{v.summary}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {v.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/70">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-deep text-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">Don't see your role?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-cream/75">
              We're always interested in hearing from skilled tradespeople. Send your CV — we'll keep it on file and reach out when something opens up.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${site.email}?subject=Open Application`} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm uppercase tracking-[0.25em] text-ink hover:scale-[1.02] transition-transform">
                <Mail className="size-4" /> {site.email}
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-sm uppercase tracking-[0.25em] text-cream/80">
                <MapPin className="size-4" /> {site.address.line2}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
