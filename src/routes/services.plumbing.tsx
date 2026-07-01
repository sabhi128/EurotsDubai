import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/plumbing")({
  head: () => ({
    meta: [
      { title: "Plumbing Services · Eurots Dubai Dubai" },
      { name: "description", content: "Dubai plumbers for leaks, low pressure, water heaters and bathroom refits. Non-destructive leak detection and root-cause repair, first time." },
      { property: "og:title", content: "Plumbing Services · Eurots Dubai Dubai" },
      { property: "og:description", content: "Dubai plumbers for leaks, low pressure, water heaters and bathroom refits. Non-destructive leak detection and root-cause repair, first time." },
    ],
  }),
  component: () => {
    const svc = getService("plumbing")!;
    return <ServicePage service={svc} />;
  },
});
