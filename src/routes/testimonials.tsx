import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials · We Will Fix It Dubai" },
      { name: "description", content: "Two thousand Google reviews and counting. Read what Dubai customers say about working with We Will Fix It." },
      { property: "og:title", content: "Testimonials" },
      { property: "og:description", content: "Two thousand Google reviews and counting. Read what Dubai customers say about working with We Will Fix It." },
    ],
  }),
  component: () => <ComingSoon title="Testimonials" tagline="Two thousand Google reviews and counting. Read what Dubai customers say about working with We Will Fix It." />,
});
