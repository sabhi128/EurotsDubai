import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { StatsCounter } from "@/components/site/StatsCounter";
import { ServiceBento } from "@/components/site/ServiceBento";
import { StoryTeaser } from "@/components/site/StoryTeaser";
import { TestimonialStrip } from "@/components/site/TestimonialStrip";
import { CTABand } from "@/components/site/CTABand";
import { BookingForm } from "@/components/site/BookingForm";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eurots Dubai · Dubai's Most Trusted Home Maintenance" },
      { name: "description", content: "The largest independent home maintenance company in Dubai. AC, electrical, plumbing, painting, carpentry, drainage and pool services. Rated from 2,000+ reviews." },
      { property: "og:title", content: "Eurots Dubai · Dubai Home Maintenance" },
      { property: "og:description", content: "One call. One team. Every fix in your Dubai home — done first time, with warranty in writing." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ServiceBento />
      <StoryTeaser />
      <TestimonialStrip />
      <section id="book" className="relative bg-emerald-deep text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Book a service</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-tight lg:text-6xl">
                One form.<br />Real callback.
              </h2>
              <div className="mt-8 gold-rule w-24" />
              <p className="mt-8 max-w-md text-cream/75 leading-relaxed">
                Tell us a little about the job and one of our team will be in touch — usually within the hour during call-centre hours.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-cream/75">
                <li>· 24-hour customer call centre</li>
                <li>· 12-month parts warranty in writing</li>
                <li>· Annual-contract customers get a 90-minute emergency response</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <BookingForm source="home" />
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
