"use client"

import { useEffect } from "react"
import HeroSection from "./components/hero-section"
import CtaRibbon from "./components/cta-ribbon"
import LineupSection from "./components/lineup-section"
import ExperienceSection from "./components/experience-section"
import MapSection from "./components/map-section"
import FaqSection from "./components/faq-section"
import Footer from "./components/footer"

export default function Home() {
  useEffect(() => {
    const preloadImages = [
      "/images/squatch.png", 
      "/images/rbmf-title.png", 
      "/images/TyphoonPressPhoto2021.png", 
      "/images/glitterfox-band.jpeg", 
      "/images/mitch-whitaker-band.webp", 
      "/images/mercury-coast-band.jpeg", 
    ]

    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => console.log(`Preloaded: ${src}`)
      img.onerror = (e) => console.error(`Failed to preload: ${src}`, e)
    })
  }, [])

  return (
    <main>
      <CtaRibbon />
      <section className="bg-black pt-12 sm:pt-14">
        <div className="container px-4">
          <video
            className="w-full"
            controls
            playsInline
            preload="metadata"
            aria-label="Dark Days of Freedom commercial"
          >
            <source src="/images/%E2%80%9CDark%20Days%20of%20Freedom%E2%80%9D.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <HeroSection />
      <LineupSection />
      <div className="section-divider"></div>
      <ExperienceSection />
      <div className="section-divider"></div>
      <MapSection />
      <div className="section-divider"></div>
      <FaqSection />
      <Footer />
    </main>
  )
}
