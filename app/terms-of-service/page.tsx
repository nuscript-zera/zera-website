"use client";

import React from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

type Section = { title: string; content?: string; contact?: boolean };

const sections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    content:
      'By accessing or using the Audryl platform ("Service") provided by NuScript Technologies Private Limited ("NuScript", "we", "us"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these terms.',
  },
  {
    title: "2. Service Description",
    content:
      "Audryl is a cloud-based platform providing AI-powered medical transcription, quality-assurance workflow management, and workforce-management services for medical transcription operations. The platform includes AI transcription, QA workflow tools, workforce management, reporting and analytics, and template and macro management.",
  },
  {
    title: "3. Account Registration",
    content:
      "To use Audryl, you must register for an account, provide accurate and complete information, maintain the security of your credentials, notify us immediately of any unauthorized access, and accept responsibility for all activity under your account. We reserve the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "4. Subscription & Payment",
    content:
      "Audryl operates on a hybrid pricing model consisting of a monthly base fee and a per-line processing fee. Specific pricing is as agreed in your service agreement. Payments are due monthly unless otherwise specified. We may adjust pricing with 30 days' written notice. Pilot program terms are as specified in individual agreements.",
  },
  {
    title: "5. Data Ownership & Processing",
    content:
      "You retain ownership of all data you upload to or create within Audryl, including medical audio files, transcription content, employee records, and organizational data. We process your data solely to provide the Service. We do not use your medical transcription data to train AI models without explicit consent. Upon termination, you may export your data within 30 days.",
  },
  {
    title: "6. Acceptable Use",
    content:
      "You agree not to use the Service to violate any applicable law or regulation, process data for which you do not have proper authorization, attempt to reverse-engineer any part of the platform, share account credentials with unauthorized parties, interfere with or disrupt the Service, or use the Service for any purpose other than medical transcription and related operations.",
  },
  {
    title: "7. Service Level",
    content:
      "We strive to maintain high availability for the Audryl platform. Scheduled maintenance will be communicated in advance. We are not liable for downtime due to factors beyond our reasonable control, including internet outages, third-party service failures, or force majeure events.",
  },
  {
    title: "8. AI-Generated Content",
    content:
      "Audryl uses AI to generate draft transcriptions. These drafts are intended to assist trained editors and are not a substitute for human review. The customer and its staff are responsible for reviewing and approving all AI-generated content before delivery to healthcare clients. NuScript is not liable for errors in final transcriptions that were approved by customer staff.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, NuScript's total liability under these terms shall not exceed the fees paid by you in the twelve (12) months preceding the claim. NuScript shall not be liable for indirect, incidental, special, consequential, or punitive damages.",
  },
  {
    title: "10. Indemnification",
    content:
      "You agree to indemnify and hold harmless NuScript from any claims, damages, or expenses arising from your use of the Service, your violation of these terms, or your violation of any third-party rights.",
  },
  {
    title: "11. Termination",
    content:
      "Either party may terminate the service agreement with 30 days' written notice. We may suspend or terminate access immediately if you violate these terms. Upon termination, your access will be revoked and data-retention policies as described in our Privacy Policy will apply.",
  },
  {
    title: "12. Modifications",
    content:
      "We reserve the right to modify these Terms of Service. Material changes will be communicated via email or platform notification at least 30 days before taking effect. Continued use of the Service after changes take effect constitutes acceptance of the modified terms.",
  },
  {
    title: "13. Governing Law",
    content:
      "These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu, India.",
  },
  {
    title: "14. Contact",
    contact: true,
  },
];

export default function TermsOfService() {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mt-2">Effective: June 24, 2026</p>
        </AnimatedSection>

        <div className="mt-14 space-y-10">
          {sections.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.03}>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">
                  {s.title}
                </h2>
                {s.content && (
                  <p className="text-muted-foreground leading-relaxed">
                    {s.content}
                  </p>
                )}
                {s.contact && (
                  <div className="text-muted-foreground leading-relaxed space-y-1">
                    <p className="font-semibold text-foreground">
                      NuScript Technologies Private Limited
                    </p>
                    <p>Coimbatore, Tamil Nadu, India</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:info@audryl.com"
                        className="text-primary hover:underline"
                      >
                        info@audryl.com
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
