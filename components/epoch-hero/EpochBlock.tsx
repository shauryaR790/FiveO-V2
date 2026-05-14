import { EpochHero } from "./EpochHero";
import { LogoMarquee } from "./LogoMarquee";

export function EpochBlock() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-black px-4 py-12 text-cream md:px-6 md:py-16"
      aria-label="Web, apps, and AI engineering"
    >
      <div className="mx-auto flex w-full max-w-[1464px] flex-col items-stretch">
        <EpochHero />
        <LogoMarquee />
      </div>
    </section>
  );
}
