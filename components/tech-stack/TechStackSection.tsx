import { AnimatedTechGrid } from "@/components/tech-stack/AnimatedTechGrid";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="border-t border-white/10 bg-black py-14 text-cream md:py-20"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="mb-10 flex flex-col items-start gap-4 border-b border-white/10 pb-8 md:mb-12 md:flex-row md:items-end md:justify-between md:pb-10">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-cream/40">
              Stack
            </p>
            <h2
              id="tech-stack-heading"
              className="mt-3 font-heading text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[0.95] tracking-[-0.03em] text-cream"
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
