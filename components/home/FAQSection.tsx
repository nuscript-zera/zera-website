"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is Zera?",
    a: "Zera is an autonomous revenue cycle platform for ambulatory specialty medicine. It captures the encounter, generates the documentation, produces the codes, validates the claim, and prepares it for submission — in real time, in one continuous workflow, with the provider always in control.",
  },
  {
    q: "Which specialties does Zera support?",
    a: "Ophthalmology is live today — purpose-built for retina, glaucoma, cataract/refractive, and comprehensive workflows. Cardiology is in development next. The intelligence layer is shared across specialties; the vocabulary, workflow specifics, and payer rules are purpose-built per specialty.",
  },
  {
    q: "Does Zera replace my EHR?",
    a: "No. Zera is an intelligence layer, not an EHR replacement. It works alongside the systems you already run — athenahealth, eClinicalWorks, Nextech, ModMed EMA, Veradigm, Altera, and Epic (ambulatory) — and requires no staff layoffs or workflow rip-and-replace.",
  },
  {
    q: "How does Zera prevent denials?",
    a: "Five concurrent analyzers run as the note is composed — laterality enforcement, HCC condition flagging, MEAT documentation validation, ICD-10 specificity checking, and J-code unit reconciliation. Documentation issues surface to the provider before sign, not after the denial arrives weeks later.",
  },
  {
    q: "Is Zera HIPAA compliant?",
    a: "Yes. Zera is architected for HIPAA from the ground up, signs a Business Associate Agreement with every customer, deploys US-only, isolates each organization's data with customer-scoped keys, and never uses customer data to train models. A SOC 2 audit is in flight.",
  },
  {
    q: "Can Zera run the whole revenue cycle for us?",
    a: "Yes. You can run Zera yourself, or choose Zera Managed RCM — the same platform, operated by a dedicated team of certified coders, billers, and AR specialists assigned to your practice. Same software, same intelligence layer, different operational ownership.",
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
          What practices ask before booking their first Zera demo.
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
