"use client";

import TextReveal from "../ui/TextReveal";

export default function ArchitectureSection() {
  const strategies = [
    "SSR",
    "ISR",
    "Lazy Loading",
    "Code Splitting",
    "SEO",
    "Reusable Components",
    "Scalable Architecture",
  ];

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand the product, its users and the constraints before a single component exists. Requirements shape architecture — not the other way around.",
    },
    {
      num: "02",
      title: "ARCHITECT",
      desc: "Define the rendering strategy, data layer and module boundaries. Monorepo structure, shared component libraries and typed contracts from day one.",
    },
    {
      num: "03",
      title: "BUILD",
      desc: "Compose reusable, accessible interfaces in Next.js and React, wired to GraphQL and REST APIs with predictable state and clean naming.",
    },
    {
      num: "04",
      title: "OPTIMIZE",
      desc: "Tune with SSR, ISR, lazy loading and code splitting. Refine SEO, semantics and maintainability so the product stays fast as it grows.",
    },
  ];

  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
            // ARCHITECTURE & METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-6">
            One request, end to end.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] mb-10">
            The shape of a request decides how an application feels. This is the path I design and build against — from the interface down to persistence.
          </p>
        </TextReveal>

        {/* Strategy Pills */}
        <TextReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-16">
            {strategies.map((s) => (
              <span
                key={s}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)]"
              >
                {s}
              </span>
            ))}
          </div>
        </TextReveal>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <TextReveal key={step.num} delay={idx * 0.1}>
              <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all duration-300">
                <div className="text-sm font-mono font-bold text-[var(--accent)] mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold tracking-wider uppercase text-[var(--text-main)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
