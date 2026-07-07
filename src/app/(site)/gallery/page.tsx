import type { Metadata } from "next"
import { InnerHero } from "../components/InnerHero"
import { GalleryLightbox } from "../components/GalleryLightbox"
import { Cta } from "../components/Cta"

export const metadata: Metadata = {
  title: "Gallery | Fencing Services West Midlands",
}

export default function GalleryPage() {
  return (
    <>
      <InnerHero
        title="Gallery"
        subtitle="Whether you want some inspiration, or would just like to see the quality of our work, have a look at some of our recent jobs:"
      />

      <main>
        <GalleryLightbox />
      </main>

      <Cta heading="Like what you see?" />
    </>
  )
}
