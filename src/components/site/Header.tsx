import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import logo from "@/assets/logo.png";

const navServiceLinks = services.map((s) => ({
  to: `/services/${s.slug}` as const,
  label: s.shortName,
}));

const contracts = [
  { to: "/annual-contract/residential", label: "Residential" },
  { to: "/annual-contract/commercial", label: "Commercial" },
];

const about = [
  { to: "/about", label: "Our Story" },
  { to: "/about/team", label: "Meet the Team" },
  { to: "/about/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { to: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="inline-flex items-center gap-1 px-1 py-2 text-sm tracking-wide uppercase text-cream/85 hover:text-gold transition-colors">
        {label}
        <ChevronDown className="size-3.5 opacity-70" />
      </button>
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -8, pointerEvents: "none" }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
      >
        <div className="min-w-[240px] rounded-2xl border border-gold/20 bg-emerald-deep/95 p-2 backdrop-blur-xl shadow-[var(--shadow-emerald)]">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="block rounded-xl px-4 py-2.5 text-sm text-cream/85 hover:bg-emerald/40 hover:text-gold transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(6,40,30,0.5)", "rgba(6,40,30,0.92)"]);
  const blur = useTransform(scrollY, [0, 120], ["blur(8px)", "blur(18px)"]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, backdropFilter: blur }}
        className="fixed top-0 inset-x-0 z-50 border-b border-gold/15"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link to="/" className="group flex items-center gap-3">
            <img src={logo} alt="Eurots Dubai" className="h-10 w-auto md:h-11" />
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-cream/50 group-hover:text-gold/80 transition-colors md:inline">
              Est. 2008
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Dropdown label="Services" items={navServiceLinks} />
            <Dropdown label="Annual Contract" items={contracts} />
            <Dropdown label="About" items={about} />
            <Link to="/faq" className="text-sm tracking-wide uppercase text-cream/85 hover:text-gold transition-colors">FAQ</Link>
            <Link to="/compare" className="text-sm tracking-wide uppercase text-cream/85 hover:text-gold transition-colors">How We Compare</Link>
            <Link to="/testimonials" className="text-sm tracking-wide uppercase text-cream/85 hover:text-gold transition-colors">Testimonials</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-wide text-cream hover:bg-gold hover:text-ink transition-colors md:inline-flex"
            >
              <Phone className="size-3.5" />
              {site.phoneDisplay}
            </a>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="rounded-full border border-cream/15 p-2 text-cream lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60] bg-emerald-deep/95 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20">
          <img src={logo} alt="Eurots Dubai" className="h-9 w-auto" />
          <button aria-label="Close" onClick={() => setMobileOpen(false)} className="rounded-full border border-cream/15 p-2 text-cream">
            <X className="size-5" />
          </button>
        </div>
        <nav className="px-6 py-8 space-y-6 overflow-y-auto h-[calc(100vh-72px)]">
          <MobileGroup title="Services" items={navServiceLinks} onClick={() => setMobileOpen(false)} />
          <MobileGroup title="Annual Contract" items={contracts} onClick={() => setMobileOpen(false)} />
          <MobileGroup title="About" items={about} onClick={() => setMobileOpen(false)} />
          <div className="space-y-3 pt-4 border-t border-gold/15">
            <Link to="/faq" onClick={() => setMobileOpen(false)} className="block text-cream/90 text-lg">FAQ</Link>
            <Link to="/compare" onClick={() => setMobileOpen(false)} className="block text-cream/90 text-lg">How We Compare</Link>
            <Link to="/testimonials" onClick={() => setMobileOpen(false)} className="block text-cream/90 text-lg">Testimonials</Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
}

function MobileGroup({ title, items, onClick }: { title: string; items: { to: string; label: string }[]; onClick: () => void }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">{title}</div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} onClick={onClick} className="block text-cream/90 text-lg hover:text-gold transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}