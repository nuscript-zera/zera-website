import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="belief">
          <span className="eyebrow">Our belief</span>
          <h2>
            The path from care to payment should be <span className="accent">one clean line</span>.
          </h2>
        </div>
        <div className="grid">
          <div>
            <Link className="brand" href="/" aria-label="Zera home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/zera-logo.png" alt="Zera" className="footlogo" />
            </Link>
            <span className="foottag" style={{ marginTop: "14px" }}>Revenue AI · Specialty medicine</span>
            <p className="desc">
              The autonomous revenue platform for specialty medicine. Note to code to claim, in one system.
            </p>
            <a className="footmail" href="mailto:hello@zera.health">
              hello@zera.health
            </a>
          </div>
          <div className="col">
            <h4>Explore</h4>
            <Link href="/platform">Platform</Link>
            <Link href="/company">Company</Link>
            <Link href="/contact">Book a demo</Link>
          </div>
          <div className="col">
            <h4>Connect</h4>
            <Link href="/contact">Contact</Link>
            <a href="mailto:hello@zera.health">Sales &amp; pilots</a>
            <a className="investor" href="mailto:arvind@zera.health">
              For investors — get in touch →
            </a>
          </div>
        </div>
        <div className="base">
          <div className="baseleft">
            <span>© {year} NuScript Systems, Inc. Zera is a product of NuScript Systems, Inc.</span>
            <div className="legal">
              <Link className="lg" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="lg" href="/terms-of-service">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="baseright">
            <span className="badge">
              <span className="chk">✓</span>HIPAA Compliant
            </span>
            <span className="badge">
              <span className="chk">✓</span>BAA Available
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
