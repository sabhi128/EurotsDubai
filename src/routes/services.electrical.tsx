import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/electrical")({
  head: () => ({
    meta: [
      { title: "Electrical Services · Eurots Dubai Dubai" },
      { name: "description", content: "DEWA-compliant electricians for switchgear, lighting, smart-home integration and full residential and commercial electrical work in Dubai." },
      { property: "og:title", content: "Electrical Services · Eurots Dubai Dubai" },
      { property: "og:description", content: "DEWA-compliant electricians for switchgear, lighting, smart-home integration and full residential and commercial electrical work in Dubai." },
    ],
  }),
  component: () => {
    const svc = getService("electrical")!;
    return <ServicePage service={svc} />;
  },
});
