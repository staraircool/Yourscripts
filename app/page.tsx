import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Film, Clock, Award, Sparkles, BookOpen, MessageCircle, Star, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "YourScripts - Professional Short Film & Feature Film Scripts for Sale",
  description:
    "Purchase high-quality, original short film and feature film scripts from professional Indian screenwriters. Ready-to-produce scripts across all genres.",
  keywords:
    "short film scripts, feature film scripts, screenplay for sale, movie scripts, buy scripts online, professional screenplays, Indian screenwriters",
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/30 mb-4">
              Professional Screenplays
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Exceptional Movie Scripts for Your Next Film Project
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              From compelling short films to feature-length masterpieces, we craft stories that captivate audiences
              across all genres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="#script-packages">View Packages</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Our Scripts?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver high-quality, original screenplays crafted by experienced writers from India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Our scripts are meticulously crafted with compelling characters, engaging dialogue, and captivating
                  storylines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Diverse Genres</h3>
                <p className="text-muted-foreground">
                  From thriller to romance, comedy to drama, we offer scripts across all popular and niche genres.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Ready to Produce</h3>
                <p className="text-muted-foreground">
                  Our scripts are production-ready with proper formatting, scene descriptions, and character
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Original Content</h3>
                <p className="text-muted-foreground">
                  All our scripts are 100% original and come with full rights transfer upon purchase.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Various Lengths</h3>
                <p className="text-muted-foreground">
                  Short films (8-12 pages) and feature films (90-120 pages) available to suit your project needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Free Loglines</h3>
                <p className="text-muted-foreground">
                  Contact us on WhatsApp to receive 10-15 loglines for free before making your purchase decision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Script Packages Section */}
      <section id="script-packages" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Script Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional, ready-to-produce scripts at affordable prices
            </p>
          </div>

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

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our simple process makes it easy to find and purchase the perfect script for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p className="text-muted-foreground">
                Reach out to us via WhatsApp with your requirements and preferred genres.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold">Review Loglines</h3>
              <p className="text-muted-foreground">
                We'll send you 10-15 loglines for free so you can choose the stories that interest you most.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold">Purchase & Receive</h3>
              <p className="text-muted-foreground">
                Once you've made your selection and completed payment, we'll deliver your script with full rights
                transfer.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from filmmakers who have brought our scripts to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-muted-foreground mb-4">
                "The script I purchased was exceptional. The characters were well-developed, and the dialogue was
                natural and engaging. My short film won two awards at a local film festival!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="text-sm font-semibold">Rajiv Sharma</h4>
                  <p className="text-xs text-muted-foreground">Independent Filmmaker, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-muted-foreground mb-4">
                "I was impressed by the quality and originality of the feature script. The story had a unique Indian
                perspective while still being universally appealing. Exactly what I was looking for."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="text-sm font-semibold">Priya Patel</h4>
                  <p className="text-xs text-muted-foreground">Producer, Bangalore</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-muted-foreground mb-4">
                "The process was smooth and professional. I received several loglines to choose from, and the final
                script exceeded my expectations. Will definitely purchase from YourScripts again."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="text-sm font-semibold">Arjun Kapoor</h4>
                  <p className="text-xs text-muted-foreground">Director, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Bring Your Film to Life?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discover our collection of compelling scripts across all genres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://wa.me/447723454814" target="_blank" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Contact on WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#script-packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
