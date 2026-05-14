"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SITE_NAV_LINKS } from "@/lib/site-nav";
import { LogoMark } from "./LogoMark";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Past ~one viewport: hide bar on scroll down, reveal on scroll up. Still in hero: always visible. */
const SCROLL_DELTA_MIN = 8;

function useNavbarScrollHidden(reduceMotion: boolean) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const heroThreshold = useRef(720);

  useEffect(() => {
    const updateHeroThreshold = () => {
      heroThreshold.current = Math.max(Math.round(window.innerHeight * 0.92), 560);
    };
    updateHeroThreshold();
    lastY.current = scrollY.get();
    window.addEventListener("resize", updateHeroThreshold, { passive: true });
    return () => window.removeEventListener("resize", updateHeroThreshold);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (reduceMotion) {
      setHidden(false);
      return;
    }

    const prev = lastY.current;
    const diff = latest - prev;
    lastY.current = latest;

    if (latest < heroThreshold.current) {
      setHidden(false);
      return;
    }

    if (Math.abs(diff) < SCROLL_DELTA_MIN) return;

    if (diff > 0) setHidden(true);
    else setHidden(false);
  });

  return hidden;
}

export function HeroNavbar() {
  const reduce = useReducedMotion() === true;
  const hidden = useNavbarScrollHidden(reduce);

  return (
    <motion.header
      initial={reduce ? false : { y: -12 }}
      animate={{ y: reduce ? 0 : hidden ? "-100%" : 0 }}
      transition={{
        duration: reduce ? 0 : hidden ? 0.42 : 0.72,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="isolate fixed inset-x-0 top-0 z-[100] border-b border-white/[0.1] bg-black will-change-transform"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-cream"
          aria-label="FiveO home"
        >
          <LogoMark className="text-cream transition-transform duration-500 group-hover:rotate-45" size={24} />
          <span className="font-heading text-lg font-normal tracking-[-0.02em] md:text-xl">
            FiveO
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {SITE_NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              custom={i}
              variants={navItem}
              initial="hidden"
              animate="show"
              href={link.href}
              className="flex items-center gap-1 text-[15px] font-medium tracking-tight text-cream md:text-base"
            >
              {link.label}
              {"chevron" in link && link.chevron ? (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="mt-0.5 opacity-70"
                  aria-hidden
                >
                  <path
                    d="M2.5 3.25L5 5.75L7.5 3.25"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />
                </svg>
              ) : null}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          variants={navItem}
          custom={SITE_NAV_LINKS.length}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold tracking-tight text-white shadow-[0_0_32px_rgba(61,94,255,0.35)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_48px_rgba(61,94,255,0.5)] md:px-6 md:py-3.5 md:text-base"
        >
          <span className="text-lg leading-none md:text-xl">+</span>
          Start a project
        </motion.a>
      </div>
    </motion.header>
  );
}
