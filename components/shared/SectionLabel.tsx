import React from "react";

export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-block text-xs font-semibold font-mono uppercase tracking-[0.2em] text-primary mb-3">
      {children}
    </span>
  );
}
