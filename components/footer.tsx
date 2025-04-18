import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-center">Rockaway Beach Music Festival</h2>
            <p className="text-gray-400 text-center">A free community event presented by NCAM Foundation</p>
          </div>

          <div className="flex gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <p className="mb-2">
              <Link href="https://ncamfoundation.org" target="_blank" className="text-festival-blue hover:underline">
                NCAM Foundation
              </Link>
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 Rockaway Beach Music Festival / NCAM Foundation. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
