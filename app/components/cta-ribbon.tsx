"use client"

import Link from "next/link"
import { Calendar, Crown, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export default function CtaRibbon() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm shadow-md"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? "0" : "-100px"})`,
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <div className="container py-2 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-2 sm:gap-3 overflow-x-auto">
          <Link
            href="/rsvp"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold rounded-md bg-blue-500 text-white hover:bg-blue-600 whitespace-nowrap transition-colors duration-200 flex-shrink-0"
          >
            <Calendar className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">RSVP</span>
          </Link>

          <Link
            href="https://rbmusicfest.eventbrite.com"
            target="_blank"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold rounded-md bg-pink-500 text-white hover:bg-pink-600 whitespace-nowrap transition-colors duration-200 flex-shrink-0"
          >
            <Crown className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">VIP Seating</span>
          </Link>

          <Link
            href="https://www.ncamfoundation.org/subscribe"
            target="_blank"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold rounded-md bg-yellow-500 text-black hover:bg-yellow-600 whitespace-nowrap transition-colors duration-200 flex-shrink-0"
          >
            <Mail className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">Newsletter</span>
          </Link>

          <Link
            href="https://maps.app.goo.gl/KGv1hedczPd91QC8A"
            target="_blank"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold rounded-md bg-green-500 text-white hover:bg-green-600 whitespace-nowrap transition-colors duration-200 flex-shrink-0"
          >
            <MapPin className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">Directions</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
