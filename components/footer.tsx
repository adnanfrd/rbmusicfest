import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { convertGoogleDriveUrl } from "@/utils/image-utils"

export function Footer() {
  const ncamLogoUrl = convertGoogleDriveUrl(
    "https://drive.google.com/file/d/1PSPY_cCnaSUfzH4AnXRRW-YeR6ilv1-x/view?usp=drive_link",
  )
  const sponsorsLogoUrl = convertGoogleDriveUrl(
    "https://drive.google.com/file/d/1xSS_hEotMPXcwdArq7vHaaDd-xmW5T23/view?usp=drive_link",
  )

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Rockaway Beach Music Festival</h2>
            <p className="text-gray-400">A free community event presented by NCAM Foundation</p>
          </div>

          <div className="mb-8 flex flex-col items-center">
            <div className="w-48 h-48 relative mb-4">
              <Image
                src={ncamLogoUrl || "/placeholder.svg"}
                alt="NCAM Foundation Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-center mb-6">Powered 100% by volunteers and sponsors</p>
            <div className="w-full max-w-2xl relative h-24 mb-4">
              <Image src={sponsorsLogoUrl || "/placeholder.svg"} alt="Sponsors" fill className="object-contain" />
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="p-2 rounded-full hover:bg-gray-800"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-gray-800"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="p-2 rounded-full hover:bg-gray-800"
            >
              <Twitter className="h-5 w-5" />
            </Link>
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
