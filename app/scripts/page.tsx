import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Check, FileText } from "lucide-react"
import ScriptStructuredData from "./structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Short Film & Feature Film Scripts for Sale | YourScripts",
  description:
    "Browse our collection of professional short film scripts ($20) and feature film scripts ($150) across all genres. Ready for immediate production.",
  keywords:
    "short film scripts, feature film scripts, screenplay for sale, movie scripts, buy scripts online, professional screenplays",
}

export default function ScriptsPage() {
  return (
    <div className="flex flex-col">
      <ScriptStructuredData />
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Professional Short Film & Feature Film Scripts
            </h1>
            <p className="text-muted-foreground text-lg">Ready-to-produce scripts at affordable prices</p>
          </div>
        </div>
      </section>

      {/* Script Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Short Film Scripts Package */}
            <div className="rounded-lg border bg-card overflow-hidden">
              <div className="p-6 bg-primary/5 border-b border-border">
                <h3 className="text-2xl font-bold text-center">Short Film Scripts</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">$20</span>
                  <span className="text-muted-foreground"> per script</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>8-12 pages in length</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Professional industry formatting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Unproduced, original content</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Error-free, polished writing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Full rights transfer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Instant delivery after payment</span>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link
                    href="https://wa.me/447723454814?text=I'm%20interested%20in%20your%20Short%20Film%20Scripts.%20Please%20send%20me%20some%20loglines."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get Loglines on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            {/* Feature Film Scripts Package */}
            <div className="rounded-lg border bg-card overflow-hidden">
              <div className="p-6 bg-primary/5 border-b border-border">
                <h3 className="text-2xl font-bold text-center">Feature Film Scripts</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-muted-foreground"> per script</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>90-120 pages in length</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Professional industry formatting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Unproduced, original content</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Complex characters and plot</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Full rights transfer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Instant delivery after payment</span>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link
                    href="https://wa.me/447723454814?text=I'm%20interested%20in%20your%20Feature%20Film%20Scripts.%20Please%20send%20me%20some%20loglines."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get Loglines on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-16 overflow-x-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Package Comparison</h3>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border p-4 text-left">Features</th>
                  <th className="border border-border p-4 text-center">Short Film Scripts</th>
                  <th className="border border-border p-4 text-center">Feature Film Scripts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-4">Length</td>
                  <td className="border border-border p-4 text-center">8-12 pages</td>
                  <td className="border border-border p-4 text-center">90-120 pages</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-4">Price</td>
                  <td className="border border-border p-4 text-center">$20</td>
                  <td className="border border-border p-4 text-center">$150</td>
                </tr>
                <tr>
                  <td className="border border-border p-4">Delivery</td>
                  <td className="border border-border p-4 text-center">Instant</td>
                  <td className="border border-border p-4 text-center">Instant</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-4">Rights</td>
                  <td className="border border-border p-4 text-center">Full Transfer</td>
                  <td className="border border-border p-4 text-center">Full Transfer</td>
                </tr>
                <tr>
                  <td className="border border-border p-4">Format</td>
                  <td className="border border-border p-4 text-center">Industry Standard</td>
                  <td className="border border-border p-4 text-center">Industry Standard</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-4">Free Loglines</td>
                  <td className="border border-border p-4 text-center">10-15</td>
                  <td className="border border-border p-4 text-center">10-15</td>
                </tr>
                <tr>
                  <td className="border border-border p-4">Ideal For</td>
                  <td className="border border-border p-4 text-center">Film Festivals, Student Projects</td>
                  <td className="border border-border p-4 text-center">Theatrical Release, Streaming</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              All scripts are available in various genres including Drama, Comedy, Thriller, Horror, Romance, Sci-Fi,
              and more.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us for Custom Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Genre Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Available Genres</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer scripts across all popular genres to suit your project needs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Drama</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Comedy</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Thriller</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Horror</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Romance</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Action</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Sci-Fi</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Fantasy</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Mystery</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Adventure</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Crime</h3>
            </div>
            <div className="p-4 rounded-lg bg-card border text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium">Family</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Ready to Find Your Perfect Script?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today on WhatsApp to receive 10-15 free loglines tailored to your project needs.
          </p>
          <Button asChild size="lg">
            <Link href="https://wa.me/447723454814" target="_blank" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact Us on WhatsApp
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
