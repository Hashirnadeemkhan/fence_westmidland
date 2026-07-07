import type { Metadata } from "next"
import { InnerHero } from "../components/InnerHero"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title: "Reviews | Fencing Services West Midlands",
}

const reviews: { text: string; name: string; delay: string }[] = [
  {
    text: "What an amazing service . Quick thorough and really efficient. So happy with all the work. Would recommend this service to anyone who wants a good job from start to finish. Thank you so much feel so happy with the job 😀",
    name: "Samantha",
    delay: "delay-200ms",
  },
  {
    text: "Terrific service. We had damage to fencing and gate in the recent storm. I phoned and they were at my property by 10 a.m. the next day. Excellent work and went the extra mile, coming back the following day to ensure the gate was hung absolutely in line. Would definitely use this firm again. ",
    name: "Phil",
    delay: "delay-300ms",
  },
  {
    text: "Chris. A man of his word, very quick repair on a fence which one of my drivers hit , insurance job, very professional, excellent 10/10",
    name: "Simon",
    delay: "delay-400ms",
  },
  {
    text: "Professional service , arrive at the time they said they would, polite lads, and cleaned everything down at the end of the job. Perfect job and would definitely recommend - will be using again for front fencing. Thank you",
    name: "Nikki",
    delay: "delay-500ms",
  },
  {
    text: "Amazing service received by Fencing Services West Midlands! They did a top notch job from providing a quote to building a beautiful and sturdy fence in the back garden. I would definitely recommend this company and give them more stars on this review if I could. Thank you 🙏 I am so happy with everything.",
    name: "Vicki",
    delay: "delay-200ms",
  },
  {
    text: "I’ve used this company for multiple jobs. All tailored to my budget with high quality results. Great company very polite and hard working. Arrived on time and completed the work in a good timely manner. Definitely recommend.",
    name: "Gail",
    delay: "delay-300ms",
  },
  {
    text: "I used this company for a large gate replacement and was very impressed with the service provided. Chris replaced the gate with a good quality , strong and long lasting replacement . Excellent service was very polite and professional would definitely recommend using this business.",
    name: "Lyndsey",
    delay: "delay-400ms",
  },
  {
    text: "Very good work. Listened and understood what I required. Really friendly people, hard working. Completed on time and in budget. Did some extra work as well. Highly recommended.",
    name: "Emma",
    delay: "delay-500ms",
  },
]

export default function ReviewsPage() {
  return (
    <>
      <InnerHero
        title="Reviews"
        subtitle="We take great pride in our work and providing exceptional service. Here's a small sample of the great feedback we've received from our customers:"
      />

      <main>
        <section className="review-page-container">
          <div className="review-page-grid">
            {reviews.map((r) => (
              <div className={`review-card slide-up ${r.delay}`} key={r.name}>
                <img
                  src="/media/svg/fivestars.svg"
                  alt="Five stars"
                  className="review-stars"
                />
                <div className="review-text">
                  <p>{r.text}</p>
                </div>
                <div className="review-name">
                  <p>{r.name}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Have a look at all of our outstanding feedback on{" "}
            <a
              href="https://www.yell.com/biz/fencing-services-west-midlands-birmingham-10266223/"
              target="_blank"
              rel="noreferrer"
            >
              Yell,
            </a>{" "}
            <a
              href="https://share.google/t4opjbyS5ShErIxFG"
              target="_blank"
              rel="noreferrer"
            >
              Google
            </a>
            , and{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100083302689553&sk=reviews"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            .
          </p>
        </section>
      </main>

      <Cta heading="Become one of our happy customers" />
    </>
  )
}
