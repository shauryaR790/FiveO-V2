const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_155101_f2540600-6fe9-433e-8e48-b3f4b72f0727.mp4";

/**
 * Full-viewport video interlude (no nav/footer). Sits after DeliveryGrid, before TrustComparisonSection.
 */
export function PrecisionEdgeSection() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
      aria-label="Engineering focus"
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-start px-5 pt-14 pb-16 text-center sm:px-8 md:px-10 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <h1 className="section-title max-w-4xl font-heading text-[clamp(2.1rem,5.75vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.01em] [word-spacing:0.18em] text-cream sm:[word-spacing:0.22em] xl:text-[clamp(2.35rem,6vw,3.85rem)]">
          From crisp UX flows
          <br className="hidden sm:block" /> to resilient production systems
        </h1>

        <p className="mt-6 max-w-3xl font-heading text-[clamp(0.8rem,2.4vw,1.05rem)] font-bold uppercase leading-relaxed tracking-[0.2em] [word-spacing:0.28em] text-cream/70 sm:max-w-2xl md:mt-7 md:tracking-[0.24em] md:text-base md:[word-spacing:0.34em] lg:text-lg">
          Web · mobile · cloud APIs · LLM features —
          <br className="hidden sm:block" /> one continuous build discipline
        </p>
      </div>
    </section>
  );
}
