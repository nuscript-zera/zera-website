"use client";

import React from "react";
import { UserCheck, FileCheck, ShieldCheck, BarChart3, TrendingUp, Headphones, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PageCTA from "@/components/shared/PageCTA";

const COMPARISON_COLUMNS = [
  {
    label: "Outsourced (Traditional)",
    highlight: false,
    items: ["Opaque, labor-based fees", "Limited reporting cadence", "Manual claim workflows", "Shared staff across clients", "Quarterly review calls"],
  },
  {
    label: "Zera Managed RCM",
    highlight: true,
    items: ["Transparent, aligned pricing", "Real-time dashboards", "AI-driven autonomous workflows", "Dedicated named team", "Continuous optimization"],
  },
  {
    label: "In-house",
    highlight: false,
    items: ["Full headcount costs", "Training and turnover burden", "Limited technology layer", "Your team manages everything", "You own every problem"],
  },
];

const CAPABILITIES = [
  { icon: UserCheck, title: "Dedicated RCM team", body: "A named team of certified coders, billers, and AR specialists assigned to your practice. They learn your payers, your workflows, and your revenue goals — and stay with you." },
  { icon: FileCheck, title: "End-to-end claims management", body: "Charge capture and coding through claim submission, payment posting, denial management, and patient billing. Your full revenue cycle handled, not just pieces of it." },
  { icon: ShieldCheck, title: "AI-powered, human-verified", body: "Your team operates on the Zera platform — the same intelligence layer your software customers use directly. Autonomous validation runs at scale; human expertise resolves the exceptions." },
  { icon: BarChart3, title: "Transparent reporting", body: "Real-time dashboards showing claim status, denial rates, days in AR, and collection performance. You see what your team sees. No black boxes, no quarterly PDFs." },
  { icon: TrendingUp, title: "Performance accountability", body: "Clean claim rates, days in AR, and net collection rates are tracked, reported, and benchmarked — not buried. The team is accountable to the numbers, with clear targets discussed during onboarding." },
  { icon: Headphones, title: "A true operating partner", body: "Not a vendor you email and wait on. A team embedded in your revenue cycle, proactively surfacing issues and opportunities before they cost you." },
];

export default function ManagedRCM() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-4xl">
            <SectionLabel>Two Ways to Operate</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 leading-tight">
              Run Zera yourself — or have our team run it for you.
            </h1>
            <p className="text-xl text-muted-foreground font-medium mt-6 leading-relaxed">
              Zera Managed RCM is the same platform, operated by a dedicated team of certified coders, billers, and AR specialists assigned to your practice. Same software. Same intelligence layer. Different operational ownership — for practices that want the outcomes without staffing the operation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>How It's Different</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight">
              The outcomes of in-house, without the burden.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPARISON_COLUMNS.map((col, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={`rounded-2xl border p-8 h-full ${col.highlight ? "border-primary border-2 bg-white shadow-lg shadow-primary/10" : "border-border bg-white"}`}>
                  <p className={`text-sm font-bold uppercase tracking-wide mb-5 ${col.highlight ? "text-primary" : "text-muted-foreground"}`}>{col.label}</p>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground">
                        {col.highlight
                          ? <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          : <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0 mt-2.5" />}
                        <span className={col.highlight ? "text-foreground" : "text-muted-foreground"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mb-14">
            <SectionLabel>What's Included</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight">
              A full revenue cycle operation, run on Zera.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border bg-white p-8 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{cap.body}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Let our team run your revenue cycle."
        subcopy="Talk to us about Zera Managed RCM — the same platform, operated by specialists assigned to your practice."
        primaryLabel="Talk to Our Team"
        primaryHref="/request-demo"
        secondaryLabel="Run Zera Yourself"
        secondaryHref="/platform"
      />
    </>
  );
}
