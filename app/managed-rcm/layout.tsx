import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Managed RCM",
  description:
    "Run Zera yourself, or have our team run it for you. The same platform, operated by a dedicated team of certified coders, billers, and AR specialists assigned to your practice.",
  alternates: { canonical: "/managed-rcm" },
  openGraph: {
    title: "Managed RCM · Zera",
    description: "Run Zera yourself — or have our team run it for you.",
    url: "/managed-rcm",
  },
};

export default function ManagedRCMLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
