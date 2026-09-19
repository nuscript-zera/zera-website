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
            You see the patient. Zera writes the note, assigns the codes, and builds the claim — then flags what&apos;s
            wrong while you can still fix it. Every code points back to the words you actually said.
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
              <p>The conversation becomes a structured, specialty-aware note. No typing. No templates. No after-hours charting.</p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">02</span>
              <div className="fk">Encode</div>
              <h4>Code</h4>
              <p>CPT, ICD-10, modifiers and J-code units come straight from what was documented — not from a guess.</p>
            </div>
            <Chevron />
            <div className="flowstep">
              <span className="fnum">03</span>
              <div className="fk">Submit</div>
              <h4>Claim</h4>
              <p>A clean, defensible claim the first time — nothing re-keyed, nothing lost between people.</p>
            </div>
          </div>
          <p className="flowcap reveal">
            Zera won&apos;t let you sign a note that&apos;s coded wrong <b>·</b> caught in the lane, not scrubbed downstream
          </p>
        </div>
      </header>

      {/* THE PROBLEM · light */}
      <section className="section light" id="problem">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">The problem</span>
            <h2>The error is made in the room. It&apos;s found six weeks later.</h2>
            <p className="lead">
              You inject the right eye. The code says left. Nobody catches it until the denial comes back — and by then
              you&apos;ve moved on, the patient has moved on, and someone in billing is reconstructing a visit they
              weren&apos;t in. Every handoff between you, the scribe, the coder and the biller loses a little more of
              what actually happened.
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

      {/* WHY NOW · light gradient panel */}
      <section className="section dark thesis" id="thesis">
        <div className="wrap">
          <div className="thesis-card reveal">
            <span className="eyebrow">Why now</span>
            <p>
              Almost every denial is decided upstream, in the note, long before a biller sees the claim. The old answer
              was more people at every handoff and a scrubber at the end. Modern reasoning models let us do the
              opposite:{" "}
              <span className="accent">
                catch it on the live note and let you fix it before you sign — while the patient is still in the lane,
                when the fix costs nothing.
              </span>{" "}
              That&apos;s Zera.
            </p>
          </div>
        </div>
      </section>
      {/* END WHY NOW */}

      {/* HOW ZERA WORKS · light */}
      <section className="section light tint" id="how">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">What you get</span>
            <h2>Not another scribe. The part that decides whether you get paid.</h2>
            <p className="lead">
              Zera works at the front of the revenue cycle — where clean claims are actually won or lost.
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
                Zera listens to the visit, writes the note, and works out the codes, modifiers and J-code units that go
                with it. Then it checks its own work: if the eye is wrong, the drug isn&apos;t identified, or the code
                isn&apos;t supported by what you documented, it refuses to let the note be signed and tells you exactly
                why — sourced to the CMS release it checked against. Built for the complexity of specialty medicine,
                not the average office visit.
              </p>
              <ul className="caps">
                <li>Speech-to-structure</li>
                <li>CPT + ICD-10 coding</li>
                <li>Modifier engine</li>
                <li>J-code unit math</li>
                <li>Pre-sign gate</li>
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
                  <span className="d"></span>In development
                </span>
              </div>
              <p>
                Claim submission, denial analytics and A/R come next — built on the same clean documentation data, so
                the claim arrives already carrying its own justification.
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
            <span className="eyebrow">Traceable Truth</span>
            <h2>Click a code. Hear yourself say it.</h2>
            <p className="lead">
              Zera doesn&apos;t ask you to trust a black box. Every code links to the exact, timestamped second of the
              encounter it came from — click it, play it, read the line. That&apos;s what makes it defensible in an
              audit, and what makes it signable without reading the whole note twice.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Word-level provenance</h3>
              <p>Timestamped transcript tied to a synced audio player. Nothing is asserted without a source.</p>
            </div>
            <div className="pillar reveal">
              <h3>Abstains, never guesses</h3>
              <p>If the dose wasn&apos;t stated or the eye wasn&apos;t documented, Zera says so. It shows no code and no dollar figure it can&apos;t source.</p>
            </div>
            <div className="pillar reveal">
              <h3>You have the last word</h3>
              <p>Zera drafts; you approve. Your edits flow back through the record, not around it.</p>
            </div>
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
            <h2>We started with retina, because it&apos;s the hardest.</h2>
            <p className="lead">
              Anti-VEGF units. Which eye. Staging that changes the code. Injections every four weeks on the same
              patient. If a coding engine survives retina, everything after it is easier — so that&apos;s where we
              started, and we&apos;re working outward from there across ophthalmology.
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
          <Link className="tlink reveal" href="/platform">
            See how the platform works →
          </Link>
        </div>
      </section>

      {/* CTA · deep-blue card with right-flush arc decoration */}
      <section className="careers" id="cta">
        <div className="wrap">
          <div className="cta-card reveal">
            <div className="cta-body">
              <h2>Built by people who&apos;ve done this work for 25 years.</h2>
              <p className="lead">
                Zera comes from the team behind Dictra, which processes 2,000+ clinical minutes a day in production at
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
          </div>
        </div>
      </section>
    </>
  );
}
