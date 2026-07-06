import type { Metadata } from "next";
import { PageHead } from "@/components/Shared";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Get in touch with Zera — book a demo, start a pilot, join the founding cohort, or reach the founder's office about investment and partnerships.",
  alternates: { canonical: "https://zera.health/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Let&apos;s see Zera on your encounters."
        sub="Whether you run a specialty practice, want to pilot Zera, or you're an investor — tell us where revenue is leaking today and we'll show you what one clean pass looks like."
      />

      <section className="section light">
        <div className="wrap">
          <div className="contact">
            <div className="reveal">
              <h2>Tell us about your practice.</h2>
              <ContactForm />
            </div>

            <aside className="hqcard reveal">
              <div className="row">
                <div className="rlabel">Entity</div>
                <div className="rval">
                  NuScript Systems, Inc.
                  <br />
                  Texas C-Corporation
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
                <div className="rlabel">Web</div>
                <a className="rval" href="https://zera.health">
                  zera.health
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section dark founder">
        <div className="wrap reveal">
          <span className="eyebrow">Founder&apos;s office</span>
          <p className="quote">&ldquo;Show me where your revenue leaks, and I&apos;ll show you one clean line.&rdquo;</p>
          <p>
            If you&apos;re an investor, a strategic partner, or a practice leader weighing something bigger than a
            standard demo — I&apos;d rather hear from you directly than through a form.
          </p>
          <a className="fmail" href="mailto:hello@zera.health">
            Write to the founder&apos;s office →
          </a>
        </div>
      </section>
    </>
  );
}
