"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  // Change header colour on scroll (matches original >50px behaviour)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
      )
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while the mobile nav is open
  useEffect(() => {
    document.body.classList.toggle("disable-scroll", menuOpen)
    return () => document.body.classList.remove("disable-scroll")
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  const navText = scrolled ? "dark-nav-text" : ""

  return (
    <header className="fade-in">
      <a href="#main-content" className="skip-nav-link">
        Skip to main content
      </a>

      <div className={`top-bar${scrolled ? " colored-bg" : ""}`}></div>

      <div className={`header-main${scrolled ? " white-bg header-shadow" : ""}`}>
        <Link href="/" title="Home page" onClick={closeMenu}>
          <Image
            src="/media/logo/logo.png"
            className={`logo${scrolled ? "" : " white-logo"}`}
            alt="Company Logo"
            width={180}
            height={60}
            priority
          />
        </Link>

        <nav className={menuOpen ? "slide-nav" : ""}>
          <ul className={menuOpen ? "slide-nav" : ""}>
            <li>
              <Link href="/" className={navText} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li onClick={() => setServicesOpen((v) => !v)}>
              <Link href="/services" className={navText} onClick={closeMenu}>
                Services
              </Link>
              <ul className={servicesOpen ? "dropdown-accordion" : ""}>
                <li>
                  <Link href="/fencing-and-gates" className={navText} onClick={closeMenu}>
                    Fencing &amp; Gates
                  </Link>
                </li>
                <li>
                  <Link href="/decking-and-patios" className={navText} onClick={closeMenu}>
                    Decking &amp; Patios
                  </Link>
                </li>
                <li>
                  <Link href="/garden-landscaping" className={navText} onClick={closeMenu}>
                    Gardening Landscaping
                  </Link>
                </li>
                <li>
                  <Link href="/roofing" className={navText} onClick={closeMenu}>
                    Roofing
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/gallery" className={navText} onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/reviews" className={navText} onClick={closeMenu}>
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/blog" className={navText} onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className={navText} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={navText} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-contact-icons">
          <a href="tel:07725966021" title="Call us" className={navText}>
            <i className="fa-regular fa-circle-phone-flip"></i>
          </a>
          <a
            href="https://wa.me/+447725966021"
            title="Whatsapp us"
            target="_blank"
            rel="noreferrer"
            className={navText}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="mailto:fencingserviceswestmidlands@gmail.com"
            title="Email us"
            className={navText}
          >
            <i className="fa-regular fa-circle-envelope"></i>
          </a>
        </div>

        <button
          className={`hamburger${scrolled ? " hamburger-dark" : ""}${
            menuOpen ? " hamburger-cross" : ""
          }`}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
