"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

import { CapabilityMarquee } from "@/components/fiveo-identity/CapabilityMarquee";
import { ProofPillarGrid } from "@/components/fiveo-identity/ProofPillarGrid";
import { LogoMark } from "@/components/hero/LogoMark";

gsap.registerPlugin(ScrollTrigger);

function StudioWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-[8%] top-1/2 -translate-y-1/2 select-none font-heading text-[clamp(14rem,42vw,28rem)] font-normal leading-none tracking-[-0.06em] text-white/[0.025]">
        05
      </div>
      <div className="absolute -right-[20%] top-[8%] h-[min(70vw,36rem)] w-[min(70vw,36rem)] rounded-full bg-[radial-gradient(closest-side,rgba(61,94,255,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute -bottom-[15%] left-[20%] h-[min(55vw,28rem)] w-[min(55vw,28rem)] rounded-full bg-[radial-gradient(closest-side,rgba(147,112,219,0.14),transparent_72%)] blur-3xl" />
    </div>
  );
}

export function FiveOIdentitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      if (reduce) {
        gsap.set(".studio-eyebrow, .studio-headline, .studio-lede, .studio-badge", {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        gsap.set("[data-proof-pillar]", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set(".studio-eyebrow, .studio-headline, .studio-lede, .studio-badge", {
        opacity: 0,
        y: 44,
      });
      gsap.set("[data-proof-pillar]", { opacity: 0, y: 56 });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      introTl
        .to(".studio-eyebrow", { opacity: 1, y: 0, duration: 0.7 })
        .to(".studio-headline", { opacity: 1, y: 0, duration: 0.95 }, "-=0.4")
        .to(".studio-lede", { opacity: 1, y: 0, duration: 0.85 }, "-=0.55")
        .to(".studio-badge", { opacity: 1, y: 0, duration: 0.75 }, "-=0.5");

      const pillarsTl = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-proof-pillar]",
          start: "top 94%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      pillarsTl.to("[data-proof-pillar]", {
        opacity: 1,
        y: 0,
        duration: 0.82,
        stagger: 0.1,
      });

      return () => {
        introTl.scrollTrigger?.kill();
        introTl.kill();
        pillarsTl.scrollTrigger?.kill();
        pillarsTl.kill();
      };
    },
    { scope: sectionRef, dependencies: [reduce] },
  );

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/10 bg-black text-cream"
      aria-labelledby="studio-heading"
    >
      <StudioWatermark />

      <CapabilityMarquee className="relative z-10" direction="left" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16 xl:gap-24">
          <div>
            <p className="studio-eyebrow mb-5 font-mono text-xs font-medium uppercase tracking-[0.32em] text-accent will-change-transform">
              Who we are
            </p>

            <h2
              id="studio-heading"
              className="studio-headline max-w-[14ch] font-heading text-[clamp(2.85rem,8.5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.035em] text-cream will-change-transform xl:text-[clamp(3.25rem,7vw,6rem)]"
            >
              We build{" "}
              <span className="font-serif-accent font-normal italic text-cream">creative af</span>{" "}
              sites — and ship them for real
            </h2>

            <p className="studio-lede copy-accent mt-8 max-w-xl text-base text-cream/72 will-change-transform md:mt-10 md:text-lg md:leading-[1.68] lg:max-w-2xl lg:text-xl">
              FiveO is the senior web studio founders call when the vision is bold but production keeps
              slipping. We design unforgettable experiences, engineer full-stack products and AI features,
              and own the launch — so what goes live matches what you sold.
            </p>
          </div>

          <div className="studio-badge relative will-change-transform lg:justify-self-end">
            <div className="relative mx-auto w-fit lg:mx-0">
              <div
                className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle,rgba(61,94,255,0.35)_0%,transparent_68%)] blur-2xl"
                aria-hidden
              />
              <div className="relative flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-zinc-950/90 px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:px-10 sm:py-12">
                <div className="relative">
                  <div
                    className="studio-orbit-ring absolute inset-0 -m-6 rounded-full border border-dashed border-white/15"
                    aria-hidden
                  />
                  <div
                    className="studio-orbit-ring studio-orbit-ring--reverse absolute inset-0 -m-10 rounded-full border border-white/10"
                    aria-hidden
                  />
                  <LogoMark
                    className="relative text-cream drop-shadow-[0_0_28px_rgba(61,94,255,0.55)]"
                    size={40}
                  />
                </div>

                <div className="text-center">
                  <p className="font-heading text-2xl tracking-[-0.02em] text-cream sm:text-3xl">
                    The OG
                  </p>
                  <p className="copy-accent mt-2 max-w-[18ch] text-sm text-cream/60 sm:text-base">
                    Senior-only pod. No junior roulette. No agency theater.
                  </p>
                </div>

                <dl className="grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                  {[
                    { label: "Discipline", value: "Ship" },
                    { label: "Stack", value: "Full" },
                    { label: "Bar", value: "Prod" },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-cream/40">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-heading text-lg text-cream sm:text-xl">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <ProofPillarGrid className="mt-14 md:mt-20 lg:mt-24" />
      </div>

      <CapabilityMarquee className="relative z-10" direction="right" />
    </section>
  );
}
