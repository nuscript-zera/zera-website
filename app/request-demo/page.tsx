"use client";

import React, { useState, useEffect } from "react";
import { Clock, Users, Target, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/shared/AnimatedSection";

const LEAD_EMAIL = "hello@zera.health";

type Intent = "demo" | "waitlist";

type FormState = {
  fullName: string;
  practice: string;
  role: string;
  email: string;
  phone: string;
  specialty: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "", practice: "", role: "", email: "", phone: "", specialty: "", message: "",
};

const copy: Record<Intent, { eyebrow: string; heading: string; sub: string; benefits: string[] }> = {
  demo: {
    eyebrow: "Book an ophthalmology demo",
    heading: "See Zera on a real encounter.",
    sub: "Share a few details about your practice. We'll walk you through the platform live — capture, documentation, coding, and claim validation — and show what Note → Code → Claim looks like on an ophthalmology encounter.",
    benefits: [
      "30-minute personalized walkthrough",
      "One encounter, end to end — live",
      "No commitment — just a conversation",
    ],
  },
  waitlist: {
    eyebrow: "Join the cardiology waitlist",
    heading: "Cardiology is coming next.",
    sub: "The same autonomous platform, purpose-built for ambulatory cardiology, is in development. Join the waitlist and we'll reach out as we open early access to cardiology practices.",
    benefits: [
      "Early access as cardiology opens",
      "Same engine, cardiology-specific training",
      "Priority onboarding for waitlist practices",
    ],
  },
};

function submitLead(intent: Intent, form: FormState) {
  const subject = `${intent === "waitlist" ? "Cardiology waitlist" : "Ophthalmology demo request"} — ${form.practice || form.fullName}`;
  const lines = [
    `Intent: ${intent === "waitlist" ? "Cardiology waitlist" : "Ophthalmology demo"}`,
    `Name: ${form.fullName}`,
    `Practice: ${form.practice}`,
    `Role: ${form.role || "—"}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || "—"}`,
    `Specialty / subspecialty mix: ${form.specialty || "—"}`,
    "",
    "Message:",
    form.message || "—",
  ];
  const body = lines.join("\r\n");
  window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function RequestDemo() {
  const [intent, setIntent] = useState<Intent>("demo");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("interest") === "cardiology-waitlist") setIntent("waitlist");
  }, []);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.practice) {
      setError("Please fill in your name, practice, and email.");
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

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">{c.sub}</p>

            <div className="mt-10 space-y-4">
              {c.benefits.map((b, i) => {
                const Icon = [Clock, Users, Target][i] ?? Target;
                return (
                  <div key={b} className="flex items-center gap-3.5">
                    <span className="inline-flex items-center justify-center h-[2.1rem] w-[2.1rem] rounded-lg shrink-0" style={{ backgroundColor: "#F6F8FF", border: "1px solid #B2C7FE" }}>
                      <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} style={{ color: "oklch(0.488 0.217 264)" }} />
                    </span>
                    <span className="text-[0.95rem] font-medium text-foreground">{b}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-[#E2E6EB] bg-[#F3F6FA] p-6">
              <p className="text-[0.8rem] text-muted-foreground">Prefer email?</p>
              <a href={`mailto:${LEAD_EMAIL}`} className="inline-flex items-center gap-2 mt-1.5 text-[0.95rem] font-semibold text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-4 h-4" />
                {LEAD_EMAIL}
              </a>
            </div>

            <div className="mt-8 pt-3 border-t border-[#E2E6EB]">
              <p className="text-[0.66rem] font-mono font-medium uppercase tracking-wider leading-relaxed text-muted-foreground">
                HIPAA-compliant with BAA · Ophthalmology live · Cardiology in development
              </p>
            </div>
          </AnimatedSection>

          {/* Right form */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-[#E2E6EB] bg-white p-8 shadow-xl shadow-black/5">
              <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-muted mb-6">
                {(["demo", "waitlist"] as Intent[]).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => { setIntent(opt); setSubmitted(false); }}
                    className={`py-2 text-[0.85rem] font-semibold rounded-lg transition-colors ${intent === opt ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {opt === "demo" ? "Ophthalmology demo" : "Cardiology waitlist"}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-primary mb-5" style={{ backgroundColor: "#F6F8FF", border: "1px solid #B2C7FE" }}>
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2">Almost there</h2>
                  <p className="text-[0.9rem] text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Your email app should have opened with the details ready to send. If it didn&rsquo;t, email us directly at{" "}
                    <a href={`mailto:${LEAD_EMAIL}`} className="text-primary font-medium hover:underline">{LEAD_EMAIL}</a>.
                  </p>
                  <Button type="button" variant="outline" onClick={() => setSubmitted(false)} className="mt-6 rounded-xl border-border hover:bg-muted">
                    Back to form
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-foreground mb-6">Tell us about your practice</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Full Name *</Label>
                        <Input value={form.fullName} onChange={update("fullName")} placeholder="Dr. Jane Smith" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Practice *</Label>
                        <Input value={form.practice} onChange={update("practice")} placeholder="Retina Partners" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Role</Label>
                        <Input value={form.role} onChange={update("role")} placeholder="Physician / Administrator" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Email *</Label>
                        <Input type="email" value={form.email} onChange={update("email")} placeholder="jane@practice.com" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Phone</Label>
                        <Input value={form.phone} onChange={update("phone")} placeholder="(555) 123-4567" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[0.8rem]">Specialty / subspecialty mix</Label>
                        <Input value={form.specialty} onChange={update("specialty")} placeholder="Retina, glaucoma…" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[0.8rem]">Anything you'd like us to know?</Label>
                      <Textarea value={form.message} onChange={update("message")} rows={4} placeholder="Providers, EHR, current billing setup…" />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold h-12">
                      {intent === "demo" ? "Book Ophthalmology Demo" : "Join Cardiology Waitlist"}
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
