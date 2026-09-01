"use client";

import { aboutData } from "./aboutData";

export default function AboutIntro() {
  return (
    <div className="relative z-10 mb-12 sm:mb-16">
      {/* Eyebrow / Small Label */}
      <div className="about-eyebrow-container mb-4 overflow-hidden">
        <div className="about-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--about-accent)]/20 bg-[var(--about-accent-glow)] text-xs font-mono font-semibold uppercase tracking-widest text-[var(--about-accent)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--about-accent)] animate-pulse" />
          <span>01 — {aboutData.eyebrow}</span>
        </div>
      </div>

      {/* Main Hero Headline with Line Masks */}
      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-[var(--text-main)] max-w-5xl leading-[1.18] sm:leading-[1.1]">
        {aboutData.headlineLines.map((line, index) => (
          <span key={index} className="about-line-mask block py-0.5">
            <span className="about-line-inner block">
              {line}
            </span>
          </span>
        ))}
      </h2>

    </div>
  );
}
