import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqCategories } from "@/lib/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ · Eurots Dubai Dubai" },
      { name: "description", content: "Answers on AC servicing, duct cleaning, coil cleaning, plumbing, electrical, painting, water tank cleaning and more." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [active, setActive] = useState(faqCategories[0].title);
  const current = faqCategories.find((c) => c.title === active) ?? faqCategories[0];
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">Help Centre</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
              Frequently asked.
            </h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              The questions our customer call centre is asked most often — about AC servicing, duct and coil cleaning, plumbing, electrical, painting and water tank cleaning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="lg:sticky lg:top-28 self-start">
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-deep/60 mb-4">Categories</div>
              <ul className="flex flex-wrap gap-2 lg:flex-col">
                {faqCategories.map((c) => (
                  <li key={c.title}>
                    <button
                      onClick={() => setActive(c.title)}
                      className={`block w-full rounded-full px-4 py-2 text-left text-sm transition-all ${active === c.title ? "bg-emerald-deep text-cream" : "bg-cream text-ink/75 hover:bg-emerald-deep/5 hover:text-emerald-deep"}`}
                    >
                      {c.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="space-y-3">
              <Reveal>
                <h2 className="font-display text-3xl font-extrabold text-emerald-deep">{current.title}</h2>
              </Reveal>
              <div className="mt-6 space-y-3">
                {current.items.map((f, i) => <FaqItem key={f.q + i} q={f.q} a={f.a} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-emerald-deep/10 bg-cream shadow-[var(--shadow-soft)]">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-6 p-6 text-left">
        <span className="font-display text-lg font-semibold text-emerald-deep">{q}</span>
        <ChevronDown className={`mt-1 size-5 shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-ink/75 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
