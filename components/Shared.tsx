import Link from "next/link";
import type { ReactNode } from "react";

export function PageHead({ eyebrow, title, sub, note, children }: { eyebrow: string; title: ReactNode; sub?: string; note?: ReactNode; children?: ReactNode }) {
  return (
    <header className="pagehead">
      <div className="wrap">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal">{title}</h1>
        {sub && <p className="sub reveal">{sub}</p>}
        {note && <p className="credline reveal">{note}</p>}
        {children}
      </div>
    </header>
  );
}

export function BleedHead({
  title,
  sub,
  image,
  imageAlt = "",
  children,
}: {
  title: ReactNode;
  sub?: string;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <header className="hero fb bleedhead">
      <div className="hero-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-bg-el" src={image} alt={imageAlt} />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap">
        <div className="fbcopy reveal">
          <h1>{title}</h1>
          {sub && <p className="sub">{sub}</p>}
          {children}
        </div>
      </div>
    </header>
  );
}

export function CtaBand() {
  return (
    <section className="careers">
      <div className="wrap">
        <div className="cta-card reveal">
          <div className="cta-body">
            <h2>See Zera run your encounters — note to claim.</h2>
            <p className="lead">
              Book a 30-minute working demo on your own specialty and payer mix. We&apos;re onboarding a small group of
              founding practices now.
            </p>
            <div className="cta">
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
              <Link href="/platform" className="btn btn-ghost">
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
