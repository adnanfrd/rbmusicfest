import Link from "next/link"

export default function UpdatesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Get Festival Updates</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Updates I'm interested in:</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  id="lineup"
                  name="updates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="lineup" className="ml-2 block text-sm text-gray-700">
                  Lineup Announcements
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="tickets"
                  name="updates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="tickets" className="ml-2 block text-sm text-gray-700">
                  Ticket Information
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="schedule"
                  name="updates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="schedule" className="ml-2 block text-sm text-gray-700">
                  Schedule Changes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="general"
                  name="updates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="general" className="ml-2 block text-sm text-gray-700">
                  General Festival News
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
