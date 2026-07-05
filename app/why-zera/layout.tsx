import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Why Zera",
  description:
    "Healthcare AI built by operators, not just engineers. 25+ years inside clinical documentation and revenue cycle operations, baked into the platform.",
  alternates: { canonical: "/why-zera" },
  openGraph: {
    title: "Why Zera",
    description: "Healthcare AI built by operators, not just engineers.",
    url: "/why-zera",
  },
};

export default function WhyZeraLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
