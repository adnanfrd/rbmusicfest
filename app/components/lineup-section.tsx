"use client";

import type React from "react";

import Link from "next/link";
import { Info, ExternalLink, Calendar, Music } from "lucide-react";
import { useEffect, useState } from "react";
import ArtistModal from "./artist-modal";
import Image from "next/image";

type Performer = {
  name: string;
  description: string;
  fullBio: string;
  image: string;
  setTime: string;
  website?: string;
  socialLinks?: { name: string; url: string }[];
  videos?: { title: string; url: string }[];
  images?: string[];
  documentLinks?: { title: string; url: string }[];
};

const performerImages = [
  "/images/mercury-coast-band.jpeg",
  "/images/glitterfox-band.jpeg",
  "/images/mitch-whitaker-band.webp",
  "/images/TyphoonPressPhoto2021.png",
  "/images/NE Day Now Image 1.webp",
  "/images/Sunkicks 1.jpg",
];

const saturdayArtists: Performer[] = [
  ["Sneakerwave Blues Revue", "12:00 PM"],
  ["Brenda Andrus", "1:30 PM"],
  ["Wes Youssi", "3:00 PM"],
  ["The Upkeeps", "4:30 PM"],
  ["Josefina Del Norte", "6:00 PM"],
  ["Kill the Headlights", "7:30 PM"],
  ["Mike Mannequin", "9:00 PM"],
].map(([name, setTime], index) => ({
  name,
  setTime,
  image:
    name === "Kill the Headlights"
      ? "/images/kill-the-headlights-1.jpg"
      : performerImages[index % performerImages.length],
  description:
    name === "Kill the Headlights"
      ? "Kill the Headlights is a 4 piece rock 'n roll band out of the Vancouver, WA area, blending classic rock, hard rock, blues and outlaw country."
      : `Scheduled live performance on Saturday, August 15th at ${setTime}.`,
  fullBio:
    name === "Kill the Headlights"
      ? "Kill the Headlights is a 4 piece rock 'n roll band out of the Vancouver, WA area that formed in 2017 by founding members, Ryan Bowen and Nathun Finkhouse. Since then, the band has put out 2 full length studio albums and several singles through the Blind Squirrel Recording Label.\n\nThe band has been described as a mix of classic rock, hard rock, blues and outlaw country. They are known for their memorable original music and crowd pleasing covers!"
      : `${name} is scheduled to perform on Saturday, August 15th at ${setTime} for the 2026 Rockaway Beach Music Festival. Additional artist details will be shared as they are confirmed.`,
  website:
    name === "Kill the Headlights"
      ? "https://killtheheadlightsband.com"
      : name === "Brenda Andrus"
        ? "https://brendaandrus.org/"
      : "",
  socialLinks:
    name === "Kill the Headlights"
      ? [
          {
            name: "Website",
            url: "https://killtheheadlightsband.com",
          },
          {
            name: "Facebook",
            url: "https://facebook.com/killtheheadlightsband",
          },
          {
            name: "Instagram",
            url: "https://instagram.com/killtheheadlightsband",
          },
          {
            name: "Spotify",
            url: "https://open.spotify.com/artist/2ihijqKCOlKzT9ofLPWEpT?si=_KEZpJqNSZuhLPC99HuH-g",
          },
          {
            name: "YouTube",
            url: "https://youtube.com/@killtheheadlights1687?si=zjl63ryLnXachmK4",
          },
        ]
      : name === "Brenda Andrus"
        ? [
            {
              name: "Website",
              url: "https://brendaandrus.org/",
            },
            {
              name: "YouTube",
              url: "https://youtube.com/@brendaandrus?si=YXFetxX52Zq8083e",
            },
          ]
      : [],
  videos:
    name === "Kill the Headlights"
      ? [
          {
            title: "Kill the Headlights Video 1",
            url: "https://youtu.be/IVTbKGGj7GE?si=tKvBvvGlyStXiy3v",
          },
          {
            title: "Kill the Headlights Video 2",
            url: "https://youtu.be/n3bq47U8O00?si=frhvw9Npm9jGZkaY",
          },
        ]
      : [],
  images:
    name === "Kill the Headlights"
      ? [
          "/images/kill-the-headlights-1.jpg",
          "/images/kill-the-headlights-2.jpg",
        ]
      : [],
  documentLinks:
    name === "Kill the Headlights"
      ? [
          {
            title: "Kill the Headlights Stage Plot (PDF)",
            url: "/docs/kill-the-headlights-stage-plot.pdf",
          },
        ]
      : [],
}));

