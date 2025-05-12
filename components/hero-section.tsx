"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { festivalData } from "@/data/festival-data"
import { useReducedMotion } from "@/components/use-reduced-motion"
import { Music } from "lucide-react"

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const backgroundAnimation = {
    initial: { backgroundPosition: "0% 0%" },
    animate: {
      backgroundPosition: "100% 100%",
      transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "linear" },
    },
  }

  const buttonHoverAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/squatch.png" alt="Rockaway Beach Music Festival" fill priority className="object-cover" />
      </div>

      {/* Overlay gradient */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-pink-900/60 festival-texture"
        initial={backgroundAnimation.initial}
        animate={backgroundAnimation.animate}
      />

      {/* Content */}
      <motion.div
        className="container relative z-20 text-center px-4 pt-10 md:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Image
            src="/rbmf-title.png"
            alt="Rockaway Beach Music Festival"
            width={800}
            height={200}
            className="mx-auto filter drop-shadow-lg"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-white text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-medium drop-shadow-lg"
        >
          {festivalData.date} • {festivalData.time}
          <br />
          {festivalData.location}
        </motion.p>

        <motion.p variants={itemVariants} className="text-white text-2xl md:text-3xl mb-6 font-bold drop-shadow-lg">
          {festivalData.description}
        </motion.p>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-white text-lg md:text-xl mb-4 uppercase tracking-wider drop-shadow-lg">
            LOCAL ARTISANS + GREAT FOOD + INTERACTIVE ART BOOTHS + LOCAL BEERS & FULL BAR
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.div variants={buttonHoverAnimation} initial="rest" whileHover="hover" className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Link
              href={festivalData.eventbriteUrl}
              target="_blank"
              className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              RSVP on Eventbrite
            </Link>
          </motion.div>

          <motion.div variants={buttonHoverAnimation} initial="rest" whileHover="hover" className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Link
              href={festivalData.vipUrl}
              target="_blank"
              className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 font-bold rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-200"
            >
              Get VIP Access
            </Link>
          </motion.div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-white text-lg mt-8 mb-4">
          Can't go to the show but want to support music education?
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12">
          <motion.div
            variants={buttonHoverAnimation}
            initial="rest"
            whileHover="hover"
            className="relative inline-block group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Link
              href={festivalData.donateUrl}
              target="_blank"
              className="relative inline-flex items-center justify-center px-8 py-3 font-bold rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 transition-colors duration-200"
            >
              Donate
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href={festivalData.spotifyUrl}
            target="_blank"
            className="inline-flex items-center text-white hover:text-green-400 transition-colors duration-200"
          >
            <Music className="mr-2 h-5 w-5" />
            <span className="text-lg">Check out the RBMF 2025 Vibes Spotify Playlist</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
