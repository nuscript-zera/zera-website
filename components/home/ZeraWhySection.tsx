"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, FileCheck, Heart } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

export default function ZeraWhySection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel>Why Zera</SectionLabel>
          <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground mt-4 leading-[0.98] tracking-[-0.02em] text-balance mb-6">
            Healthcare AI built by operators, not just engineers.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zera was built by healthcare veterans with 25+ years inside clinical documentation and revenue cycle operations — who took everything they learned running operations and baked it into the platform.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: "Outcomes Over Features",
              description:
                "We measure success by time saved, denials prevented, and revenue collected — not feature counts. If Zera doesn't move a number that matters to your practice, we haven't done our job.",
            },
            {
              icon: FileCheck,
              title: "Radical Transparency",
              description:
                "No hidden fees. No black-box AI. We show exactly what Zera extracts, how the coding logic works, and how every recommendation maps to payer guidelines. The provider always has final sign-off.",
            },
            {
              icon: Heart,
              title: "Built for Providers",
              description:
                "Zera works the way clinicians already work — speak naturally, review the note, sign, and move on. No templates to fill. No structured data entry. No workflow disruption. The AI adapts to the provider, not the other way around.",
            },
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-white p-8 lg:p-10 h-full">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
