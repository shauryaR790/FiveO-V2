"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { LogoMark } from "@/components/hero/LogoMark";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PAIN_CARDS = [
  {
    title: "Your roadmap lives in Figma, not in production",
    body: "Designs get approved, then stall while nobody owns front-end, APIs, hosting, and release checklists at the same time. The gap between mock and live product keeps widening.",
  },
  {
    title: "Every new feature means another contractor thread",
    body: "Mobile, web admin, billing, and analytics are handled by different shops. Context gets lost, interfaces drift apart, and simple changes take weeks of coordination.",
  },
  {
    title: "You bolted on AI without a real integration plan",
    body: "Demos looked slick, but prompts hit the wrong data, costs spike silently, and there is no eval harness or fallback when models misbehave in front of customers.",
  },
  {
    title: "Performance and accessibility are always “phase two”",
    body: "Lighthouse scores, keyboard flows, and error budgets wait until launch pressure hits. Then you are rewriting core routes instead of shipping the roadmap you sold.",
  },
  {
    title: "Releases feel risky because observability came last",
    body: "You push to production and hope the inbox stays quiet. Without tracing, structured logs, and alerts tied to business metrics, every deploy is a blind gamble.",
  },
] as const;

function PainCrossIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-5 text-cross"
      aria-hidden
    >
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ManifestoCardPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_20%_0%,rgba(147,112,219,0.35)_0%,transparent_55%),radial-gradient(ellipse_90%_70%_at_95%_100%,rgba(56,189,248,0.22)_0%,transparent_50%),linear-gradient(145deg,#120a3a_0%,#1e2a9e_42%,#0f1548_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[0.06]"
        aria-hidden
      />

      <div
        className="manifesto-drift-a absolute -left-[40%] top-[15%] h-[min(140%,42rem)] w-[min(140%,42rem)] rounded-full bg-[radial-gradient(closest-side,rgba(196,181,253,0.5),rgba(99,102,241,0.15)_42%,transparent_72%)] blur-3xl"
        style={{ animation: "manifesto-nebula-a 24s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="manifesto-drift-b absolute -right-[35%] bottom-[5%] h-[min(130%,36rem)] w-[min(130%,38rem)] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.45),rgba(59,130,246,0.12)_48%,transparent_74%)] blur-3xl"
        style={{ animation: "manifesto-nebula-b 28s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="manifesto-drift-c absolute left-[25%] top-[40%] h-[min(100%,24rem)] w-[min(110%,28rem)] rounded-full bg-[radial-gradient(closest-side,rgba(244,244,255,0.2),transparent_65%)] blur-2xl"
        style={{ animation: "manifesto-nebula-c 18s ease-in-out infinite" }}
        aria-hidden
      />

      <div
        className="absolute -left-[15%] -top-[18%] h-[14rem] w-[14rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.55),rgba(255,255,255,0.08)_38%,transparent_65%)] blur-2xl sm:h-[16rem] sm:w-[16rem]"
        aria-hidden
      />

      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "linear-gradient(118deg, transparent 0%, rgba(255,255,255,0.07) 42%, rgba(147,197,253,0.12) 52%, transparent 72%)",
        }}
        aria-hidden
      />

      <div
        className="manifesto-star-slow absolute -inset-[50%] opacity-[0.55]"
        style={{
          animation: "manifesto-starfield 240s linear infinite",
          backgroundImage: [
            "radial-gradient(1.5px 1.5px at 12% 18%, white, transparent)",
            "radial-gradient(1px 1px at 28% 42%, rgba(255,255,255,0.85), transparent)",
            "radial-gradient(1px 1px at 71% 22%, rgba(255,255,255,0.7), transparent)",
            "radial-gradient(1.2px 1.2px at 84% 56%, white, transparent)",
            "radial-gradient(0.8px 0.8px at 44% 78%, rgba(255,255,255,0.6), transparent)",
            "radial-gradient(1px 1px at 56% 12%, rgba(255,255,255,0.75), transparent)",
            "radial-gradient(1.3px 1.3px at 8% 66%, white, transparent)",
            "radial-gradient(0.9px 0.9px at 92% 88%, rgba(255,255,255,0.5), transparent)",
          ].join(", "),
          backgroundSize: "120% 120%",
        }}
        aria-hidden
      />

      <svg
        className="absolute -right-1/4 bottom-0 h-[130%] w-[130%] text-white/40"
        viewBox="0 0 500 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="manifesto-arm" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="35%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <filter id="manifesto-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
        </defs>
        <path
          d="M 420 300 C 320 240 280 120 120 80 C 60 62 20 70 -20 95"
          stroke="url(#manifesto-arm)"
          strokeWidth="1.4"
          strokeLinecap="round"
          filter="url(#manifesto-soft)"
          fill="none"
        />
        <path
          d="M 460 220 C 360 200 300 100 180 72 C 100 52 40 58 -10 88"
          stroke="url(#manifesto-arm)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.65"
          fill="none"
        />
        <path
          d="M 400 340 Q 260 220 140 140 Q 80 100 20 110"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeOpacity="0.22"
          fill="none"
        />
      </svg>

      <svg
        className="absolute right-0 top-1/2 h-[95%] w-[95%] -translate-y-1/2 text-white/30"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <radialGradient id="manifesto-orbit-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.35" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g transform="translate(200 200) rotate(-18)" opacity="0.9">
          <ellipse
            cx="0"
            cy="0"
            rx="150"
            ry="48"
            stroke="url(#manifesto-orbit-glow)"
            strokeWidth="1.2"
            strokeDasharray="1 12"
            strokeLinecap="round"
            opacity="0.5"
            fill="none"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="108"
            ry="36"
            stroke="white"
            strokeWidth="0.9"
            strokeDasharray="52 90"
            strokeLinecap="round"
            opacity="0.22"
            fill="none"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="72"
            ry="24"
            stroke="white"
            strokeWidth="0.75"
            strokeDasharray="38 70"
            strokeDashoffset="20"
            strokeLinecap="round"
            opacity="0.28"
            fill="none"
          />
        </g>
      </svg>

      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {[
          [8, 12, 0.9],
          [18, 28, 0.45],
          [22, 8, 0.55],
          [34, 44, 0.35],
          [48, 18, 0.65],
          [58, 62, 0.4],
          [72, 36, 0.5],
          [84, 74, 0.3],
          [92, 22, 0.7],
          [12, 52, 0.35],
          [38, 72, 0.45],
          [52, 88, 0.38],
          [68, 8, 0.5],
          [78, 54, 0.42],
          [94, 42, 0.55],
          [6, 78, 0.35],
          [44, 6, 0.48],
          [26, 94, 0.4],
          [88, 92, 0.32],
        ].map(([x, y, o], i) => (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={i % 4 === 0 ? 1.1 : 0.65}
            fill="white"
            opacity={o}
          />
        ))}
      </svg>

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] opacity-70"
        aria-hidden
      />
    </div>
  );
}

