"use client"

import type React from "react"

import Link from "next/link"
import { Info, ExternalLink, Calendar, Music } from "lucide-react"
import { useEffect, useState } from "react"
import ArtistModal from "./artist-modal"

export default function LineupSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [artistsVisible, setArtistsVisible] = useState(false)
  const [sundayVisible, setSundayVisible] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setArtistsVisible(true), 300)
          setTimeout(() => setSundayVisible(true), 600)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("lineup")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const artists = [
    {
      name: "Typhoon",
      description:
        "Typhoon is an American indie rock band that originated in Salem, Oregon, and is now based in Portland. Known for their orchestral arrangements and big-hearted indie rock anthems, Typhoon's sound often incorporates a traditional rock setup complemented by brass, strings, and auxiliary percussion.",
      fullBio:
        'Typhoon is an American indie rock band that originated in Salem, Oregon, and is now based in Portland. Formed in 2005 by high school friends Kyle Morton (singer-songwriter, piano, guitar), Toby Tanabe (bass, vocals), and Dave Hall (guitar, vocals), the band is known for its large and fluctuating membership, which has included up to fourteen musicians in the past.\n\nCharacterized by their orchestral arrangements and big-hearted indie rock anthems, Typhoon\'s sound often incorporates a traditional rock setup complemented by brass, strings, and auxiliary percussion. Lyrically, many of their songs delve into themes of mortality, partly influenced by frontman Kyle Morton\'s childhood struggle with Lyme disease.\n\nOver their career, Typhoon has released five studio albums, including their self-titled debut in 2005, "Hunger and Thirst" (2010), "White Lighter" (2013), "Offerings" (2018), and "Sympathetic Magic" (2021), as well as EPs like "A New Kind of House." Their most recent album, "Underground Complex No. 1," was released in 2022. The band has gained recognition for their dynamic live performances and has toured with notable acts such as The Decemberists, Belle and Sebastian, and The Shins. Key members, in addition to the founders, include drummer Alex Fitch and violinist/vocalist Shannon Steele.',
      website: "https://wearetyphoon.com",
      image: "/images/TyphoonPressPhoto2021.png",
      tag: "members of",
      videos: [
        {
          title: "Typhoon on NPR's Tiny Desk Series",
          url: "https://youtu.be/nDdO60XcqPQ?feature=shared&t=46",
        },
      ],
      socialLinks: [
        {
          name: "Website",
          url: "https://wearetyphoon.com",
        },
        {
          name: "Bandcamp",
          url: "https://wearetyphoon.bandcamp.com",
        },
        {
          name: "Instagram",
          url: "http://www.instagram.com/typhoonfamilyvacation",
        },
        {
          name: "Twitter/X",
          url: "http://www.twitter.com/wearetyphoon",
        },
        {
          name: "Facebook",
          url: "http://www.facebook.com/wearetyphoon",
        },
      ],
    },
    {
      name: "Glitterfox",
      description:
        "Glitterfox doesn't chase the algorithm — they follow instinct, community, and a kind of magia (Basque for magic). Formed by longtime creative partners Solange Igoa and Andrea Walker, the Portland-based band has built their career the analog way: a van, a map, and unforgettable shows stitched across towns like constellations.",
      fullBio:
        "Glitterfox doesn't chase the algorithm — they follow instinct, community, and a kind of magia (Basque for magic). Formed by longtime creative partners Solange Igoa and Andrea Walker, the Portland-based band has built their career the analog way: a van, a map, and unforgettable shows stitched across towns like constellations. Their rise has been defined by raw connection and fearless self-expression, with music that fuses garage rock grit, new wave shimmer, southern Americana soul, and a dancefloor pulse — all tangled with heart and heat until what emerges is unmistakably, inimitably Glitterfox.\n\nNow joined by Eric Stalker and Blaine Heinonen, Glitterfox is more than a band — they're chosen family, held together by sound and the invisible threads that music always knows how to weave. Whether launching Portland's annual Glitterfest as a wedding reception or channeling the messy middle of life into something unforgettable, Glitterfox's gift is their transparency, their defiance, and their freedom — sung loud.",
      website: "https://glitterfoxband.com/",
      image: "/images/glitterfox-band.jpeg",
      images: [
        "/images/glitterfox/glitterfox-1.jpeg",
        "/images/glitterfox/glitterfox-2.jpeg",
        "/images/glitterfox/glitterfox-3.jpeg",
        "/images/glitterfox/glitterfox-4.jpeg",
        "/images/glitterfox/glitterfox-5.jpeg",
        "/images/glitterfox/glitterfox-6.jpeg",
        "/images/glitterfox/glitterfox-7.jpeg",
        "/images/glitterfox/glitterfox-8.jpeg",
      ],
      videos: [
        {
          title: "OPB",
          url: "https://youtu.be/Jd1nu1jldH0?feature=shared",
        },
        {
          title: "La Da Da (Official Music Video)",
          url: "https://youtu.be/oqmj_LJ602M",
        },
      ],
      socialLinks: [
        {
          name: "Website",
          url: "https://glitterfoxband.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/glitterfoxband",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/channel/UC8SP3PG6O2V7JOH2aGerx5g",
        },
      ],
    },
    {
      name: "Mitch Whitaker",
      description:
        "To listen to Mitch's music is to hear songs of experience: on existential loneliness; on rejected identity; on grief and a crisis of faith—to listen to Mitch's music is to hear songs on the pretense of greenwashed capitalism; on the pervasiveness of white supremacy; on the trauma of gun violence.",
      fullBio:
        "To listen to Mitch's music is to hear songs of experience: on existential loneliness; on rejected identity; on grief and a crisis of faith—to listen to Mitch's music is to hear songs on the pretense of greenwashed capitalism; on the pervasiveness of white supremacy; on the trauma of gun violence—to listen to Mitch's music is to hear songs of yearning, songs of dependency, songs of entanglement.\n\nTrained in classical guitar at Western Washington University, Mitch began writing songs a few years ago and hasn't looked back. He's been a student at Berklee College of Music, lived and performed in Nashville, TN, and now resides in Portland, OR where he recently finished recording his first studio album.",
      website: "https://mitchwhitakermusic.com/",
      image: "/images/mitch-whitaker-band.webp",
      images: [
        "/images/mitch-whitaker/mitch-whitaker-1.webp",
        "/images/mitch-whitaker/mitch-whitaker-2.webp",
        "/images/mitch-whitaker/mitch-whitaker-3.webp",
        "/images/mitch-whitaker/mitch-whitaker-4.webp",
      ],
      videos: [
        {
          title: "Tiny Desk Submission: This Klan",
          url: "https://www.youtube.com/watch?v=tdHnLohk6Nc",
        },
        {
          title: "I Lose Myself (Live Studio Version)",
          url: "https://www.youtube.com/watch?v=rIDStWlRj9Y",
        },
        {
          title: "Everybody's Gotta Know (Live Studio Session)",
          url: "https://www.youtube.com/watch?v=TqJqsDubtSo",
        },
      ],
      socialLinks: [
        {
          name: "Linktree",
          url: "https://linktr.ee/mitchwhitakermusic",
        },
        {
          name: "Instagram",
          url: "https://instagram.com/mitchwhitakermusic",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@mitchwhitakermusic",
        },
        {
          name: "TikTok",
          url: "https://tiktok.com/@mitchwhitakermusic",
        },
        {
          name: "Spotify",
          url: "https://open.spotify.com/artist/4nR7wxyQbOF0sY5OSH9o9T?si=9FAlL7TjRX2p3xOPvKy3jA",
        },
        {
          name: "Website",
          url: "https://mitchwhitakermusic.com/",
        },
      ],
    },
    {
      name: "Mercury Coast",
      description:
        "Eric and Molly Sappington first formed the duo Mercury 27 years ago after moving from the Midwest to the Oregon Coast. Between 1999 and 2008, they released an EP and two full-length records.",
      fullBio:
        "Eric and Molly Sappington first formed the duo Mercury 27 years ago after moving from the Midwest to the Oregon Coast. Between 1999 and 2008, they released an EP and two full-length records.\n\nEric continued songwriting and performing around the Northwest, while Molly focused on raising their two sons.\n\nFlash forward to September 2022, when Ebon Bergeron approached Eric and asked if he'd want to add some guitar tracks to his drums. The result was a fast-moving expression of emotion and creativity. Both Eric and Ebon had been waiting for this moment, and it happened at just the right time.\n\nEnter Steve Doss, a recent transplant from California. Steve joined on standup bass, then Molly returned with backing vocals and percussion. MERCURY COAST was formed.\n\nWe have now built a solid local following and plan to release our first of 2 singles, Spring 2024. We look forward to making this world a better place through art and music. This is the time to feel the shine.",
      website: "https://mercurycoast.com",
      image: "/images/mercury-coast-band.jpeg",
      images: ["/images/mercury-coast/mercury-coast-1.jpeg", "/images/mercury-coast/mercury-coast-2.png"],
      videos: [
        {
          title: "Mercury Coast - Live at the Hoffman Center",
          url: "https://www.youtube.com/watch?v=KWTCSIBnups",
        },
        {
          title: "Mercury Coast - Live Performance",
          url: "https://youtu.be/E8vzPecOPqU?si=EX28-p35sDU3zaz_",
        },
      ],
      socialLinks: [
        {
          name: "Website",
          url: "https://mercurycoast.com",
        },
        {
          name: "Bandcamp",
          url: "https://mercury1.bandcamp.com/",
        },
        {
          name: "Spotify",
          url: "https://open.spotify.com/artist/42k4J5jjsvI3e65saK8Mxy",
        },
        {
          name: "Apple Music",
          url: "https://music.apple.com/us/artist/mercury-coast/1728194760",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@ericsappingtonart1317",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/mercury_coast/?igsh=dm5wOWpnbWJjcmJh",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/mooner02/",
        },
      ],
    },
  ]

  const openModal = (artist: any) => {
    setSelectedArtist(artist)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Improved function to handle image errors
  const handleImageError = (artistName: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image for ${artistName}:`, e.currentTarget.src)

    // Update the error state
    setImageErrors((prev) => ({
      ...prev,
      [artistName]: true,
    }))

    // Set fallback image
    e.currentTarget.src = `https://placehold.co/400x200/gray/white?text=${encodeURIComponent(artistName)}`
  }

  return (
    <section id="lineup" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4">
        {/* Day 1 Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-blue font-bold">LIVE MUSIC LINEUP</h2>
          <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>

          <div className="inline-flex items-center justify-center px-6 py-2 bg-festival-blue text-white rounded-full mb-4">
            <Calendar className="mr-2 h-5 w-5" />
            <h3 className="text-xl md:text-2xl font-bold">Saturday, August 16th</h3>
          </div>
          <p className="text-lg text-gray-600 mt-2">Full bands and high energy shows</p>
        </div>

        {/* Day 1 Artists */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
          style={{ opacity: artistsVisible ? 1 : 0 }}
        >
          {artists.map((artist, index) => (
            <div
              key={index}
              style={{
                opacity: artistsVisible ? 1 : 0,
                transform: `translateY(${artistsVisible ? "0" : "20px"})`,
                transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`,
              }}
            >
              <div className="rounded-lg border bg-white text-gray-900 shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 relative">
                <div className="p-0 aspect-video relative bg-gray-100 flex items-center justify-center overflow-hidden">
                  {/* Use a fallback image if we've already had an error for this artist */}
                  {imageErrors[artist.name] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
                      {artist.name}
                    </div>
                  ) : (
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className={`w-full h-full object-cover ${artist.name === "Typhoon" ? "object-center" : ""}`}
                      onError={(e) => handleImageError(artist.name, e)}
                    />
                  )}
                  {artist.tag && (
                    <div className="absolute top-2 left-2 bg-festival-pink text-white text-xs px-2 py-1 rounded-full">
                      {artist.tag}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-700 line-clamp-3">{artist.description}</p>
                </div>
                <div className="p-4 pt-0 flex justify-between items-center">
                  <button
                    onClick={() => openModal(artist)}
                    className="inline-flex items-center text-festival-blue hover:text-festival-pink transition-colors"
                  >
                    <Info className="mr-1 h-4 w-4" />
                    <span>More Info</span>
                  </button>
                  <Link
                    href={artist.website}
                    target="_blank"
                    className="inline-flex items-center text-gray-600 hover:text-festival-blue transition-colors"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider between days */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-100 px-4 text-sm text-gray-500">DAY 2</span>
          </div>
        </div>

        {/* Day 2 Section */}
        <div
          className="mt-16 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
          style={{
            opacity: sundayVisible ? 1 : 0,
            transform: `translateY(${sundayVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="bg-festival-blue text-white py-4 px-6">
            <div className="flex items-center justify-center">
              <Calendar className="mr-3 h-6 w-6" />
              <h3 className="text-2xl md:text-3xl font-bold">Sunday, August 17th</h3>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Acoustic Showcase</h4>
                <p className="text-lg text-gray-700 mb-6">
                  Sunday will feature acoustic acts and singer/songwriters, we are currently booking for this day, if
                  you would like to perform, please email{" "}
                  <a href="mailto:hello@ncamfoundation.org" className="text-festival-blue hover:underline">
                    hello@ncamfoundation.org
                  </a>{" "}
                  if you are interested, and be sure to visit NCAM and sign up for our mailing list to stay informed.
                </p>
              </div>

              <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Music className="h-8 w-8 text-festival-pink mr-3" />
                  <h4 className="text-xl font-bold text-gray-800">Stay Updated</h4>
                </div>
                <p className="text-gray-700 mb-6">
                  Sign up for our mailing list to receive the latest news about performers, schedules, and special
                  events.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="http://ncamfoundation.org"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
                  >
                    Sign Up at NCAM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArtistModal artist={selectedArtist} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
