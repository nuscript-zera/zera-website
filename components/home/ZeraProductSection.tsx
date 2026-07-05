"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const WORKFLOW_STEPS = [
  { n: "01", label: "Encounter captured", sub: "Ambient ophthalmic NLP", live: true },
  { n: "02", label: "Findings structured", sub: "Anterior, posterior, measurements", live: true },
  { n: "03", label: "Laterality verified", sub: "OD / OS / OU enforcement", live: true },
  { n: "04", label: "HCC conditions flagged", sub: "Real-time recapture", live: true },
  { n: "05", label: "MEAT verified", sub: "Risk-adjustment documentation", live: true },
  { n: "06", label: "ICD-10 specificity", sub: "Vague codes flagged", live: true },
  { n: "07", label: "CPT codes generated", sub: "E&M leveling, modifier logic", live: true },
  { n: "08", label: "Denial pre-flight", sub: "Payer-rule validation", live: false },
  { n: "09", label: "MIPS quality measures", sub: "Embedded in workflow", live: false },
  { n: "10", label: "Clean claim generated", sub: "Full audit trail", live: false },
];

export default function ZeraProductSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel>The Product</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight mb-6">
            One platform. From the first word spoken to the clean claim.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zera runs the entire revenue cycle as a single autonomous workflow. Ambient capture flows into structured documentation. Documentation flows into coding. Coding flows into validation. Validation flows into the claim. No separate tools. No handoffs. No human stitching steps together.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {WORKFLOW_STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.025 }}
              className={
                step.live
                  ? "rounded-lg p-4 sm:p-5 bg-primary text-white"
                  : "rounded-lg p-4 sm:p-5 bg-white border border-border"
              }
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[11px] font-bold tracking-[0.08em] ${step.live ? "text-white/65" : "text-muted-foreground"}`}>
                  STEP {step.n}
                </span>
              </div>
              <p className={`text-[14px] font-bold leading-tight mb-1.5 ${step.live ? "text-white" : "text-foreground"}`}>
                {step.label}
              </p>
              <p className={`text-[12px] leading-snug ${step.live ? "text-white/70" : "text-muted-foreground"}`}>
                {step.sub}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-[13px] text-muted-foreground"
        >
          Steps 1–7 live today. Steps 8–10 on the roadmap.
        </motion.p>
      </div>
    </section>
  );
}
