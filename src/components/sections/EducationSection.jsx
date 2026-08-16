"use client";

import TextReveal from "../ui/TextReveal";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
            // EDUCATION
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-6 max-w-2xl">
            <div className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--accent)] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[var(--text-main)]">
                BCA
              </h3>
              <p className="text-sm font-semibold text-[var(--accent)] mt-0.5">
                Bachelor of Computer Applications
              </p>
              <p className="text-sm text-[var(--text-muted)] mt-2">
                Indira Gandhi National Open University
              </p>
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
