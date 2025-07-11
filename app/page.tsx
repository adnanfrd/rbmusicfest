"use client"
import { useEffect } from "react"
import HeroSection from "../components/hero-section"
import LineupSection from "../components/lineup-section"
import ExperienceSection from "../components/experience-section"
import MapSection from "../components/map-section"
import FAQSection from "../components/faq-section"
import Footer from "../components/footer"

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
  }, [])

  return (
    <main>
      <HeroSection />
      <LineupSection />
      <div className="section-divider"></div>
      <ExperienceSection />
      <div className="section-divider"></div>
      <MapSection />
      <div className="section-divider"></div>
      <FAQSection />
      <Footer />
    </main>
  )
}
