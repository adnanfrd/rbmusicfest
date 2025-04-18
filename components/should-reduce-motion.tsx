"use client"

import { useState, useEffect } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

const getInitialState = () => {
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but any client side rendering will know.
  return typeof window === "undefined" ? false : !window.matchMedia(QUERY).matches
}

function useReduceMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches)
    }

    mediaQueryList.addEventListener("change", listener)

    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [])

  return prefersReducedMotion
}

export default useReduceMotion
