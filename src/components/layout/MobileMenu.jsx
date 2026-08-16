"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  const menuLinks = [
    { label: "WORK", href: "/#work" },
    { label: "ABOUT", href: "/#about" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[var(--bg-primary)] border-l border-[var(--border-color)] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-[var(--border-color)]">
                <span className="text-sm font-bold tracking-widest text-[var(--text-main)]">
                  AKASH P
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close Menu"
                  className="px-3.5 py-1.5 text-xs font-mono font-bold tracking-widest rounded-full border border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--border-hover)]"
                >
                  CLOSE
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-6">
                {menuLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="text-2xl font-bold tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-[var(--border-color)] space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-sm font-mono text-[var(--text-main)]"
              >
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs font-mono text-[var(--text-dim)]">
                © 2026 AKASH P. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
