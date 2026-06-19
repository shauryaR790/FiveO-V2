const TECH_VIDEO_SRC = "/videos/showcase-0617.mp4";

export function TechVideoSection() {
  return (
    <section
      id="tech-video"
      className="scroll-mt-28 bg-black py-6 md:py-14"
      aria-label="Product showcase video"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-0">
        <div className="mx-auto flex w-full max-w-[min(100%,340px)] justify-center sm:max-w-[min(100%,420px)] md:max-w-none md:block md:w-[calc(100%-50px)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block h-auto w-full max-h-[min(72dvh,640px)] rounded-2xl border border-white/10 bg-zinc-950 object-contain md:max-h-none md:rounded-[20px]"
            aria-label="FiveO product showcase"
          >
            <source src={TECH_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
