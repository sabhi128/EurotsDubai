import { Reveal } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

export function StoryTeaser() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.35em] text-emerald">Who we are</div>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-ink lg:text-5xl">
            Accept <span className="italic font-light text-emerald-deep">no</span> imitations.
          </h2>
        </Reveal>

        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <Reveal delay={0.1}>
            <p>
              British expats <strong className="text-emerald-deep">Colin Thomas</strong> and{" "}
              <strong className="text-emerald-deep">Dan Garner</strong> started We Will Fix It in 2008, when they realised
              Dubai residents were looking for excellent quality workmanship, cost-efficiency and a simple, professional
              booking process for home maintenance services.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Our team is extensively trained on the principles of minimal fuss, maximum output, and long-lasting solutions
              that fix the root cause of any issues — the first time around.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="pt-4">
              <MagneticLink to="/about" variant="emerald">
                Our story <ArrowRight className="size-4" />
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}