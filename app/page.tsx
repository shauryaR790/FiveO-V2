import { AgencyScrollShowcase } from "@/components/scroll-showcase/AgencyScrollShowcase";
import { DeliveryGrid } from "@/components/delivery-grid/DeliveryGrid";
import { EpochBlock } from "@/components/epoch-hero/EpochBlock";
import { FlywheelSection } from "@/components/flywheel/FlywheelSection";
import { Hero } from "@/components/hero/Hero";
import { PrecisionEdgeSection } from "@/components/precision-edge/PrecisionEdgeSection";
import { SelectedWorkSection } from "@/components/selected-work/SelectedWorkSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TechStackSection } from "@/components/tech-stack/TechStackSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStackSection />
      <ServicesSection />
      <DeliveryGrid />
      <AgencyScrollShowcase />
      <section id="manifesto" className="min-h-[1px] scroll-mt-28 bg-black" aria-label="Approach" />
      <PrecisionEdgeSection />
      <EpochBlock />
      <FlywheelSection />
      <SelectedWorkSection />
      <section id="contact" className="min-h-[1px] scroll-mt-28 bg-black" aria-label="Start a project" />
    </>
  );
}
