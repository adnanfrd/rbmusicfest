"use client";

export default function VendorSection() {
  return (
    <section
      id="vendors"
      className="bg-gradient-to-b from-white to-festival-yellow/10 py-14 md:py-16"
    >
      <div className="container px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-festival-yellow/20 bg-gradient-to-br from-festival-yellow/10 to-festival-yellow/5 p-8 shadow-lg md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              VENDOR SIGN-UP
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-festival-pink mb-6">
              Limited to about 15 spaces
            </p>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We are looking for vendors selling art and original crafts as
                well as anything experiential. All spaces are 10x10 and the cost
                for the entire festival is $100 per space. Electricity is
                available if needed. Food and alcohol vendors have already been
                sorted and we have no more space for those categories. Contact
                us with any questions at hello@ncamfoundation.org and use the
                form below when you are ready.
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <a
              href="https://forms.gle/uHL96wjcXae3Y6EeA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-festival-yellow hover:bg-festival-yellow/90 text-white font-bold py-4 px-8 text-lg min-w-[250px] text-center rounded-xl transition-all duration-300 no-underline shadow-lg hover:shadow-xl btn-hover-scale"
            >
              ART / CRAFT VENDOR FORM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
