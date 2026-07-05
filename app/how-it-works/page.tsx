"use client";

import React from "react";
import { Mic, Code2, FileCheck } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PageCTA from "@/components/shared/PageCTA";

const PIPELINE = [
  {
    icon: Mic,
    eyebrow: "01 — Note",
    title: "Capture the encounter",
    body: "Zera runs ambient on a phone or browser, capturing the clinician-patient conversation in real time. No dictation, no wake words, no manual input — the clinical story flows in naturally.",
  },
  {
    icon: Code2,
    eyebrow: "02 — Code",
    title: "Code the clinical context",
    body: "Zera generates a chart-ready note and surfaces ICD-10 and CPT code suggestions — with the right modifiers and bundling logic applied for clean-claim setup. Ophthalmology-trained, not generalist.",
  },
  {
    icon: FileCheck,
    eyebrow: "03 — Claim",
    title: "Validate and prepare the claim",
    body: "Every claim is scored for denial risk before submission. Missing documentation surfaces upstream, payer rules are cross-referenced, and the validated claim moves to the clearinghouse with a complete audit trail.",
  },
];

const FIVE_STEPS = [
  {
    number: 1,
    title: "Ambient Capture",
    pull: "You talk to your patient naturally. Zera listens.",
    body: "Zera runs quietly in the background on a phone or browser, capturing the nuanced clinical dialogue while filtering out small talk, interruptions, and background noise. No wake words. No clunky dictation commands. Just conversation.",
  },
  {
    number: 2,
    title: "Structured Clinical Documentation",
    pull: "A chart-ready note is generated in real time.",
    body: "Zera synthesizes the transcript into a structured, ophthalmology-aware encounter note. Chief Complaint, history, exam findings, measurements (VA, IOP, slit lamp, fundus, gonioscopy), and assessment & plan — all formatted to your specialty's standards.",
    code: `Chief Complaint: Blurry vision OD x 3 weeks
HPI: 68yo F with progressive central vision loss in the right eye...
Exam: VA OD 20/80, OS 20/25
       IOP OD 16, OS 15
       Slit lamp: 2+ NS cataract OD, 1+ NS OS
       Fundus: Foveal drusen OD, normal OS
Assessment & Plan: Age-related macular degeneration OD...`,
  },
  {
    number: 3,
    title: "Autonomous Medical Coding",
    pull: "Zera translates the clinical story into billable codes.",
    body: "Zera reads the Medical Decision Making context and automatically assigns ICD-10 and CPT/HCPCS codes. It understands specialty-specific procedural logic — applying modifiers like -25, -59, and -50 for bilateral procedures, and bundling logic for combined exam, imaging, and surgical workflows.",
    code: `CPT: 92134 (OCT, retina)
CPT: 66984-RT (Cataract surgery, right eye)
Modifier: -25 (Significant, separately identifiable E&M)
ICD-10: H35.31 (Nonexudative AMD, right eye)
ICD-10: H25.11 (Age-related nuclear cataract, right eye)`,
  },
  {
    number: 4,
    title: "Pre-Submission Validation",
    pull: "Errors are caught at the encounter, not after the rejection.",
    body: "Before a claim ever leaves the practice, Zera validates it against payer rules, laterality consistency, MEAT documentation requirements, and code-pair edits. Denial risks surface while the encounter is still fresh — not weeks later when the remittance arrives.",
  },
  {
    number: 5,
    title: "Claim-Ready Handoff",
    pull: "A clean, validated claim with a complete audit trail.",
    body: "The validated claim moves to your clearinghouse or billing team, every code traceable to its source documentation. What used to take days of back-and-forth between providers, scribes, and coders happens in one continuous workflow.",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="hero-surface relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-4xl">
            <SectionLabel>How It Works</SectionLabel>
            <h1 className="text-4xl lg:text-[4.1rem] font-bold text-foreground mt-4 leading-[0.96] tracking-[-0.02em] text-balance">
              Note → Code → Claim. One continuous workflow.
            </h1>
            <p className="text-xl text-muted-foreground font-medium mt-6 leading-relaxed">
              Zera runs the revenue cycle as a single autonomous pipeline. Ambient capture flows into structured documentation. Documentation flows into coding. Coding flows into validation. Validation flows into the claim. No exports, no separate systems, no human stitching steps together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3-stage TL;DR */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PIPELINE.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-white p-8 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold mb-2">{stage.eyebrow}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3">{stage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{stage.body}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-step engine */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-16">
            <SectionLabel>The Engine</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance">
              Five steps, one uninterrupted flow.
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {FIVE_STEPS.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-white p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">{step.number}</span>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-lg text-foreground font-semibold mb-3">{step.pull}</p>
                      <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                    {step.code && (
                      <pre className="rounded-xl bg-[#0f172a] text-white/90 p-5 text-[12.5px] leading-relaxed font-mono overflow-x-auto">
                        {step.code}
                      </pre>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Watch it run on your specialty."
        subcopy="Book an ophthalmology demo and see one encounter go from spoken word to clean claim."
      />
    </>
  );
}
