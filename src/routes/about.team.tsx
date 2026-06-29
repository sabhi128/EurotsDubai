import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team · We Will Fix It Dubai" },
      { name: "description", content: "The people behind every job — supervisors, technicians and coordinators trained on one standard." },
      { property: "og:title", content: "Meet the Team" },
      { property: "og:description", content: "The people behind every job — supervisors, technicians and coordinators trained on one standard." },
    ],
  }),
  component: () => <ComingSoon title="Meet the Team" tagline="The people behind every job — supervisors, technicians and coordinators trained on one standard." />,
});
