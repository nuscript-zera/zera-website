"use client";

import React from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PageCTA from "@/components/shared/PageCTA";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[7.5rem] pb-[4.5rem] lg:pt-[9rem] lg:pb-[6.5rem]">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl">
            <SectionLabel>About Zera</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mt-4 leading-tight">
              Revenue cycle, reimagined.
            </h1>
            <p className="text-xl text-muted-foreground font-medium mt-6 leading-relaxed">
              Specialty medicine practices deserve better than manual billing workflows. Zera automates the entire revenue cycle—from patient intake through final collection—so practices reclaim hours and capture every dollar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight mb-6">
                Specialty practices deserve billing that works.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe specialty medicine practices should spend time on patient care, not billing operations. Manual RCM is broken: it's slow, error-prone, and expensive. Practices lose 12–18% of revenue and countless hours to billing friction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zera exists to fix that. We automate the entire revenue cycle—intelligently, transparently, and under the practice's control. Every claim, every denial, every collection is visible. Every decision is yours.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="bg-white rounded-2xl border border-border p-8 lg:p-10">
              <div className="space-y-6">
                {[
                  { title: "Provider-First Design", desc: "Built for the practice's needs, not the vendor's margins." },
                  { title: "Radical Transparency", desc: "You see every claim, every decision, every dollar. No black box." },
                  { title: "Real Automation", desc: "Not workflows or templates. Actual autonomous processing, provider-approved." },
                  { title: "Specialty-Fluent", desc: "Understands complex coding, modifiers, and specialty-specific logic." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
              Built on three principles.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "End-to-End Automation",
                desc: "Every step of the revenue cycle—intake, coding, submission, tracking, appeals, collections—is captured and executed automatically.",
              },
              {
                icon: TrendingUp,
                title: "Specialty Expertise",
                desc: "We understand complex modifiers, multi-specialty coding rules, and the nuances that break generic RCM software.",
              },
              {
                icon: CheckCircle2,
                title: "Transparent Control",
                desc: "You set the rules, review before submission, and stay in command. Never automated against your practice's judgment.",
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-8 lg:p-10 h-full">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Ready to automate your revenue cycle?"
        description="Schedule a demo and see Zera in action."
        buttonText="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
