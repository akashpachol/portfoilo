"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Step 1 & 2: Top micro copy fade up
      tl.fromTo(
        ".hero-meta-left",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-meta-right",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        // Step 3: Large Headline line reveal
        .fromTo(
          ".hero-headline-line",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            clearProps: "all",
          },
          "-=0.3"
        )
        // Step 4: Description paragraph
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        // Step 5: Buttons
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        // Step 6: Scroll indicator
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] pt-28 pb-10 flex flex-col justify-between overflow-hidden border-b border-[var(--border-color)]"
    >
      {/* Editorial Hairline Grid Background overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "20% 100%",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 my-auto flex flex-col justify-between h-full">
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[var(--border-color)]">
          <div className="hero-meta-left text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase space-y-1">
            <div>{siteConfig.location}</div>
            <div>{siteConfig.experience}</div>
          </div>
          <div className="hero-meta-right text-xs font-mono font-bold tracking-widest text-[var(--text-main)] uppercase">
            FRONTEND ENGINEER
          </div>
        </div>

        {/* Main Display Headline */}
        <div className="py-4">
          <h1
            className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-normal leading-[1.05] tracking-tight uppercase text-[var(--text-main)] selection:bg-amber-300 selection:text-slate-950"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            <div className="py-1">
              <div className="hero-headline-line block">AKASH P</div>
            </div>
            <div className="py-1">
              <div className="hero-headline-line block">NEXT.JS</div>
            </div>
            <div className="py-1">
              <div className="hero-headline-line block">DEVELOPER</div>
            </div>
          </h1>
        </div>

        {/* Lower Content Grid */}
        <div className="pt-6 border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Description */}
          <div className="hero-description md:col-span-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
            Building digital experiences that scale — 2.5+ years of production work with Next.js, React and modern frontend architecture.
          </div>

          {/* Action CTAs */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-4">
            <Link
              href="#work"
              className="hero-btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[var(--text-main)] text-[var(--bg-primary)] text-xs font-mono font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-200"
            >
              <span>VIEW WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="hero-btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] text-xs font-mono font-bold tracking-widest uppercase hover:border-[var(--border-hover)] transition-all duration-200"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="hero-scroll pt-8 flex items-center gap-3 text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest">
          <span>SCROLL</span>
          <span className="w-px h-6 bg-[var(--border-color)] relative overflow-hidden inline-block">
            <span className="absolute top-0 left-0 w-full h-1/2 bg-[var(--text-main)] animate-[scroll-cue_2.2s_ease-in-out_infinite]" />
          </span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-cue {
          0% {
            transform: translateY(-100%);
          }
          60% {
            transform: translateY(200%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </section>
  );
}
