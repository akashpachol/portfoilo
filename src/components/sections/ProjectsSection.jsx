"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import TextReveal from "../ui/TextReveal";
import { projectsData } from "@/config/projects";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".project-card-num", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".project-card-box", {
        yPercent: -6,
        stagger: 0.15,
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
    <section ref={containerRef} id="work" className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            03 — Selected Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-main)] mb-2">
            Production work, built to scale.
          </h2>
          <p className="text-sm font-mono text-[var(--text-dim)] mb-16">
            3 Case Studies
          </p>
        </TextReveal>

        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <TextReveal key={project.id} delay={idx * 0.15}>
              <div className="project-card-box group relative p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Left Column */}
                  <div className="space-y-4 max-w-2xl">
                    <div className="project-card-num flex items-center gap-3 font-mono text-xs text-[var(--accent)] tracking-widest">
                      <span>{project.id}</span>
                      {project.company && (
                        <>
                          <span>—</span>
                          <span>{project.company}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold uppercase text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono border border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--bg-primary)]/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA */}
                  <div className="shrink-0">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono font-semibold uppercase text-[var(--text-main)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all duration-200"
                    >
                      <span>Case study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
