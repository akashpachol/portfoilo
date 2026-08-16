"use client";

import { useState } from "react";
import TextReveal from "../ui/TextReveal";

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState(null);

  const categories = [
    {
      name: "FRONTEND",
      skills: ["Next.js", "React.js", "TypeScript", "JavaScript"],
    },
    {
      name: "BACKEND",
      skills: ["Node.js", "Express.js"],
    },
    {
      name: "APIS",
      skills: ["GraphQL", "Apollo Client", "REST APIs"],
    },
    {
      name: "ARCHITECTURE",
      skills: ["TurboRepo", "Monorepo", "MVC"],
    },
    {
      name: "DATABASE",
      skills: ["MongoDB"],
    },
    {
      name: "STYLING",
      skills: ["Tailwind CSS", "Material UI", "Bootstrap"],
    },
    {
      name: "TOOLS",
      skills: ["Git", "GitHub", "Postman"],
    },
    {
      name: "CONCEPTS",
      skills: ["SSR", "ISR", "SEO Optimization", "Performance Optimization"],
    },
  ];

  const isSkillActive = (skillName) => {
    if (!activeGroup) return true;
    const cat = categories.find((c) => c.name === activeGroup);
    return cat ? cat.skills.includes(skillName) : true;
  };

  const allSkills = categories.flatMap((c) => c.skills);

  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            04 — Tech Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-4">
            A connected technical ecosystem.
          </h2>
          <p className="text-sm font-mono text-[var(--text-muted)] mb-12">
            Hover a group to see it isolated from the rest of the stack.
          </p>
        </TextReveal>

        {/* Group Filters */}
        <TextReveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5 mb-12">
            <button
              onClick={() => setActiveGroup(null)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                activeGroup === null
                  ? "bg-[var(--text-main)] text-[var(--bg-primary)]"
                  : "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[var(--border-hover)]"
              }`}
            >
              ALL GROUPS
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onMouseEnter={() => setActiveGroup(cat.name)}
                onMouseLeave={() => setActiveGroup(null)}
                onClick={() =>
                  setActiveGroup(activeGroup === cat.name ? null : cat.name)
                }
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                  activeGroup === cat.name
                    ? "bg-[var(--accent)] text-slate-950"
                    : "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[var(--border-hover)]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </TextReveal>

        {/* Tech Skill Badges */}
        <TextReveal delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill) => {
              const active = isSkillActive(skill);
              return (
                <span
                  key={skill}
                  className={`px-5 py-3 rounded-xl text-sm font-mono tracking-wide transition-all duration-300 border ${
                    active
                      ? "border-[var(--border-hover)] bg-[var(--bg-card-hover)] text-[var(--text-main)] scale-100 opacity-100 shadow-sm"
                      : "border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-dim)] scale-95 opacity-30"
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
