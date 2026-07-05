"use client";

import React from "react";
import {
  Brain,
  Mic,
  Globe,
  RefreshCw,
  FileText,
  Layers,
  AlertTriangle,
  Target,
  BarChart2,
  FileSearch,
  Send,
  Share2,
  Download,
  Activity,
  ShieldCheck,
  Users,
  CalendarDays,
  Clock,
  Wallet,
  Server,
  Rocket,
  MonitorSmartphone,
  ArrowRight,
  AudioLines,
  Sparkles,
  UserCheck,
  FileOutput,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PipelineConsole, { ConsoleStage } from "@/components/shared/PipelineConsole";
import PageCTA from "@/components/shared/PageCTA";

type Feature = { icon: React.ElementType; title: string; desc: string };

const pipelineStages: ConsoleStage[] = [
  { num: "01", icon: AudioLines, label: "Audio", tag: "Ingest", desc: "Dictation & ambient capture, any source" },
  { num: "02", icon: Sparkles, label: "AI Draft", tag: "Automated", desc: "Speech-to-text + structured note generation" },
  { num: "03", icon: UserCheck, label: "Editor Review", tag: "Human-in-loop", desc: "Your team reviews and corrects — never retypes" },
  { num: "04", icon: ShieldCheck, label: "QA Audit", tag: "13-category", desc: "13-category accuracy scoring on every note" },
  { num: "05", icon: FileOutput, label: "Delivery", tag: "Secure", desc: "Secure portal or file — HL7/FHIR for enterprise" },
];

const productionLine = [
  { stage: "01", icon: AudioLines, title: "Audio", desc: "Dictation and ambient capture come in from any source — phone, app, or upload — across specialties and accents.", output: "clean, queued audio" },
  { stage: "02", icon: Sparkles, title: "AI Draft", desc: "Speech-to-text tuned for clinical audio generates a structured first draft of the note, so nobody starts from a blank page.", output: "draft clinical note" },
  { stage: "03", icon: UserCheck, title: "Editor Review", desc: "Your editors review and correct the draft instead of retyping it — the single biggest lever on throughput per person.", output: "fully reviewed note" },
  { stage: "04", icon: ShieldCheck, title: "QA Score", desc: "A 13-category QA workflow scores accuracy and flags issues before delivery, holding quality steady as volume grows.", output: "QA-scored note" },
  { stage: "05", icon: FileOutput, title: "Delivery", desc: "Finished notes are delivered EHR-ready and routed to the right client — via secure portal or file, with HL7/FHIR available for enterprise.", output: "secure delivery" },
];

const aiFeatures: Feature[] = [
  { icon: Mic, title: "Clinical-Grade Speech-to-Text", desc: "Speech-to-text tuned for clinical audio, with medical vocabulary, dictation-style support, and high raw accuracy." },
  { icon: Brain, title: "AI Formatting Engine", desc: "AI structures raw transcript output into clinical documents that follow provider styles, templates, and client specifications." },
  { icon: Globe, title: "Deterministic Post-Processor", desc: "Rule-based corrections for recognition errors, abbreviations, and formatting standards — consistent and predictable." },
  { icon: RefreshCw, title: "Self-Improving Learning Loop", desc: "Editor corrections feed back into the system, improving future drafts for each provider over time." },
  { icon: FileText, title: "Template & Macro Management", desc: "A full template system with document extraction, macro libraries, and provider-specific samples with contextual search." },
  { icon: Layers, title: "Review-First Pipeline", desc: "The AI generates a near-complete draft and your editor reviews and refines — shifting the work from typing to reviewing, toward 2× output." },
];

const qaFeatures: Feature[] = [
  { icon: AlertTriangle, title: "13 Error Categories", desc: "A comprehensive error taxonomy covering medical, grammatical, formatting, and critical errors with weighted scoring." },
  { icon: Target, title: "Accuracy Scoring", desc: "Automated accuracy calculations per editor, per client, and per period — with drill-down into specific error patterns." },
  { icon: BarChart2, title: "Audit Sampling", desc: "Configurable audit percentages, random sampling, and targeted reviews for quality-assurance compliance." },
  { icon: FileSearch, title: "Blank Accountability", desc: "Track unresolved blanks, monitor resolution times, and ensure nothing reaches delivery without review." },
];

const deliveryFeatures: Feature[] = [
  { icon: Send, title: "EHR-ready output", desc: "Notes formatted to drop into your clients' systems — delivered via secure portal or file, with HL7/FHIR available for enterprise." },
  { icon: FileText, title: "Claims-ready output", desc: "Documentation structured for downstream coding and billing, so revenue cycles aren't held up." },
  { icon: Share2, title: "Multi-client routing", desc: "Route work, specs, and delivery per client from one console — no separate setup per account." },
  { icon: Download, title: "Flexible exports", desc: "Pull productivity, QA, and payroll data out in the formats your existing tools already expect." },
  { icon: Activity, title: "Specialty coverage", desc: "Tuned across specialties, accents, and dictation styles — from single clinics to large hospital groups." },
  { icon: ShieldCheck, title: "Secure transfer", desc: "Encrypted, tenant-isolated transfer end to end, with a full audit trail on every handoff." },
];

const managementFeatures: Feature[] = [
  { icon: Users, title: "Team Management", desc: "Complete profiles, role-based access for editors, QA, managers, and admins, plus department structure and document management." },
  { icon: CalendarDays, title: "Shift Scheduling", desc: "Flexible shift creation, rotation management, and schedule publishing — integrated with production tracking." },
  { icon: Clock, title: "Attendance Tracking", desc: "Grace periods, gap rules, short permissions, and overtime calculations — all configurable to your policy." },
  { icon: Wallet, title: "Compensation & Payroll", desc: "Compensation models with incentive tiers, line-based pay calculations, premium handling, and payroll exports." },
];

const cloudCards = [
  { icon: Server, title: "No Hardware", desc: "Nothing to provision, rack, or maintain. Everything runs in the cloud." },
  { icon: MonitorSmartphone, title: "Browser-Based", desc: "Your team accesses Audryl through any standard web browser. No downloads." },
  { icon: Rocket, title: "Hours to Go-Live", desc: "Setup completes in hours. Your team processes real production work the next morning." },
];

function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  const gridCls =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-12 grid grid-cols-1 ${gridCls} gap-5`}>
      {features.map((f, i) => (
        <AnimatedSection key={f.title} delay={i * 0.05}>
          <div className="flex h-full flex-col rounded-2xl border border-[#E2E6EB] bg-white p-6">
            <span
              className="flex h-[2.1rem] w-[2.1rem] items-center justify-center rounded-lg border"
              style={{ backgroundColor: "#F6F8FF", borderColor: "#B2C7FE", color: "oklch(0.488 0.217 264)" }}
            >
              <f.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[7.5rem] pb-[4.5rem] lg:pt-[9rem] lg:pb-[6.5rem]">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <AnimatedSection>
              <p className="inline-flex items-center gap-2 text-[0.68rem] font-mono font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Platform · Architecture
              </p>
              <h1 className="text-4xl lg:text-[4.1rem] font-bold text-foreground leading-[0.96] tracking-[-0.02em] text-balance">
                Two engines. One platform.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A Production Engine that turns audio into EHR-ready documentation,
                and a Management Suite that runs the operation around it. Together
                they let you process more volume with the same team, while a
                complete QA workflow holds quality steady.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/request-demo?intent=pilot">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 gap-2 px-8 rounded-xl font-semibold text-base h-12">
                    Start free pilot
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="/request-demo">
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted px-8 rounded-xl font-semibold text-base h-12">
                    Book a demo
                  </Button>
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E6EB]">
                <p className="text-[0.66rem] font-mono font-medium uppercase tracking-wider leading-relaxed text-muted-foreground">
                  The Audryl platform · Production Engine + Management Suite
                </p>
              </div>
            </AnimatedSection>

            {/* Right: pipeline console */}
            <AnimatedSection delay={0.15}>
              <PipelineConsole command="audryl://pipeline" stages={pipelineStages} />
              <p className="mt-4 font-mono text-[0.65rem] text-muted-foreground">
                Illustrative pipeline. Throughput, QA, and delivery vary by specialty, client specs, and team adoption.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Inside the production line — the how-it-works flow */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-2xl">
              Inside the production line.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Every note moves through one controlled pipeline — from raw audio
              to delivery. AI does the drafting and scoring; your team owns the
              judgment.
            </p>
          </AnimatedSection>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {productionLine.map((s, i) => (
              <AnimatedSection key={s.stage} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-[#E2E6EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B2C7FE] hover:shadow-[0_20px_50px_-24px_rgba(37,99,235,0.4)]">
                  {i < productionLine.length - 1 && (
                    <svg
                      className="hidden lg:block absolute top-1/2 -right-[18px] z-10 h-4 w-4 -translate-y-1/2 text-primary/50"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  )}
                  <div className="flex items-center justify-between">
                    <s.icon
                      className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2}
                      style={{ color: "#2563eb" }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Stage {s.stage}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.375rem] font-bold text-foreground leading-tight">{s.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-auto pt-5">
                    <div className="border-t pt-4" style={{ borderColor: "#E2E6EB" }}>
                      <span className="font-mono text-[0.66rem] uppercase tracking-wider text-primary">
                        Output → {s.output}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Production Engine — AI pipeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <SectionLabel>Production Engine</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-2xl">
              The AI transcription pipeline.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              From raw audio to formatted clinical document in seconds. Each
              stage adds precision, so your editors start from a near-complete
              draft, not a blank screen.
            </p>
          </AnimatedSection>
          <FeatureGrid features={aiFeatures} />
        </div>
      </section>

      {/* QA */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <SectionLabel>Quality at Scale</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-2xl">
              A complete QA workflow.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              More output means nothing if quality slips. The QA system holds
              accuracy steady at every scale — 13 error categories, automated
              scoring, and full audit trails.
            </p>
          </AnimatedSection>
          <FeatureGrid features={qaFeatures} columns={2} />
        </div>
      </section>

      {/* Delivery & integrations — dark */}
      <section className="max-lg:py-[5.3125rem] lg:py-[7.5rem]" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3" style={{ color: "#60a5fa" }}>
              Delivery &amp; Integrations
            </span>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-white leading-[0.98] tracking-[-0.02em] text-balance">
              Fits the way you already deliver.
            </h2>
            <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
              Audryl plugs into the last mile of your operation — the formats,
              systems, and clients you already serve — so adopting it doesn't
              mean re-plumbing your workflow.
            </p>
          </AnimatedSection>

          <div className="mt-12 rounded-2xl overflow-hidden border border-white/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {deliveryFeatures.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 0.05}>
                  <div className="h-full p-8" style={{ backgroundColor: "#0f172a" }}>
                    <span
                      className="flex h-[2.1rem] w-[2.1rem] items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(96,165,250,0.12)", color: "#60a5fa" }}
                    >
                      <f.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-white/55">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-white/40">
            <span>HL7</span>
            <span aria-hidden="true">·</span>
            <span>FHIR</span>
            <span aria-hidden="true">·</span>
            <span>EHR-ready</span>
            <span aria-hidden="true">·</span>
            <span>Claims-ready</span>
            <span aria-hidden="true">·</span>
            <span>Multi-client</span>
          </div>
        </div>
      </section>

      {/* Management Suite */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-semibold font-mono uppercase tracking-[0.2em] text-primary">
                Management Suite
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-mono uppercase tracking-[0.14em] font-bold">
                Included
              </span>
            </div>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
              Workforce management — built in.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              No separate HRMS, no second system, no second cost, no integration
              headaches. Everything needed to run the operation lives inside
              Audryl.
            </p>
          </AnimatedSection>
          <FeatureGrid features={managementFeatures} columns={4} />
        </div>
      </section>

      {/* Cloud / zero install */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <div className="rounded-2xl border border-[#E2E6EB] bg-[#F3F6FA] p-8 lg:p-12">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
                100% cloud · zero installation
              </p>
              <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
                Operational by tomorrow morning.
              </h2>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E6EB]">
                {cloudCards.map((item) => (
                  <div
                    key={item.title}
                    className="py-8 first:pt-0 last:pb-0 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
                  >
                    <item.icon className="h-6 w-6" strokeWidth={2} style={{ color: "#2563eb" }} />
                    <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading="See the platform in action."
        subcopy="Start a 14-day pilot on your own work — full access, no credit card. See both engines running with your own team and data."
      />
    </>
  );
}
