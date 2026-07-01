import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { Check, ShieldCheck, Clock, Phone, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/annual-contract/residential")({
  head: () => ({
    meta: [
      { title: "Residential Annual Maintenance Contracts · Eurots Dubai Dubai" },
      { name: "description", content: "All-trades annual maintenance contracts for villas and apartments — priority bookings, 90-minute emergency response and one team for everything." },
    ],
  }),
  component: ResidentialAMC,
});

const benefits = [
  "Scheduled AC servicing (2 or 4 visits per year, depending on plan)",
  "Priority booking ahead of non-contract customers",
  "90-minute emergency response — any time of day or night",
  "Discounted rates on all parts, labour and additional services",
  "Dedicated account manager and customer-care line",
  "Free annual electrical safety inspection",
  "Free annual plumbing leak check",
  "12-month parts warranty on every replacement",
  "3-month workmanship guarantee on every repair",
  "All trades covered: AC, plumbing, electrical, handyman, carpentry, painting and more — one provider, one invoice",
];

const tiers = [
  {
    name: "Essential",
    summary: "Apartments & smaller homes",
    visits: "2 AC service visits per year",
    highlights: [
      "Priority booking",
      "90-min emergency response",
      "10% discount on additional services",
      "All trades on one contract",
    ],
  },
  {
    name: "Comprehensive",
    summary: "Villas & family homes",
    featured: true,
    visits: "4 AC service visits per year",
    highlights: [
      "Priority booking",
      "90-min emergency response",
      "15% discount on additional services",
      "Free annual electrical safety inspection",
      "Free annual plumbing leak check",
    ],
  },
  {
    name: "Signature",
    summary: "Large villas & high-spec homes",
    visits: "4 AC services + 1 duct clean per year",
    highlights: [
      "Highest priority booking",
      "90-min emergency response",
      "20% discount on additional services",
      "All free inspections included",
      "Dedicated account manager",
      "Annual water tank cleaning included",
    ],
  },
];

function ResidentialAMC() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">Annual Contract · Residential</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
              One contract.<br />Every trade in your home.
            </h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              Our residential Annual Maintenance Contract gives you priority access to every trade in our business, scheduled servicing, and a 90-minute emergency response guarantee — day or night. One provider. One number. One team that knows your home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Promise strip */}
      <section className="bg-emerald-deep">
        <div className="mx-auto grid max-w-7xl gap-px bg-gold/15 px-6 pb-16 sm:grid-cols-3 lg:px-10">
          {[
            { icon: Clock, t: "90-min emergency response", s: "Any time, day or night" },
            { icon: ShieldCheck, t: "12-month parts warranty", s: "On every replacement" },
            { icon: Sparkles, t: "All trades, one team", s: "AC · Plumbing · Electrical · more" },
          ].map((b) => (
            <div key={b.t} className="bg-emerald-deep px-8 py-8">
              <b.icon className="size-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-bold text-cream">{b.t}</h3>
              <p className="mt-1 text-sm text-cream/70">{b.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits list */}
      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">What's included.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-ink/70">
              Every residential plan includes the following — your tier just decides how many scheduled visits you get and how deep the discounts go.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={0.04 * i}>
                <li className="flex items-start gap-3 rounded-2xl border border-emerald-deep/10 bg-cream p-5">
                  <Check className="size-5 shrink-0 text-emerald-deep mt-0.5" />
                  <span className="text-ink/85 leading-relaxed">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-emerald-deep text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">Choose your level of cover.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-cream/70">
              Final pricing depends on your property size, number of AC units and the services you'd like included. Submit the form below and we'll send a tailored quote within one working day.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={0.05 + i * 0.1}>
                <div className={`relative h-full rounded-3xl border p-8 transition-all hover:-translate-y-1 ${t.featured ? "border-gold bg-gradient-to-b from-emerald to-emerald-deep shadow-[var(--shadow-emerald)]" : "border-gold/20 bg-emerald-deep/50"}`}>
                  {t.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-ink">Most popular</span>
                  )}
                  <h3 className="font-display text-2xl font-bold text-cream">{t.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">{t.summary}</div>
                  <div className="mt-6 text-sm text-cream/80">{t.visits}</div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-cream/85"><Check className="size-4 text-gold mt-0.5 shrink-0" />{h}</li>
                    ))}
                  </ul>
                  <a href="#book" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs uppercase tracking-[0.25em] text-ink hover:scale-[1.02] transition-transform">Get a quote</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="bg-ivory text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-extrabold lg:text-5xl text-emerald-deep">Request your contract quote.</h2>
              <p className="mt-4 text-ink/70">
                Tell us about your home and the services you'd like included. We'll send a tailored proposal — usually within one working day.
              </p>
              <a href="tel:048073295" className="mt-8 inline-flex items-center gap-2 text-emerald-deep">
                <Phone className="size-5 text-gold" />
                <span className="font-display text-2xl font-bold">04 807 3295</span>
              </a>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-ink/50">Customer call centre · open 24 hrs</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingForm source="residential-amc" defaultService="Annual Maintenance Contract" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
