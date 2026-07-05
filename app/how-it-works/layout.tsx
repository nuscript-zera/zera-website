import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Note → Code → Claim. Zera runs the revenue cycle as a single autonomous pipeline — ambient capture to structured documentation to coding to a validated, claim-ready record.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works · Zera",
    description: "Note → Code → Claim. One continuous, autonomous workflow.",
    url: "/how-it-works",
  },
};

export default function HowItWorksLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
