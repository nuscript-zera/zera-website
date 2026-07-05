"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pipeline = [
  { step: "01", title: "Intake", description: "Patient data captured directly from your EHR" },
  { step: "02", title: "Coding", description: "AI applies the right codes, modifiers, and logic" },
  { step: "03", title: "Submission", description: "Claims submitted automatically, on time, complete" },
  { step: "04", title: "Tracking", description: "Real-time visibility into claim status and denials" },
  { step: "05", title: "Appeals", description: "Automated denial management and resubmission" },
  { step: "06", title: "Collections", description: "Cash reconciliation and payment posting" },
];

export default function ZeraSolutionSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-muted/30">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-primary"
          >
            THE SOLUTION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Zera handles the entire revenue cycle.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto"
          >
            From intake to final collection. One system. Your team reviews and approves; the platform executes.
          </motion.p>
        </div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pipeline.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-white p-6 lg:p-8 relative"
              >
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              HOW IT WORKS
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Provider-controlled. Always transparent.
            </h3>
            <ul className="space-y-4">
              {[
                "Set your own rules: approval thresholds, coding preferences, denial strategies",
                "Review before submission: Every claim sits in review. You approve or adjust.",
                "Real-time tracking: See the status of every claim, denial, and collection",
                "Denial appeals automated: Denied claims are automatically investigated and resubmitted",
                "Integration works: Your EHR, your practice management system, your banking—all connected",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8 lg:p-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              WHAT YOU GET
            </div>
            <ul className="space-y-5">
              {[
                {
                  title: "15+ hours recovered per week",
                  desc: "Your team works on patient care, not billing.",
                },
                {
                  title: "18% more revenue",
                  desc: "Fewer missed claims, fewer denials, faster collections.",
                },
                {
                  title: "2-day claim-to-submission",
                  desc: "Industry standard is 7–14 days. Zera does it in 2.",
                },
                {
                  title: "94%+ collection rate",
                  desc: "Higher collections than most specialty practices achieve manually.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
