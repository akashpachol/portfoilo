"use client";

import TextReveal from "../ui/TextReveal";
import { Zap, ShieldCheck, Gauge } from "lucide-react";

export default function PerformanceSection() {
  const metrics = [
    { label: "Core Web Vitals", value: "95+", icon: Gauge },
    { label: "LCP Target", value: "< 2.5s", icon: Zap },
    { label: "CLS Target", value: "< 0.1", icon: ShieldCheck },
  ];

  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
            // PERFORMANCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-6">
            Built to perform.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] mb-12">
            Fast interfaces are not an afterthought. They are part of the architecture.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, idx) => {
            const IconComponent = m.icon;
            return (
              <TextReveal key={m.label} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-[var(--text-muted)]">
                      {m.label}
                    </span>
                    <IconComponent className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="text-4xl font-extrabold text-[var(--text-main)] font-mono">
                    {m.value}
                  </div>
                </div>
              </TextReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
