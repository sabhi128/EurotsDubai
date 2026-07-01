import heroImg from "@/assets/hero-home.jpg";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { MagneticLink } from "@/components/ui/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.75]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-emerald-deep text-cream">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        {/* Left text */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex flex-col justify-center px-6 pt-32 pb-16 lg:px-16 lg:pt-40"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 self-start rounded-full border border-gold/40 bg-emerald/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
          >
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            Dubai · Established 2008
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            The most trusted{" "}
            <span className="italic font-light text-gold">independent</span>{" "}
            home maintenance company in Dubai.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-lg text-base leading-relaxed text-cream/75 lg:text-lg"
          >
            From AC servicing to plumbing, painting and pools — one call, one team, one standard. We get the job right the first time, with parts and service warranty in writing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticLink to="/annual-contract/residential" variant="gold">
              Book a service <ArrowRight className="size-4" />
            </MagneticLink>
            <MagneticLink to="/compare" variant="outline">
              How we compare
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex items-center gap-4 border-t border-gold/15 pt-6"
          >
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/70">
              Rated from <span className="text-gold font-semibold">2,000+</span> Google reviews
            </div>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <div className="relative h-[60vh] overflow-hidden lg:h-auto">
          <motion.img
            style={{ y: imgY }}
            src={heroImg}
            alt="Eurots Dubai technician at work in a Dubai villa"
            width={1280}
            height={1536}
            className="absolute inset-0 size-full object-cover scale-110"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-l from-emerald-deep/60 via-emerald-deep/20 to-emerald-deep"
          />
          {/* Gold rule frame */}
          <div className="pointer-events-none absolute inset-6 border border-gold/30" />
          {/* Floating trust card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-10 left-10 right-10 max-w-xs rounded-2xl border border-gold/25 bg-emerald-deep/85 p-5 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Since 2008</div>
            <div className="mt-2 font-display text-2xl font-bold text-cream">One number. Every fix.</div>
            <div className="mt-2 text-sm text-cream/70">
              Eight trades, one accountable team — no third parties, no excuses.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}