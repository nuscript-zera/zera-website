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
              That team also built and runs Dictra, an AI clinical-documentation platform that processes over 2,000
              clinical minutes a day in live production at 99.5% audited accuracy. Zera applies that same
              production-first discipline to a bigger surface: not just the note, but the note, the code, and the claim
              as one continuous system.
            </p>
            <p>
              Retina has some of the hardest coding in medicine — anti-VEGF drug units, OD/OS laterality, diabetic
              retinopathy staging, MEAT documentation — and the most revenue at stake when any of it is wrong.
              That&apos;s exactly why we built Zera for it. We go deep on your specialty instead of spreading thin across
              all of medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & meaning */}
      <section className="section dark">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Origin &amp; meaning</span>
            <h2>The name is the promise.</h2>
          </div>
          <div className="origin reveal">
            <div className="origin-mark">
              <div className="oword">Zera</div>
              <div className="opron">/ zee-ruh /</div>
              <div className="oexp">Zero Error Revenue Automation</div>
            </div>
            <div className="origin-copy">
              <p>
                Four letters, one idea — that nothing should be lost in the space between a clinical moment and a clean
                claim. No error introduced, no work repeated, nothing left in the gaps.
              </p>
              <p>
                The meaning has grown as the platform has — from automating individual steps to fully running the cycle
                on its own — evolving into a <span className="accent">Zero-friction Engine for Revenue Autonomy</span>. The letters never change.
                Neither does the ultimate destination — zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Founder-led, operator-built</span>
            <h2>Who&apos;s behind Zera.</h2>
            <p className="lead">
              Zera is led by a founder who has spent a career inside the work it automates — someone personally
              accountable for getting your coding and claims right, backed by a track record of shipping production
              healthcare AI at scale.
            </p>
          </div>
          <div className="person reveal" style={{ maxWidth: "720px", marginTop: "40px" }}>
            <div className="prole">Founder &amp; CEO</div>
            <h3>Arvind Manohar</h3>
            <p>
              Twenty-five years across healthcare documentation and revenue cycle, and the technical founder behind both
              Dictra and Zera. He&apos;s built the platform hands-on — and run the operations it&apos;s designed to
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