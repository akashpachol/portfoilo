"use client";

import { useEffect, useRef } from "react";
import TextReveal from "../ui/TextReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceSection() {
  const containerRef = useRef(null);

  const appliedStrategies = [
    "SSR APPLIED",
    "ISR APPLIED",
    "Lazy Loading APPLIED",
    "Code Splitting APPLIED",
    "SEO APPLIED",
    "Reusable Components APPLIED",
    "Scalable Architecture APPLIED",
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".perf-badge",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 border-t border-[var(--border-color)]">
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
                className="perf-badge px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider border border-[var(--border-hover)] bg-[var(--bg-card)] text-[var(--text-main)] shadow-sm"
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
