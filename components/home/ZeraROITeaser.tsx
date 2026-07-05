"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ZeraROITeaser() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-border bg-gradient-to-br from-blue-50 to-white p-8 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                The financial impact.
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                For a 10-provider specialty practice, Zera typically delivers:
              </p>
              <ul className="space-y-4">
                {[
                  { title: "$240K–380K", desc: "Additional annual revenue from improved collections" },
                  { title: "15+ hours/week", desc: "Recovered from billing staff, redirected to growth" },
                  { title: "92% reduction", desc: "In claim denials and rework" },
                  { title: "ROI in 6–8 months", desc: "Typical payback period for mid-sized practices" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="h-1 w-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                  Before Zera
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Days to Submission
                    </div>
                    <div className="text-2xl font-bold text-foreground">9.2 days</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Collection Rate
                    </div>
                    <div className="text-2xl font-bold text-foreground">84%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Denial Rate
                    </div>
                    <div className="text-2xl font-bold text-foreground">12%</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-primary border-2 p-6 shadow-lg shadow-primary/10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                  After Zera
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-primary font-semibold mb-1">
                      Days to Submission ↓
                    </div>
                    <div className="text-2xl font-bold text-foreground">2.1 days</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-semibold mb-1">
                      Collection Rate ↑
                    </div>
                    <div className="text-2xl font-bold text-foreground">94%</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-semibold mb-1">
                      Denial Rate ↓
                    </div>
                    <div className="text-2xl font-bold text-foreground">1%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
