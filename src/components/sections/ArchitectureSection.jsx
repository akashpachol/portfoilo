"use client";

import TextReveal from "../ui/TextReveal";
import { ArrowRight } from "lucide-react";

export default function ArchitectureSection() {
  const pipeline = [
    "USER",
    "NEXT.JS",
    "REACT",
    "GRAPHQL / REST",
    "NODE.JS",
    "MONGODB",
  ];

  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            05 — Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-6">
            One request, end to end.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] mb-12">
            The shape of a request decides how an application feels. This is the path I design and build against — from the interface down to persistence.
          </p>
        </TextReveal>

        {/* Pipeline flow visual */}
        <TextReveal delay={0.1}>
          <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {pipeline.map((node, idx) => (
                <div key={node} className="flex items-center gap-4">
                  <div className="px-5 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs sm:text-sm font-mono font-bold tracking-widest text-[var(--text-main)]">
                    {node}
                  </div>
                  {idx < pipeline.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[var(--accent)] shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
