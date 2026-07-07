import type { Metadata } from "next"
import { InnerHero } from "../components/InnerHero"
import { ServiceSidebar, WhyChooseUs } from "../components/ServiceCommon"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title:
    "Garden Landscaping in Birmingham, Solihull & Warwickshire | Fencing Services West Midlands",
}

export default function GardenLandscapingPage() {
  return (
    <>
      <InnerHero title="Garden Landscaping" image="/media/images/service-3.jpg" />

      <main>
        <section className="content-section">
          <div className="content-container">
            <h2>
              Bring your outdoor vision to life with our complete landscaping
              services
            </h2>
            <p>
              Whether you&rsquo;re looking for a low-maintenance redesign or a full
              garden transformation, we combine creativity, experience, and
              craftsmanship to deliver beautiful, functional outdoor spaces.
            </p>

            <img
              src="/media/images/landscaping.jpg"
              alt="Landscaping"
              className="fade-in"
              loading="lazy"
            />

            <h3>Tailored Garden Design &amp; Build</h3>
            <p>
              Every garden is different - that&rsquo;s why we offer a bespoke
              landscaping service designed around your needs, space, and lifestyle.
            </p>
            <p>
              From initial ideas to the final finishing touches, we&rsquo;ll work
              closely with you to create a garden that&rsquo;s both practical and
              personal.
            </p>
            <p>
              Our landscaping services include everything from new lawns, patios,
              and raised beds to decorative features, terracing, and full reworks of
              existing layouts.
            </p>
            <p>
              Whether you&rsquo;re going for a contemporary look or a more
              traditional style, we can bring your ideas to life with thoughtful
              design and precise execution.
            </p>

            <h3>Full Landscaping Services</h3>
            <p>
              We handle every aspect of the job in-house, ensuring quality and
              consistency from start to finish. Our experienced team can take care
              of:
            </p>

            <ul>
              <li>Ground levelling and preparation</li>
              <li>Turfing and artificial lawns</li>
              <li>Patio and path installation</li>
              <li>Decking and seating areas</li>
              <li>Shed bases and outbuilding groundwork</li>
              <li>Retaining walls and raised planters</li>
              <li>Gravel, bark, and other finishes</li>
              <li>Fencing and boundary solutions</li>
              <li>Drainage and garden edging</li>
            </ul>

            <p>
              With over 7 years of experience across Birmingham, Solihull, and
              Warwickshire, we&rsquo;ve helped countless homeowners turn tired
              gardens into welcoming, well-structured spaces for relaxing,
              entertaining, and enjoying nature.
            </p>
          </div>

          <ServiceSidebar />
        </section>

        <WhyChooseUs />
      </main>

      <Cta
        heading="Ready to transform your garden?"
        text="Get in touch today for a free, no-obligation quote - we'll help turn your ideas into a garden you'll love."
      />
    </>
  )
}
