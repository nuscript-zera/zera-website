import type { Metadata } from "next";
import Link from "next/link";
import { BleedHead, CtaBand } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Zera is a product of NuScript Systems, Inc., built by operators who have run healthcare documentation and revenue cycle for decades and shipped production healthcare AI at scale — production-grade AI for the journey from clinical care to revenue.",
  alternates: { canonical: "https://zera.health/company" },
};

export default function CompanyPage() {
  return (
    <>
      <BleedHead
        title="We&apos;re building the revenue engine for specialty medicine."
        sub="Because we&apos;ve spent decades inside the work we&apos;re automating. Zera is a product of NuScript Systems, Inc. — production-grade AI for the journey from clinical care to revenue."
        image="/hero-company.jpg?v=3"
        imageAlt="The Zera team at work"
      >
        <div className="cta">
          <Link href="/contact" className="btn btn-primary">
            Book a demo
          </Link>
          <Link href="/platform" className="btn btn-ghost">
            See the platform
          </Link>
        </div>
      </BleedHead>

      {/* Our story */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Our story</span>
            <h2>We&apos;ve sat in every seat this software replaces.</h2>
          </div>
          <div className="prose reveal">
            <p>
              Zera started with people who spent decades doing the work — clinical documentation, medical coding,
              revenue-cycle operations, claims, corrections, denials, and all the handoffs in between. We didn&apos;t
              start with a model looking for a problem; we started with a problem we&apos;d fixed by hand thousands of
              times.
            </p>
            <p>
              We&apos;ve seen exactly where information gets lost. Zera is our attempt to eliminate that unnecessary
              distance — to carry what actually happened in the room all the way to a clean claim.
            </p>
          </div>
        </div>
      </section>

      {/* From documentation to revenue */}
      <section className="section light">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Proof in production</span>
            <h2>From documentation to revenue.</h2>
            <p className="lead">
              Our team also built Dictra, an AI clinical-documentation platform that processes more than 2,000 clinical
              minutes per day in live production at 99.5% audited accuracy. Zera applies that same production-first
              discipline to a bigger surface. The note is not the end of the workflow — it&apos;s the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* The name is the promise */}
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
                The original idea was simple — that nothing should be lost in the space between a clinical moment and a
                clean claim. No error introduced, no work repeated, nothing left in the gaps.
              </p>
              <p>
                As Zera has evolved, the destination has grown even bigger — from automating individual steps to running
                the cycle itself — into a <span className="accent">Zero-friction Engine for Revenue Autonomy</span>. The
                letters haven&apos;t changed. Neither has the destination: zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section light tint">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">How we work</span>
            <h2>AI-native. Operator-built. Production-first.</h2>
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
                Every capability has to survive real clinical and revenue-cycle workloads before we call it ready.
                Production is the test, not the launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
