"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

import { WebDevCraftGrid } from "@/components/web-dev-craft/WebDevCraftGrid";

gsap.registerPlugin(ScrollTrigger);

export function WebDevCraftSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  useGSAP(
    () => {
      const el = sectionRef.current;
      const grid = gridRef.current;
      if (!el || !grid) return;

      if (reduce) {
        gsap.set(".craft-section-eyebrow, .craft-section-title", { opacity: 1, y: 0, clearProps: "all" });
        gsap.set("[data-craft-card]", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set(".craft-section-eyebrow, .craft-section-title", { opacity: 0, y: 40 });
      gsap.set("[data-craft-card]", { opacity: 0, y: 56 });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      titleTl
        .to(".craft-section-eyebrow", { opacity: 1, y: 0, duration: 0.75 })
        .to(".craft-section-title", { opacity: 1, y: 0, duration: 0.9 }, "-=0.45");

      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: "top 96%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      cardsTl.to("[data-craft-card]", {
        opacity: 1,
        y: 0,
        duration: 0.82,
        stagger: 0.09,
      });

      return () => {
        titleTl.scrollTrigger?.kill();
        titleTl.kill();
        cardsTl.scrollTrigger?.kill();
        cardsTl.kill();
      };
    },
    { scope: sectionRef, dependencies: [reduce] },
  );

  return (
    <section
      ref={sectionRef}
      id="craft"
      className="scroll-mt-28 bg-black py-16 text-cream md:py-32"
      aria-labelledby="craft-heading"
    >
      <div className="mx-auto max-w-5xl px-6 lg:max-w-7xl xl:px-8">
        <p className="craft-section-eyebrow mb-4 text-center font-mono text-xs font-medium uppercase tracking-wider text-zinc-500 will-change-transform">
          Why teams hire FiveO
        </p>
        <h2
          id="craft-heading"
          className="craft-section-title section-title mb-14 max-w-6xl font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream will-change-transform xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
        >
          <span className="font-serif-accent font-normal italic text-cream">Web development craft</span> from
          strategy to <span className="font-serif-accent font-normal italic text-cream">shippable UI</span>
        </h2>
        <div ref={gridRef} className="relative">
          <WebDevCraftGrid />
        </div>
      </div>
    </section>
  );
}
