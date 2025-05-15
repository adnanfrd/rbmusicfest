"use client"

import Link from "next/link"
import { Music } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set isLoaded to true after a timeout as a fallback
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background image container - Using direct HTML img tag instead of background-image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/squatch.png"
          alt="Festival Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error("Error loading background image:", e)
            e.currentTarget.src = "https://placehold.co/1920x1080/gray/white?text=Festival+Background"
          }}
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-pink-900/60 festival-texture"
        style={{ backgroundPosition: "0% 0%" }}
      ></div>

      <div
        className={`container relative z-20 text-center px-4 pt-10 md:pt-0 ${isLoaded ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}`}
      >
        <div
          className={`mt-[100px] ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-50" : "opacity-0 transform translate-y-5"}`}
        >
          {/* Added text above the logo */}
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-4 tracking-wider drop-shadow-lg px-2">
            NCAM Foundation Presents the First Annual
          </p>
        </div>

        <div
          className={`mb-8 ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-100" : "opacity-0 transform translate-y-5"}`}
        >
          {/* Title image - with explicit responsive styling */}
          <div className="title-image-container w-full px-2">
            <img
              src="/rbmf-title.png"
              alt="Rockaway Beach Music Festival"
              className="mx-auto filter drop-shadow-lg w-full"
              style={{
                maxWidth: "100%",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              onError={(e) => {
                console.error("Error rendering title image:", e)
                e.currentTarget.src = "https://placehold.co/800x200/gray/white?text=Rockaway+Beach+Music+Festival"
              }}
            />
          </div>
        </div>

        {/* Increased spacer div to 400px but make it responsive */}
        <div className="h-[200px] md:h-[300px] lg:h-[400px]"></div>

        <div className="mt-8">
          {/* Updated to match the size of "FREE SHOW / ALL AGES" */}
          <p
            className={`text-white mb-4 max-w-2xl mx-auto font-bold drop-shadow-lg ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-200" : "opacity-0 transform translate-y-5"}`}
          >
            <span className="text-xl md:text-2xl lg:text-3xl tracking-wider">AUGUST 16-17, 2025</span>
            <br />
            <span className="text-lg md:text-xl lg:text-2xl font-medium mt-2 block">
              The Wayside, Rockaway Beach, OR
            </span>
          </p>

          <p
            className={`text-white text-xl md:text-2xl lg:text-3xl mb-6 font-bold drop-shadow-lg ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-300" : "opacity-0 transform translate-y-5"}`}
          >
            FREE SHOW / ALL AGES
          </p>

          <div
            className={`mb-8 ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-400" : "opacity-0 transform translate-y-5"}`}
          >
            <p className="text-white text-base md:text-lg lg:text-xl mb-4 uppercase tracking-wider drop-shadow-lg px-2">
              LOCAL ARTISANS + GREAT FOOD + INTERACTIVE ART BOOTHS + LOCAL BEERS &amp; FULL BAR
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4 ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-500" : "opacity-0 transform translate-y-5"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <Link
                href="https://rbmusicfest.eventbrite.com"
                target="_blank"
                className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                RSVP on Eventbrite
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <Link
                href="https://rbmusicfest.eventbrite.com"
                target="_blank"
                className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 font-bold rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-200"
              >
                Get VIP Access
              </Link>
            </div>
          </div>

          <p
            className={`text-white text-base md:text-lg mt-8 mb-4 ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-600" : "opacity-0 transform translate-y-5"}`}
          >
            Can't go to the show but want to support music education?
          </p>

          <div
            className={`mb-12 ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-700" : "opacity-0 transform translate-y-5"}`}
          >
            <div className="relative inline-block group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <Link
                href="https://www.ncamfoundation.org/donate"
                target="_blank"
                className="relative inline-flex items-center justify-center px-8 py-3 font-bold rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 transition-colors duration-200"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Added 50px more vertical padding between Donate and Spotify links - make responsive */}
          <div className="h-[30px] md:h-[40px] lg:h-[50px]"></div>

          {/* Spotify playlist link - improved for mobile */}
          <div
            className={`mt-8 px-4 ${isLoaded ? "opacity-100 transform-none transition-all duration-1000 delay-800" : "opacity-0 transform translate-y-5"}`}
          >
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75"></div>
              <Link
                href="https://open.spotify.com/playlist/4C7GtZVxKEjO9jyOAbdth5?si=326e2e7a07864a58&pt=57b1a8b02997ad8a1d2f6558fced685f"
                target="_blank"
                className="relative inline-flex items-center px-4 sm:px-6 py-3 bg-black/80 backdrop-blur-sm rounded-lg text-white hover:bg-black/90 transition-colors duration-200"
              >
                <Music className="mr-2 sm:mr-3 h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-base sm:text-lg font-medium">Check out the RBMF 2025 Vibes Spotify Playlist</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
