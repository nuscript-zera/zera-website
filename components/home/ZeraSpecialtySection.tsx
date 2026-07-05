"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const ophthalmologyFeatures = [
  "Retina — purpose-built injection workflow",
  "Glaucoma — laterality enforcement, diagnostic logic",
  "Cataract / Refractive — pre- and post-op chart fidelity",
  "Comprehensive — VA, IOP, slit-lamp, fundus, gonioscopy",
];

const cardiologyFeatures = [
  "Office visits and E/M leveling",
  "Interventional procedures",
  "Device management",
  "Cardiac imaging",
];

export default function ZeraSpecialtySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <AnimatedSection>
          <SectionLabel>Specialty Focus</SectionLabel>
          <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-3xl">
            Ophthalmology first. Cardiology next. Same engine.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Zera goes deep in one specialty at a time. The intelligence layer — clinical NLU, HCC reasoning, coding logic — is shared. The vocabulary, workflow specifics, and payer rules are purpose-built per specialty. Generic platforms can&rsquo;t match this depth; single-specialty tools can&rsquo;t match this reach.
          </p>
        </AnimatedSection>

        {/* 3-2 split: dark Ophthalmology + light Cardiology */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Ophthalmology — dark, prominent */}
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
              <span className="text-[11px] font-mono uppercase tracking-[0.18em]" style={{ color: "#60a5fa" }}>
                Phase 1
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em]" style={{ color: "#34d399" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#34d399" }} />
                Live
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-[1.05] mb-4">
              Purpose-built for
              <br />
              ophthalmology.
            </h3>
            <p className="text-[15px] text-white/55 leading-relaxed max-w-xl mb-8">
              The most documentation-dense surgical specialty, with the highest concentration of uncaptured Medicare Advantage risk-adjustment data.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {ophthalmologyFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#60a5fa" }} />
                  <span className="text-[15px] text-white/80 leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cardiology — light, supporting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 relative bg-white rounded-3xl border border-slate-200 p-8 overflow-hidden"
            style={{ boxShadow: "0 2px 20px 0 rgba(15,23,42,0.06), 0 1px 4px 0 rgba(0,0,0,0.04)" }}
          >
            <div className="flex items-center justify-between mb-7">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                Phase 2
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-mono uppercase tracking-[0.14em] font-bold">
                In Development
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground leading-[1.05] mb-4">
              Cardiology is next.
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
              The same autonomous platform, with specialty-specific training on cardiology workflows, procedure coding, and payer rules.
            </p>
            <div className="border-t border-slate-100 pt-6 space-y-4">
              {cardiologyFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span className="text-[15px] text-muted-foreground leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
