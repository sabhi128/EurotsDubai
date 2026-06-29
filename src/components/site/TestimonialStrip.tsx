import { Reveal, Stagger, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Booked them for an AC service after another company gave up. Diagnosed in 20 minutes, fixed in an hour, and the bill was lower than the failed visit.",
    name: "Aisha R.",
    role: "Villa owner · Emirates Hills",
  },
  {
    quote:
      "We use the annual contract across two offices. The team is the same every time — they know our setup, and there's never a surprise on the invoice.",
    name: "James M.",
    role: "Operations Lead · DIFC",
  },
  {
    quote:
      "Found a hidden bathroom leak with thermal imaging, no demolition. The repair was tidy and the warranty paperwork arrived the same day.",
    name: "Priya S.",
    role: "Apartment owner · JBR",
  },
];

export function TestimonialStrip() {
  return (
    <section className="relative overflow-hidden bg-emerald-deep py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start gap-4 mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-gold">Testimonials</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold lg:text-5xl">
                Two thousand reviews. <span className="italic font-light text-gold">One standard.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="group relative rounded-3xl border border-gold/15 bg-emerald/15 p-8 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1 hover:bg-emerald/25"
            >
              <Quote className="size-7 text-gold/70" />
              <blockquote className="mt-4 text-base leading-relaxed text-cream/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-gold/15 pt-5">
                <div>
                  <div className="text-sm font-semibold text-cream">{t.name}</div>
                  <div className="text-xs text-cream/55">{t.role}</div>
                </div>
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="size-3 fill-gold text-gold" />)}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}