const sundayArtists: Performer[] = [
  ["Mercury Coast", "12:00 PM"],
  ["Kris Stuart", "1:15 PM"],
  ["Perry Witt", "2:30 PM"],
  ["Metts Ryan Collins", "3:45 PM"],
  ["Molly Bangs", "5:00 PM"],
].map(([name, setTime], index) => ({
  name,
  setTime,
  image: performerImages[(index + 1) % performerImages.length],
  description:
    name === "Molly Bangs"
      ? "Molly Bangs brings live country-ish originals and eclectic roots energy to the Sunday lineup."
      : `Scheduled live performance on Sunday, August 16th at ${setTime}.`,
  fullBio:
    name === "Molly Bangs"
      ? "Molly Bangs performs live with a mix of original material and country-ish recordings.\n\nLive at Artichoke Music:\nhttp://www.youtube.com/live/cJ5_oC6KQ-o\n\nSome older country-ish recordings:\n\nNational Award Winning Music Video (Sparky):\nhttps://youtu.be/3MQbjv26IO4?si=KJfy8LyBzRmIwybO\n\nRed Wine and Saltines (played on multiple radio shows):\nhttps://youtu.be/W0b0LZiY_QY?si=5rIPwCrkoqWSK9Y9\n\nKim Smoltz (Ween Cover):\nhttps://youtu.be/8KegyoRFULQ?si=ZTdlSN9IMWy2TYz8"
      : `${name} is scheduled to perform on Sunday, August 16th at ${setTime} for the 2026 Rockaway Beach Music Festival. Additional artist details will be shared as they are confirmed.`,
  website: "",
  socialLinks:
    name === "Molly Bangs"
      ? [
          {
            name: "Instagram",
            url: "https://www.instagram.com/mollybangtheband",
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/molly.bang",
          },
        ]
      : [],
  videos:
    name === "Molly Bangs"
      ? [
          
          {
            title: "Sparky",
            url: "https://youtu.be/3MQbjv26IO4?si=KJfy8LyBzRmIwybO",
          },
          {
            title: "Red Wine and Saltines",
            url: "https://youtu.be/W0b0LZiY_QY?si=5rIPwCrkoqWSK9Y9",
          },
          {
            title: "Kim Smoltz (Ween Cover)",
            url: "https://youtu.be/8KegyoRFULQ?si=ZTdlSN9IMWy2TYz8",
          },
          {
            title: "Live at Artichoke Music",
            url: "http://www.youtube.com/live/cJ5_oC6KQ-o",
          },
        ]
      : [],
  images: [],
}));

export default function LineupSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [saturdayVisible, setSaturdayVisible] = useState(false);
  const [sundayVisible, setSundayVisible] = useState(false);
  const [stayUpdatedVisible, setStayUpdatedVisible] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<Performer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setSaturdayVisible(true), 300);
          setTimeout(() => setSundayVisible(true), 600);
          setTimeout(() => setStayUpdatedVisible(true), 900);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("lineup");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const openModal = (artist: Performer) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageError = (
    artistName: string,
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setImageErrors((prev) => ({
      ...prev,
      [artistName]: true,
    }));

    e.currentTarget.src = `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(
      artistName
    )}`;
  };

  const renderArtistGrid = (artists: Performer[], visible: boolean) => (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {artists.map((artist, index) => (
        <div
          key={artist.name}
          style={{
            opacity: visible ? 1 : 0,
            transform: `translateY(${visible ? "0" : "20px"})`,
            transition: `opacity 0.8s ease ${
              index * 0.1
            }s, transform 0.8s ease ${index * 0.1}s`,
          }}
        >
          <div className="rounded-lg border bg-white text-gray-900 shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300 relative">
            <div className="p-0 aspect-video relative bg-gray-100 flex items-center justify-center overflow-hidden">
              {imageErrors[artist.name] ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
                  {artist.name}
                </div>
              ) : (
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(artist.name, e)}
                />
              )}
              <div className="absolute top-2 right-2 bg-festival-blue text-white text-xs px-2 py-1 rounded-full">
                {artist.setTime}
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
              <p className="text-gray-700 line-clamp-3">{artist.description}</p>
            </div>
            <div className="p-4 pt-0 flex justify-between items-center">
              <button
                onClick={() => openModal(artist)}
                className="inline-flex items-center text-festival-blue hover:text-festival-pink transition-all duration-300 font-semibold"
              >
                <Info className="mr-1 h-4 w-4" />
                <span>More Info</span>
              </button>
              <div className="inline-flex items-center text-gray-400">
                <span>Lineup Update</span>
                <ExternalLink className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="lineup"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container px-4">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-blue font-bold">
            LIVE PERFORMANCE SCHEDULE
          </h2>
          <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
        </div>

        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-festival-blue text-white rounded-full mb-4">
              <Calendar className="mr-2 h-5 w-5" />
              <h3 className="text-xl md:text-2xl font-bold">
                Saturday the 15th
              </h3>
            </div>
          </div>
          {renderArtistGrid(saturdayArtists, saturdayVisible)}
        </div>

        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-100 px-4 text-sm text-gray-500">
              DAY 2
            </span>
          </div>
        </div>

        <div
          className="mb-16"
          style={{
            opacity: sundayVisible ? 1 : 0,
            transform: `translateY(${sundayVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-festival-pink text-white rounded-full mb-4">
              <Calendar className="mr-2 h-5 w-5" />
              <h3 className="text-xl md:text-2xl font-bold">
                Sunday the 16th
              </h3>
            </div>
          </div>
          {renderArtistGrid(sundayArtists, sundayVisible)}
        </div>

        <div
          className="mt-16 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
          style={{
            opacity: stayUpdatedVisible ? 1 : 0,
            transform: `translateY(${stayUpdatedVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="bg-festival-blue text-white py-4 px-6">
            <div className="flex items-center justify-center">
              <Music className="mr-3 h-6 w-6" />
              <h3 className="text-2xl md:text-3xl font-bold">
                NEWSLETTER SIGN UP
              </h3>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                Stay Informed
              </h4>
              <p className="text-lg text-gray-700 mb-6">
                Join the NCAM Foundation newsletter to keep up with the music
                festival and other cultural events.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://www.ncamfoundation.org/subscribe"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
                >
                  Sign Up for the Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArtistModal
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
