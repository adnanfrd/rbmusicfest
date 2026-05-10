"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 pb-10 md:items-center md:py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/squatch-DCY8BTAEooyduNm7u5koD5N6njziJA.png"
          alt="Festival Background"
          className="w-full h-full object-cover object-[center_90%] md:object-center"
          width={300}
          height={200}
          onError={(e) => {
            console.error("Error loading background image:", e);
            e.currentTarget.src =
              "/placeholder.svg?height=1080&width=1920&text=Festival+Background";
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
        style={{ backgroundPosition: "0% 0%" }}
      ></div>

      <div
        className={`container relative z-20 text-center px-4 pt-2 md:pt-0 ${
          isLoaded
            ? "opacity-100 transition-opacity duration-1000"
            : "opacity-0"
        }`}
      >
        <div
          className={`mt-2 mb-2 md:mt-[60px] md:mb-6 ${
            isLoaded
              ? "opacity-100 transform-none transition-all duration-1000 delay-50"
              : "opacity-0 transform translate-y-5"
          }`}
        >
          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-3 mb-2 md:mb-4 flex-wrap">
            {[
              {
                href: "https://ncamfoundation.org",
                label: "NCAM Foundation",
                logo: "/images/Crow Cane.png",
              },
              {
                href: "https://steeplejackbeer.com",
                label: "Steeplejack Brewing",
                logo: "/images/NCAM.png",
              },
              {
                href: "mailto:hello@ncamfoundation.org?subject=Revival%20Drum%20Shop",
                label: "Revival Drum Shop",
                logo: "/images/Revival.png",
              },
              {
                href: "https://crowcane.com",
                label: "Crow Cane",
                logo: "/images/Steeplejack.png",
              },
            ].map(({ href, label, logo }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex h-16 w-28 items-center justify-center rounded-full bg-transparent p-0 transition-transform duration-200 hover:scale-110 sm:h-20 sm:w-36 md:h-24 md:w-40"
              >
                <Image
                  src={logo}
                  alt={label}
                  width={220}
                  height={72}
                  className="max-h-full w-full object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]"
                />
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`mb-4 ${
            isLoaded
              ? "opacity-100 transform-none transition-all duration-1000 delay-100"
              : "opacity-0 transform translate-y-5"
          }`}
        >
          <div className="title-image-container w-full px-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/rbmf-title-GWRcFb3YGP7Fiulma7arIRkXrZpcl0.png"
              alt="Rockaway Beach Music Festival"
              className="mx-auto filter drop-shadow-lg w-full"
              width={300}
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
        </div>

        <div className="h-[180px] md:h-[290px] lg:h-[360px]"></div>

        <div className="mt-8">
          <div
            className={`mb-16 max-w-4xl mx-auto ${
              isLoaded
                ? "opacity-100 transform-none transition-all duration-1000 delay-200"
                : "opacity-0 transform translate-y-5"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/50 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-white text-2xl font-medium md:text-3xl lg:text-4xl">
                    2026 Rockaway Beach Music Festival
                  </h2>
                </div>

                <div className="mb-8">
                  <p className="text-yellow-300 text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold drop-shadow-lg">
                    August 15th - Noon to 10 pm
                  </p>
                  <p className="mt-3 text-yellow-300 text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold drop-shadow-lg">
                    August 16th - Noon to 6 pm
                  </p>
                </div>

                <div className="mb-6">
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg"
                    style={{ color: "#ff00ff" }}
                  >
                    $0.00 Totally Free Show
                  </p>
                  <p className="mt-4 text-base text-white md:text-lg lg:text-xl">
                    RSVP is requested but not necessary.{" "}
                    <Link
                      href="/rsvp"
                      className="font-semibold text-blue-300 underline underline-offset-4 hover:text-blue-200"
                    >
                      RSVP here
                    </Link>
                  </p>
                </div>

                <p className="mx-auto mb-10 max-w-3xl text-sm leading-relaxed text-gray-100 md:text-base lg:text-lg">
                  The Rockaway Beach Music Festival celebrates original music of
                  all styles and is a free outdoor show with vendors, art
                  exhibits and two full days of live music. Bring a chair, or
                  make a donation and get VIP seating in the beer garden and
                  front of house. We are raising money to support art and music
                  in our high school and our community, please help if you can,
                  any amount helps!
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Link
                      href="/rsvp"
                      className="relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 font-bold text-lg rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl btn-hover-scale"
                    >
                      RSVP Form
                    </Link>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Link
                      href="https://rbmusicfest.eventbrite.com"
                      target="_blank"
                      className="relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 font-bold text-lg rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl btn-hover-scale"
                    >
                      Donate for VIP Seating
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
