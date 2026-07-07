import type React from "react"

// The original site markup uses a custom <tel> element (styled in site.css).
// Declare it so it is valid in strict TSX.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      tel: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export {}
