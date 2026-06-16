"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { cn } from "@/lib/utils";

const REVEAL_ITEMS = [
  {
    text: "STRATEGY",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80",
  },
  {
    text: "DESIGN",
    image:
      "https://images.unsplash.com/photo-1561070791-36c11767b862?w=900&auto=format&fit=crop&q=80",
  },
  {
    text: "BUILD",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=900&auto=format&fit=crop&q=80",
  },
  {
    text: "SCALE",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
  },
] as const;

const footerLinkClass = "text-sm text-zinc-500 transition-colors hover:text-zinc-200";

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      id="footer-contact"
      className={cn("border-t border-zinc-800 bg-black text-zinc-100", className)}
      aria-labelledby="site-footer-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-12 border-b border-zinc-800 px-6 py-14 sm:px-10 lg:border-b-0 lg:border-r lg:py-16">
          <div className="space-y-6">
            <h2
              id="site-footer-heading"
              className="max-w-xl font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
            >
              Sites that feel inevitable.
            </h2>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-zinc-400">
              FIVEO is a web development agency for teams that want sites and products that feel
              inevitable—crisp UX, resilient code, and launches your engineers can own.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Work">
              <Link href="#capabilities" className={footerLinkClass}>
                Capabilities
              </Link>
              <Link href="#contact" className={footerLinkClass}>
                Waitlist
              </Link>
              <Link href="#cases" className={footerLinkClass}>
                Case studies
              </Link>
            </FooterColumn>
            <FooterColumn title="Studio">
              <Link href="#manifesto" className={footerLinkClass}>
                About
              </Link>
              <Link href="#contact" className={footerLinkClass}>
                Careers
              </Link>
              <Link href="#footer-contact" className={footerLinkClass}>
                Contact
              </Link>
            </FooterColumn>
            <FooterColumn title="Legal" className="col-span-2 sm:col-span-1">
              <Link href="#contact" className={footerLinkClass}>
                Privacy
              </Link>
              <Link href="#contact" className={footerLinkClass}>
                Terms
              </Link>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 border-b border-zinc-800 px-6 py-14 sm:px-10 lg:border-b-0 lg:py-16">
          <div className="text-center">
            <p className="mx-auto max-w-xs font-heading text-base uppercase leading-tight tracking-[-0.02em] text-zinc-400 sm:text-lg">
              Hover the ring — each lane is how we ship.
            </p>
          </div>
          <CircularRevealHeading
            items={[...REVEAL_ITEMS]}
            size="md"
            className="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px]"
            centerText={
              <div className="text-center">
                <p className="font-heading text-3xl font-normal uppercase leading-none tracking-[-0.03em] text-white not-italic sm:text-4xl">
                  FiveO
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>© {new Date().getFullYear()} FIVEO. All rights reserved.</span>
          <span className="text-zinc-700">
            Web development agency — strategy, UI, and production code.
          </span>
        </div>
      </div>
    </footer>
  );
}
