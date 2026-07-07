import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import Script from "next/script"

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  title: "Fencing Services West Midlands | Fencing, Decking & Patios in Birmingham",
  description:
    "Professional fencing and garden landscaping in Birmingham, Solihull & Warwickshire. We install patios, decking, gates, and all types of fencing. Free quotes. 7+ years of experience.",
  keywords: [
    "fencing Birmingham",
    "garden fencing West Midlands",
    "decking Solihull",
    "patios Warwickshire",
    "gates Birmingham",
    "garden landscaping",
    "fencing contractor Birmingham",
    "fencing services West Midlands",
  ],
  authors: [{ name: "Fencing Services West Midlands" }],
  generator: "Next.js",
  metadataBase: new URL("https://www.fencing-westmidlands.co.uk"),
  alternates: {
    canonical: "https://www.fencing-westmidlands.co.uk",
  },
  openGraph: {
    title: "Fencing Services West Midlands | Fencing, Decking & Patios in Birmingham",
    description:
      "Professional fencing and garden landscaping in Birmingham, Solihull & Warwickshire. We install patios, decking, gates, and all types of fencing. Free quotes.",
    url: "https://www.fencing-westmidlands.co.uk",
    images: [
      {
        url: "/media/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Fencing Services West Midlands",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Fencing & Landscaping",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/media/logo/favicon.png" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fencing Services West Midlands",
              image: "https://www.fencing-westmidlands.co.uk/media/logo/logo.png",
              url: "https://www.fencing-westmidlands.co.uk",
              telephone: "07725 966 021",
              email: "fencingserviceswestmidlands@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "38 Waggon Walk",
                addressLocality: "Birmingham",
                postalCode: "B38 8JS",
                addressCountry: "GB",
              },
              areaServed: "West Midlands",
              sameAs: [
                "https://www.facebook.com/profile.php?id=100083302689553",
                "https://www.yell.com/biz/fencing-services-west-midlands-birmingham-10266223/",
              ],
            }),
          }}
        />

        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17591487894"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17591487894');
          `}
        </Script>

        {/* Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CFHN1BBZJ3"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CFHN1BBZJ3');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  )
}
