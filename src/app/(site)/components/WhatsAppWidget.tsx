import Link from "next/link"

export function WhatsAppWidget() {
  return (
    <Link
      href="https://wa.me/+447725966021"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-widget"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
        zIndex: 9999,
      }}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </Link>
  )
}
