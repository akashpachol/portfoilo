"use client";

import { aboutData } from "./aboutData";
import { Building2, Sparkles } from "lucide-react";

export default function AboutExperience() {
  return (
    <div className="about-exp-block relative z-10 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 shadow-xl shadow-black/10">

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-[var(--about-accent)]" />
          <span>Role & Experience</span>
        </div>
        <Sparkles className="w-4 h-4 text-[var(--about-accent)] opacity-70" />
      </div>

      <div className="space-y-1">
        <div className="about-role-title text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--text-main)]">
          {aboutData.role}
        </div>
        <div className="about-company-name text-sm font-bold uppercase tracking-widest text-[var(--about-accent)]">
          {aboutData.company}
        </div>
      </div>

      {/* Expanding Divider Line */}
      <div className="about-divider-line w-full h-[1px] bg-gradient-to-r from-[var(--about-accent)] via-[var(--border-color)] to-transparent my-6" />

      <div className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest">
        2.5+ Years Shipping Web Apps
      </div>
    </div>
  );
}
