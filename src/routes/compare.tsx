import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "How We Compare · Eurots Dubai Dubai" },
      { name: "description", content: "How Eurots Dubai compares to other maintenance providers in Dubai — warranties, response times, technicians and accountability." },
    ],
  }),
  component: ComparePage,
});

const rows = [
  { feature: "Established", us: "Since 2008", them: "Varies / often new" },
  { feature: "Independent ownership", us: true, them: false },
  { feature: "24-hour customer call centre", us: true, them: false },
  { feature: "90-minute emergency response (annual-contract customers)", us: true, them: false },
  { feature: "Parts warranty", us: "12 months", them: "30 days or none" },
  { feature: "Workmanship guarantee", us: "3 months", them: "Rare" },
  { feature: "Trained, in-house technicians (not sub-contracted)", us: true, them: false },
  { feature: "Original manufacturer parts", us: true, them: "Often cheap substitutes" },
  { feature: "Rotobrush duct cleaning equipment", us: true, them: false },
  { feature: "Free ceiling repair after coil cleaning", us: true, them: false },
  { feature: "Annual contract with all trades on one invoice", us: true, them: "Multiple providers" },
  { feature: "Transparent, written quotes", us: true, them: "Verbal / vague" },
  { feature: "Tens of thousands of verified Google reviews", us: "4.7★ · 2,300+", them: "Limited" },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? <Check className="size-5 text-emerald-deep" /> : <X className="size-5 text-ink/30" />;
  }
  return <span className="text-sm text-ink/85">{value}</span>;
}

function ComparePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">How We Compare</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
              The difference is in the detail.
            </h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              Here's how Eurots Dubai compares to typical home maintenance providers in Dubai — feature by feature.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-emerald-deep/10 bg-cream shadow-[var(--shadow-soft)]">
              <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-emerald-deep text-cream">
                <div className="px-6 py-5 text-xs uppercase tracking-[0.25em] text-cream/70">Feature</div>
                <div className="px-6 py-5 text-xs uppercase tracking-[0.25em] text-gold">Eurots Dubai</div>
                <div className="px-6 py-5 text-xs uppercase tracking-[0.25em] text-cream/50">Typical provider</div>
              </div>
              {rows.map((r, i) => (
                <div key={r.feature} className={`grid grid-cols-[1.5fr_1fr_1fr] items-center ${i % 2 === 0 ? "bg-cream" : "bg-ivory"}`}>
                  <div className="px-6 py-4 text-sm font-medium text-emerald-deep">{r.feature}</div>
                  <div className="px-6 py-4"><Cell value={r.us} /></div>
                  <div className="px-6 py-4"><Cell value={r.them} /></div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-sm text-ink/60 italic">
              "By far the most reliable maintenance company we have come across in Dubai to date — and we have been through a few." — Linda Kjær Hansen
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
