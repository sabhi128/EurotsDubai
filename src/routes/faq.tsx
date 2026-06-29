import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions · We Will Fix It Dubai" },
      { name: "description", content: "Answers on warranties, pricing, scheduling, payment and how we handle Dubai's most common home maintenance issues." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Answers on warranties, pricing, scheduling, payment and how we handle Dubai's most common home maintenance issues." },
    ],
  }),
  component: () => <ComingSoon title="Frequently Asked Questions" tagline="Answers on warranties, pricing, scheduling, payment and how we handle Dubai's most common home maintenance issues." />,
});
