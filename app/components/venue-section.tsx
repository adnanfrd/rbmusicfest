import Image from "next/image"
import Link from "next/link"

export default function VenueSection() {
  return (
    <section id="venue" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">VENUE & DIRECTIONS</h2>

        <p className="mb-12 text-center text-lg">
          Join us at the beautiful Rockaway Beach Wayside, with stunning ocean views and easy access.
        </p>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg">
          <div className="relative h-96 w-full">
            <Image
              src="/placeholder.svg?height=600&width=1200&query=rockaway beach oregon aerial view"
              alt="Rockaway Beach Wayside"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="bg-white p-6 text-center">
            <h3 className="mb-4 text-xl font-bold">Rockaway Beach Wayside</h3>
            <Link
              href="https://maps.google.com/?q=Rockaway+Beach+Wayside,+Rockaway+Beach,+OR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-black px-6 py-2 font-bold text-white transition hover:bg-opacity-80"
            >
              Open in Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
