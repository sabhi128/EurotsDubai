import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/carpentry")({
  head: () => ({
    meta: [
      { title: "Carpentry Services · We Will Fix It Dubai" },
      { name: "description", content: "Bespoke carpentry, joinery repairs, custom shelving and door rehanging in Dubai — measured twice, cut once." },
      { property: "og:title", content: "Carpentry Services · We Will Fix It Dubai" },
      { property: "og:description", content: "Bespoke carpentry, joinery repairs, custom shelving and door rehanging in Dubai — measured twice, cut once." },
    ],
  }),
  component: () => {
    const svc = getService("carpentry")!;
    return <ServicePage service={svc} />;
  },
});
