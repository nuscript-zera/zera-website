import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "For MTSOs — Double Output, Same Team",
  description:
    "Built for MTSOs: clear more volume per editor, protect margin, hit tighter turnaround, and run production, QA, and payroll in one system.",
  alternates: { canonical: "/for-mtsos" },
  openGraph: {
    title: "For MTSOs — Double Output, Same Team · Audryl",
    description:
      "Built for MTSOs: clear more volume per editor, protect margin, hit tighter turnaround, and run production, QA, and payroll in one system.",
    url: "/for-mtsos",
  },
};

export default function ForMtsosLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
