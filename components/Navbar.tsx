"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap row">
        <Link className="brand" href="/" aria-label="Zera home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/zera-logo-white.png" alt="Zera" className="brandlogo logo-white" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/zera-logo.png" alt="Zera" className="brandlogo logo-dark" />
        </Link>
        <div className="navlinks">
          <Link href="/product">Product</Link>
          <Link href="/company">Company</Link>
          <Link href="/contact" className="btn btn-primary">Book a demo</Link>
        </div>
        <button className="navtoggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <div className={"navmenu" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        <Link href="/product">Product</Link>
        <Link href="/company">Company</Link>
        <Link href="/contact" className="btn btn-primary">Book a demo</Link>
      </div>
    </nav>
  );
}
