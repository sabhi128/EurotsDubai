import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/pools")({
  head: () => ({
    meta: [
      { title: "Pools & Waterproofing · Eurots Dubai Dubai" },
      { name: "description", content: "Pool servicing, equipment repair and full waterproofing of balconies, bathrooms and roofs across Dubai. Up to 5-year workmanship warranty." },
      { property: "og:title", content: "Pools & Waterproofing · Eurots Dubai Dubai" },
      { property: "og:description", content: "Pool servicing, equipment repair and full waterproofing of balconies, bathrooms and roofs across Dubai. Up to 5-year workmanship warranty." },
    ],
  }),
  component: () => {
    const svc = getService("pools")!;
    return <ServicePage service={svc} />;
  },
});
