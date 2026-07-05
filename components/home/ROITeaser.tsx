"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

/* Indian-format currency: crore / lakh / grouped rupees. */
const fmtINR = (n: number): string => {
  if (!isFinite(n) || n <= 0) return "₹0";
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};

const fmtNum = (n: number): string =>
  !isFinite(n) || n < 0 ? "0" : Math.round(n).toLocaleString("en-IN");

// Shared assumptions — kept in lockstep with the For-MTSOs calculator.
const MULTIPLIER = 2; // ~2× editor output with Audryl
const DAYS_PER_MONTH = 22;
const REVENUE_PER_LINE = 6.6; // ₹ ≈ $0.07/line (Indian MTSO avg; 6–9¢ range)
const LINES_PER_EDITOR_HOUR = 150;
const DAYS_PER_WEEK = 5;

export default function ROITeaser() {
  const [lines, setLines] = useState(15000);

  // One productivity gain, expressed two ways (spend it on time OR growth):
  const freedHoursPerWeek =
    ((lines * (1 - 1 / MULTIPLIER)) / LINES_PER_EDITOR_HOUR) * DAYS_PER_WEEK;
  const addedMonthlyValue =
    lines * (MULTIPLIER - 1) * DAYS_PER_MONTH * REVENUE_PER_LINE;

  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-center">
          {/* Left: copy */}
          <AnimatedSection>
            <p className="text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3">
              <span className="text-primary">The ROI Converter</span>
            </p>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
              Prove the capacity you&rsquo;ll reclaim.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Drag the slider to your team&rsquo;s daily line volume. See the
              editor-hours you free up every week — or the extra client capacity
              you unlock without adding a single hire.
            </p>
          </AnimatedSection>

          {/* Right: calculator card */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border-[0.8px] border-[#E2E6EB] bg-white p-6 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.3)]">
              <label htmlFor="roi-lines" className="block">
                <span className="text-[0.95rem] font-medium text-muted-foreground">
                  How many lines does your team process per day?
                </span>
                <span className="mt-2 block text-[2.5rem] lg:text-[3.25rem] font-semibold leading-none tabular-nums text-foreground">
                  {fmtNum(lines)}
                </span>
              </label>
              <input
                id="roi-lines"
                type="range"
                min={2000}
                max={80000}
                step={500}
                value={lines}
                onChange={(e) => setLines(parseInt(e.target.value, 10))}
                className="mt-4 w-full cursor-pointer accent-primary"
              />
              <div className="mt-2 flex justify-between font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
                <span>2,000 lines/day</span>
                <span>80,000 lines/day</span>
              </div>

              {/* Two tiles — same gain, two ways to spend it */}
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#E2E6EB] bg-[#F3F6FA] p-5">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Editor-hours reclaimed / week
                  </p>
                  <p className="mt-1.5 text-[1.5rem] lg:text-[1.8rem] font-semibold tabular-nums text-foreground">
                    {fmtNum(freedHoursPerWeek)}
                  </p>
                  <p className="mt-1 text-[0.7rem] text-muted-foreground">
                    if you hold volume flat
                  </p>
                </div>
                <div className="rounded-xl border border-[#cfddff] bg-[#F6F8FF] p-5">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-primary">
                    Added monthly capacity value*
                  </p>
                  <p className="mt-1.5 text-[1.5rem] lg:text-[1.8rem] font-semibold tabular-nums text-primary">
                    <span className="text-[0.7em] font-medium mr-0.5">₹</span>
                    {fmtINR(addedMonthlyValue).replace("₹", "")}
                  </p>
                  <p className="mt-1 text-[0.7rem] text-muted-foreground">
                    if you grow into it
                  </p>
                </div>
              </div>

              {/* Button + footnote */}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/for-mtsos#run-your-numbers"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-[0.95rem] shadow-lg shadow-primary/25 transition-colors shrink-0"
                >
                  Map my capacity plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="font-mono text-[0.65rem] text-muted-foreground leading-relaxed sm:text-right sm:max-w-[16rem]">
                  *Illustrative. Results vary by specialty, client specs, and team adoption.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
