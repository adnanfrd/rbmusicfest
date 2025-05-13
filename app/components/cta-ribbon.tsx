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
      <div className="container py-3">
        <div className="flex justify-between items-center gap-2 overflow-x-auto">
          <Link
            href="https://rbmusicfest.eventbrite.com"
            target="_blank"
            className="inline-flex items-center justify-center h-9 px-3 py-2 text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 whitespace-nowrap"
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">RSVP</span>
          </Link>

          <Link
            href="https://rbmusicfest.eventbrite.com"
            target="_blank"
            className="inline-flex items-center justify-center h-9 px-3 py-2 text-sm font-medium rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white whitespace-nowrap"
          >
            <Crown className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">VIP Access</span>
          </Link>

          {/* Updated the Get Updates link to point to NCAM Foundation subscribe page */}
          <Link
            href="https://www.ncamfoundation.org/subscribe"
            target="_blank"
            className="inline-flex items-center justify-center h-9 px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-100 whitespace-nowrap"
          >
            <Mail className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Get Updates</span>
          </Link>

          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=Wayside+Rockaway+Beach+OR"
            target="_blank"
            className="inline-flex items-center justify-center h-9 px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-100 whitespace-nowrap"
          >
            <MapPin className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Directions</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
