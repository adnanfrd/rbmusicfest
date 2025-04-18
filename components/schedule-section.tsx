"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
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
          <div className="w-full">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[150px]">Time</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Stage</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Artist</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {festivalData.bands
                  .sort((a, b) => {
                    // Sort by time (assuming format "H:MM PM - H:MM PM")
                    const timeA = a.time.split(" - ")[0]
                    const timeB = b.time.split(" - ")[0]
                    return timeB.localeCompare(timeA) // Reverse order (latest first)
                  })
                  .map((band) => (
                    <tr key={band.name} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">{band.time}</td>
                      <td className="p-4 align-middle">{band.stage}</td>
                      <td className="p-4 align-middle">{band.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
