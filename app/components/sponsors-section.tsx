import Image from "next/image"

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Sponsors</h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="relative h-24 w-auto">
            <Image
              src="/images/NCAM logo-Xokg7f76SdXDj6nq8JpcdfQsVYtKDu.svg"
              alt="NCAM Foundation"
              width={120}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative h-24 w-auto">
            <Image
              src="/images/grants-bug-5.png"
              alt="Sponsors"
              width={480}
              height={90}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p>Interested in sponsoring the festival? Contact us at sponsors@rockawaybeachfest.com</p>
        </div>
      </div>
    </section>
  )
}
