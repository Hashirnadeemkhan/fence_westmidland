import Link from "next/link"

export function Cta({
  heading,
  text = "Please don't hesitate to get in touch for any fencing work. No job is too big or small and we welcome all enquiries.",
}: {
  heading: string
  text?: string
}) {
  return (
    <section className="cta-section">
      <div className="section-bg-img-container">
        <img src="/media/images/bg-image-2.jpg" alt="Alt text" loading="lazy" />
      </div>

      <div className="narrow-on-desktop fade-in">
        <span className="pre-heading">Get in touch today</span>
        <h2>{heading}</h2>
        <p>{text}</p>

        <div className="hero-button-container slide-down delay-400ms">
          <Link href="/contact" className="button white">
            <i className="fa-solid fa-messages"></i> Get a quote
          </Link>

          <a href="tel:07725966021" className="button white-outline">
            <i className="fa-sharp fa-solid fa-phone-volume"></i> Call us
          </a>
        </div>
      </div>

      <div className="section-gradient-overlay"></div>
    </section>
  )
}
