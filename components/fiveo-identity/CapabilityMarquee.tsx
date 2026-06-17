import { cn } from "@/lib/utils";

const CAPABILITIES = [
  "Web apps",
  "Marketing sites",
  "Design systems",
  "SaaS products",
  "E-commerce",
  "Mobile web",
  "LLM features",
  "Cloud APIs",
  "Motion UI",
  "Brand experiences",
  "Technical audits",
  "Launch retainers",
] as const;

function MarqueeRow({ suffix = "" }: { suffix?: string }) {
  return (
    <>
      {CAPABILITIES.map((item) => (
        <span
          key={`${item}${suffix}`}
          className="inline-flex shrink-0 items-center gap-5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-cream/55 md:text-xs"
        >
          {item}
          <span className="text-accent" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

type CapabilityMarqueeProps = {
  className?: string;
  direction?: "left" | "right";
};

export function CapabilityMarquee({ className, direction = "left" }: CapabilityMarqueeProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-white/[0.08] bg-white/[0.02] py-4 md:py-5",
        className,
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={cn(
          "studio-marquee-track flex w-max gap-8 md:gap-10",
          direction === "right" && "studio-marquee-track--reverse",
        )}
      >
        <div className="flex gap-8 pr-8 md:gap-10 md:pr-10">
          <MarqueeRow suffix="-a" />
        </div>
        <div className="flex gap-8 pr-8 md:gap-10 md:pr-10" aria-hidden>
          <MarqueeRow suffix="-b" />
        </div>
      </div>
    </div>
  );
}
