"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Globe,
  Instagram,
  Youtube,
  LinkIcon,
  FileText,
  Facebook,
  Mail,
} from "lucide-react";
import ImageCarousel from "./image-carousel";
import VideoEmbed from "./video-embed";

interface SocialLink {
  name: string;
  url: string;
}

interface Video {
  title: string;
  url: string;
}

interface DocumentLink {
  title: string;
  url: string;
}

interface Artist {
  name: string;
  tag?: string;
  description?: string;
  fullBio?: string;
  image?: string;
  images?: string[];
  socialLinks?: SocialLink[];
  videos?: Video[];
  documentLinks?: DocumentLink[];
  website?: string;
}

interface ArtistModalProps {
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArtistModal({
  artist,
  isOpen,
  onClose,
}: ArtistModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "website":
        return <Globe className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "youtube":
        return <Youtube className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <LinkIcon className="w-4 h-4" />;
    }
  };

  if (!isOpen || !artist) return null;

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
            <Image
              src={artist.image || "/placeholder.svg"}
              alt={artist.name}
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => console.error("Error loading image:", e)}
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
            <p className="text-gray-700 whitespace-pre-line">
              {artist.fullBio || artist.description}
            </p>
          </div>

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

          {artist.videos && artist.videos.length > 0 && (
            <div className="mt-8">
              <VideoEmbed videos={artist.videos} />
            </div>
          )}

          {artist.documentLinks && artist.documentLinks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">Documents</h3>
              <div className="flex flex-wrap gap-3">
                {artist.documentLinks.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="ml-2">{doc.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {artist.website && (
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
          )}
        </div>
      </div>
    </div>
  );
}
