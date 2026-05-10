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

const sneakerWaveBio = `DORAL VANCE - Keys and Vocals
Doral Vance has been involved in music all her life, beginning in church choir with her music director mother. She was involved in musical theater in Portland for many years, including the 1975 Portland company of "Hair," which inspired her to actually study music (Jazz in particular) and become a musician. She fronted many bands over the years as a vocalist/keyboardist/songwriter, including a Top-40 Disco band, rock/blues dance bands, country bands, and a 12 piece "Motown Sound" show group. For the past 10 years she's been leading the popular cover band "N.E. Daynow," and as of 2026, also formed "SNEAKERWAVE Blues Revue" with several top Oregon Coast musicians. Both bands are very actively enjoying playing throughout our region.

JESSIE SAMSEL - Guitar and Vocals
A fixture of the Northwest music scene since the 1970s, Jesse Samsel is a seasoned guitarist, songwriter, and producer. His career spans decades of worldwide touring and recording, with credits ranging from his own solo albums to collaborations with legendary artists like Terry Evans, Ry Cooder, Jim Keltner and Meredith Brooks. Today, Jesse brings his veteran guitar work and vocals to Sneaker Wave's mix of original blues and reimagined covers. Find out more at Jessesamsel.com and Lightning In A Bottle Records.

RODNEY DAHL - Guitar and vox
Rodney Dahl began performing in theater in Central Oregon (Bend) and performed in many theatrical productions. He worked as a player on the Crooked River Dinner Train for 7 years, where he played Jesse James, and also sang and played guitar. He subsequently formed a trio called "Doc Brown's Delorean," with one of his sons and a close friend, which played in the Bend area until 2012. He's been playing guitar and doing vocals with "N.E. Daynow" for the past 10 years, and is a founding member of "SNEAKERWAVE Blues Revue."

WILL IRACE - Bass
Will Irace--we don't know how to pronounce it either, we just call him Will from Nehalem--picked up bass guitar in high school so that he could chill on the sidelines instead of lugging a sousaphone around during field shows. His other musical projects include Portland's Sounds Like Chicken (they play everything, get it?) and Wheeler's Spindriff (drift, riff, get it!?). Don't tell anyone but SNEAKERWAVE is definitely Will's favorite ocean-themed band name pun. Plus he asked us to mention something about pinball.

COSMO JONES - Drums
Cosmo grew up unable to decide between drums and guitar so he plays both, but sticks to drums in this group of coastal maniacs. As the founder of one of LA's biggest rehearsal and recording studios he had the opportunity to play on a bunch of great records and engineer some as well. Somehow he stumbled into a Grammy, a couple of Emmys and a bunch of plaques. Prior to that he played/recorded/toured with a multitude of different bands, a few you've heard of, far more that you haven't.`;

