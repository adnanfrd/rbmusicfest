"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Beer, Utensils, ShoppingBag, Palette } from "lucide-react"
import { festivalData } from "@/data/festival-data"
import { useReducedMotion } from "@/components/use-reduced-motion"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Beer":
        return <Beer className="h-8 w-8 text-festival-blue" />
      case "Utensils":
        return <Utensils className="h-8 w-8 text-festival-pink" />
      case "ShoppingBag":
        return <ShoppingBag className="h-8 w-8 text-festival-yellow" />
      case "Palette":
        return <Palette className="h-8 w-8 text-festival-blue" />
      default:
        return null
    }
  }

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
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container px-4">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-12 text-festival-pink"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          FESTIVAL EXPERIENCE
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {festivalData.experiences.map((experience) => (
            <motion.div
              key={experience.title}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="shrink-0">{getIcon(experience.icon)}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{experience.title}</h3>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
