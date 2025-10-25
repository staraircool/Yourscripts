import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: "how-to-write-compelling-characters",
    title: "How to Write Compelling Characters for Your Screenplay",
    excerpt:
      "Learn the essential techniques for creating memorable characters that will captivate your audience and elevate your script.",
    coverImage: "/images/blog/characters.jpg",
    date: "March 25, 2025",
    author: "Vikram Desai",
    readTime: "8 min read",
    category: "screenwriting-tips",
  },
  {
    id: 2,
    slug: "structure-your-feature-film",
    title: "How to Structure Your Feature Film Script",
    excerpt:
      "Discover the three-act structure and other frameworks that will help you craft a well-paced and engaging feature film screenplay.",
    coverImage: "/images/blog/structure.jpg",
    date: "March 22, 2025",
    author: "Ananya Sharma",
    readTime: "10 min read",
    category: "feature-films",
  },
  {
    id: 3,
    slug: "dialogue-writing-tips",
    title: "10 Essential Dialogue Writing Tips for Screenwriters",
    excerpt: "Master the art of writing natural, compelling dialogue that reveals character and advances your story.",
    coverImage: "/images/blog/dialogue.jpg",
    date: "March 18, 2025",
    author: "Rahul Kapoor",
    readTime: "7 min read",
    category: "screenwriting-tips",
  },
  {
    id: 4,
    slug: "short-film-script-essentials",
    title: "Short Film Script Essentials: Less is More",
    excerpt: "Learn how to craft powerful short film scripts that make an impact in just a few pages.",
    coverImage: "/images/blog/short-film.jpg",
    date: "March 15, 2025",
    author: "Meera Patel",
    readTime: "6 min read",
    category: "short-films",
  },
  {
    id: 5,
    slug: "screenplay-formatting-guide",
    title: "The Complete Screenplay Formatting Guide",
    excerpt:
      "Everything you need to know about industry-standard screenplay formatting to ensure your script looks professional.",
    coverImage: "/images/blog/formatting.jpg",
    date: "March 12, 2025",
    author: "Vikram Desai",
    readTime: "9 min read",
    category: "technical-guides",
  },
  {
    id: 6,
    slug: "writing-effective-loglines",
    title: "Writing Effective Loglines That Sell Your Script",
    excerpt:
      "Learn how to craft compelling loglines that capture the essence of your story and attract producers and filmmakers.",
    coverImage: "/images/blog/loglines.jpg",
    date: "March 8, 2025",
    author: "Ananya Sharma",
    readTime: "5 min read",
    category: "marketing-your-script",
  },
  {
    id: 7,
    slug: "genre-conventions-in-screenwriting",
    title: "Understanding Genre Conventions in Screenwriting",
    excerpt:
      "Explore the expectations and conventions of different film genres to write more effective and marketable scripts.",
    coverImage: "/images/blog/genres.jpg",
    date: "March 5, 2025",
    author: "Rahul Kapoor",
    readTime: "8 min read",
    category: "genre-writing",
  },
  {
    id: 8,
    slug: "creating-conflict-in-scripts",
    title: "Creating Meaningful Conflict in Your Scripts",
    excerpt:
      "Discover techniques for developing compelling conflicts that drive your story forward and engage your audience.",
    coverImage: "/images/blog/conflict.jpg",
    date: "March 1, 2025",
    author: "Meera Patel",
    readTime: "7 min read",
    category: "screenwriting-tips",
  },
  // Additional posts would be added here
]

const categories = {
  "screenwriting-tips": {
    title: "Screenwriting Tips",
    description: "Expert advice and techniques to improve your screenwriting skills",
  },
  "feature-films": {
    title: "Feature Films",
    description: "Guides and insights for writing compelling feature-length screenplays",
  },
  "short-films": {
    title: "Short Films",
    description: "Techniques and strategies for crafting impactful short film scripts",
  },
  "technical-guides": {
    title: "Technical Guides",
    description: "Practical instructions on screenplay formatting and technical aspects",
  },
  "marketing-your-script": {
    title: "Marketing Your Script",
    description: "Tips for selling your screenplay and getting it into the right hands",
  },
  "genre-writing": {
    title: "Genre Writing",
    description: "Insights into writing for specific film genres and their conventions",
  },
  "industry-insights": {
    title: "Industry Insights",
    description: "Perspectives on the film industry and screenwriting profession",
  },
  "success-stories": {
    title: "Success Stories",
    description: "Inspiring stories of screenwriters who found success in the industry",
  },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories[params.category]
  const filteredPosts = blogPosts.filter((post) => post.category === params.category)

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The blog category you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/blog" className="flex items-center gap-1 hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">{category.title}</h1>
            <p className="text-muted-foreground text-lg">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative aspect-video">
                    <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 flex-grow">
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-bold mb-2">No articles found</h2>
              <p className="text-muted-foreground mb-6">There are currently no articles in this category.</p>
              <Button asChild>
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          )}
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
