import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, CreditCard, CheckCircle, HelpCircle, AlertCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FAQStructuredData from "./structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Purchase Short Film & Feature Film Scripts | YourScripts",
  description:
    "Learn our simple process for purchasing high-quality scripts for your film projects. From selecting loglines to receiving your complete screenplay.",
  keywords: "buy screenplay, purchase script, script buying process, screenplay rights, film script purchase",
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <FAQStructuredData />
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">How It Works</h1>
            <p className="text-muted-foreground text-lg">
              Our simple, straightforward process for purchasing high-quality scripts for your film projects.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">1. Contact Us</h2>
              <p className="text-muted-foreground">
                Reach out to us via WhatsApp at +917888452882. Let us know what type of script you're looking for,
                including genre preferences, length (short or feature), and any specific elements you'd like to see.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">2. Review Loglines</h2>
              <p className="text-muted-foreground">
                We'll send you 10-15 loglines for free that match your requirements. Take your time to review these
                brief summaries and select the script(s) that interest you most.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">3. Purchase & Receive</h2>
              <p className="text-muted-foreground">
                Once you've made your selection, we'll discuss pricing and payment options. After payment is confirmed,
                we'll deliver your script(s) in industry-standard format with full rights transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">The Journey From Selection to Screen</h2>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right space-y-3">
                  <h3 className="text-xl font-bold">Initial Contact</h3>
                  <p className="text-muted-foreground">
                    Send us a message on WhatsApp describing what you're looking for. Be as specific as possible about
                    genre, length, themes, and target audience.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary z-10"></div>
                <div className="mt-4 md:mt-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-card">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Contact via WhatsApp"
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:order-2 space-y-3">
                  <h3 className="text-xl font-bold">Receive Loglines</h3>
                  <p className="text-muted-foreground">
                    Within 24-48 hours, we'll send you a selection of loglines that match your criteria. Each logline
                    gives you a concise summary of the script's premise.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary z-10"></div>
                <div className="mt-4 md:mt-0 md:order-1">
                  <div className="aspect-video rounded-lg overflow-hidden bg-card">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Review Loglines"
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right space-y-3">
                  <h3 className="text-xl font-bold">Select Your Script</h3>
                  <p className="text-muted-foreground">
                    Choose the script(s) that best fit your project needs. If you'd like more information about a
                    particular script, we can provide additional details.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary z-10"></div>
                <div className="mt-4 md:mt-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-card">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Select Script"
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:order-2 space-y-3">
                  <h3 className="text-xl font-bold">Payment Process</h3>
                  <p className="text-muted-foreground">
                    We'll discuss pricing based on the script type and length. We accept various payment methods
                    including bank transfers and secure online payments.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary z-10"></div>
                <div className="mt-4 md:mt-0 md:order-1">
                  <div className="aspect-video rounded-lg overflow-hidden bg-card">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Payment Process"
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right space-y-3">
                  <h3 className="text-xl font-bold">Receive Your Script</h3>
                  <p className="text-muted-foreground">
                    Once payment is confirmed, we'll deliver your script in industry-standard format (PDF) along with a
                    rights transfer agreement giving you full ownership.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary z-10"></div>
                <div className="mt-4 md:mt-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-card">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Receive Script"
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Script Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Script Types</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer two main categories of scripts to suit different project needs and budgets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Short Film Scripts</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">8-12 pages in length</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional industry formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Unproduced, original content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Error-free, polished writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Only $20 per script</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link
                  href="https://wa.me/917888452882?text=I'm%20interested%20in%20your%20Short%20Film%20Scripts.%20Please%20send%20me%20some%20loglines."
                  target="_blank"
                >
                  Get Loglines
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Feature Film Scripts</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">90-120 pages in length</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional industry formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Unproduced, original content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Complex characters and plot development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Only $150 per script</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link
                  href="https://wa.me/917888452882?text=I'm%20interested%20in%20your%20Feature%20Film%20Scripts.%20Please%20send%20me%20some%20loglines."
                  target="_blank"
                >
                  Get Loglines
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our script purchasing process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What rights do I get when I purchase a script?</AccordionTrigger>
                <AccordionContent>
                  When you purchase a script from us, you receive full and exclusive rights to the screenplay. This
                  includes all production, distribution, and adaptation rights. You'll receive a formal rights transfer
                  agreement that legally transfers ownership from us to you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How much do your scripts cost?</AccordionTrigger>
                <AccordionContent>
                  Pricing varies based on the type and length of the script. Short film scripts (8-12 pages) are
                  generally more affordable than feature-length scripts (90-120 pages). We provide transparent pricing
                  information when you express interest in a specific script. Contact us for current rates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can you make revisions to a script after purchase?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer revision services for an additional fee. If you need specific changes to adapt the
                  script to your vision, we can discuss the scope of revisions and provide a quote. Minor adjustments
                  may be included in the initial purchase price.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer custom script writing services?</AccordionTrigger>
                <AccordionContent>
                  Yes, in addition to our pre-written scripts, we offer custom screenwriting services. If you have a
                  specific concept or story in mind, we can develop it into a full screenplay. Custom scripts are priced
                  differently than our pre-written collection. Contact us to discuss your project needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept various payment methods including bank transfers, major credit cards through secure payment
                  processors, and other electronic payment options. We'll discuss the available payment methods when
                  you're ready to make a purchase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How quickly will I receive my script after payment?</AccordionTrigger>
                <AccordionContent>
                  Once payment is confirmed, we typically deliver scripts within 24-48 hours via email. The delivery
                  includes the script in PDF format and the rights transfer agreement. If you need the script in a
                  different format, please let us know.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Are your scripts formatted to industry standards?</AccordionTrigger>
                <AccordionContent>
                  Yes, all our scripts follow professional industry-standard formatting. They are ready for production
                  with proper scene headings, action descriptions, character names, dialogue, and other formatting
                  elements that conform to film industry expectations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Don't see your question answered here? Feel free to reach out to us directly.
            </p>
            <Button asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Ask a Question
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-start gap-3 max-w-3xl mx-auto mb-8 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-left">
            <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-500">Important Note</p>
              <p className="text-sm text-muted-foreground">
                All our scripts are original works. Once purchased, a script is removed from our collection to ensure
                exclusivity for the buyer. We recommend acting quickly if you find a script you're interested in.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Find Your Perfect Script?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to start the process and receive free loglines tailored to your project needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact Us on WhatsApp
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
