export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">About The Festival</h2>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg">
            Welcome to the Rockaway Beach Music Festival, an annual celebration of music, art, and community on the
            beautiful shores of Rockaway Beach, New York.
          </p>
          <p className="mb-6 text-lg">
            Founded in 2015, our festival brings together the best local and international artists for three days of
            unforgettable performances across multiple stages. From indie rock to electronic, hip-hop to folk, we curate
            a diverse lineup that offers something for every music lover.
          </p>
          <p className="mb-6 text-lg">
            Beyond the music, festival-goers can enjoy local food vendors, art installations, workshops, and the natural
            beauty of Rockaway Beach. Our mission is to create a sustainable, inclusive event that celebrates creativity
            and brings people together.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 text-center">
              <h3 className="mb-3 text-2xl font-bold">3 Days</h3>
              <p>Of non-stop music across multiple stages</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 text-center">
              <h3 className="mb-3 text-2xl font-bold">50+ Artists</h3>
              <p>From around the world performing live</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 text-center">
              <h3 className="mb-3 text-2xl font-bold">10,000+ Fans</h3>
              <p>Gathering to celebrate music and community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
