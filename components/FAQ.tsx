"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Zera Revenue?",
    a: "Zera Revenue is Zera's coding and claims product for specialty medicine. It codes the visit from the note, checks the codes against the documentation before signing, and prepares the claim, with the provider always in control. It launches in 2027, one specialty at a time.",
  },
  {
    q: "How does Zera Revenue relate to Zera Scribe?",
    a: "Zera Scribe, available now for primary care and psychiatry at zerascribe.com, with ophthalmology and cardiology next, writes the note and flags what's missing before the doctor signs. Zera Revenue builds on the same system to carry the visit through coding to the claim. Practices that move from Zera Scribe to Zera Revenue switch plans; they don't pay for both.",
  },
  {
    q: "Which specialties does Zera Revenue support?",
    a: "Primary care, psychiatry, ophthalmology and cardiology. Zera Revenue launches in each one at a time during 2027, built around that specialty's vocabulary, workflows and payer rules. Every launch includes both coding and claims.",
  },
  {
    q: "Does Zera replace my EHR?",
    a: "No. Zera is an intelligence layer, not an EHR replacement. It runs alongside the systems you already own — no rip-and-replace, no workflow disruption. Zera produces output in six EHR-ready formats today, with direct integrations rolling out.",
  },
  {
    q: "How does Zera Revenue prevent denials?",
    a: "Five checks run as the note is composed: laterality, HCC condition flagging, MEAT documentation validation, ICD-10 specificity and J-code unit reconciliation. Issues surface to the provider before they sign — not after a denial arrives weeks later.",
  },
  {
    q: "Is Zera HIPAA compliant?",
    a: "Yes. Zera signs a Business Associate Agreement with every practice, deploys US-only, and isolates each organization's data with customer-scoped keys. We are SOC 2 Type I certified, with Type II in progress. Your data is never used to train shared models — a private, per-provider learning loop personalizes Zera to each clinician.",
  },
];

export type FaqItem = { q: string; a: string };

export default function FAQ({ items = faqs }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faqlist reveal">
      {items.map((f, i) => {
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
