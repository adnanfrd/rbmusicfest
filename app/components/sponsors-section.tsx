import Image from "next/image"
import Link from "next/link"

const sponsors = [
  {
    href: "https://ncamfoundation.org",
    label: "NCAM Foundation",
    logo: "/images/NCAM.png",
  },
  {
    href: "https://crowcane.com",
    label: "Crow Cane",
    logo: "/images/Crow Cane.png",
  },
  {
    href: "https://steeplejackbeer.com",
    label: "Steeplejack Brewing",
    logo: "/images/Steeplejack.png",
  },
  {
    href: "https://revivaldrumshop.com",
    label: "Revival Drum Shop",
    logo: "/images/Revival.png",
  },
  {
    href: "https://fivestarguitars.com",
    label: "Five Star",
    logo: "/images/Five Star.png",
  },
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Sponsors</h2>

        <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-8">
          {sponsors.map(({ href, label, logo }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="sponsor-logo-link flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <Image
                src={logo}
                alt={label}
                width={120}
                height={120}
                className="sponsor-logo h-full w-full rounded-full object-contain"
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p>Interested in sponsoring the festival? Contact us at sponsors@rockawaybeachfest.com</p>
        </div>
      </div>
    </section>
  )
}
