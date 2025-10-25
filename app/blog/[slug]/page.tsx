import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from "lucide-react"

// This would typically come from a CMS or database
const blogPosts = {
  "movie-scripts-for-sale": {
    title: "Movie Scripts for Sale: Finding the Perfect Screenplay for Your Next Film",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 30, 2025",
    author: "Vikram Desai",
    authorRole: "Founder & Lead Writer",
    authorImage: "/placeholder.svg?height=160&width=160",
    readTime: "10 min read",
    category: "Screenwriting Tips",
    content: `
      <p>
        For filmmakers, finding the right script is often the first and most crucial step in the production process. Whether you're an independent director looking for your next project, a film student creating your portfolio piece, or a production company seeking fresh content, having access to high-quality, ready-to-produce screenplays can save you significant time and resources.
      </p>
      
      <p>
        At YourScripts, we offer a diverse collection of professionally written movie scripts for sale, ranging from short films to feature-length screenplays across all popular genres. In this guide, we'll explore the benefits of purchasing pre-written scripts, the types of scripts available, and how to find the perfect screenplay for your specific project needs.
      </p>
      
      <h2>Why Purchase Pre-Written Movie Scripts?</h2>
      
      <p>
        While many filmmakers work with original scripts or commission custom screenplays, there are several compelling reasons to consider purchasing pre-written movie scripts:
      </p>
      
      <h3>Time and Cost Efficiency</h3>
      
      <p>
        Developing a screenplay from scratch can take months or even years, not to mention the cost of hiring a screenwriter for a custom script. Pre-written scripts provide an immediate foundation for your project at a fraction of the cost of commissioning an original screenplay.
      </p>
      
      <h3>Quality and Professionalism</h3>
      
      <p>
        Professional pre-written scripts have already gone through multiple drafts and revisions, resulting in polished, production-ready screenplays. When you purchase from reputable sources like YourScripts, you're getting work from experienced screenwriters who understand industry standards and audience expectations.
      </p>
      
      <h3>Diverse Selection</h3>
      
      <p>
        Script marketplaces offer a wide variety of stories, genres, and formats. This diversity allows you to browse multiple options until you find the perfect fit for your vision, budget, and production capabilities.
      </p>
      
      <h3>Full Rights Transfer</h3>
      
      <p>
        When you purchase a script from YourScripts, you receive complete ownership rights. This means you can modify the screenplay, produce it, and distribute the resulting film without ongoing royalty payments or complicated rights negotiations.
      </p>
      
      <h2>Types of Movie Scripts Available for Purchase</h2>
      
      <p>
        At YourScripts, we offer two main categories of screenplays to suit different project needs and budgets:
      </p>
      
      <h3>Short Film Scripts</h3>
      
      <p>
        Our short film scripts are typically 8-12 pages in length (approximately 8-12 minutes of screen time) and are priced at just $20 per script. These concise screenplays are ideal for:
      </p>
      
      <ul>
        <li>Film festival submissions</li>
        <li>Student projects and portfolios</li>
        <li>Online content platforms</li>
        <li>Directors looking to build experience</li>
        <li>Low-budget independent productions</li>
        <li>Proof-of-concept projects</li>
      </ul>
      
      <p>
        Short film scripts offer compelling stories that can be produced with minimal resources while still creating maximum impact. They're perfect for filmmakers working with limited time, budget, or crew.
      </p>
      
      <h3>Feature Film Scripts</h3>
      
      <p>
        Our feature film scripts range from 90-120 pages (approximately 90-120 minutes of screen time) and are priced at $150 per script. These comprehensive screenplays are suitable for:
      </p>
      
      <ul>
        <li>Theatrical releases</li>
        <li>Streaming platform content</li>
        <li>Television movies</li>
        <li>Independent film productions</li>
        <li>Production companies seeking new material</li>
      </ul>
      
      <p>
        Feature film scripts provide complete, multi-layered stories with complex character development, subplot integration, and satisfying narrative arcs. They offer the foundation for full-length productions aimed at broader distribution channels.
      </p>
      
      <h2>How to Purchase Movie Scripts from YourScripts</h2>
      
      <p>
        At YourScripts, we've developed a straightforward process to help you find and purchase the perfect screenplay for your project:
      </p>
      
      <h3>1. Initial Contact</h3>
      
      <p>
        Begin by reaching out to us via WhatsApp at +447723454814. Let us know what type of script you're looking for, including:
      </p>
      
      <ul>
        <li>Script length (short or feature)</li>
        <li>Genre preferences</li>
        <li>Specific themes or elements you'd like to see</li>
        <li>Production constraints (budget level, location limitations, etc.)</li>
        <li>Target audience or distribution goals</li>
      </ul>
      
      <p>
        The more specific you can be about your requirements, the better we can match you with suitable scripts.
      </p>
      
      <h3>2. Review Loglines</h3>
      
      <p>
        Within 24-48 hours, we'll send you 10-15 loglines (brief summaries) of scripts that match your criteria. These loglines will give you a concise overview of each story's premise, allowing you to identify which concepts resonate with your vision.
      </p>
      
      <p>
        This service is completely free and comes with no obligation to purchase. We want to ensure you find a script that truly excites you before making any commitment.
      </p>
      
      <h3>3. Script Selection and Payment</h3>
      
      <p>
        Once you've identified a script (or scripts) that interest you, let us know your selection. We'll discuss payment options, which include secure online transfers and other electronic payment methods.
      </p>
      
      <p>
        Our pricing is transparent and straightforward:
      </p>
      
      <ul>
        <li>Short Film Scripts (8-12 pages): $20 per script</li>
        <li>Feature Film Scripts (90-120 pages): $150 per script</li>
      </ul>
      
      <h3>4. Script Delivery and Rights Transfer</h3>
      
      <p>
        After payment confirmation, we'll deliver your selected script(s) within 24-48 hours. The delivery package includes:
      </p>
      
      <ul>
        <li>The complete screenplay in industry-standard PDF format</li>
        <li>A formal rights transfer agreement</li>
      </ul>
      
      <p>
        This agreement transfers full ownership of the script to you, allowing you to modify, produce, and distribute the resulting film without additional payments or permissions.
      </p>
      
      <h2>Ready to Find Your Perfect Script?</h2>
      
      <p>
        Whether you're looking for a short film script for your next festival submission or a feature-length screenplay for a theatrical release, YourScripts has the perfect story waiting for you.
      </p>
      
      <p>
        Browse our collection today and take the first step toward bringing your next film project to life with a professional, compelling screenplay that will engage audiences and showcase your filmmaking talents.
      </p>
    `,
    relatedPosts: [
      {
        slug: "how-to-write-compelling-characters",
        title: "How to Write Compelling Characters for Your Screenplay",
      },
      {
        slug: "structure-your-feature-film",
        title: "How to Structure Your Feature Film Script",
      },
      {
        slug: "screenplay-formatting-guide",
        title: "The Complete Screenplay Formatting Guide",
      },
    ],
  },
  "how-to-write-compelling-characters": {
    title: "How to Write Compelling Characters for Your Screenplay",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 25, 2025",
    author: "Vikram Desai",
    authorRole: "Lead Writer",
    authorImage: "/placeholder.svg?height=160&width=160",
    readTime: "8 min read",
    category: "Screenwriting Tips",
    content: `
      <p>Creating memorable characters is one of the most crucial aspects of screenwriting. Characters are the heart of your story—they drive the plot, engage the audience, and ultimately determine whether your screenplay resonates with viewers. In this comprehensive guide, we'll explore techniques for crafting compelling characters that will elevate your script.</p>
      
      <h2>Start with Character Goals and Motivations</h2>
      
      <p>Every compelling character needs clear goals and motivations. What does your character want? Why do they want it? These questions form the foundation of your character's journey.</p>
      
      <p>Consider both external goals (what the character consciously pursues) and internal goals (the emotional need they may not even recognize). For example, a character might externally pursue winning a competition, while internally seeking validation from a parent.</p>
      
      <p>Strong motivations make characters relatable and give meaning to their actions. Without clear motivations, character decisions can feel arbitrary and fail to engage the audience.</p>
      
      <h2>Create Dimensional Characters with Flaws</h2>
      
      <p>Perfect characters are boring. Flaws and contradictions make characters interesting and human. Think about your favorite characters from film—they likely have compelling weaknesses alongside their strengths.</p>
      
      <p>Effective character flaws:</p>
      <ul>
        <li>Create obstacles for the character to overcome</li>
        <li>Generate conflict within the story</li>
        <li>Provide opportunities for growth and change</li>
        <li>Make characters relatable and authentic</li>
      </ul>
      
      <p>Consider how a character's strengths might also be weaknesses in certain contexts. For example, determination can become stubbornness, or caution can become paralyzing fear.</p>
      
      <h2>Develop a Distinctive Voice</h2>
      
      <p>Each character should speak in a way that reflects their background, personality, and current emotional state. Dialogue is a powerful tool for character development when each character has a distinctive voice.</p>
      
      <p>Consider these elements when crafting character dialogue:</p>
      <ul>
        <li>Vocabulary and education level</li>
        <li>Regional expressions and dialect (used judiciously)</li>
        <li>Speech patterns and cadence</li>
        <li>Favorite phrases or verbal tics</li>
        <li>What they choose to say—and what they leave unsaid</li>
      </ul>
      
      <p>Remember that film is a visual medium—sometimes what a character doesn't say can be more powerful than dialogue. Look for opportunities to reveal character through actions rather than words.</p>
      
      <h2>Create a Character Biography</h2>
      
      <p>Even if much of it never appears in your screenplay, developing a detailed character biography helps you understand your characters on a deeper level. Consider:</p>
      
      <ul>
        <li>Formative experiences and childhood memories</li>
        <li>Education and career path</li>
        <li>Relationships and family dynamics</li>
        <li>Fears, hopes, and dreams</li>
        <li>Values and beliefs</li>
        <li>Habits and hobbies</li>
      </ul>
      
      <p>This background information will inform how your character responds to situations in your script, making their reactions consistent and believable.</p>
      
      <h2>Show Character Through Action</h2>
      
      <p>In screenwriting, the principle of "show, don't tell" is particularly important. Rather than stating character traits directly, reveal them through actions and decisions.</p>
      
      <p>For example, instead of describing a character as "brave," put them in a situation where they must act bravely—or fail to do so. This approach creates more engaging scenes and gives actors material they can perform rather than just discuss.</p>
      
      <h2>Create Meaningful Character Arcs</h2>
      
      <p>A character arc traces the internal journey and transformation of a character throughout your story. Strong character arcs keep audiences invested and provide emotional satisfaction.</p>
      
      <p>Consider these common character arc patterns:</p>
      
      <ul>
        <li><strong>Positive arc:</strong> Character overcomes flaws and becomes better (e.g., selfish to selfless)</li>
        <li><strong>Negative arc:</strong> Character declines morally or emotionally (e.g., idealistic to corrupt)</li>
        <li><strong>Flat arc:</strong> Character remains steadfast in their beliefs while changing the world around them</li>
      </ul>
      
      <p>The key to a compelling arc is ensuring that change (or steadfastness) feels earned through the events of your story.</p>
      
      <h2>Test Your Characters with Difficult Choices</h2>
      
      <p>Characters reveal themselves through the choices they make, especially when faced with difficult decisions. Put your characters in situations where:</p>
      
      <ul>
        <li>All options have significant costs</li>
        <li>Their values come into conflict</li>
        <li>They must prioritize one goal over another</li>
        <li>They're forced to act under pressure</li>
      </ul>
      
      <p>These moments of decision create tension, reveal character, and drive your plot forward.</p>
      
      <h2>Conclusion</h2>
      
      <p>Creating compelling characters takes time and thoughtful development, but the investment pays off in a screenplay that resonates with readers, engages audiences, and attracts talented actors.</p>
      
      <p>Remember that character and plot should develop hand-in-hand, with each influencing the other. As you revise your screenplay, continually ask whether your characters' actions feel true to who they are and whether the events of your story provide opportunities for your characters to reveal themselves.</p>
      
      <p>By focusing on goals, flaws, distinctive voices, detailed backgrounds, revealing actions, meaningful arcs, and difficult choices, you'll create characters that leap off the page and stay with audiences long after the credits roll.</p>
    `,
    relatedPosts: [
      {
        slug: "dialogue-writing-tips",
        title: "10 Essential Dialogue Writing Tips for Screenwriters",
      },
      {
        slug: "creating-conflict-in-scripts",
        title: "Creating Meaningful Conflict in Your Scripts",
      },
      {
        slug: "structure-your-feature-film",
        title: "How to Structure Your Feature Film Script",
      },
    ],
  },
  "structure-your-feature-film": {
    title: "How to Structure Your Feature Film Script",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 22, 2025",
    author: "Ananya Sharma",
    authorRole: "Senior Writer",
    authorImage: "/placeholder.svg?height=160&width=160",
    readTime: "10 min read",
    category: "Feature Films",
    content: `
      <p>Structure is the backbone of any successful screenplay. It provides the framework that supports your story, characters, and themes. While there's no one-size-fits-all approach to screenplay structure, understanding common structural patterns can help you craft a well-paced, engaging script that satisfies audiences and attracts industry attention.</p>
      
      <h2>The Three-Act Structure: A Time-Tested Framework</h2>
      
      <p>The three-act structure has been the dominant paradigm in Western storytelling for centuries, and it remains the foundation of most successful screenplays. Let's break down each act and its function:</p>
      
      <h3>Act One: Setup (Pages 1-30)</h3>
      
      <p>The first act introduces your protagonist, the world they inhabit, and the central conflict of your story. Key elements include:</p>
      
      <ul>
        <li><strong>Hook:</strong> An opening scene that grabs attention and establishes tone</li>
        <li><strong>Exposition:</strong> Essential background information woven naturally into the story</li>
        <li><strong>Inciting Incident:</strong> The event that disrupts the protagonist's normal life and sets the story in motion</li>
        <li><strong>First Act Turn/Plot Point:</strong> A significant event that propels the protagonist into the main conflict and transitions to Act Two</li>
      </ul>
      
      <p>Act One should establish what's at stake for your protagonist and give the audience a reason to care about their journey.</p>
      
      <h3>Act Two: Confrontation (Pages 31-90)</h3>
      
      <p>The second act is the longest section of your screenplay, where your protagonist pursues their goal while facing escalating obstacles. Key elements include:</p>
      
      <ul>
        <li><strong>Rising Action:</strong> A series of complications and conflicts that test your protagonist</li>
        <li><strong>Midpoint:</strong> A significant event around page 60 that raises the stakes and often involves a reversal or revelation</li>
        <li><strong>Obstacles and Complications:</strong> Challenges that force your protagonist to grow and adapt</li>
        <li><strong>Second Act Turn/Plot Point:</strong> A major setback or revelation that leads into the third act</li>
      </ul>
      
      <p>Many screenplays struggle in the second act due to pacing issues. To maintain momentum, ensure each scene advances the plot, reveals character, or preferably both.</p>
      
      <h3>Act Three: Resolution (Pages 91-120)</h3>
      
      <p>The third act brings your story to its climax and resolution. Key elements include:</p>
      
      <ul>
        <li><strong>Preparation/Rally:</strong> The protagonist prepares for the final confrontation</li>
        <li><strong>Climax:</strong> The final, highest-stakes confrontation with the antagonistic force</li>
        <li><strong>Resolution:</strong> The aftermath showing how the protagonist and world have changed</li>
      </ul>
      
      <p>A satisfying third act resolves the external conflict while also addressing the protagonist's internal journey.</p>
      
      <h2>Beyond Three Acts: Alternative Structural Approaches</h2>
      
      <p>While the three-act structure provides a solid foundation, many successful screenplays use variations or alternative approaches:</p>
      
      <h3>The Four-Act Structure</h3>
      
      <p>Some screenwriters and theorists divide the traditional second act into two parts, creating a four-act structure. This approach can help manage the lengthy middle section of your screenplay and ensure proper pacing.</p>
      
      <h3>The Five-Act Structure</h3>
      
      <p>Derived from classical dramatic theory, the five-act structure (exposition, rising action, climax, falling action, resolution) offers another way to organize your story, particularly useful for complex narratives with multiple storylines.</p>
      
      <h3>The Hero's Journey</h3>
      
      <p>Popularized by Joseph Campbell and adapted for screenwriting by Christopher Vogler, the Hero's Journey outlines a 12-stage mythic structure that appears in stories across cultures. This approach is particularly well-suited for adventure, fantasy, and coming-of-age stories.</p>
      
      <h3>The Sequence Approach</h3>
      
      <p>This method breaks your screenplay into 8 sequences of approximately 12-15 pages each, with each sequence functioning as a mini-movie with its own beginning, middle, and end. This approach helps maintain consistent pacing throughout your script.</p>
      
      <h2>Conclusion</h2>
      
      <p>Structure is not a rigid formula but a flexible tool to help you tell your story effectively. The best screenplays use structural principles as a foundation while finding fresh, innovative ways to engage audiences.</p>
      
      <p>Remember that structure should serve your story, not the other way around. As you develop your screenplay, continually ask whether your structural choices enhance your characters, themes, and emotional impact.</p>
      
      <p>By mastering the principles of screenplay structure, you'll create scripts that not only satisfy industry expectations but also provide the satisfying emotional experience that audiences crave.</p>
    `,
    relatedPosts: [
      {
        slug: "how-to-write-compelling-characters",
        title: "How to Write Compelling Characters for Your Screenplay",
      },
      {
        slug: "creating-conflict-in-scripts",
        title: "Creating Meaningful Conflict in Your Scripts",
      },
      {
        slug: "screenplay-formatting-guide",
        title: "The Complete Screenplay Formatting Guide",
      },
    ],
  },
  "from-idea-to-screen-guide": {
    title: "From Idea to Screen: The Complete Guide to Writing Feature Film Scripts",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 28, 2025",
    author: "Vikram Desai",
    authorRole: "Lead Writer",
    authorImage: "/placeholder.svg?height=160&width=160",
    readTime: "12 min read",
    category: "Feature Films",
    content: `
      <p>Writing a feature film script is both an art and a craft. It requires creativity, technical knowledge, persistence, and a deep understanding of storytelling. In this comprehensive guide, we'll walk through the entire process of developing a feature screenplay from initial concept to final draft, providing practical advice for both new and experienced screenwriters.</p>
      
      <h2>Phase 1: Developing Your Concept</h2>
      
      <p>Every great screenplay begins with a compelling concept. This initial phase is about exploring and refining your idea until it has the substance to support a feature-length film.</p>
      
      <h3>Finding and Evaluating Ideas</h3>
      
      <p>Ideas can come from anywhere—personal experiences, news stories, historical events, or pure imagination. When evaluating potential concepts, consider:</p>
      
      <ul>
        <li><strong>Originality:</strong> What makes your idea fresh or distinctive?</li>
        <li><strong>Dramatic Potential:</strong> Does it contain inherent conflict?</li>
        <li><strong>Visual Potential:</strong> Can it be told effectively through images?</li>
        <li><strong>Emotional Impact:</strong> Will it resonate with audiences?</li>
        <li><strong>Marketability:</strong> Does it have commercial appeal or artistic merit?</li>
      </ul>
      
      <p>The strongest concepts often combine familiar elements in unexpected ways or approach universal themes from a unique perspective.</p>
      
      <h3>Developing Your Premise</h3>
      
      <p>Once you have a basic idea, develop it into a clear premise—a concise statement that captures your story's essence. A strong premise includes:</p>
      
      <ul>
        <li>A protagonist with a specific goal</li>
        <li>The main conflict or obstacle</li>
        <li>The stakes or consequences of failure or success</li>
      </ul>
      
      <p>For example: "A reluctant hero must overcome a powerful enemy to save their community, or watch everything they love be destroyed."</p>
      
      <h2>Phase 2: Planning Your Screenplay</h2>
      
      <p>Before writing your first scene, invest time in planning. This preparation will make the writing process smoother and help you avoid major structural problems.</p>
      
      <h3>Research</h3>
      
      <p>Research adds authenticity and depth to your screenplay. Depending on your concept, research might include:</p>
      
      <ul>
        <li>Subject matter expertise (professions, historical periods, etc.)</li>
        <li>Location research</li>
        <li>Technical details</li>
        <li>Cultural context</li>
        <li>Similar films (to understand conventions and avoid clichés)</li>
      </ul>
      
      <p>Take detailed notes and collect visual references that might inspire your writing.</p>
      
      <h3>Character Development</h3>
      
      <p>Develop detailed character profiles for your protagonist, antagonist, and supporting characters. For each main character, consider:</p>
      
      <ul>
        <li>Background and formative experiences</li>
        <li>Personality traits and flaws</li>
        <li>External goals and internal needs</li>
        <li>Character arc (how they'll change throughout the story)</li>
        <li>Relationships with other characters</li>
      </ul>
      
      <p>Remember that compelling characters have both strengths and weaknesses, and their decisions drive your plot forward.</p>
      
      <h2>Phase 3: Writing Your First Draft</h2>
      
      <p>With your planning complete, it's time to write your first draft. This phase is about getting your story onto the page—perfection comes later.</p>
      
      <h3>Screenplay Formatting</h3>
      
      <p>Professional screenplay formatting is essential. Industry-standard elements include:</p>
      
      <ul>
        <li>Courier 12-point font</li>
        <li>Proper scene headings (INT./EXT., location, time)</li>
        <li>Action descriptions (present tense, active voice)</li>
        <li>Character names and dialogue formatting</li>
        <li>Parentheticals, transitions, and other special elements</li>
      </ul>
      
      <p>Use professional screenwriting software like Final Draft, WriterDuet, or Fade In to handle formatting automatically.</p>
      
      <h2>Conclusion</h2>
      
      <p>Writing a feature film script is a challenging but rewarding journey. By following this process—from concept development through planning, drafting, revision, and finalization—you'll create a screenplay that effectively tells your story and meets industry standards.</p>
      
      <p>Remember that screenwriting is both an art and a craft. While these guidelines provide a framework, your unique voice and perspective are what will make your screenplay stand out. Trust the process, but also trust your creative instincts.</p>
    `,
    relatedPosts: [
      {
        slug: "how-to-write-compelling-characters",
        title: "How to Write Compelling Characters for Your Screenplay",
      },
      {
        slug: "structure-your-feature-film",
        title: "How to Structure Your Feature Film Script",
      },
      {
        slug: "screenplay-formatting-guide",
        title: "The Complete Screenplay Formatting Guide",
      },
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
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
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/blog" className="flex items-center gap-1 hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <span>•</span>
              <Link
                href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium hover:bg-primary/20"
              >
                {post.category}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-3">
              <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-primary space-y-6">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Share Links */}
              <div className="mt-12 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Share this article</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourscripts.com/blog/${params.slug}`)}`}
                      target="_blank"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourscripts.com/blog/${params.slug}`)}`}
                      target="_blank"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://yourscripts.com/blog/${params.slug}`)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`I thought you might be interested in this article: https://yourscripts.com/blog/${params.slug}`)}`}
                    >
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Share via Email</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{post.authorRole}</p>
                    <p className="text-muted-foreground">
                      An experienced screenwriter with over 15 years in the film industry. Specializes in drama and
                      thriller scripts with a focus on character-driven narratives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-16 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{relatedPost.title}</h3>
                    <Button asChild variant="outline" className="w-full mt-4">
                      <Link href={`/blog/${relatedPost.slug}`}>Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Enjoyed this article?</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for more screenwriting tips, industry insights, and exclusive offers.
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
