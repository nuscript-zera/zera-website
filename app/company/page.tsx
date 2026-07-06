import type { Metadata } from "next";
import { PageHead, CtaBand } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Zera is built by operators who have run healthcare documentation and revenue cycle for decades, and shipped production healthcare AI at scale. A product of NuScript Systems, Inc.",
  alternates: { canonical: "https://zera.health/company" },
};

export default function CompanyPage() {
  return (
    <>
      <PageHead
        eyebrow="Company"
        title={
          <>
            Operators building the <span className="accent">revenue engine</span> for specialty medicine.
          </>
        }
        sub="Zera is a product of NuScript Systems, Inc. We build production-grade AI for the parts of healthcare that quietly decide whether a practice gets paid — starting where the revenue cycle actually begins: the encounter."
        note={
          <>
            <span className="ci">25+ years in healthcare documentation &amp; RCM</span>
            <span className="sep">·</span>
            <span className="ci">Production AI shipping at scale today</span>
          </>
        }
      />

      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Our story</span>
            <h2>We&apos;ve sat in every seat this software replaces.</h2>
          </div>
          <div className="prose reveal">
            <p>
              Zera didn&apos;t start with a model looking for a problem. It started with operators who spent decades
              running clinical documentation and revenue cycle work — and who know exactly where a claim breaks, because
              they&apos;ve fixed those breaks by hand thousands of times.
            </p>
            <p>
              That team also built and runs Audryl, an AI clinical-documentation platform that processes over 2,000
              clinical minutes a day in live production at 99.5% audited accuracy. Zera applies that same
              production-first discipline to a bigger surface: not just the note, but the note, the code, and the claim
              as one continuous system.
            </p>
            <p>
              We&apos;re deliberately starting narrow — specialty medicine, beginning with retina — because that&apos;s
              where the coding is hardest, the dollars are largest, and getting it right matters most. Prove it where
              it&apos;s hardest, then expand.
            </p>
          </div>
        </div>
      </section>

      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Team</span>
            <h2>Founder-led, operator-built.</h2>
            <p className="lead">
              Zera is led by a founder who has spent a career inside the work it automates. Senior engineering and
              clinical hires are joining as we scale alongside the founding cohort.
            </p>
          </div>
          <div className="person reveal" style={{ maxWidth: "720px", marginTop: "40px" }}>
            <div className="prole">Founder &amp; CEO</div>
            <h3>Arvind Manohar</h3>
            <p>
              Twenty-five years across healthcare documentation and revenue cycle, and the technical founder behind both
              Audryl and Zera. He&apos;s built the platform hands-on — and run the operations it&apos;s designed to
              transform.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">How we work</span>
            <h2>AI-native. Operator-founded. Production-first.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Models at the core</h3>
              <p>
                Zera is designed around what modern models can do — and re-architected as they get better. AI isn&apos;t
                a feature bolted onto old billing software.
              </p>
            </div>
            <div className="pillar reveal">
              <h3>Built by operators</h3>
              <p>
                Decades inside documentation and revenue cycle. We know where the work is slow, error-prone, and
                expensive because we&apos;ve done it.
              </p>
            </div>
            <div className="pillar reveal">
              <h3>Proven before we scale</h3>
              <p>
                Every capability meets real clinical and billing workloads before we call it done. Production is the
                test, not the launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
