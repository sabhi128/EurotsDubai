import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { StatsCounter } from "@/components/site/StatsCounter";
import { ServiceBento } from "@/components/site/ServiceBento";
import { StoryTeaser } from "@/components/site/StoryTeaser";
import { TestimonialStrip } from "@/components/site/TestimonialStrip";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "We Will Fix It · Dubai's Most Trusted Home Maintenance" },
      { name: "description", content: "The largest independent home maintenance company in Dubai. AC, electrical, plumbing, painting, carpentry, drainage and pool services. Rated from 2,000+ reviews." },
      { property: "og:title", content: "We Will Fix It · Dubai Home Maintenance" },
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
      <CTABand />
    </>
  );
}
