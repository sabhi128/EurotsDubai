import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, Stagger, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const stats = [
  { value: 150000, suffix: "+", label: "Jobs since 2008" },
  { value: 60000, suffix: "+", label: "Happy customers" },
  { value: 35, suffix: "+", label: "Teams on the road" },
  { value: 12, suffix: " mo", label: "Parts warranty" },
  { value: 6, suffix: " mo", label: "Service warranty" },
];

export function StatsCounter() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start gap-4 mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-emerald">By the numbers</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-ink lg:text-5xl">
                Seventeen years of <span className="italic font-light text-emerald-deep">getting it right.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              The metrics that matter — fixes that hold, customers who return, warranties we honour.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 lg:grid-cols-5">
          {stats.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="bg-cream p-6 md:p-8 lg:px-3 lg:py-8 xl:px-6 xl:py-10">
              <div className="font-display text-4xl font-extrabold tracking-tight text-emerald-deep md:text-5xl lg:text-[2.25rem] xl:text-5xl xl:tracking-normal whitespace-nowrap">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 gold-rule w-12" />
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}