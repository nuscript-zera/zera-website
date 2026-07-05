"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Clock, DollarSign, Users } from "lucide-react";

export default function ZeraProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Days Lost to Manual Work",
      description:
        "Your team spends hours on data entry, verification, and follow-up instead of patient care. Specialty practices lose an average of 15 hours per week to billing operations.",
    },
    {
      icon: DollarSign,
      title: "Claims Slip Through",
      description:
        "Incomplete submissions, missed modifiers, and coding delays mean claims stack up. On average, specialty practices leave 12–18% of revenue on the table.",
    },
    {
      icon: AlertCircle,
      title: "Denials Pile Up",
      description:
        "Every denied claim means a restart. Without automated tracking and appeals, practices spend weeks chasing rejections that should never happen.",
    },
    {
      icon: Users,
      title: "Staff Turnover Chaos",
      description:
        "When your billing person leaves, so does the institutional knowledge. Every new hire means weeks of training and billing disruption.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-primary"
          >
            THE PROBLEM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Manual revenue cycle breaks specialty practices.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Specialty medicine demands complex coding, multiple modifiers, and intricate claim logic. When this is manual, it fails.
          </motion.p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                className="rounded-2xl border border-border bg-white p-6 lg:p-8"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                    <Icon className="h-6 w-6 text-red-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground leading-tight">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
