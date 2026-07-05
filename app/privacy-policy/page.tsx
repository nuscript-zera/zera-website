"use client";

import React from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

type Section = {
  title: string;
  content?: string;
  items?: { label: string; text: string }[];
  contact?: boolean;
};

const sections: Section[] = [
  {
    title: "1. Introduction",
    content:
      'NuScript Technologies Private Limited ("NuScript", "we", "us", or "our") operates the Audryl platform (audryl.com and app.audryl.com). This Privacy Policy describes how we collect, use, store, and protect information when you use our services.',
  },
  {
    title: "2. Information We Collect",
    items: [
      {
        label: "Account Information",
        text: "When you register for Audryl, we collect your name, email address, phone number, company name, and role.",
      },
      {
        label: "Usage Data",
        text: "We collect information about how you interact with the platform, including transcription volumes, feature usage, login times, and performance metrics.",
      },
      {
        label: "Medical Audio & Transcription Data",
        text: "As a medical transcription platform, we process audio files and transcribed clinical documents on behalf of our clients. This data is processed solely to provide the transcription service and is treated with the highest security standards.",
      },
      {
        label: "Workforce Data",
        text: "For workforce-management features, we process employee information including attendance, leave records, compensation data, and payroll information as provided by the customer organization.",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use collected information to provide and improve the Audryl platform, process medical transcriptions through our AI pipeline, manage workforce functions as configured by the customer, generate analytics and reporting, communicate service updates and support, and comply with legal obligations.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures including encryption at rest and in transit (AES-256, TLS 1.3), role-based access controls, secure cloud infrastructure, regular security assessments, and audit logging of all data access.",
  },
  {
    title: "5. Data Storage & Retention",
    content:
      "Data is stored on secure cloud infrastructure. Medical audio files and transcription data are retained per the customer's configuration and applicable regulations. Workforce and payroll data is retained for the duration of the service agreement plus any legally required retention period.",
  },
  {
    title: "6. Third-Party Services",
    content:
      "Audryl uses third-party services for core functionality including speech-to-text processing, AI document formatting, cloud hosting, file storage, database management, and user authentication. Each provider maintains its own privacy policies and security certifications.",
  },
  {
    title: "7. Data Sharing",
    content:
      "We do not sell, rent, or trade your personal information. We share data only with third-party service providers necessary to operate the platform, when required by law, regulation, or legal process, and with your organization as configured by the account administrator.",
  },
  {
    title: "8. Your Rights",
    content:
      "You have the right to access your personal data, request correction of inaccurate data, request deletion of your data (subject to legal retention requirements), export your data in a portable format, and withdraw consent for optional data processing.",
  },
  {
    title: "9. Cookies",
    content:
      "We use essential cookies for authentication and session management. We do not use tracking cookies for advertising purposes.",
  },
  {
    title: "10. Jurisdiction",
    content:
      "This Privacy Policy is governed by the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu, India.",
  },
  {
    title: "11. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify registered users of material changes via email or platform notification.",
  },
  {
    title: "12. Contact",
    contact: true,
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-2">
            Last updated: June 24, 2026
          </p>
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
                        href="mailto:privacy@audryl.com"
                        className="text-primary hover:underline"
                      >
                        privacy@audryl.com
                      </a>
                    </p>
                  </div>
                )}
                {s.items && (
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li
                        key={item.label}
                        className="text-muted-foreground leading-relaxed"
                      >
                        <span className="font-semibold text-foreground">
                          {item.label}:
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
