"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const problems = [
  {
    num: "01",
    title: "Margins Under Pressure",
    desc: "Labor is the bulk of your cost base. When output is tied to manual typing speed, there's a hard ceiling on profitability — and client rates rarely move in your favor.",
  },
  {
    num: "02",
    title: "The Hiring Treadmill",
    desc: "Need to process more volume? Hire more editors. That means more salaries, more training, more management, more attrition — and the same thin margins at greater scale.",
  },
  {
    num: "03",
    title: "Turnaround Demands",
    desc: "Clients expect faster TAT every year. Meeting it with a manual workflow means overtime, weekend shifts, and burnout — or turning work away.",
  },
  {
    num: "04",
    title: "Capacity Locked to Headcount",
    desc: "In a manual model, capacity equals people. Growth means proportional cost. You can't take on a big new client without a hiring cycle that eats the margin first.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: headline (sticky on desktop) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
          <AnimatedSection>
            <p className="text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3">
              <span className="text-primary">The Squeeze</span>
            </p>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
              Operations trapped between cost and capacity.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Margins compress, hiring never stops, and clients want faster
              turnaround. In a manual model, the only way to grow is to add
              people — and people are exactly what's squeezing the margin.
            </p>
          </AnimatedSection>
          </div>

          {/* Right: numbered list */}
          <div>
            {problems.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 py-6 border-t border-slate-150 first:border-t-0 lg:first:border-t lg:first:pt-6"
                style={{ borderColor: "#e9edf3" }}
              >
                <span className="text-2xl font-bold text-slate-200 shrink-0 tabular-nums leading-none pt-0.5">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bridge line — card treatment (matches Platform cloud card) */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 lg:mt-20 rounded-2xl border border-[#E2E6EB] bg-[#F3F6FA] p-8 lg:p-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
              The way forward
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-foreground leading-snug max-w-3xl">
              There's a way to grow without hiring — break the link between
              capacity and headcount, and process more clinical work with the team
              you already have.
            </p>
          </div>
        </AnimatedSection>        
      </div>
    </section>
  );
}
