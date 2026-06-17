const TECH_VIDEO_SRC = "/videos/fiveo-showcase.mp4";

export function TechVideoSection() {
  return (
    <section
      id="tech-video"
      className="scroll-mt-28 bg-black py-10 md:py-14"
      aria-label="Product showcase video"
    >
      <div className="mx-auto w-[calc(100%-50px)] overflow-hidden rounded-[20px] border border-white/10 bg-zinc-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block h-auto w-full object-contain"
          aria-label="FiveO product showcase"
        >
          <source src={TECH_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
