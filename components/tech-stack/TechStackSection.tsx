import { AnimatedTechGrid } from "@/components/tech-stack/AnimatedTechGrid";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="bg-black py-14 text-cream md:py-20"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2
          id="tech-stack-heading"
          className="max-w-6xl font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
        >
          Technologies we{" "}
          <span className="font-serif-accent font-normal italic text-cream">work with</span>
        </h2>

        <AnimatedTechGrid className="mt-10 md:mt-12" />
      </div>
    </section>
  );
}
