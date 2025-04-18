"use client"

import { useState, useEffect } from "react"

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      const handleChange = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => {
        mediaQuery.removeEventListener("change", handleChange)
      }
    }

    return undefined
  }, [])

  return prefersReducedMotion
}
