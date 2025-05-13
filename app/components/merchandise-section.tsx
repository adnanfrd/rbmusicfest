import Image from "next/image"
import Link from "next/link"

export default function MerchandiseSection() {
  return (
    <section id="merchandise" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">VIP MERCHANDISE</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-lg">
            <div className="relative h-64">
              <Image src="/placeholder.svg?key=jnxzl" alt="Trucker Hat" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">Trucker Hat</h3>
              <p className="mb-4">First edition RB Music Fest Trucker Hat</p>
              <p className="mb-6 text-xl font-bold">$50 donation</p>
              <Link
                href="/donate"
                className="inline-block rounded-full bg-black px-6 py-2 font-bold text-white transition hover:bg-opacity-80"
              >
                Donate Now
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-lg">
            <div className="relative h-64">
              <Image src="/placeholder.svg?key=eqsuh" alt="T-shirt" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">T-shirt</h3>
              <p className="mb-4">First edition RB Music Fest Tour T-shirt</p>
              <p className="mb-6 text-xl font-bold">$75 donation</p>
              <Link
                href="/donate"
                className="inline-block rounded-full bg-black px-6 py-2 font-bold text-white transition hover:bg-opacity-80"
              >
                Donate Now
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-lg">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=400&query=festival hoodie merchandise"
                alt="Zip Hoodie"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">Zip Hoodie</h3>
              <p className="mb-4">First edition RB Music Fest Zip Hoodie</p>
              <p className="mb-6 text-xl font-bold">$125 donation</p>
              <Link
                href="/donate"
                className="inline-block rounded-full bg-black px-6 py-2 font-bold text-white transition hover:bg-opacity-80"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
