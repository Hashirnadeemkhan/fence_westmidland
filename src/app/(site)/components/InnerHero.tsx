export function InnerHero({
  title,
  subtitle,
  image = "/media/images/home-hero-1.jpg",
}: {
  title: string
  subtitle?: string
  image?: string
}) {
  return (
    <section className="hero">
      <div className="hero-text-container" id="main-content">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>

      <div className="hero-image-container">
        <img src={image} alt="Background image" />
      </div>

      <div className="hero-gradient-overlay"></div>
    </section>
  )
}
