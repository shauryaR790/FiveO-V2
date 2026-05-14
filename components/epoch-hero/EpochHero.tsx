"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4";

export function EpochHero() {
  return (
    <div
      className={cn(
        "relative flex h-[600px] w-full max-w-[1400px] flex-col overflow-hidden",
        "rounded-[48px] border border-white/10 bg-zinc-950",
        "shadow-[0_40px_100px_-20px_rgba(0,0,0,0.55)]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full scale-105 object-cover transition-transform duration-1000"
          aria-hidden
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Dark left scrim so cream type stays legible on the video */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-[min(100%,52rem)]",
          "bg-gradient-to-r from-black from-0% via-black/88 via-42% to-transparent to-100%",
        )}
        aria-hidden
      />

      <div className="relative z-20 flex flex-1 flex-col items-start px-8 pt-12 md:px-16 md:pt-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className={cn(
              "font-epoch-display text-[42px] font-black leading-[1.08] tracking-[-0.02em] text-cream md:text-[56px]",
            )}
          >
            Web, apps, and AI
            <br />
            engineered to scale
          </h1>
          <p
            className={cn(
              "font-epoch-sans mt-5 max-w-xl text-[14px] font-extrabold leading-relaxed text-cream/80 md:text-[15px]",
            )}
          >
            We design and ship production websites, customer-facing apps, backend services, and LLM-backed
            workflows—so your in-house team can focus on roadmap instead of duct tape.
          </p>
        </motion.div>
      </div>

      <motion.nav
        className={cn(
          "absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center",
          "rounded-full border border-white/15 bg-zinc-900/90 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
          "backdrop-blur-2xl",
        )}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Services navigation"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-950 text-sm text-cream shadow-sm">
          <span aria-hidden>✦</span>
        </div>
        <div className="flex items-center gap-1 px-2">
          <button
            type="button"
            className="rounded-full px-3 py-2 text-[12px] font-semibold text-cream/55 transition-colors hover:text-cream"
          >
            Services
          </button>
          <button
            type="button"
            className="rounded-full px-3 py-2 text-[12px] font-semibold text-cream/55 transition-colors hover:text-cream"
          >
            Stack
          </button>
        </div>
        <button
          type="button"
          className={cn(
            "flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[12px] font-semibold",
            "text-cream shadow-sm transition-all hover:border-cream/35 hover:bg-white/15",
          )}
        >
          Get in touch
          <ChevronRight className="h-3.5 w-3.5 opacity-90" aria-hidden strokeWidth={2.25} />
        </button>
      </motion.nav>
    </div>
  );
}
