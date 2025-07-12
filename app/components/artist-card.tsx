"use client"

import { useState } from "react"
import ArtistModal from "./artist-modal"

interface SocialLink {
  name: string
  url: string
}

interface Video {
  title: string
  url: string
}

interface Artist {
  name: string
  image: string
  images?: string[]
  description: string
  fullBio?: string
  website: string | null
  setTime: string
  tag?: string
  videos?: Video[]
  socialLinks?: SocialLink[]
}

interface ArtistCardProps {
  artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleArtistClick = () => {
    setSelectedArtist(artist)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArtist(null)
  }

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
        onClick={handleArtistClick}
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              console.error("Error loading image:", e)
              e.currentTarget.src = `https://placehold.co/400x400/gray/white?text=${encodeURIComponent(artist.name)}`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Set Time Badge */}
          <div className="absolute top-3 left-3 bg-festival-blue text-white px-3 py-1 rounded-full text-sm font-bold">
            {artist.setTime}
          </div>

          {/* Tag Badge */}
          {artist.tag && (
            <div className="absolute top-3 right-3 bg-festival-pink text-white px-3 py-1 rounded-full text-sm font-bold">
              {artist.tag}
            </div>
          )}

          {/* Hover overlay with "Learn More" */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-black font-bold">
              Learn More
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-festival-blue transition-colors">
            {artist.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {artist.description}
          </p>
        </div>
      </div>

      <ArtistModal
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}