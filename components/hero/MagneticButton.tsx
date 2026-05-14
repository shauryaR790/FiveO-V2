"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "accent";
  className?: string;
  "aria-label"?: string;
};

const spring = { stiffness: 280, damping: 22, mass: 0.45 };

export function MagneticButton({
  href,
  children,
  variant = "solid",
  className = "",
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion() === true;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const onMove = useCallback(
    (event: React.PointerEvent<HTMLAnchorElement>) => {
      if (reduce) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const pull = 0.42;
      x.set((event.clientX - cx) * pull);
      y.set((event.clientY - cy) * pull);
    },
    [reduce, x, y],
  );

  const base =
    variant === "accent"
      ? "bg-accent text-white shadow-[0_0_40px_rgba(61,94,255,0.35)]"
      : "bg-cream text-ink";

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ x: sx, y: sy }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-base font-semibold tracking-tight transition-colors duration-300 md:text-lg md:px-9 md:py-4 ${base} ${className}`}
    >
      {children}
    </motion.a>
  );
}
