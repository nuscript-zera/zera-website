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

const STEPS = [
  { n: 1, title: "Ambient capture", desc: "Zera listens in the background — no wake words, no dictation. Just the conversation." },
  { n: 2, title: "Structured note", desc: "The transcript becomes a chart-ready, ophthalmology-aware encounter note in real time." },
  { n: 3, title: "Autonomous coding", desc: "ICD-10 and CPT codes — with the right modifiers and bundling — assigned automatically." },
  { n: 4, title: "Pre-submission validation", desc: "Payer rules, laterality, and MEAT checks catch denial risks before the claim leaves." },
  { n: 5, title: "Claim-ready handoff", desc: "A clean, validated claim moves to your clearinghouse with a full audit trail." },
];

const NOTE_LINES = [
  "CC: Blurry vision OD × 3 weeks",
  "VA OD 20/80  ·  IOP OD 16",
  "Fundus: foveal drusen OD",
  "A/P: Nonexudative AMD, right eye",
];

const CODES = [
  { code: "CPT 92134", desc: "OCT, retina" },
  { code: "CPT 66984-RT", desc: "Cataract surgery, right eye" },
  { code: "Mod -25", desc: "Separately identifiable E&M" },
  { code: "ICD-10 H35.31", desc: "Nonexudative AMD, right eye" },
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

      {/* The Engine — compact timeline + one example artifact */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>The Engine</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance">
              Five steps, one uninterrupted flow.
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            {/* Left: numbered timeline */}
            <AnimatedSection className="lg:col-span-3">
              <div className="relative">
                <span aria-hidden className="absolute left-[1.125rem] top-3 bottom-3 w-px bg-border" />
                <ol className="space-y-7">
                  {STEPS.map((s) => (
                    <li key={s.n} className="relative flex gap-4">
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
                        {s.n}
                      </span>
                      <div className="pt-1">
                        <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                        <p className="text-[15px] text-muted-foreground leading-relaxed mt-1">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>

            {/* Right: one example artifact, sticky */}
            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <div
                  className="rounded-2xl border border-border bg-white overflow-hidden"
                  style={{ boxShadow: "0 18px 50px -18px rgba(15,23,42,0.22)" }}
                >
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Example · Retina visit
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Live
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2.5">Note</p>
                    <div className="rounded-xl bg-muted/40 border border-border px-4 py-3 space-y-1">
                      {NOTE_LINES.map((line) => (
                        <p key={line} className="font-mono text-[12.5px] leading-relaxed text-foreground/80">{line}</p>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 my-4 text-muted-foreground">
                      <span className="h-px flex-1 bg-border" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em]">generates</span>
                      <span className="h-px flex-1 bg-border" />
                    </div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-2.5">Codes</p>
                    <ul className="space-y-2">
                      {CODES.map((c) => (
                        <li key={c.code} className="flex items-baseline justify-between gap-3">
                          <span className="font-mono text-[12.5px] font-semibold text-primary tabular-nums">{c.code}</span>
                          <span className="text-[12.5px] text-muted-foreground text-right">{c.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
