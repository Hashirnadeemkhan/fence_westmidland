"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { InnerHero } from "../components/InnerHero"

type Blog = {
  id: string
  slug: string
  title: string
  content: string
  imageUrl?: string | null
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog")
        if (res.ok) {
          setBlogs(await res.json())
        } else {
          console.error("Failed to fetch blogs")
        }
      } catch (err) {
        console.error("Error fetching blogs:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <>
      <InnerHero
        title="Blog"
        subtitle="Expert tips, project stories, and advice on fencing, decking, patios, and garden landscaping across the West Midlands."
      />

      <main>
        <section className="blog-section">
          <div className="blog-intro fade-in">
            <span className="pre-heading">Our blog</span>
            <h2>Latest articles &amp; insights</h2>
            <p>
              Have a read of our latest posts for ideas, guides, and tips to help
              you get the most out of your outdoor space.
            </p>
          </div>

          {loading ? (
            <p className="blog-empty">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="blog-empty">No blogs available right now.</p>
          ) : (
            <div className="blog-grid">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} className="blog-card">
                  <div className="blog-card-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.imageUrl || "/media/images/home-hero-1.jpg"}
                      alt={blog.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-card-body">
                    <h3>{blog.title}</h3>
                    <div
                      className="blog-card-excerpt"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                    <span className="blog-read-more">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
