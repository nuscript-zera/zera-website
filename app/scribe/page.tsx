import type { Metadata } from "next";
import { BleedHead } from "@/components/Shared";

const TRIAL_URL = "https://zerascribe.com";
const PRICING_URL = "https://zerascribe.com/#pricing";

const description =
  "Zera Scribe is the AI medical scribe for primary care and psychiatry. It turns visits or dictation into structured notes and flags gaps that could cost you at billing before you sign. 14 days free, no credit card.";

export const metadata: Metadata = {
  title: { absolute: "Zera Scribe: AI medical scribe for primary care and psychiatry | Zera" },
  description,
  keywords: [
    "AI medical scribe",
    "AI scribe for primary care",
    "AI scribe for psychiatry",
    "AI scribe for behavioral health",
    "ambient clinical documentation",
    "documentation gap checks",
    "Zera Scribe",
  ],
  alternates: { canonical: "https://zera.health/scribe" },
  openGraph: {
    type: "website",
    url: "https://zera.health/scribe",
    siteName: "Zera",
    title: "Zera Scribe: AI medical scribe for primary care and psychiatry",
    description,
    images: [{ url: "/og-image.png?v=3", width: 1200, height: 630, alt: "Zera Scribe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zera Scribe: AI medical scribe for primary care and psychiatry",
    description,
    images: ["/og-image.png?v=3"],
  },
};

const WHO = [
  { h: "Primary care practices", p: "Family medicine, internal medicine and their clinicians." },
  { h: "Psychiatry and behavioral health practices", p: "Psychiatrists, psychiatric NPs and therapists." },
  { h: "Independent practices", p: "Small and mid-sized practices that want better notes without changing their EHR." },
];

const FEATURES = [
  "Ambient recording and dictation",
  "SOAP, DAP, BIRP, GIRP and custom templates",
  "Documentation gap checks before you sign",
  "Copy notes into your EHR, or export HL7, C-CDA or FHIR files",
  "Optional Professional Review",
  "BAA included",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function TrialButton() {
  return (
    <a href={TRIAL_URL} className="btn btn-primary">
      Start free trial at zerascribe.com <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

export default function ScribePage() {
  return (
    <>
      <BleedHead
        eyebrow="Zera Scribe"
        title={
          <>
            Get the note right, <span className="accent">not just get it written.</span>
          </>
        }
        sub="Zera Scribe is the AI medical scribe for primary care and psychiatry. It turns visits or dictation into structured notes and flags gaps that could cost you at billing before you sign. When you want a second set of eyes, send the note for Professional Review."
        image="/hero-scribe.jpg?v=1"
        imageAlt="A physician talking with a patient across the desk"
      >
        <div className="cta">
          <TrialButton />
          <span className="ctanote">14 days free. No credit card.</span>
        </div>
      </BleedHead>

      {/* Who it's for */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <h2>Who it&rsquo;s for</h2>
          </div>
          <div className="pillars">
            {WHO.map((w) => (
              <div className="pillar reveal" key={w.h}>
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <h2>What you get</h2>
          </div>
          <div className="agrid scribe-features reveal">
            {FEATURES.map((f) => (
              <div className="analyzer" key={f}>
                <div className="an">
                  <Check /> {f}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start / pricing */}
      <section className="section light scribe-end">
        <div className="wrap">
          <div className="scribe-cta reveal">
            <TrialButton />
            <p className="scribe-price">
              <a href={PRICING_URL}>See plans and pricing at zerascribe.com.</a>
            </p>
          </div>
          <p className="scribe-part">Zera Scribe is part of the Zera platform by NuScript Systems, Inc.</p>
        </div>
      </section>
    </>
  );
}
