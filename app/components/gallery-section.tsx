import Image from "next/image"

export default function GallerySection() {
  const images = [
    { src: "/placeholder.svg?key=sktnx", alt: "Festival crowd" },
    { src: "/concert-stage.png", alt: "Main stage" },
    { src: "/placeholder.svg?key=ozd2u", alt: "Beach stage" },
    { src: "/placeholder.svg?key=uv2o1", alt: "Food vendors" },
    { src: "/placeholder.svg?height=400&width=600&query=music festival at sunset", alt: "Sunset performance" },
    { src: "/placeholder.svg?height=400&width=600&query=festival art installation", alt: "Art installation" },
  ]

  return (
    <section id="gallery" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Festival Gallery</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="rounded-full bg-black px-8 py-3 font-bold text-white transition hover:bg-opacity-80">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  )
}
