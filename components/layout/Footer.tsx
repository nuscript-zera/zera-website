import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const platformLinks = [
  { label: "Platform", href: "/platform" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Zera", href: "/why-zera" },
  { label: "Managed RCM", href: "/managed-rcm" },
];

const getStartedLinks = [
  { label: "Book an Ophthalmology Demo", href: "/request-demo?interest=ophthalmology-demo" },
  { label: "Talk to Our Team", href: "/request-demo" },
  { label: "Login", href: "https://app.zera.health", external: true },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f172a" }} className="text-white/70">
      <div className="max-w-[1180px] mx-auto px-4 md:px-[1.5938rem] lg:px-[1.75rem] pt-16 pb-[45px]">
        {/* Belief band */}
        <div className="pb-10 lg:pb-12 mb-10 lg:mb-12 border-b border-white/10">
          <p
            className="text-xs font-semibold font-mono uppercase tracking-[0.2em] mb-5"
            style={{ color: "#60a5fa" }}
          >
            Our Belief
          </p>
          <h2 className="text-[2.1rem] md:text-[3rem] lg:text-[3.2rem] font-bold text-white leading-[1.02] tracking-[-0.02em] text-balance max-w-[60rem]">
            Note → Code → Claim.{" "}
            <span style={{ color: "#60a5fa" }}>One AI. Zero handoffs.</span>
          </h2>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/zera-logo-white.png?v=1"
                alt="Zera"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-md text-white/60">
              The autonomous revenue cycle platform for ambulatory specialty
              medicine. Every encounter — documented, coded, scrubbed, and
              claim-ready — in one workflow, in real time. Ophthalmology today,
              cardiology next.
            </p>
            <a
              href="mailto:hello@zera.health"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[#60a5fa] hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@zera.health
            </a>
          </div>

          <div>
            <h4
              className="text-xs font-semibold font-mono uppercase tracking-wider mb-4"
              style={{ color: "#E8F1FF", opacity: 0.7 }}
            >
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[18px] transition-colors hover:text-white"
                    style={{ color: "#E8F1FF" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-semibold font-mono uppercase tracking-wider mb-4"
              style={{ color: "#E8F1FF", opacity: 0.7 }}
            >
              Get Started
            </h4>
            <ul className="space-y-3">
              {getStartedLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[18px] transition-colors hover:text-white"
                      style={{ color: "#E8F1FF" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[18px] transition-colors hover:text-white"
                      style={{ color: "#E8F1FF" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-xs text-white/50">
              © 2026 Zera, a platform of NuScript Systems, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
              HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
              SOC 2 Aligned
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
