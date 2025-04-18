"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { festivalData } from "@/data/festival-data"
import { useReducedMotion } from "@/components/use-reduced-motion"

export function ScheduleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-20 bg-white" id="schedule">
      <div className="container px-4">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-12 text-festival-yellow"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          SCHEDULE
        </motion.h2>

        <motion.div
          ref={ref}
          className="overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Artist</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {festivalData.bands
                .sort((a, b) => {
                  // Sort by time (assuming format "H:MM PM - H:MM PM")
                  const timeA = a.time.split(" - ")[0]
                  const timeB = b.time.split(" - ")[0]
                  return timeB.localeCompare(timeA) // Reverse order (latest first)
                })
                .map((band) => (
                  <TableRow key={band.name}>
                    <TableCell className="font-medium">{band.time}</TableCell>
                    <TableCell>{band.stage}</TableCell>
                    <TableCell>{band.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}
