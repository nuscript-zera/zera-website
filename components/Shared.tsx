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
  eyebrow,
  title,
  sub,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow?: string;
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
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
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
            <h2>See Zera on your own visits.</h2>
            <p className="lead">
              Primary care and psychiatry practices can try Zera Scribe free for 14 days. Ophthalmology practices can
              book a 30-minute working demo of Zera Revenue on their own workflow and payer mix.
            </p>
            <div className="cta">
              <a href="https://zerascribe.com" className="btn btn-primary">
                Try Zera Scribe free
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
