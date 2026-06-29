import { Reveal } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { ArrowRight, Phone } from "lucide-react";

export function ComingSoon({ title, tagline }: { title: string; tagline: string }) {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-emerald-deep pt-32 text-cream lg:pt-40">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-[36rem] rounded-full bg-emerald/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-start px-6 pb-24 lg:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-emerald/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            On the way
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 gold-rule w-24" />
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/75">
            {tagline}
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/60">
            This page is being polished as part of our site refresh — full content lands shortly. In the meantime, our team is already taking bookings on every service.
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticLink to="/" variant="gold">
              Back to home <ArrowRight className="size-4" />
            </MagneticLink>
            <a href="tel:+97144471444" className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-cream/80 hover:text-gold transition-colors">
              <Phone className="size-4" /> +971 4 447 1444
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}