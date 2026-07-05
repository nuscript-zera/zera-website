import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Audryl collects, uses, stores, and protects information across its AI clinical documentation platform.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy · Audryl",
    description:
      "How Audryl collects, uses, stores, and protects information across its AI clinical documentation platform.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
