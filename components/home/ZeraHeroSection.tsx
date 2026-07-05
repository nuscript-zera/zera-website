"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ZeraHeroSection() {
  return (
    <section className="hero-surface relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-primary"
          >
            Autonomous Revenue Cycle Platform · Ambulatory Medicine
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Note → Code → Claim.{" "}
            <br className="hidden sm:block" />
            One AI. Zero handoffs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl"
          >
            Every encounter — documented, coded, scrubbed, and claim-ready — in one workflow, in real time, before the patient leaves the exam lane.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="/request-demo?interest=ophthalmology-demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all gap-2 px-8 rounded-xl font-semibold text-base h-12"
              >
                Book an Ophthalmology Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="/platform">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted gap-2 px-8 rounded-xl font-semibold text-base h-12"
              >
                Explore the Platform
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground mt-10"
          >
            {["HIPAA Compliant", "BAA Available", "SOC 2 Aligned"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
