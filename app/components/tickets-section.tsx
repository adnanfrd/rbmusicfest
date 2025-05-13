export default function TicketsSection() {
  const tickets = [
    {
      name: "Single Day Pass",
      price: "$99",
      features: [
        "Access to all stages for one day",
        "Food and drink vendors",
        "Art installations",
        "Choose Friday, Saturday, or Sunday",
      ],
    },
    {
      name: "Weekend Pass",
      price: "$249",
      features: [
        "Access to all stages for all three days",
        "Food and drink vendors",
        "Art installations",
        "Festival t-shirt",
        "Fast lane entry",
      ],
      featured: true,
    },
    {
      name: "VIP Pass",
      price: "$399",
      features: [
        "Access to all stages for all three days",
        "VIP viewing areas at all stages",
        "VIP lounge access with complimentary drinks",
        "Festival merchandise package",
        "Fast lane entry",
        "Backstage tours",
      ],
    },
  ]

  return (
    <section id="tickets" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Tickets</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                ticket.featured ? "border-4 border-yellow-400 shadow-xl" : "border border-gray-200 shadow-lg"
              } overflow-hidden`}
            >
              <div className={`p-6 text-center ${ticket.featured ? "bg-yellow-400" : "bg-gray-100"}`}>
                <h3 className="text-2xl font-bold">{ticket.name}</h3>
                <p className="mt-4 text-4xl font-bold">{ticket.price}</p>
              </div>
              <div className="p-6">
                <ul className="mb-8 space-y-4">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="mr-3 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-full py-3 font-bold ${
                    ticket.featured
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-black text-white hover:bg-opacity-80"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            * All tickets are subject to a $5 processing fee. Children under 10 enter free with a paying adult.
          </p>
        </div>
      </div>
    </section>
  )
}
