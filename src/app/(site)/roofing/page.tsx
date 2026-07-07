import type { Metadata } from "next"
import { InnerHero } from "../components/InnerHero"
import { ServiceSidebar, WhyChooseUs } from "../components/ServiceCommon"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title:
    "Roofing in Birmingham, Solihull & Warwickshire | Fencing Services West Midlands",
}

export default function RoofingPage() {
  return (
    <>
      <InnerHero title="Roofing" image="/media/images/service-4.jpg" />

      <main>
        <section className="content-section">
          <div className="content-container">
            <h2>
              High-quality EPDM rubber roofing installations across the West
              Midlands
            </h2>
            <p>
              Whether you&rsquo;re looking to upgrade your flat roof, outbuilding,
              garage, or garden office, our durable and weather-resistant EPDM
              roofing systems provide long-lasting protection and performance you
              can rely on.
            </p>
            <p>
              EPDM is a synthetic rubber membrane known for its flexibility,
              strength, and exceptional resistance to UV rays, extreme weather, and
              general wear and tear. It&rsquo;s an ideal choice for flat and
              low-slope roofs, offering a sleek, seamless finish and minimal
              maintenance requirements.
            </p>

            <h2>Why Choose EPDM Rubber Roofing?</h2>

            <ul>
              <li>
                <strong>Durability:</strong> EPDM can last up to 50 years with
                proper installation and care.
              </li>
              <li>
                <strong>Waterproof:</strong> Seamless installation helps eliminate
                leaks and ponding water issues.
              </li>
              <li>
                <strong>Low Maintenance:</strong> Resistant to moss, algae, and
                cracking — no regular coating or sealing required.
              </li>
              <li>
                <strong>Environmentally Friendly:</strong> EPDM is recyclable and
                energy-efficient, helping to regulate building temperature.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Affordable material with long-term
                savings on maintenance and repairs.
              </li>
            </ul>

            <h2>Expert Installation Across the West Midlands</h2>
            <p>
              Our experienced team ensures a flawless fit with every EPDM rubber
              roof we install. From preparing the surface and applying adhesive to
              sealing edges and detailing around roof features, we take pride in
              delivering workmanship that&rsquo;s built to last.
            </p>
            <p>
              Whether you&rsquo;re replacing an old felt roof or starting from
              scratch, we provide honest advice, competitive pricing, and a tidy,
              professional finish every time.
            </p>
            <p>
              We serve homeowners, landlords, and commercial clients throughout the
              West Midlands, including Birmingham, Wolverhampton, Dudley, Walsall,
              and surrounding areas.
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
