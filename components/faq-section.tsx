"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { festivalData } from "@/data/festival-data"
import { useReducedMotion } from "@/components/use-reduced-motion"
import { CustomAccordion, CustomAccordionItem } from "@/components/custom-accordion"

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container px-4 max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-12 text-festival-pink"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CustomAccordion>
            {festivalData.faqs.map((faq, index) => (
              <CustomAccordionItem key={index} value={`item-${index}`} title={faq.question} defaultOpen={index === 0}>
                {faq.answer}
              </CustomAccordionItem>
            ))}
          </CustomAccordion>
        </motion.div>
      </div>
    </section>
  )
}
