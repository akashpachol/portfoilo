"use client";

import { useState } from "react";
import TextReveal from "../ui/TextReveal";
import { skillsData } from "@/config/skills";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  const isSkillActive = (skillName) => {
    if (!activeCategory) return true;
    const cat = skillsData.categories.find((c) => c.name === activeCategory);
    return cat ? cat.skills.includes(skillName) : true;
  };

  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
            // TECHNICAL ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-4">
            {skillsData.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mb-12">
            {skillsData.subtitle}
          </p>
        </TextReveal>

        {/* Category Filters */}
        <TextReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === null
                  ? "bg-[var(--text-main)] text-[var(--bg-primary)]"
                  : "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[var(--border-hover)]"
              }`}
            >
              All Technologies
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.name}
                onMouseEnter={() => setActiveCategory(cat.name)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.name ? null : cat.name
                  )
                }
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.name
                    ? "bg-[var(--accent)] text-slate-950 font-bold"
                    : "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[var(--border-hover)]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </TextReveal>

        {/* Skills Tag Grid */}
        <TextReveal delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {skillsData.allSkills.map((skill) => {
              const active = isSkillActive(skill);
              return (
                <span
                  key={skill}
                  className={`px-5 py-3 rounded-xl text-sm font-mono tracking-wide transition-all duration-300 border ${
                    active
                      ? "border-[var(--border-hover)] bg-[var(--bg-card-hover)] text-[var(--text-main)] scale-100 opacity-100 shadow-sm"
                      : "border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-dim)] scale-95 opacity-40"
                  }`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
