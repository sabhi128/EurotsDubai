import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { services, type Service } from "@/lib/services";
import { Reveal, Stagger, staggerItem } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticButton";

const steps = [
  { n: "01", title: "Book", desc: "One call or one form — your details, your address, your slot." },
  { n: "02", title: "Diagnose", desc: "A trained technician inspects, tests, and gives you a fixed quote." },
  { n: "03", title: "Fix", desc: "The job is done first time, with branded parts and a tidy site." },
  { n: "04", title: "Warranty", desc: "Service and parts warranty issued in writing on completion." },
];

export function ServicePage({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate bg-emerald-deep pt-32 text-cream lg:pt-40 overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24">
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gold">{service.index}</span>
                <span className="gold-rule w-12" />
                <span className="text-xs uppercase tracking-[0.3em] text-cream/60">{service.name}</span>
              </div>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
                {service.hero}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 lg:text-lg">
                {service.description}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticLink to="/annual-contract/residential" variant="gold">
                  Book this service <ArrowRight className="size-4" />
                </MagneticLink>
                <a href="tel:+97144471444" className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-cream/80 hover:text-gold transition-colors">
                  <Phone className="size-4" /> Speak to a team lead
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20">
              <motion.img
                src={service.image}
                alt={service.name}
                loading="eager"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 to-transparent" />
              <div className="pointer-events-none absolute inset-4 border border-gold/30" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.35em] text-emerald">What's included</div>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-ink lg:text-5xl">
              Every {service.shortName.toLowerCase()} visit, <span className="italic font-light text-emerald-deep">covered.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              A single transparent scope — no upsells, no surprises. Add-ons are quoted before any extra work begins.
            </p>
          </Reveal>
          <Stagger className="lg:col-span-8 grid gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:border-gold/60 hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
              >
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-emerald-deep text-cream transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Check className="size-3.5" />
                </span>
                <span className="text-foreground/90">{item}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.35em] text-gold">How it works</div>
              <h2 className="mt-4 font-display text-4xl font-extrabold lg:text-5xl">
                A simple, professional <span className="italic font-light text-gold">booking process.</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-gold/15 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={staggerItem}
                className="bg-ink p-8 lg:p-10"
              >
                <div className="font-mono text-xs text-gold">{s.n}</div>
                <div className="mt-6 font-display text-3xl font-extrabold">{s.title}</div>
                <div className="mt-3 gold-rule w-10" />
                <p className="mt-4 text-sm leading-relaxed text-cream/70">{s.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.35em] text-emerald">Common questions</div>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-ink lg:text-5xl">
              Asked & <span className="italic font-light text-emerald-deep">answered.</span>
            </h2>
          </Reveal>
          <div className="lg:col-span-8 divide-y divide-border">
            {service.faqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <span className="font-display text-xl font-semibold text-ink lg:text-2xl">{f.q}</span>
                  <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-border text-emerald-deep transition-all duration-500 group-open:rotate-45 group-open:bg-gold group-open:border-gold group-open:text-ink">
                    <ArrowUpRight className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-4 mb-10">
              <h2 className="font-display text-3xl font-extrabold text-ink lg:text-4xl">
                Related services
              </h2>
              <Link to="/" className="hidden text-sm uppercase tracking-wider text-emerald-deep hover:text-gold transition-colors md:inline">
                See all →
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}` as "/services/ac"}
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80">{s.index}</div>
                  <div className="mt-1 font-display text-xl font-bold text-cream">{s.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}