import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Zera platform and website, operated by NuScript Systems, Inc.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Use · Zera",
    description: "Terms governing use of the Zera platform and website.",
    url: "/terms-of-service",
  },
};

export default function TermsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
