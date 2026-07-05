"use client";

import React, { useState, useEffect } from "react";
import { Clock, Users, Target, Mail, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/shared/AnimatedSection";

const LEAD_EMAIL = "marketing@audryl.com";

type Intent = "demo" | "pilot";

type FormState = {
  fullName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  volume: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  volume: "",
  message: "",
};

const copy: Record<
  Intent,
  { eyebrow: string; heading: string; sub: string; benefits: string[]; button: string }
> = {
  demo: {
    eyebrow: "Request a demo",
    heading: "See Audryl in action.",
    sub: "Share a few details about your operation — volume, current setup, and goals. We'll walk you through both engines, show the AI pipeline live, and talk through the capacity and margin impact for your operation.",
    benefits: [
      "30-minute personalized walkthrough",
      "Both engines shown live — production and management",
      "No commitment — just a conversation",
    ],
    button: "Request demo",
  },
  pilot: {
    eyebrow: "Start your pilot",
    heading: "Run Audryl on your own work.",
    sub: "A 14-day pilot on your own dictation — full access, no credit card. The fastest way to see the capacity shift is to put real work through it with your own team and clients.",
    benefits: [
      "14-day pilot on your own work",
      "Full platform access, no credit card",
      "See the capacity shift with your own team",
    ],
    button: "Start 14-day pilot",
  },
};

/**
 * Single submission entry point.
 * Today: composes a structured email to marketing@audryl.com via mailto.
 * To move to server-side capture later, replace ONLY this function body with a
 * fetch() to a Cloudflare Worker (e.g. POST /api/contact).
 */
function submitLead(intent: Intent, form: FormState) {
  const subject = `${intent === "pilot" ? "Pilot request" : "Demo request"} — ${form.company || form.fullName}`;
  const lines = [
    `Intent: ${intent === "pilot" ? "Start a pilot" : "Request a demo"}`,
    `Name: ${form.fullName}`,
    `Company: ${form.company}`,
    `Role: ${form.role || "—"}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || "—"}`,
    `Monthly volume: ${form.volume || "—"}`,
    "",
    "Message:",
    form.message || "—",
  ];
  const body = lines.join("\r\n");
  const href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

export default function RequestDemo() {
  const [intent, setIntent] = useState<Intent>("demo");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Preset intent from ?intent=pilot without requiring a Suspense boundary.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intent") === "pilot") setIntent("pilot");
  }, []);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.company) {
      setError("Please fill in your name, company, and email.");
      return;
    }
    setError("");
    submitLead(intent, form);
    setSubmitted(true);
  };

  const c = copy[intent];

  return (
    <section className="pt-[7.5rem] pb-[4.5rem] lg:pt-[9rem] lg:pb-[6.5rem]">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left content */}
          <AnimatedSection>
            <p className="inline-flex items-center gap-2 text-[0.68rem] font-mono font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {c.eyebrow}
            </p>

            <h1 className="text-4xl lg:text-[3.7rem] font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-balance">
              {c.heading}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              {c.sub}
            </p>

            <div className="mt-10 space-y-4">
              {c.benefits.map((b, i) => {
                const Icon = [Clock, Users, Target][i] ?? Target;
                return (
                  <div key={b} className="flex items-center gap-3.5">
                    <span
                      className="inline-flex items-center justify-center h-[2.1rem] w-[2.1rem] rounded-lg shrink-0"
                      style={{ backgroundColor: "#F6F8FF", border: "1px solid #B2C7FE" }}
                    >
                      <Icon
                        className="h-[1.15rem] w-[1.15rem]"
                        strokeWidth={2}
                        style={{ color: "oklch(0.488 0.217 264)" }}
                      />
                    </span>
                    <span className="text-[0.95rem] font-medium text-foreground">{b}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-[#E2E6EB] bg-[#F3F6FA] p-6">
              <p className="text-[0.8rem] text-muted-foreground">Prefer email?</p>
              <a
                href={`mailto:${LEAD_EMAIL}`}
                className="inline-flex items-center gap-2 mt-1.5 text-[0.95rem] font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {LEAD_EMAIL}
              </a>
            </div>

            <div className="mt-8 pt-3 border-t border-[#E2E6EB]">
              <p className="text-[0.66rem] font-mono font-medium uppercase tracking-wider leading-relaxed text-muted-foreground">
                HIPAA-compliant with BAA · 90+ specialists on the platform daily
              </p>
            </div>
          </AnimatedSection>

          {/* Right form */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-[#E2E6EB] bg-white p-8 shadow-xl shadow-black/5">
              {/* Intent toggle */}
              <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-muted mb-6">
                {(["demo", "pilot"] as Intent[]).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => {
                      setIntent(opt);
                      setSubmitted(false);
                    }}
                    className={`py-2 text-[0.85rem] font-semibold rounded-lg transition-colors ${
                      intent === opt
                        ? "bg-white text-primary shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {opt === "demo" ? "Request a demo" : "Start a pilot"}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-primary mb-5"
                    style={{ backgroundColor: "#F6F8FF", border: "1px solid #B2C7FE" }}
                  >
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2">Almost there</h2>
                  <p className="text-[0.9rem] text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Your email app should have opened with the details ready to
                    send. If it didn&rsquo;t, email us directly at{" "}
                    <a
                      href={`mailto:${LEAD_EMAIL}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {LEAD_EMAIL}
                    </a>
                    .
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl border-border hover:bg-muted"
                  >
                    Back to form
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-foreground mb-6">
                    Tell us about your operation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Full Name *</Label>
                        <Input
                          value={form.fullName}
                          onChange={update("fullName")}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Company *</Label>
                        <Input
                          value={form.company}
                          onChange={update("company")}
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Your Role</Label>
                        <Input
                          value={form.role}
                          onChange={update("role")}
                          placeholder="e.g. Owner, Operations Head"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Email *</Label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Phone</Label>
                        <Input
                          value={form.phone}
                          onChange={update("phone")}
                          placeholder="Optional"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Monthly Volume</Label>
                        <Input
                          value={form.volume}
                          onChange={update("volume")}
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[0.8rem]">Anything else?</Label>
                      <Textarea
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Goals, challenges, or specific questions..."
                        className="h-28"
                      />
                    </div>

                    {error && <p className="text-[0.85rem] text-destructive">{error}</p>}

                    <Button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-xl font-semibold gap-2 h-12"
                    >
                      {c.button}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
