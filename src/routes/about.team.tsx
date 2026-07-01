import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team · Eurots Dubai Dubai" },
      { name: "description", content: "The leadership team behind Dubai's largest independent home maintenance company." },
    ],
  }),
  component: TeamPage,
});

type Person = { name: string; role: string; bio: string };

const founders: Person[] = [
  {
    name: "Colin Thomas",
    role: "Co-Founder & Managing Director",
    bio: "Colin co-founded Eurots Dubai in 2008 after years of frustration with the standard of home maintenance available in Dubai. He set the company's founding principles — turn up on time, fix it first time, stand behind every part — and they still guide every job we do today.",
  },
  {
    name: "Dan Garner",
    role: "Co-Founder & Operations Director",
    bio: "Dan oversees field operations across every Eurots Dubai team. From technician training to fleet logistics and the 24-hour customer-care centre, his focus is making sure the experience our customers receive in the home matches the promise they hear on the phone.",
  },
];

const leaders: Person[] = [
  {
    name: "Phillip Hamilton",
    role: "General Manager",
    bio: "Phillip leads the day-to-day running of the business — commercial strategy, supplier partnerships and the long-term planning that keeps the company growing without losing the standards it was founded on.",
  },
  {
    name: "Mary-Ann Reyes",
    role: "Head of Customer Care",
    bio: "Mary-Ann runs our 24-hour customer-care centre and quality team. Every job is followed up, every complaint reviewed, and every five-star review fed back to the technicians who earned it.",
  },
  {
    name: "Ahmed Faruq",
    role: "Head of HVAC & Technical Services",
    bio: "Ahmed leads our air-conditioning, duct and coil-cleaning specialists — the largest dedicated HVAC team in independent Dubai maintenance — and writes the 14-step service process every technician follows on site.",
  },
  {
    name: "Jonathan Pierce",
    role: "Head of Electrical, Plumbing & Handyman",
    bio: "Jonathan oversees the trades teams responsible for everything outside HVAC — from a single leaking tap to a full villa refit — ensuring the same standards of certification, finish and after-care across every department.",
  },
  {
    name: "Ria Santos",
    role: "Head of Contracts & Commercial",
    bio: "Ria looks after our annual-contract customers — residential and commercial — making sure scheduled visits land on time and that our 90-minute emergency response guarantee is honoured day or night.",
  },
];

function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-deep pt-36 pb-20 text-cream lg:pt-48">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-gold">Leadership</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">Meet the Team</h1>
          </Reveal>
          <Reveal delay={0.2}><div className="mt-8 gold-rule w-24" /></Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-cream/75">
              Behind every job is a leadership team with decades of combined experience in property, facilities and home services across the UAE.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="flex items-end justify-between gap-4 mb-10">
              <h2 className="font-display text-3xl font-extrabold lg:text-5xl">Founders</h2>
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-deep/60">Est. 2008</span>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {founders.map((p, i) => (
              <PersonCard key={p.name} person={p} delay={0.1 + i * 0.1} accent />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-deep text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold lg:text-5xl">Management</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((p, i) => (
              <PersonCard key={p.name} person={p} delay={0.05 + i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PersonCard({ person, delay = 0, accent = false }: { person: Person; delay?: number; accent?: boolean }) {
  const initials = person.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <Reveal delay={delay}>
      <div className={`group h-full rounded-3xl border p-8 transition-all hover:-translate-y-1 ${accent ? "border-emerald-deep/10 bg-cream shadow-[var(--shadow-soft)] text-ink" : "border-gold/20 bg-emerald-deep/50 text-cream"}`}>
        <div className={`grid size-16 place-items-center rounded-2xl font-display text-2xl font-bold ${accent ? "bg-emerald-deep text-gold" : "bg-gold text-ink"}`}>
          {initials}
        </div>
        <h3 className={`mt-6 font-display text-2xl font-bold ${accent ? "text-emerald-deep" : "text-cream"}`}>{person.name}</h3>
        <div className={`mt-1 text-xs uppercase tracking-[0.25em] ${accent ? "text-emerald-deep/60" : "text-gold"}`}>{person.role}</div>
        <p className={`mt-5 text-sm leading-relaxed ${accent ? "text-ink/75" : "text-cream/75"}`}>{person.bio}</p>
      </div>
    </Reveal>
  );
}
