"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const productionFeatures = [
  "Speech-to-text tuned for clinical audio",
  "AI-drafted notes your editors review, not retype",
  "13-category QA workflow with accuracy scoring",
  "Claims-ready output, delivered via secure portal or file",
];

const managementFeatures = [
  "Productivity and TAT tracking per team member",
  "Quality dashboards and audit sampling",
  "Compensation models and payroll exports",
  "Multi-client routing and reporting",
];

export default function SolutionSection() {
  return (
    <section id="platform" className="py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <AnimatedSection>
          <p className="text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3">
            <span className="text-primary">The Platform</span>
          </p>
          <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-3xl">
            Two engines. One platform.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A Production Engine that turns audio into EHR-ready documentation, and
            a Management Suite that runs the operation around it. Together they
            break the link between capacity and headcount.
          </p>
        </AnimatedSection>

        {/* Two engines — 60/40: dark Production + light Management */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Production Engine — dark, prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 relative rounded-3xl p-8 lg:p-10 overflow-hidden"
            style={{
              backgroundColor: "#0f172a",
              boxShadow: "0 24px 60px 0 rgba(15,23,42,0.28)",
            }}
          >
            <div className="flex items-center justify-between mb-7">
              <span
                className="text-[11px] font-mono uppercase tracking-[0.18em]"
                style={{ color: "#60a5fa" }}
              >
                Production Engine
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-white/50">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#60a5fa" }}
                />
                Core
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-[1.05] mb-4">
              Audio in,
              <br />
              EHR-ready out.
            </h3>
            <p className="text-[15px] text-white/55 leading-relaxed max-w-xl mb-8">
              The full transcription pipeline — capture, AI drafting, editor
              review, QA scoring, and delivery — in one controlled line.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {productionFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: "#60a5fa" }}
                  />
                  <span className="text-[15px] text-white/80 leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Management Suite — light, supporting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 relative bg-white rounded-3xl border border-slate-200 p-8 overflow-hidden"
            style={{
              boxShadow:
                "0 2px 20px 0 rgba(15,23,42,0.06), 0 1px 4px 0 rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center justify-between mb-7">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                Management Suite
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-mono uppercase tracking-[0.14em] font-bold">
                Included
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground leading-[1.05] mb-4">
              Run the whole operation in one place.
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
              No separate HRMS, no spreadsheets bolted on the side.
            </p>
            <div className="border-t border-slate-100 pt-6 space-y-4">
              {managementFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span className="text-[15px] text-muted-foreground leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
