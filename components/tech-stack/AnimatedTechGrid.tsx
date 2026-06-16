"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { TECH_ROW_BOTTOM, TECH_ROW_TOP } from "@/lib/tech-stack-logos";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_COPIES = 6;

function MarqueeTrack({
  direction,
  children,
}: {
  direction: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden py-2">
      <div
        className={cn(
          "flex w-max will-change-transform backface-hidden",
          direction === "left" ? "tech-marquee--left" : "tech-marquee--right",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function TechMarqueeCells({
  items,
  rowKey,
}: {
  items: typeof TECH_ROW_TOP;
  rowKey: "top" | "bottom";
}) {
  const duplicated = Array.from({ length: MARQUEE_COPIES }, () => items).flat();
  return duplicated.map((item, i) => {
    const Icon = item.Icon;
    return (
      <div
        key={`${rowKey}-${item.name}-${i}`}
        data-tech-cell
        className="flex shrink-0 items-center justify-center px-3 sm:px-4"
        title={item.name}
      >
        <button
          type="button"
          data-tech-inner
          className="group flex cursor-pointer items-center justify-center p-2 sm:p-3"
          aria-label={item.name}
        >
          <Icon
            className="size-8 text-cream transition-colors duration-300 group-hover:text-white sm:size-10"
            aria-hidden
          />
        </button>
      </div>
    );
  });
}

type AnimatedTechGridProps = {
  className?: string;
};

export function AnimatedTechGrid({ className }: AnimatedTechGridProps) {
  const rowTop = TECH_ROW_TOP;
  const rowBottom = TECH_ROW_BOTTOM;
  const scopeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ac = new AbortController();
    const floatByInner = new Map<HTMLElement, gsap.core.Tween>();

    const stopFloat = (inner: HTMLElement) => {
      floatByInner.get(inner)?.kill();
      floatByInner.delete(inner);
    };

    const startFloat = (inner: HTMLElement, index: number) => {
      stopFloat(inner);
      const t = gsap.to(inner, {
        y: -6,
        duration: 2.2 + (index % 5) * 0.16,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: (index % 7) * 0.05,
      });
      floatByInner.set(inner, t);
    };

    const ctx = gsap.context(() => {
      const cells = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-tech-cell]"));
      const inners = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-tech-inner]"));

      if (reduced) {
        gsap.set([cells, inners], { clearProps: "all" });
        return;
      }

      gsap.set(cells, { opacity: 0, y: 28 });
      gsap.set(inners, { transformOrigin: "50% 50%" });

      const triggerEl = root.closest("section") ?? root;

      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 96%",
        once: true,
        onEnter: () => {
          gsap.to(cells, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.03,
            onComplete: () => {
              inners.forEach((inner, i) => startFloat(inner, i));
            },
          });
        },
      });

      ScrollTrigger.refresh();

      inners.forEach((inner) => {
        inner.addEventListener(
          "mouseenter",
          () => {
            stopFloat(inner);
            gsap.killTweensOf(inner);
            gsap.set(inner, { y: 0 });
            gsap.to(inner, {
              scale: 1.06,
              duration: 0.28,
              ease: "power2.out",
            });
          },
          { signal: ac.signal },
        );
        inner.addEventListener(
          "mouseleave",
          () => {
            gsap.to(inner, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                const i = inners.indexOf(inner);
                if (i >= 0) startFloat(inner, i);
              },
            });
          },
          { signal: ac.signal },
        );
      });
    }, root);

    return () => {
      ac.abort();
      floatByInner.forEach((t) => t.kill());
      floatByInner.clear();
      ctx.revert();
    };
  }, [rowTop, rowBottom]);

  return (
    <div ref={scopeRef} className={cn("w-full space-y-0", className)}>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <MarqueeTrack direction="right">
          <TechMarqueeCells items={rowTop} rowKey="top" />
        </MarqueeTrack>
        <MarqueeTrack direction="left">
          <TechMarqueeCells items={rowBottom} rowKey="bottom" />
        </MarqueeTrack>
      </div>
    </div>
  );
}
