import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Security — HIPAA-Compliant by Design",
  description:
    "Engineered for HIPAA compliance: tenant isolation, end-to-end encryption, role-based access, and a Business Associate Agreement for every client.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security — HIPAA-Compliant by Design · Audryl",
    description:
      "Engineered for HIPAA compliance: tenant isolation, end-to-end encryption, role-based access, and a Business Associate Agreement for every client.",
    url: "/security",
  },
};

export default function SecurityLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
