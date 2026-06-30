import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Award, Users, Wrench } from "lucide-react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story · We Will Fix It Dubai" },
      { name: "description", content: "How British expats Colin Thomas and Dan Garner built Dubai's most trusted independent home maintenance company since 2008." },
    ],
  }),
  component: OurStoryPage,
});

function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 size-[36rem] rounded-full bg-emerald/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">About</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
              Our Story
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 gold-rule w-24" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              The largest and most trusted independent home maintenance company in Dubai — built one job at a time since 2008.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight lg:text-5xl">
              From a single van to Dubai's most trusted maintenance team.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/80">
            <Reveal delay={0.1}>
              <p>
                We Will Fix It was founded in 2008 by Colin Thomas and Dan Garner — two British expats frustrated by the standard of home maintenance available in Dubai at the time. Promises were made and rarely kept; jobs were patched, not fixed; quotes were vague and warranties non-existent. They believed Dubai deserved better.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                What started with a single van and one technician has grown — steadily, by reputation — into the largest independent home maintenance company in Dubai. We now operate a fleet of more than 50 fully equipped vehicles and employ hundreds of trained engineers, electricians, plumbers, painters and customer-care specialists.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The principles we started with have never changed: be on time, do the job properly the first time, leave the property cleaner than we found it, and stand behind every part we install. That's why our parts carry a 12-month warranty and our workmanship a 3-month guarantee — in writing, on every invoice.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                Today We Will Fix It services every major community in Dubai — Arabian Ranches, Emirates Hills, Palm Jumeirah, Dubai Hills, Downtown, Jumeirah, the Springs, the Meadows and beyond — and provides the same level of service to villas, apartments, restaurants, offices and retail spaces. Our 24-hour customer-care centre means that whether your AC fails at midnight or your kitchen floods at sunrise, a real person picks up the phone, and a real team is on its way.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                After more than 15 years, 400,000+ completed jobs and tens of thousands of happy customers, our promise is still the simplest one in the industry: <span className="font-semibold text-emerald-deep">we will fix it</span>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-emerald-deep text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight lg:text-5xl">
              What we believe in.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: Wrench, title: "Done first time", body: "Original parts, trained specialists, no shortcuts — so you don't pay twice for the same job." },
              { icon: Award, title: "Warranty in writing", body: "12-month parts warranty and 3-month workmanship guarantee on every invoice, every job." },
              { icon: Users, title: "Real people, 24/7", body: "Our customer call centre never closes, and our annual-contract customers get a 90-minute emergency response guarantee — day or night." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={0.1 + i * 0.1}>
                <div className="rounded-3xl border border-gold/20 bg-emerald-deep/60 p-8 h-full">
                  <v.icon className="size-7 text-gold" />
                  <h3 className="mt-6 font-display text-2xl font-bold text-cream">{v.title}</h3>
                  <p className="mt-3 text-cream/75 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">Meet the people who run it.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl mx-auto text-ink/70">
              Our leadership team has decades of combined experience in property, facilities management and home services across the UAE.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/about/team" className="inline-flex items-center gap-2 rounded-full bg-emerald-deep px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-cream hover:bg-emerald transition-colors">
                Meet the team <ArrowRight className="size-4" />
              </Link>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-emerald-deep/20 px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-ink hover:bg-emerald-deep hover:text-cream transition-colors">
                Call {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
