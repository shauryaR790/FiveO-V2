"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedGrid } from "./AnimatedGrid";
import { HeroNavbar } from "./HeroNavbar";
import { MagneticButton } from "./MagneticButton";
import { OrbitalGraphic } from "./OrbitalGraphic";
import { SplitHeadline } from "./SplitHeadline";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const reduce = useReducedMotion() === true;

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden bg-black text-cream"
    >
      <AnimatedGrid />

      <div
        className="pointer-events-none absolute inset-y-0 left-6 w-px bg-cream/[0.12] md:left-10"
        aria-hidden
      />

      <HeroNavbar />

      <div className="relative z-10 mx-auto min-h-0 max-w-[1400px] px-6 pb-20 pt-32 md:px-10 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12 lg:pb-28 lg:pt-28">
        {/* Headline */}
        <div className="relative z-20 min-w-0 max-w-3xl md:max-w-5xl lg:col-span-7 lg:max-w-none xl:col-span-7">
          <SplitHeadline />
        </div>

        {/* Orbit: centered in hero, large; absolute on lg+ so it sits in the middle of the section */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-10 flex min-w-0 justify-center sm:mt-12 lg:pointer-events-none lg:absolute lg:inset-0 lg:z-[5] lg:mt-0 lg:items-center lg:justify-center lg:px-6 xl:px-10"
        >
          <div className="aspect-square w-full max-w-[min(100%,28rem)] sm:max-w-[34rem] md:max-w-[40rem] lg:max-w-none lg:w-[min(88vw,48rem)] lg:translate-x-[100px] xl:w-[min(82vw,56rem)] 2xl:w-[min(78vw,68rem)]">
            <OrbitalGraphic />
          </div>
        </motion.div>

        {/* CTAs */}
        <div className="relative z-20 mt-10 flex max-w-3xl flex-col sm:mt-12 md:max-w-5xl lg:col-span-6 lg:mt-0 lg:max-w-none lg:pt-2 xl:col-span-7">
          <motion.div
            custom={reduce ? 0 : 0.72}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#cases" variant="solid" aria-label="View selected work">
              <span className="text-xl leading-none md:text-2xl">+</span>
              View work
            </MagneticButton>
            <MagneticButton href="#contact" variant="accent" aria-label="Start a project">
              <span className="text-xl leading-none md:text-2xl">+</span>
              Start a project
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
