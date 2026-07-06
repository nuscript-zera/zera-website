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

export default function Home() {
  return (
    <>
      {/* HERO · dark */}
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow reveal">Revenue AI for specialty medicine</span>
          <h1 className="reveal">
            Note. Code. Claim. <span className="accent">One AI, zero handoffs.</span>
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
            <Link href="/product" className="btn btn-ghost">
              See how it works
            </Link>
          </div>

          {/* SIGNATURE — Note → Code → Claim */}
          <div className="flow reveal" role="img" aria-label="The Zera pipeline: Note to Code to Claim">
            <div className="flowstep">
              <span className="fnum">01</span>
              <div className="fk">Capture</div>
              <h4>Note</h4>
              <p>Ambient conversation or dictation becomes a structured, specialty-aware clinical note.</p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">02</span>
              <div className="fk">Encode</div>
              <h4>Code</h4>
              <p>CPT, ICD-10, modifiers and J-code units are assigned from the note — and traceable to it.</p>
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
            One system, one source of truth <b>·</b> the physician stays in control at every step
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
              Most denials start upstream — in documentation and coding — long before the biller ever sees the claim.
              The old fix was to add people to each handoff. Modern language and reasoning models let us do the
              opposite:{" "}
              <span className="accent">
                collapse note, code, and claim into a single AI pass, with the clinician in the loop — so the claim is
                right before it&apos;s ever sent.
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
              Zera v1 unifies the front of the revenue cycle — where clean claims are actually won or lost.
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
                that go with it — reviewed and approved by the physician, then handed off as a claim-ready record. Built
                for the complexity of specialty medicine, not the average office visit.
              </p>
              <ul className="caps">
                <li>Speech-to-structure</li>
                <li>CPT + ICD-10 coding</li>
                <li>Modifier engine</li>
                <li>J-code unit math</li>
                <li>Traceable Truth</li>
                <li>HIPAA + BAA</li>
              </ul>
              <Link className="plink" href="/product">
                Explore the platform →
              </Link>
            </article>
            <article className="pcard soft reveal">
              <div className="top">
                <h3>Full-cycle RCM</h3>
                <span className="tag dev">
                  <span className="d"></span>On the roadmap
                </span>
              </div>
              <p>
                Documentation intelligence is the foundation. Denial analytics, A/R aging, and end-to-end claims
                workflow build on top of the same clean data — shipping as the platform matures with its founding
                cohort.
              </p>
              <Link className="plink muted" href="/product">
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

      {/* WHO IT'S FOR · light */}
      <section className="section light team" id="who">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Who it&apos;s for</span>
            <h2>Purpose-built for specialty medicine — starting with retina.</h2>
            <p className="lead">
              Retina is where coding is hardest and the dollars are largest: high-cost injectable drugs, J-code unit
              math, laterality modifiers, and frequent visits. Get it wrong and a single claim can be worth thousands.
              Zera earns its keep where the stakes — and the complexity — are highest, then extends across ambulatory
              specialty care.
            </p>
            <Link className="tlink" href="/product">
              See how Zera handles retina →
            </Link>
          </div>
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
