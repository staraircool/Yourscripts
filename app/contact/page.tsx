import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Have questions or ready to purchase a script? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">WhatsApp</h2>
              <p className="text-muted-foreground mb-4">
                The fastest way to reach us is through WhatsApp. We typically respond within a few hours.
              </p>
              <p className="font-medium">+917888452882</p>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="https://wa.me/917888452882" target="_blank" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Email</h2>
              <p className="text-muted-foreground mb-4">
                For detailed inquiries or business proposals, feel free to send us an email.
              </p>
              <p className="font-medium">wecanhelp@givhlp.xyz</p>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="mailto:wecanhelp@givhlp.xyz" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Email
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card md:col-span-2 lg:col-span-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Business Hours</h2>
              <p className="text-muted-foreground mb-4">We're available during the following hours to assist you.</p>
              <ul className="space-y-2">
                <li className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM IST</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below, and we'll get back to you as soon as possible. Let us know what type of script
                you're looking for, and we'll help you find the perfect match.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-sm text-muted-foreground">
                      We're based in Mumbai, India, the heart of Bollywood and the Indian film industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                  <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">WhatsApp First</h3>
                    <p className="text-sm text-muted-foreground">
                      For the quickest response, we recommend contacting us directly on WhatsApp at +917888452882.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (with country code)
                  </label>
                  <Input id="phone" placeholder="e.g., +1 123 456 7890" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is your message about?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about the type of script you're looking for (genre, length, themes, etc.)"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Quick Answers</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How quickly can I expect a response?</h3>
                <p className="text-muted-foreground">
                  We typically respond to WhatsApp messages within a few hours during business hours. Email inquiries
                  may take up to 24 hours.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">What information should I provide when contacting you?</h3>
                <p className="text-muted-foreground">
                  To help us serve you better, please include the type of script you're looking for (short or feature),
                  preferred genres, any specific themes or elements you'd like, and your budget range if applicable.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer consultations before purchasing?</h3>
                <p className="text-muted-foreground">
                  Yes, we're happy to discuss your project needs and answer any questions you might have before you make
                  a decision. This can be done via WhatsApp or email.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I request specific changes to a script before purchasing?</h3>
                <p className="text-muted-foreground">
                  We offer free loglines first so you can select scripts that already align with your vision. Minor
                  adjustments may be included in the purchase price, while significant revisions would be quoted
                  separately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Find Your Perfect Script?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today on WhatsApp to receive free loglines tailored to your project needs.
          </p>
          <Button asChild size="lg">
            <Link href="https://wa.me/917888452882" target="_blank" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              +917888452882
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
