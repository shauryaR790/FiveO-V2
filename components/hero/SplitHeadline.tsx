"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Fragment, useRef } from "react";
import { useReducedMotion } from "framer-motion";

import { whenLoaderDone } from "@/lib/loaderReady";

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
      const root = wrapRef.current;
      if (!root) return;

      const lines = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".headline-line"),
      );
      if (!lines.length) return;

      if (reduce) {
        gsap.set(lines, { y: 0, autoAlpha: 1, clearProps: "all" });
        return;
      }

      gsap.set(lines, { y: 72, autoAlpha: 0 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.out" },
      });

      tl.to(lines, {
        y: 0,
        autoAlpha: 1,
        duration: 1.1,
        stagger: 0.16,
      });

      const release = whenLoaderDone(() => tl.play());

      return () => {
        release();
        tl.kill();
        gsap.set(lines, { clearProps: "all" });
      };
    },
    { scope: wrapRef, dependencies: [reduce] },
  );

  return (
    <h1
      ref={wrapRef}
      className="max-w-[min(100%,32ch)] overflow-hidden font-heading text-[clamp(3.75rem,11vw,9rem)] font-normal leading-[0.9] tracking-[-0.03em] text-cream md:max-w-[min(100%,36ch)] lg:max-w-[min(100%,40ch)]"
    >
      {headlineLines.map((line, lineIdx) => (
        <span
          key={`line-${lineIdx}`}
          className="headline-line block whitespace-nowrap opacity-0 will-change-transform"
        >
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
