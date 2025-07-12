"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Globe, Instagram, Youtube, Facebook, Music, Play } from "lucide-react"
import Image from "next/image"

interface ArtistModalProps {
  artist: {
    name: string
    time: string
    description: string
    images: string[]
    website?: string
    instagram?: string
    facebook?: string
    youtube?: string
    soundcloud?: string
    spotify?: string
    tiktok?: string
    isDebut?: boolean
    isMemberOf?: string
  }
  isOpen: boolean
  onClose: () => void
}

export function ArtistModal({ artist, isOpen, onClose }: ArtistModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {artist.name}
            <Badge className="bg-blue-600">{artist.time}</Badge>
            {artist.isDebut && <Badge className="bg-pink-500">debut show</Badge>}
            {artist.isMemberOf && <Badge className="bg-purple-500">members of</Badge>}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Photo Gallery */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Photos</h3>
            <div className="relative aspect-video">
              <Image
                src={artist.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${artist.name} - Photo ${currentImageIndex + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {artist.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {artist.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-700">{artist.description}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {artist.website && (
              <Button variant="outline" asChild>
                <a href={artist.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
            {artist.instagram && (
              <Button variant="outline" asChild>
                <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
            {artist.facebook && (
              <Button variant="outline" asChild>
                <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
            {artist.soundcloud && (
              <Button variant="outline" asChild>
                <a href={artist.soundcloud} target="_blank" rel="noopener noreferrer">
                  <Music className="w-4 h-4 mr-2" />
                  SoundCloud
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
            {artist.spotify && (
              <Button variant="outline" asChild>
                <a href={artist.spotify} target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Spotify
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
            {artist.tiktok && (
              <Button variant="outline" asChild>
                <a href={artist.tiktok} target="_blank" rel="noopener noreferrer">
                  <Music className="w-4 h-4 mr-2" />
                  TikTok
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
            {artist.youtube && (
              <Button variant="outline" asChild>
                <a href={artist.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
          </div>

          {/* YouTube Video Embed */}
          {artist.youtube && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Featured Video</h3>
              <div className="aspect-video">
                <iframe
                  src={artist.youtube.replace("watch?v=", "embed/")}
                  title={`${artist.name} - Featured Video`}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
