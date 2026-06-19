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
      <Hero />
      <TechStackSection />
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