function ManifestoCard({ className = "" }: { className?: string }) {
  return (
    <article
      className={cn(
        "relative flex min-h-full flex-col overflow-hidden rounded-2xl bg-manifesto p-8 text-white shadow-lg shadow-indigo-950/25 ring-1 ring-white/20 md:min-h-[280px]",
        className,
      )}
    >
      <ManifestoCardPattern />

      <div className="relative z-10 shrink-0">
        <div className="relative inline-flex">
          <span
            className="absolute inset-0 -m-3 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,transparent_65%)] blur-md"
            aria-hidden
          />
          <LogoMark
            className="relative text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.65),0_0_48px_rgba(147,197,253,0.45)]"
            size={24}
          />
        </div>
      </div>

      <div className="relative z-10 mt-auto flex flex-col pt-10">
        <h3 className="max-w-[20ch] text-2xl font-normal leading-[1.08] tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-tight lg:text-4xl">
          Sound familiar? Here&apos;s our build philosophy.
        </h3>
        <a
          href="#manifesto"
          className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-white px-5 py-4 text-base font-semibold tracking-tight text-manifesto shadow-[0_8px_28px_rgba(0,0,0,0.18)] ring-1 ring-black/5 transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)] md:text-lg"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-manifesto text-xl font-light leading-none text-white md:h-10 md:w-10 md:text-2xl">
            +
          </span>
          Read our approach
        </a>
      </div>
    </article>
  );
}

export function DeliveryGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      if (reduce) {
        gsap.set(".delivery-grid-title", { opacity: 1, y: 0, clearProps: "all" });
        gsap.set(".delivery-grid-card", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set(".delivery-grid-title", { opacity: 0, y: 48 });
      gsap.set(".delivery-grid-card", { opacity: 0, y: 64 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(".delivery-grid-title", {
        opacity: 1,
        y: 0,
        duration: 0.95,
      }).to(
        ".delivery-grid-card",
        {
          opacity: 1,
          y: 0,
          duration: 0.82,
          stagger: { each: 0.11, from: "start" },
        },
        "-=0.48",
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [reduce] },
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="scroll-mt-28 border-t border-white/10 bg-black px-6 py-16 text-cream md:px-10 md:py-24"
      aria-labelledby="delivery-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2
          id="delivery-heading"
          className="delivery-grid-title max-w-6xl text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream will-change-transform xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
        >
          Your stack is ambitious. Your{" "}
          <span className="font-serif-accent font-normal italic text-cream">shipping rhythm</span> isn&apos;t.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {PAIN_CARDS.map((card) => (
            <article
              key={card.title}
              className="delivery-grid-card flex flex-col rounded-xl bg-zinc-900 p-8 ring-1 ring-white/10 will-change-transform"
            >
              <PainCrossIcon />
              <h3 className="text-2xl font-normal leading-snug tracking-[-0.02em] text-cream md:text-3xl lg:text-[2rem]">
                {card.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-cream/65 md:text-xl md:leading-relaxed">
                {card.body}
              </p>
            </article>
          ))}

          <ManifestoCard className="delivery-grid-card" />
        </div>
      </div>
    </section>
  );
}
