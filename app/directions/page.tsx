import Link from "next/link"
import Image from "next/image"

export default function DirectionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold">Festival Directions</h1>

        <div className="mb-8 overflow-hidden rounded-lg border border-gray-200">
          <div className="relative h-64 w-full">
            <Image src="/images/map.png" alt="Festival Map" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="mb-8 space-y-6">
          <div>
            <h2 className="mb-2 text-xl font-bold">Location</h2>
            <p>Rockaway Beach, NY</p>
            <p>Beach 94th Street and Shore Front Parkway</p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold">By Subway</h2>
            <p>Take the A train to Beach 90th Street. The festival entrance is a short walk from the station.</p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold">By Car</h2>
            <p>
              Limited parking is available near the festival grounds. We recommend using public transportation or
              rideshare services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold">By Ferry</h2>
            <p>
              The NYC Ferry Rockaway route provides service to Beach 108th Street. The festival is a 15-minute walk from
              the landing.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
