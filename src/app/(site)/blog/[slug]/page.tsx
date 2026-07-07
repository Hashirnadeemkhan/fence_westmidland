import prisma from "@/lib/prisma"
import { InnerHero } from "../../components/InnerHero"
import { Cta } from "../../components/Cta"

export default async function BlogDetails({
  params,
}: {
  params: { slug: string }
}) {
  const blog = await prisma.blog.findUnique({ where: { slug: params.slug } })

  if (!blog) {
    return (
      <>
        <InnerHero title="Blog post not found" />
        <main>
          <section className="blog-article">
            <div className="blog-article-inner">
              <p className="blog-empty">
                Sorry, we couldn&rsquo;t find the article you were looking for.
              </p>
            </div>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <InnerHero
        title={blog.title}
        subtitle="Expert tips, ideas & industry insights"
      />

      <main>
        <article className="blog-article">
          <div className="blog-article-inner fade-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={blog.imageUrl || "/media/images/home-hero-1.jpg"}
              alt={blog.title}
              className="blog-article-img"
            />

            <p className="blog-article-date">
              Published on{" "}
              <b>{new Date(blog.createdAt).toLocaleDateString("en-GB")}</b>
            </p>

            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </article>
      </main>

      <Cta heading="Get a free quotation today" />
    </>
  )
}
