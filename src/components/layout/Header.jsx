"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { label: "HOME", href: "#home", id: "home" },
  { label: "WORK", href: "#work", id: "work" },
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "EXPERIENCE", href: "#experience", id: "experience" },
  { label: "CONTACT", href: "#contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // IntersectionObserver for desktop bottom dock active section tracking
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      {/* 1. MOBILE TOP HEADER (Rendered < md: 768px) */}
      <header className="block md:hidden fixed top-0 left-0 right-0 z-40 bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-color)] px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Brand Identity */}
          <Link
            href="#home"
            className="text-sm font-bold tracking-widest text-[var(--text-main)] hover:opacity-80 transition-opacity uppercase"
          >
            AKASH P
          </Link>

          {/* Right Controls: Exact Order -> [THEME TOGGLE ICON] then [ANIMATED MENU BUTTON] */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
              className="relative z-50 px-4 py-2 text-xs font-mono font-bold tracking-widest rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] overflow-hidden transition-all duration-200 active:scale-95"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "CLOSE" : "MENU"}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="block"
                >
                  {mobileMenuOpen ? "CLOSE" : "MENU"}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* 2. DESKTOP & TABLET FIXED BOTTOM-CENTER FLOATING NAV DOCK (Rendered >= md: 768px) */}
      <nav
        aria-label="Primary Desktop Navigation"
        className="bottom-nav-dock hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-max pb-[env(safe-area-inset-bottom)]"
      >
        <div className="flex items-center gap-6 px-7 py-3 rounded-full bg-[#0a0c14]/90 dark:bg-[#0a0c14]/90 border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300">
          <ul className="flex items-center gap-6 text-xs font-mono tracking-widest uppercase">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`relative px-2 py-1 inline-block transition-all duration-200 hover:-translate-y-0.5 ${
                      isActive
                        ? "text-white font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                        : "text-slate-300 hover:text-white font-medium opacity-85 hover:opacity-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-pulse" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider & Integrated Theme Toggle */}
          <div className="w-px h-4 bg-white/20" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Fullscreen Cinematic Drawer Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
