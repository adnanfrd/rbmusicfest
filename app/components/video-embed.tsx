"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Video {
  title: string
  url: string
}

interface VideoEmbedProps {
  videos: Video[]
}

export default function VideoEmbed({ videos }: VideoEmbedProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstVideo = currentIndex === 0
    const newIndex = isFirstVideo ? videos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastVideo = currentIndex === videos.length - 1
    const newIndex = isLastVideo ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  if (!videos || videos.length === 0) {
    return null
  }

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const currentVideo = videos[currentIndex]
  const videoId = getYouTubeId(currentVideo.url)
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null

  return (
    <div className="relative w-full">
      <h3 className="text-xl font-bold mb-3">Videos</h3>

      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={currentVideo.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">Unable to load video</div>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h4 className="text-lg font-medium">{currentVideo.title}</h4>

        {videos.length > 1 && (
          <div className="flex space-x-2">
            <button
              onClick={goToPrevious}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next video"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
