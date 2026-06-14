"use client";

import Image from "next/image";

import { ContainerScroll } from "@/components/scroll-showcase/ContainerScroll";

const SHOWCASE_IMAGE = "/websites-built/12.png";

export function AgencyScrollShowcase() {
  return (
    <section
      aria-labelledby="scroll-showcase-heading"
      className="border-t border-white/10 bg-black pb-[30px] text-cream"
    >
      <ContainerScroll
        titleComponent={
          <h2
            id="scroll-showcase-heading"
            className="text-balance uppercase text-cream [word-spacing:-0.08em]"
          >
            <span className="block text-sm font-bold tracking-[0.22em] text-cream md:text-base">
              FiveO — design, build, ship
            </span>
            <span className="mt-3 block font-heading text-[clamp(3rem,8.5vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.04em] text-cream md:mt-4">
              <span className="block">Your web</span>
              <span className="block">development</span>
              <span className="block">agency</span>
            </span>
          </h2>
        }
      >
        <Image
          src={SHOWCASE_IMAGE}
          alt="Recent web project delivered by FiveO"
          height={684}
          width={1070}
          className="mx-auto h-full w-full rounded-xl object-cover object-left-top md:rounded-2xl"
          draggable={false}
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      </ContainerScroll>
    </section>
  );
}
