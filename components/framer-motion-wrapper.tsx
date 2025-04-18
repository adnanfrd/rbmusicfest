"use client"

import type { ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"
import { useReducedMotion } from "@/components/use-reduced-motion"

interface FramerMotionWrapperProps extends MotionProps {
  children: ReactNode
}

export function FramerMotionWrapper({ children, ...props }: FramerMotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, we'll disable animations
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return <motion.div {...props}>{children}</motion.div>
}
