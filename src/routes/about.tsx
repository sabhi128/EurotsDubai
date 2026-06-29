import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story · We Will Fix It Dubai" },
      { name: "description", content: "How British expats Colin Thomas and Dan Garner built Dubai's most trusted independent home maintenance company since 2008." },
      { property: "og:title", content: "Our Story" },
      { property: "og:description", content: "How British expats Colin Thomas and Dan Garner built Dubai's most trusted independent home maintenance company since 2008." },
    ],
  }),
  component: () => <ComingSoon title="Our Story" tagline="How British expats Colin Thomas and Dan Garner built Dubai's most trusted independent home maintenance company since 2008." />,
});
