"use client"

import { useState, useEffect, useCallback } from "react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrollSpy(["lineup", "experience", "schedule", "directions", "faq"])

  // Replace useEffectEvent with useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      {/* Navigation content */}
    </nav>
  )
}
