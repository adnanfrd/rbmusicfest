import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Rowdies } from "next/font/google"
import "./globals.css"

// Initialize the fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-rowdies",
})

export const metadata: Metadata = {
  title: "Rockaway Beach Music Festival",
  description: "Annual music festival at Rockaway Beach, Oregon",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${rowdies.variable}`}>{children}</body>
    </html>
  )
}
