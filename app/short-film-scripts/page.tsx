import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Star, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Short Film Scripts for Sale | YourScripts",
  description:
    "Purchase high-quality, original short film scripts (8-12 pages) for just $20. Ideal for film festivals, student projects, and indie filmmakers.",
  keywords:
    "short film scripts, short screenplay, short film screenplay, buy short film scripts, 10 page script, film festival scripts",
}

export default function ShortFilmScriptsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Professional Short Film Scripts
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready-to-produce short film screenplays crafted by experienced writers
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Our Short Film Scripts?</h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Short film scripts are the perfect way to showcase your filmmaking talent without the extensive time
                  and budget requirements of feature films. Our professionally crafted short screenplays provide
                  compelling stories that can be produced on modest budgets while still creating maximum impact.
                </p>
                <p>
                  Each short film script in our collection has been meticulously developed by our team of experienced
                  Indian screenwriters to ensure they're not only engaging but also practical to produce. At just 8-12
                  pages in length (approximately 8-12 minutes of screen time), these scripts are ideal for film
                  festivals, portfolio pieces, student projects, or online platforms.
                </p>
                <p>
                  When you purchase a short film script from YourScripts, you receive full ownership rights, allowing
                  you complete creative freedom to bring the story to life your way.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Film festival submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Film school projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Director's reels and portfolios</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Online content platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Independent filmmakers on tight budgets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>First-time directors looking to build experience</span>
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
                    <span className="font-medium">Romance</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-card overflow-hidden sticky top-24">
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
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">How to Purchase a Short Film Script</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p className="text-muted-foreground">
                Reach out to us via WhatsApp. Let us know you're interested in short film scripts and any genre
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
                "The short film script I purchased was perfect for my film school project. It had a compelling story
                that was achievable on my student budget. My project won the department's best short film award!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="text-sm font-semibold">Arjun Mehta</h4>
                  <p className="text-xs text-muted-foreground">Film Student, FTII Pune</p>
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
                "As a first-time director, I needed a script that was manageable but impactful. The short film script I
                purchased from YourScripts was exactly what I needed. It's now been selected for three film festivals!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="text-sm font-semibold">Priya Sharma</h4>
                  <p className="text-xs text-muted-foreground">Independent Filmmaker, Delhi</p>
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
                "I needed a short film script for my YouTube channel, and YourScripts delivered exactly what I was
                looking for. The script was easy to produce with minimal resources but had a powerful story. My
                subscribers loved it!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <h4 className="text-sm font-semibold">Vikram Joshi</h4>
                  <p className="text-xs text-muted-foreground">Content Creator, Mumbai</p>
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
              <h3 className="text-xl font-bold">What exactly is included when I purchase a short film script?</h3>
              <p className="text-muted-foreground">
                When you purchase a short film script, you'll receive the complete screenplay in industry-standard
                format (PDF), typically 8-12 pages in length. You'll also receive a rights transfer agreement that gives
                you full ownership of the script.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I modify the script after purchase?</h3>
              <p className="text-muted-foreground">
                Yes, absolutely! Once you purchase a script, you own it completely and can make any modifications you
                wish. You can adapt it to your specific vision, location, or resources.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">How quickly will I receive my script after payment?</h3>
              <p className="text-muted-foreground">
                We typically deliver scripts within 24-48 hours after payment confirmation. The delivery includes the
                script in PDF format and the rights transfer agreement.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Are your short film scripts suitable for beginners?</h3>
              <p className="text-muted-foreground">
                Yes! Our short film scripts are designed to be producible on modest budgets with limited resources,
                making them ideal for first-time filmmakers and students. We focus on compelling stories that don't
                require elaborate special effects or numerous locations.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I request a specific type of short film script?</h3>
              <p className="text-muted-foreground">
                While we don't offer custom script writing as part of our $20 package, we have a diverse collection
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Find Your Perfect Short Film Script?</h2>
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
            <Link href="/blog/short-film-script-essentials" className="group">
              <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Short Film Script Essentials: Less is More</h3>
                <p className="text-muted-foreground">
                  Learn how to craft powerful short film scripts that make an impact in just a few pages.
                </p>
              </div>
            </Link>

            <Link href="/blog/dialogue-writing-tips" className="group">
              <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">10 Essential Dialogue Writing Tips for Screenwriters</h3>
                <p className="text-muted-foreground">
                  Master the art of writing natural, compelling dialogue that reveals character and advances your story.
                </p>
              </div>
            </Link>

            <Link href="/blog/creating-conflict-in-scripts" className="group">
              <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Creating Meaningful Conflict in Your Scripts</h3>
                <p className="text-muted-foreground">
                  Discover techniques for developing compelling conflicts that drive your story forward and engage your
                  audience.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
