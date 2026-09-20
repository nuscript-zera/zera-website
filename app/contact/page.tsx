import type { Metadata } from "next";
import { PageHead } from "@/components/Shared";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "See what happens when the revenue cycle starts in the exam room. Book a 30-minute working demo — bring a real encounter and watch Zera turn it into a specialty-aware note, accurate coding, validated documentation, and a claim-ready record.",
  alternates: { canonical: "https://zera.health/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        eyebrow="Book a demo"
        title={
          <>
            See what happens when the revenue cycle <span className="accent">starts in the exam room</span>.
          </>
        }
        sub="Bring us a real encounter. We'll show you how Zera turns it into a specialty-aware note, accurate coding, validated documentation, and a claim-ready record — and exactly where it catches the problems conventional workflows discover later."
      />

      {/* Book a demo — form + details */}
      <section className="section light">
        <div className="wrap">
          <div className="contact">
            <div className="reveal">
              <h2>Book a 30-minute working demo.</h2>
              <p className="cintro">We&apos;ll bring the platform. You bring the complexity.</p>
              <ContactForm />
            </div>

            <aside className="hqcard reveal">
              <div className="row">
                <div className="rlabel">Entity</div>
                <div className="rval">
                  NuScript Systems, Inc.
                  <br />
                  Austin, TX
                  <br />
                  Zera is a product of NuScript Systems, Inc.
                </div>
              </div>
              <div className="row">
                <div className="rlabel">Sales &amp; pilots</div>
                <a className="rval" href="mailto:hello@zera.health">
                  hello@zera.health
                </a>
                <div className="cnote" style={{ fontSize: ".9rem", color: "var(--l-faint)", marginTop: "5px" }}>
                  Demos, pilots, and founding-cohort access.
                </div>
              </div>
              <div className="row">
                <div className="rlabel">Response time</div>
                <div className="rval">Within one business day</div>
              </div>
              <div className="row">
                <div className="rlabel">Phone</div>
                <a className="rval" href="tel:+18007737499">
                  (800) 773-7499
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What you'll see */}
      <section className="section dark">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Live walkthrough</span>
            <h2>What you&apos;ll see.</h2>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="snum">01</div>
              <div className="sbody">
                <h4>Capture</h4>
                <p>Watch a real encounter become structured clinical documentation.</p>
              </div>
            </div>
            <div className="step">
              <div className="snum">02</div>
              <div className="sbody">
                <h4>Code</h4>
                <p>See how Zera derives CPT, ICD-10, modifiers, and J-code units directly from the note.</p>
              </div>
            </div>
            <div className="step">
              <div className="snum">03</div>
              <div className="sbody">
                <h4>Validate</h4>
                <p>See the pre-sign checks identify gaps before the provider signs.</p>
              </div>
            </div>
            <div className="step">
              <div className="snum">04</div>
              <div className="sbody">
                <h4>Trace</h4>
                <p>Click a code and trace it back to the exact documentation and moment in the encounter.</p>
              </div>
            </div>
            <div className="step">
              <div className="snum">05</div>
              <div className="sbody">
                <h4>Move forward</h4>
                <p>See how clean clinical information becomes the foundation for the revenue cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working session */}
      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">This isn&apos;t a slide presentation</span>
            <h2>It&apos;s a working session.</h2>
            <p className="lead">
              Bring your specialty workflow, typical encounters, payer mix, documentation requirements, and coding
              challenges. We&apos;ll use them to show you exactly where Zera fits into your existing operation — and what
              happens when the note, the code, and the revenue cycle finally speak the same language.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's office */}
      <section className="section dark founder">
        <div className="wrap">
          <div className="founder-card reveal">
            <span className="eyebrow">Founder&apos;s office</span>
            <p className="quote">&ldquo;Show me where your revenue leaks, and I&apos;ll show you one clean line.&rdquo;</p>
            <p>
              If you&apos;re an investor, a strategic partner, or a practice leader weighing something bigger than a
              standard demo — I&apos;d rather hear from you directly than through a form.
            </p>
            <a className="fmail" href="mailto:arvind@zera.health">
              Write to the founder&apos;s office →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
