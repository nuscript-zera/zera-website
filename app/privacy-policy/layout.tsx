import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NuScript Systems, Inc. handles personal information across the Zera platform — an autonomous revenue cycle platform for ambulatory medicine.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy · Zera",
    description:
      "How NuScript Systems, Inc. handles personal information across the Zera platform.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
