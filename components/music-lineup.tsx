"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { ArtistModal } from "./artist-modal"

const artists = [
  {
    name: "Mercury Coast",
    time: "12:00 PM",
    description:
      "Eric and Molly Sappington first formed the duo Mercury 27 years ago after moving from the Midwest to the Oregon Coast. Between 1999 and 2009, they released four albums and toured extensively throughout the Pacific Northwest.",
    images: ["/images/mercury-coast-1.jpg", "/images/mercury-coast-2.png"],
    website: "https://mercurycoast.com",
    instagram: "https://www.instagram.com/mercury_coast",
    facebook: "https://www.facebook.com/mooner02/",
    youtube: "https://www.youtube.com/@ericsappingtonart1317",
  },
  {
    name: "The Dead Lines",
    time: "1:30 PM",
    description:
      "The Dead Lines are a mystery wrapped in a conundrum and gently folded into an enigma. A secret enclave of coastal musicians come...",
    images: ["/images/dead-lines-hero.png"],
    isDebut: true,
  },
  {
    name: "Nik Xandir Wolf",
    time: "3:00 PM",
    description:
      "Writer, lyricist, and tomfool, Nik is multitalented. He originally manifested at the 2025 Rockaway Writers Rendezvous and has taken his poetry to...",
    images: ["/images/nik-headshot.avif", "/images/nik-logo.avif"],
    website: "https://www.nikxandirwolf.com",
    soundcloud: "https://soundcloud.com/nikxandirwolf",
    instagram: "https://www.instagram.com/nikxandirwolf",
    youtube: "https://www.youtube.com/watch?v=KsDFyHOytjs",
  },
  {
    name: "Mitch Whitaker",
    time: "4:45 PM",
    description:
      "To listen to Mitch's music is to hear songs of experience: on existential loneliness; on rejected identity, on grief and a crisis of faith—to listen to...",
    images: [
      "/images/mitch-studio.webp",
      "/images/mitch-couch.webp",
      "/images/mitch-recording.webp",
      "/images/mitch-portrait.webp",
    ],
    website: "https://mitchwhitakermusic.com",
    instagram: "https://www.instagram.com/mitchwhitakermusic",
    spotify: "https://open.spotify.com/artist/4nR7wxyQbOF0sY5OSH9o9Y",
    youtube: "https://www.youtube.com/@mitchwhitakermusic",
    tiktok: "https://www.tiktok.com/@mitchwhitakermusic",
  },
  {
    name: "Glitterfox",
    time: "6:30 PM",
    description:
      "Glitterfox doesn't chase the algorithm — they follow instinct, community, and a kind of magia (Basque for magic). Formed by longtime creativ...",
    images: ["/placeholder.svg?height=400&width=600"],
    website: "https://glitterfoxband.myshopify.com",
    instagram: "https://www.instagram.com/glitterfoxband",
    youtube: "https://www.youtube.com/watch?v=uPNjot-qjpg",
  },
  {
    name: "Typhoon",
    time: "8:30 PM",
    description:
      "Typhoon is an American indie rock band that originated in Salem, Oregon, and is now based in Portland. Known for their orchestral...",
    images: ["/images/typhoon-press-2021.png"],
    website: "https://wearetyphoon.com",
    instagram: "https://www.instagram.com/typhoonfamilyvacation",
    youtube: "https://www.youtube.com/watch?v=nDdO60XcqPQ",
    isMemberOf: "Various Portland Bands",
  },
]

export function MusicLineup() {
  const [selectedArtist, setSelectedArtist] = useState<(typeof artists)[0] | null>(null)

  return (
    <section id="lineup" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">LIVE MUSIC LINEUP</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            Saturday, August 16th
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedArtist(artist)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={artist.images[0] || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-blue-600">{artist.time}</Badge>
                    {artist.isDebut && <Badge className="bg-pink-500">debut show</Badge>}
                    {artist.isMemberOf && <Badge className="bg-purple-500">members of</Badge>}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{artist.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedArtist && (
        <ArtistModal artist={selectedArtist} isOpen={!!selectedArtist} onClose={() => setSelectedArtist(null)} />
      )}
    </section>
  )
}
