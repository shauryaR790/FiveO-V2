const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_155101_f2540600-6fe9-433e-8e48-b3f4b72f0727.mp4";

/**
 * Full-viewport video interlude (no nav/footer). Sits before FlywheelSection.
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

      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-start px-5 pt-10 pb-16 text-center sm:px-8 md:px-10 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24">
        <h1 className="section-title max-w-6xl font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]">
          From crisp UX flows to resilient{" "}
          <span className="font-serif-accent font-normal italic text-cream">production systems</span>
        </h1>

        <p className="copy-accent mt-7 max-w-2xl text-[1.125rem] text-cream/72 md:mt-8 md:text-xl md:leading-[1.68]">
          Web, mobile, cloud APIs, and LLM features — one continuous build discipline from first prototype
          through production hardening.
        </p>
      </div>
    </section>
  );
}
