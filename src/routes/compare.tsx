import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "How We Compare · We Will Fix It Dubai" },
      { name: "description", content: "Why customers move to We Will Fix It from other providers — pricing transparency, warranty, training and accountability." },
      { property: "og:title", content: "How We Compare" },
      { property: "og:description", content: "Why customers move to We Will Fix It from other providers — pricing transparency, warranty, training and accountability." },
    ],
  }),
  component: () => <ComingSoon title="How We Compare" tagline="Why customers move to We Will Fix It from other providers — pricing transparency, warranty, training and accountability." />,
});
