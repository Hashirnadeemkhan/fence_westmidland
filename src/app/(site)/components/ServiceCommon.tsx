import Link from "next/link"

export function ServiceSidebar() {
  return (
    <aside className="content-sidebar slide-up">
      <h2>We can also help with:</h2>
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
  )
}

export function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="narrow-on-desktop fade-in">
        <h2>Why choose Fencing Services West Midlands?</h2>
        <p>
          Most of our business comes from repeat customers, referrals, and
          word-of-mouth recommendations, and it&rsquo;s not hard to see why.
          Here&rsquo;s some reasons why you might want to consider us:
        </p>
      </div>

      <div className="why-choose-us-list fade-in delay-200ms">
        <ul>
          <li>7+ Years Experience</li>
          <li>Quality Workmanship</li>
          <li>Free, No-Obligation Quotes</li>
          <li>Custom Designs, Tailored to You</li>
          <li>Reliable &amp; Friendly Service</li>
          <li>Excellent Reputation</li>
        </ul>
      </div>
    </section>
  )
}
