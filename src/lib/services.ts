import acImg from "@/assets/svc-ac.jpg";
import electricalImg from "@/assets/svc-electrical.jpg";
import plumbingImg from "@/assets/svc-plumbing.jpg";
import handymanImg from "@/assets/svc-handyman.jpg";
import carpentryImg from "@/assets/svc-carpentry.jpg";
import drainageImg from "@/assets/svc-drainage.jpg";
import paintingImg from "@/assets/svc-painting.jpg";
import poolsImg from "@/assets/svc-pools.jpg";

export type Service = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  hero: string;
  image: string;
  included: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "ac",
    index: "01",
    name: "Air Conditioning",
    shortName: "AC Services",
    tagline: "Cool comfort, engineered to last.",
    description:
      "From split-system servicing to full ducted overhauls, our HVAC technicians keep Dubai homes and offices running cool, clean, and quiet — first time, every time.",
    hero: "Precision AC servicing across every Dubai community.",
    image: acImg,
    included: [
      "Full system diagnostics and refrigerant check",
      "Coil, filter and condensate-line cleaning",
      "Thermostat calibration and airflow balancing",
      "Indoor and outdoor unit deep clean",
      "Performance report and 6-month service warranty",
    ],
    faqs: [
      { q: "How often should I service my AC in Dubai?", a: "We recommend a full service every 6 months — Dubai dust and heat push systems hard, and clean coils can cut running costs by up to 30%." },
      { q: "Do you handle ducted and chiller systems?", a: "Yes. Our teams are trained on split, ducted, VRF and chiller systems across residential and commercial properties." },
    ],
  },
  {
    slug: "electrical",
    index: "02",
    name: "Electrical",
    shortName: "Electrical",
    tagline: "Licensed electricians. Zero shortcuts.",
    description:
      "Wiring, lighting, switchgear, smart-home integrations — all signed off by DEWA-compliant electricians who treat your property like a showroom.",
    hero: "Certified electrical work, finished to a showroom standard.",
    image: electricalImg,
    included: [
      "Distribution board inspection and labelling",
      "Socket, switch and dimmer replacement",
      "Light-fitting supply and installation",
      "Smart-home and home-automation wiring",
      "Earthing, RCD testing and safety reports",
    ],
    faqs: [
      { q: "Are your electricians DEWA-approved?", a: "Every electrician on the road carries the required Dubai certifications and works to DEWA code." },
      { q: "Can you install chandeliers and bespoke lighting?", a: "Yes — we install heavy fixtures, recessed lighting, and full smart-lighting scenes with the right anchoring and load planning." },
    ],
  },
  {
    slug: "plumbing",
    index: "03",
    name: "Plumbing",
    shortName: "Plumbing",
    tagline: "Leak-free, every joint, every time.",
    description:
      "Hidden leaks, low pressure, blocked drains, full bathroom refits — our plumbers diagnose the root cause and fix it once, with parts that last.",
    hero: "Plumbing done properly — root cause, first time.",
    image: plumbingImg,
    included: [
      "Leak detection and pressure testing",
      "Tap, mixer and shower replacement",
      "Water-heater repair and installation",
      "Toilet, bidet and basin fitting",
      "Pipework rerouting and concealed repairs",
    ],
    faqs: [
      { q: "Can you find a hidden leak without breaking walls?", a: "Yes. We use acoustic detection and thermal imaging before any cutting — most leaks are located non-destructively." },
      { q: "Do you supply branded fittings?", a: "We supply Grohe, Hansgrohe, Roca and other premium brands, or we'll fit parts you've already purchased." },
    ],
  },
  {
    slug: "handyman",
    index: "04",
    name: "Handyman",
    shortName: "Handyman",
    tagline: "One call. Everything on the list.",
    description:
      "TV mounting, shelving, curtain rails, furniture assembly, door adjustments — small jobs handled by professionals, not amateurs.",
    hero: "The small jobs, finished like the big ones.",
    image: handymanImg,
    included: [
      "TV wall-mounting with concealed cabling",
      "Shelf, mirror and artwork installation",
      "Curtain pole, blind and track fitting",
      "Flat-pack and bespoke furniture assembly",
      "Door, handle and lock adjustments",
    ],
    faqs: [
      { q: "Is there a minimum charge?", a: "We charge by the hour with a one-hour minimum — you can stack multiple small jobs into a single visit." },
      { q: "Do you bring your own tools and materials?", a: "Tools always. Materials — fixings, brackets, anchors — we bring the common stock and source bespoke items on request." },
    ],
  },
  {
    slug: "carpentry",
    index: "05",
    name: "Carpentry",
    shortName: "Carpenters",
    tagline: "Crafted in wood, finished by hand.",
    description:
      "Wardrobes, joinery repairs, custom shelving, door rehanging — carpentry that's measured twice and cut once, by people who care about the grain.",
    hero: "Carpentry, finished by hand.",
    image: carpentryImg,
    included: [
      "Wardrobe and built-in repair",
      "Custom shelving and joinery",
      "Door rehanging, planing and alignment",
      "Skirting, architrave and trim work",
      "Kitchen-cabinet repair and refurbishment",
    ],
    faqs: [
      { q: "Do you build bespoke furniture?", a: "We handle bespoke joinery — wardrobes, vanities, libraries — designed to fit your space and finished in-house." },
      { q: "Can you match existing finishes?", a: "Yes, our carpenters carry stain and lacquer kits to match existing woodwork on-site." },
    ],
  },
  {
    slug: "drainage",
    index: "06",
    name: "Drainage",
    shortName: "Drainage",
    tagline: "Cleared, cleaned, certified.",
    description:
      "Blocked drains, slow runoff, foul smells — high-pressure jetting, CCTV inspection, and root-cause repair from teams that know Dubai's stack systems inside out.",
    hero: "Drainage problems, properly solved.",
    image: drainageImg,
    included: [
      "High-pressure jetting of stacks and waste lines",
      "CCTV drain survey and digital report",
      "Blockage clearance and root removal",
      "Manhole, gully and trap cleaning",
      "Odour treatment and follow-up inspection",
    ],
    faqs: [
      { q: "Do you provide a CCTV report?", a: "Yes — every survey includes a recorded walkthrough with annotated findings." },
      { q: "Can you handle commercial drainage?", a: "We serve restaurants, hotels and office towers with scheduled jetting programmes." },
    ],
  },
  {
    slug: "painting",
    index: "07",
    name: "Painting",
    shortName: "Painting",
    tagline: "Walls that look freshly poured.",
    description:
      "Interior repaints, feature walls, exterior coatings, wallpapering — by painters who prep properly, mask everything, and leave your home cleaner than they found it.",
    hero: "Repaints that look freshly poured.",
    image: paintingImg,
    included: [
      "Surface preparation, sanding and priming",
      "Two-coat interior emulsion application",
      "Feature wall and accent finishes",
      "Wallpaper supply and hanging",
      "Furniture and floor protection throughout",
    ],
    faqs: [
      { q: "Which paint brands do you use?", a: "Jotun, Dulux, and Caparol as standard. We're happy to apply specialty or imported paints you supply." },
      { q: "Do we need to move out?", a: "No. We work room-by-room with full dust and odour control so you can stay in the home throughout." },
    ],
  },
  {
    slug: "pools",
    index: "08",
    name: "Pools & Waterproofing",
    shortName: "Pools + Waterproofing",
    tagline: "Crystal pools. Sealed for good.",
    description:
      "Pool servicing, equipment repair, full waterproofing of balconies, bathrooms and roofs — protecting your property from Dubai's most expensive problem.",
    hero: "Pool care and waterproofing, done once, done right.",
    image: poolsImg,
    included: [
      "Weekly and monthly pool servicing plans",
      "Pump, filter and heater repair",
      "Water chemistry balancing and testing",
      "Bathroom, balcony and roof waterproofing",
      "Leak detection and membrane installation",
    ],
    faqs: [
      { q: "Do you offer pool service contracts?", a: "Yes — weekly, fortnightly or monthly plans with a dedicated technician and digital service log." },
      { q: "What's your waterproofing warranty?", a: "Membrane installations carry up to a 5-year workmanship warranty depending on the system specified." },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);