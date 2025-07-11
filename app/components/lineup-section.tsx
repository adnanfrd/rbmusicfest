import ArtistCard from "./artist-card"

const LineupSection = () => {
  const saturdayArtists = [
    {
      name: "Mercury Coast",
      description:
        "Eric and Molly Sappington first formed the duo Mercury 27 years ago after moving from the Midwest to the Oregon Coast. Between 1999 and 2008, they released an EP and two full-length records.",
      fullBio:
        "Eric and Molly Sappington first formed the duo Mercury 27 years ago after moving from the Midwest to the Oregon Coast. Between 1999 and 2008, they released an EP and two full-length records.\n\nAfter a long hiatus, Mercury Coast has returned to the music scene with renewed energy and a fresh perspective. Their sound blends folk, indie rock, and coastal influences, creating music that captures the essence of life by the Pacific Ocean.\n\nThe duo's songwriting draws from their experiences living on the Oregon Coast, with themes of nature, relationships, and the passage of time woven throughout their work. Their intimate performances and heartfelt lyrics have earned them a dedicated following in the Pacific Northwest music community.",
      website: "https://mercurycoast.com",
      image: "/placeholder.svg?height=400&width=400&text=Mercury Coast",
      setTime: "12:00 PM",
      images: ["/placeholder.svg?height=400&width=400&text=Mercury Coast"],
      videos: [],
      socialLinks: [{ name: "Website", url: "https://mercurycoast.com" }],
    },
    {
      name: "The Dead Lines",
      description:
        "The Dead Lines are a mystery wrapped in a conundrum and gently folded into an enigma. A secret enclave of coastal musicians come together to form a one-time supergroup show to support music education. Purveyors of ill ass yacht rap, they emerge in the middle of summer to remind us how to have a good time.",
      fullBio:
        "The Dead Lines are a mystery wrapped in a conundrum and gently folded into an enigma. A secret enclave of coastal musicians come together to form a one-time supergroup show to support music education. Purveyors of ill ass yacht rap, they emerge in the middle of summer to remind us how to have a good time.\n\nThis special collaboration brings together some of the most talented musicians from the Oregon Coast for a unique performance that promises to be both entertaining and memorable. The group's approach to 'yacht rap' combines smooth, laid-back vibes with clever wordplay and coastal themes.\n\nAs a one-time supergroup, The Dead Lines represent the collaborative spirit of the local music community, coming together specifically to support the cause of music education while delivering an unforgettable show.",
      website: null,
      image: "/placeholder.svg?height=400&width=400&text=The Dead Lines",
      setTime: "1:30 PM",
      tag: "debut show",
      images: ["/placeholder.svg?height=400&width=400&text=The Dead Lines"],
      videos: [],
      socialLinks: [],
    },
    {
      name: "Nik Xandir Wolf",
      description:
        "Writer, lyricist, and tomfool, Nik is multitalented. He originally manifested at the 2025 Rockaway Writers Rendezvous and has taken his poetry to new levels by creating his own genre of surf cowboy hip hop. We're putting together a backing band so Nik will be performing his hits as a live band performance!",
      fullBio:
        "Writer, lyricist, and tomfool, Nik is multitalented. He originally manifested at the 2025 Rockaway Writers Rendezvous and has taken his poetry to new levels by creating his own genre of surf cowboy hip hop. We're putting together a backing band so Nik will be performing his hits as a live band performance!\n\nNik's unique artistic vision combines the laid-back vibes of surf culture with the storytelling tradition of cowboy ballads and the rhythmic energy of hip hop. This innovative fusion creates a sound that's entirely his own, reflecting his creative spirit and willingness to push boundaries.\n\nAs a performer, Nik brings high energy and entertainment value to every show. His background in writing and poetry informs his lyrical approach, creating songs that are both meaningful and fun. The addition of a live backing band for this performance promises to elevate his already dynamic stage presence.",
      website: "https://nikxandirwolf.com",
      image: "/placeholder.svg?height=400&width=400&text=Nik Xandir Wolf",
      setTime: "3:00 PM",
      images: ["/placeholder.svg?height=400&width=400&text=Nik Xandir Wolf"],
      videos: [],
      socialLinks: [{ name: "Website", url: "https://nikxandirwolf.com" }],
    },
    {
      name: "Mitch Whitaker",
      description:
        "To listen to Mitch's music is to hear songs of experience: on existential loneliness; on rejected identity; on grief and a crisis of faith—to listen to Mitch's music is to hear songs on the pretense of greenwashed capitalism; on the pervasiveness of white supremacy; on the trauma of gun violence.",
      fullBio:
        "To listen to Mitch's music is to hear songs of experience: on existential loneliness; on rejected identity; on grief and a crisis of faith—to listen to Mitch's music is to hear songs on the pretense of greenwashed capitalism; on the pervasiveness of white supremacy; on the trauma of gun violence.\n\nMitch Whitaker is an artist who doesn't shy away from difficult topics. His songwriting confronts the complexities of modern life with unflinching honesty, creating music that serves as both personal catharsis and social commentary. His work explores themes that many artists avoid, making his voice both unique and necessary in today's musical landscape.\n\nAs a performer, Mitch brings intensity and authenticity to every show. His ability to tackle heavy subjects while maintaining musical accessibility has earned him respect in the indie music community. His performances are both emotionally powerful and thought-provoking, leaving audiences with much to consider long after the music ends.",
      website: "https://mitchwhitakermusic.com/",
      image: "/placeholder.svg?height=400&width=400&text=Mitch Whitaker",
      setTime: "4:45 PM",
      images: ["/placeholder.svg?height=400&width=400&text=Mitch Whitaker"],
      videos: [],
      socialLinks: [{ name: "Website", url: "https://mitchwhitakermusic.com/" }],
    },
    {
      name: "Glitterfox",
      description:
        "Glitterfox doesn't chase the algorithm — they follow instinct, community, and a kind of magia (Basque for magic). Formed by longtime creative partners Solange Igoa and Andrea Walker, the Portland-based band has built their career the analog way: a van, a map, and unforgettable shows stitched across towns like constellations.",
      fullBio:
        "Glitterfox doesn't chase the algorithm — they follow instinct, community, and a kind of magia (Basque for magic). Formed by longtime creative partners Solange Igoa and Andrea Walker, the Portland-based band has built their career the analog way: a van, a map, and unforgettable shows stitched across towns like constellations.\n\nThe duo's approach to music-making is refreshingly authentic in an age of digital saturation. They prioritize genuine connection with their audience and community over viral moments or streaming numbers. Their sound blends indie rock with folk influences, creating music that feels both intimate and expansive.\n\nSolange and Andrea's partnership extends beyond music into a shared philosophy about art, community, and the power of live performance. Their shows are known for creating a sense of shared experience, bringing audiences together through the universal language of music. Their commitment to the 'analog way' of building a career speaks to their dedication to authentic artistic expression.",
      website: "https://glitterfoxband.com/",
      image: "/placeholder.svg?height=400&width=400&text=Glitterfox",
      setTime: "6:30 PM",
      images: ["/placeholder.svg?height=400&width=400&text=Glitterfox"],
      videos: [],
      socialLinks: [{ name: "Website", url: "https://glitterfoxband.com/" }],
    },
    {
      name: "Typhoon",
      description:
        "Typhoon is an American indie rock band that originated in Salem, Oregon, and is now based in Portland. Known for their orchestral arrangements and big-hearted indie rock anthems, Typhoon's sound often incorporates a traditional rock setup complemented by brass, strings, and auxiliary percussion.",
      fullBio:
        "Typhoon is an American indie rock band that originated in Salem, Oregon, and is now based in Portland. Known for their orchestral arrangements and big-hearted indie rock anthems, Typhoon's sound often incorporates a traditional rock setup complemented by brass, strings, and auxiliary percussion.\n\nLed by Kyle Morton, Typhoon has built a reputation for creating emotionally powerful music that combines indie rock sensibilities with orchestral grandeur. The band's large ensemble allows for rich, layered compositions that can shift from intimate moments to soaring, anthemic passages.\n\nTyphoon's live performances are particularly notable for their ability to translate their complex studio arrangements into compelling live experiences. The band's commitment to musical craftsmanship and emotional authenticity has earned them critical acclaim and a devoted fanbase throughout the Pacific Northwest and beyond.",
      website: "https://wearetyphoon.com",
      image: "/placeholder.svg?height=400&width=400&text=Typhoon",
      setTime: "8:30 PM",
      tag: "members of",
      images: ["/placeholder.svg?height=400&width=400&text=Typhoon"],
      videos: [],
      socialLinks: [{ name: "Website", url: "https://wearetyphoon.com" }],
    },
  ]

  const sundayArtists = [
    {
      name: "Doral Vance with N.E. Day Now",
      description:
        "N.E. Daynow features Doral Vance on keyboard, Rodney Dahl on guitar, and Tim Croman on bass. Doral's contralto vocals provide a unique spin on a wide variety of well known and loved popular music.",
      fullBio:
        'N.E. Daynow features Doral Vance on keyboard, Rodney Dahl on guitar, and Tim Croman on bass. Doral\'s contralto vocals provide a unique spin on a wide variety of well known and loved popular music. Rodney\'s guitar stylings and vocals add some flavor, and Tim\'s solid bass and rock voice give this trio some extra sauce for their covers of classic rock, pop, blues, jazz, and a smidgeon of country.\n\nDoral Vance has been involved in music all her life, beginning in church choir with her music director mother. She was involved in musical theater in Portland for many years, including the 1975 Portland company of "Hair," which inspired her to actually study music and become a musician. She fronted many bands over the years as a vocalist/keyboardist, including a Top-40 Disco band, rock/blues dance bands, country bands, and a 12 piece "Motown Sound" show group. Doral also has written many original songs, some of which you can find on any streaming service. More recordings are in the works and you can purchase her songs and CD(s) on Bandcamp at https://doralvance.bandcamp.com.\n\nRodney Dahl began performing in theater in Central Oregon and performed in many theatrical productions. He worked as a player on the Crooked River Dinner Train for 7 years, where he also sang and played guitar. He subsequently formed a trio called "Doc Brown\'s Delorean," with one of his sons and a close friend, which played in the Bend area until 2012. Rodney has written a few original songs and is our resident "story teller."\n\nTim Croman brings his "rocker style" to the band as a former member and front man for The Exiles, with whom he played bass and sang a variety of cover tunes since 2008. Tim has written several original tunes, some of which you may hear at your next N.E. Day Now show. Stay tuned!',
      website: "https://nedaynow.com",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NE%20Daynow%20Image%201-6IyLw6rr1HiJMUnru5LDp36xB0WQsn.webp",
      setTime: "12:15 PM",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NE%20Daynow%20Image%201-6IyLw6rr1HiJMUnru5LDp36xB0WQsn.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NE%20Daynow%20Image%202-AJlxgPiIYWJSn4RUBfDsFmrnXPLUmC.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NE%20Daynow%20Image%203-8KN6J7e5PILingk8CIzE7xscHG5pJY.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NE%20Daynow%20Image%204-hvcoCrIHXjyxCNczeKgbEKrWtT30DR.webp",
      ],
      videos: [
        {
          title: "N.E. Day Now Performance",
          url: "https://www.youtube.com/watch?v=MSW2KU79wlg",
        },
      ],
      socialLinks: [
        { name: "Website", url: "https://nedaynow.com" },
        { name: "Facebook", url: "https://www.facebook.com/nedaynowmusic" },
        { name: "Instagram", url: "https://www.instagram.com/nedaynowmusic" },
        { name: "Bandcamp", url: "https://doralvance.bandcamp.com" },
      ],
    },
    {
      name: "Blaine Heinonen",
      description: "Artist information coming soon...",
      fullBio: "Artist information coming soon...",
      website: null,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blaine%20Heinonen.png-V0nmZYVKwVwYmWbVUJJMytv1tPWX1a.jpeg",
      setTime: "1:30 PM",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blaine%20Heinonen.png-V0nmZYVKwVwYmWbVUJJMytv1tPWX1a.jpeg"],
      videos: [],
      socialLinks: [],
    },
    {
      name: "Sunkicks",
      description:
        "Born from the pizza/pub jam scene of Hillsboro, Oregon, the band Sunkicks draws on experience and stylings from bluegrass to pop rock. Combining lilting lead vocals, moving instrumental riffs and understated, but playful bass lines, this multi-generational indie-folk group tells stories that everyone can relate to.",
      fullBio:
        "Born from the pizza/pub jam scene of Hillsboro, Oregon, the band Sunkicks draws on experience and stylings from bluegrass to pop rock. Combining lilting lead vocals, moving instrumental riffs and understated, but playful bass lines, this multi-generational indie-folk group tells stories that everyone can relate to.\n\nYou'll laugh, you'll cry, you'll dance a little.\n\nWe completed the tracking, mixing and mastering of our first EP over the 2023 winter holidays and released \"pity parade\" 2-Feb-2024. We are performing these songs as well as a bunch of new ones while we are also tracking them in the studio.\n\nThe original members of Sunkicks met at Pizzario at an open weekly not-quite-bluegrass jam. After playing some old country and traditional folk tunes that none of us had played before, we realized how well we could musically read each other, and how much we liked each other. Katie had been playing solo acoustic shows and Paul had a long history with an alt-country band in Portland. In early 2023, we decided to create a safe, supportive, creative space and see where we could take it.\n\nWe converted one of Katie's acoustic gig's at a winery into a Sunkicks show and something magical happened. We added harmonies, guitar leads, bass lines and some cajon, of course, but the energy between us was tangible. Growing from the jam scene created an interest in us to try things and to trust each other. From that trust has grown a love that emanates from the stage. Katie will lead songs into repeats, holding patterns, extra choruses, or simply toss an extra solo at a guest soloist. We thrive on that.\n\nWe completed the tracking and mixing of our first 7 songs in mid December 2023 and started releasing in mid-January 2024, less than a year after we formed. We are supporting that release with live performances, which are also the testing ground for the material we have been actively recording this year.\n\nPlease look for us on your favorite streaming service, and join our email or text lists to stay engaged.",
      website: "https://sunkicksmusic.com",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunkicks%201.jpg-yrUDowtBWLiyHCQRwpgRBQ9VkShwcP.jpeg",
      setTime: "2:45 PM",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunkicks%201.jpg-yrUDowtBWLiyHCQRwpgRBQ9VkShwcP.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunkicks%202.jpg-lkLBLxglHgo5iZl9CWqYBXQyfsuzG0.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunkicks%203.jpg-ZC5EHzyISjnMA61aXfCoFhBIVcmynH.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunkicks%204.jpg-CWnTlhxoH5ZnY43arCvo0uds0HXqCq.jpeg",
      ],
      videos: [
        {
          title: "Sunkicks - Video 1",
          url: "https://youtu.be/aaaiiINBWiE",
        },
        {
          title: "Sunkicks - Video 2",
          url: "https://youtu.be/6BsCTZFuYv0",
        },
        {
          title: "Sunkicks - Video 3",
          url: "https://youtu.be/mA8L61Rlodw",
        },
        {
          title: "Sunkicks - Video 4",
          url: "https://youtu.be/zPTNzh3Ur9U",
        },
        {
          title: "Sunkicks - Video 5",
          url: "https://youtu.be/wUdL34dzQQc",
        },
      ],
      socialLinks: [
        { name: "Website", url: "https://sunkicksmusic.com" },
        { name: "Facebook", url: "https://www.facebook.com/people/Sunkicks/100094312846549/" },
        { name: "Instagram", url: "https://www.instagram.com/sunkicksofficial/" },
        { name: "Spotify", url: "https://open.spotify.com/artist/39554HpKMBxYJ5UFmJNb8p" },
        { name: "YouTube", url: "https://www.youtube.com/@Sunkicks-Official/playlists" },
      ],
    },
    {
      name: "Dylan Crawford",
      description:
        "Dylan Crawford is a multi-instrumentalist, vocalist and songwriter currently hailing from Lincoln City, OR. He is the guitarist and vocalist of Massive Delicious, their new record just launched on all streaming services called Beneath the Dirt.",
      fullBio:
        "Dylan Crawford is a multi-instrumentalist, vocalist and songwriter currently hailing from Lincoln City, OR. He is the guitarist and vocalist of Massive Delicious, their new record just launched on all streaming services called Beneath the Dirt.\n\nDylan's musical journey spans multiple instruments and genres, showcasing his versatility as both a performer and songwriter. His work with Massive Delicious demonstrates his ability to craft compelling rock music that resonates with audiences across the Pacific Northwest.\n\nAs a solo performer, Dylan brings a more intimate approach to his music, often featuring acoustic arrangements that highlight his songwriting skills and vocal abilities. His connection to the Oregon Coast influences his music, creating songs that capture the essence of coastal life and the natural beauty of the region.",
      website: "https://music.youtube.com/channel/UC6HaWzM6wByA8WS4zFy_y-A",
      image: "/placeholder.svg?height=400&width=400&text=Dylan Crawford",
      setTime: "4:00 PM",
      images: ["/placeholder.svg?height=400&width=400&text=Dylan Crawford"],
      videos: [],
      socialLinks: [{ name: "YouTube Music", url: "https://music.youtube.com/channel/UC6HaWzM6wByA8WS4zFy_y-A" }],
    },
    {
      name: "Hope Montgomery",
      description: "Artist information coming soon...",
      fullBio: "Artist information coming soon...",
      website: null,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hope%20Montgomery-c0RM1jWS9tzoLJRY8wcOOezX8hxIRX.png",
      setTime: "5:15 PM",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hope%20Montgomery-c0RM1jWS9tzoLJRY8wcOOezX8hxIRX.png"],
      videos: [],
      socialLinks: [],
    },
  ]

  return (
    <section id="lineup" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-blue font-bold">LIVE MUSIC LINEUP</h2>
          <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
        </div>

        {/* Saturday Lineup */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-festival-blue text-white rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <h3 className="text-xl md:text-2xl font-bold">Saturday, August 16th</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saturdayArtists.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
            ))}
          </div>
        </div>

        {/* Day Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-100 px-4 text-sm text-gray-500">DAY 2</span>
          </div>
        </div>

        {/* Sunday Lineup */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-festival-pink text-white rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <h3 className="text-xl md:text-2xl font-bold">Sunday, August 17th</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sundayArtists.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
          <div className="bg-festival-blue text-white py-4 px-6">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 h-6 w-6"
              >
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold">Stay Updated</h3>
            </div>
          </div>
          <div className="p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Get the Latest Festival News</h4>
              <p className="text-lg text-gray-700 mb-6">
                Sign up for our mailing list to receive the latest news about performers, schedules, and special events
                for the Rockaway Beach Music Festival.
              </p>
              <div className="flex justify-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
                  href="http://ncamfoundation.org"
                >
                  Sign Up at NCAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LineupSection