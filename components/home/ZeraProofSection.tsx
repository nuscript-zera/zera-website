"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ZeraProofSection() {
  const stats = [
    { number: "12,000+", label: "Claims Processed Monthly" },
    { number: "$18M+", label: "Revenue Automated" },
    { number: "94%", label: "Collection Rate" },
    { number: "2.1", label: "Days to Bill (Avg)" },
  ];

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
            PROVEN IN PRODUCTION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Not a pilot. A revenue cycle running live.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Zera processes claims and manages the full revenue cycle for specialty medicine practices every single day. The numbers below are live.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-white p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: "End-to-End Automation",
              description: "From patient intake to final collection. Every step is captured, coded, and tracked.",
            },
            {
              title: "Real-Time Visibility",
              description: "See every claim status, denial, and collection in a single dashboard. No blind spots.",
            },
            {
              title: "EHR Integration",
              description: "Works seamlessly with Epic, Athena, and other major platforms your practice already uses.",
            },
            {
              title: "Provider-Controlled",
              description: "You set the rules, approve the thresholds, and stay in command. Never a black box.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-white p-6 lg:p-8"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="text-lg lg:text-xl font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
