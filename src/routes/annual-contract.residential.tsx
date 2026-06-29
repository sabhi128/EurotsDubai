import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/annual-contract/residential")({
  head: () => ({
    meta: [
      { title: "Residential Annual Contracts · We Will Fix It Dubai" },
      { name: "description", content: "One annual contract, every trade in your home covered. Priority response, fixed pricing and a dedicated team." },
      { property: "og:title", content: "Residential Annual Contracts" },
      { property: "og:description", content: "One annual contract, every trade in your home covered. Priority response, fixed pricing and a dedicated team." },
    ],
  }),
  component: () => <ComingSoon title="Residential Annual Contracts" tagline="One annual contract, every trade in your home covered. Priority response, fixed pricing and a dedicated team." />,
});
