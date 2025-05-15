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
    // Log for debugging
    console.log("Page loaded, checking for images...")

    // Check if images are loading correctly
    const images = document.querySelectorAll("img")
    images.forEach((img, index) => {
      console.log(`Image ${index}:`, {
        src: img.src,
        loaded: img.complete,
        naturalWidth: img.naturalWidth,
      })

      // Add load event listener
      img.addEventListener("load", () => {
        console.log(`Image ${index} loaded:`, img.src)
      })

      // Add error event listener
      img.addEventListener("error", (e) => {
        console.error(`Image ${index} failed to load:`, img.src, e)
      })
    })

    // Preload critical images
    const preloadImages = [
      "/squatch.png",
      "/rbmf-title.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TyphoonPressPhoto2021-9G8ndu0cfbyIrKMtwKyq6dkiOBse4z.png",
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
      <HeroSection />
      <CtaRibbon />
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
