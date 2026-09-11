import Link from "next/link";
// Imported so Next fingerprints the URL with a content hash — updating the file
// auto-busts the browser/CDN cache (no manual version bump needed).
import logoWhite from "../public/zera-logo-white.png";

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
              <img src={logoWhite.src} width={logoWhite.width} height={logoWhite.height} alt="Zera" className="footlogo" />
            </Link>
            <span className="foottag" style={{ marginTop: "14px" }}>Revenue AI · Specialty medicine</span>
            <p className="desc">
              The autonomous revenue platform for specialty medicine. Note to code to claim, in one system.
            </p>
            <a className="footmail" href="mailto:hello@zera.health">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
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
          </div>
        </div>
        <div className="base">
          <div className="baseleft">
            <span>© {year} Zera, a product of NuScript Systems, Inc.</span>
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
            <span className="badge">HIPAA</span>
            <span className="badge">SOC 2</span>
            <span className="badge">BAA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}