import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/drainage")({
  head: () => ({
    meta: [
      { title: "Drainage Services · We Will Fix It Dubai" },
      { name: "description", content: "Dubai drainage specialists: high-pressure jetting, CCTV surveys, blockage clearance and odour treatment for residential and commercial properties." },
      { property: "og:title", content: "Drainage Services · We Will Fix It Dubai" },
      { property: "og:description", content: "Dubai drainage specialists: high-pressure jetting, CCTV surveys, blockage clearance and odour treatment for residential and commercial properties." },
    ],
  }),
  component: () => {
    const svc = getService("drainage")!;
    return <ServicePage service={svc} />;
  },
});
