import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Building2, ShieldCheck, Clock, FileText } from "lucide-react";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/annual-contract/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Annual Maintenance Contracts · Eurots Dubai Dubai" },
      { name: "description", content: "Annual maintenance contracts for Dubai offices, restaurants, retail, hotels and serviced apartments. Scheduled visits, reporting, 24-hour cover." },
    ],
  }),
  component: CommercialAMC,
});

const sectors = [
  { icon: Building2, name: "Offices & co-working", body: "From single floors to entire towers — HVAC servicing, electrical, plumbing and handyman support tailored around your working hours." },
  { icon: Building2, name: "Restaurants & cafés", body: "Specialist support for kitchens — extraction systems, drainage, refrigeration repair and emergency plumbing, with scheduled jetting programmes." },
  { icon: Building2, name: "Retail & showrooms", body: "Out-of-hours scheduling so customer experience is never disrupted, with rapid response for refrigeration, AC and lighting failures." },
  { icon: Building2, name: "Hotels & serviced apartments", body: "Room-ready inspections, deep AC servicing and round-the-clock cover that protects guest experience and review scores." },
];

const benefits = [
  "Scheduled preventative maintenance programme tailored to your premises",
  "24-hour emergency response with a guaranteed SLA",
  "Single point of contact for all trades — AC, electrical, plumbing, drainage, carpentry, painting",
  "Monthly and quarterly service reporting with photographs",
  "Out-of-hours scheduling to avoid disruption to your operations",
  "DEWA-compliant electrical work, certified and documented",
  "12-month parts warranty on every replacement",
  "Discounted hourly rates and project pricing for any work outside the contract scope",
  "Annual HVAC efficiency review with energy-saving recommendations",
];

function CommercialAMC() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">Annual Contract · Commercial</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
              Maintenance, on your operating hours.
            </h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              A full-service annual maintenance contract for Dubai offices, restaurants, retail outlets, hotels and serviced apartments — every trade covered, scheduled around your hours, with documented reporting and a 24-hour emergency response.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-emerald-deep">
        <div className="mx-auto grid max-w-7xl gap-px bg-gold/15 px-6 pb-16 sm:grid-cols-3 lg:px-10">
          {[
            { icon: Clock, t: "24-hour emergency cover", s: "Guaranteed SLA on every contract" },
            { icon: ShieldCheck, t: "DEWA-compliant work", s: "Certified electricians and documentation" },
            { icon: FileText, t: "Reporting included", s: "Monthly / quarterly with photographs" },
          ].map((b) => (
            <div key={b.t} className="bg-emerald-deep px-8 py-8">
              <b.icon className="size-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-bold text-cream">{b.t}</h3>
              <p className="mt-1 text-sm text-cream/70">{b.s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">Sectors we serve.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={0.05 + i * 0.1}>
                <div className="h-full rounded-3xl border border-emerald-deep/10 bg-cream p-8 shadow-[var(--shadow-soft)]">
                  <s.icon className="size-7 text-gold" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-emerald-deep">{s.name}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-deep text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">What's included.</h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={0.04 * i}>
                <li className="flex items-start gap-3 rounded-2xl border border-gold/20 bg-emerald-deep/50 p-5">
                  <Check className="size-5 shrink-0 text-gold mt-0.5" />
                  <span className="text-cream/85 leading-relaxed">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-extrabold lg:text-5xl text-emerald-deep">Request a commercial proposal.</h2>
              <p className="mt-4 text-ink/70">
                Tell us about your premises and current pain points — we'll arrange a site survey and put together a tailored maintenance contract.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingForm source="commercial-amc" defaultService="Annual Maintenance Contract" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
