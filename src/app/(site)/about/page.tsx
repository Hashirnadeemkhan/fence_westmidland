import type { Metadata } from "next"
import Link from "next/link"
import { InnerHero } from "../components/InnerHero"
import { WhyChooseUs } from "../components/ServiceCommon"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title: "About Us | Fencing Services West Midlands",
}

export default function AboutPage() {
  return (
    <>
      <InnerHero
        title="About Us"
        subtitle="Reliable, high-quality fencing and landscaping across Birmingham, Solihull, and Warwickshire, with over 7 years of experience."
      />

      <main>
        <section className="content-section">
          <div className="content-container">
            <h2>Who we are</h2>
            <p>
              At Fencing Services West Midlands, we take pride in delivering
              reliable, high-quality landscaping and fencing solutions tailored to
              your needs. What started as a small local operation has grown into a
              trusted name for outdoor improvements right across the West Midlands.
            </p>
            <p>
              With over 7 years of hands-on experience, we&rsquo;ve worked on
              everything from small garden projects to large property
              transformations across Birmingham, Solihull, and Warwickshire. No two
              gardens are the same, and we treat every project as if it were our own.
            </p>

            <h3>What we do</h3>
            <p>
              Our services cover all aspects of outdoor improvement - from strong,
              stylish fencing and secure gates to custom-built patios, decking, and
              complete garden landscaping. We also install durable, weather-resistant
              EPDM rubber roofing for flat roofs, outbuildings, and garden offices.
            </p>
            <p>
              Whether you need a brand-new fence, a full garden makeover, or a quick
              repair, our experienced team delivers secure, long-lasting results with
              a clean, professional finish every time.
            </p>

            <h3>How we work</h3>
            <p>
              We&rsquo;re known for our attention to detail, honest pricing, and
              friendly service. Every project starts with a free, no-obligation
              quote, and finishes with a result you&rsquo;ll love for years to come.
            </p>
            <p>
              Most of our business comes from repeat customers, referrals, and
              word-of-mouth recommendations - something we&rsquo;re incredibly proud
              of. Take a look at our{" "}
              <Link href="/gallery">recent work</Link> or read what our customers say
              on our <Link href="/reviews">reviews page</Link>.
            </p>

            <h3>Areas we cover</h3>
            <p>
              We&rsquo;re based in Birmingham and work throughout the West Midlands,
              including Solihull, Warwickshire, Wolverhampton, Dudley, Walsall, and
              the surrounding areas. If you&rsquo;re unsure whether we cover your
              location, please{" "}
              <Link href="/contact">get in touch</Link> - we&rsquo;re always happy to
              help.
            </p>
          </div>

          <aside className="content-sidebar slide-up">
            <h2>Our services</h2>
            <ul>
              <li>
                <Link href="/fencing-and-gates">Fencing &amp; Gates</Link>
              </li>
              <li>
                <Link href="/decking-and-patios">Decking &amp; Patios</Link>
              </li>
              <li>
                <Link href="/garden-landscaping">Gardening Landscaping</Link>
              </li>
              <li>
                <Link href="/roofing">Roofing</Link>
              </li>
            </ul>

            <div className="sidebar-cta">
              <p>Call us today on</p>
              <a href="tel:07725966021">07725 966 021</a>
            </div>
          </aside>
        </section>

        <WhyChooseUs />
      </main>

      <Cta heading="Get a free quotation today" />
    </>
  )
}
