"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function SiteScripts() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    /* =============== SCROLL ANIMATIONS =============== */
    const animatedElements = Array.from(
      document.querySelectorAll(
        ".slide-up, .slide-down, .slide-right, .slide-left, .fade-in, .pulse"
      )
    )

    let observer: IntersectionObserver | null = null

    if (prefersReducedMotion) {
      // Reveal everything immediately (CSS only hides under no-preference anyway)
      animatedElements.forEach((el) => {
        el.classList.add(
          el.classList.contains("slide-up")
            ? "slide-up-animation"
            : el.classList.contains("slide-down")
            ? "slide-down-animation"
            : el.classList.contains("slide-right")
            ? "slide-right-animation"
            : el.classList.contains("slide-left")
            ? "slide-left-animation"
            : el.classList.contains("pulse")
            ? "pulse-animation"
            : "fade-in-animation"
        )
      })
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const t = entry.target
            if (t.classList.contains("slide-up")) t.classList.add("slide-up-animation")
            else if (t.classList.contains("slide-down")) t.classList.add("slide-down-animation")
            else if (t.classList.contains("slide-right")) t.classList.add("slide-right-animation")
            else if (t.classList.contains("slide-left")) t.classList.add("slide-left-animation")
            else if (t.classList.contains("fade-in")) t.classList.add("fade-in-animation")
            else if (t.classList.contains("pulse")) t.classList.add("pulse-animation")
          })
        },
        { threshold: 0.2 }
      )
      animatedElements.forEach((el) => observer!.observe(el))
    }

    /* =============== PARALLAX =============== */
    const parallaxImgs = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".parallax-img, .hero-image-container img, .section-bg-img-container img"
      )
    )

    const applyParallax = () => {
      const offset = window.scrollY
      parallaxImgs.forEach((element) => {
        const bounding = element.getBoundingClientRect()
        let elementTop = bounding.top + offset
        const heroAncestor = element.closest(".hero, .hero-home")
        if (heroAncestor) {
          const marginTop = parseFloat(getComputedStyle(heroAncestor).marginTop)
          elementTop -= marginTop
        }
        const parallaxOffset = (offset - elementTop) * 0.3
        element.style.transform = `translateY(${parallaxOffset}px)`
      })
    }

    if (!prefersReducedMotion && parallaxImgs.length) {
      applyParallax()
      window.addEventListener("scroll", applyParallax, { passive: true })
    }

    return () => {
      observer?.disconnect()
      window.removeEventListener("scroll", applyParallax)
    }
  }, [pathname])

  return null
}
