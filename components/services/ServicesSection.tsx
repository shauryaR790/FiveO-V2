"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

import { ServicesBentoGrid } from "@/components/services/ServicesBentoGrid";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
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
        gsap.set(".services-section-title", { opacity: 1, y: 0, clearProps: "all" });
        gsap.set("[data-bento-card]", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set(".services-section-title", { opacity: 0, y: 48 });
      gsap.set("[data-bento-card]", { opacity: 0, y: 56 });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      titleTl.to(".services-section-title", {
        opacity: 1,
        y: 0,
        duration: 0.95,
      });

      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: "top 96%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      cardsTl.to("[data-bento-card]", {
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
      id="services"
      className="scroll-mt-28 bg-black py-16 text-cream md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2
          id="services-heading"
          className="services-section-title section-title font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream will-change-transform xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
        >
          FiveO ships{" "}
          <span className="text-cream">web products</span> and AI
        </h2>

        <div ref={gridRef}>
          <ServicesBentoGrid className="mt-12 lg:mt-14" />
        </div>
      </div>
    </section>
  );
}
