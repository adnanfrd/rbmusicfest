import { HeroSection } from "@/components/hero-section"
import { CtaRibbon } from "@/components/cta-ribbon"
import { LineupSection } from "@/components/lineup-section"
import { ExperienceSection } from "@/components/experience-section"
import { ScheduleSection } from "@/components/schedule-section"
import { MapSection } from "@/components/map-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CtaRibbon />
      <LineupSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <ScheduleSection />
      <div className="section-divider" />
      <MapSection />
      <div className="section-divider" />
      <FaqSection />
      <Footer />
      <Toaster />
    </main>
  )
}
