import { NextResponse } from "next/server";

const BASE_URL = "https://www.fencing-westmidlands.co.uk";

const routes: { path: string; priority: string }[] = [
  { path: "/", priority: "1.00" },
  { path: "/services", priority: "0.80" },
  { path: "/fencing-and-gates", priority: "0.80" },
  { path: "/decking-and-patios", priority: "0.80" },
  { path: "/garden-landscaping", priority: "0.80" },
  { path: "/roofing", priority: "0.80" },
  { path: "/gallery", priority: "0.80" },
  { path: "/reviews", priority: "0.80" },
  { path: "/blog", priority: "0.64" },
  { path: "/about", priority: "0.64" },
  { path: "/contact", priority: "0.80" },
  { path: "/privacy-policy", priority: "0.50" },
];

export async function GET() {
  const lastmod = new Date().toISOString();

  const urls = routes
    .map(
      ({ path, priority }) => `<url>
  <loc>${BASE_URL}${path}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>
</url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls}

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
