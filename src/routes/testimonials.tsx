import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials · We Will Fix It Dubai" },
      { name: "description", content: "Real customer reviews from Google for We Will Fix It — Dubai's most trusted maintenance company." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">Testimonials</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
              In our customers' words.
            </h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-gold">{site.stats.reviewsRating}</span>
                <span className="text-cream/70"> from {site.stats.reviewsCount.toLocaleString()}+ Google reviews</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.4)}>
                <article className="mb-6 break-inside-avoid rounded-3xl border border-emerald-deep/10 bg-cream p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  <Quote className="size-6 text-gold" />
                  <p className="mt-4 text-ink/85 leading-relaxed">{r.text}</p>
                  <div className="mt-6 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-gold" />)}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-emerald-deep">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ink/45">{r.service ?? r.date}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
