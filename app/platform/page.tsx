import type { Metadata } from "next";
import Link from "next/link";
import { BleedHead, CtaBand } from "@/components/Shared";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Zera is the revenue intelligence layer for specialty medicine — it captures the encounter, creates the documentation, generates the coding, and validates the record before it is signed, with word-level provenance. Full-cycle RCM is built and coming next.",
  alternates: { canonical: "https://zera.health/platform" },
};

function ACheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ProductPage() {
  return (
    <>
      <BleedHead
        title="One intelligent workflow from note to claim."
        sub="Zera is the revenue intelligence layer for specialty medicine — it captures the encounter, generates the coding, and validates the record before it is signed, with word-level provenance."
        image="/hero-platform.jpg?v=3"
        imageAlt="Abstract blue cubes"
      >
        <div className="cta">
          <Link href="/contact" className="btn btn-primary">
            Book a demo
          </Link>
          <a href="#pipeline" className="btn btn-ghost">
            See the pipeline
          </a>
        </div>
      </BleedHead>

      {/* Pipeline */}
      <section className="section light" id="pipeline">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The pipeline</span>
            <h2>Three steps. One continuous workflow.</h2>
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
                  Ambient conversation is transcribed with medical-grade speech recognition and shaped into a
                  specialty-aware clinical note. Zera understands the vocabulary of specialty care — laterality, drug
                  names, injection details — instead of flattening them into generic text.
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
                  Zera generates CPT and ICD-10 codes, applies the right modifiers, and calculates J-code drug units
                  directly from the documentation. A cross-walk calculator and modifier engine handle the parts that
                  trip up human coders under volume — and each suggestion links back to the documentation behind it.
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
                <h3>Clean information moves forward.</h3>
                <p>
                  Once approved, the documented and coded encounter becomes a claim-ready record — grounded in the
                  documentation from the start, with no re-keying between systems and no context lost between teams.
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
            <h2>Catch the problem before the note is signed.</h2>
            <p className="lead">
              Most revenue-cycle systems work downstream. Zera works upstream — while the note is still open, it
              continuously checks the encounter for documentation and coding gaps, and surfaces them to the provider
              before they sign.
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
                the lane — so a gap gets resolved in seconds instead of becoming a denial, an appeal, or a write-off
                weeks later.
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
            <span className="eyebrow">Traceable Truth</span>
            <h2>Defensible by design.</h2>
            <p className="lead">
              The hardest question in AI-generated coding isn&apos;t &ldquo;what code did the AI choose?&rdquo; — it&apos;s
              &ldquo;why?&rdquo; Zera makes the answer visible: every phrase timestamped, every code linked to the
              documentation that supports it.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Word-level timestamps</h3>
              <p>Every phrase in the transcript is timestamped and linked to a synced, clickable audio player.</p>
            </div>
            <div className="pillar reveal">
              <h3>Code-to-source links</h3>
              <p>Every code links to the documentation that supports it. If the evidence isn&apos;t there, Zera doesn&apos;t manufacture it.</p>
            </div>
            <div className="pillar reveal">
              <h3>The provider has the final word</h3>
              <p>The clinician reviews and signs off. Corrections improve the record instead of living in a side file.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Your EHR stays your EHR */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Works with your stack</span>
            <h2>Your EHR stays your EHR.</h2>
            <p className="lead">
              Zera adds intelligence without forcing a rip-and-replace. It works alongside the systems your practice
              already owns — six EHR-ready output formats today, with direct, real-time integrations rolling out.
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

      {/* Built for specialty complexity */}
      <section className="section light tint team">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Built for specialty medicine</span>
            <h2>Built for specialty complexity.</h2>
            <p className="lead">
              Start where the details matter most — laterality, drug names and doses, disease staging, modifiers, and
              J-code units. We began with retina, one of the hardest places to get the details right.
            </p>
          </div>
          <div className="specrow reveal">
            <div className="spec lead-spec">
              <div className="sk">Near-term focus</div>
              <h3>Retina</h3>
              <p>Purpose-built injection workflow — anti-VEGF documentation, J-code units, and laterality.</p>
            </div>
            <div className="spec">
              <div className="sk">Ophthalmology</div>
              <h3>Glaucoma</h3>
              <p>Laterality enforcement and diagnostic-test coding logic.</p>
            </div>
            <div className="spec">
              <div className="sk">Ophthalmology</div>
              <h3>Cataract / Refractive</h3>
              <p>Pre- and post-op chart fidelity and surgical coding.</p>
            </div>
            <div className="spec">
              <div className="sk">Ophthalmology</div>
              <h3>Comprehensive</h3>
              <p>VA, IOP, slit-lamp, fundus, and gonioscopy captured cleanly.</p>
            </div>
          </div>
          <div className="specnext reveal">
            <span className="snk">Same engine, next</span>
            <p>
              <b>Cardiology is next</b> — the same engine, with the vocabulary, workflows and payer rules built for that
              specialty rather than borrowed from a generic template.
            </p>
          </div>
        </div>
      </section>

      {/* Depth vs breadth — positioning contrast */}
      <section className="section dark">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Depth, not breadth</span>
            <h2>Generic AI codes the visit. Zera codes the specialty.</h2>
            <p className="lead">
              Most ambient tools are tuned across all of medicine, so they&apos;re strongest on the general office
              visit. Specialty revenue lives somewhere else — in the drug units, the modifiers, and the laterality that
              general-purpose models treat as edge cases.
            </p>
          </div>
          <div className="vs reveal">
            <div className="vs-col them">
              <div className="vs-h">General-purpose ambient AI</div>
              <ul>
                <li>Tuned across all of medicine</li>
                <li>Optimized for the general office visit — E/M, problem lists, risk capture</li>
                <li>Specialty procedural detail — drug units, modifiers, laterality — treated as edge cases</li>
              </ul>
            </div>
            <div className="vs-col us">
              <div className="vs-h">Zera — built for specialty</div>
              <ul>
                <li><ACheck /> Built for one specialty at a time — its vocabulary, modifiers, and payer rules</li>
                <li><ACheck /> The procedural details are the product, not the exception</li>
                <li><ACheck /> Validated before signature, with every code traceable to its source</li>
              </ul>
            </div>
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
              Build the revenue cycle on clean information. With the front of the cycle working in production, Zera
              extends into the rest.
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
              <p>The working front of the revenue cycle — capture, documentation, coding, and validation, in production today.</p>
              <ul className="caps">
                <li>Ambient capture</li>
                <li>Specialty-aware notes</li>
                <li>CPT + ICD-10</li>
                <li>Modifier engine</li>
                <li>J-code math</li>
                <li>Pre-sign validation</li>
                <li>Traceable Truth</li>
              </ul>
            </article>
            <article className="pcard soft reveal">
              <div className="top">
                <h3>Built and coming next</h3>
                <span className="tag dev">
                  <span className="d"></span>Built · Soon
                </span>
              </div>
              <p>
                Claim submission, denial analytics, A/R intelligence, payer-rule intelligence, and end-to-end RCM
                automation. The RCM engines are already built — coming to the platform next.
              </p>
            </article>
          </div>
          <div className="specnext reveal">
            <span className="snk">The destination</span>
            <p>
              <b>An autonomous revenue platform for specialty medicine</b> — one intelligent system carrying clinical
              truth all the way to payment.
            </p>
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
