"use client"

import { useEffect, useRef } from "react"
import { X, Globe, Instagram, Youtube, LinkIcon } from "lucide-react"
import ImageCarousel from "./image-carousel"
import VideoEmbed from "./video-embed"

interface SocialLink {
  name: string
  url: string
}

interface Video {
  title: string
  url: string
}

interface ArtistModalProps {
  artist: {
    name: string
    image: string
    images?: string[]
    description: string
    fullBio?: string
    website: string
    tag?: string
    videos?: Video[]
    socialLinks?: SocialLink[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ArtistModal({ artist, isOpen, onClose }: ArtistModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "website":
        return <Globe className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "bandcamp":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM9.5 15.5L9 8.4h5.1L19 15.5H9.5z" />
          </svg>
        )
      case "twitter":
      case "twitter/x":
      case "x":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        )
      case "facebook":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        )
      case "spotify":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        )
      case "tiktok":
      case "tik tok":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        )
      case "linktree":
        return <LinkIcon className="h-5 w-5" />
      case "apple music":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.02 1.88.475 3.208c-.192.466-.34.943-.408 1.44-.087.645-.108 1.298-.094 1.952.004.278.016.554.022.83v9.14c-.007.276-.02.558-.026.834-.01.413.044.826.098 1.237.146 1.11.55 2.082 1.31 2.867.42.43.904.77 1.436 1.02.46.22.942.374 1.446.457.368.06.74.083 1.113.09.32.01.64.01.96.01H19.05c.225-.004.45-.012.674-.024 1.13-.06 2.2-.356 3.09-1.07.38-.306.724-.658 1.006-1.056.372-.528.6-1.11.77-1.735.11-.41.185-.834.21-1.266.012-.21.014-.423.014-.636V7.97c-.003-.29-.005-.58-.01-.87l.01-.857zm-4.057 11.512c-.016.095-.033.19-.055.283-.08.383-.215.74-.42 1.065-.31.5-.72.865-1.227 1.143-.358.193-.74.328-1.148.4-.19.032-.383.044-.577.045-.544.005-1.088 0-1.632-.002h-8.46c-.522 0-1.043.005-1.564-.01-.39-.01-.77-.077-1.134-.215-.506-.188-.93-.512-1.258-.95-.2-.267-.356-.56-.445-.878-.06-.213-.09-.436-.09-.66 0-.307.004-.614.004-.92V7.76c0-.757-.006-1.514.012-2.27.015-.622.203-1.18.616-1.655.378-.43.848-.73 1.396-.882.335-.093.683-.142 1.03-.142 1.065-.005 2.13-.004 3.195-.004h8.987c.57 0 1.14.008 1.71.04.348.02.686.09 1.007.215.55.212.99.57 1.328 1.052.206.296.36.62.46.966.076.262.1.534.108.81.01.398.002.797.002 1.195V17.1c0 .16-.006.32-.018.48z" />
            <path d="M17.58 10.554c-.36-.037-.717-.06-1.075-.06-1.462 0-2.922 0-4.385.002-.116 0-.233.01-.348.022-.6.057-1.08.54-1.132 1.14-.02.235-.01.47-.01.706v4.85c0 .202.01.403.03.603.05.335.172.64.418.878.262.254.592.394.962.435.14.016.282.02.423.02h.14c1.268 0 2.535.002 3.803 0 .29 0 .58-.023.866-.076.674-.124 1.156-.57 1.28-1.244.025-.137.035-.276.035-.415V12.51c0-.202-.01-.403-.03-.603-.073-.6-.396-1.03-.977-1.353z" />
          </svg>
        )
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  if (!isOpen || !artist) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          animation: "modalFadeIn 0.3s ease-out forwards",
        }}
      >
        <div className="relative aspect-video">
          {artist.images && artist.images.length > 0 ? (
            <ImageCarousel images={artist.images} alt={artist.name} />
          ) : (
            <img
              src={artist.image || "/placeholder.svg"}
              alt={artist.name}
              className="w-full h-full object-cover rounded-t-lg"
              onError={(e) => {
                console.error("Error loading image:", e)
                e.currentTarget.src = `https://placehold.co/800x400/gray/white?text=${artist.name}`
              }}
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          {artist.tag && (
            <div className="absolute top-4 left-4 bg-festival-pink text-white px-3 py-1 rounded-full text-sm z-10">
              {artist.tag}
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{artist.name}</h2>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 whitespace-pre-line">{artist.fullBio || artist.description}</p>
          </div>

          {/* Social Links */}
          {artist.socialLinks && artist.socialLinks.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {artist.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {getSocialIcon(link.name)}
                    <span className="ml-2">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {artist.videos && artist.videos.length > 0 && (
            <div className="mt-8">
              <VideoEmbed videos={artist.videos} />
            </div>
          )}

          {/* Main CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href={artist.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
