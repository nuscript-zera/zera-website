"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Zera?",
    a: "Zera is an autonomous revenue platform for ambulatory specialty medicine. It captures the encounter, generates the documentation, and produces the codes in one real-time workflow — with the provider always in control. Note and Code are live today; the full claim and RCM engines are built and wiring into the platform now.",
  },
  {
    q: "Which specialties does Zera support?",
    a: "Ophthalmology is live today — purpose-built for retina, glaucoma, cataract/refractive, and comprehensive workflows, with retina as our near-term focus. Cardiology is next. The intelligence layer is shared across specialties; the vocabulary, workflows, and payer rules are purpose-built for each one.",
  },
  {
    q: "Does Zera replace my EHR?",
    a: "No. Zera is an intelligence layer, not an EHR replacement. It runs alongside the systems you already own — no rip-and-replace, no workflow disruption, no staff layoffs. Zera produces output in six EHR-ready formats today, with direct, real-time integrations rolling out.",
  },
  {
    q: "How does Zera prevent denials?",
    a: "Five checks run concurrently as the note is composed: laterality enforcement, HCC condition flagging, MEAT documentation validation, ICD-10 specificity checking, and J-code unit reconciliation. Issues surface to the provider before they sign — not after a denial arrives weeks later.",
  },
  {
    q: "Is Zera HIPAA compliant?",
    a: "Yes. Zera signs a Business Associate Agreement with every practice, deploys US-only, and isolates each organization's data with customer-scoped keys. We are SOC 2 Type I certified, with Type II in progress. Your data is never used to train shared models — a private, per-provider learning loop personalizes Zera to each clinician.",
  },
  {
    q: "Can Zera run the whole revenue cycle for us?",
    a: "Yes. Run Zera yourself, or choose Zera Managed RCM — the same platform, operated for you by a dedicated revenue-cycle team. Same software, same intelligence layer; you choose who runs the operation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faqlist reveal">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className="faqitem" key={i} data-open={isOpen}>
            <button
              className="faqq"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{f.q}</span>
              <svg className="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="faqa">
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
