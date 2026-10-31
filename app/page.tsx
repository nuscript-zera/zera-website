import Link from "next/link";

const TRIAL_URL = "https://zerascribe.com";

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
      {/* HERO · full-bleed video */}
      <header className="hero fb">
        <div className="hero-bg" aria-hidden="true">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            className="hero-bg-el"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-fullbleed-poster.jpg?v=8"
          >
            <source src="/hero-fullbleed.mp4?v=7" type="video/mp4" />
          </video>
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap">
          <div className="fbcopy reveal">
            <h1>Get paid in full for the care you provide.</h1>
            <p className="sub">
              Zera follows each visit from the clinical note to the claim and catches what&apos;s missing along the way.
              Zera Scribe is available now for primary care and psychiatry. Zera Revenue, for coding and claims, follows
              in 2027.
            </p>
            <div className="cta">
              <a href={TRIAL_URL} className="btn btn-primary">
                Try Zera Scribe free
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* NOTE. CODE. CLAIM. · light workflow band */}
      <section className="section light" id="workflow">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The workflow</span>
            <h2>Note. Code. Claim.</h2>
            <p className="lead">One workflow from the visit to the payment. Zero unnecessary handoffs.</p>
          </div>
          <div className="flow reveal" role="img" aria-label="The Zera workflow: Note to Code to Claim">
            <div className="flowstep">
              <span className="fnum">01</span>
              <div className="fk">Capture</div>
              <h4>Note</h4>
              <p>
                Zera listens to the visit and writes the clinical note, then flags what&apos;s missing before the doctor
                signs. Available now in Zera Scribe.
              </p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">02</span>
              <div className="fk">Code</div>
              <h4>Code</h4>
              <p>
                CPT, ICD-10, modifiers and J-code units, straight from the documentation. If it isn&apos;t supported, Zera
                doesn&apos;t guess. Zera Revenue, 2027.
              </p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">03</span>
              <div className="fk">Claim</div>
              <h4>Claim</h4>
              <p>
                Approved documentation and coding flow into a claim-ready record, with no re-keying and no lost context.
                Zera Revenue, 2027.
              </p>
            </div>
          </div>
          <p className="flowcap reveal">
            Less documentation · Less rework · Fewer revenue leaks
          </p>
        </div>
      </section>

      {/* THE PROBLEM · dark */}
      <section className="section dark" id="problem">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The problem</span>
            <h2>Your revenue cycle starts in the exam room.</h2>
            <p className="lead">
              A missing diagnosis. Psychotherapy time that was never written down. A chronic condition without its
              stage. The wrong laterality. The wrong modifier. Incorrect drug units. They look like small documentation
              problems, but downstream they become coding corrections, claim rework, denials, appeals and lost revenue.
              Zera catches them where the information is created: while the visit is still fresh and the note is still
              open.
            </p>
          </div>
          <div className="stats reveal">
            <div className="stat">
              <div className="n">11.8<span className="u">%</span></div>
              <div className="k">of claims are denied on first submission, and the rate keeps climbing.</div>
              <div className="src">Kodiak Solutions · 2024</div>
            </div>
            <div className="stat">
              <div className="n">$25–118</div>
              <div className="k">to rework a single denied claim. Pure administrative cost, before a dollar is recovered.</div>
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

      {/* PRE-SIGN CHECKS · light tint */}
      <section className="section light tint" id="presign">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Checks before signing</span>
            <h2>Don&apos;t discover the error six weeks later.</h2>
            <p className="lead">
              Fix it while the patient is still in the room. Most systems check the claim after the work is done. Zera
              works earlier: as the note is written, it checks the visit and shows anything that doesn&apos;t line up
              before the clinician signs. The best time to fix a documentation problem is before it becomes a billing
              problem.
            </p>
          </div>
          <div className="analyzers reveal">
            <div className="ahead">Examples of what Zera checks before the note is signed</div>
            <div className="agrid">
              <div className="analyzer">
                <div className="an"><ACheck /> Psychotherapy time</div>
                <div className="ad">Minutes documented for the add-on</div>
              </div>
              <div className="analyzer">
                <div className="an"><ACheck /> Depression detail</div>
                <div className="ad">Episode and severity stated</div>
              </div>
              <div className="analyzer">
                <div className="an"><ACheck /> Kidney disease stage</div>
                <div className="ad">Stage documented, not just named</div>
              </div>
              <div className="analyzer">
                <div className="an"><ACheck /> Laterality</div>
                <div className="ad">Right eye, left eye or both</div>
              </div>
              <div className="analyzer">
                <div className="an"><ACheck /> Drug units</div>
                <div className="ad">J-code unit math reconciled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTE TO CLAIM · dark */}
      <section className="section dark thesis" id="layer">
        <div className="wrap">
          <div className="thesis-card reveal">
            <span className="eyebrow">One connected path</span>
            <p>
              The note is only the first step. Zera connects the entire path,{" "}
              <span className="accent">encounter → documentation → coding → validation → claim</span>, into one
              continuous workflow. Zera Scribe gets the note right. Zera Revenue carries it the rest of the way.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE ZERA WORKS · light tint */}
      <section className="section light tint team" id="who">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Built for each specialty</span>
            <h2>The details each specialty depends on.</h2>
            <p className="lead">
              Every specialty gets paid on different details: chronic-condition staging in primary care, psychotherapy
              time and risk documentation in psychiatry, laterality, drug units and modifiers in ophthalmology,
              diagnostic tests and procedures in cardiology. Zera is built around those details instead of a generic
              template.
            </p>
          </div>
          <div className="specrow reveal">
            <div className="spec lead-spec">
              <div className="sk">Zera Scribe · Now</div>
              <h3>Primary care</h3>
              <p>Chronic conditions, staging and specificity captured in the visit, in each clinician&apos;s format.</p>
            </div>
            <div className="spec lead-spec">
              <div className="sk">Zera Scribe · Now</div>
              <h3>Psychiatry</h3>
              <p>Psychotherapy time, risk documentation and medication management, in each clinician&apos;s format.</p>
            </div>
            <div className="spec">
              <div className="sk">Zera Scribe · Next</div>
              <h3>Ophthalmology</h3>
              <p>Injections, laterality, drug units and surgical detail, from retina to glaucoma and cataract.</p>
            </div>
            <div className="spec">
              <div className="sk">Zera Scribe · Next</div>
              <h3>Cardiology</h3>
              <p>Diagnostic tests, procedures and the findings behind them, captured in the visit.</p>
            </div>
          </div>
          <div className="specnext reveal">
            <span className="snk">Zera Revenue · 2027</span>
            <p>
              <b>Coding and claims for each of these specialties, one at a time</b>, each with the vocabulary,
              workflows and payer rules built for it rather than borrowed from a generic template.
            </p>
          </div>
        </div>
      </section>

      {/* TRACEABLE TRUTH · dark */}
      <section className="section dark" id="trust">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Traceable Truth</span>
            <h2>See where every detail came from.</h2>
            <p className="lead">
              Zera makes every important detail traceable. Point to a line in the note or a code and see the moment in
              the visit behind it. Follow the timestamp and listen to exactly what was said. AI does the work; you
              remain in control.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Linked to the source</h3>
              <p>Every detail is tied to the moment it was said in the visit. Nothing is asserted without a source.</p>
            </div>
            <div className="pillar reveal">
              <h3>Abstains, never guesses</h3>
              <p>If the dose wasn&apos;t stated or the stage wasn&apos;t documented, Zera says so. It shows no code it can&apos;t support.</p>
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
              Zera isn&apos;t your EHR. It works alongside the systems your practice already uses: no rip-and-replace, no
              workflow overhaul, no rebuilding your practice around another piece of software.
            </p>
          </div>
          <div className="formats reveal">
            <span className="fmt"><b>6</b> EHR-ready output formats</span>
            <span className="fmt">Copy into any EHR</span>
            <span className="fmt">Direct integrations, rolling out</span>
            <span className="fmt">No rip-and-replace</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS & ROADMAP · light tint */}
      <section className="section light tint" id="roadmap">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Products &amp; roadmap</span>
            <h2>From the note to the full revenue cycle.</h2>
            <p className="lead">
              Today, Zera Scribe gets the note right before it&apos;s signed. Next, Zera Revenue carries it to the codes
              and the claim. One system, from the visit to the payment.
            </p>
          </div>
          <div className="products">
            <article className="pcard reveal">
              <div className="top">
                <h3>Zera Scribe</h3>
                <span className="tag live">
                  <span className="d"></span>Available now
                </span>
              </div>
              <p>
                The AI scribe for primary care and psychiatry, with ophthalmology and cardiology next. It writes the
                note from the visit and flags what&apos;s missing before the doctor signs.
              </p>
              <ul className="caps">
                <li>Ambient recording and dictation</li>
                <li>Each clinician&apos;s note format</li>
                <li>Checks before signing</li>
                <li>Suggested codes to review</li>
                <li>Copy into any EHR</li>
                <li>Optional Professional Review</li>
              </ul>
              <a className="plink" href={TRIAL_URL}>
                Start a free trial at zerascribe.com →
              </a>
            </article>
            <article className="pcard soft reveal">
              <div className="top">
                <h3>Zera Revenue</h3>
                <span className="tag dev">
                  <span className="d"></span>2027
                </span>
              </div>
              <p>
                Coding and claims, launching in 2027 one specialty at a time: primary care, psychiatry, ophthalmology
                and cardiology. Each launch is complete: CPT and ICD-10 codes from the note, modifiers and drug units,
                codes checked before signing, and claims sent to payers. Denial analytics and A/R intelligence follow.
              </p>
              <Link className="plink muted" href="/platform">
                Explore Zera Revenue →
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
              Zera is engineered for protected health information from the ground up, so how your data is handled is
              never an open question.
            </p>
          </div>
          <div className="trustgrid reveal">
            <div className="trustitem">
              <div className="ti"><ACheck /> BAA with every practice</div>
              <p>We sign a Business Associate Agreement before any protected health information is processed. No exceptions.</p>
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
              <span className="eyebrow">Zera Scribe now · Zera Revenue in 2027</span>
              <h2>See Zera on your own visits.</h2>
              <p className="lead">
                Primary care and psychiatry practices can try Zera Scribe free for 14 days. Or book a 30-minute demo
                and watch a real encounter move from conversation to note to code to a clean claim. From the makers of
                Dictra, in production at 99.5% audited accuracy.
              </p>
              <div className="cta">
                <a href={TRIAL_URL} className="btn btn-primary">
                  Try Zera Scribe free
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
