import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/about/careers")({
  head: () => ({
    meta: [
      { title: "Careers · We Will Fix It Dubai" },
      { name: "description", content: "Join one of Dubai's most respected maintenance teams. We hire skilled trades and back them with the right tools, training and pay." },
      { property: "og:title", content: "Careers" },
      { property: "og:description", content: "Join one of Dubai's most respected maintenance teams. We hire skilled trades and back them with the right tools, training and pay." },
    ],
  }),
  component: () => <ComingSoon title="Careers" tagline="Join one of Dubai's most respected maintenance teams. We hire skilled trades and back them with the right tools, training and pay." />,
});
