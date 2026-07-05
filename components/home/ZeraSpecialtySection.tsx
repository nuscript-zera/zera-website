"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Heart, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

export default function ZeraSpecialtySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel>Specialty Focus</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight mb-6">
            Ophthalmology first. Cardiology next. Same engine.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zera goes deep in one specialty at a time. The intelligence layer — clinical NLU, HCC reasoning, coding logic — is shared across specialties. The vocabulary, the workflow specifics, and the payer rules are purpose-built per specialty. Generic platforms can't match this depth. Single-specialty tools can't match this reach.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Ophthalmology — 3 cols, dark theme */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3 rounded-2xl p-8 lg:p-10"
            style={{ backgroundColor: "#0f172a" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#60a5fa]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#60a5fa] font-semibold block">Phase 1</p>
                <p className="text-xl font-bold text-white">Ophthalmology</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/15 text-green-300 text-[11px] font-bold uppercase tracking-[0.06em]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Live
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Purpose-built for ambulatory ophthalmology. The most documentation-dense surgical specialty, with the highest concentration of uncaptured Medicare Advantage risk-adjustment data.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Retina — purpose-built injection workflow",
                "Glaucoma — laterality enforcement, diagnostic procedure logic",
                "Cataract / Refractive — pre- and post-op chart fidelity",
                "Comprehensive — VA, IOP, slit-lamp, fundus, gonioscopy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cardiology — 2 cols, light theme */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl border border-border bg-white p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold block">Phase 2</p>
                <p className="text-xl font-bold text-foreground">Cardiology</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-[11px] font-bold uppercase tracking-[0.06em]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                In Development
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Coming next. Same autonomous platform, with specialty-specific training on cardiology workflows, procedure coding, and payer rules.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Coverage will span office visits, interventional procedures, device management, and cardiac imaging.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
