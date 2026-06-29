import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/electrical")({
  head: () => ({
    meta: [
      { title: "Electrical Services · We Will Fix It Dubai" },
      { name: "description", content: "DEWA-compliant electricians for switchgear, lighting, smart-home integration and full residential and commercial electrical work in Dubai." },
      { property: "og:title", content: "Electrical Services · We Will Fix It Dubai" },
      { property: "og:description", content: "DEWA-compliant electricians for switchgear, lighting, smart-home integration and full residential and commercial electrical work in Dubai." },
    ],
  }),
  component: () => {
    const svc = getService("electrical")!;
    return <ServicePage service={svc} />;
  },
});
