import type { Metadata } from "next";
import { BleedHead } from "@/components/Shared";
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
      <BleedHead
        title="See what happens when the revenue cycle starts in the exam room."
        sub="Bring us a real encounter. We'll show you how Zera turns it into a specialty-aware note, accurate coding, validated documentation, and a claim-ready record — and exactly where it catches the problems conventional workflows discover later."
        image="/hero-contact.jpg"
        imageAlt="Abstract network"
      />

      {/* Book a demo — form + details */}
      <section className="section light">
        <div className="wrap">
          <div className="contact">
            <div className="reveal">
              <h2>Book a 30-minute working demo.</h2>
              <p className="cintro">
                We&apos;ll bring the platform; you bring the complexity — a real encounter, your specialty workflow, and
                your payer mix. In thirty minutes, you&apos;ll see one clean pass from note to claim.
              </p>
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

      {/* Founder's office */}
      <section className="section light founder">
        <div className="wrap">
          <div className="founder-card reveal">
            <span className="eyebrow">From the founder</span>
            <p className="quote">
              &ldquo;Show me where your revenue leaks, and I&apos;ll show you <span className="accent">one clean line</span>.&rdquo;
            </p>
            <p>
              If you&apos;re an investor, a design partner, or a practice leader weighing something bigger than a standard
              demo, I&apos;d rather hear from you directly. Write to me and you&apos;ll get a reply from me — not a sales
              sequence — usually within a day.
            </p>
            <a className="fmail" href="mailto:arvind@zera.health">
              Write to me directly →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
