"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const interests = [
  { v: "demo", label: "Book a demo — see Zera on my encounters" },
  { v: "pilot", label: "Start a 90-day pilot" },
  { v: "founding", label: "Founding cohort — early access (retina / specialty)" },
  { v: "partnership", label: "Partnership or affiliate RCM" },
  { v: "investment", label: "Investment" },
  { v: "other", label: "Something else" },
];

export default function ContactForm() {
  const [interest, setInterest] = useState("demo");
  const [name, setName] = useState("");
  const [practice, setPractice] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const to = "hello@zera.health";
    const label = interests.find((i) => i.v === interest)?.label ?? "Enquiry";
    const subject = `[${label}]${name ? ` — ${name}` : ""}${practice ? ` · ${practice}` : ""}`;
    const body =
      `Interested in: ${label}\n` +
      `Name & role: ${name}\n` +
      `Practice / organization: ${practice}\n` +
      `Work email: ${email}\n` +
      `Phone: ${phone || "—"}\n\n` +
      `${message}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="cform" onSubmit={submit}>
      <div className="field">
        <label htmlFor="cf-interest">I&apos;m interested in</label>
        <select id="cf-interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
          {interests.map((i) => (
            <option key={i.v} value={i.v}>
              {i.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-name">Name &amp; role</label>
        <input id="cf-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Dr. Jane Doe, Practice Administrator" />
      </div>
      <div className="field">
        <label htmlFor="cf-practice">Practice / organization</label>
        <input id="cf-practice" value={practice} onChange={(e) => setPractice(e.target.value)} required placeholder="e.g. Coastal Retina Associates" />
      </div>
      <div className="two">
        <div className="field">
          <label htmlFor="cf-email">Work email</label>
          <input id="cf-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@practice.com" />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Phone <span className="opt">(optional)</span></label>
          <input id="cf-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 555 000 0000" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">What you&apos;re trying to accomplish</label>
        <textarea id="cf-msg" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="A few lines on your specialty, provider count, and where revenue is leaking today." />
      </div>
      <button type="submit" className="btn btn-primary">
        Send inquiry
      </button>
      <p className="cform-note">We respond within one business day. Opens your email client with the message ready to send.</p>
    </form>
  );
}
