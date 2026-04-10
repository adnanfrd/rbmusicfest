import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Music,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Rockaway Beach Music Festival
            </h2>
            <p className="text-gray-400">
              A free community event presented by NCAM Foundation
            </p>
          </div>

          <div className="mb-8 flex flex-col items-center">
            <div className="w-48 h-48 relative mb-4 flex items-center justify-center">
              <div className="w-[120px] h-[120px] bg-white rounded-lg flex items-center justify-center p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NCAM%20black%20logo%402x-5qsfdNpDCEs08s3T8Z0bgwxqfhs8mC.png"
                  alt="NCAM Foundation Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-center mb-6">
              Powered 100% by volunteers and sponsors
            </p>
            <div className="w-full max-w-2xl relative h-24 mb-4 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/grants-bug-5-bNgF23UBzCBy6ya0bbBbcBEG7CkJMC.png"
                alt="Sponsors"
                width={480}
                height={90}
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl font-semibold mb-4">
              Connect with us @rbmusicfest
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link
                href="https://www.instagram.com/rbmusicfest/"
                target="_blank"
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/rbmusicfest/"
                target="_blank"
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <Facebook className="h-5 w-5 mr-2" />
                <span>Facebook</span>
              </Link>
              <Link
                href="https://www.youtube.com/@NCAMFoundation"
                target="_blank"
                aria-label="YouTube"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <Youtube className="h-5 w-5 mr-2" />
                <span>YouTube</span>
              </Link>
              <Link
                href="https://soundcloud.com/rbmusicfest"
                target="_blank"
                aria-label="SoundCloud"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span>SoundCloud</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/rsvp"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                <span>RSVP Form</span>
              </Link>
              <Link
                href="https://linktr.ee/ncamfoundation"
                target="_blank"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.92,13.16a1.06,1.06,0,0,0,.93,1.56h6.22v7.59a1.69,1.69,0,0,0,1.69,1.69h4.5a1.69,1.69,0,0,0,1.69-1.69V14.72h6.22a1.06,1.06,0,0,0,.93-1.56Z" />
                </svg>
                <span>Linktree</span>
              </Link>
              <Link
                href="https://music.youtube.com/@NCAMFoundation"
                target="_blank"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <Music className="h-5 w-5 mr-2" />
                <span>YouTube Music</span>
              </Link>
              <Link
                href="https://open.spotify.com/user/31z2nl57tloz2qdtrehsa7m65vi4"
                target="_blank"
                className="p-2 rounded-full hover:bg-gray-800 flex items-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span>Spotify</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-4">
              <Link
                href="https://open.spotify.com/playlist/4C7GtZVxKEjO9jyOAbdth5?si=5cb433ff25d44c9c&pt=8068216c113f0be4613c65e7533ac107"
                target="_blank"
                className="inline-flex items-center text-festival-blue hover:underline"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                RBMF Festival Playlist
              </Link>
            </p>
            <p className="mb-2">
              <Link
                href="https://ncamfoundation.org"
                target="_blank"
                className="text-festival-blue hover:underline"
              >
                NCAM Foundation
              </Link>
            </p>
            <p className="text-gray-400 text-sm">
              Copyright (c) 2026 Rockaway Beach Music Festival / NCAM
              Foundation. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
