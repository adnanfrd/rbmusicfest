"use client"

import { useCallback, useEffect, useState, type ReactNode } from "react"

interface ScrollObserverProps {
  children: ReactNode
  onScroll?: (scrollY: number) => void
}

export function ScrollObserver({ children, onScroll }: ScrollObserverProps) {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)
    onScroll?.(currentScrollY)
  }, [onScroll])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return <>{children}</>
}
