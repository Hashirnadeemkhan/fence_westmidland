import type { Metadata } from "next"
import { InnerHero } from "../components/InnerHero"
import { ServiceSidebar, WhyChooseUs } from "../components/ServiceCommon"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title:
    "Decking & Patio Installation in Birmingham, Solihull & Warwickshire | Fencing Services West Midlands",
}

export default function DeckingAndPatiosPage() {
  return (
    <>
      <InnerHero title="Decking & Patios" image="/media/images/service-2.jpg" />

      <main>
        <section className="content-section">
          <div className="content-container">
            <h2>
              Enhance your outdoor living space with beautifully designed decking
              and patios
            </h2>
            <p>
              We create custom solutions using high-quality materials and expert
              craftsmanship, tailored to suit your garden, lifestyle, and budget.
            </p>

            <img
              src="/media/images/decking.jpg"
              alt="Decking"
              className="fade-in"
              loading="lazy"
            />

            <h3>Custom Garden Decking</h3>
            <p>
              Our garden decking is perfect for creating a stylish and practical
              space to relax, entertain, or enjoy family time outdoors.
            </p>
            <p>
              We design and build both softwood and hardwood decks, as well as
              composite options for a low-maintenance finish.
            </p>
            <p>
              Every project starts with your vision - whether you want a raised
              seating area, split-level deck, or integrated steps and balustrades,
              we&rsquo;ll bring it to life with a clean, professional finish.
            </p>
            <p>
              All decking installations are built for strength, durability, and
              long-term use in all weather conditions.
            </p>

            <img
              src="/media/images/pacing.jpg"
              alt="Decking"
              className="fade-in"
              loading="lazy"
            />

            <h3>Patio Design &amp; Installation</h3>
            <p>
              A new patio can transform your garden into a functional, welcoming
              outdoor space.
            </p>
            <p>
              We install patios in a variety of styles, including traditional paving
              slabs, natural stone, and modern porcelain tiles - all laid with care
              and precision for a long-lasting, attractive result.
            </p>
            <p>
              We handle every stage of the process, from ground preparation and
              drainage to layout design and finishing touches.
            </p>
            <p>
              Whether you want a small seating area or a full wrap-around patio,
              we&rsquo;ll deliver a surface that looks great and stands the test of
              time.
            </p>

            <h3>High-Quality Materials &amp; Workmanship</h3>
            <p>
              At Fencing Services West Midlands, we take pride in doing things
              properly. We only use trusted materials from reputable suppliers and
              follow best practices to ensure your decking or patio is built to last.
            </p>
            <p>
              Our attention to detail and commitment to craftsmanship means you get
              a finish that&rsquo;s not just visually impressive - but structurally
              sound too.
            </p>
            <p>
              We&rsquo;ll also make sure your new deck or patio blends seamlessly
              with the rest of your garden, offering advice on landscaping, edging,
              and complementary features if needed.
            </p>
          </div>

          <ServiceSidebar />
        </section>

        <WhyChooseUs />
      </main>

      <Cta
        heading="Thinking of adding a new deck or patio?"
        text="Get in touch today for a free quotation - we'll help you design the perfect outdoor space with no pressure and no hidden costs."
      />
    </>
  )
}
