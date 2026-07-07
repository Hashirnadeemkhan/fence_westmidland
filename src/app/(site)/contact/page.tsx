import type { Metadata } from "next"
import Link from "next/link"
import { InnerHero } from "../components/InnerHero"
import { AreasMap } from "../components/AreasMap"

export const metadata: Metadata = {
  title: "Contact | Fencing Services West Midlands",
}

export default function ContactPage() {
  return (
    <>
      <InnerHero
        title="Contact Us"
        subtitle="If you have an enquiry about our services, please get in touch using these details or using the contact form."
      />

      <main>
        <section className="contact-page-content">
          <div className="row">
            <div className="col fade-in">
              <h2>Get in touch</h2>
              <div className="contact-details-container">
                <a href="tel:07725966021" title="Call us">
                  <tel>07725 966 021</tel>
                </a>
                <a
                  href="mailto:fencingserviceswestmidlands@gmail.com"
                  title="Email us"
                >
                  fencingservices<wbr />westmidlands@gmail.com
                </a>
              </div>

              <h2>Connect with us</h2>
              <div className="contact-page-socials-container">
                <a
                  href="https://www.facebook.com/profile.php?id=100083302689553&sk=reviews"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                >
                  <img src="/media/icons/facebook-icon.png" alt="Facebook" loading="lazy" />
                </a>
                <a
                  href="https://share.google/t4opjbyS5ShErIxFG"
                  target="_blank"
                  rel="noreferrer"
                  title="Google"
                >
                  <img src="/media/icons/google-icon.png" alt="Google" loading="lazy" />
                </a>
                <a
                  href="https://www.yell.com/biz/fencing-services-west-midlands-birmingham-10266223/"
                  target="_blank"
                  rel="noreferrer"
                  title="Yell"
                >
                  <img src="/media/icons/yell-icon.png" alt="Yell" loading="lazy" />
                </a>
              </div>
            </div>

            <div className="col fade-in">
              <h2>Send us a message</h2>

              <form
                method="post"
                action="https://mail.amcsinternet.co.uk/mailer.html?to=fencingserviceswestmidlands@gmail.com"
                autoComplete="on"
                className="contact-form"
              >
                <div className="form-element">
                  <label htmlFor="name">Your name:</label>
                  <input type="text" id="name" name="Name" className="form-field" required />
                </div>

                <div className="form-element">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="Email" className="form-field" required />
                </div>

                <div className="form-element">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="Phone" className="form-field" required />
                </div>

                <div className="form-element">
                  <label htmlFor="postcode">Postcode:</label>
                  <input type="text" id="postcode" name="Postcode" className="form-field" required />
                </div>

                <div className="form-element">
                  <label htmlFor="service">Service required:</label>
                  <input
                    type="text"
                    id="service"
                    name="Service required"
                    className="form-field"
                    required
                  />
                </div>

                <div className="form-element">
                  <label htmlFor="date">Preferred date:</label>
                  <input type="date" id="date" name="Date" className="form-field" />
                </div>

                <div className="form-element">
                  <label htmlFor="message">Tell us more:</label>
                  <textarea id="message" name="Message" className="form-field"></textarea>
                </div>

                <button type="submit" className="button primary">
                  Send now
                </button>
              </form>
            </div>
          </div>
        </section>

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
      </main>
    </>
  )
}
