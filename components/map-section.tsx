"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { festivalData } from "@/data/festival-data"
import { MapPin } from "lucide-react"
import { useReducedMotion } from "@/components/use-reduced-motion"

export function MapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100" id="directions">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-blue font-bold">VENUE & DIRECTIONS</h2>
          <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us at the beautiful Rockaway Beach Wayside, with stunning ocean views and easy access.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="rounded-xl overflow-hidden shadow-md relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.8356046519093!2d-123.94180548255615!3d45.61402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eb2d7e0e6f0b33%3A0x7e93a9f10e875a66!2sWayside%2C%20Rockaway%20Beach%2C%20OR%2097136!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
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
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={festivalData.mapUrl}
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Open in Google Maps
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
