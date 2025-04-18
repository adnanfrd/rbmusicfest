"use client"

import { useState, useEffect, useCallback } from "react"
import { useReducedMotion } from "./use-reduced-motion"

interface ParallaxBackgroundProps {
  imageUrl: string
  speed?: number
}

export function ParallaxBackground({ imageUrl, speed = 0.5 }: ParallaxBackgroundProps) {
  const [offsetY, setOffsetY] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  // Replace useEffectEvent with useCallback
  const handleScroll = useCallback(() => {
    if (prefersReducedMotion) return
    setOffsetY(window.scrollY)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
  }

  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        transform: `translateY(${offsetY * speed}px)`,
      }}
    />
  )
}
