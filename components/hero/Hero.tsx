"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedGrid } from "./AnimatedGrid";
import { HeroNavbar } from "./HeroNavbar";
import { MagneticButton } from "./MagneticButton";
import { OrbitalGraphic } from "./OrbitalGraphic";
import { SplitHeadline } from "./SplitHeadline";
import { whenLoaderDone } from "@/lib/loaderReady";

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
  const [ready, setReady] = useState(false);

  useEffect(() => whenLoaderDone(() => setReady(true)), []);

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-x-clip bg-black text-cream"
    >
      <AnimatedGrid />

      <div
        className="pointer-events-none absolute inset-y-0 left-6 w-px bg-cream/[0.12] md:left-10"
        aria-hidden
      />

      <HeroNavbar />

      {/* Desktop orbit — GSAP entrance after loader */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[8] hidden items-center justify-end pr-4 sm:pr-6 md:pr-8 lg:flex xl:pr-10">
        <div className="aspect-square w-[min(80vw,52rem)] shrink-0 xl:w-[min(74vw,60rem)] 2xl:w-[min(68vw,68rem)]">
          <OrbitalGraphic />
        </div>
      </div>

      <div className="relative z-10 mx-auto min-h-[100dvh] max-w-[1400px] px-6 pb-20 pt-32 md:px-10 lg:pb-28 lg:pt-28">
        <div className="flex max-w-3xl flex-col gap-10 sm:gap-12 md:max-w-5xl lg:max-w-[52%] xl:max-w-[48%]">
          <SplitHeadline />

          {/* Mobile / tablet orbit */}
          <div className="flex justify-center lg:hidden">
            <div className="aspect-square w-full max-w-[min(100%,28rem)] sm:max-w-[34rem] md:max-w-[40rem]">
              <OrbitalGraphic />
            </div>
          </div>

          <motion.div
            custom={reduce ? 0 : 0.35}
            variants={fadeUp}
            initial="hidden"
            animate={reduce || ready ? "show" : "hidden"}
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
