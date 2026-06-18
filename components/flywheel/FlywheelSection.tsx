import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Joint workshops, UX flows, and technical discovery that lock architecture, integrations, and risk before we write production code.",
  },
  {
    n: "02",
    title: "Build",
    body: "Iterative engineering across web, mobile, APIs, and AI features—reviews, automated tests, and weekly demos your stakeholders can trust.",
  },
  {
    n: "03",
    title: "Ship",
    body: "Hardening, staged rollouts, observability, and tuning after go-live—so performance, security, and model behavior stay measurable.",
  },
] as const;

export function FlywheelSection() {
  return (
    <section
      id="resources"
      className="scroll-mt-28 border-t border-black/[0.06] bg-[#f5f2e9] px-6 py-16 md:px-10 md:py-20 lg:py-24"
      aria-labelledby="flywheel-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-2 md:items-end md:gap-12 lg:gap-20">
          <h2
            id="flywheel-heading"
            className="max-w-6xl font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-ink xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
          >
            A flywheel. not a{" "}
            <span className="text-ink">funnel</span>
          </h2>
          <p className="max-w-md text-base text-ink md:justify-self-end md:text-left md:text-lg lg:max-w-lg lg:text-xl">
            Discovery, build, and ship stay connected—each release feeds data and insight back into the next
            sprint instead of freezing the product in a one-and-done handoff.
          </p>
        </div>

        <div className="mt-10 border-t border-black/10 md:mt-14 lg:mt-16">
          <div className="grid grid-cols-1 divide-y divide-black/10 md:grid-cols-3 md:divide-x md:divide-y-0 md:divide-black/10">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={cn(
                  "py-10 md:py-12 lg:py-14",
                  i === 0 && "md:pr-8 lg:pr-12",
                  i === 1 && "md:px-8 lg:px-12",
                  i === 2 && "md:pl-8 lg:pl-12",
                )}
              >
                <div className="flex items-baseline gap-5">
                  <span className="shrink-0 font-sans text-base font-medium tabular-nums tracking-wide text-ink/35 md:text-lg">
                    {step.n}
                  </span>
                  <h3 className="font-heading text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-6 text-lg text-ink md:text-xl">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
