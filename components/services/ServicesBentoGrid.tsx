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
  colSpan?: number;
  hasPersistentHover?: boolean;
};

export const SERVICE_BENTO_ITEMS: ServiceBentoItem[] = [
  {
    title: "Web development & product builds",
    meta: "React · Next.js · TypeScript",
    description:
      "From marketing sites to complex apps—we architect, build, and ship fast, accessible experiences your team can own and extend.",
    icon: <Code2 className="size-4 text-sky-400" aria-hidden />,
    status: "Core",
    tags: ["Engineering", "Performance", "A11y"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "UI/UX & design systems",
    meta: "Figma → production",
    description:
      "Research-backed interfaces, design tokens, and component libraries so brand and product stay consistent as you scale.",
    icon: <Palette className="size-4 text-violet-400" aria-hidden />,
    status: "Design",
    tags: ["Product UI", "Prototypes"],
  },
  {
    title: "Technical consulting",
    meta: "Audits · workshops",
    description:
      "Code reviews, stack decisions, and roadmap sessions—we help you de-risk launches, tighten architecture, and plan hiring.",
    icon: <MessagesSquare className="size-4 text-amber-400" aria-hidden />,
    status: "Advisory",
    tags: ["Architecture", "CTO-for-hire"],
    colSpan: 2,
  },
  {
    title: "Support & retainers",
    meta: "SLAs available",
    description:
      "Monitoring, releases, and iterative improvements after launch—keep your site secure, fast, and aligned with the business.",
    icon: <LifeBuoy className="size-4 text-emerald-400" aria-hidden />,
    status: "Partnership",
    tags: ["Care plans", "Roadmaps"],
  },
];

type ServicesBentoGridProps = {
  items?: ServiceBentoItem[];
  className?: string;
};

export function ServicesBentoGrid({
  items = SERVICE_BENTO_ITEMS,
  className,
}: ServicesBentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5",
        className,
      )}
    >
      {items.map((item) => (
        <article
          key={item.title}
          data-service-card
          className={cn(
            "group relative flex flex-col overflow-hidden rounded-xl bg-zinc-900 p-6 ring-1 ring-white/10 will-change-transform md:p-7",
            "transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:ring-white/20",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && "ring-white/15",
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />

          <div className="relative flex flex-col gap-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex size-9 items-center justify-center rounded-md bg-white/[0.06] ring-1 ring-white/10">
                {item.icon}
              </div>
              <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream/50">
                {item.status}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-normal leading-snug tracking-[-0.02em] text-cream md:text-xl">
                {item.title}
                {item.meta ? (
                  <span className="mt-1 block font-sans text-sm font-normal text-cream/45">
                    {item.meta}
                  </span>
                ) : null}
              </h3>
              <p className="text-base leading-relaxed text-cream/60 md:text-[15px] md:leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.tags?.length ? (
              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.05] px-2 py-1 text-xs text-cream/45 ring-1 ring-white/8"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
