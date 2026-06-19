import { AnimatedGrid } from "@/components/hero/AnimatedGrid";
import { AnimatedTechGrid } from "@/components/tech-stack/AnimatedTechGrid";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-black pb-14 pt-20 text-cream md:pb-20 md:pt-28 lg:pt-32"
      aria-labelledby="tech-stack-heading"
    >
      <AnimatedGrid />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <h2
          id="tech-stack-heading"
          className="section-title font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
        >
          The stack behind everything we{" "}
          <span className="text-cream">ship</span>
        </h2>

        <AnimatedTechGrid className="mt-10 md:mt-12" />
      </div>
    </section>
  );
}
