import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us · We Will Fix It Dubai" },
      { name: "description", content: "Speak to a team lead, book a service, or request a quote. We respond within the working day." },
      { property: "og:title", content: "Contact Us" },
      { property: "og:description", content: "Speak to a team lead, book a service, or request a quote. We respond within the working day." },
    ],
  }),
  component: () => <ComingSoon title="Contact Us" tagline="Speak to a team lead, book a service, or request a quote. We respond within the working day." />,
});
