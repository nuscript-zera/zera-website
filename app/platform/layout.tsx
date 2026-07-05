import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Documentation Platform",
  description:
    "How Audryl turns dictation and ambient audio into structured, EHR-ready clinical notes — AI drafting, editor review, and 13-category QA in one platform.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "AI Documentation Platform · Audryl",
    description:
      "How Audryl turns dictation and ambient audio into structured, EHR-ready clinical notes — AI drafting, editor review, and 13-category QA in one platform.",
    url: "/platform",
  },
};

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
