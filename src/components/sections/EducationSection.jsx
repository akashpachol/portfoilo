"use client";

import TextReveal from "../ui/TextReveal";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            08 — Education
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-6 max-w-2xl">
            <div className="p-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--accent)] shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                BCA
              </h3>
              <p className="text-sm font-semibold text-[var(--accent)] mt-0.5 font-mono">
                Bachelor of Computer Applications
              </p>
              <p className="text-sm text-[var(--text-muted)] mt-2">
                Indira Gandhi National Open University
              </p>
              <p className="text-xs text-[var(--text-dim)] font-mono mt-3">
                2018 — 2021
              </p>
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
