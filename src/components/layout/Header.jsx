"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-color)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-widest text-[var(--text-main)] hover:opacity-80 transition-opacity"
        >
          AKASH P
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono font-semibold tracking-widest text-[var(--text-muted)]">
          <Link
            href="/#work"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            WORK
          </Link>
          <Link
            href="/#about"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="/#experience"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            EXPERIENCE
          </Link>
          <Link
            href="/#contact"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--border-hover)] transition-all duration-200"
          >
            <span>{siteConfig.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="px-3.5 py-1.5 text-xs font-mono font-bold tracking-widest rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)]"
          >
            MENU
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
