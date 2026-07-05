"use client";

import React from "react";
import { Award, FileCheck, Heart, Building2, Zap, Layers, Shield, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PageCTA from "@/components/shared/PageCTA";

const PROBLEM_ITEMS = [
  {
    title: "Notes that already carry their codes",
    body: "When the documentation engine and coding engine share the same encounter data, codes don't need to be derived from finished notes after the fact. They're built alongside the note, validated against the documentation in real time.",
  },
  {
    title: "Denials prevented, not appealed",
    body: "Most denials trace to documentation gaps that were invisible at the point of care and only surfaced when a payer pushed back weeks later. When the platform sees the documentation, coding, and payer logic together, those gaps get caught before submission — not after rejection.",
  },
  {
    title: "Revenue that follows the encounter",
    body: "When clinical capture, coding, and claim preparation share one data layer, revenue stops being a downstream cleanup project and starts being a real-time signal. You see what an encounter is worth as it happens, not at month-end reconciliation.",
  },
];

const JOURNEY = [
  {
    icon: Building2,
    title: "The Operational Foundation",
    body: "We spent 25 years inside clinical documentation and revenue cycle operations — managing teams, building workflows, and learning exactly which documentation gaps cause claim denials, which coding patterns trigger audits, and which process failures cost practices millions. That knowledge doesn't come from a textbook.",
  },
  {
    icon: Zap,
    title: "The AI Transformation",
    body: "We took everything our operations teams knew and codified it into the platform. Specialty-specific natural language understanding that extracts clinical events from natural provider speech. Auto-coding logic trained on real denial patterns, not synthetic data. Every layer of Zera reflects a problem we solved by hand before we automated it.",
  },
  {
    icon: Layers,
    title: "The Platform",
    body: "Today, Zera is the platform we wished existed when we were running operations. Providers speak naturally. Zera builds the note, generates compliant codes, validates the claim, and prepares it for submission — in real time, in one workflow. No templates. No after-hours charting. No handoffs between disconnected tools.",
  },
];

const VALUES = [
  {
    icon: Award,
    title: "Outcomes Over Features",
    body: "We measure success by time saved, denials prevented, and revenue collected — not feature counts. If Zera doesn't move a number that matters to your practice, we haven't done our job.",
  },
  {
    icon: FileCheck,
    title: "Radical Transparency",
    body: "No hidden fees. No black-box AI. We show exactly what Zera extracts, how the coding logic works, and how every recommendation maps to payer guidelines. The provider always has final sign-off.",
  },
  {
    icon: Heart,
    title: "Built for Providers",
    body: "Zera works the way clinicians already work — speak naturally, review the note, sign, and move on. No templates to fill. No structured data entry. No workflow disruption. The AI adapts to the provider, not the other way around.",
  },
];

const SECURITY = [
  { icon: Shield, title: "HIPAA Compliant", body: "End-to-end encryption, access controls, and a Business Associate Agreement available with every customer." },
  { icon: FileCheck, title: "SOC 2 Audit In Flight", body: "Type I controls in place. Type II audit window open. Control inventory available under NDA." },
  { icon: Building2, title: "US-Based, Customer-Isolated", body: "US infrastructure. Data isolated per organization. No customer data used to train models." },
  { icon: CheckCircle2, title: "Audit-Ready by Design", body: "Role-based access, full audit logging, and incident response built into the platform — not bolted on afterward." },
];

export default function WhyZera() {
  return (
    <>
      {/* Hero */}
      <section className="hero-surface relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-4xl">
            <SectionLabel>The Operator-Led AI Platform</SectionLabel>
            <h1 className="text-4xl lg:text-[4.1rem] font-bold text-foreground mt-4 leading-[0.96] tracking-[-0.02em] text-balance">
              Healthcare AI built by operators, not just engineers.
            </h1>
            <p className="text-xl text-muted-foreground font-medium mt-6 leading-relaxed">
              Zera was built by healthcare veterans with 25+ years inside clinical documentation and revenue cycle operations — who took everything they learned running operations and baked it into the platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem / What's Different */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>Why One Platform</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance">
              What changes when documentation, coding, and claims share one data layer.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEM_ITEMS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-8 h-full">
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Zera DNA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>The Zera DNA</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance">
              From running the operation to automating it.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNEY.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-white p-8 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{step.body}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance">
              Three principles, held without exception.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-white p-8 h-full">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{value.body}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>Security & Compliance</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance">
              Trust, engineered in from the start.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border bg-white p-6 h-full">
                    <Icon className="w-7 h-7 text-primary mb-4" />
                    <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Work with a team that has actually run the operation."
        subcopy="See how Zera turns a single ophthalmology encounter into a documented, coded, validated, claim-ready record — in real time, in one workflow."
      />
    </>
  );
}
