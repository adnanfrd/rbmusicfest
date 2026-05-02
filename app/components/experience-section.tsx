"use client";

import { Beer, ChevronLeft, ChevronRight, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const eventbriteUrl =
  "https://www.eventbrite.com/e/rockaway-beach-music-festival-tickets-1350635279479";

const merchandiseImages = [
  {
    src: "/images/tee-back.jpeg",
    alt: "RBMF Festival T-shirt back mockup",
  },
  {
    src: "/images/tee-front.jpeg",
    alt: "RBMF Festival T-shirt front mockup",
  },
];

const vipOptions = [
  {
    title: "Pay What You Want",
    description:
      "Access to VIP seating throughout the event by making a donation. No donation is too small or too large.",
    price: "Any amount",
  },
  {
    title: "Get the T-Shirt",
    description:
      "Make a donation of $75 or more and get a free festival T-shirt plus your VIP seats.",
    price: "$75+",
  },
];

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [vipVisible, setVipVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [merchImageIndex, setMerchImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setVipVisible(true), 300);
          setTimeout(() => setFeaturesVisible(true), 800);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const nextImage = () => {
    setMerchImageIndex((prev) => (prev + 1) % merchandiseImages.length);
  };

  const prevImage = () => {
    setMerchImageIndex(
      (prev) => (prev - 1 + merchandiseImages.length) % merchandiseImages.length
    );
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container px-4">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-pink font-bold">
            FESTIVAL EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-festival-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            This event is totally free to the public, and you are welcome to
            bring your own chair. If you want to support live music and music
            education on the coast, VIP seating is available by donation.
          </p>
        </div>

        <div
          className="mb-16 relative overflow-hidden"
          style={{
            opacity: vipVisible ? 1 : 0,
            transform: `translateY(${vipVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-festival-pink/10 via-festival-blue/10 to-festival-yellow/10 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-white/30 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-festival-pink/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-festival-blue/20 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 right-8 w-12 h-12 bg-festival-yellow/15 rounded-full blur-md"></div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-block relative mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Support the Festival with VIP Seating
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-festival-pink rounded-full"></div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  We have{" "}
                  <span className="font-bold text-festival-pink">
                    250 VIP seats
                  </span>{" "}
                  available for guests who want to support live music and music
                  education on the coast. Choose either option below and enjoy
                  access to VIP seating throughout the event.
                  <br />
                  <span className="text-festival-blue font-semibold">
                    The show remains totally free, and bringing your own chair
                    is welcome.
                  </span>
                  <br />
                  <span className="text-festival-pink font-semibold">
                    To be in the beer garden you must be 21+ with valid ID.
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1">
                <div className="relative max-w-lg mx-auto">
                  <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white/50 backdrop-blur-sm">
                    <Image
                      src={merchandiseImages[merchImageIndex].src}
                      alt={merchandiseImages[merchImageIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-lg border-2 border-festival-pink/20 hover:border-festival-pink/40 transition-all duration-300"
                    onClick={prevImage}
                    aria-label="Previous T-shirt image"
                  >
                    <ChevronLeft className="h-5 w-5 text-festival-pink" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-lg border-2 border-festival-pink/20 hover:border-festival-pink/40 transition-all duration-300"
                    onClick={nextImage}
                    aria-label="Next T-shirt image"
                  >
                    <ChevronRight className="h-5 w-5 text-festival-pink" />
                  </Button>

                  <div className="flex justify-center mt-6 space-x-3">
                    {merchandiseImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Show T-shirt image ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === merchImageIndex
                            ? "bg-festival-pink shadow-lg scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => setMerchImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    Two VIP Seating Options
                  </h4>
                  <p className="text-center text-gray-600 mb-8 text-lg">
                    Choose the level that works for you. Every donation helps
                    keep live music and music education thriving on the coast.
                  </p>
                  {vipOptions.map((item) => (
                    <a
                      key={item.title}
                      href={eventbriteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-white/50 hover:border-festival-pink/30 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer block btn-hover-scale"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1">
                          <h5 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-festival-pink transition-colors">
                            {item.title}
                          </h5>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="text-left sm:ml-4 sm:text-right">
                          <p className="text-2xl font-black text-festival-pink">
                            {item.price}
                          </p>
                          <div className="w-full h-1 bg-festival-pink rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-16 bg-gradient-to-br from-festival-blue/5 via-festival-pink/5 to-festival-yellow/5 rounded-3xl p-8 md:p-12 shadow-lg"
          style={{
            opacity: featuresVisible ? 1 : 0,
            transform: `translateY(${featuresVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Food & Beverages
            </h3>
            <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Savor the flavors of the Oregon Coast with our amazing food and
              beverage partners!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Beer className="h-8 w-8 text-festival-blue mr-3" />
                <h4 className="text-2xl font-bold text-gray-900">BAR</h4>
              </div>

              <div className="mb-6">
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl border-2 border-dashed border-festival-blue/30 bg-festival-blue/5 text-center text-xs font-bold uppercase tracking-wide text-festival-blue">
                    Logo Coming Soon
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-gray-900">
                      <a
                        href="https://steeplejackbeer.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-festival-pink transition-colors"
                      >
                        Steeplejack Brewing
                      </a>
                    </h5>
                    <p className="mt-3 text-gray-700">
                      Steeplejack Brewing beverage details are coming soon.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-festival-pink/10 p-4 rounded-xl">
                <p className="text-festival-pink font-semibold text-center">
                  Proceeds from the bar benefit the high school music program!
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-festival-yellow mr-3" />
                <h4 className="text-2xl font-bold text-gray-900">FOOD</h4>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/portside-logo.jpeg"
                    alt="Portside Bistro"
                    width={96}
                    height={96}
                    className="h-24 w-24 mr-3 object-contain"
                  />
                  <h5 className="text-xl font-bold text-gray-900">
                    <a
                      href="https://portsidebistro.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-festival-pink transition-colors"
                    >
                      Portside Bistro
                    </a>
                  </h5>
                </div>
                <p className="text-gray-700 mb-4">
                  The <strong>Portside Bistro truck</strong> brings the portable
                  version of Garibaldi's finest eating establishment! Enjoy
                  tender racks of ribs, creative burgers, and the freshest
                  seafood the coast has to offer.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/tonys-logo.png"
                    alt="Tony's Beach Bites"
                    width={96}
                    height={96}
                    className="h-24 w-24 mr-3 object-contain"
                  />
                  <h5 className="text-xl font-bold text-gray-900">
                    Tony's Beach Bites
                  </h5>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Tony's Beach Bites</strong> event catering brings a
                  special festival menu featuring seafood specials, classic
                  hand-sliced calamari, fish tacos, and delicious dogs with
                  vegan and gluten-free options. Don't miss their ridiculous
                  strawberry shortcake!
                </p>
              </div>

              <div className="bg-festival-blue/10 p-4 rounded-xl">
                <p className="text-festival-blue font-semibold text-center">
                  Slip into a food coma while listening to great music!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-16"
          style={{ opacity: featuresVisible ? 1 : 0 }}
        >
          <div
            className="bg-gradient-to-br from-festival-blue/10 via-festival-pink/5 to-festival-yellow/10 rounded-3xl p-8 md:p-12 shadow-lg"
            style={{
              opacity: featuresVisible ? 1 : 0,
              transform: `translateY(${featuresVisible ? "0" : "20px"})`,
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div className="text-center mb-8">
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Explore Nearby
              </h4>
              <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
            </div>
            <div className="mx-auto max-w-4xl space-y-5 text-center">
              <p className="text-lg text-gray-700 leading-relaxed md:text-xl">
                In addition to the amenities on site at the event, there are
                many restaurants and shops within walking distance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed md:text-xl">
                We encourage you to check out our local merchants featuring
                everything from <strong>art supplies</strong> to{" "}
                <strong>unique gifts</strong> to <strong>local foods</strong>.
              </p>
              <div className="bg-festival-blue/10 p-4 rounded-xl mt-6">
                <p className="text-festival-blue font-semibold text-center">
                  Everything you need is within walking distance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-festival-yellow/10 to-festival-yellow/5 rounded-3xl p-8 md:p-12 shadow-lg border border-festival-yellow/20"
          style={{
            opacity: featuresVisible ? 1 : 0,
            transform: `translateY(${featuresVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              VENDOR SIGN-UP
            </h3>
            <p className="text-xl md:text-2xl font-semibold text-festival-pink mb-6">
              Limited to about 15 spaces
            </p>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We are looking for vendors selling art and original crafts as
                well as anything experiential. All spaces are 10x10 and the cost
                for the entire festival is $100 per space. Electricity is
                available if needed. Food and alcohol vendors have already been
                sorted and we have no more space for those categories. Contact
                us with any questions at hello@ncamfoundation.org and use the
                form below when you are ready.
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <a
              href="https://forms.gle/ne19NiY9FJpCYFXV8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-festival-yellow hover:bg-festival-yellow/90 text-white font-bold py-4 px-8 text-lg min-w-[250px] text-center rounded-xl transition-all duration-300 no-underline shadow-lg hover:shadow-xl btn-hover-scale"
            >
              ART / CRAFT VENDOR FORM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
