"use client";

import TextReveal from "../ui/TextReveal";
import { experienceData } from "@/config/experience";
import { Calendar } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            02 — Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-16">
            Work Experience
          </h2>
        </TextReveal>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <TextReveal key={exp.company} delay={idx * 0.15}>
              <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                      {exp.company}
                    </h3>
                    <div className="text-sm font-mono font-semibold tracking-wider text-[var(--accent)] mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] font-mono">
                    <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[var(--border-color)] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 text-sm sm:text-base text-[var(--text-muted)]">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
