"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { value: "70+", label: "US Healthcare Organizations", icon: Building2 },
  { value: "2x", label: "Capacity, Same Headcount", icon: Zap },
  { value: "HIPAA", label: "Compliant + BAA", icon: ShieldCheck },
  { value: "25yr+", label: "Healthcare Heritage", icon: Clock },
];

export default function StatsBar() {
  return (
    <section className="py-16 lg:py-20 border-t border-b border-border/50 bg-muted/30">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-slate-100 p-6 text-center hover:shadow-[0_4px_24px_rgba(42,111,242,0.1)] transition-all duration-400 overflow-hidden"
              style={{ boxShadow: "0 1px 12px 0 rgba(42,111,242,0.06)" }}
            >
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 shadow-sm ring-1 ring-primary/10 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                  color: "#2563eb",
                }}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
