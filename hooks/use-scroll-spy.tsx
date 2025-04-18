"use client"

import { useState, useEffect, useCallback } from "react"

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Replace useEffectEvent with useCallback
  const checkScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset

    const sections = sectionIds.map((id) => {
      const element = document.getElementById(id)
      if (!element) return { id, top: 0, bottom: 0 }

      const rect = element.getBoundingClientRect()
      return {
        id,
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
      }
    })

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= sections[i].top) {
        setActiveSection(sections[i].id)
        return
      }
    }

    setActiveSection(null)
  }, [sectionIds, offset])

  useEffect(() => {
    checkScroll()
    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  return activeSection
}
