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
};

export const SERVICE_BENTO_ITEMS: ServiceBentoItem[] = [
  {
    title: "Web development & product builds",
    meta: "React · Next.js · TypeScript",
    description:
      "From marketing sites to complex apps—we architect, build, and ship fast, accessible experiences your team can own and extend. You get typed components, preview deploys on every PR, and clean handoffs so nothing lives only in our heads. The goal is a codebase your engineers still trust six months after launch—not a demo that collapses the first time you scale traffic.",
    icon: <Code2 className="size-5 text-cream md:size-6" aria-hidden />,
    status: "Core",
    tags: ["Engineering", "Performance", "A11y"],
    colSpan: 2,
    cta: "Capabilities →",
  },
  {
    title: "UI/UX & design systems",
    meta: "Figma → production",
    description:
      "Research-backed interfaces, design tokens, and component libraries so brand and product stay consistent as you scale.",
    icon: <Palette className="size-5 text-cream md:size-6" aria-hidden />,
    status: "Design",
    tags: ["Product UI", "Prototypes"],
    cta: "Process →",
  },
  {
    title: "Technical consulting",
    meta: "Audits · workshops",
    description:
      "Code reviews, stack decisions, and roadmap sessions—we help you de-risk launches, tighten architecture, and plan hiring. We map integration seams before they become blockers, flag performance and security debt early, and translate options into calls your team can make this quarter. Need a one-off audit or a standing partner in the room? Either way you leave with next steps—not slides that never ship.",
    icon: <MessagesSquare className="size-5 text-cream md:size-6" aria-hidden />,
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
    icon: <LifeBuoy className="size-5 text-cream md:size-6" aria-hidden />,
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
        "grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-7",
        className,
      )}
    >
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          data-bento-card
          className={cn(
            "group relative flex min-h-[15rem] flex-col overflow-hidden rounded-xl bg-zinc-900 p-6 ring-1 ring-white/10 will-change-transform md:min-h-[17rem] md:p-8 lg:min-h-[18rem] lg:p-9",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
          )}
        >
          <div className="flex h-full flex-col space-y-5 md:space-y-6">
            {/* 1 — icon + 2 — category */}
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 md:h-12 md:w-12">
                {item.icon}
              </div>
              <span className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm font-medium text-cream/50">
                {item.status}
              </span>
            </div>

            {/* 3 — title + inline meta */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl font-medium leading-snug tracking-tight text-cream md:text-2xl md:leading-snug">
                {item.title}
                {item.meta ? (
                  <span className="ml-2 font-body text-sm font-normal text-cream/45 md:ml-3 md:text-base">
                    {item.meta}
                  </span>
                ) : null}
              </h3>

              {/* 4 — description */}
              <p className="text-base text-cream/50 md:text-lg">
                {item.description}
              </p>
            </div>

            {/* 5 — tags */}
            <div className="mt-auto flex items-center justify-between pt-2 md:pt-3">
              <div className="flex flex-wrap items-center gap-2.5 text-sm text-cream/45 md:gap-3">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 md:px-3.5 md:py-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-sm text-cream/45 opacity-0 transition-opacity group-hover:opacity-100 md:text-base">
                {item.cta ?? "Learn more →"}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
