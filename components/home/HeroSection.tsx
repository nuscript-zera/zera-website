"use client";

import React from "react";
import {
  ArrowRight,
  AudioLines,
  FileText,
  ShieldCheck,
  BarChart2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Final-delivery QA standard — every transcript must meet 99.5%+.
const ACCURACY = 99.5;

const noteCards = [
  { id: "#987-78801", text: "Patient transcription, standard E/M encounter documentation for…", status: "Completed", tone: "emerald" },
  { id: "#987-78902", text: "Procedure transcription with multi-section operative report…", status: "In Progress", tone: "blue" },
  { id: "#987-78903", text: "Multi-section transcription of medical consultation…", status: "Completed", tone: "emerald" },
  { id: "#987-78904", text: "Discharge summary transcription, dictated narrative…", status: "Pending QA", tone: "amber" },
];

const toneMap: Record<string, { dot: string; text: string; bg: string }> = {
  emerald: { dot: "#10b981", text: "#047857", bg: "#ecfdf5" },
  blue: { dot: "#2563eb", text: "#1d4ed8", bg: "#eff6ff" },
  amber: { dot: "#f59e0b", text: "#b45309", bg: "#fffbeb" },
};

const metrics = [
  { label: "Turnaround (Avg)", value: "4.2", unit: "hrs" },
  { label: "Notes Today", value: "127", unit: "" },
  { label: "Editor Productivity", value: "94", unit: "%" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-primary"
          >
            The AI platform for medical transcription operations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Double Your Capacity.{" "}
            <br className="hidden sm:block" />
            Zero New Hires.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Audryl turns audio into EHR-ready notes through an AI production
            pipeline your team reviews — processing more volume with the same
            people, at higher quality and far better margins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/request-demo?intent=pilot">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all gap-2 px-8 rounded-xl font-semibold text-base h-12"
              >
                Start free pilot
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="/request-demo">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted gap-2 px-8 rounded-xl font-semibold text-base h-12"
              >
                Book a demo
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Product preview visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="relative mt-16 lg:mt-20 max-w-5xl mx-auto"
        >
          {/* Floating icon rail */}
          <div className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-1.5 rounded-2xl border border-[#E2E6EB] bg-white p-1.5 shadow-[0_12px_34px_-12px_rgba(15,23,42,0.28)]">
            {[AudioLines, FileText, ShieldCheck, BarChart2, Users].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={i === 0 ? { backgroundColor: "#2563eb", color: "#fff" } : { color: "#94a3b8" }}
              >
                <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={2} />
              </span>
            ))}
          </div>

          {/* Screen frame */}
          <div className="overflow-hidden rounded-2xl border border-[#E2E6EB] bg-white shadow-[0_36px_90px_-34px_rgba(15,23,42,0.5)]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#E2E6EB] bg-[#F3F6FA] px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#cbd5e1" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#cbd5e1" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#cbd5e1" }} />
              </div>
              <span className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-muted-foreground">
                app.audryl.com
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.58rem] font-mono font-bold uppercase tracking-wide"
                style={{ backgroundColor: "#ecfdf5", color: "#047857" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#10b981" }} />
                Live
              </span>
            </div>

            {/* Dashboard body */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 p-5 lg:p-6" style={{ backgroundColor: "#fbfcfe" }}>
              {/* Left: note cards */}
              <div className="lg:col-span-3">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-[0.95rem] font-bold text-foreground">Clinical Note Cards</h4>
                  <span className="font-mono text-[0.6rem] uppercase tracking-wide text-muted-foreground">Today</span>
                </div>
                <div className="space-y-2.5">
                  {noteCards.map((c) => {
                    const t = toneMap[c.tone];
                    return (
                      <div key={c.id} className="rounded-xl border border-[#E2E6EB] bg-white px-3.5 py-2.5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-[0.66rem] font-semibold text-slate-400 tabular-nums">{c.id}</span>
                          <span
                            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.56rem] font-mono font-bold uppercase tracking-wide"
                            style={{ backgroundColor: t.bg, color: t.text }}
                          >
                            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: t.dot }} />
                            {c.status}
                          </span>
                        </div>
                        <p className="mt-1 truncate text-[0.72rem] text-muted-foreground">{c.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: accuracy + metrics */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex flex-col items-center rounded-xl border border-[#E2E6EB] bg-white p-5">
                  <div
                    className="relative flex h-28 w-28 items-center justify-center rounded-full"
                    style={{ background: `conic-gradient(#2563eb 0 ${ACCURACY}%, #E2E6EB ${ACCURACY}% 100%)` }}
                  >
                    <div className="flex h-[5.4rem] w-[5.4rem] flex-col items-center justify-center rounded-full bg-white">
                      <span className="text-[1.1rem] font-bold leading-none text-foreground tabular-nums">{ACCURACY}%</span>
                      <span className="mt-1 font-mono text-[0.56rem] uppercase tracking-wide text-muted-foreground">Accuracy</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-[#E2E6EB] bg-white px-2 py-3 text-center">
                      <div className="text-[1.05rem] font-bold leading-none text-foreground tabular-nums">
                        {m.value}
                        {m.unit && <span className="ml-0.5 text-[0.6rem] font-semibold text-muted-foreground">{m.unit}</span>}
                      </div>
                      <div className="mt-1.5 font-mono text-[0.5rem] uppercase leading-tight tracking-wide text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-5 flex flex-col items-center justify-between gap-2 sm:flex-row">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
              AI for medical transcription operations · Proven across 70+ US healthcare organizations
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Live operations · HIPAA-compliant with BAA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
