import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 0,
    slug: "movie-scripts-for-sale",
    title: "Movie Scripts for Sale: Finding the Perfect Screenplay for Your Next Film",
    excerpt:
      "Discover our collection of high-quality movie scripts for sale, from short films to feature-length screenplays across all genres. Learn how to find the perfect script for your project.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 30, 2025",
    author: "Vikram Desai",
    readTime: "10 min read",
    category: "Screenwriting Tips",
  },
  {
    id: 1,
    slug: "how-to-write-compelling-characters",
    title: "How to Write Compelling Characters for Your Screenplay",
    excerpt:
      "Learn the essential techniques for creating memorable characters that will captivate your audience and elevate your script.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 25, 2025",
    author: "Vikram Desai",
    readTime: "8 min read",
    category: "Screenwriting Tips",
  },
  {
    id: 2,
    slug: "structure-your-feature-film",
    title: "How to Structure Your Feature Film Script",
    excerpt:
      "Discover the three-act structure and other frameworks that will help you craft a well-paced and engaging feature film screenplay.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 22, 2025",
    author: "Ananya Sharma",
    readTime: "10 min read",
    category: "Feature Films",
  },
  {
    id: 3,
    slug: "dialogue-writing-tips",
    title: "10 Essential Dialogue Writing Tips for Screenwriters",
    excerpt: "Master the art of writing natural, compelling dialogue that reveals character and advances your story.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 18, 2025",
    author: "Rahul Kapoor",
    readTime: "7 min read",
    category: "Screenwriting Tips",
  },
  {
    id: 4,
    slug: "short-film-script-essentials",
    title: "Short Film Script Essentials: Less is More",
    excerpt: "Learn how to craft powerful short film scripts that make an impact in just a few pages.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2025",
    author: "Meera Patel",
    readTime: "6 min read",
    category: "Short Films",
  },
  {
    id: 5,
    slug: "screenplay-formatting-guide",
    title: "The Complete Screenplay Formatting Guide",
    excerpt:
      "Everything you need to know about industry-standard screenplay formatting to ensure your script looks professional.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 12, 2025",
    author: "Vikram Desai",
    readTime: "9 min read",
    category: "Technical Guides",
  },
  {
    id: 6,
    slug: "writing-effective-loglines",
    title: "Writing Effective Loglines That Sell Your Script",
    excerpt:
      "Learn how to craft compelling loglines that capture the essence of your story and attract producers and filmmakers.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 8, 2025",
    author: "Ananya Sharma",
    readTime: "5 min read",
    category: "Marketing Your Script",
  },
  {
    id: 7,
    slug: "genre-conventions-in-screenwriting",
    title: "Understanding Genre Conventions in Screenwriting",
    excerpt:
      "Explore the expectations and conventions of different film genres to write more effective and marketable scripts.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 5, 2025",
    author: "Rahul Kapoor",
    readTime: "8 min read",
    category: "Genre Writing",
  },
  {
    id: 8,
    slug: "creating-conflict-in-scripts",
    title: "Creating Meaningful Conflict in Your Scripts",
    excerpt:
      "Discover techniques for developing compelling conflicts that drive your story forward and engage your audience.",
    coverImage: "/placeholder.svg?height=300&width=500",
    date: "March 1, 2025",
    author: "Meera Patel",
    readTime: "7 min read",
    category: "Screenwriting Tips",
  },
  // Additional posts would be added here
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">The Script Blog</h1>
            <p className="text-muted-foreground text-lg">
              Expert insights, tips, and guides on screenwriting and the film industry
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="From Idea to Screen: The Complete Guide to Writing Feature Film Scripts"
                width={800}
                height={450}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                  Featured
                </span>
                <span>March 28, 2025</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                From Idea to Screen: The Complete Guide to Writing Feature Film Scripts
              </h2>
              <p className="text-muted-foreground">
                A comprehensive walkthrough of the entire screenwriting process, from developing your initial concept to
                finalizing your screenplay for production.
              </p>
              <Button asChild>
                <Link href="/blog/from-idea-to-screen-guide" className="flex items-center gap-2">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative aspect-video">
                  <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read Article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Browse by Category</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Link
              href="/blog/category/screenwriting-tips"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Screenwriting Tips</h3>
            </Link>
            <Link
              href="/blog/category/feature-films"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Feature Films</h3>
            </Link>
            <Link
              href="/blog/category/short-films"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Short Films</h3>
            </Link>
            <Link
              href="/blog/category/technical-guides"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Technical Guides</h3>
            </Link>
            <Link
              href="/blog/category/marketing-your-script"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Marketing Your Script</h3>
            </Link>
            <Link
              href="/blog/category/genre-writing"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Genre Writing</h3>
            </Link>
            <Link
              href="/blog/category/industry-insights"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Industry Insights</h3>
            </Link>
            <Link
              href="/blog/category/success-stories"
              className="p-4 rounded-lg bg-card border text-center hover:border-primary transition-colors"
            >
              <h3 className="font-medium">Success Stories</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest screenwriting tips, industry insights, and exclusive offers delivered straight to your
              inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
