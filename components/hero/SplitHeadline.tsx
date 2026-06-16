"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Fragment, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const headlineLines: { text: string; serif?: boolean }[][] = [
  [{ text: "We" }, { text: "ship" }],
  [{ text: "premium" }, { text: "web", serif: true }],
  [{ text: "apps", serif: true }, { text: "and" }],
  [{ text: "AI" }, { text: "products" }],
];

export function SplitHeadline() {
  const wrapRef = useRef<HTMLHeadingElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  useGSAP(
    () => {
      const inner = gsap.utils.toArray<HTMLElement>(".headline-word-inner");
      if (!inner.length) return;

      if (reduce) {
        gsap.set(inner, { yPercent: 0, opacity: 1, clearProps: "transform" });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.08,
      });

      tl.from(inner, {
        yPercent: 115,
        duration: 1.05,
        stagger: {
          each: 0.07,
          from: "start",
        },
      });

      return () => {
        tl.kill();
        gsap.set(inner, { clearProps: "transform" });
      };
    },
    { scope: wrapRef, dependencies: [reduce] },
  );

  return (
    <h1
      ref={wrapRef}
      className="max-w-[min(100%,32ch)] font-heading text-[clamp(3.75rem,11vw,9rem)] font-normal leading-[0.9] tracking-[-0.03em] text-cream md:max-w-[min(100%,36ch)] lg:max-w-[min(100%,40ch)]"
    >
      {headlineLines.map((line, lineIdx) => (
        <span key={`line-${lineIdx}`} className="block whitespace-nowrap">
          {line.map((piece, idx) => (
            <Fragment key={`${piece.text}-${lineIdx}-${idx}`}>
              <span className="headline-word inline-block overflow-hidden align-baseline">
                <span
                  className={`headline-word-inner inline-block will-change-transform ${piece.serif ? "font-serif-accent italic font-normal tracking-tight" : ""}`.trim()}
                >
                  {piece.text}
                </span>
              </span>
              {idx < line.length - 1 ? " " : null}
            </Fragment>
          ))}
        </span>
      ))}
    </h1>
  );
}
