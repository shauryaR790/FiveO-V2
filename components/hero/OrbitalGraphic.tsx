"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

import { whenLoaderDone } from "@/lib/loaderReady";

const CENTER = { x: 350, y: 350 };

/** Uniform spacing between the three orbit lines (reference: open, balanced rings). */
const RING_STEP = 102;

/** First orbit radius — leaves a large clear band around the center star. */
const R_INNER = 118;

/** Three circular radii: evenly stepped so bands don't crowd. */
const RADII = [
  R_INNER,
  R_INNER + RING_STEP,
  R_INNER + 2 * RING_STEP,
] as const;

type RingSpec = {
  r: (typeof RADII)[number];
  periodSec: number;
  /** One or more dots; phases in radians on that ring. */
  dotPhases: readonly number[];
};

/** Match reference layout: 1 · 1 · 3 dots; outer ring dots spaced 120°. */
const RINGS: readonly RingSpec[] = [
  { r: RADII[0], periodSec: 36, dotPhases: [0] },
  { r: RADII[1], periodSec: 46, dotPhases: [Math.PI / 2] },
  {
    r: RADII[2],
    periodSec: 58,
    dotPhases: [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3],
  },
];

function circleXY(θ: number, r: number) {
  return { x: r * Math.cos(θ), y: r * Math.sin(θ) };
}

function OrbitDot({
  r,
  periodSec,
  phase,
  reduce,
}: {
  r: number;
  periodSec: number;
  phase: number;
  reduce: boolean;
}) {
  const [pos, setPos] = useState(() => circleXY(phase, r));

  useEffect(() => {
    setPos(circleXY(phase, r));
  }, [phase, r]);

  useAnimationFrame((t) => {
    if (reduce) return;
    const secs = t / 1000;
    const θ = (secs * (2 * Math.PI)) / periodSec + phase;
    setPos(circleXY(θ, r));
  });

  return <circle r={5} fill="currentColor" cx={pos.x} cy={pos.y} />;
}

export function OrbitalGraphic() {
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = svgRef.current;
      if (!svg) return;

      const rings = svg.querySelectorAll<SVGCircleElement>("[data-orbit-ring]");

      if (reduce) {
        gsap.set(svg, { autoAlpha: 1 });
        return;
      }

      // Hidden until the loader hands off, then the system scales/spins into
      // place with the rings blooming outward.
      gsap.set(svg, { autoAlpha: 0, scale: 0.85, rotate: -8, transformOrigin: "50% 50%" });
      gsap.set(rings, { scale: 0, transformOrigin: "50% 50%" });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      tl.to(svg, { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.3 }).to(
        rings,
        { scale: 1, duration: 1.05, stagger: 0.14 },
        0.12,
      );

      const release = whenLoaderDone(() => tl.play());

      return () => {
        release();
        tl.kill();
        gsap.set([svg, rings], { clearProps: "all" });
      };
    },
    { dependencies: [reduce] },
  );

  useEffect(() => {
    if (reduce) return;

    const onMove = (event: PointerEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2;
      mx.set(nx);
      my.set(ny);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  const sprX = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.7 });
  const sprY = useSpring(my, { stiffness: 40, damping: 18, mass: 0.7 });

  const tiltX = useTransform(sprY, [-1, 1], [6, -6]);
  const tiltY = useTransform(sprX, [-1, 1], [-7, 7]);
  const liftX = useTransform(sprX, [-1, 1], [-12, 12]);
  const liftY = useTransform(sprY, [-1, 1], [-10, 10]);

  return (
    <motion.div
      className="relative mx-auto aspect-square h-full w-full text-cream/85"
      style={{
        rotateX: reduce ? 0 : tiltX,
        rotateY: reduce ? 0 : tiltY,
        x: reduce ? 0 : liftX,
        y: reduce ? 0 : liftY,
        transformPerspective: 900,
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 700 700"
        className="h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g transform={`translate(${CENTER.x} ${CENTER.y})`}>
          {RINGS.map((ring, i) => (
            <circle
              key={`ring-${ring.r}`}
              data-orbit-ring
              r={ring.r}
              stroke="currentColor"
              strokeWidth={1.12 - i * 0.04}
              opacity={0.5 + i * 0.12}
            />
          ))}
          {RINGS.flatMap((ring, ri) =>
            ring.dotPhases.map((phase, di) => (
              <OrbitDot
                key={`dot-${ri}-${di}-${ring.r}`}
                r={ring.r}
                periodSec={ring.periodSec}
                phase={phase}
                reduce={reduce}
              />
            )),
          )}
        </g>
        <g transform="translate(338 338)">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </motion.div>
  );
}
