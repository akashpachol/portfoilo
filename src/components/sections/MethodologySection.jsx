"use client";

import { useEffect, useRef } from "react";
import TextReveal from "../ui/TextReveal";
import Parallax from "../ui/Parallax";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MethodologySection() {
  const containerRef = useRef(null);

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".method-card", {
        yPercent: -8,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            06 — How I Build
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-16">
            Method before markup.
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <TextReveal key={step.num} delay={idx * 0.1}>
              <Parallax speed={idx % 2 === 0 ? 0.08 : -0.08}>
                <div className="method-card p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all duration-300 shadow-lg shadow-black/5">
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
              </Parallax>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
