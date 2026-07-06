import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NuScript Systems, Inc. collects, uses, and protects information on zera.health.",
  alternates: { canonical: "https://zera.health/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <span className="eyebrow reveal">Legal</span>
          <h1 className="reveal">Privacy Policy</h1>
        </div>
      </header>

      <section className="section light">
        <div className="wrap">
          <div className="prose reveal">
            <p className="upd">Last updated: 5 July 2026</p>

            <p>
              This Privacy Policy explains how NuScript Systems, Inc. (&quot;NuScript,&quot; &quot;Zera,&quot;
              &quot;we,&quot; &quot;us&quot;) handles information in connection with this website, zera.health (the
              &quot;Site&quot;). It applies to the marketing Site only. The Zera platform is governed by its own
              product-specific privacy terms and a Business Associate Agreement (BAA) entered into before any protected
              health information is processed.
            </p>

            <h2>Who we are</h2>
            <p>
              Zera is a product of NuScript Systems, Inc., a Texas corporation. For any privacy questions, contact us at{" "}
              <a href="mailto:hello@zera.health">hello@zera.health</a>.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Information you provide.</strong> When you email us or submit a contact or demo request, we
                receive your name, work email, practice or organization, and the contents of your message.
              </li>
              <li>
                <strong>Usage information.</strong> Like most websites, we may collect basic technical data such as
                browser type, device, and pages visited, through standard server logs and privacy-respecting analytics.
              </li>
            </ul>

            <h2>How we use information</h2>
            <ul>
              <li>To respond to your enquiries, schedule demos, and communicate with you.</li>
              <li>To operate, maintain, and improve the Site.</li>
              <li>To protect the security and integrity of the Site.</li>
            </ul>

            <h2>Protected health information</h2>
            <p>
              This marketing Site is not intended for the submission of patient data. Any handling of protected health
              information occurs only within the Zera platform, under a signed BAA and applicable HIPAA safeguards — not
              through this Site.
            </p>

            <h2>Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with service providers who help us
              operate the Site (for example, hosting and email), under appropriate confidentiality obligations, and
              where required by law.
            </p>

            <h2>Data security &amp; retention</h2>
            <p>
              We apply reasonable technical and organizational measures to protect information, and retain it only for as
              long as necessary for the purposes described here or as required by law.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete your personal information, or
              to object to certain processing. To exercise any of these, contact{" "}
              <a href="mailto:hello@zera.health">hello@zera.health</a>.
            </p>

            <h2>Changes</h2>
            <p>
              We may update this policy from time to time. Material changes will be reflected by updating the date at the
              top of this page.
            </p>

            <h2>Contact</h2>
            <p>
              NuScript Systems, Inc. —{" "}
              <a href="mailto:hello@zera.health">hello@zera.health</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
