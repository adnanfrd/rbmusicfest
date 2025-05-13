"use client"

import { useState } from "react"

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("friday")

  const schedule = {
    friday: [
      { time: "2:00 PM", artist: "Artist 1", stage: "Main Stage" },
      { time: "4:00 PM", artist: "Artist 2", stage: "Beach Stage" },
      { time: "6:00 PM", artist: "Artist 3", stage: "Main Stage" },
      { time: "8:00 PM", artist: "Artist 4", stage: "Main Stage" },
    ],
    saturday: [
      { time: "2:00 PM", artist: "Artist 5", stage: "Beach Stage" },
      { time: "4:00 PM", artist: "Artist 6", stage: "Main Stage" },
      { time: "6:00 PM", artist: "Artist 1", stage: "Beach Stage" },
      { time: "8:00 PM", artist: "Artist 2", stage: "Main Stage" },
    ],
    sunday: [
      { time: "2:00 PM", artist: "Artist 3", stage: "Main Stage" },
      { time: "4:00 PM", artist: "Artist 4", stage: "Beach Stage" },
      { time: "6:00 PM", artist: "Artist 5", stage: "Main Stage" },
      { time: "8:00 PM", artist: "Artist 6", stage: "Main Stage" },
    ],
  }

  return (
    <section id="schedule" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Festival Schedule</h2>

        <div className="mb-8 flex justify-center space-x-4">
          <button
            className={`rounded-full px-6 py-2 font-bold ${
              activeDay === "friday" ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveDay("friday")}
          >
            Friday
          </button>
          <button
            className={`rounded-full px-6 py-2 font-bold ${
              activeDay === "saturday" ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveDay("saturday")}
          >
            Saturday
          </button>
          <button
            className={`rounded-full px-6 py-2 font-bold ${
              activeDay === "sunday" ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveDay("sunday")}
          >
            Sunday
          </button>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="border-b p-4 text-left">Time</th>
                <th className="border-b p-4 text-left">Artist</th>
                <th className="border-b p-4 text-left">Stage</th>
              </tr>
            </thead>
            <tbody>
              {schedule[activeDay as keyof typeof schedule].map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border-b p-4">{item.time}</td>
                  <td className="border-b p-4 font-bold">{item.artist}</td>
                  <td className="border-b p-4">{item.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
