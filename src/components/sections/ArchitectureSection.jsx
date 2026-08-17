"use client";

import { useEffect, useRef } from "react";
import TextReveal from "../ui/TextReveal";
import Parallax from "../ui/Parallax";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ArchitectureSection() {
  const containerRef = useRef(null);

  const pipeline = [
    "USER",
    "NEXT.JS",
    "REACT",
    "GRAPHQL / REST",
    "NODE.JS",
    "MONGODB",
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".arch-node",
        { opacity: 0.4, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 50%",
            scrub: true,
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
          <Parallax speed={-0.12}>
            <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl shadow-black/5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {pipeline.map((node, idx) => (
                  <div key={node} className="arch-node flex items-center gap-4">
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
          </Parallax>
        </TextReveal>
      </div>
    </section>
  );
}
