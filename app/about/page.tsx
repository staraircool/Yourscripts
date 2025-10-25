import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, BookOpen, Sparkles, MessageCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">About YourScripts India</h1>
              <p className="text-muted-foreground text-lg">
                We are a collective of passionate screenwriters from India, dedicated to crafting compelling stories for
                filmmakers worldwide.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ScriptCraft Team"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                YourScripts was founded in 2018 by a group of screenwriters who recognized the need for high-quality,
                diverse scripts in the global film industry. Based in Mumbai, the heart of India's film industry, we
                bring together writers with various backgrounds and perspectives.
              </p>
              <p>
                Our team consists of experienced screenwriters who have worked on various projects, from independent
                short films to commercial feature films. We are passionate about storytelling and believe in the power
                of cinema to entertain, educate, and inspire.
              </p>
              <p>
                What sets us apart is our commitment to crafting scripts that are not only compelling but also
                production-ready. We understand the challenges filmmakers face and strive to provide scripts that are
                easy to visualize and bring to life on screen.
              </p>
              <p>
                Over the years, we have built a diverse portfolio of scripts across various genres, lengths, and themes.
                Our scripts have been produced into award-winning films, and we continue to expand our collection to
                meet the evolving needs of filmmakers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of writers brings a wealth of experience and creativity to every script.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center space-y-3">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Vikram Desai"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Vikram Desai</h3>
              <p className="text-primary font-medium">Founder & Lead Writer</p>
              <p className="text-muted-foreground text-sm">
                Specializes in drama and thriller scripts with over 15 years of experience in the film industry.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center space-y-3">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Ananya Sharma"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ananya Sharma</h3>
              <p className="text-primary font-medium">Senior Writer</p>
              <p className="text-muted-foreground text-sm">
                Expert in romance and coming-of-age stories with a knack for authentic dialogue.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center space-y-3">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Rahul Kapoor"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Rahul Kapoor</h3>
              <p className="text-primary font-medium">Writer</p>
              <p className="text-muted-foreground text-sm">
                Specializes in sci-fi and action scripts with a background in visual effects.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center space-y-3">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Meera Patel"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Meera Patel</h3>
              <p className="text-primary font-medium">Writer</p>
              <p className="text-muted-foreground text-sm">
                Crafts compelling comedy and family-oriented scripts with heart and humor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Creativity</h3>
              <p className="text-muted-foreground">
                We push boundaries and think outside the box to create unique and engaging stories.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in our writing, ensuring each script is polished and production-ready.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and value the input of all our writers and clients.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Diversity</h3>
              <p className="text-muted-foreground">
                We celebrate diverse perspectives and strive to tell stories that represent various cultures and
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground mb-4">
              "The process was smooth and professional. I received several loglines to choose from, and the final script
              exceeded my expectations. Will definitely purchase from YourScripts again."
            </p>
            <div className="space-y-2">
              <p className="font-medium">John Doe</p>
              <p className="text-muted-foreground text-sm">Independent Filmmaker</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discover our collection of compelling scripts or discuss your specific requirements.
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
