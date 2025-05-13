"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export default function MapSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mapVisible, setMapVisible] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setMapVisible(true), 300)
          setTimeout(() => setButtonVisible(true), 600)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("directions")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="directions" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-blue font-bold">VENUE & DIRECTIONS</h2>
          <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us at the beautiful Rockaway Beach Wayside, with stunning ocean views and easy access.
          </p>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow-md relative"
          style={{
            opacity: mapVisible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.8356046519093!2d-123.94180548255615!3d45.61402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eb2d7e0e6f0b33%3A0x7e93a9f10e875a66!2sWayside%2C%20Rockaway%20Beach%2C%20OR%2097136!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Festival Location"
          ></iframe>
          <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
            <div className="flex items-center text-sm font-medium">
              <MapPin className="h-4 w-4 text-red-500 mr-1" />
              <span>Rockaway Beach Wayside</span>
            </div>
          </div>
        </div>

        <div
          className="mt-8 text-center"
          style={{
            opacity: buttonVisible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=Wayside+Rockaway+Beach+OR"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Open in Google Maps
          </Link>
        </div>
      </div>
    </section>
  )
}
