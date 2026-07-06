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
  openGraph: {
    type: "website",
    url: "https://zera.health",
    siteName: "Zera",
    title: "Zera — Note. Code. Claim. One AI. Zero handoffs.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zera",
    description,
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
