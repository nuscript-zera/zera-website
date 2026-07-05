"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is Audryl?",
    a: "Audryl is an AI platform for medical transcription operations. It turns audio into EHR-ready clinical notes through an AI production pipeline your editors review rather than retype, with built-in QA workflows and workforce management in one system.",
  },
  {
    q: "How does Audryl help transcription companies and MTSOs?",
    a: "Audryl breaks the link between capacity and headcount. Your team reviews AI-drafted notes instead of typing from scratch, so you can process more clinical volume with the same people — improving turnaround time, quality consistency, and margins without a hiring cycle.",
  },
  {
    q: "Is Audryl HIPAA compliant?",
    a: "Yes. Audryl is architected for HIPAA from the ground up, signs a Business Associate Agreement (BAA) with every client, isolates each organization's data by tenant, and encrypts data in transit and at rest.",
  },
  {
    q: "Does Audryl replace medical transcriptionists and editors?",
    a: "No. Audryl keeps human editors in the loop. AI drafts the documentation and your team reviews and QA-scores it, which raises throughput and quality rather than removing the people who safeguard accuracy.",
  },
  {
    q: "What EHR formats and outputs does Audryl support?",
    a: "Audryl produces EHR-ready, claims-ready documentation, delivered today through a secure portal or file delivery. For enterprise clients, direct EHR integration and HL7/FHIR delivery can be built as part of onboarding, so output fits existing clinical and revenue-cycle workflows.",
  },
  {
    q: "Is Audryl proven in production?",
    a: "Yes. Audryl is in daily production now, processing real clinical documentation for 70+ diverse US healthcare organizations — hospitals, ASCs, physician groups, and clinics. This is live operational work, not a pilot or a demo.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3">
          <span className="text-primary">FAQ</span>
        </p>
        <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
          Questions, answered.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything operators ask before running their first pilot on Audryl.
        </p>

        <div className="mt-12">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-t last:border-b"
                style={{ borderColor: "#e9edf3" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
