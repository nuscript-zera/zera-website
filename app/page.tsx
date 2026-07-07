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

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO · dark */}
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow reveal">Revenue AI for specialty medicine</span>
          <h1 className="reveal">
            Note. Code. Claim.<br />
            <span className="accent">One AI. Zero handoffs.</span>
          </h1>
          <p className="sub reveal">
            Zera turns each clinical encounter into a coded, payer-ready claim in one pass — capturing the note,
            assigning the codes, and building the claim without a chain of people re-keying the same visit. Every code
            traces back to the exact words that justify it.
          </p>
          <div className="cta reveal">
            <Link href="/contact" className="btn btn-primary">
              Book a demo
            </Link>
            <Link href="/platform" className="btn btn-ghost">
              See how it works
            </Link>
          </div>

          {/* SIGNATURE — Note → Code → Claim */}
          <div className="flow reveal" role="img" aria-label="The Zera pipeline: Note to Code to Claim">
            <div className="flowstep">
              <span className="fnum">01</span>
              <div className="fk">Capture</div>
              <h4>Note</h4>
              <p>Ambient conversation becomes a structured, specialty-aware clinical note.</p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">02</span>
              <div className="fk">Encode</div>
              <h4>Code</h4>
              <p>CPT, ICD-10, modifiers and J-code units come from the note — and gaps surface in real time, before it&apos;s signed.</p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">03</span>
              <div className="fk">Submit</div>
              <h4>Claim</h4>
              <p>A clean, defensible claim leaves the building the first time — no re-keying, no lost detail.</p>
            </div>
          </div>
          <p className="flowcap reveal">
            Validated on the live note, before signature <b>·</b> fixed in the lane, not scrubbed downstream
          </p>
        </div>
      </header>

      {/* THE PROBLEM · light */}
      <section className="section light" id="problem">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The problem</span>
            <h2>Revenue leaks in the gaps between people.</h2>
            <p className="lead">
              In most practices, a single visit is handled by a physician, a scribe, a coder, and a biller — each
              re-reading the last person&apos;s work. Every handoff loses context and adds a place for the claim to go
              wrong. Payers are getting stricter, and the math is unforgiving.
            </p>
          </div>
          <div className="stats reveal">
            <div className="stat">
              <div className="n">11.8<span className="u">%</span></div>
              <div className="k">of claims are denied on first submission — up from 10.2%, and still climbing.</div>
              <div className="src">Experian Health · State of Claims 2025</div>
            </div>
            <div className="stat">
              <div className="n">$25–181</div>
              <div className="k">to rework a single denied claim — pure administrative cost, before a dollar is recovered.</div>
              <div className="src">MGMA</div>
            </div>
            <div className="stat">
              <div className="n">65<span className="u">%</span></div>
              <div className="k">of denied claims are never reworked at all. That revenue is simply gone.</div>
              <div className="src">MGMA</div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS · dark */}
      <section className="section dark thesis" id="thesis">
        <div className="wrap">
          <span className="eyebrow reveal">Why now</span>
          <div className="reveal">
            <p>
              Most denials start upstream — in documentation and coding — long before a biller ever sees the claim. The
              old fix was to add people to each handoff and scrub claims on the way out. Modern language and reasoning
              models let us do the opposite:{" "}
              <span className="accent">
                catch the problem on the live note and let the provider resolve it before they sign — while the patient
                is still in the exam lane, when the fix costs nothing.
              </span>{" "}
              That&apos;s Zera.
            </p>
          </div>
        </div>
      </section>

      {/* HOW ZERA WORKS · light */}
      <section className="section light tint" id="how">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">What you get</span>
            <h2>A documentation-intelligence hub, not another point tool.</h2>
            <p className="lead">
              Zera unifies the front of the revenue cycle — where clean claims are actually won or lost.
            </p>
          </div>
          <div className="products">
            <article className="pcard reveal">
              <div className="top">
                <h3>Zera Platform</h3>
                <span className="tag live">
                  <span className="d"></span>Live
                </span>
              </div>
              <p>
                Capture the visit, generate a specialty-aware note, and get the codes, modifiers, and J-code unit math
                that go with it — with gaps flagged on the live note so the provider can fix them before they sign.
                Reviewed, approved, and handed off as a claim-ready record. Built for the complexity of specialty
                medicine, not the average office visit.
              </p>
              <ul className="caps">
                <li>Speech-to-structure</li>
                <li>CPT + ICD-10 coding</li>
                <li>Modifier engine</li>
                <li>J-code unit math</li>
                <li>Pre-sign validation</li>
                <li>Traceable Truth</li>
                <li>HIPAA + BAA</li>
              </ul>
              <Link className="plink" href="/platform">
                Explore the platform →
              </Link>
            </article>
            <article className="pcard soft reveal">
              <div className="top">
                <h3>Full-cycle RCM</h3>
                <span className="tag dev">
                  <span className="d"></span>Built · Soon
                </span>
              </div>
              <p>
                The claim and RCM engines — denial analytics, A/R, and end-to-end claims — are already built, coming to
                the platform next on the same clean documentation data.
              </p>
              <Link className="plink muted" href="/platform">
                See the roadmap →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* TRACEABLE TRUTH · dark */}
      <section className="section dark" id="trust">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Traceable truth</span>
            <h2>Every code points back to the words that justify it.</h2>
            <p className="lead">
              Zera doesn&apos;t ask you to trust a black box. Every generated code links to the exact, timestamped moment
              in the encounter it came from — click a code, hear the audio, read the line. That&apos;s what makes it
              defensible in an audit, and what earns a clinician&apos;s sign-off.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Word-level provenance</h3>
              <p>Timestamped transcript tied to a synced audio player. Nothing is asserted without a source.</p>
            </div>
            <div className="pillar reveal">
              <h3>Physician in control</h3>
              <p>Zera drafts; the clinician approves. Edits flow back through the record, not around it.</p>
            </div>
            <div className="pillar reveal">
              <h3>Audit-ready by default</h3>
              <p>Because coding is grounded in documentation, the claim carries its own justification with it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & TRUST · light */}
      <section className="section light" id="security">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Security &amp; trust</span>
            <h2>Clinical and financial data demands trust.</h2>
            <p className="lead">
              Zera is engineered for protected health information from the ground up — so how your data is handled is
              never an open question.
            </p>
          </div>
          <div className="trustgrid reveal">
            <div className="trustitem">
              <div className="ti"><Check /> BAA with every practice</div>
              <p>We sign a Business Associate Agreement before any protected health information is processed — no exceptions.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><Check /> SOC 2 Type I certified</div>
              <p>Independently audited security controls, with SOC 2 Type II in progress.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><Check /> Isolated by tenant</div>
              <p>Each organization&apos;s data is separated with customer-scoped keys, deployed US-only.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><Check /> Your data stays yours</div>
              <p>We never use your data to train shared models. A private, per-provider loop personalizes Zera to each clinician.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><Check /> Audit-defensible</div>
              <p>A complete, timestamped trail from the first word spoken to the final code.</p>
            </div>
            <div className="trustitem">
              <div className="ti"><Check /> Provider in control</div>
              <p>Role-based access, and the clinician always has final sign-off on every note and code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR · light tint */}
      <section className="section light tint team" id="who">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Who it&apos;s for</span>
            <h2>Purpose-built for ophthalmology. Retina at the tip of the spear.</h2>
            <p className="lead">
              Ophthalmology is the most documentation-dense surgical specialty, with one of the highest concentrations
              of uncaptured Medicare Advantage risk-adjustment data. We go deep here first — and lead with retina, where
              the coding is hardest and the dollars are largest: high-cost injectables, J-code unit math, laterality
              modifiers, and frequent visits.
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
              <b>Cardiology is next</b> — the same engine, with vocabulary, workflows, and payer rules purpose-built per
              specialty.
            </p>
          </div>
          <Link className="tlink reveal" href="/platform">
            See how the platform works →
          </Link>
        </div>
      </section>

      {/* CTA · dark */}
      <section className="careers" id="cta">
        <div className="wrap reveal">
          <span className="eyebrow">Founding cohort</span>
          <h2>Built by operators who ship healthcare AI at scale.</h2>
          <p className="lead">
            Zera comes from the team behind Audryl, which processes 2,000+ clinical minutes a day in production at
            99.5% audited accuracy. We&apos;re opening a founding cohort of specialty practices now.
          </p>
          <div className="cta">
            <Link href="/contact" className="btn btn-primary">
              Book a demo
            </Link>
            <Link href="/company" className="btn btn-ghost">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
