"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Users, Sparkles, UserCheck, TrendingUp, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PipelineConsole, { ConsoleStage } from "@/components/shared/PipelineConsole";
import PageCTA from "@/components/shared/PageCTA";
import ROICalculator from "@/components/shared/ROICalculator";

const economicsStages: ConsoleStage[] = [
  { num: "01", icon: Users, label: "Same team", tag: "Fixed cost", desc: "No new hiring cycle to add capacity" },
  { num: "02", icon: Sparkles, label: "AI drafts first", tag: "Automated", desc: "Speech-to-text does the first pass" },
  { num: "03", icon: UserCheck, label: "Editors review", tag: "Higher output", desc: "Your people verify and correct, not retype" },
  { num: "04", icon: TrendingUp, label: "2× capacity", tag: "Up to 2×", desc: "Same headcount, more volume cleared" },
  { num: "05", icon: Percent, label: "Better margins", tag: "~15% → ~40%", desc: "EBITDA shifts from thin to healthy" },
];

const manualModel = [
  "Capacity is capped by how fast people can type",
  "Growth means another hiring, training, and attrition cycle",
  "Margins stay thin — labor is most of the cost base",
  "Tighter turnaround is met with overtime and weekend shifts",
];

const withAudryl = [
  "Capacity is decoupled from headcount — AI drafts, editors review",
  "Take on new clients without a hiring cycle eating the margin",
  "Same team clears up to 2× the volume",
  "Faster turnaround without burning out the floor",
];

const economicsStats = [
  { value: "Up to 2×", label: "Capacity, same team" },
  { value: "~15% → ~40%", label: "EBITDA shift" },
  { value: "0", label: "New editors to hire" },
];

const capabilityRows: [string, string, string][] = [
  ["AI transcription", "None", "Multi-stage pipeline"],
  ["QA workflow", "Basic / manual", "13 error categories, scored"],
  ["Workforce management", "Separate system", "Built in"],
  ["Throughput", "Typing speed", "Up to 2×, same team"],
  ["Learning loop", "No", "Self-improving"],
  ["Delivery", "Manual / portal", "Structured, EHR-ready output"],
  ["Footprint", "Two systems, two costs", "One platform"],
];

const whatYouGet = [
  { num: "01", title: "Protect your margin", desc: "Clear more volume per editor without raising labor cost. The biggest line on your P&L stops being the ceiling on profitability." },
  { num: "02", title: "Grow without the hiring treadmill", desc: "Take on a big new client without a hiring, training, and ramp cycle eating the margin before the first invoice goes out." },
  { num: "03", title: "Hit tighter turnaround", desc: "AI drafts first, so editors clear queues faster. Meet shrinking TAT windows without standing overtime and weekend shifts." },
  { num: "04", title: "Standardize quality across clients", desc: "One 13-category QA workflow holds accuracy steady as you scale — so more output never means more risk on delivery." },
  { num: "05", title: "Run the whole operation in one system", desc: "Production, QA, scheduling, attendance, and payroll live together — no bolt-on HRMS, no second cost, no integration headaches." },
];

