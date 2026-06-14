import { AnimatedTechGrid } from "@/components/tech-stack/AnimatedTechGrid";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="bg-black py-14 text-cream md:py-20"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="mb-10 flex flex-col items-start gap-4 pb-8 md:mb-12 md:flex-row md:items-end md:justify-between md:pb-10">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-cream/40">
              Stack
            </p>
            <h2
              id="tech-stack-heading"
              className="mt-3 max-w-4xl font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
            >
              Technologies we work with
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-cream/45 md:text-right md:text-base">
            TypeScript-first tooling across the full product surface—frontends, APIs, data, and
            design.
          </p>
        </header>
      </div>

      <AnimatedTechGrid />
    </section>
  );
}
