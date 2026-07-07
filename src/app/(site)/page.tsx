import Link from "next/link"
import { AreasMap } from "./components/AreasMap"
import { Cta } from "./components/Cta"

const carouselThumbs = [
  "001", "002", "003", "004", "005", "006", "007", "008", "009",
]

function CarouselTrack() {
  return (
    <div className="carousel-content carousel-content-slide">
      {carouselThumbs.map((n) => (
        <img
          key={n}
          src={`/media/gallery/thumbs/${n}.jpg`}
          alt="Alt text"
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-home">
        <div className="hero-text-container" id="main-content">
          <h1>
            <b>Quality Fencing &amp; Landscaping Services</b> Across the West
            Midlands
          </h1>
          <p>
            From decorative fencing to custom patios and decking, we bring your
            outdoor space to life with over 7 years of experience.
          </p>
        </div>

        <div className="hero-button-container slide-down delay-200ms">
          <Link href="/contact" className="button white">
            Get a quote
          </Link>
          <a href="#services-section" className="button white-outline">
            Learn more
          </a>
        </div>

        <div className="hero-image-container">
          <img src="/media/images/home-hero-1.jpg" alt="Background image" />
        </div>

        <div className="hero-accreditations-container fade-in delay-800ms"></div>

        <div className="hero-gradient-overlay"></div>
      </section>

      <section className="top-cta">
        <p>
          Need a fencing expert in the West Midlands? Call us on{" "}
          <a href="tel:07725966021">07725 966 021</a>
        </p>
      </section>

      <main>
        {/* SERVICES */}
        <section className="home-services-section" id="services-section">
          <div className="narrow-on-desktop fade-in">
            <span className="pre-heading">Our Services</span>
            <h2>What we do</h2>
            <p>
              We offer a wide range of outdoor solutions - including fencing,
              patios, gates, decking, and complete garden makeovers.
            </p>
          </div>

          <div className="home-services-grid fade-in delay-200ms">
            <Link href="/fencing-and-gates" className="service-card">
              <img src="/media/images/service-1.jpg" alt="Alt text" loading="lazy" />
              <div className="service-card-text">
                <h3>Fencing &amp; Gates</h3>
                <p>
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </Link>

            <Link href="/decking-and-patios" className="service-card">
              <img src="/media/images/service-2.jpg" alt="Alt text" loading="lazy" />
              <div className="service-card-text">
                <h3>Decking &amp; Patios</h3>
                <p>
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </Link>

            <Link href="/garden-landscaping" className="service-card">
              <img src="/media/images/service-3.jpg" alt="Alt text" loading="lazy" />
              <div className="service-card-text">
                <h3>Garden Landscaping</h3>
                <p>
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </Link>

            <Link href="/roofing" className="service-card">
              <img src="/media/images/service-4.jpg" alt="Alt text" loading="lazy" />
              <div className="service-card-text">
                <h3>Roofing</h3>
                <p>
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </Link>
          </div>

          <Link href="/contact" className="button primary">
            Get a quote
          </Link>
        </section>

        {/* ABOUT US */}
        <section className="about-us-section">
          <div className="section-bg-img-container">
            <img src="/media/images/bg-image-1.jpg" alt="Alt text" loading="lazy" />
          </div>

          <div className="section-text-container fade-in">
            <span className="pre-heading">Who we are</span>
            <h2>About us</h2>
            <div className="about-us-paragraph-container">
              <p>
                At Fencing Services West Midlands, we take pride in delivering
                reliable, high-quality landscaping and fencing solutions tailored
                to your needs.
              </p>
              <p>
                With over 7 years of hands-on experience, we&rsquo;ve worked on
                everything from small garden projects to large property
                transformations across Birmingham, Solihull, and Warwickshire.
              </p>
              <p>
                Our services cover all aspects of outdoor improvement - from
                strong, stylish fencing to custom-built patios, gates, and
                decking.
              </p>
              <p>
                We&rsquo;re known for our attention to detail, honest pricing, and
                friendly service. Every project starts with a free, no-obligation
                quote, and finishes with a result you&rsquo;ll love for years to
                come.
              </p>
            </div>
          </div>

          <div className="section-gradient-overlay"></div>
        </section>

        {/* LATEST WORK */}
        <section className="latest-work-section">
          <div className="narrow-on-desktop fade-in">
            <span className="pre-heading">View our gallery</span>
            <h2>Our Latest Work</h2>
            <p>
              Have a look at some of our recently completed jobs from around
              Birmingham and the surrounding areas in West Midlands.
            </p>
          </div>

          <div className="latest-work-carousel fade-in delay-200ms">
            <CarouselTrack />
            <CarouselTrack />
          </div>

          <Link href="/gallery" className="button primary">
            View gallery
          </Link>
        </section>

        {/* AREAS COVERED */}
        <section className="areas-covered-section">
          <div className="narrow-on-desktop fade-in">
            <span className="pre-heading">Where we work</span>
            <h2>Areas we cover</h2>
            <p>
              We&rsquo;re based in Birmingham and work throughout West Midlands. If
              you&rsquo;re unsure if we cover your location, please{" "}
              <Link href="/contact">get in touch</Link>.
            </p>
          </div>

          <AreasMap />

          <p className="map-credit">
            Map provided by{" "}
            <a href="https://leafletjs.com/" target="_blank" rel="noreferrer">
              Leaflet
            </a>{" "}
            and{" "}
            <a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">
              OpenStreetMap
            </a>
          </p>
        </section>

        {/* REVIEWS */}
        <section className="home-reviews-section">
          <div className="narrow-on-desktop fade-in">
            <span className="pre-heading">Our reviews</span>
            <h2>What our customers say</h2>
            <p>
              We take great pride in our work and providing exceptional service.
              Here&rsquo;s a small sample of the great feedback we&rsquo;ve
              received from our customers:
            </p>
          </div>

          <div className="home-reviews-grid">
            <div className="review-card slide-up delay-200ms">
              <img src="/media/svg/fivestars.svg" alt="Five stars" className="review-stars" />
              <div className="review-text">
                <p>
                  What an amazing service . Quick thorough and really efficient. So
                  happy with all the work. Would recommend this service to anyone
                  who wants a good job from start to finish. Thank you so much feel
                  so happy with the job 😀
                </p>
              </div>
              <div className="review-name">
                <p>Samantha</p>
              </div>
            </div>

            <div className="review-card slide-up delay-400ms">
              <img src="/media/svg/fivestars.svg" alt="Five stars" className="review-stars" />
              <div className="review-text">
                <p>
                  Chris. A man of his word, very quick repair on a fence which one
                  of my drivers hit , insurance job, very professional, excellent
                  10/10
                </p>
              </div>
              <div className="review-name">
                <p>Simon</p>
              </div>
            </div>
          </div>

          <Link href="/reviews" className="button primary">
            Read all reviews
          </Link>
        </section>
      </main>

      <Cta heading="Get a free quotation today" />
    </>
  )
}
