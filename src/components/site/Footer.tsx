import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-emerald-deep text-cream/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Eurots Dubai" className="h-14 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              The largest and most trusted independent home maintenance company in Dubai. Operating since 2008.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="rounded-full border border-gold/25 p-2.5 text-cream/80 hover:bg-gold hover:text-ink transition-colors">
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Services</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}` as "/services/ac"} className="text-cream/75 hover:text-gold transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Company</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/about/team" className="hover:text-gold transition-colors">Meet the Team</Link></li>
              <li><Link to="/about/careers" className="hover:text-gold transition-colors">Careers</Link></li>
              <li><Link to="/annual-contract/residential" className="hover:text-gold transition-colors">Residential Contracts</Link></li>
              <li><Link to="/annual-contract/commercial" className="hover:text-gold transition-colors">Commercial Contracts</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/compare" className="hover:text-gold transition-colors">How We Compare</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Reach Us</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-gold" /><a href={site.phoneHref} className="hover:text-gold transition-colors">{site.phoneDisplay}</a></li>
              <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-gold" /><a href={site.freephoneHref} className="hover:text-gold transition-colors">{site.freephoneDisplay}</a></li>
              <li className="flex items-start gap-3"><MessageCircle className="size-4 mt-0.5 text-gold" /><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{site.whatsappDisplay}</a></li>
              <li className="flex items-start gap-3"><Mail className="size-4 mt-0.5 text-gold" /><a href={site.emailHref} className="hover:text-gold transition-colors">{site.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-gold" /><span>{site.address.line1}<br />{site.address.line2}</span></li>
            </ul>
            <div className="mt-5 text-[11px] uppercase tracking-[0.25em] text-gold/80">Customer call centre · Open 24 hrs</div>
          </div>
        </div>

        <div className="mt-16 gold-rule" />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-cream/55">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <span>Dubai's largest independent maintenance company · Established 2008.</span>
        </div>
      </div>
    </footer>
  );
}