const saturdayArtists: Performer[] = [
  ["Sneaker Wave", "TBA"],
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
    name === "Sneaker Wave"
      ? "/images/sneakerwave.png"
      : name === "Kill the Headlights"
      ? "/images/kill-the-headlights-1.jpg"
      : name === "The Upkeeps"
        ? "/images/the-upkeeps-promo-1.jpeg"
      : name === "Wes Youssi"
        ? "/images/wes youssi 1.png"
      : name === "Josefina Del Norte"
        ? "/images/JDN 1.png"
      : name === "Mike Mannequin"
        ? "/images/mike.jpg"
      : performerImages[index % performerImages.length],
  description:
    name === "Sneaker Wave"
      ? "Sneaker Wave Blues Revue brings original blues and reimagined covers from a lineup of seasoned Oregon Coast musicians."
      : name === "Kill the Headlights"
      ? "Kill the Headlights is a 4 piece rock 'n roll band out of the Vancouver, WA area, blending classic rock, hard rock, blues and outlaw country."
      : name === "The Upkeeps"
        ? "Influenced by early rock n' roll, punk, and power-pop, The UpKeeps bring their own sharp-edged flavor to the Saturday lineup."
      : name === "Wes Youssi"
        ? "Wes Youssi brings high-octane twang from Portland, blending western music with rock, surf, and latin tones."
      : name === "Josefina Del Norte"
        ? "Josefina Del Norte bridges South American cumbia, Andean huaynos, Afro-Peruvian music, and psychedelic electronic rock influences."
      : name === "Mike Mannequin"
        ? "Mike Mannequin is a melodic post-punk band from Portland, Oregon, blending moody landscapes, garage rock energy, and ambient punk undertones."
      : `Scheduled live performance on Saturday, August 15th at ${setTime}.`,
  fullBio:
    name === "Sneaker Wave"
      ? sneakerWaveBio
      : name === "Kill the Headlights"
      ? "Kill the Headlights is a 4 piece rock 'n roll band out of the Vancouver, WA area that formed in 2017 by founding members, Ryan Bowen and Nathun Finkhouse. Since then, the band has put out 2 full length studio albums and several singles through the Blind Squirrel Recording Label.\n\nThe band has been described as a mix of classic rock, hard rock, blues and outlaw country. They are known for their memorable original music and crowd pleasing covers!"
      : name === "The Upkeeps"
        ? "Influenced from the sounds of early rock n' roll, punk and power-pop, The UpKeeps bring their own sounds and flavor to the mouths of the world's dinner table. In a world with such appetite, they encourage difference between taste and a proud middle finger to the bland, a salute to the misfit and a friendly reminder to- KEEP UP."
      : name === "Wes Youssi"
        ? "Wes Youssi is a singer and songwriter from Portland, Oregon. Inspired to sing country artists his grandma loved in the 1960's, Wes formed The County Champs in 2014. He spent the next 10 years combing the loneliest roads and towns throughout the Northwest and beyond, playing for hard-working people like the ones he grew up around in Belvidere, Illinois. Along the way, he won them over with his original songs while gaining recognition from DJ's, writers, and fellow musicians for his authentic vocal and golden age sound.\n\nMany miles and whiskeys later, Wes and The County Champs have evolved to encompass a broader spectrum of music influenced by the barren roads they've traveled. Drawing inspiration from the border rock bands that first emerged in the 1950's, their newest songs celebrate the highest deserts and \"Live Free or Not At All\" kind of people. It's a sonic space they affectionately call \"high-octane twang,\" blending western music with rock, surf, and latin tones. This western noir concoction is garnished with neon lights and a dash of tragic romance. Get in your Cadillac and don't stop driving 'til sunrise!\n\nMeet the band members:\n\nWes Youssi\nGuitar / Lead Vocals\n\nDon Lawry\nDrums\n\nHowdy Darrel\nBass Guitar\n\nSpencer Schillinger\nAcoustic / Electric Guitar\n\nRoger Conley\nPedal Steel Guitar"
      : name === "Josefina Del Norte"
        ? "This band project began last summer through jam sessions among friends, creating a space to express our diaspora while bringing a fresh perspective. Our music reinterprets the songs we grew up with in our home countries, enriched by influences gathered through travel and cultural exchange. We see music as a bridge for community and love sharing our energy in intimate spaces and events that celebrate cultural diversity.\n\nOur fusion spans South American cumbia, Andean huaynos, and coplas from northern Argentina to Afro-Peruvian music and electronic, psychedelic rock influences, with voice and pedal effects in our instruments. Alongside our own versions of beloved songs, we are gradually bringing our well-received original compositions to the surface, authentically shaping the style we seek to develop.\n\nRight now we are working on recording music and new original songwriting to be released at the end of this year.\n\nBAND MEMBERS\n\nStefano Calles\n(El Salvador) - Guitar player and musical director and arranger, founder of Lxs Bastardxs, a project that blends music and poetry. Dreamer, composer and songwriter, his guitar is the distinctive sound of this project.\n\nJosefina del Norte\n(Argentina) is a singer and songwriter whose music is shaped by the emotions and memories of her beloved South America. Influenced by the landscapes of Jujuy, Cordoba, and Brazil, she blends ancestral and contemporary sounds into her own authentic expression.\n\nArtists like Li Saumet, Juana Molina, Susana Baca, Savia Andina, Mercedes Sosa, Gustavo Cerati, Nicola Cruz and many more guide her music, which moves between nostalgia, exploration, and deep-rooted traditions. Beyond her artistry, she is a cultural promoter who builds worldwide connections, using not just music but also other artistic expressions as a bridge for exploration and encounter.\n\nDavid Calvario\n(Mexico) - A personal groove on the bass line of the band. With over a decade of professional experience as a performing and studio musician and music educator, David offers his students a wealth of knowledge. An accomplished multi-instrumentalist specializing in bass (upright, electric, and mariachi bass), he is proficient in various genres, including Latin, R&B, rock, bossanova, folk, contemporary music, and a touch of jazz.\n\nLuis Hernandez\n(USA) is a multi-percussionist. He has led his Barrio Mestizo orchestra for 5 years, playing salsa, cumbia, and merengue music. Born in the United States, Luis identifies as Chicano with Mexican roots. The musical genres that have influenced him the most are Salsa, Cumbia, Chachacha, Mambo, Boogaloo, Soul, and Jazz.\n\nOwen Lowe\n(USA) Owen Lowe is a bassist based out of Portland, Oregon. With over 15 years of experience, Owen has performed a wide variety of styles, ranging from Funk, Soul, Jazz, Cumbia, Folk, Blues and many more. His love for music is demonstrated in his ability to keep everyone engaged in the groove."
      : name === "Mike Mannequin"
        ? "Mike Mannequin\nPortland, Oregon\n\nMike Mannequin is a melodic post-punk band from Portland, Oregon, blending moody landscapes with bursts of garage rock energy and ambient punk undertones. With a goal of making spooky pop, their sound is both haunting and dynamic.\n\nFounded by Michael Young, a fixture in Portland's music scene for over 20 years, the band features members from acts like Black Shelton, Corrina Repp, King Who, and Brother's Young. Rooted in the city's grassroots music community, Mike Mannequin crafts evocative songs that resonate with fans of dark, melodic sounds."
      : `${name} is scheduled to perform on Saturday, August 15th at ${setTime} for the 2026 Rockaway Beach Music Festival. Additional artist details will be shared as they are confirmed.`,
  website:
    name === "Kill the Headlights"
      ? "https://killtheheadlightsband.com"
      : name === "The Upkeeps"
        ? "https://www.theupkeeps.com/"
      : name === "Wes Youssi"
        ? "https://wesyoussimusic.com"
      : name === "Josefina Del Norte"
        ? "https://josefinadelnorte.godaddysites.com/"
      : name === "Mike Mannequin"
        ? "https://mikemannequin.bandzoogle.com/"
      : name === "Brenda Andrus"
        ? "https://brendaandrus.org/"
      : "",
  socialLinks:
    name === "Sneaker Wave"
      ? [
          {
            name: "Facebook",
            url: "https://www.facebook.com/sneakerwaveblues",
          },
        ]
      : name === "Kill the Headlights"
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
      : name === "The Upkeeps"
        ? [
            {
              name: "Website",
              url: "https://www.theupkeeps.com/",
            },
            {
              name: "Bandcamp",
              url: "https://theupkeeps.bandcamp.com/",
            },
            {
              name: "Spotify",
              url: "https://open.spotify.com/artist/1Hoi43Y6VdWIuPfiuM0w9u?si=8oMpQlEERPWqNDqFDyHe-g&nd=1&dlsi=af6839e06df14480",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/theupkeepsofficial/",
            },
          ]
      : name === "Wes Youssi"
        ? [
            {
              name: "Website",
              url: "https://wesyoussimusic.com",
            },
            {
              name: "SoundCloud",
              url: "https://soundcloud.com/neverluckyreocords",
            },
            {
              name: "Spotify",
              url: "https://open.spotify.com/artist/5IDHMY8A0kuCTgE5jOaHvB?si=z6Y7lNgJQbCouPDPuKc04Q",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/wesyoussimusic",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/wesyoussimusic",
            },
          ]
      : name === "Josefina Del Norte"
        ? [
            {
              name: "Website",
              url: "https://josefinadelnorte.godaddysites.com/",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/josefinadelnorte/",
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
      : name === "Mike Mannequin"
        ? [
            {
              name: "Website",
              url: "https://mikemannequin.bandzoogle.com/",
            },
            {
              name: "Spotify",
              url: "https://open.spotify.com/artist/7JC3PyaScW9GMGjxEeZZnA?si=xjwIzTWcSzmA3cHitwJ0hQ",
            },
            {
              name: "Bandcamp",
              url: "https://mikemannequin.bandcamp.com",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/mikemannequinmusic?igsh=MTJtc2wybmw5dm54MQ==",
            },
            {
              name: "YouTube",
              url: "https://youtube.com/@mikemannequin?si=QRWc44M8EKmBDFDC",
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
      : name === "Josefina Del Norte"
        ? [
            {
              title: "Josefina Del Norte",
              url: "https://youtu.be/uAvd2Lcr96U?si=TQEwPxbfCVPDNkpA",
            },
            {
              title: "Josefina Del Norte",
              url: "https://youtu.be/KHlfPzGV2Xk?si=sI0C2k09CDn5ELIw",
            },
          ]
      : [],
  images:
    name === "Sneaker Wave"
      ? [
          "/images/Cosmo1.JPG",
          "/images/Doral1.JPG",
          "/images/Jesse1.JPG",
          "/images/Rodney1.JPG",
          "/images/Will1.JPG",
        ]
      : name === "Kill the Headlights"
      ? [
          "/images/kill-the-headlights-1.jpg",
          "/images/kill-the-headlights-2.jpg",
        ]
      : name === "The Upkeeps"
        ? [
            "/images/the-upkeeps-promo-1.jpeg",
            "/images/the-upkeeps-promo-2.jpeg",
            "/images/the-upkeeps-album-cover.jpg",
          ]
      : name === "Wes Youssi"
        ? [
            "/images/wes youssi 1.png",
            "/images/wes youssi 2.png",
            "/images/wes youssi 3.png",
            "/images/wes youssi 4.png",
            "/images/wes youssi 5.png",
          ]
      : name === "Josefina Del Norte"
        ? [
            "/images/JDN 1.png",
            "/images/JDN 2.png",
            "/images/JDN 3.png",
            "/images/JDN 4.png",
            "/images/JDN 5.png",
            "/images/JDN 6.png",
            "/images/JDN 7.png",
            "/images/JDN 8.png",
          ]
      : name === "Mike Mannequin"
        ? ["/images/mike.jpg"]
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
  ["Oklahoma Perfect", "12:00 PM"],
  ["Kris Stuart", "1:15 PM"],
  ["Metts Ryan Collins", "3:45 PM"],
  ["Molly Bangs", "5:00 PM"],
].map(([name, setTime], index) => ({
  name,
  setTime,
  image:
    name === "Molly Bangs"
      ? "/images/MollyBANG-1.jpg"
      : name === "Oklahoma Perfect"
      ? "/images/OKP2.jpg"
      : name === "Kris Stuart"
      ? "/images/kris.png"
      : name === "Metts Ryan Collins"
      ? "/images/metts-ryan-collins-1.png"
      : performerImages[(index + 1) % performerImages.length],
  description:
    name === "Molly Bangs"
      ? "Molly Bangs brings live country-ish originals and eclectic roots energy to the Sunday lineup."
      : name === "Oklahoma Perfect"
        ? "Oklahoma Perfect is a dream country trio from Portland, Oregon, blending Dust Bowl sunsets, lost 80's soundtrack shimmer, and neon jukebox atmosphere."
      : name === "Kris Stuart"
        ? "Kris Stuart is a traveling singer/guitarist whose folk, blues, and country songs carry stories of sin, salvation, and a lifetime spent mining for music."
      : name === "Metts Ryan Collins"
        ? "Metts Ryan Collins is a Portland, Oregon power trio delivering gritty, vibrant guitar rock for fans of bluesy classic swagger and modern rock punch."
      : `Scheduled live performance on Sunday, August 16th at ${setTime}.`,
  fullBio:
    name === "Molly Bangs"
      ? "Sloppy Country Garbage Rock"
      : name === "Oklahoma Perfect"
        ? "Oklahoma Perfect is a dream country trio from Portland, OR, inhabiting the space between burnt orange Dust Bowl sunsets and lost 80's soundtracks, all filtered through the speakers of a neon jukebox. Songwriter Ladawn Sheffield's dulcet, swaying melodies gently weave family tales of heartbreak and hope. Rob Oberdorfer and Evan Railton (both current members of Ages & Ages) create retro futuristic backdrops of psychedelic swirls with tortured synths and glitchy guitar, evoking a Lynch-ian dream sequence."
      : name === "Kris Stuart"
        ? "Kris Stuart, singer/guitarist, is a traveling troubadour wandering the west. Folk music, blues and country melt together in songs of sin and salvation written and gathered from a lifetime of mining for music.\n\nSometimes seen as lead guitarist for Americana Stalwarts such as Willy Tea Taylor and the Fellership, Jaime Wyatt, The Turkey Buzzards or Riley Downing of The Deslondes.\n\nKris has shared stages with rock and roll legends like Foghat, The Marshall Tucker Band, Blue Oyster Cult, Phil Lesh, and Molly Hatchet, as well as soon to be legends The White Buffalo, Scott H Biram, Jesse Dayton, Turnpike Troubadours, and Blackberry Smoke. He has earned his place by playing most nights in a small room for a few people and in love with the opportunity to play music."
      : name === "Metts Ryan Collins"
        ? "If your idea of a real rock band for the 21st century is one that blends the swagger and bluesy elements of classic bands like The Rolling Stones, Led Zeppelin and Humble Pie, alongside more recent bands like The White Stripes, Black Keys and Rival Sons, then let me introduce you to the power trio from Portland, Oregon - Metts Ryan Collins.\n\nMetts Ryan Collins are bold new standard bearers for this rare breed. With Geoff Metts leading the charge on vocals and guitars, Dain Ryan on bass and vocals, and Mike Collins on drums and vocals, the band is taking the fight to listeners with their gritty and vibrant brand of guitar rock.\n\nFollowing up their self-titled EP with their debut full-length, Homegrown, Metts Ryan Collins garnered both local and regional acclaim, including a feature with the Portland Trail Blazers, who played the album's first single, \"Oregon,\" during games. They also showcased at NAMM and Whiskey-A-Go-Go, among others, earning a blue collar audience while delivering a tried-and-true, straight-to-the-gut rock 'n' roll brand that is timeless.\n\nThey are back with a new full-length, No Days Be Wasted, available soon on streaming, download and compact disc.\n\nRecommended if you like: Black Keys, Rival Sons, Vintage Trouble, Gary Clark Jr."
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
      : name === "Oklahoma Perfect"
        ? [
            {
              name: "Instagram",
              url: "https://www.instagram.com/oklahoma_perfect/",
            },
            {
              name: "Spotify",
              url: "https://open.spotify.com/artist/4kOFKtmx0odRXz38deqlPG?si=a7y0zZttTfafRkLwU4QGqw",
            },
            {
              name: "Bandcamp",
              url: "https://oklahomaperfect.bandcamp.com/album/bury-my-home",
            },
          ]
      : name === "Kris Stuart"
        ? [
            {
              name: "Instagram",
              url: "https://www.instagram.com/kris_stuart_music/",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/kris.stuart.35?mibextid=LQQJ4d",
            },
            {
              name: "YouTube",
              url: "https://youtu.be/x0YqwV_89ck?si=13yruPKMpr2aW9ji",
            },
          ]
      : name === "Metts Ryan Collins"
        ? [
            {
              name: "X",
              url: "https://x.com/mrcpdx",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/mettsryancollins/",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/mettsryancollins",
            },
            {
              name: "YouTube",
              url: "http://www.youtube.com/channel/UCIzjbyfVDs9vCImieqoHLSg",
            },
            {
              name: "Email",
              url: "mailto:mettsryancollins@gmail.com",
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
        ]
      : name === "Oklahoma Perfect"
        ? [
          {
            title: "Bury My Home",
            url: "https://www.youtube.com/watch?v=VI31_SmriM4&list=RDVI31_SmriM4&start_radio=1",
          },
        ]
      : name === "Kris Stuart"
        ? [
            {
              title: "Kris Stuart",
              url: "https://youtu.be/x0YqwV_89ck?si=13yruPKMpr2aW9ji",
            },
          ]
      : name === "Metts Ryan Collins"
        ? [
            {
              title: "Metts Ryan Collins",
              url: "https://youtu.be/ZNNTZENzpyo?si=JFnEetM7kCiHIiuE",
            },
          ]
      : [],
  images:
    name === "Molly Bangs"
      ? [
          "/images/MollyBANG-1.jpg",
          "/images/MollyBANG-2.jpg",
        ]
      : name === "Oklahoma Perfect"
      ? ["/images/OKP2.jpg"]
      : name === "Metts Ryan Collins"
      ? [
          "/images/metts-ryan-collins-1.png",
          "/images/metts-ryan-collins-2.png",
        ]
      : [],
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
