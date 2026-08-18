"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, X } from "lucide-react";

const MENU_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  // Lock body scroll when drawer is open & add ESC key listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const containerVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delayChildren: 0.15,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 30, rotateX: 45 },
    open: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
          className="fixed inset-0 z-50 w-screen h-screen min-h-[100svh] bg-[#07080c]/98 dark:bg-[#07080c]/98 backdrop-blur-2xl text-[var(--text-main)] p-6 sm:p-10 flex flex-col justify-between overflow-hidden"
        >
          {/* Header inside overlay with explicit CLOSE button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              AKASH P
            </span>
            <button
              onClick={onClose}
              aria-label="Close Navigation Menu"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-white/15 hover:border-white/40 transition-all active:scale-95 cursor-pointer"
            >
              <X className="w-3.5 h-3.5 text-sky-400" />
              <span>CLOSE</span>
            </button>
          </div>

          {/* Staggered Navigation Items */}
          <nav className="my-auto py-8">
            <motion.ul className="flex flex-col space-y-4 sm:space-y-6">
              {MENU_LINKS.map((link) => (
                <motion.li key={link.label} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="inline-block text-4xl sm:text-6xl font-normal tracking-tight uppercase text-white hover:text-[var(--accent)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Bottom Footer Info */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <span>{siteConfig.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </a>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              © 2026 AKASH P • KOZHIKODE, KERALA
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
