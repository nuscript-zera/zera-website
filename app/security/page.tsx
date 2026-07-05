"use client";

import React from "react";
import {
  Lock,
  Boxes,
  KeyRound,
  ScrollText,
  FileSignature,
  ShieldCheck,
  Server,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import PipelineConsole, { ConsoleStage } from "@/components/shared/PipelineConsole";
import PageCTA from "@/components/shared/PageCTA";

const controlStages: ConsoleStage[] = [
  { num: "01", icon: Lock, label: "Encryption", tag: "In transit & at rest", desc: "Industry-standard protocols protect data end to end." },
  { num: "02", icon: Boxes, label: "Tenant isolation", tag: "Isolated", desc: "No shared buckets, no cross-tenant access." },
  { num: "03", icon: KeyRound, label: "Access control", tag: "RBAC", desc: "Least-privilege roles across editors, QA, and admins." },
  { num: "04", icon: ScrollText, label: "Audit trail", tag: "Logged", desc: "Every action recorded and reviewable." },
  { num: "05", icon: FileSignature, label: "Agreement", tag: "BAA", desc: "A Business Associate Agreement with every client." },
];

const controls = [
  {
    icon: ShieldCheck,
    title: "Compliant by design",
    desc: "Architected for HIPAA from the ground up — not bolted on after the fact.",
  },
  {
    icon: Lock,
    title: "Encrypted end to end",
    desc: "Industry-standard protocols protect protected health information in transit and at rest.",
  },
  {
    icon: Boxes,
    title: "Isolated by tenant",
    desc: "No shared buckets and no cross-tenant access — each client's data stands alone.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    desc: "Least-privilege permissions across editors, QA reviewers, and administrators.",
  },
  {
    icon: ScrollText,
    title: "Full audit trail",
    desc: "Every action is logged and reviewable, so nothing happens off the record.",
  },
  {
    icon: Server,
    title: "Hardened infrastructure",
    desc: "Data hosted on monitored, redundant US cloud infrastructure.",
  },
];

export default function Security() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[7.5rem] pb-[4.5rem] lg:pt-[9rem] lg:pb-[6.5rem]">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <AnimatedSection>
              <p className="inline-flex items-center gap-2 text-[0.68rem] font-mono font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Security &amp; Compliance
              </p>
              <h1 className="text-4xl lg:text-[4.1rem] font-bold text-foreground leading-[0.96] tracking-[-0.02em] text-balance">
                Built for the trust clinical data demands.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Audryl handles protected health information end to end —
                encrypted, tenant-isolated, access-controlled, and fully audited.
                HIPAA compliance and a signed BAA come standard with every client.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/request-demo?intent=pilot">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 gap-2 px-8 rounded-xl font-semibold text-base h-12">
                    Start free pilot
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="/request-demo">
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted px-8 rounded-xl font-semibold text-base h-12">
                    Book a demo
                  </Button>
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E6EB]">
                <p className="text-[0.66rem] font-mono font-medium uppercase tracking-wider leading-relaxed text-muted-foreground">
                  HIPAA-compliant · BAA available for every client
                </p>
              </div>
            </AnimatedSection>

            {/* Right: security-controls console */}
            <AnimatedSection delay={0.15}>
              <PipelineConsole command="audryl://security-controls" stages={controlStages} />
              <p className="mt-4 font-mono text-[0.65rem] text-muted-foreground">
                The controls every job passes through — before, during, and after processing.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Controls grid — dark */}
      <section className="max-lg:py-[5.3125rem] lg:py-[7.5rem]" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-3" style={{ color: "#60a5fa" }}>
              Security controls
            </span>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-white leading-[0.98] tracking-[-0.02em] text-balance max-w-3xl">
              Protected at every layer of the platform.
            </h2>
          </AnimatedSection>
          <div className="mt-12 rounded-2xl overflow-hidden border border-white/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {controls.map((c, i) => (
                <AnimatedSection key={c.title} delay={i * 0.05}>
                  <div className="h-full p-8" style={{ backgroundColor: "#0f172a" }}>
                    <span
                      className="flex h-[2.1rem] w-[2.1rem] items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(96,165,250,0.12)", color: "#60a5fa" }}
                    >
                      <c.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-white">{c.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-white/55">{c.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAA / compliance — light */}
      <section className="max-lg:py-[5.3125rem] lg:py-[7.5rem] bg-muted/40">
        <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
          <AnimatedSection>
            <SectionLabel>The Agreement</SectionLabel>
            <h2 className="text-[2.1rem] lg:text-[2.9rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance max-w-4xl">
              We sign a Business Associate Agreement with every client.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Clinical data requires trust. Before a single file moves, the BAA
              is in place — so the handling of protected health information is
              never an open question.
            </p>
          </AnimatedSection>

          <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground">
            <span>HIPAA-compliant</span>
            <span aria-hidden="true">·</span>
            <span>BAA available for every client</span>
            <span aria-hidden="true">·</span>
            <span>Tenant-isolated</span>
            <span aria-hidden="true">·</span>
            <span>Fully audited</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading="See how Audryl handles your data."
        subcopy="Start a 14-day pilot — BAA in place and your data isolated from day one."
      />
    </>
  );
}
