"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Rockaway Beach Music Festival" width={50} height={50} />
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link href="#" className="rounded-full bg-blue-200 px-6 py-2 text-blue-800">
            RSVP
          </Link>
          <Link href="#" className="rounded-full bg-pink-200 px-6 py-2 text-pink-800">
            VIP Access
          </Link>
          <Link href="#" className="rounded-full bg-gray-200 px-6 py-2 text-gray-800">
            Get Updates
          </Link>
          <Link href="#" className="rounded-full bg-gray-200 px-6 py-2 text-gray-800">
            Directions
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12"></path> : <path d="M4 6h16M4 12h16M4 18h16"></path>}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <div className="flex flex-col space-y-2">
            <Link href="#" className="rounded-full bg-blue-200 px-6 py-2 text-center text-blue-800">
              RSVP
            </Link>
            <Link href="#" className="rounded-full bg-pink-200 px-6 py-2 text-center text-pink-800">
              VIP Access
            </Link>
            <Link href="#" className="rounded-full bg-gray-200 px-6 py-2 text-center text-gray-800">
              Get Updates
            </Link>
            <Link href="#" className="rounded-full bg-gray-200 px-6 py-2 text-center text-gray-800">
              Directions
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
