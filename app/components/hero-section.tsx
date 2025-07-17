"use client";

import Link from "next/link";
import { Music, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after a timeout as a fallback
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background image container - Using the actual blob URL */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/squatch-DCY8BTAEooyduNm7u5koD5N6njziJA.png"
          alt="Festival Background"
          className="w-full h-full object-cover"
          width={300} // 👈 Added width
          height={200}
          onError={(e) => {
            console.error("Error loading background image:", e);
            e.currentTarget.src =
              "/placeholder.svg?height=1080&width=1920&text=Festival+Background";
          }}
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
        style={{ backgroundPosition: "0% 0%" }}
      ></div>

      <div
        className={`container relative z-20 text-center px-4 pt-10 md:pt-0 ${
          isLoaded
            ? "opacity-100 transition-opacity duration-1000"
            : "opacity-0"
        }`}
      >
        {/* Sponsor Logos Section */}
        <div
          className={`mt-[60px] mb-6 ${
            isLoaded
              ? "opacity-100 transform-none transition-all duration-1000 delay-50"
              : "opacity-0 transform translate-y-5"
          }`}
        >
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-4">
            {[
              {
                href: "https://pelicanbrewing.com",
                alt: "Pelican Brewing Company",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pelican-Brewing-Company-Logo%404x-xtWmB1gpGXcooFXayaaCfULvRHLlhd.png",
              },
              {
                href: "https://ncamfoundation.org",
                alt: "NCAM Foundation",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NCAM-Foundation-bug-logo%404x-DdKDkYDkF8aUXjTaDGuzsFherQ2MWL.png",
              },
              {
                href: "https://crowcane.com",
                alt: "Crow Cane Studios",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crow-Cane-Studios-Logo%404x-CVXutGMCh1gWZF70HjCc1oJER4rSHd.png",
              },
            ].map(({ href, alt, src }) => (
              <Link
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  className="h-16 md:h-20 lg:h-24 w-auto filter drop-shadow-lg"
                  width={300} // 👈 Added width
                  height={200}
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.svg?height=96&width=300&text=${encodeURIComponent(
                      alt
                    )}`;
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Main Title Section */}
        <div
          className={`mb-8 ${
            isLoaded
              ? "opacity-100 transform-none transition-all duration-1000 delay-100"
              : "opacity-0 transform translate-y-5"
          }`}
        >
          {/* Original title image */}
          <div className="title-image-container w-full px-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/rbmf-title-GWRcFb3YGP7Fiulma7arIRkXrZpcl0.png"
              alt="Rockaway Beach Music Festival"
              className="mx-auto filter drop-shadow-lg w-full"
              width={300} // 👈 Added width
              height={200}
              style={{
                maxWidth: "100%",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              onError={(e) => {
                console.error("Error rendering title image:", e);
                e.currentTarget.src =
                  "/placeholder.svg?height=200&width=800&text=Rockaway+Beach+Music+Festival";
              }}
            />
          </div>

          {/* Updated subtitle with magenta separators */}
          <p className="text-yellow-300 text-base md:text-lg lg:text-xl font-bold tracking-wider drop-shadow-lg px-2 uppercase mt-4">
            Live Music{" "}
            <span className="text-magenta-500" style={{ color: "#ff00ff" }}>
              |
            </span>{" "}
            Local Food{" "}
            <span className="text-magenta-500" style={{ color: "#ff00ff" }}>
              |
            </span>{" "}
            Alcohol/Beer Garden for 21+{" "}
            <span className="text-magenta-500" style={{ color: "#ff00ff" }}>
              |
            </span>{" "}
            Art Exhibits{" "}
            <span className="text-magenta-500" style={{ color: "#ff00ff" }}>
              |
            </span>{" "}
            Local Craft Vendors
          </p>
        </div>

        {/* Large Spacer to push content down and reveal more background */}
        <div className="h-[150px] md:h-[250px] lg:h-[400px]"></div>

        <div className="mt-8">
          {/* Single Clean Container - Date, Venue, Free Show, Primary CTAs */}
          <div
            className={`mb-16 max-w-2xl mx-auto ${
              isLoaded
                ? "opacity-100 transform-none transition-all duration-1000 delay-200"
                : "opacity-0 transform translate-y-5"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/50 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
                {/* Date - Clean Typography */}
                <div className="mb-8">
                  <h2 className="text-yellow-300 text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold drop-shadow-lg">
                    AUGUST 16-17, 2025
                  </h2>
                </div>

                {/* Venue - Subtle Link */}
                <div className="mb-8">
                  <Link
                    href="https://maps.app.goo.gl/KGv1hedczPd91QC8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl md:text-2xl lg:text-3xl font-medium hover:text-blue-300 transition-colors duration-300 underline decoration-1 underline-offset-4 hover:decoration-blue-300"
                  >
                    The Wayside, Rockaway Beach, OR
                  </Link>
                </div>

                {/* Free Show / All Ages - Clean Typography */}
                <div className="mb-10">
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg"
                    style={{ color: "#ff00ff" }}
                  >
                    FREE SHOW <span className="text-yellow-300 mx-3">•</span>{" "}
                    ALL AGES
                  </p>
                </div>

                {/* Primary Action Buttons - Only These Should Look Like Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  {/* RSVP Button */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Link
                      href="https://rbmusicfest.eventbrite.com"
                      target="_blank"
                      className="relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 font-bold text-lg rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl btn-hover-scale"
                    >
                      RSVP on Eventbrite
                    </Link>
                  </div>

                  {/* VIP Button */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Link
                      href="https://rbmusicfest.eventbrite.com"
                      target="_blank"
                      className="relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 font-bold text-lg rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl btn-hover-scale"
                    >
                      Get VIP Access
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Section - Donate & Spotify - Pushed down */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mb-12 ${
              isLoaded
                ? "opacity-100 transform-none transition-all duration-1000 delay-600"
                : "opacity-0 transform translate-y-5"
            }`}
          >
            {/* Left Column - Donate */}
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/30 h-full flex flex-col shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-t-2xl"></div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-6 drop-shadow-lg">
                  Can't Go But Want to Support Music Education?
                </h3>
                <p className="text-gray-100 text-base md:text-lg mb-8 leading-relaxed flex-grow">
                  This free event is also a fundraiser for our high school music
                  program. Please consider helping, funding for music education
                  is hard to find!
                </p>
                <div className="flex justify-center px-4">
                  <div className="relative inline-block group w-full sm:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Link
                      href="https://www.ncamfoundation.org/donate"
                      target="_blank"
                      className="relative inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-center break-words"
                    >
                      <DollarSign className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="block sm:inline">
                        Donate to Support Music Education
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Spotify */}
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30 h-full flex flex-col shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-t-2xl"></div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-6 drop-shadow-lg">
                  RBMF 2025 Vibes Spotify Playlist
                </h3>
                <p className="text-gray-100 text-base md:text-lg mb-8 leading-relaxed flex-grow">
                  Want a preview of what our summer will sound like? Check out
                  our playlist on Spotify or follow any of the artists wherever
                  you stream music.
                </p>
                <div className="flex justify-center">
                  <div className="relative inline-block group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Link
                      href="https://open.spotify.com/playlist/4C7GtZVxKEjO9jyOAbdth5?si=326e2e7a07864a58&pt=57b1a8b02997ad8a1d2f6558fced685f"
                      target="_blank"
                      className="relative inline-flex items-center px-8 py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-105 rounded-xl font-bold text-lg whitespace-nowrap"
                    >
                      <Music className="mr-2 h-5 w-5 flex-shrink-0" />
                      Listen on Spotify
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
