import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { IndependentProductsSection } from "@/components/sections/independent-products-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { ClientLogosSection } from "@/components/sections/client-logos-section";
import { WritingSection } from "@/components/sections/writing-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <IndependentProductsSection />
      <MetricsSection />
      <CapabilitiesSection />
      <AboutPreviewSection />
      <ClientLogosSection />
      <WritingSection />
      <ContactSection />
    </>
  );
}
