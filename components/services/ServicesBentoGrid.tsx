"use client";

import { Code2, LifeBuoy, MessagesSquare, Palette } from "lucide-react";

import { cn } from "@/lib/utils";

export type ServiceBentoItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
};

export const SERVICE_BENTO_ITEMS: ServiceBentoItem[] = [
  {
    title: "Web development & product builds",
    meta: "React · Next.js · TypeScript",
    description:
      "From marketing sites to complex apps—we architect, build, and ship fast, accessible experiences your team can own and extend.",
    icon: <Code2 className="size-4 text-sky-500" aria-hidden />,
    status: "Core",
    tags: ["Engineering", "Performance", "A11y"],
    colSpan: 2,
    hasPersistentHover: true,
    cta: "Capabilities →",
  },
  {
    title: "UI/UX & design systems",
    meta: "Figma → production",
    description:
      "Research-backed interfaces, design tokens, and component libraries so brand and product stay consistent as you scale.",
    icon: <Palette className="size-4 text-violet-500" aria-hidden />,
    status: "Design",
    tags: ["Product UI", "Prototypes"],
    cta: "Process →",
  },
  {
    title: "Technical consulting",
    meta: "Audits · workshops",
    description:
      "Code reviews, stack decisions, and roadmap sessions—we help you de-risk launches, tighten architecture, and plan hiring.",
    icon: <MessagesSquare className="size-4 text-amber-500" aria-hidden />,
    status: "Advisory",
    tags: ["Architecture", "CTO-for-hire"],
    colSpan: 2,
    cta: "Engage us →",
  },
  {
    title: "Support & retainers",
    meta: "SLAs available",
    description:
      "Monitoring, releases, and iterative improvements after launch—keep your site secure, fast, and aligned with the business.",
    icon: <LifeBuoy className="size-4 text-emerald-500" aria-hidden />,
    status: "Partnership",
    tags: ["Care plans", "Roadmaps"],
    cta: "Retainers →",
  },
];

type ServicesBentoGridProps = {
  items?: ServiceBentoItem[];
  className?: string;
};

/**
 * Card layout (strict order, matches FiveO-V3 bento):
 * 1. Icon (top-left) + category pill (top-right)
 * 2. Title + meta subtitle (same line)
 * 3. Description
 * 4. Tags (+ hover CTA from source)
 */
export function ServicesBentoGrid({
  items = SERVICE_BENTO_ITEMS,
  className,
}: ServicesBentoGridProps) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          data-bento-card
          className={cn(
            "group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 p-4 transition-all duration-300",
            "hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(255,255,255,0.06)]",
            "will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover &&
              "-translate-y-0.5 shadow-[0_2px_12px_rgba(255,255,255,0.06)]",
          )}
        >
          {/* Dot grid texture */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            {/* 1 — icon + 2 — category */}
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-white/[0.08] group-hover:to-white/[0.04]">
                {item.icon}
              </div>
              <span className="rounded-lg bg-white/[0.06] px-2 py-1 text-xs font-medium text-cream/50 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/[0.09]">
                {item.status}
              </span>
            </div>

            {/* 3 — title + inline meta */}
            <div className="space-y-2">
              <h3 className="text-[15px] font-medium tracking-tight text-cream">
                {item.title}
                {item.meta ? (
                  <span className="ml-2 text-xs font-normal text-cream/45">{item.meta}</span>
                ) : null}
              </h3>

              {/* 4 — description */}
              <p className="text-sm leading-snug text-cream/50">{item.description}</p>
            </div>

            {/* 5 — tags */}
            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 text-xs text-cream/45">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.06] px-2 py-1 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.09]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-cream/45 opacity-0 transition-opacity group-hover:opacity-100">
                {item.cta ?? "Learn more →"}
              </span>
            </div>
          </div>

          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent p-px",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-300",
            )}
            aria-hidden
          />
        </article>
      ))}
    </div>
  );
}
