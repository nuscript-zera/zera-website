"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
});

type Item = { label: string; description: string };
type Section = { title: string; content?: string; intro?: string; items?: Item[] };

const SECTIONS: Section[] = [
  {
    title: "HIPAA & Business Associate Status",
    content:
      "NuScript Systems, Inc. primarily operates as a Business Associate (as defined by HIPAA) when providing services to healthcare providers. Our handling of Protected Health Information (PHI) is governed by Business Associate Agreements (BAAs) executed with each client. In the event of any conflict between a BAA and this Privacy Policy, the BAA governs.",
  },
  {
    title: "Information We Collect",
    items: [
      { label: "Platform Data — Clinical, Coding & Financial", description: "Audio recordings or transcripts of clinical encounters, generated clinical documentation, ICD/CPT codes, and financial remittance data (835/277 files) used to operate the autonomous revenue cycle workflow. Audio is processed in real time. Depending on client configuration, audio files may be deleted immediately upon transcript verification — referred to as Zero-Retention mode." },
      { label: "User Account Information", description: "Standard contact and billing details required for platform access and administration." },
      { label: "Automatically Collected Information", description: "IP addresses, device identifiers, and usage logs, collected via our website and EHR-integrated Smart on FHIR applications." },
    ],
  },
  {
    title: "How We Use Your Information",
    intro: "In addition to standard operational purposes, we use information to:",
    items: [
      { label: "Train and Optimize Zera Models", description: "We use de-identified, aggregated data to improve the accuracy of our ambient listening and autonomous coding engines. We do not use identifiable PHI to train models accessible by other clients." },
      { label: "Closed-Loop Analysis", description: "Because the Zera platform processes clinical capture, coding, and claim preparation in one continuous workflow, we can link clinical intent to financial outcomes to provide predictive denial analytics and revenue intelligence." },
      { label: "EHR Integration", description: "To sync generated notes and codes directly into your system of record (e.g., Epic, Oracle/Cerner)." },
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    intro: "We do not sell or rent personal data. We share information only with the following parties, and only to the extent necessary to deliver our services:",
    items: [
      { label: "EHR Partners", description: "To facilitate the transfer of clinical and billing data into your system of record." },
      { label: "Sub-Processors", description: "HIPAA-compliant hosting providers (e.g., AWS, Azure) and specialized AI infrastructure partners, all operating under BAAs and strict confidentiality obligations." },
      { label: "Audit & Compliance Authorities", description: "To legal authorities when required by law, or in connection with SOC 2 and HIPAA compliance audits." },
    ],
  },
  {
    title: "Data Security & AI Governance",
    intro: "We implement institutional-grade safeguards across all data flows:",
    items: [
      { label: "Encryption", description: "All data is encrypted at rest using AES-256 and in transit using TLS 1.2 or higher." },
      { label: "De-identification", description: "Industry-standard de-identification protocols are applied to any data used in research or platform-wide model optimization." },
      { label: "Access Control", description: "Role-based access control (RBAC) ensures that only authorized personnel can access sensitive datasets, with access logs maintained for audit purposes." },
    ],
  },
  {
    title: "Data Retention",
    items: [
      { label: "Clinical Audio", description: "Retained only for the duration necessary to produce a verified transcript — typically less than 24 hours — unless a longer period is specified in the applicable Provider BAA." },
      { label: "Financial Records", description: "Retained in accordance with federal healthcare record retention requirements, typically 7 to 10 years." },
    ],
  },
  {
    title: "State-Specific Notices",
    content:
      "At this time, NuScript Systems, Inc. does not meet the legal thresholds that would subject it to the California Consumer Privacy Act (CCPA), the California Privacy Rights Act (CPRA), or the Colorado Privacy Act (CPA). We actively monitor our business activities against these thresholds and will update this policy if our compliance obligations change. Our Business Associate status under HIPAA remains the primary governance framework for all clinical data. If you are a California resident with questions about your data, please contact us using the information in Section 8 below.",
  },
];

function BulletItem({ label, description }: { label?: string; description: string }) {
  return (
    <li className="flex gap-3 sm:gap-4">
      <div className="flex-shrink-0 w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center mt-[3px]">
        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
      <div className="flex-1">
        {label && <h3 className="text-base font-bold text-foreground mb-1">{label}</h3>}
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </li>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="hero-surface relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <motion.div {...fadeUp(0)}>
            <SectionLabel>Legal</SectionLabel>
          </motion.div>
          <motion.h1 {...fadeUp(0.08)} className="text-4xl lg:text-[4.1rem] font-bold text-foreground mt-4 leading-[0.96] tracking-[-0.02em] text-balance max-w-4xl">
            Privacy Policy
          </motion.h1>
          <motion.p {...fadeUp(0.16)} className="text-lg text-muted-foreground mt-6">
            Effective Date: July 5, 2026
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-muted/30 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <motion.div {...fadeUp(0)} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NuScript Systems, Inc. (&ldquo;NuScript Systems&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides the{" "}
              <span className="font-semibold text-foreground">Zera platform</span> — an autonomous revenue cycle platform for ambulatory medicine that captures the clinical encounter, generates structured documentation, produces compliant codes, and prepares the validated claim in one continuous workflow. This Privacy Policy describes how we handle personal information across our website and the Zera platform.
            </p>
          </motion.div>

          <div className="space-y-14">
            {SECTIONS.map((section, idx) => (
              <motion.div key={section.title} {...fadeUp(idx * 0.04)}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{idx + 1}. {section.title}</h2>
                {section.content && <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>}
                {section.intro && <p className="text-lg text-muted-foreground leading-relaxed mb-5">{section.intro}</p>}
                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <BulletItem key={item.label} label={item.label} description={item.description} />
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0)} className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">8. Contact</h2>
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For questions, concerns, or requests related to this Privacy Policy or your data, please contact our Privacy Officer:
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-foreground font-semibold">NuScript Systems, Inc.</p>
                <p className="text-muted-foreground">Attn: Privacy Officer</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hello@zera.health" className="text-primary font-semibold hover:underline">hello@zera.health</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
