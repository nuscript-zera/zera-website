import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a walkthrough of Audryl and run a free pilot on your own client and worktype, with your own editors — before you commit.",
  alternates: { canonical: "/request-demo" },
  openGraph: {
    title: "Request a Demo · Audryl",
    description:
      "Book a walkthrough of Audryl and run a free pilot on your own client and worktype, with your own editors — before you commit.",
    url: "/request-demo",
  },
};

export default function RequestDemoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
