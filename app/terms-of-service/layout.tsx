import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of Audryl's AI clinical documentation platform and related services.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service · Audryl",
    description:
      "The terms governing use of Audryl's AI clinical documentation platform and related services.",
    url: "/terms-of-service",
  },
};

export default function TermsOfServiceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
