import type { Metadata } from "next"
import { InnerHero } from "../components/InnerHero"
import { ServiceSidebar, WhyChooseUs } from "../components/ServiceCommon"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title:
    "Fencing & Gates Installation in Birmingham, Solihull & Warwickshire | Fencing Services West Midlands",
}

export default function FencingAndGatesPage() {
  return (
    <>
      <InnerHero title="Fencing & Gates" image="/media/images/service-1.jpg" />

      <main>
        <section className="content-section">
          <div className="content-container">
            <h2>
              We supply and install high-quality fencing and gates for homes,
              businesses, and agricultural properties.
            </h2>
            <p>
              Whether you need a brand-new fence, professional repairs, or sturdy
              replacement posts, our experienced team delivers secure, long-lasting
              results across Birmingham, Solihull, and Warwickshire.
            </p>

            <img
              src="/media/images/fencing1.jpg"
              alt="GARDEN FENCING"
              className="fade-in"
              loading="lazy"
            />

            <h3>Domestic Garden Fencing</h3>
            <p>
              We offer a wide range of garden fencing styles to suit every home
              and budget - from traditional feather-edge panels to concrete post
              systems and low-maintenance UPVC fencing.
            </p>
            <p>
              Our garden fencing solutions combine privacy, security, and visual
              appeal, making your outdoor space safer and more stylish.
            </p>
            <p>
              We also install matching garden gates, built to blend seamlessly with
              your fencing and fitted with secure, weather-resistant fixings. Every
              installation is completed with care, precision, and a strong attention
              to detail.
            </p>

            <h3>Commercial &amp; Security Fencing</h3>
            <p>
              Need durable fencing for your business or commercial premises? We
              provide robust fencing systems designed for security and reliability.
            </p>
            <p>
              Whether it&rsquo;s perimeter fencing, access gates, or barrier
              systems, we can recommend the right solution to protect your property
              while maintaining a clean, professional look.
            </p>
            <p>
              All of our commercial fencing is installed to industry standards, with
              options for steel mesh, palisade, or closeboard fencing depending on
              your site&rsquo;s requirements.
            </p>

            <h3>Agricultural Fencing Solutions</h3>
            <p>
              We also supply and install fencing for farms, paddocks, and rural
              properties throughout the West Midlands.
            </p>
            <p>
              From post-and-rail fencing to wire stock fencing and access gates,
              we&rsquo;ll help you protect livestock, define boundaries, and keep
              your land secure.
            </p>
            <p>
              Our agricultural fencing is built to withstand the elements and the
              daily demands of country life, with durable materials and strong
              timber posts designed to last.
            </p>

            <h3>Fencing Repairs, Panel &amp; Post Replacement</h3>
            <p>
              Storm damage? Loose panels? Rotten posts? We offer reliable fencing
              repairs to restore safety and appearance without the cost of a full
              replacement.
            </p>
            <p>
              We can resecure existing fences, replace broken or leaning posts, and
              source matching panels to maintain a consistent look.
            </p>
            <p>
              Whether it&rsquo;s a quick fix or a more complex repair job, our team
              will assess the damage and provide honest, affordable solutions.
            </p>
          </div>

          <ServiceSidebar />
        </section>

        <WhyChooseUs />
      </main>

      <Cta
        heading="Need new fencing or a fast repair?"
        text="Contact us today for a free quote - we're always happy to offer advice and find the right solution for your home, business, or land."
      />
    </>
  )
}
