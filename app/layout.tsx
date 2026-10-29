import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const description =
  "Zera Health helps practices get paid in full for the care they provide. Zera Scribe writes the note and flags what’s missing before the doctor signs, for primary care and psychiatry. Zera Revenue, for coding and claims, follows in 2027.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zera.health"),
  title: {
    default: "Zera Health — Note. Code. Claim.",
    template: "%s — Zera Health",
  },
  description,
  keywords: [
    "AI medical scribe",
    "documentation gap checks",
    "revenue cycle AI",
    "specialty medicine RCM",
    "AI medical coding",
    "clinical documentation AI",
    "AI RCM platform",
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
    icon: [{ url: "/icon.png?v=4", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico?v=4" }],
    apple: [{ url: "/icon.png?v=4", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "https://zera.health",
    siteName: "Zera Health",
    title: "Zera Health — Note. Code. Claim.",
    description,
    images: [
      {
        url: "/og-image.png?v=3",
        width: 1200,
        height: 630,
        alt: "Zera Health — Note. Code. Claim.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zera Health",
    description,
    images: ["/og-image.png?v=3"],
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
