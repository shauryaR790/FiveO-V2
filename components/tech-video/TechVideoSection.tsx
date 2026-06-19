const TECH_VIDEO_SRC = "/videos/showcase-0617.mp4";

export function TechVideoSection() {
  return (
    <section
      id="tech-video"
      className="scroll-mt-28 bg-black py-4 md:py-14"
      aria-label="Product showcase video"
    >
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 md:px-0">
        <div className="mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 md:w-[calc(100%-50px)] md:rounded-[20px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block aspect-video max-h-[min(56vh,420px)] w-full object-contain md:max-h-none md:aspect-auto"
            aria-label="FiveO product showcase"
          >
          <source src={TECH_VIDEO_SRC} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
