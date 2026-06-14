const TRUST_BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4";

const LEFT_CARDS = [
  "Every new sprint introduces a different contractor—and your codebase loses shared standards overnight.",
  "Web, mobile, and internal tools drift apart because nobody owns the full system diagram or release train.",
  "A flashy LLM demo ships, but it is not wired to auth, real data, evals, or cost controls—so production stays frozen.",
  "Performance, a11y, and security reviews are annual events instead of part of every merge—so launches feel scary.",
] as const;

const RIGHT_CARDS = [
  "One senior pod models APIs, frontends, infra, and analytics so interfaces stay coherent as features grow.",
  "We prototype in production-shaped environments—scope, risk, and integration seams surface before the big bet.",
  "CI, previews, observability, and rollback drills are baseline—shipping stays predictable instead of heroic.",
  "LLM features launch with guardrails, telemetry, eval harnesses, and sensible fallbacks your team can operate.",
] as const;

function IsolatedBadge() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-500/15 ring-1 ring-orange-400/25"
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 3l8 8M11 3L3 11"
          stroke="#fb923c"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function TrustEngineBadge() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-500/15 ring-1 ring-blue-400/25"
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 2.5v9M2.5 7h9"
          stroke="#60a5fa"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function SectionArc() {
  return (
    <svg
      className="pointer-events-none absolute top-0 right-0 z-[2] h-[min(115%,52rem)] w-[min(55%,28rem)] origin-right -scale-x-100 text-[#a896e8]/25 sm:w-[min(48%,34rem)] md:h-[min(125%,56rem)]"
      viewBox="0 0 320 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M340 8c-160 120-255 310-255 520s75 302 205 372"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function TrustComparisonSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/10 px-6 py-16 text-cream md:px-10 md:py-24"
      aria-labelledby="trust-comparison-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src={TRUST_BG_VIDEO} type="video/mp4" />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/50" aria-hidden />

      <SectionArc />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <header className="mx-auto max-w-4xl text-center">
          <h2
            id="trust-comparison-heading"
            className="section-title font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] tracking-[-0.03em] text-cream"
          >
            Stop relying on{" "}
            <span className="font-serif-accent font-normal italic text-cream">fragmented vendors</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-lg leading-relaxed text-cream/60 md:text-xl">
            You will not ship a cohesive product when websites, apps, APIs, and AI experiments are owned
            by teams that never share context. Integrated delivery is what turns roadmaps into releases.
          </p>
        </header>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-10 lg:gap-16">
          {/* Fragmented delivery */}
          <div>
            <div className="mb-8 text-center md:mb-10">
              <h3 className="font-heading text-2xl font-normal tracking-[-0.02em] text-cream md:text-3xl">
                Fragmented delivery
              </h3>
              <p className="mt-2 font-sans text-base leading-snug text-cream/50 md:text-lg">
                Freelancers vs. offshore tickets vs. disconnected specialists
              </p>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5" role="list">
              {LEFT_CARDS.map((text) => (
                <li key={text}>
                  <article className="flex gap-4 rounded-lg bg-zinc-900 p-5 ring-1 ring-white/10 md:p-6">
                    <IsolatedBadge />
                    <p className="font-sans text-[15px] leading-relaxed text-cream/85 md:text-base">{text}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          {/* FiveO full-stack pod */}
          <div>
            <div className="mb-8 text-center md:mb-10">
              <h3 className="font-heading text-2xl font-normal tracking-[-0.02em] text-cream md:text-3xl">
                FiveO full-stack pod
              </h3>
              <p className="mt-2 font-sans text-base leading-snug text-cream/50 md:text-lg">
                One partner for web, apps, cloud, and LLM-powered features
              </p>
            </div>
            <ul className="flex flex-col gap-4 md:gap-5" role="list">
              {RIGHT_CARDS.map((text) => (
                <li key={text}>
                  <article className="flex gap-4 rounded-lg bg-zinc-900 p-5 ring-1 ring-white/10 md:p-6">
                    <TrustEngineBadge />
                    <p className="font-sans text-[15px] leading-relaxed text-cream/85 md:text-base">{text}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
