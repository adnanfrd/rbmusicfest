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
      className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-md"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? "0" : "-100px"})`,
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <div className="container py-2 sm:py-3">
        <div className="flex justify-between items-center gap-1 sm:gap-2 overflow-x-auto px-1">
          <Link
            href="https://rbmusicfest.eventbrite.com"
            target="_blank"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 whitespace-nowrap"
          >
            <Calendar className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">RSVP</span>
          </Link>

          <Link
            href="https://rbmusicfest.eventbrite.com"
            target="_blank"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white whitespace-nowrap"
          >
            <Crown className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">VIP Access</span>
          </Link>

          {/* Updated the Get Updates link to point to NCAM Foundation subscribe page */}
          <Link
            href="https://www.ncamfoundation.org/subscribe"
            target="_blank"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-100 whitespace-nowrap"
          >
            <Mail className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">Get Updates</span>
          </Link>

          <Link
            href="https://maps.app.goo.gl/KGv1hedczPd91QC8A"
            target="_blank"
            className="inline-flex items-center justify-center h-8 sm:h-9 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-100 whitespace-nowrap"
          >
            <MapPin className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">Directions</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
