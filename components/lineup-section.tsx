"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { festivalData } from "@/data/festival-data"
import { ExternalLink, Info } from "lucide-react"
import { useReducedMotion } from "@/components/use-reduced-motion"
import { BandDetailModal } from "@/components/band-detail-modal"

export function LineupSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()
  const [selectedBand, setSelectedBand] = useState<any>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardHoverAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100" id="lineup">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-blue font-bold">LIVE MUSIC LINEUP</h2>
          <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{festivalData.dayOne.date}</h3>
          <p className="text-lg text-gray-600 mt-2">{festivalData.dayOne.description}</p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {festivalData.bands
            .filter((band) => band.day === "Saturday")
            .map((band) => (
              <motion.div key={band.name} variants={itemVariants}>
                <motion.div
                  variants={cardHoverAnimation}
                  initial="rest"
                  whileHover="hover"
                  className="rounded-lg border bg-white text-gray-900 shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="p-0 aspect-video relative bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={band.logo || "/placeholder.svg"}
                      alt={band.name}
                      width={400}
                      height={200}
                      className="object-contain p-6 z-10 relative"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 opacity-50"></div>
                    {band.prefix && (
                      <div className="absolute top-2 left-2 bg-festival-pink text-white text-xs px-2 py-1 rounded-full">
                        {band.prefix}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="mb-2 text-sm font-medium text-festival-pink">
                      {band.time} • {band.stage}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{band.name}</h3>
                    <p className="text-gray-700 line-clamp-3">{band.description}</p>
                  </div>
                  <div className="p-4 pt-0 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedBand(band)}
                      className="inline-flex items-center text-festival-blue hover:text-festival-pink transition-colors"
                    >
                      <Info className="mr-1 h-4 w-4" />
                      <span>More Info</span>
                    </button>

                    {band.links && band.links.length > 0 && band.links.find((link: any) => link.name === "Website") && (
                      <Link
                        href={band.links.find((link: any) => link.name === "Website").url}
                        target="_blank"
                        className="inline-flex items-center text-gray-600 hover:text-festival-blue transition-colors"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{festivalData.dayTwo.date}</h3>
          <p className="text-lg text-gray-600 mb-6">{festivalData.dayTwo.description}</p>
          <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              We are booking acoustic acts and singer/songwriters currently, if you would like to perform, contact us!
            </p>
            <div className="mt-8">
              <p className="text-lg font-medium mb-4">
                More great music to be announced, sign up to our mailing list to stay informed!
              </p>
              <Link
                href={festivalData.ncamUrl}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
              >
                Sign Up at NCAM
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <BandDetailModal band={selectedBand} isOpen={!!selectedBand} onClose={() => setSelectedBand(null)} />
    </section>
  )
}
