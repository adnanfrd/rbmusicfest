"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  value: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function CustomAccordionItem({ value, title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-bold transition-all hover:text-festival-pink",
          isOpen && "text-festival-pink",
        )}
        aria-expanded={isOpen}
        aria-controls={`content-${value}`}
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <div
        id={`content-${value}`}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!isOpen}
      >
        <div className="pb-4 pt-2">{children}</div>
      </div>
    </div>
  )
}

interface CustomAccordionProps {
  className?: string
  children: React.ReactNode
}

export function CustomAccordion({ className, children }: CustomAccordionProps) {
  return <div className={cn("w-full", className)}>{children}</div>
}
