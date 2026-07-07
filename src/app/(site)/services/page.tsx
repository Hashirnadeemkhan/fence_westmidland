import type { Metadata } from "next"
import Link from "next/link"
import { InnerHero } from "../components/InnerHero"
import { WhyChooseUs } from "../components/ServiceCommon"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title: "Services | Fencing Services West Midlands",
}

const servicesList = [
  "Boiler servicing and repairs",
  "Central heating systems",
  "Emergency breakdown repairs",
  "Full central heating systems",
  "Gas appliances",
  "Gas leaks",
  "Gas servicing",
  "Heating control upgrades",
  "Landlord gas safety checks",
  "Leaks and blockages",
  "New boiler installations",
  "Pipe fitting",
  "Power flushing",
  "Radiators",
  "Showers",
  "Taps",
  "Toilets",
  "Underfloor heating",
  "Unvented water cylinders",
  "Water pumps",
  "Wet rooms",
]

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        title="Services"
        subtitle="From routine maintenance to complex installations, we cover all common fencing jobs."
      />

      <main>
        <section className="services-intro-section">
          <div className="row">
            <div className="col fade-in">
              <h2>fencing in Birmingham</h2>
              <p>
                At Fencing Services West Midlands, we pride ourselves on delivering
                top-quality gas engineering and plumbing services tailored to meet
                the needs of both residential and commercial clients.
              </p>
              <p>
                We offer a comprehensive range of services, including boiler
                installations and servicing, underfloor heating, landlord gas-safety
                checks, and all plumbing work.
              </p>
              <p>
                Our expertise and commitment to excellence ensure that every project
                is completed to the highest standards, providing you with reliable,
                efficient, and safe solutions.
              </p>
            </div>

            <div className="col fade-in">
              <img src="/media/images/service-page-img.jpg" alt="Alt text" />
            </div>
          </div>
        </section>

        <section className="services-list-section">
          <div className="narrow-on-desktop fade-in">
            <span className="pre-heading">What we do </span>
            <h2>Our Services</h2>
            <p>
              Here&rsquo;s the most popular jobs we complete on a daily basis for
              customers in Birmingham and the surrounding areas:
            </p>
          </div>

          <div className="services-list">
            <ul>
              {servicesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="narrow-on-desktop fade-in">
            <p>
              If you have any queries or specific requests, please don&rsquo;t
              hesitate to get in touch. We&rsquo;re happy to help with any fencing
              work.
            </p>

            <Link href="/contact" className="button white">
              <i className="fa-solid fa-messages"></i> Get a quote
            </Link>
          </div>
        </section>

        <WhyChooseUs />
      </main>

      <Cta heading="What can we do for you?" />
    </>
  )
}
