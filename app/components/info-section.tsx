export default function InfoSection() {
  return (
    <section id="info" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Festival Information</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Location</h3>
            <p>Rockaway Beach, NY</p>
            <p>Beach 94th Street and Shore Front Parkway</p>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Dates & Times</h3>
            <p>Friday, August 12: 2PM - 10PM</p>
            <p>Saturday, August 13: 12PM - 10PM</p>
            <p>Sunday, August 14: 12PM - 9PM</p>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Tickets</h3>
            <p>Single Day: $99</p>
            <p>Weekend Pass: $249</p>
            <p>VIP Pass: $399</p>
            <button className="mt-4 rounded-full bg-black px-6 py-2 text-sm font-bold text-white">Buy Now</button>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Getting There</h3>
            <p>
              <strong>By Subway:</strong> A train to Beach 90th Street
            </p>
            <p>
              <strong>By Car:</strong> Limited parking available
            </p>
            <p>
              <strong>By Ferry:</strong> NYC Ferry to Beach 108th Street
            </p>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Accommodations</h3>
            <p>Several hotels and vacation rentals are available near the festival grounds.</p>
            <p>Camping is not permitted on the beach.</p>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">What to Bring</h3>
            <p>Sunscreen, hat, comfortable shoes</p>
            <p>Refillable water bottle</p>
            <p>Valid ID for alcohol purchases</p>
            <p>Cash and credit cards</p>
          </div>
        </div>
      </div>
    </section>
  )
}
