import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rockaway Beach Music Festival",
  description: "Annual music festival at Rockaway Beach, Oregon",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/squatch.png" />
        <link rel="preload" as="image" href="/rbmf-title.png" />
        <link
          rel="preload"
          as="image"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TyphoonPressPhoto2021-9G8ndu0cfbyIrKMtwKyq6dkiOBse4z.png"
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
