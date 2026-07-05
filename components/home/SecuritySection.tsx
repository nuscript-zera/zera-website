"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const points = [
  {
    label: "HIPAA",
    title: "Compliant by design",
    desc: "Architected for HIPAA from the ground up, BAA with every customer.",
  },
  {
    label: "SOC 2",
    title: "Audit in flight",
    desc: "Type I controls in place; Type II window open. Inventory under NDA.",
  },
  {
    label: "Isolation",
    title: "Isolated by tenant",
    desc: "US-only deployment. No cross-tenant access, customer-scoped keys.",
  },
  {
    label: "Models",
    title: "Your data stays yours",
    desc: "No customer data is ever used to train models.",
  },
  {
    label: "Audit",
    title: "Audit-defensible",
    desc: "Every transcript word timestamped; every code traceable to source.",
  },
  {
    label: "RBAC",
    title: "Role-based access",
    desc: "Least-privilege access and full logging across the platform.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: headline */}
          <AnimatedSection>
            <p className="text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3">
              <span className="text-primary">Trust</span>
            </p>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
              We sign a Business Associate Agreement with every practice.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Clinical and financial data requires trust. Zera is engineered for
              HIPAA compliance, per-organization isolation, and a complete audit
              trail — so the handling of protected health information is never an
              open question.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold font-mono uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              HIPAA · BAA available for every practice
            </div>
          </AnimatedSection>

          {/* Right: two-column labelled list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
            {points.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.05 }}
                className="py-5 border-t"
                style={{ borderColor: "#e9edf3" }}
              >
                <p className="text-[10px] font-bold font-mono uppercase tracking-[0.18em] text-primary mb-2">
                  {p.label}
                </p>
                <h3 className="text-base font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
