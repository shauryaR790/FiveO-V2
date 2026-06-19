"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useRef } from "react";

const EMAIL = "hello@fiveo.studio";

const CHANNELS = [
  { label: "Book a call", value: "30-min intro", href: "#" },
  { label: "WhatsApp", value: "+1 (415) 555-0148", href: "#" },
  { label: "Location", value: "Remote · GMT-5 → GMT+5:30", href: undefined },
] as const;

const SOCIALS = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "GitHub", href: "#" },
] as const;

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function MagneticEmail() {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion() === true;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 20, mass: 0.5 });

  const onMove = useCallback(
    (event: React.PointerEvent<HTMLAnchorElement>) => {
      if (reduce) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((event.clientX - cx) * 0.18);
      y.set((event.clientY - cy) * 0.28);
    },
    [reduce, x, y],
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.a
      ref={ref}
      href={`mailto:${EMAIL}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ x: sx, y: sy }}
      className="group relative inline-flex w-full items-center justify-start"
      aria-label={`Email us at ${EMAIL}`}
    >
      <span className="font-heading block w-full break-words text-left text-[clamp(2.6rem,11vw,9rem)] uppercase leading-[0.9] tracking-[-0.02em] text-cream transition-colors duration-300 group-hover:text-white">
        {EMAIL}
      </span>
      <span
        className="pointer-events-none absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-cream/60 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 md:-bottom-4"
        aria-hidden
      />
    </motion.a>
  );
}

function Asterisk() {
  const reduce = useReducedMotion() === true;
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="size-6 text-cream/70 md:size-8"
      fill="currentColor"
      aria-hidden
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </motion.svg>
  );
}

function MarqueeStrip() {
  const reduce = useReducedMotion() === true;
  const items = Array.from({ length: 8 });
  return (
    <div className="relative z-10 -mx-6 mt-20 overflow-hidden border-t border-cream/15 py-5 md:-mx-10 md:mt-28 md:py-7">
      <motion.div
        className="flex w-max items-center gap-8 md:gap-12"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 2 }).flatMap((_, copy) =>
          items.map((__, i) => (
            <span
              key={`${copy}-${i}`}
              className="flex shrink-0 items-center gap-8 md:gap-12"
            >
              <span className="font-heading text-2xl uppercase tracking-[0.04em] text-cream/80 md:text-4xl">
                Start a project
              </span>
              <span className="text-cream/40">✦</span>
            </span>
          )),
        )}
      </motion.div>
    </div>
  );
}

export function ContactSection() {
  const reduce = useReducedMotion() === true;

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-black px-6 pt-20 text-cream md:px-10 md:pt-28 lg:pt-32"
      aria-labelledby="contact-heading"
    >
      {/* faint grid backdrop, echoing the hero */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245,240,232,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245,240,232,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1300px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: eyebrow + headline + intro */}
          <div className="lg:col-span-7">
            <motion.div
              custom={0}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-3"
            >
              <Asterisk />
              <span className="font-sans text-sm uppercase tracking-[0.28em] text-cream/55">
                (05) — Start a project
              </span>
            </motion.div>

            <motion.h2
              id="contact-heading"
              custom={0.08}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-10 max-w-5xl font-heading text-[clamp(3rem,9vw,8rem)] font-normal uppercase leading-[0.92] tracking-[-0.03em] text-cream"
            >
              Let&apos;s build something
            </motion.h2>

            <motion.p
              custom={0.16}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-7 max-w-xl font-body text-xl leading-relaxed text-cream/65 md:text-2xl"
            >
              Tell us what you&apos;re building. We reply to every serious inquiry
              within one business day — no forms, no funnels, just a conversation.
            </motion.p>
          </div>

          {/* Right: details, right-aligned, beside the title */}
          <motion.div
            custom={0.24}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start gap-10 text-left lg:col-span-5 lg:items-end lg:text-right"
          >
            <span className="inline-flex items-center gap-2.5 font-sans text-sm uppercase tracking-[0.2em] text-cream/70">
              <span className="relative flex size-2.5">
                {!reduce && (
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                )}
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
              </span>
              Available · Q3 2026
            </span>

            <ul className="w-full max-w-sm divide-y divide-cream/12">
              {CHANNELS.map((c) =>
                c.href ? (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-baseline justify-between gap-6 py-4 transition-colors"
                    >
                      <span className="font-sans text-sm uppercase tracking-[0.18em] text-cream/55 transition-colors group-hover:text-cream">
                        {c.label}
                      </span>
                      <span className="font-body text-lg text-cream/85 transition-colors group-hover:text-white md:text-xl">
                        {c.value}
                      </span>
                    </a>
                  </li>
                ) : (
                  <li
                    key={c.label}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <span className="font-sans text-sm uppercase tracking-[0.18em] text-cream/55">
                      {c.label}
                    </span>
                    <span className="font-body text-lg text-cream/85 md:text-xl">
                      {c.value}
                    </span>
                  </li>
                ),
              )}
            </ul>

            <div>
              <span className="font-sans text-sm uppercase tracking-[0.2em] text-cream/55">
                Elsewhere
              </span>
              <ul className="mt-4 flex flex-col gap-2.5 lg:items-end">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="group inline-flex items-center gap-2 font-body text-lg text-cream/75 transition-colors hover:text-white"
                    >
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Giant email centerpiece */}
        <motion.div
          custom={0.3}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 md:mt-24"
        >
          <MagneticEmail />
        </motion.div>
      </div>

      <MarqueeStrip />
    </section>
  );
}
