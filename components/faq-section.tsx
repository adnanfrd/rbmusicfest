"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { festivalData } from "@/data/festival-data"
import { useReducedMotion } from "@/components/use-reduced-motion"

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
          <Accordion type="single" collapsible className="w-full">
            {festivalData.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
