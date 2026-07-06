import Link from "next/link";
import type { ReactNode } from "react";

export function PageHead({ eyebrow, title, sub, note }: { eyebrow: string; title: ReactNode; sub?: string; note?: ReactNode }) {
  return (
    <header className="pagehead">
      <div className="wrap">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal">{title}</h1>
        {sub && <p className="sub reveal">{sub}</p>}
        {note && <p className="credline reveal">{note}</p>}
      </div>
    </header>
  );
}

export function CtaBand() {
  return (
    <section className="careers">
      <div className="wrap reveal">
        <span className="eyebrow">Get started</span>
        <h2>See Zera run your encounters — note to claim.</h2>
        <p className="lead">
          Book a 30-minute working demo on your own specialty and payer mix. We&apos;re onboarding a small group of
          founding practices now.
        </p>
        <div className="cta">
          <Link href="/contact" className="btn btn-primary">
            Book a demo
          </Link>
          <Link href="/product" className="btn btn-ghost">
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
