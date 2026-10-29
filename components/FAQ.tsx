"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Zera Revenue?",
    a: "Zera Revenue is Zera's coding and claims product for specialty medicine. It codes the visit from the note, checks the codes against the documentation before signing, and prepares the claim, with the provider always in control. It starts with ophthalmology, including retina, in early 2027.",
  },
  {
    q: "How does Zera Revenue relate to Zera Scribe?",
    a: "Zera Scribe, available now for primary care and psychiatry at zerascribe.com, writes the note and flags what's missing before the doctor signs. Zera Revenue builds on the same system to carry the visit through coding to the claim. Practices that move from Zera Scribe to Zera Revenue switch plans; they don't pay for both.",
  },
  {
    q: "Which specialties does Zera Revenue support?",
    a: "Ophthalmology first, with retina as the starting point, followed by glaucoma, cataract/refractive and comprehensive workflows. More specialties follow one at a time, each with its own vocabulary, workflows and payer rules.",
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
  {
    q: "Can Zera run the whole revenue cycle for us?",
    a: "Yes. Run Zera Revenue yourself, or choose Zera Managed RCM — the same platform, operated for you by a dedicated revenue-cycle team. Same software, same intelligence layer; you choose who runs the operation.",
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
