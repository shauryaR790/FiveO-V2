"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const METRICS = [
  { value: "14d", label: "Avg. kickoff" },
  { value: "Full-stack", label: "In-house team" },
  { value: "24/7", label: "Launch support" },
] as const;

const PHASES = [
  {
    step: "01",
    title: "Discover",
    detail: "Product strategy, UX flows, and a clear technical roadmap before a single line ships.",
  },
  {
    step: "02",
    title: "Engineer",
    detail: "Design systems, APIs, and performance-tuned builds — built to scale from day one.",
  },
  {
    step: "03",
    title: "Launch",
    detail: "Deploy, monitor, and iterate with analytics so your product keeps improving post-ship.",
  },
] as const;

const OUTCOMES = [
  "Premium UI that converts",
  "Fast, accessible front ends",
  "AI-ready architecture",
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease },
  }),
};

export function AgencyMobileShowcase() {
  const reduce = useReducedMotion() === true;

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-2" aria-label="How FiveO delivers">
      <motion.div
        custom={0}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUp}
        className="grid grid-cols-3 gap-2 border border-white/10 bg-zinc-950/80"
      >
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="border-r border-white/10 px-2 py-4 text-center last:border-r-0"
          >
            <p className="font-heading text-[clamp(1.1rem,4.5vw,1.35rem)] leading-none tracking-[-0.03em] text-cream">
              {metric.value}
            </p>
            <p className="mt-2 font-body text-[0.62rem] uppercase tracking-[0.14em] text-cream/55">
              {metric.label}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.p
        custom={0.08}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUp}
        className="mt-8 font-body text-[0.68rem] uppercase tracking-[0.2em] text-accent"
      >
        Delivery system
      </motion.p>

      <motion.h3
        custom={0.12}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUp}
        className="mt-2 font-heading text-[clamp(1.75rem,7vw,2.25rem)] leading-[1.05] tracking-[-0.03em] text-cream"
      >
        From brief to production in three focused phases
      </motion.h3>

      <div className="relative mt-8 space-y-3">
        <div
          className="pointer-events-none absolute bottom-4 left-[1.15rem] top-4 w-px bg-gradient-to-b from-accent/80 via-accent/30 to-transparent"
          aria-hidden
        />

        {PHASES.map((phase, index) => (
          <motion.article
            key={phase.step}
            custom={0.16 + index * 0.08}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            className="relative border border-white/10 bg-zinc-950/60 pl-10 pr-4 py-4"
          >
            <span
              className="absolute left-3 top-4 flex h-6 w-6 items-center justify-center border border-accent/50 bg-black font-body text-[0.58rem] font-medium text-accent"
              aria-hidden
            >
              {phase.step}
            </span>
            <h4 className="font-heading text-[1.15rem] tracking-[-0.02em] text-cream">{phase.title}</h4>
            <p className="mt-2 font-body text-[0.92rem] leading-relaxed text-cream/65">{phase.detail}</p>
          </motion.article>
        ))}
      </div>

      <motion.ul
        custom={0.42}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeUp}
        className="mt-8 flex flex-wrap gap-2"
        aria-label="What you get"
      >
        {OUTCOMES.map((outcome) => (
          <li
            key={outcome}
            className="border border-white/12 px-3 py-2 font-body text-[0.72rem] uppercase tracking-[0.12em] text-cream/80"
          >
            {outcome}
          </li>
        ))}
      </motion.ul>

      <motion.div
        custom={0.5}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeUp}
        className="mt-8"
      >
        <Link
          href="#contact"
          className="flex w-full items-center justify-between border border-accent bg-accent px-5 py-4 font-heading text-[1.05rem] tracking-[-0.02em] text-cream transition-colors active:bg-accent/90"
        >
          Start your project
          <span aria-hidden className="text-xl leading-none">
            →
          </span>
        </Link>
        <p className="mt-3 text-center font-body text-[0.78rem] text-cream/45">
          Free 30-min discovery call · No commitment
        </p>
      </motion.div>
    </div>
  );
}
