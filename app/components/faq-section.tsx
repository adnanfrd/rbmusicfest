"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function FaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [faqsVisible, setFaqsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setFaqsVisible(true), 300)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("faq")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const faqs = [
    {
      question: "Is the festival really free?",
      answer:
        "Yes! All ages can enjoy live music and all event offerings. You must be 21+ with valid ID to enter the beer garden and bar area. You may wish to consider bringing a chair as seating may become limited, or by making a donation you can guarantee yourself a seat in the VIP section. Please note if the fire department says we are at capacity we cannot let anyone until people leave and we will give priority to those who have RSVP'd",
    },
    {
      question: "How does VIP seating work?",
      answer:
        "We will have a reserved area nearest the stage with 200 seats and a reserved section in the beer garden with 50 seats. We are offering a pre-event special, a $50 donation gets you this year's hat, $75 gets you this year's concert t-shirt and $125 gets you this year's concert zip hoodie. Any remaining VIP tickets can be purchased at the day of the event for a \"name your price\" amount. Let's hope there are none left as we really need to raise money for our school's music program!!! Also, your donation can be tax deductible as we are a 501c3 nonprofit, ask your tax preparer for details.",
    },
    {
      question: "Can I bring my kids? My dog? My giraffe?",
      answer:
        "Nothing is worse than a giraffe with a sore throat. And they tend to get caught up in power lines. So please leave the giraffe at home. But well-behaved dogs on leashes are welcome, and kids are welcome. Note that dogs and children can be sensitive to loud music so we recommend not being close to the stage. The only area kids can't be is the beer garden, it is only accessible for people age 21+ with valid ID.",
    },
    {
      question: "Where can I park?",
      answer:
        "Parking is available in the Anchor Street parking lot, and there is plenty of street parking available. There may be instances where you will need to walk a bit. There is handicap parking reserved at the Anchor Street parking lot, and in spots downtown.",
    },
    {
      question: "How awful are the restrooms?",
      answer:
        "Our restrooms are awesome. We have brand new ADA compliant public bathrooms available for all humans, and we have a public works department that keeps them in tip top shape.",
    },
    {
      question: "What if it rains?",
      answer:
        "We really hope it won't, August is when we count on sun, and according to Farmer's Almanac we should have nice weather. The show will go on unless it's not safe to do so.",
    },
    {
      question: "Is it All Ages?",
      answer:
        "Yes, the only 21+ area is the beer garden/bar section which is off to the side, the event is fully accessible",
    },
    {
      question: "How ADA Compliant is this event?",
      answer:
        "Rockaway Beach has built brand new ADA public bathrooms at the Wayside, as well as a new beach access ramp. Beach wheelchairs are available for rent and Rockaway participates in the David's Chair program. The event is in a flat large parking area overlooking the beach, all areas of the event will be accessible except for the stage itself.",
    },
    {
      question: "I can get free merch?!?",
      answer:
        "Sort of! If you make a donation for a VIP seat we are giving out merch. $50 gets you this year's concert hat, $75 this year's concert t-shirt and $125 gets you this year's concert zip hoodie. While supplies last!",
    },
    {
      question: "What are you raising money for?",
      answer:
        "This event supports the Neah-Kah-Nie High School music department. We are helping the school realize a music tech program and helping students pursuing a career in the arts with scholarships. We give grants to local musicians to record their music for free in a professional studio.",
    },
  ]

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container px-4 max-w-3xl mx-auto">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-yellow font-bold">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="w-24 h-1 bg-festival-yellow mx-auto mb-6"></div>
        </div>

        <div
          className="bg-white rounded-xl shadow-sm p-6"
          style={{
            opacity: faqsVisible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex w-full items-center justify-between py-4 text-left font-bold focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className={activeIndex === index ? "text-festival-pink" : "text-gray-900"}>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180 text-festival-pink" : "text-gray-500"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 text-gray-700">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
