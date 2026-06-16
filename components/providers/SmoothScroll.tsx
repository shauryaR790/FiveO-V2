"use client";

import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const reduceMotion = useReducedMotion() === true;

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.15,
      wheelMultiplier: 1,
      autoRaf: false,
      anchors: true,
    });

    const onScroll = () => ScrollTrigger.update();
    const unsubscribeScroll = lenis.on("scroll", onScroll);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("resize", refresh);
    window.addEventListener("load", refresh);

    return () => {
      unsubscribeScroll();
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
    };
  }, [reduceMotion]);

  return <>{children}</>;
}
