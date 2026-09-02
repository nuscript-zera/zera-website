import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const description =
  "Zera is the autonomous revenue platform for specialty medicine. One AI takes each encounter from clinical note to correct code to clean claim — no handoffs, every code traceable to the source. Live at zera.health.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zera.health"),
  title: {
    default: "Zera — Note. Code. Claim. One AI. Zero handoffs.",
    template: "%s — Zera",
  },
  description,
  keywords: [
    "revenue cycle AI",
    "specialty medicine RCM",
    "AI medical coding",
    "clinical documentation AI",
    "autonomous RCM platform",
    "retina practice billing",
    "CPT coding automation",
    "claim denial prevention",
  ],
  alternates: { canonical: "https://zera.health" },
  // Versioned icon links force browsers (and the Windows taskbar) to refetch the
  // favicon after the mark changed — the separate favicon cache ignores a normal
  // page refresh, so a changed URL is what actually busts it. Bump ?v on any
  // future icon change. favicon.ico is a real multi-size .ico generated from the
  // Zera mark; Next serves /icon.png from app/.
  icons: {
    icon: [{ url: "/icon.png?v=2", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico?v=2" }],
    apple: [{ url: "/icon.png?v=2", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "https://zera.health",
    siteName: "Zera",
    title: "Zera — Note. Code. Claim. One AI. Zero handoffs.",
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zera — Note. Code. Claim. One AI. Zero handoffs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zera",
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
