import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zera.health"),
  title: {
    default: "Zera — Autonomous Revenue Cycle for Specialty Medicine",
    template: "%s · Zera",
  },
  description:
    "Automate revenue cycle from intake through collections for ambulatory specialty medicine. Eliminate coding delays, capture missing claims, and recover hours — transparent, provider-controlled.",
  keywords:
    "revenue cycle management, specialty medicine billing, healthcare RCM software, claim automation, medical billing, healthcare revenue, provider billing platform, ambulatory care",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Zera",
    locale: "en_US",
    url: "/",
    title: "Zera — Autonomous Revenue Cycle for Specialty Medicine",
    description:
      "The autonomous revenue cycle platform for ambulatory specialty medicine. Eliminate manual coding, capture every claim, and improve collections — provider-controlled, transparent.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
