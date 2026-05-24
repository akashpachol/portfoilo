"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 font-display text-base italic">
            <span className="absolute inset-0 rounded-full glow-orange opacity-50"></span>
            <span className="relative text-white">A</span>
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 md:block">
            Akash P · Portfolio · ’26
          </span>
        </a>
        
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 px-2 py-2 backdrop-blur-xl md:flex transition-colors bg-white/[0.03]">
          <a
            href="#work"
            className="relative rounded-full px-4 py-1.5 text-[12px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            Work
          </a>
          <a
            href="#about"
            className="relative rounded-full px-4 py-1.5 text-[12px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#experience"
            className="relative rounded-full px-4 py-1.5 text-[12px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="relative rounded-full px-4 py-1.5 text-[12px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-md transition-all hover:border-[color:var(--primary)]/60 hover:text-[color:var(--primary)]"
        >
          Available
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--primary)] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--primary)]"></span>
          </span>
        </a>
      </div>
    </header>
  );
}
