"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  ShieldCheck,
  FileCheck,
  ClipboardCheck,
  Lock,
  Database,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PageCTA from "@/components/shared/PageCTA";

const CAPABILITIES = [
  {
    icon: Mic,
    title: "Ambient capture and clinical documentation",
    body: "Voice-first workflow. Real-time structured note generation. Specialty-trained natural language understanding for ophthalmology — anterior segment, posterior segment, IOP, visual acuity, slit lamp, fundus, gonioscopy. Multi-encounter type support spanning comprehensive, retina, glaucoma, and cataract pre- and post-op chart formats.",
  },
  {
    icon: ShieldCheck,
    title: "Real-time clinical intelligence at the point of sign",
    body: "Five concurrent analyzers run as the note is composed: laterality enforcement, HCC condition flagging, MEAT documentation validation, ICD-10 specificity checking, and J-code unit reconciliation for retina injections. Documentation issues surface to the provider before sign — not after the denial arrives weeks later.",
  },
  {
    icon: FileCheck,
    title: "Auto-coding with modifier and bundling logic",
    body: "ICD-10 and CPT generation with confidence scoring. E&M leveling supported by documented decision-making. Modifier and bundling logic for multi-procedure ophthalmology visits — exam plus OCT plus intravitreal injection plus laser in one encounter, coded correctly the first time.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit-defensible from the first word",
    body: "Every transcript word is timestamped. Every code suggestion is traceable to its source documentation. Every analyzer trigger is logged with the provider's response. The audit trail is the foundation of the platform, not a feature added later. Sign with confidence. Defend the chart years later.",
  },
];

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

const SUPPORTED_EHRS = [
  "athenahealth", "eClinicalWorks", "Nextech", "ModMed EMA",
  "Veradigm", "Altera", "Epic (ambulatory)",
];

const DAY_ONE_ITEMS = [
  "Production access in 48 hours after BAA is signed",
  "Provider voice profiles trained in week one",
  "Specialty templates pre-configured for your subspecialty mix",
  "Live with first patient encounter in week two",
  "Direct support from the engineering team during onboarding",
  "No EHR replacement required",
  "No staff layoffs required — Zera is an intelligence layer, not a workflow replacement",
];

const COMPLIANCE = [
  {
    icon: Lock,
    title: "HIPAA compliant",
    body: "Full Business Associate Agreement available with every customer. End-to-end encryption in transit and at rest. Audit log retention meets HIPAA requirements. No data leaves the platform's secure boundary.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 audit in flight",
    body: "Type I baseline controls are in place. Type II audit window opened Q2 2026. Practices needing attestation today can review our control inventory under NDA.",
  },
  {
    icon: Database,
    title: "Data residency and isolation",
    body: "US-only deployment. Customer data is isolated per organization with no cross-tenant access. No customer data is used to train models. Encryption keys are customer-scoped.",
  },
];

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="hero-surface relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-4xl">
            <SectionLabel>The Platform</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 leading-tight">
              Every encounter, end to end. One real-time intelligence layer.
            </h1>
            <p className="text-xl text-muted-foreground font-medium mt-6 leading-relaxed">
              One platform that captures the encounter, generates the documentation, produces the codes, validates the claim, and prepares it for submission — without leaving the workflow. The autonomous OS for in-house billing teams.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight">
              Four capabilities. One continuous workflow.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-white p-8 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cap.body}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>The Workflow</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight">
              From the first word spoken to the clean claim.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.025 }}
                className={step.live ? "rounded-lg p-4 sm:p-5 bg-primary text-white" : "rounded-lg p-4 sm:p-5 bg-muted/40 border border-border"}
              >
                <span className={`text-[11px] font-bold tracking-[0.08em] block mb-3 ${step.live ? "text-white/65" : "text-muted-foreground"}`}>
                  STEP {step.n}
                </span>
                <p className={`text-[14px] font-bold leading-tight mb-1.5 ${step.live ? "text-white" : "text-foreground"}`}>{step.label}</p>
                <p className={`text-[12px] leading-snug ${step.live ? "text-white/70" : "text-muted-foreground"}`}>{step.sub}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[13px] text-muted-foreground mt-10">Steps 1–7 live today. Steps 8–10 on the roadmap.</p>
        </div>
      </section>

      {/* EHR fit + Day one */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <SectionLabel>Works With Your Stack</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight mb-6">
                An intelligence layer, not a rip-and-replace.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Zera runs alongside the systems you already own. No EHR replacement. No workflow disruption. No staff layoffs.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SUPPORTED_EHRS.map((ehr) => (
                  <span key={ehr} className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-border text-sm font-medium text-foreground">
                    {ehr}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="bg-white rounded-2xl border border-border p-8 lg:p-10">
              <SectionLabel>Day One</SectionLabel>
              <h3 className="text-2xl font-bold text-foreground mt-4 mb-6">Live in two weeks.</h3>
              <ul className="space-y-3.5">
                {DAY_ONE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>Security & Compliance</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight">
              Built for protected health information.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLIANCE.map((c, i) => {
              const Icon = c.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-white p-8 h-full">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        heading="See the platform on a real encounter."
        subcopy="Book an ophthalmology demo and watch Note → Code → Claim run in real time."
      />
    </>
  );
}
