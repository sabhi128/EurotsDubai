import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/painting")({
  head: () => ({
    meta: [
      { title: "Painting Services · Eurots Dubai Dubai" },
      { name: "description", content: "Premium interior and exterior painting in Dubai — Jotun, Dulux, Caparol — full prep, two-coat finish, and meticulous protection of furniture and floors." },
      { property: "og:title", content: "Painting Services · Eurots Dubai Dubai" },
      { property: "og:description", content: "Premium interior and exterior painting in Dubai — Jotun, Dulux, Caparol — full prep, two-coat finish, and meticulous protection of furniture and floors." },
    ],
  }),
  component: () => {
    const svc = getService("painting")!;
    return <ServicePage service={svc} />;
  },
});
