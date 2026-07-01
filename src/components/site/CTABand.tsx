import { Reveal } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-deep p-10 text-cream lg:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 size-80 rounded-full bg-emerald/40 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-gold">Ready when you are</div>
                <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight lg:text-5xl">
                  One call. One team. <br />
                  <span className="italic font-light text-gold">Every fix in your home.</span>
                </h2>
                <p className="mt-5 max-w-lg text-cream/75">
                  Book a single job or move onto an annual contract. Either way, the same trained team turns up — on time, with warranty in writing.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <MagneticLink to="/annual-contract/residential">
                  Get a quote <ArrowRight className="size-4" />
                </MagneticLink>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-gold transition-colors">
                  <Phone className="size-4" /> {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}