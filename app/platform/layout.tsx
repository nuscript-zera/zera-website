import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Platform",
  description:
    "Zera captures the encounter, generates documentation, produces codes, validates the claim, and prepares it for submission — one real-time intelligence layer for ambulatory specialty medicine.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "The Platform · Zera",
    description:
      "One platform that captures the encounter, generates documentation, produces codes, and validates the claim — without leaving the workflow.",
    url: "/platform",
  },
};

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
