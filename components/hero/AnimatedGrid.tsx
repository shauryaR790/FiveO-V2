"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedGrid() {
  const reduce = useReducedMotion() === true;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-[-100%] opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245,240,232,0.55) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245,240,232,0.55) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
        initial={{ x: 0, y: 0 }}
        animate={
          reduce
            ? { x: 0, y: 0 }
            : {
                x: [0, 72],
                y: [0, 72],
              }
        }
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 28, repeat: Infinity, ease: "linear" }
        }
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
    </div>
  );
}
