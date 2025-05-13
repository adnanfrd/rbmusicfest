import Link from "next/link"

export default function VIPPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold">VIP Access</h1>

        <div className="mb-8 rounded-lg bg-pink-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-pink-800">VIP Benefits</h2>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li>Priority entry to all festival areas</li>
            <li>Exclusive VIP lounge with complimentary refreshments</li>
            <li>Meet and greet opportunities with select artists</li>
            <li>Premium viewing areas at all stages</li>
            <li>VIP-only restroom facilities</li>
            <li>Commemorative festival merchandise package</li>
          </ul>

          <p className="mb-4">VIP passes are limited and available on a first-come, first-served basis.</p>

          <button className="w-full rounded-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
            Purchase VIP Pass
          </button>
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
