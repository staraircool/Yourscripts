import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Star, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Feature Film Scripts for Sale | YourScripts",
  description:
    "Purchase high-quality, original feature film scripts (90-120 pages) for just $150. Compelling stories ready for theatrical release or streaming platforms.",
  keywords:
    "feature film scripts, feature screenplay, movie scripts for sale, buy feature film scripts, full length screenplay, professional screenplay",
}

export default function FeatureFilmScriptsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Professional Feature Film Scripts
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete, production-ready feature screenplays crafted by experienced writers
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Our Feature Film Scripts?</h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Feature film scripts are the foundation of full-length movies designed for theatrical release,
                  streaming platforms, or television broadcast. Our professionally crafted feature screenplays provide
                  complete, compelling stories with complex characters, engaging plots, and satisfying resolutions.
                </p>
                <p>
                  Each feature film script in our collection has been meticulously developed by our team of experienced
                  Indian screenwriters to ensure they meet industry standards while offering fresh, original stories. At
                  90-120 pages in length (approximately 90-120 minutes of screen time), these scripts provide the
                  perfect foundation for your next major production.
                </p>
                <p>
                  When you purchase a feature film script from YourScripts, you receive full ownership rights, allowing
                  you complete creative freedom to bring the story to life your way, secure financing, and distribute
                  the finished film however you choose.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Independent film productions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Production companies seeking new material</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Streaming platform content</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Television movies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Directors seeking their next project</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Producers building their project portfolio</span>
                </li>
              </ul>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Available Genres:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Drama</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Comedy</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Thriller</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Horror</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Sci-Fi</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Action</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Romance</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Fantasy</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Crime</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-card overflow-hidden sticky top-24">
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
                      <span>Complex characters and plot development</span>
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
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">How to Purchase a Feature Film Script</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p className="text-muted-foreground">
                Reach out to us via WhatsApp. Let us know you're interested in feature film scripts and any genre
                preferences you have.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold">Review Loglines</h3>
              <p className="text-muted-foreground">
                We'll send you 10-15 loglines for free. Take your time to review these brief summaries and select the
                script that interests you most.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold">Purchase & Receive</h3>
              <p className="text-muted-foreground">
                Once you've made your selection and completed payment, we'll deliver your script with full rights
                transfer documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Success Stories</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg border bg-card">
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

            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-muted-foreground mb-4">
                "As an independent producer, finding quality scripts within budget is challenging. The feature film
                script I purchased from YourScripts exceeded my expectations. We're now in pre-production and have
                secured financing based on the strength of the screenplay."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="text-sm font-semibold">Rajiv Sharma</h4>
                  <p className="text-xs text-muted-foreground">Independent Producer, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-muted-foreground mb-4">
                "The feature script I purchased had well-developed characters, tight plotting, and dialogue that actors
                love. We've attached two name actors based solely on the strength of the screenplay. Worth every penny."
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What exactly is included when I purchase a feature film script?</h3>
              <p className="text-muted-foreground">
                When you purchase a feature film script, you'll receive the complete screenplay in industry-standard
                format (PDF), typically 90-120 pages in length. You'll also receive a rights transfer agreement that
                gives you full ownership of the script.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I modify the script after purchase?</h3>
              <p className="text-muted-foreground">
                Yes, absolutely! Once you purchase a script, you own it completely and can make any modifications you
                wish. You can adapt it to your specific vision, budget constraints, or production requirements.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                Are these scripts marketable to major studios or streaming platforms?
              </h3>
              <p className="text-muted-foreground">
                Yes, our feature film scripts are written to professional industry standards and are designed to be
                marketable. Many of our clients have successfully pitched their purchased scripts to production
                companies, studios, and streaming platforms.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer any support after purchase?</h3>
              <p className="text-muted-foreground">
                While the purchase price includes the script and full rights transfer, we're happy to answer questions
                about the script after purchase. For more substantial support, such as revisions or adaptations, we
                offer additional services at competitive rates.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I request a specific type of feature film script?</h3>
              <p className="text-muted-foreground">
                While we don't offer custom script writing as part of our $150 package, we have a diverse collection
                across many genres. When you contact us, let us know your preferences, and we'll send you loglines that
                best match your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Find Your Perfect Feature Film Script?</h2>
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

      {/* Related Resources */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Related Resources</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/structure-your-feature-film" className="group">
              <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">How to Structure Your Feature Film Script</h3>
                <p className="text-muted-foreground">
                  Discover the three-act structure and other frameworks that will help you craft a well-paced and
                  engaging feature film screenplay.
                </p>
              </div>
            </Link>

            <Link href="/blog/from-idea-to-screen-guide" className="group">
              <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  From Idea to Screen: The Complete Guide to Writing Feature Film Scripts
                </h3>
                <p className="text-muted-foreground">
                  A comprehensive walkthrough of the entire screenwriting process for feature films.
                </p>
              </div>
            </Link>

            <Link href="/blog/screenplay-formatting-guide" className="group">
              <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">The Complete Screenplay Formatting Guide</h3>
                <p className="text-muted-foreground">
                  Everything you need to know about industry-standard screenplay formatting to ensure your script looks
                  professional.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
