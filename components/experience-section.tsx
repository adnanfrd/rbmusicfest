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
        return (
          <div className="relative">
            <div className="absolute -inset-1 bg-yellow-200 rounded-full blur-sm"></div>
            <Beer className="h-10 w-10 text-amber-600 relative" />
          </div>
        )
      case "Utensils":
        return (
          <div className="relative">
            <div className="absolute -inset-1 bg-red-200 rounded-full blur-sm"></div>
            <Utensils className="h-10 w-10 text-red-600 relative" />
          </div>
        )
      case "ShoppingBag":
        return (
          <div className="relative">
            <div className="absolute -inset-1 bg-green-200 rounded-full blur-sm"></div>
            <ShoppingBag className="h-10 w-10 text-green-600 relative" />
          </div>
        )
      case "Palette":
        return (
          <div className="relative">
            <div className="absolute -inset-1 bg-purple-200 rounded-full blur-sm"></div>
            <Palette className="h-10 w-10 text-purple-600 relative" />
          </div>
        )
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
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white" id="experience">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-pink font-bold">FESTIVAL EXPERIENCE</h2>
          <div className="w-24 h-1 bg-festival-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy a full day of music, food, art, and community at the beautiful Rockaway Beach Wayside.
          </p>
        </motion.div>

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
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="shrink-0">{getIcon(experience.icon)}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{experience.title}</h3>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-50 to-pink-50 p-8 rounded-xl shadow-sm"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-xl font-bold mb-4 text-center text-gray-900">VIP Merchandise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivalData.merchandise.map((item) => (
              <div key={item.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-festival-pink font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
