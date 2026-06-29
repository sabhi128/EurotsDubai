import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";

// Featured layout: first item large, others smaller
export function ServiceBento() {
  return (
    <section className="relative bg-ink py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start gap-4 mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-gold">Our services</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold lg:text-5xl">
                How can we help <span className="italic font-light text-gold">today?</span>
              </h2>
            </div>
            <p className="max-w-md text-cream/70">
              Eight specialised trades, one accountable team. Highest quality workmanship at the most cost-efficient rates in Dubai.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceTile key={s.slug} service={s} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTile({ service, large }: { service: (typeof services)[number]; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={large ? "lg:col-span-2 lg:row-span-2" : ""}
    >
      <Link
        to={`/services/${service.slug}` as "/services/ac"}
        className="group relative block h-full overflow-hidden rounded-3xl border border-gold/15"
      >
        <div className={`relative ${large ? "aspect-[16/11]" : "aspect-[4/3]"} overflow-hidden`}>
          <motion.img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80">{service.index}</div>
              <h3 className={`mt-2 font-display font-extrabold leading-tight ${large ? "text-3xl lg:text-5xl" : "text-2xl"}`}>
                {service.name}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-cream/70 line-clamp-2">{service.tagline}</p>
            </div>
            <div className="shrink-0 rounded-full border border-gold/40 p-3 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}