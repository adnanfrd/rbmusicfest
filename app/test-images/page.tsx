export default function TestImagesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Image Test Page</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Background Image Test</h2>
        <div className="w-full h-64 bg-cover bg-center mb-2" style={{ backgroundImage: 'url("/squatch.png")' }}></div>
        <p>Background image using CSS background-image</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Title Image Test</h2>
        <img src="/rbmf-title.png" alt="Rockaway Beach Music Festival" className="max-w-full h-auto mb-2" />
        <p>Title image using img tag</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Direct URL Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SQUATCH-KC7DFEXQlKcceZXHJxmRFqIIwrAn3a.png"
              alt="Squatch Direct URL"
              className="max-w-full h-auto mb-2"
            />
            <p>Squatch image using direct URL</p>
          </div>
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RBMF%20TITLE-UZgGYef8oB0PDBvLRf6BdoMMqURKFp.png"
              alt="Title Direct URL"
              className="max-w-full h-auto mb-2"
            />
            <p>Title image using direct URL</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <a href="/" className="text-blue-600 hover:underline">
          Back to Home
        </a>
      </div>
    </div>
  )
}
