"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { convertGoogleDriveUrl } from "@/utils/image-utils"

interface BandDetailModalProps {
  band: any
  isOpen: boolean
  onClose: () => void
}

export function BandDetailModal({ band, isOpen, onClose }: BandDetailModalProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "bio">("bio")

  if (!isOpen) return null

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % band.photos.length)
  }

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + band.photos.length) % band.photos.length)
  }

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % band.videos.length)
  }

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev - 1 + band.videos.length) % band.videos.length)
  }

  // Process the photo URL - if it's a local path, use it directly, otherwise convert Google Drive URL
  const getPhotoUrl = (url: string | undefined) => {
    if (!url) return "/placeholder.svg"

    if (url.startsWith("/")) {
      return url
    }
    return convertGoogleDriveUrl(url) || "/placeholder.svg"
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      <div className="fixed left-[50%] top-[50%] z-50 w-[90%] max-w-4xl max-h-[90vh] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-2xl font-bold">
              {band.prefix && <span className="text-sm font-normal block">{band.prefix}</span>}
              {band.name}
            </h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`px-4 py-2 font-medium ${activeTab === "bio" ? "border-b-2 border-blue-500" : ""}`}
              onClick={() => setActiveTab("bio")}
            >
              Bio
            </button>
            {band.photos && band.photos.length > 0 && (
              <button
                className={`px-4 py-2 font-medium ${activeTab === "photos" ? "border-b-2 border-blue-500" : ""}`}
                onClick={() => setActiveTab("photos")}
              >
                Photos
              </button>
            )}
            {band.videos && band.videos.length > 0 && (
              <button
                className={`px-4 py-2 font-medium ${activeTab === "videos" ? "border-b-2 border-blue-500" : ""}`}
                onClick={() => setActiveTab("videos")}
              >
                Videos
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === "bio" && (
              <div className="space-y-4">
                <p className="whitespace-pre-line">{band.fullBio || band.description}</p>

                {band.links && band.links.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Connect with {band.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {band.links.map((link: any, index: number) => (
                        <Link
                          key={index}
                          href={link.url}
                          target="_blank"
                          className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
                        >
                          {link.name}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "photos" && band.photos && band.photos.length > 0 && (
              <div className="relative aspect-video bg-black">
                <Image
                  src={getPhotoUrl(band.photos[activePhotoIndex]) || "/placeholder.svg"}
                  alt={`${band.name} photo ${activePhotoIndex + 1}`}
                  fill
                  className="object-contain"
                />

                {band.photos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {band.photos.map((_: any, index: number) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full ${index === activePhotoIndex ? "bg-white" : "bg-white/50"}`}
                          onClick={() => setActivePhotoIndex(index)}
                          aria-label={`Go to photo ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === "videos" && band.videos && band.videos.length > 0 && (
              <div className="space-y-4">
                <div className="aspect-video">
                  <iframe
                    src={band.videos[activeVideoIndex].url
                      .replace("youtu.be/", "youtube.com/embed/")
                      .replace("watch?v=", "embed/")}
                    title={band.videos[activeVideoIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {band.videos.length > 1 && (
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={handlePrevVideo}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex items-center">
                      <span className="font-medium">{band.videos[activeVideoIndex].title}</span>
                      <span className="mx-2 text-gray-500">
                        {activeVideoIndex + 1} of {band.videos.length}
                      </span>
                    </div>
                    <button
                      onClick={handleNextVideo}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                      aria-label="Next video"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
