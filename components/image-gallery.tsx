"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Replace useEffectEvent with useCallback
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1))
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1))
      } else if (e.key === "Escape") {
        setSelectedIndex(null)
      }
    },
    [selectedIndex, images.length],
  )

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex, handleKeyDown])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer aspect-square relative overflow-hidden rounded-lg"
          onClick={() => setSelectedIndex(index)}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedIndex !== null && (
            <div className="relative aspect-video">
              <Image
                src={images[selectedIndex].src || "/placeholder.svg"}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
              />

              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }}
              >
                <ChevronLeft />
              </button>

              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                }}
              >
                <ChevronRight />
              </button>

              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                onClick={() => setSelectedIndex(null)}
              >
                <X />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
