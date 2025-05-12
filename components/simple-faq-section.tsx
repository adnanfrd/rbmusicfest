"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { festivalData } from "@/data/festival-data"
import { useReducedMotion } from "@/components/use-reduced-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-bold focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={cn(isOpen ? "text-festival-pink" : "text-gray-900")}>{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 transition-transform duration-300",
            isOpen && "rotate-180 text-festival-pink",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="pb-4 text-gray-700">{answer}</div>
      </div>
    </div>
  )
}

export function SimpleFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container px-4 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-yellow font-bold">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="w-24 h-1 bg-festival-yellow mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="space-y-1">
            {festivalData.faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
