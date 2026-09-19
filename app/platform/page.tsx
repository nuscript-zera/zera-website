import type { Metadata } from "next";
import Link from "next/link";
import { PageHead, CtaBand } from "@/components/Shared";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Zera collapses note, code, and claim into a single AI pass for specialty medicine — with a pre-sign validation gate, word-level provenance, and full-cycle RCM engines built and integrating.",
  alternates: { canonical: "https://zera.health/platform" },
};

function ACheck() {
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

export default function ProductPage() {
  return (
    <>
      <PageHead
        eyebrow="Platform"
        title={
          <>
            One pass from <span className="accent">note to claim</span>.
          </>
        }
        sub="Zera is the documentation-intelligence hub for specialty medicine. It captures the encounter, produces the note, assigns the codes, and assembles a claim-ready record — with the physician approving at every step, and every code traceable to its source."
      >
        <div className="flow flow-mini reveal" role="img" aria-label="The Zera pipeline: Note to Code to Claim">
          <div className="flowstep">
            <div className="fk">Capture</div>
            <h4>Note</h4>
            <p>Ambient encounter → specialty-aware note</p>
          </div>
          <Chevron />
          <div className="flowstep">
            <div className="fk">Encode</div>
            <h4>Code</h4>
            <p>CPT, ICD-10, modifiers &amp; J-code units</p>
          </div>
          <Chevron />
          <div className="flowstep">
            <div className="fk">Submit</div>
            <h4>Claim</h4>
            <p>Clean and payer-ready, the first time</p>
          </div>
        </div>
      </PageHead>

      {/* Pipeline recap */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The pipeline</span>
            <h2>Three steps, no handoffs.</h2>
            <p className="lead">
              The same visit, carried end to end by one system instead of four people re-keying it.
            </p>
          </div>
          <div className="frows">
            <div className="frow reveal">
              <div className="fbody">
                <div className="fk">01 · Capture → Note</div>
                <h3>The encounter writes itself.</h3>
                <p>
                  Ambient conversation is transcribed with medical-grade speech recognition and
                  shaped into a specialty-aware clinical note. Zera understands the vocabulary of specialty care —
                  laterality, drug names, injection details — instead of flattening them into generic text.
                </p>
              </div>
              <div className="fart">
                <div className="fk">In the note</div>
                <p style={{ color: "var(--l-ink)", fontWeight: 600, margin: 0 }}>
                  &ldquo;OD intravitreal aflibercept 2&nbsp;mg, right eye, for wet AMD…&rdquo;
                </p>
                <p style={{ margin: 0 }}>Structured fields, not a wall of text — ready to be coded.</p>
              </div>
            </div>

            <div className="frow reveal">
              <div className="fbody">
                <div className="fk">02 · Note → Code</div>
                <h3>Coding that shows its work.</h3>
                <p>
                  Zera assigns CPT and ICD-10 codes, applies the right modifiers, and computes J-code drug units
                  directly from the note. A cross-walk calculator and modifier engine handle the parts that trip up
                  human coders under volume — and each suggestion links back to the documentation behind it.
                </p>
              </div>
              <div className="fart">
                <div className="fk">Suggested codes</div>
                <p style={{ color: "var(--l-ink)", fontWeight: 600, margin: 0 }}>67028-RT · J0178 ×2 · H35.32</p>
                <p style={{ margin: 0 }}>Tap any code to jump to the exact words that justify it.</p>
              </div>
            </div>

            <div className="frow reveal">
              <div className="fbody">
                <div className="fk">03 · Code → Claim</div>
                <h3>A clean claim, the first time.</h3>
                <p>
                  Approved codes assemble into a payer-ready claim with its justification attached. Because the claim is
                  grounded in the documentation from the start, the errors that drive first-pass denials — missing
                  detail, mismatched codes, wrong units — never make it out the door.
                </p>
              </div>
              <div className="fart">
                <div className="fk">Claim status</div>
                <p style={{ color: "var(--l-ink)", fontWeight: 600, margin: 0 }}>Ready to submit · fully documented</p>
                <p style={{ margin: 0 }}>No re-keying between systems. No lost context.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The pre-sign gate */}
      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The pre-sign gate</span>
            <h2>Caught before the note is signed.</h2>
            <p className="lead">
              Everyone else scrubs claims on the way out the door. Zera works one step earlier — on the live, unsigned
              note, while the patient is still in the exam lane.
            </p>
          </div>

          <div className="gate reveal">
            <div className="gate-lane">
              <div className="gate-stop">
                <div className="gate-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /></svg>
                </div>
                <div className="gate-txt">
                  <div className="gate-k">In the lane</div>
                  <div className="gate-lbl">Note goes live</div>
                  <div className="gate-sub">Captured, generated, and coded — still open</div>
                </div>
              </div>

              <div className="gate-stop hot">
                <div className="gate-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4h11l-1.5 4H20l-2 5H6" /><path d="M4 21v-6" /></svg>
                </div>
                <div className="gate-txt">
                  <div className="gate-k">Pre-sign gate</div>
                  <div className="gate-lbl">Zera flags gaps</div>
                  <div className="gate-sub">Missing detail, mismatched codes, unit &amp; modifier conflicts — in real time</div>
                </div>
              </div>

              <div className="gate-stop warm">
                <div className="gate-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                </div>
                <div className="gate-txt">
                  <div className="gate-k">In control</div>
                  <div className="gate-lbl">Provider fixes</div>
                  <div className="gate-sub">In the room, in seconds — nothing blocked or silently changed</div>
                </div>
              </div>

              <div className="gate-stop sign">
                <div className="gate-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17c3 0 3-9 6-9s2 6 4 6 2-3 4-3 2 2 4 2" /><path d="M3 21h18" /></svg>
                </div>
                <div className="gate-txt">
                  <div className="gate-k">Threshold</div>
                  <div className="gate-lbl">Signature</div>
                  <div className="gate-sub">Note committed — clean by the time it&apos;s signed</div>
                </div>
              </div>

              <div className="gate-stop done">
                <div className="gate-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <div className="gate-txt">
                  <div className="gate-k">Downstream</div>
                  <div className="gate-lbl">Clean claim</div>
                  <div className="gate-sub">Leaves already coded and documented</div>
                </div>
              </div>
            </div>

            <div className="gate-note">
              <p>
                Everything left of the signature is still live and free to fix. Zera works <b>here</b> — upstream, in
                the lane — so a gap never has the chance to become a denial, an appeal, or a write-off three days later.
              </p>
            </div>

            <div className="analyzers">
              <div className="ahead">Five checks run concurrently, as the note is composed</div>
              <div className="agrid">
                <div className="analyzer">
                  <div className="an"><ACheck /> Laterality</div>
                  <div className="ad">OD / OS / OU enforcement</div>
                </div>
                <div className="analyzer">
                  <div className="an"><ACheck /> HCC capture</div>
                  <div className="ad">Risk-adjustment conditions flagged</div>
                </div>
                <div className="analyzer">
                  <div className="an"><ACheck /> MEAT validation</div>
                  <div className="ad">Documentation supports each condition</div>
                </div>
                <div className="analyzer">
                  <div className="an"><ACheck /> ICD-10 specificity</div>
                  <div className="ad">Vague codes flagged for precision</div>
                </div>
                <div className="analyzer">
                  <div className="an"><ACheck /> J-code units</div>
                  <div className="ad">Drug-unit math reconciled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traceable Truth */}
      <section className="section dark">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Traceable truth</span>
            <h2>Defensible by design.</h2>
            <p className="lead">
              The hardest part of trusting AI in revenue is proving where a code came from. Zera makes provenance a
              first-class feature, not an afterthought.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Word-level timestamps</h3>
              <p>Every phrase in the transcript is timestamped and linked to a synced, clickable audio player.</p>
            </div>
            <div className="pillar reveal">
              <h3>Code-to-source links</h3>
              <p>Click a code and land on the exact moment it was justified. No guessing, no reconstruction.</p>
            </div>
            <div className="pillar reveal">
              <h3>Approve, don&apos;t retype</h3>
              <p>The clinician reviews and signs off. Corrections improve the record instead of living in a side file.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Works with your stack */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Works with your stack</span>
            <h2>An intelligence layer, not a rip-and-replace.</h2>
            <p className="lead">
              Zera runs alongside the systems you already own. No EHR replacement, no workflow disruption, no staff
              layoffs. It produces output in six EHR-ready formats today, with direct, real-time integrations rolling
              out.
            </p>
          </div>
          <div className="formats reveal">
            <span className="fmt"><b>6</b> EHR-ready output formats</span>
            <span className="fmt">Runs alongside your EHR</span>
            <span className="fmt">Direct integrations — rolling out</span>
            <span className="fmt">No rip-and-replace</span>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Roadmap</span>
            <h2>Documentation first. Then the full cycle.</h2>
            <p className="lead">
              Clean documentation and coding are the foundation everything else stands on. With that in place, Zera
              extends into the back half of the revenue cycle.
            </p>
          </div>
          <div className="products">
            <article className="pcard reveal">
              <div className="top">
                <h3>Available now</h3>
                <span className="tag live">
                  <span className="d"></span>Live
                </span>
              </div>
              <p>The documentation-intelligence hub: capture, specialty-aware notes, coding, modifiers, J-code units, and Traceable Truth review.</p>
              <ul className="caps">
                <li>Note capture</li>
                <li>CPT + ICD-10</li>
                <li>Modifier engine</li>
                <li>J-code math</li>
                <li>Provenance review</li>
              </ul>
            </article>
            <article className="pcard soft reveal">
              <div className="top">
                <h3>Full revenue cycle</h3>
                <span className="tag dev">
                  <span className="d"></span>Built · Soon
                </span>
              </div>
              <p>
                Denial analytics, A/R, payer-rule intelligence, and end-to-end claims. The RCM engines are already
                built — coming to the platform next.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered.</h2>
            <p className="lead">What practices ask before their first Zera demo.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
