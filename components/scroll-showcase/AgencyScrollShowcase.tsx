"use client";

import Image from "next/image";

import { ContainerScroll } from "@/components/scroll-showcase/ContainerScroll";

const SHOWCASE_IMAGE = "/websites-built/agency-showcase.png";

export function AgencyScrollShowcase() {
  return (
    <section
      aria-labelledby="scroll-showcase-heading"
      className="scroll-mt-28 bg-black pb-0 text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10 md:pt-14">
        <h2
          id="scroll-showcase-heading"
          className="section-title font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
        >
          Your web development agency for teams that design, build, and ship premium products
        </h2>
      </div>

      <ContainerScroll className="h-[26rem] pt-4 pb-0 md:h-[40rem] md:pt-6">
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
