import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Zera website, zera.health.",
  alternates: { canonical: "https://zera.health/terms-of-service" },
};

export default function TermsPage() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <span className="eyebrow reveal">Legal</span>
          <h1 className="reveal">Terms of Service</h1>
        </div>
      </header>

      <section className="section light">
        <div className="wrap">
          <div className="prose reveal">
            <p className="upd">Last updated: 5 July 2026</p>

            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of this website, zera.health (the
              &quot;Site&quot;), operated by NuScript Systems, Inc. (&quot;NuScript,&quot; &quot;Zera,&quot;
              &quot;we,&quot; &quot;us&quot;). By using the Site, you agree to these Terms. These Terms cover the
              marketing Site only; use of the Zera platform is governed by a separate product agreement and Business
              Associate Agreement.
            </p>

            <h2>Use of the Site</h2>
            <p>
              You may use the Site for lawful, informational purposes. You agree not to misuse the Site, interfere with
              its operation, attempt to gain unauthorized access, or use it to infringe the rights of others.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The Site and its content — including text, design, logos, and the Zera and NuScript names and marks — are
              owned by NuScript or its licensors and are protected by applicable laws. You may not copy, reproduce, or
              distribute Site content without our prior written permission.
            </p>

            <h2>No professional advice</h2>
            <p>
              Content on the Site is provided for general information only and does not constitute medical, legal,
              financial, coding, billing, or other professional advice. Coding and reimbursement decisions remain the
              responsibility of the provider.
            </p>

            <h2>Third-party links</h2>
            <p>
              The Site may link to third-party websites. We are not responsible for the content or practices of those
              sites, and links do not imply endorsement.
            </p>

            <h2>Disclaimers</h2>
            <p>
              The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any
              kind, to the fullest extent permitted by law.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, NuScript will not be liable for any indirect, incidental, or
              consequential damages arising out of your use of the Site.
            </p>

            <h2>Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of Texas, United States, without regard to its
              conflict-of-laws principles, and the state and federal courts located in Texas shall have jurisdiction,
              subject to any mandatory rights you may have under applicable law.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Site after changes take effect
              constitutes acceptance of the updated Terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these Terms? Contact <a href="mailto:hello@zera.health">hello@zera.health</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
