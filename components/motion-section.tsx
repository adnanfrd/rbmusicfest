"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "./use-reduced-motion"

interface MotionSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionSection({ children, className = "", delay = 0 }: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  // Replace useEffectEvent with a regular function
  const onViewportEnter = () => {
    // Animation logic
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      onViewportEnter={onViewportEnter}
    >
      {children}
    </motion.section>
  )
}
