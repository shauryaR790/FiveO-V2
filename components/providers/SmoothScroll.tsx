"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("lenis");

    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      touchMultiplier: 1.15,
      autoRaf: true,
    });

    const unsubscribeLenisScroll = lenis.on("scroll", ScrollTrigger.update);
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      unsubscribeLenisScroll();
      root.classList.remove("lenis");
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
