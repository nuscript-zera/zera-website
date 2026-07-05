"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const proofStats = [
  { value: "70+", label: "US Healthcare Orgs" },
  { value: "4", label: "Entity Types Served" },
  { value: "2×", label: "Capacity, Same Team" },
  { value: "25yr+", label: "Healthcare Heritage" },
];

const impactRows = [
  { metric: "Throughput per editor", before: "Baseline", after: "Up to 2×", highlight: false },
  { metric: "Path to more capacity", before: "Hire & train", after: "Same team", highlight: false },
  { metric: "Quality consistency", before: "Variable", after: "QA-scored", highlight: false },
  { metric: "EBITDA margin", before: "~15%", after: "~40%", highlight: true },
];

export default function ProofSection() {
  return (
    <section
      id="proof"
      className="max-lg:py-[5.3125rem] lg:py-[7.5rem]"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <AnimatedSection>
          <p className="text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3">
            <span style={{ color: "#60a5fa" }}>Proven in Production</span>
          </p>
          <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-white leading-[0.98] tracking-[-0.02em] text-balance">
            Not a prototype. A production line running today.
          </h2>
        </AnimatedSection>

        {/* Stat row on dark */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {proofStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`px-1 lg:px-8 ${
                i > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <div className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="mt-3 text-[11px] lg:text-xs font-semibold font-mono uppercase tracking-wider text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* White comparison card floating on dark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl overflow-hidden bg-white"
          style={{ boxShadow: "0 20px 60px -18px rgba(0,0,0,0.55)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left intro panel */}
            <div className="lg:col-span-2 p-8 lg:p-10">
              <p className="text-xs font-semibold font-mono uppercase tracking-wider text-primary mb-3">
                The Capacity Shift
              </p>
              <h3 className="text-2xl font-bold text-foreground leading-snug">
                What changes when AI drafts and your team reviews.
              </h3>
              <p className="mt-4 text-[0.9rem] text-muted-foreground leading-relaxed">
                Across 70+ diverse US healthcare organizations — hospitals,
                ASCs, physician groups, and clinics — processing real clinical
                work.
              </p>
            </div>

            {/* Table */}
            <div className="lg:col-span-3 p-6 lg:p-8 lg:pl-2">
              <div className="rounded-xl border border-[#E2E6EB] overflow-hidden">
                <div className="grid grid-cols-3 bg-[#F3F6FA] border-b border-[#E2E6EB]">
                <div className="p-4 lg:p-5 text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground">
                  Metric
                </div>
                <div className="p-4 lg:p-5 text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground text-center">
                  Manual
                </div>
                <div className="p-4 lg:p-5 text-xs font-bold font-mono uppercase tracking-wider text-primary text-center">
                  With Audryl
                </div>
              </div>

              {impactRows.map((row) => (
                <div
                  key={row.metric}
                  className="grid grid-cols-3 border-b border-[#E2E6EB] last:border-b-0"
                >
                  <div className="p-4 lg:p-5 text-[0.9rem] leading-snug font-medium text-foreground">
                    {row.metric}
                  </div>
                  <div className="p-4 lg:p-5 text-[0.9rem] text-center text-muted-foreground">
                    {row.before}
                  </div>
                  <div
                    className={`p-4 lg:p-5 text-[0.9rem] text-center font-bold ${
                      row.highlight ? "text-primary" : "text-foreground"
                    }`}
                    style={{ backgroundColor: "#F6F8FF" }}
                  >
                    {row.after}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-6 font-mono text-[0.65rem] text-white/65 lg:whitespace-nowrap">
          Illustrative. Actual results vary by specialty, client specs, baseline efficiency, and team adoption.
        </p>
      </div>
    </section>
  );
}
