"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
}

export function AnimatedCounter({ end, duration = 2000, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Replace useEffectEvent with useCallback
  const animateCount = useCallback(() => {
    if (!isInView) return

    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(Math.floor(start), end))

      if (start >= end) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateCount()
    }, delay)

    return () => clearTimeout(timeout)
  }, [animateCount, delay])

  return <span ref={ref}>{count}</span>
}
