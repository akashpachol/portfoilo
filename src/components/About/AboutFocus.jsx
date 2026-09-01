"use client";

import { aboutData } from "./aboutData";
import { ArrowUpRight } from "lucide-react";

export default function AboutFocus() {
  return (
    <div className="relative z-10 space-y-4">
      <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
        Core Focus & Specialization
      </div>

      <div className="space-y-3">
        {aboutData.focus.map((item, index) => (
          <div
            key={index}
            className="about-focus-item group flex items-center justify-between p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 hover:border-[var(--about-accent)]/40 transition-all duration-300 shadow-md"
          >

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold text-[var(--about-accent)] bg-[var(--about-accent-glow)] px-2.5 py-1 rounded-md">
                {item.number}
              </span>
              <span className="text-base font-semibold text-[var(--text-main)] group-hover:text-[var(--about-accent)] transition-colors">
                {item.title}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--text-dim)] group-hover:text-[var(--about-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}
