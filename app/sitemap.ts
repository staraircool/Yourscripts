import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourscripts.xyz"

  // Main pages
  const routes = [
    "",
    "/about",
    "/scripts",
    "/how-it-works",
    "/contact",
    "/blog",
    "/terms",
    "/privacy",
    "/short-film-scripts",
    "/feature-film-scripts",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog posts
  const blogPosts = [
    "/blog/movie-scripts-for-sale",
    "/blog/how-to-write-compelling-characters",
    "/blog/structure-your-feature-film",
    "/blog/from-idea-to-screen-guide",
    "/blog/dialogue-writing-tips",
    "/blog/short-film-script-essentials",
    "/blog/screenplay-formatting-guide",
    "/blog/writing-effective-loglines",
    "/blog/genre-conventions-in-screenwriting",
    "/blog/creating-conflict-in-scripts",
  ].map((post) => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...blogPosts]
}
