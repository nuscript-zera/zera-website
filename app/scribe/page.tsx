import type { Metadata } from "next";
import { Fragment } from "react";
import { BleedHead } from "@/components/Shared";
import FAQ, { type FaqItem } from "@/components/FAQ";

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

const GAPS = [
  {
    area: "Psychiatry",
    gap: "Psychotherapy time isn’t documented separately from medication management.",
    why: "Psychotherapy add-on codes are billed by time, separately from the E/M visit.",
    actions: ["Add Time", "Send for Review", "Sign Anyway"],
  },
  {
    area: "Primary care",
    gap: "Chronic kidney disease is mentioned, but the stage isn’t documented.",
    why: "The stage is needed for a specific diagnosis code.",
    actions: ["Add Stage", "Send for Review", "Sign Anyway"],
  },
];

const STEPS = [
  {
    k: "Capture",
    h: "Record or dictate",
    p: "Record the visit with the patient’s consent, or dictate your findings afterward. Either way works with every note format.",
  },
  {
    k: "Review",
    h: "Your note, ready",
    p: "A structured note in SOAP, DAP, BIRP, GIRP or your own template. For recorded visits, each detail links back to the moment it was said.",
  },
  {
    k: "Sign",
    h: "Catch the gaps, then sign",
    p: "Fix what’s flagged or send the note for Professional Review. Then copy it into your EHR.",
  },
];

const WHO = [
  { h: "Primary care practices", p: "Family medicine, internal medicine and their clinicians." },
  { h: "Psychiatry and behavioral health practices", p: "Psychiatrists and psychiatric NPs and PAs." },
  { h: "Independent practices", p: "Small and mid-sized practices that want better notes without changing their EHR." },
];

const FEATURES = [
  "Ambient recording and dictation",
  "SOAP, DAP, BIRP, GIRP and custom templates",
  "Documentation gap checks before you sign",
  "Copy notes into your EHR, or export HL7, C-CDA or FHIR files",
  "Optional Professional Review",
  "Problems caught before you sign, not found in a chart audit afterward",
];

const TRUST = [
  { t: "BAA before patient data", p: "Your Business Associate Agreement is in place at signup, before any patient information is processed." },
  { t: "SOC 2 Type I complete", p: "Independently assessed security controls, with SOC 2 Type II in progress." },
  { t: "US data storage", p: "Data is stored and processed in the United States, kept separate for each practice." },
  { t: "Never used to train shared models", p: "Patient information is not used to train shared AI models, and it is never sold." },
  { t: "You approve every note", p: "Zera Scribe never finalizes or sends a note on its own. The clinician signs." },
  { t: "Encrypted and access-controlled", p: "Encrypted in transit and at rest, with role-based, logged access." },
];

const FAQS: FaqItem[] = [
  {
    q: "How is Zera Scribe different from other AI scribes?",
    a: "Most AI scribes stop at writing the note. Zera Scribe also checks it for missing or inconsistent documentation before you sign, explains why each gap matters, and suggests ICD-10, CPT and E/M codes for you to review. It is built for primary care and psychiatry.",
  },
  {
    q: "How do notes get into my EHR?",
    a: "Copy the finished note, or individual sections, into any EHR. No integration project is needed. Zera Scribe can also export each note as an HL7, C-CDA or FHIR file for EHRs that can import them.",
  },
  {
    q: "Can I sign a note that has a flag?",
    a: "Yes. Flags are guidance, not a roadblock. Fix the note, send it for Professional Review, or sign on your own clinical judgment.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. 14 days free, with no credit card needed. If you don’t choose a plan, nothing is charged.",
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Chevron() {
  return (
    <div className="flowchev" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 5l7 7-7 7" />
      </svg>
    </div>
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
    <div className="scribe-page">
      <BleedHead
        title="Get the note right, not just get it written."
        sub="Zera Scribe is the AI medical scribe for primary care and psychiatry. It turns visits or dictation into structured notes and flags gaps that could cost you at billing before you sign. When you want a second set of eyes, send the note for Professional Review."
        image="/hero-scribe.jpg?v=2"
        imageAlt="A physician talking with a patient at his desk"
      >
        <div className="cta">
          <TrialButton />
          <span className="ctanote">14 days free. No credit card.</span>
        </div>
      </BleedHead>

      {/* See the gap */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Checks before you sign</span>
            <h2>See the gap before you sign.</h2>
            <p className="lead">
              Most AI scribes stop at the note. Zera Scribe checks it while the visit is still fresh, and shows you why
              each gap matters.
            </p>
          </div>
          <div className="gapcards">
            {GAPS.map((g) => (
              <div className="gapcard reveal" key={g.area}>
                <div className="gk">{g.area}</div>
                <div className="gflag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4.5M12 16h.01" />
                  </svg>
                  Documentation gap
                </div>
                <p className="ggap">{g.gap}</p>
                <div className="gwhy">
                  <b>Why it matters</b>
                  <span>{g.why}</span>
                </div>
                <div className="gacts" aria-hidden="true">
                  {g.actions.map((a, i) => (
                    <span key={a} className={i === 0 ? "ga primary" : i === g.actions.length - 1 ? "ga plain" : "ga"}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="gapnote reveal">
            You decide what to do with each flag. Zera Scribe also suggests ICD-10, CPT and E/M codes from what&rsquo;s
            documented; you choose what to use, and nothing is billed automatically.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">How it works</span>
            <h2>From visit to signed note in three steps.</h2>
          </div>
          <div className="flow reveal">
            {STEPS.map((s, i) => (
              <Fragment key={s.k}>
                {i > 0 && <Chevron />}
                <div className="flowstep">
                  <span className="fnum">0{i + 1}</span>
                  <div className="fk">{s.k}</div>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Who it&rsquo;s for</span>
            <h2>Built for primary care and psychiatry.</h2>
            <p className="lead">Ophthalmology and cardiology are next.</p>
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
            <span className="eyebrow">What you get</span>
            <h2>Everything in one subscription.</h2>
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

      {/* Security */}
      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Security and control</span>
            <h2>Built for patient data from day one.</h2>
          </div>
          <div className="trustgrid reveal">
            {TRUST.map((t) => (
              <div className="trustitem" key={t.t}>
                <div className="ti">
                  <Check /> {t.t}
                </div>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Questions clinicians ask.</h2>
          </div>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* Closing CTA band (same pattern as the other pages) */}
      <section className="careers scribe-band">
        <div className="wrap">
          <div className="cta-card reveal">
            <div className="cta-body">
              <h2>Try Zera Scribe on your own visits.</h2>
              <p className="lead">14 days free, no credit card. Notes copy into the EHR you already use.</p>
              <div className="cta">
                <TrialButton />
                <a href={PRICING_URL} className="btn btn-ghost">
                  See plans and pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
