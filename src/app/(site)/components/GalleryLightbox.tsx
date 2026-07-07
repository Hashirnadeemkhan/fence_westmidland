"use client"

import { useCallback, useEffect, useState } from "react"

type Gallery = {
  title: string
  folder: string
  count: number
}

const GALLERIES: Gallery[] = [
  { title: "Fencing & Gates", folder: "fencing", count: 20 },
  { title: "Paving & Brickwork", folder: "paving", count: 10 },
]

const pad = (n: number) => String(n).padStart(3, "0")

export function GalleryLightbox() {
  const [active, setActive] = useState<{ g: number; i: number } | null>(null)

  const close = useCallback(() => setActive(null), [])

  const navigate = useCallback(
    (dir: number) => {
      setActive((cur) => {
        if (!cur) return cur
        const g = GALLERIES[cur.g]
        const next = cur.i + dir
        if (next < 0 || next >= g.count) return cur
        return { g: cur.g, i: next }
      })
    },
    []
  )

  useEffect(() => {
    document.body.classList.toggle("remove-scroll", active !== null)
    return () => document.body.classList.remove("remove-scroll")
  }, [active])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.keyCode === 27) close()
      else if (e.keyCode === 39) navigate(1)
      else if (e.keyCode === 37) navigate(-1)
    }
    window.addEventListener("keyup", onKey)
    return () => window.removeEventListener("keyup", onKey)
  }, [active, close, navigate])

  return (
    <section className="gallery-section">
      {GALLERIES.map((gallery, gi) => (
        <div key={gallery.folder}>
          <h2>{gallery.title}</h2>
          <div className="gallery">
            {Array.from({ length: gallery.count }, (_, idx) => {
              const n = idx + 1
              return (
                <div className="gallery-item fade-in" key={n}>
                  <a
                    href={`/media/gallery/${gallery.folder}/${pad(n)}.jpg`}
                    data-lightbox="gallery"
                    data-image-alt={`Image ${n}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActive({ g: gi, i: idx })
                    }}
                  >
                    <img
                      src={`/media/gallery/${gallery.folder}/thumbs/${pad(n)}.jpg`}
                      alt="Gallery thumbnail"
                      loading="lazy"
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      <p>
        Keep up with our latest work on{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100083302689553"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        .
      </p>

      {active && (
        <div
          className="lightbox-container lightbox-gallery"
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div className="lightbox-wrapper">
            <div className="lightbox-content">
              <img
                className="lightbox-image"
                src={`/media/gallery/${GALLERIES[active.g].folder}/${pad(
                  active.i + 1
                )}.jpg`}
                alt={`Image ${active.i + 1}`}
              />
            </div>
            <button
              className="lightbox-btn lightbox-btn-close"
              aria-label="Close"
              onClick={close}
            ></button>
            <button
              className="lightbox-btn lightbox-btn-previous"
              aria-label="Previous"
              disabled={active.i === 0}
              onClick={() => navigate(-1)}
            ></button>
            <button
              className="lightbox-btn lightbox-btn-next"
              aria-label="Next"
              disabled={active.i === GALLERIES[active.g].count - 1}
              onClick={() => navigate(1)}
            ></button>
          </div>
        </div>
      )}
    </section>
  )
}
