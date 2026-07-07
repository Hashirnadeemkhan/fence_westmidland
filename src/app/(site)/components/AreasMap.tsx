"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    L?: any
  }
}

export function AreasMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const initedRef = useRef(false)

  useEffect(() => {
    if (initedRef.current || !mapRef.current) return

    const CSS_HREF = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    const JS_SRC = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"

    const ensureCss = () => {
      if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = CSS_HREF
        document.head.appendChild(link)
      }
    }

    const initMap = () => {
      const L = window.L
      if (!L || !mapRef.current || initedRef.current) return
      initedRef.current = true

      const accentColor1 =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--accent-color-1")
          .trim() || "#151e2e"
      const coordinates: [number, number] = [52.396379, -1.953273]

      const map = L.map(mapRef.current).setView(coordinates, 9)

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      L.circle(coordinates, {
        color: accentColor1,
        fillColor: accentColor1,
        fillOpacity: 0.1,
        radius: 35000,
      }).addTo(map)
    }

    ensureCss()

    if (window.L) {
      initMap()
    } else {
      let script = document.querySelector<HTMLScriptElement>(
        `script[src="${JS_SRC}"]`
      )
      if (!script) {
        script = document.createElement("script")
        script.src = JS_SRC
        script.async = true
        document.body.appendChild(script)
      }
      script.addEventListener("load", initMap)
    }
  }, [])

  return <div id="map" className="fade-in" ref={mapRef}></div>
}
