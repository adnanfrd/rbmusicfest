import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VendorApplicationSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-4xl bg-slate-50 border-2 border-slate-200">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900">
              Accepting Vendor Applications!
            </CardTitle>
            <CardDescription className="text-xl md:text-2xl font-semibold text-red-600">
              deadline June 30th, 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Join us for the first annual 2025 Rockaway Beach Music Festival! We are looking for coastal crafters,
                artists, makers and purveyors of interesting items to help create a diverse, entertaining, and possibly
                educational fun event! Please fill out the correct form and we will be in touch.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg"
              >
                <a
                  href="https://forms.gle/8aWUzQfmbEYnq7Kn7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FOOD VENDORS
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 text-lg"
              >
                <a
                  href="https://forms.gle/RTn6MYiG3FVf4DpdA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ALCOHOL VENDORS
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 text-lg"
              >
                <a
                  href="https://forms.gle/ne19NiY9FJpCYFXV8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RETAIL/ART VENDORS
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
