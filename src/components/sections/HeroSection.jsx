"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[140px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        {/* Location & Experience tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-xs text-[var(--text-muted)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{siteConfig.location}</span>
          <span className="text-[var(--text-dim)]">•</span>
          <span>{siteConfig.experience}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.95] mb-8"
        >
          AKASH P <br />
          <span className="text-gradient">NEXT.JS DEVELOPER</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed mb-12 font-normal"
        >
          Building digital experiences that scale — 2.5+ years of production work with Next.js, React and modern frontend architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--text-main)] text-[var(--bg-primary)] font-semibold text-sm hover:opacity-90 transition-all duration-200"
          >
            <span>View Work</span>
            <ArrowDown className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] font-semibold text-sm hover:border-[var(--border-hover)] transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-[var(--text-muted)]" />
            <span>Let&apos;s Talk</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
