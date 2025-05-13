"use client"

import { Beer, Utensils, ShoppingBag, Palette } from "lucide-react"
import { useEffect, useState } from "react"

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [featuresVisible, setFeaturesVisible] = useState(false)
  const [merchVisible, setMerchVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setFeaturesVisible(true), 300)
          setTimeout(() => setMerchVisible(true), 600)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("experience")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const features = [
    {
      title: "Beer Garden & Bar",
      description:
        "Located to the right of the main stage is our bar area where you can enjoy local beers on tap and in bottles/cans along with a selection of craft cocktails from 503 Distillery. This area is ages 21+ and ID is required to enter!",
      icon: Beer,
      color: "amber-600",
      bgColor: "yellow-200",
    },
    {
      title: "Local Food",
      description:
        "We will have the Portside Bistro truck along with a couple other food options. Nearby are several restaurants such as Sand Dollar, El Trio Loco, Tie Breaker, Joe's Beers & Snacks, Grumpy's, Old Oregon Smokehouse are in close walking distance. So is Sea Breeze Ice Cream if you need a treat! (You do!)",
      icon: Utensils,
      color: "red-600",
      bgColor: "red-200",
    },
    {
      title: "Vendors",
      description: "Browse unique items from local artisans and businesses.",
      icon: ShoppingBag,
      color: "green-600",
      bgColor: "green-200",
    },
    {
      title: "Interactive Art",
      description: "Engage with interactive art installations throughout the festival.",
      icon: Palette,
      color: "purple-600",
      bgColor: "purple-200",
    },
  ]

  const merchandise = [
    {
      title: "Trucker Hat",
      description: "First edition RB Music Fest Trucker Hat",
      price: "$50 donation",
    },
    {
      title: "T-shirt",
      description: "First edition RB Music Fest Tour T-shirt",
      price: "$75 donation",
    },
    {
      title: "Zip Hoodie",
      description: "First edition RB Music Fest Zip Hoodie",
      price: "$125 donation",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container px-4">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-pink font-bold">FESTIVAL EXPERIENCE</h2>
          <div className="w-24 h-1 bg-festival-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy a full day of music, food, art, and community at the beautiful Rockaway Beach Wayside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ opacity: featuresVisible ? 1 : 0 }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{
                opacity: featuresVisible ? 1 : 0,
                transform: `translateY(${featuresVisible ? "0" : "20px"})`,
                transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`,
              }}
            >
              <div className="shrink-0">
                <div className="relative">
                  <div className={`absolute -inset-1 bg-${feature.bgColor} rounded-full blur-sm`}></div>
                  <feature.icon className={`h-10 w-10 text-${feature.color} relative`} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 bg-gradient-to-r from-blue-50 to-pink-50 p-8 rounded-xl shadow-sm"
          style={{
            opacity: merchVisible ? 1 : 0,
            transform: `translateY(${merchVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-center text-gray-900">VIP Merchandise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {merchandise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-festival-pink font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
