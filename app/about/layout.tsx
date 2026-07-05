import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About — Built and Proven in Production",
  description:
    "Audryl was built and hardened in a live, high-volume transcription operation — grounded in 25 years of US clinical documentation expertise.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Built and Proven in Production · Audryl",
    description:
      "Audryl was built and hardened in a live, high-volume transcription operation — grounded in 25 years of US clinical documentation expertise.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
