"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const points = [
  {
    label: "HIPAA",
    title: "Compliant by design",
    desc: "Architected for HIPAA from the ground up.",
  },
  {
    label: "Crypto",
    title: "Encrypted end to end",
    desc: "Industry-standard protocols in transit and at rest.",
  },
  {
    label: "Isolation",
    title: "Isolated by tenant",
    desc: "No shared buckets, no cross-tenant access.",
  },
  {
    label: "RBAC",
    title: "Role-based access",
    desc: "Least-privilege across editors, QA, and admins.",
  },
  {
    label: "Audit",
    title: "Full audit trail",
    desc: "Every action logged and reviewable.",
  },
  {
    label: "Infra",
    title: "Hardened infrastructure",
    desc: "Monitored cloud with redundancy built in.",
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
              We sign a Business Associate Agreement with every client.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Clinical data requires trust. Audryl is engineered for HIPAA
              compliance, tenant isolation, and security at scale — so the
              handling of protected health information is never an open question.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold font-mono uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              HIPAA · BAA available for every client
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
