"use client";

import TextReveal from "../ui/TextReveal";

export default function PerformanceSection() {
  const appliedStrategies = [
    "SSR APPLIED",
    "ISR APPLIED",
    "Lazy Loading APPLIED",
    "Code Splitting APPLIED",
    "SEO APPLIED",
    "Reusable Components APPLIED",
    "Scalable Architecture APPLIED",
  ];

  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            07 — Performance
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-6">
            Built to perform.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] mb-12">
            Fast interfaces are not an afterthought. They are part of the architecture.
          </p>
        </TextReveal>

        <TextReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {appliedStrategies.map((strat) => (
              <span
                key={strat}
                className="px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider border border-[var(--border-hover)] bg-[var(--bg-card)] text-[var(--text-main)] shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-2 animate-pulse" />
                {strat}
              </span>
            ))}
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
