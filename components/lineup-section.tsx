"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { festivalData } from "@/data/festival-data"
import { ExternalLink } from "lucide-react"
import { useReducedMotion } from "@/components/use-reduced-motion"

export function LineupSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()

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

  return (
    <section className="py-20 bg-white" id="lineup">
      <div className="container px-4">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-12 text-festival-blue"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          LIVE MUSIC LINEUP
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {festivalData.bands.map((band) => (
            <motion.div key={band.name} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 aspect-video relative bg-gray-100 flex items-center justify-center">
                  <Image
                    src={band.logo || "/placeholder.svg"}
                    alt={band.name}
                    width={400}
                    height={200}
                    className="object-contain p-6"
                  />
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="mb-2 text-sm font-medium text-festival-pink">
                    {band.time} • {band.stage}
                  </div>
                  <p className="text-gray-700">{band.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={band.website} target="_blank">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
