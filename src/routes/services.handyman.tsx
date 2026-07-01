import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/handyman")({
  head: () => ({
    meta: [
      { title: "Handyman Services · Eurots Dubai Dubai" },
      { name: "description", content: "Professional handyman for TV mounting, shelves, curtain rails, furniture assembly and door adjustments across Dubai. Small jobs, finished like the big ones." },
      { property: "og:title", content: "Handyman Services · Eurots Dubai Dubai" },
      { property: "og:description", content: "Professional handyman for TV mounting, shelves, curtain rails, furniture assembly and door adjustments across Dubai. Small jobs, finished like the big ones." },
    ],
  }),
  component: () => {
    const svc = getService("handyman")!;
    return <ServicePage service={svc} />;
  },
});
