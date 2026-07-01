import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/ac")({
  head: () => ({
    meta: [
      { title: "AC Services · Eurots Dubai Dubai" },
      { name: "description", content: "Premium AC servicing, repairs and installs in Dubai — split, ducted, VRF and chiller systems. Coil cleaning, refrigerant, airflow balancing, warranty in writing." },
      { property: "og:title", content: "AC Services · Eurots Dubai Dubai" },
      { property: "og:description", content: "Premium AC servicing, repairs and installs in Dubai — split, ducted, VRF and chiller systems. Coil cleaning, refrigerant, airflow balancing, warranty in writing." },
    ],
  }),
  component: () => {
    const svc = getService("ac")!;
    return <ServicePage service={svc} />;
  },
});
