import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type Variant = "gold" | "outline" | "emerald";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  gold:
    "bg-gold text-ink hover:bg-gold-soft shadow-[var(--shadow-gold)]",
  outline:
    "border border-gold/60 text-cream hover:bg-gold hover:text-ink",
  emerald:
    "bg-emerald-deep text-cream hover:bg-emerald",
};

function useMagnetic() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { ref, sx, sy, onMove, onLeave };
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-colors duration-300";

export function MagneticLink({
  to,
  children,
  variant = "gold",
  className,
}: CommonProps & { to: string }) {
  const { ref, sx, sy, onMove, onLeave } = useMagnetic();
  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      <Link to={to} className={`${base} ${variants[variant]} ${className ?? ""}`}>
        {children}
      </Link>
    </motion.span>
  );
}

export function MagneticButton({
  children,
  variant = "gold",
  className,
  onClick,
}: CommonProps & { onClick?: () => void }) {
  const { ref, sx, sy, onMove, onLeave } = useMagnetic();
  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
    >
      {children}
    </motion.button>
  );
}