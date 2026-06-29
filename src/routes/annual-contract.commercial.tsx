import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/annual-contract/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Annual Contracts · We Will Fix It Dubai" },
      { name: "description", content: "Annual maintenance contracts for Dubai offices, hotels and retail. Scheduled servicing with reporting and on-call response." },
      { property: "og:title", content: "Commercial Annual Contracts" },
      { property: "og:description", content: "Annual maintenance contracts for Dubai offices, hotels and retail. Scheduled servicing with reporting and on-call response." },
    ],
  }),
  component: () => <ComingSoon title="Commercial Annual Contracts" tagline="Annual maintenance contracts for Dubai offices, hotels and retail. Scheduled servicing with reporting and on-call response." />,
});
