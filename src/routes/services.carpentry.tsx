import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/carpentry")({
  head: () => ({
    meta: [
      { title: "Carpentry Services · Eurots Dubai Dubai" },
      { name: "description", content: "Bespoke carpentry, joinery repairs, custom shelving and door rehanging in Dubai — measured twice, cut once." },
      { property: "og:title", content: "Carpentry Services · Eurots Dubai Dubai" },
      { property: "og:description", content: "Bespoke carpentry, joinery repairs, custom shelving and door rehanging in Dubai — measured twice, cut once." },
    ],
  }),
  component: () => {
    const svc = getService("carpentry")!;
    return <ServicePage service={svc} />;
  },
});
