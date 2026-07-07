import type React from "react"
import Script from "next/script"
import "../site.css"

import { SiteHeader } from "./components/SiteHeader"
import { SiteFooter } from "./components/SiteFooter"
import { WhatsAppWidget } from "./components/WhatsAppWidget"
import { SiteScripts } from "./components/SiteScripts"

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Font Awesome icons (site kit) */}
      <Script
        src="https://kit.fontawesome.com/590b99fc1d.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <SiteHeader />
      {children}
      <WhatsAppWidget />
      <SiteFooter />
      <SiteScripts />
    </>
  )
}
