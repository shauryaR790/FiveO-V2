import { AgencyScrollShowcase } from "@/components/scroll-showcase/AgencyScrollShowcase";
import { ContactSection } from "@/components/contact/ContactSection";
import { DeliveryGrid } from "@/components/delivery-grid/DeliveryGrid";
import { DottedSurfaceSection } from "@/components/dotted-surface/DottedSurfaceSection";
import { FigmintSection } from "@/components/fiveo-identity/FigmintSection";
import { FlywheelSection } from "@/components/flywheel/FlywheelSection";
import { Hero } from "@/components/hero/Hero";
import { PrecisionEdgeSection } from "@/components/precision-edge/PrecisionEdgeSection";
import { SelectedWorkSection } from "@/components/selected-work/SelectedWorkSection";
import { KernelBentoSection } from "@/components/kernel-bento/KernelBentoSection";
import { TechStackSection } from "@/components/tech-stack/TechStackSection";
import { TechVideoSection } from "@/components/tech-video/TechVideoSection";
import { WebDevCraftSection } from "@/components/web-dev-craft/WebDevCraftSection";

export default function Home() {
  return (
    <>
      <div className="relative bg-black">
        <div
          className="pointer-events-none absolute bottom-0 left-6 top-0 z-[20] hidden w-px bg-cream/[0.12] md:left-10 md:block"
          aria-hidden
        />
        <Hero />
        <TechStackSection />
      </div>
      <DottedSurfaceSection />
      <TechVideoSection />
      <KernelBentoSection />
      <FigmintSection />
      <DeliveryGrid />
      <AgencyScrollShowcase />
      <section id="manifesto" className="min-h-[1px] scroll-mt-28 bg-black" aria-label="Approach" />
      <PrecisionEdgeSection />
      <WebDevCraftSection />
      <SelectedWorkSection />
      <FlywheelSection />
      <ContactSection />
    </>
  );
}
