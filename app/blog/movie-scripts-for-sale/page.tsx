import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, FileText, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Movie Scripts for Sale: Professional Screenplays for Filmmakers | YourScripts",
  description:
    "Browse our collection of high-quality movie scripts for sale. Short film scripts from $20 and feature film scripts from $150. Ready-to-produce screenplays across all genres.",
  keywords:
    "movie scripts for sale, buy screenplay, film scripts, purchase screenplay, short film scripts, feature film scripts, professional screenplays",
}

export default function MovieScriptsForSalePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm text-primary font-medium">YourScripts Blog</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Movie Scripts for Sale: Finding the Perfect Screenplay for Your Next Film
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <time dateTime="2025-03-30">March 30, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Movie scripts and filmmaking equipment"
                width={1200}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-primary">
              <div className="space-y-6">
                <p>
                  For filmmakers, finding the right script is often the first and most crucial step in the production
                  process. Whether you're an independent director looking for your next project, a film student creating
                  your portfolio piece, or a production company seeking fresh content, having access to high-quality,
                  ready-to-produce screenplays can save you significant time and resources.
                </p>

                <p>
                  At YourScripts, we offer a diverse collection of professionally written movie scripts for sale,
                  ranging from short films to feature-length screenplays across all popular genres. In this guide, we'll
                  explore the benefits of purchasing pre-written scripts, the types of scripts available, and how to
                  find the perfect screenplay for your specific project needs.
                </p>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">Why Purchase Pre-Written Movie Scripts?</h2>

                <div className="space-y-6">
                  <p>
                    While many filmmakers work with original scripts or commission custom screenplays, there are several
                    compelling reasons to consider purchasing pre-written movie scripts:
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Time and Cost Efficiency</h3>

                    <p>
                      Developing a screenplay from scratch can take months or even years, not to mention the cost of
                      hiring a screenwriter for a custom script. Pre-written scripts provide an immediate foundation for
                      your project at a fraction of the cost of commissioning an original screenplay.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Quality and Professionalism</h3>

                    <p>
                      Professional pre-written scripts have already gone through multiple drafts and revisions,
                      resulting in polished, production-ready screenplays. When you purchase from reputable sources like
                      YourScripts, you're getting work from experienced screenwriters who understand industry standards
                      and audience expectations.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Diverse Selection</h3>

                    <p>
                      Script marketplaces offer a wide variety of stories, genres, and formats. This diversity allows
                      you to browse multiple options until you find the perfect fit for your vision, budget, and
                      production capabilities.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Full Rights Transfer</h3>

                    <p>
                      When you purchase a script from YourScripts, you receive complete ownership rights. This means you
                      can modify the screenplay, produce it, and distribute the resulting film without ongoing royalty
                      payments or complicated rights negotiations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">Types of Movie Scripts Available for Purchase</h2>

                <div className="space-y-6">
                  <p>
                    At YourScripts, we offer two main categories of screenplays to suit different project needs and
                    budgets:
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Short Film Scripts</h3>

                    <p>
                      Our short film scripts are typically 8-12 pages in length (approximately 8-12 minutes of screen
                      time) and are priced at just $20 per script. These concise screenplays are ideal for:
                    </p>

                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Film festival submissions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Student projects and portfolios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Online content platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Directors looking to build experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Low-budget independent productions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Proof-of-concept projects</span>
                      </li>
                    </ul>

                    <p className="mt-4">
                      Short film scripts offer compelling stories that can be produced with minimal resources while
                      still creating maximum impact. They're perfect for filmmakers working with limited time, budget,
                      or crew.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/30 border rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Short Film Script Package</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>8-12 pages in length</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Professional industry formatting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Full rights transfer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Only $20 per script</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/short-film-scripts" className="w-full">
                      Browse Short Film Scripts
                    </Link>
                  </Button>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Feature Film Scripts</h3>

                  <p>
                    Our feature film scripts range from 90-120 pages (approximately 90-120 minutes of screen time) and
                    are priced at $150 per script. These comprehensive screenplays are suitable for:
                  </p>

                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Theatrical releases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Streaming platform content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Television movies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Independent film productions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Production companies seeking new material</span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    Feature film scripts provide complete, multi-layered stories with complex character development,
                    subplot integration, and satisfying narrative arcs. They offer the foundation for full-length
                    productions aimed at broader distribution channels.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-muted/30 border rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Feature Film Script Package</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>90-120 pages in length</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Complex characters and plot development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Full rights transfer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Only $150 per script</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/feature-film-scripts" className="w-full">
                      Browse Feature Film Scripts
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">Available Genres</h2>

                <p>
                  At YourScripts, we offer screenplays across all major genres to suit diverse storytelling preferences
                  and audience targets:
                </p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                    <span className="font-medium">Romance</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Action</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Sci-Fi</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Fantasy</span>
                  </div>
                  <div className="p-3 rounded-lg bg-card border text-center">
                    <span className="font-medium">Mystery</span>
                  </div>
                </div>

                <p className="mt-6">
                  Each genre has its own conventions, audience expectations, and production considerations. When
                  browsing scripts, consider which genre best aligns with your creative vision, production capabilities,
                  and target audience.
                </p>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">How to Purchase Movie Scripts from YourScripts</h2>

                <p>
                  At YourScripts, we've developed a straightforward process to help you find and purchase the perfect
                  screenplay for your project:
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">1. Initial Contact</h3>

                  <p>
                    Begin by reaching out to us via WhatsApp at +447723454814. Let us know what type of script you're
                    looking for, including:
                  </p>

                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Script length (short or feature)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Genre preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Specific themes or elements you'd like to see</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Production constraints (budget level, location limitations, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Target audience or distribution goals</span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    The more specific you can be about your requirements, the better we can match you with suitable
                    scripts.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">2. Review Loglines</h3>

                  <p>
                    Within 24-48 hours, we'll send you 10-15 loglines (brief summaries) of scripts that match your
                    criteria. These loglines will give you a concise overview of each story's premise, allowing you to
                    identify which concepts resonate with your vision.
                  </p>

                  <p className="mt-4">
                    This service is completely free and comes with no obligation to purchase. We want to ensure you find
                    a script that truly excites you before making any commitment.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">3. Script Selection and Payment</h3>

                  <p>
                    Once you've identified a script (or scripts) that interest you, let us know your selection. We'll
                    discuss payment options, which include secure online transfers and other electronic payment methods.
                  </p>

                  <p className="mt-4">Our pricing is transparent and straightforward:</p>

                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Short Film Scripts (8-12 pages): $20 per script</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Feature Film Scripts (90-120 pages): $150 per script</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">4. Script Delivery and Rights Transfer</h3>

                  <p>
                    After payment confirmation, we'll deliver your selected script(s) within 24-48 hours. The delivery
                    package includes:
                  </p>

                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>The complete screenplay in industry-standard PDF format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>A formal rights transfer agreement</span>
                    </li>
                  </ul>

                  <p className="mt-4">
                    This agreement transfers full ownership of the script to you, allowing you to modify, produce, and
                    distribute the resulting film without additional payments or permissions.
                  </p>
                </div>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">What Makes YourScripts Different?</h2>

                <p>With numerous sources for movie scripts online, here's why filmmakers choose YourScripts:</p>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>

                  <p>
                    All our scripts are crafted by experienced screenwriters with a deep understanding of story
                    structure, character development, and industry standards. Each screenplay undergoes multiple
                    revisions to ensure it's polished, engaging, and production-ready.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Originality</h3>

                  <p>
                    We guarantee that all scripts in our collection are original, unproduced works. Once a script is
                    purchased, it's removed from our inventory, ensuring exclusivity for the buyer.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Diverse Perspectives</h3>

                  <p>
                    Our team of writers brings diverse cultural backgrounds and creative perspectives to their work.
                    This diversity results in fresh, unique stories that stand out in a crowded marketplace.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Practical Production Considerations</h3>

                  <p>
                    Our scripts are developed with practical production considerations in mind. We understand the
                    challenges of independent filmmaking and create screenplays that can be effectively produced on
                    various budget levels.
                  </p>
                </div>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">Success Stories</h2>

                <p>Numerous filmmakers have found success with scripts purchased from YourScripts:</p>

                <div className="mt-6 p-6 bg-muted/30 border rounded-lg">
                  <p className="italic">
                    "The short film script I purchased was perfect for my film school project. It had a compelling story
                    that was achievable on my student budget. My project won the department's best short film award!"
                  </p>
                  <p className="mt-4 font-medium">— Arjun Mehta, Film Student, FTII Pune</p>
                </div>

                <div className="mt-6 p-6 bg-muted/30 border rounded-lg">
                  <p className="italic">
                    "As an independent producer, finding quality scripts within budget is challenging. The feature film
                    script I purchased from YourScripts exceeded my expectations. We're now in pre-production and have
                    secured financing based on the strength of the screenplay."
                  </p>
                  <p className="mt-4 font-medium">— Rajiv Sharma, Independent Producer, Mumbai</p>
                </div>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Can I modify the script after purchase?</h3>
                    <p>
                      Yes, absolutely! Once you purchase a script, you own it completely and can make any modifications
                      you wish. You can adapt it to your specific vision, location, or resources.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Do you offer custom script writing services?</h3>
                    <p>
                      Yes, in addition to our pre-written scripts, we offer custom screenwriting services. If you have a
                      specific concept or story in mind, we can develop it into a full screenplay. Custom scripts are
                      priced differently than our pre-written collection. Contact us to discuss your project needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Are your scripts formatted to industry standards?</h3>
                    <p>
                      Yes, all our scripts follow professional industry-standard formatting. They are ready for
                      production with proper scene headings, action descriptions, character names, dialogue, and other
                      formatting elements that conform to film industry expectations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      What if I need help understanding or interpreting the script?
                    </h3>
                    <p>
                      While the purchase price includes the script and full rights transfer, we're happy to answer
                      questions about the script after purchase. For more substantial support, such as revisions or
                      adaptations, we offer additional services at competitive rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6">Ready to Find Your Perfect Script?</h2>

                <p>
                  Whether you're looking for a short film script for your next festival submission or a feature-length
                  screenplay for a theatrical release, YourScripts has the perfect story waiting for you.
                </p>

                <p className="mt-4">
                  Browse our collection today and take the first step toward bringing your next film project to life
                  with a professional, compelling screenplay that will engage audiences and showcase your filmmaking
                  talents.
                </p>

                <div className="mt-8">
                  <Button asChild size="lg" className="w-full">
                    <Link
                      href="https://wa.me/447723454814?text=I'm%20interested%20in%20your%20movie%20scripts.%20Please%20send%20me%20some%20loglines."
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Contact Us on WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Vikram Desai" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Vikram Desai</h3>
                  <p className="text-sm text-muted-foreground mb-2">Founder & Lead Writer</p>
                  <p className="text-muted-foreground">
                    An experienced screenwriter with over 15 years in the film industry. Specializes in drama and
                    thriller scripts with a focus on character-driven narratives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-16 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/how-to-write-compelling-characters" className="group">
                <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">How to Write Compelling Characters for Your Screenplay</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn the essential techniques for creating memorable characters that will captivate your audience
                    and elevate your script.
                  </p>
                  <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              <Link href="/blog/structure-your-feature-film" className="group">
                <div className="p-6 rounded-lg border bg-card h-full transition-all group-hover:border-primary">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">How to Structure Your Feature Film Script</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover the three-act structure and other frameworks that will help you craft a well-paced and
                    engaging feature film screenplay.
                  </p>
                  <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Ready to Find Your Perfect Script?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our collection of professional short film and feature film scripts. Contact us today to receive free
            loglines tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/short-film-scripts">Short Film Scripts</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/feature-film-scripts">Feature Film Scripts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
