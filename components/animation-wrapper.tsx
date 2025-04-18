"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface AnimationWrapperProps {
  children: React.ReactNode
  delay?: number
}

export function AnimationWrapper({ children, delay = 0 }: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!ref.current) return

    if (isInView) {
      ref.current.classList.add("is-visible")
    }
  }, [isInView])

  return (
    <div ref={ref} className="animate-on-scroll" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
