import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book an ophthalmology demo of Zera, or join the cardiology waitlist. See one encounter go from spoken word to clean claim in real time.",
  alternates: { canonical: "/request-demo" },
  openGraph: {
    title: "Book a Demo · Zera",
    description:
      "Book an ophthalmology demo of Zera, or join the cardiology waitlist.",
    url: "/request-demo",
  },
};

export default function RequestDemoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
