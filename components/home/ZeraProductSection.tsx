"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Circle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

type Step = { label: string; sub: string };
type Phase = {
  act: string;
  name: string;
  tagline: string;
  status: "live" | "roadmap";
  steps: Step[];
};

const PHASES: Phase[] = [
  {
    act: "01",
    name: "Note",
    tagline: "Capture & document",
    status: "live",
    steps: [
      { label: "Encounter captured", sub: "Ambient ophthalmic NLP" },
      { label: "Findings structured", sub: "Anterior, posterior, measurements" },
    ],
  },
  {
    act: "02",
    name: "Code",
    tagline: "Structure & code",
    status: "live",
    steps: [
      { label: "Laterality verified", sub: "OD / OS / OU enforcement" },
      { label: "HCC conditions flagged", sub: "Real-time recapture" },
      { label: "MEAT verified", sub: "Risk-adjustment documentation" },
      { label: "ICD-10 specificity", sub: "Vague codes flagged" },
      { label: "CPT codes generated", sub: "E&M leveling, modifier logic" },
    ],
  },
  {
    act: "03",
    name: "Claim",
    tagline: "Validate & submit",
    status: "roadmap",
    steps: [
      { label: "Denial pre-flight", sub: "Payer-rule validation" },
      { label: "MIPS quality measures", sub: "Embedded in workflow" },
      { label: "Clean claim generated", sub: "Full audit trail" },
    ],
  },
];

function PhaseCard({ phase }: { phase: Phase }) {
  const live = phase.status === "live";
  return (
    <div
      className={`h-full rounded-2xl p-6 lg:p-7 ${
        live ? "bg-white border border-border" : "bg-muted/30 border border-dashed border-border"
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary font-semibold">
            {phase.act} · {phase.name}
          </p>
          <p className="text-sm text-muted-foreground mt-1">{phase.tagline}</p>
        </div>
        {live ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-[10px] font-mono font-bold uppercase tracking-[0.1em]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Live
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-[10px] font-mono font-bold uppercase tracking-[0.1em]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Roadmap
          </span>
        )}
      </div>

      <ul className="space-y-4">
        {phase.steps.map((s) => (
          <li key={s.label} className="flex items-start gap-3">
            {live ? (
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
            ) : (
              <Circle className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground/50" />
            )}
            <div>
              <p className="text-[14px] font-bold text-foreground leading-tight">{s.label}</p>
              <p className="text-[12.5px] text-muted-foreground leading-snug mt-0.5">{s.sub}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-1 lg:py-0">
      <ArrowRight className="w-5 h-5 text-muted-foreground/50 rotate-90 lg:rotate-0" />
    </div>
  );
}

export default function ZeraProductSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel>The Product</SectionLabel>
          <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance mb-6">
            One platform. From the first word spoken to the clean claim.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zera runs the entire revenue cycle as a single autonomous workflow — Note flows into Code, Code flows into Claim. No separate tools. No handoffs. No human stitching steps together.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 lg:gap-3 items-stretch">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45 }}>
              <PhaseCard phase={PHASES[0]} />
            </motion.div>
            <FlowArrow />
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: 0.1 }}>
              <PhaseCard phase={PHASES[1]} />
            </motion.div>
            <FlowArrow />
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: 0.2 }}>
              <PhaseCard phase={PHASES[2]} />
            </motion.div>
          </div>
        </AnimatedSection>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-[13px] text-muted-foreground mt-8"
        >
          Note and Code are live today. Claim is on the near-term roadmap.
        </motion.p>
      </div>
    </section>
  );
}
