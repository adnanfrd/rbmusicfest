"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full h-full">
      <div className="relative h-full w-full">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            console.error("Error loading image:", images[currentIndex])
            e.currentTarget.src = `https://placehold.co/800x400/gray/white?text=${encodeURIComponent(alt)}`
          }}
        />

        {/* Left Arrow */}
        <div
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 transition-colors"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 transition-colors"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
              currentIndex === slideIndex ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
