"use client";

import { useEffect, useRef } from "react";
import TextReveal from "../ui/TextReveal";
import { siteConfig } from "@/config/site";
import { CheckCircle2, MapPin, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".about-card", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".about-title", {
        yPercent: -5,
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

  const highlights = [
    "Scalable frontend architecture",
    "Performance optimization",
    "SEO & rendering strategy",
    "Reusable component systems",
    "API integration",
  ];

  return (
    <section ref={containerRef} id="about" className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            01 — About
          </div>
          <h2 className="about-title text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--text-main)] mb-12 max-w-4xl">
            Frontend engineer building scalable, performant, refined digital experiences.
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed">
            <TextReveal delay={0.1}>
              <p>
                I&apos;m a Next.js developer with 2.5+ years of experience shipping production-grade web applications. My work sits where interface craft meets architecture — component systems, rendering strategy and the data layer that holds it all together.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p>
                Day to day that means Next.js and React with TypeScript, Node.js and Express on the server, GraphQL through Apollo Client alongside REST APIs, and TurboRepo monorepos that keep multiple applications sharing one coherent component layer — tuned for performance and SEO.
              </p>
            </TextReveal>
          </div>

          {/* Highlight Summary Card */}
          <div className="lg:col-span-5">
            <TextReveal delay={0.3}>
              <div className="about-card p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-dim)] uppercase mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Currently</span>
                  </div>
                  <div className="text-xl font-bold text-[var(--text-main)]">
                    Next.js Developer
                  </div>
                  <div className="text-sm font-semibold text-[var(--accent)] mt-0.5">
                    Nexteons
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[var(--text-dim)] uppercase mb-3">
                    Focus
                  </div>
                  <ul className="space-y-3">
                    {highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[var(--text-muted)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-2 text-xs font-mono text-[var(--text-dim)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Based in {siteConfig.location}</span>
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