export default function ForMTSOs() {
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
                For MTSOs · Operator economics
              </p>
              <h1 className="text-4xl lg:text-[4.1rem] font-bold text-foreground leading-[0.96] tracking-[-0.02em] text-balance">
                Grow the work without growing the team.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Labor is the bulk of your cost base. Audryl breaks the link between
                capacity and headcount — your editors review AI drafts instead of
                typing from scratch, processing more volume with the same people.
                The result is a different margin profile, not just a cost line item.
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
                  For medical transcription operators · 90+ specialists on the platform daily
                </p>
              </div>
            </AnimatedSection>

            {/* Right: operator-economics console */}
            <AnimatedSection delay={0.15}>
              <PipelineConsole command="audryl://operator-economics" stages={economicsStages} />
              <p className="mt-4 font-mono text-[0.65rem] text-muted-foreground">
                Illustrative. Throughput, QA, and margins vary by specialty, client specs, and team adoption.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The math — manual model vs with Audryl */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <SectionLabel>Operator economics</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-3xl">
              The math that decides your margin.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              In a manual operation, capacity equals people — so every bit of
              growth costs margin first. Audryl breaks that link, so volume and
              profitability stop pulling against each other.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Manual model */}
            <AnimatedSection delay={0.1} className="lg:col-span-2">
              <div className="h-full bg-white rounded-3xl border border-[#E2E6EB] p-8">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">The manual model</p>
                <h3 className="text-xl font-bold text-foreground pb-5 mb-5 border-b border-[#E2E6EB]">Capacity locked to headcount.</h3>
                <div className="space-y-4">
                  {manualModel.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <X className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                      <span className="text-[0.92rem] text-muted-foreground leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            {/* With Audryl — dark */}
            <AnimatedSection delay={0.18} className="lg:col-span-3">
              <div className="h-full rounded-3xl p-8 lg:p-9" style={{ backgroundColor: "#0f172a" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em]" style={{ color: "#60a5fa" }}>With Audryl</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] font-bold text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2dd4bf" }} />
                    Decoupled
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Same team. More volume. Better margin.</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {withAudryl.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#60a5fa" }} />
                      <span className="text-[0.92rem] text-white/70 leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-7 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {economicsStats.map((s) => (
                    <div key={s.label}>
                      <div className="text-xl lg:text-2xl font-bold tracking-tight text-white">{s.value}</div>
                      <div className="mt-1.5 text-[10px] font-mono uppercase tracking-wider text-white/50 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          <p className="mt-6 font-mono text-[0.65rem] text-muted-foreground">
            Illustrative. Throughput, QA, and margins vary by specialty, client specs, and team adoption.
          </p>
        </div>
      </section>

      {/* Audryl vs a manual stack — capability table */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <SectionLabel>One platform vs. a manual stack</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-2xl">
              Everything in one place — not stitched together.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              A manual operation cobbles transcription, QA, and workforce
              management out of separate tools and spreadsheets. Audryl is one
              system built for the whole operation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-12 max-w-[58rem] overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-3 bg-muted border-b border-slate-200">
                <div className="p-4 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Capability</div>
                <div className="p-4 text-[11px] font-mono uppercase tracking-wider text-muted-foreground text-center">Manual stack</div>
                <div className="p-4 text-[11px] font-mono uppercase tracking-wider text-primary text-center">With Audryl</div>
              </div>
              {capabilityRows.map(([cap, manual, audryl]) => (
                <div key={cap} className="grid grid-cols-3 border-t border-slate-100 first:border-t-0 bg-white">
                  <div className="p-4 text-sm font-semibold text-foreground">{cap}</div>
                  <div className="p-4 text-sm text-muted-foreground text-center">{manual}</div>
                  <div className="p-4 text-sm font-semibold text-primary text-center">{audryl}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: sticky header */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <AnimatedSection>
                <SectionLabel>What changes</SectionLabel>
                <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
                  What you get when capacity stops meaning headcount.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
                  Audryl is built for transcription operators — not a generic
                  healthcare tool. Every gain below shows up where it matters: your
                  margin, your turnaround, and your ability to take on more.
                </p>
              </AnimatedSection>
            </div>

            {/* Right: numbered list */}
            <div>
              {whatYouGet.map((g, i) => (
                <motion.div
                  key={g.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 py-6 border-t border-slate-200 first:border-t-0 lg:first:border-t lg:first:pt-6"
                >
                  <span className="text-2xl font-bold text-slate-300 shrink-0 tabular-nums leading-none pt-0.5">
                    {g.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{g.title}</h3>
                    <p className="mt-1.5 text-[15px] text-muted-foreground leading-relaxed">{g.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI calculator */}
      <section id="run-your-numbers" className="scroll-mt-28 py-24 lg:py-32">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <SectionLabel>Run your numbers</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-3xl">
              See the capacity shift on your own operation.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Plug in your team and volume. The model holds your headcount flat
              and shows what the same team delivers with Audryl.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-10">
              <ROICalculator />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading="Ready to double your capacity?"
        subcopy="Start a 14-day pilot on your own work — full access, no credit card. See the capacity shift with your own team and clients."
      />
    </>
  );
}
