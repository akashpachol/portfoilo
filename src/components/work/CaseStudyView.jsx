"use client";

import Link from "next/link";
import TextReveal from "../ui/TextReveal";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CustomCursor from "../ui/CustomCursor";
import { ArrowLeft, ArrowRight, CheckCircle, Layers, AlertCircle } from "lucide-react";

export default function CaseStudyView({ project }) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] selection:bg-sky-500 selection:text-white">
      <CustomCursor />
      <Header />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <TextReveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All work</span>
          </Link>
        </TextReveal>

        {/* Title Header */}
        <TextReveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[var(--text-main)] mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] font-mono mb-8">
            <span className="text-[var(--accent)] font-semibold">{project.role}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-16">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 rounded-full text-xs font-mono border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </TextReveal>

        {/* Overview */}
        <TextReveal delay={0.2}>
          <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] mb-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
              // OVERVIEW
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed">
              {project.overview}
            </p>
          </div>
        </TextReveal>

        {/* Key Features & Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Key Features */}
          <TextReveal delay={0.3}>
            <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] h-full">
              <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--text-dim)] mb-6 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                <span>KEY FEATURES</span>
              </h2>
              <ul className="space-y-3">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-[var(--text-muted)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TextReveal>

          {/* Architecture */}
          <TextReveal delay={0.4}>
            <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] h-full">
              <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--text-dim)] mb-6 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[var(--accent)]" />
                <span>ARCHITECTURE</span>
              </h2>
              <ul className="space-y-3">
                {project.architecture.map((arch, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-[var(--text-muted)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TextReveal>
        </div>

        {/* Challenges */}
        <TextReveal delay={0.5}>
          <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--text-dim)] mb-6 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[var(--accent)]" />
              <span>CHALLENGES & SOLUTIONS</span>
            </h2>
            <ul className="space-y-4">
              {project.challenges.map((chal, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-base text-[var(--text-muted)] leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>
        </TextReveal>

        {/* Next Project & Contact Actions */}
        <TextReveal delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card-hover)]">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text-main)] text-[var(--bg-primary)] text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Start a conversation
            </Link>

            {project.nextSlug && (
              <Link
                href={`/work/${project.nextSlug}`}
                className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                <span>Next project: <strong className="text-[var(--text-main)]">{project.nextTitle}</strong></span>
                <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
              </Link>
            )}
          </div>
        </TextReveal>
      </main>

      <Footer />
    </div>
  );
}
