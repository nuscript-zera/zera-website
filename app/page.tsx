import Link from "next/link";

function Chevron() {
  return (
    <div className="flowchev" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function ACheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO · full-bleed ophthalmology video */}
      <header className="hero fb">
        <div className="hero-bg" aria-hidden="true">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            className="hero-bg-el"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-fullbleed-poster.jpg?v=3"
          >
            <source src="/hero-fullbleed.mp4?v=3" type="video/mp4" />
          </video>
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap">
          <div className="fbcopy reveal">
            <h1>Revenue AI that turns every specialty encounter into a clean, defensible claim.</h1>
            <p className="sub">
              Zera captures the encounter, generates the coding, and catches documentation gaps before you sign — every
              code traceable to its source.
            </p>
            <div className="cta">
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
              <Link href="/platform" className="btn btn-ghost">
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* NOTE. CODE. CLAIM. · dark workflow band */}
      <section className="section dark" id="workflow">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The workflow</span>
            <h2>Note. Code. Claim.</h2>
            <p className="lead">One intelligent workflow. Zero unnecessary handoffs.</p>
          </div>
          <div className="flow reveal" role="img" aria-label="The Zera pipeline: Note to Code to Claim">
            <div className="flowstep">
              <span className="fnum">01</span>
              <div className="fk">Capture</div>
              <h4>Note</h4>
              <p>Zera listens to the visit and turns the conversation into a structured, specialty-aware clinical note.</p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">02</span>
              <div className="fk">Encode</div>
              <h4>Code</h4>
              <p>CPT, ICD-10, modifiers and J-code units, straight from the documentation. If it isn&apos;t supported, Zera doesn&apos;t guess.</p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">03</span>
              <div className="fk">Claim</div>
              <h4>Claim</h4>
              <p>Approved documentation and coding flow into a claim-ready record — no re-keying, no lost context.</p>
            </div>
          </div>
          <p className="flowcap reveal">
            Less documentation · Less rework · Fewer revenue leaks
          </p>
        </div>
      </section>

      {/* THE PROBLEM · light */}
      <section className="section light" id="problem">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The problem</span>
            <h2>Your revenue cycle starts in the exam room.</h2>
            <p className="lead">
              A missing diagnosis. The wrong laterality. An incomplete procedure note. A missed HCC. The wrong modifier.
              Incorrect drug units. They look like small documentation problems — but downstream they become coding
              corrections, claim rework, denials, appeals, and lost revenue. Zera catches it before it leaves the room,
              working where the information is created: while the encounter is still live and the note is still editable.
            </p>
          </div>
          <div className="stats reveal">
            <div className="stat">
              <div className="n">11.8<span className="u">%</span></div>
              <div className="k">of claims are denied on first submission — and the rate keeps climbing.</div>
              <div className="src">Kodiak Solutions · 2024</div>
            </div>
            <div className="stat">
              <div className="n">$25–118</div>
              <div className="k">to rework a single denied claim — pure administrative cost, before a dollar is recovered.</div>
              <div className="src">MGMA · Change Healthcare</div>
            </div>
            <div className="stat">
              <div className="n">65<span className="u">%</span></div>
              <div className="k">of denied claims are never reworked at all. That revenue is simply gone.</div>
              <div className="src">Change Healthcare</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-SIGN GATE · light tint */}
      <section className="section light tint" id="presign">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The pre-sign gate</span>
            <h2>Don&apos;t discover the error six weeks later.</h2>
            <p className="lead">
              Fix it while the patient is still in the lane. Most systems check the claim after the work is already
              done — Zera works earlier. As the note is being created, it checks the encounter and surfaces anything that
              doesn&apos;t line up before the provider signs. The best time to fix a documentation problem is before it
              becomes a billing problem.
            </p>
          </div>
          <div className="analyzers reveal">
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
      </section>

      {/* NOT ANOTHER SCRIBE · dark */}
      <section className="section dark thesis" id="layer">
        <div className="wrap">
          <div className="thesis-card reveal">
            <span className="eyebrow">The intelligence layer</span>
            <p>
              Ambient documentation is only the first step. Zera connects the entire path —{" "}
              <span className="accent">encounter → documentation → coding → validation → claim</span> — into one
              continuous workflow. That&apos;s the difference between an AI scribe and a revenue platform.
            </p>
          </div>
        </div>
      </section>

      {/* BUILT FOR SPECIALTY MEDICINE · light tint */}
      <section className="section light tint team" id="who">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Built for specialty medicine</span>
            <h2>Specialty care isn&apos;t generic medicine.</h2>
            <p className="lead">
              The details matter: laterality, drug names and doses, procedure details, disease staging, modifiers,
              J-code units, and specialty-specific documentation. We started with retina because it&apos;s one of the
              hardest places to get the details right — and we&apos;re working outward from there across ophthalmology.
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

      {/* TRACEABLE TRUTH · dark */}
      <section className="section dark" id="trust">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Traceable Truth</span>
            <h2>Click a code. Hear yourself say it.</h2>
            <p className="lead">
              Zera makes every important coding decision traceable. Click a code and see the documentation behind it —
              follow the timestamp, listen to the exact moment in the encounter. AI does the work; you remain in control.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Word-level provenance</h3>
              <p>Every phrase is timestamped and tied to a synced audio player. Nothing is asserted without a source.</p>
            </div>
            <div className="pillar reveal">
              <h3>Abstains, never guesses</h3>
              <p>If the dose wasn&apos;t stated or the eye wasn&apos;t documented, Zera says so. It shows no code it can&apos;t support.</p>
            </div>
            <div className="pillar reveal">
              <h3>You have the last word</h3>
              <p>Zera drafts; you approve. Your edits flow back through the record, not around it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS WITH YOUR SYSTEMS · light */}
      <section className="section light" id="stack">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Works with your stack</span>
            <h2>Works with the systems you already have.</h2>
            <p className="lead">
              An intelligence layer, not another system you have to replace. Zera isn&apos;t your EHR — it works
              alongside the systems your practice already uses. No rip-and-replace, no workflow overhaul, no rebuilding
              your practice around another piece of software.
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

      {/* ROADMAP · light tint */}
      <section className="section light tint" id="roadmap">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Roadmap</span>
            <h2>From documentation to the full revenue cycle.</h2>
            <p className="lead">
              Today, Zera fixes the front of the revenue cycle. Tomorrow, it runs more of it — one intelligent revenue
              system, from patient encounter to payment.
            </p>
          </div>
          <div className="products">
            <article className="pcard reveal">
              <div className="top">
                <h3>Available today</h3>
                <span className="tag live">
                  <span className="d"></span>Live
                </span>
              </div>
              <p>The working front of the revenue cycle — capture, documentation, coding and validation, running in production now.</p>
              <ul className="caps">
                <li>Ambient capture</li>
                <li>Specialty-aware notes</li>
                <li>CPT + ICD-10 coding</li>
                <li>Modifier intelligence</li>
                <li>J-code unit calculation</li>
                <li>Pre-sign validation</li>
                <li>Traceable Truth</li>
              </ul>
              <Link className="plink" href="/platform">
                Explore the platform →
              </Link>
            </article>
            <article className="pcard soft reveal">
              <div className="top">
                <h3>Coming next</h3>
                <span className="tag dev">
                  <span className="d"></span>Built · Soon
                </span>
              </div>
              <p>
                Claims, denial analytics, A/R intelligence, payer-rule intelligence, and end-to-end revenue-cycle
                automation — built on the same clean documentation data, so the claim arrives already carrying its own
                justification.
              </p>
              <Link className="plink muted" href="/platform">
                See the roadmap →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* SECURITY & TRUST · light */}
      <section className="section light" id="security">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Security &amp; trust</span>
            <h2>Your patients&apos; data, handled the way you&apos;d want yours handled.</h2>
            <p className="lead">
              Zera is engineered for protected health information from the ground up — so how your data is handled is
              never an open question.
            </p>
          </div>
          <div className="trustgrid reveal">
            <div className="trustitem">
              <div className="ti"><ACheck /> BAA with every practice</div>
              <p>We sign a Business Associate Agreement before any protected health information is processed — no exceptions.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><ACheck /> SOC 2 Type I certified</div>
              <p>Independently audited security controls, with SOC 2 Type II in progress.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><ACheck /> Isolated by tenant</div>
              <p>Each organization&apos;s data is separated with customer-scoped keys, deployed US-only.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><ACheck /> Your data stays yours</div>
              <p>We never use your data to train shared models. A private, per-provider loop personalizes Zera to each clinician.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><ACheck /> Audit-defensible</div>
              <p>A complete, timestamped trail from the first word spoken to the final code.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><ACheck /> Provider in control</div>
              <p>Role-based access, and the clinician always has final sign-off on every note and code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA · deep-blue card */}
      <section className="careers" id="cta">
        <div className="wrap">
          <div className="cta-card reveal">
            <div className="cta-body">
              <span className="eyebrow">Ophthalmology today · cardiology next</span>
              <h2>See what Zera does for ophthalmology.</h2>
              <p className="lead">
                Bring your workflow and payer mix, and we&apos;ll move a real encounter from conversation to note to
                code to a clean, defensible claim — in a 30-minute working demo. Built by the team behind Dictra, in
                production at 99.5% audited accuracy.
              </p>
              <div className="cta">
                <Link href="/contact" className="btn btn-primary">
                  Book a demo
                </Link>
                <Link href="/platform" className="btn btn-ghost">
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
