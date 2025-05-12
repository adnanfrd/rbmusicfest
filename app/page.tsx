import { HeroSection } from "@/components/hero-section"
import { CtaRibbon } from "@/components/cta-ribbon"
import { LineupSection } from "@/components/lineup-section"
import { ExperienceSection } from "@/components/experience-section"
import { MapSection } from "@/components/map-section"
import { SimpleFaqSection } from "@/components/simple-faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CtaRibbon />
      <LineupSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <MapSection />
      <div className="section-divider" />
      <SimpleFaqSection />
      <Footer />
    </main>
  )
}
