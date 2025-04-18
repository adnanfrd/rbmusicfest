"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { festivalData } from "@/data/festival-data"
import { useReducedMotion } from "@/components/use-reduced-motion"

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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/squatch.png" alt="Rockaway Beach Music Festival" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60 festival-texture" />
      </div>

      <motion.div
        className="container relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <Image
            src="/rbmf-title.png"
            alt="Rockaway Beach Music Festival"
            width={800}
            height={200}
            className="mx-auto"
          />
        </motion.div>

        <motion.p variants={itemVariants} className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {festivalData.date} • {festivalData.time}
          <br />
          {festivalData.location}
          <br />
          <span className="font-bold">{festivalData.description}</span>
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={festivalData.eventbriteUrl}
            target="_blank"
            className="inline-flex items-center justify-center h-11 px-8 py-2 font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            RSVP on Eventbrite
          </Link>

          <Link
            href={festivalData.vipUrl}
            target="_blank"
            className="inline-flex items-center justify-center h-11 px-8 py-2 font-medium rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
          >
            Get VIP Access
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
