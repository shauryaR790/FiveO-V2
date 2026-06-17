import { cn } from "@/lib/utils";

const PILLARS = [
  {
    n: "01",
    title: "Creative that stops the scroll",
    body: "Motion, typography, and brand worlds — we build interfaces people remember, not templates with your logo swapped in.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    n: "02",
    title: "One senior pod, zero handoff chaos",
    body: "Design, front-end, APIs, infra, and AI features stay in one brain trust — so your product doesn't fracture across vendors.",
    span: "",
    featured: false,
  },
  {
    n: "03",
    title: "Production is the baseline",
    body: "Preview deploys, typed codebases, observability, and rollback drills — shipping stays predictable, not heroic.",
    span: "",
    featured: false,
  },
  {
    n: "04",
    title: "AI wired to real systems",
    body: "LLM features launch with auth, evals, cost controls, and fallbacks your team can operate — not a demo that dies in staging.",
    span: "lg:col-span-2",
    featured: false,
  },
] as const;

type ProofPillarGridProps = {
  className?: string;
};

export function ProofPillarGrid({ className }: ProofPillarGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5",
        className,
      )}
    >
      {PILLARS.map((pillar) => (
        <article
          key={pillar.n}
          data-proof-pillar
          className={cn(
            "group relative overflow-hidden rounded-2xl p-6 ring-1 ring-white/10 will-change-transform sm:p-8",
            pillar.featured
              ? "bg-gradient-to-br from-manifesto/25 via-indigo-950/80 to-black sm:min-h-[280px]"
              : "bg-zinc-950/80",
            pillar.span,
          )}
        >
          {pillar.featured ? (
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/25 blur-3xl"
              aria-hidden
            />
          ) : null}

          <div className="relative z-10 flex h-full flex-col">
            <span className="font-mono text-xs font-medium tabular-nums tracking-widest text-cream/35">
              {pillar.n}
            </span>
            <h3 className="mt-4 text-xl font-normal leading-snug tracking-[-0.02em] text-cream sm:text-2xl md:text-[1.65rem]">
              {pillar.title}
            </h3>
            <p className="copy-accent mt-4 text-sm text-cream/65 sm:mt-5 sm:text-base md:text-[1.05rem] md:leading-[1.68]">
              {pillar.body}
            </p>

            <div
              className="mt-auto pt-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            >
              <span className="inline-block h-px w-12 bg-accent/70" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
