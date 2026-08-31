"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown, Move } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const GREETINGS = [
  "Hello,",
  "Hey,",
  "Namaste,",
  "Bonjour,",
  "Konichiwa,",
  "Salaam,",
  "Hola,",
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const polaroidRef = useRef(null);
  const secondaryBadgeRef = useRef(null);
  const greetingRef = useRef(null);
  const headlineRef = useRef(null);
  const [greetingIdx, setGreetingIdx] = useState(0);

  // Greeting cycling effect using GSAP
  useEffect(() => {
    const interval = setInterval(() => {
      const el = greetingRef.current;
      if (!el) return;

      // Animate out current greeting, then update state and animate in new greeting
      gsap.to(el, {
        y: -14,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setGreetingIdx((prev) => (prev + 1) % GREETINGS.length);
          gsap.fromTo(
            el,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
          );
        },
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Main GSAP entrance, scroll choreography & mouse parallax
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
        .fromTo(
          ".hero-greeting-box",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ".hero-headline-line",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            clearProps: "all",
          },
          "-=0.3"
        )
        .fromTo(
          polaroidRef.current,
          {
            opacity: 0,
            y: 60,
            x: 25,
            rotate: -6,
            scale: 0.93,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: -2.5,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.7"
        )
        .fromTo(
          secondaryBadgeRef.current,
          { opacity: 0, scale: 0.8, rotate: 8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            rotate: 4,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.6"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.4"
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          ".bottom-nav-dock",
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );

      // 2. Parallax scroll scrub choreography
      gsap.to(headlineRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // NOTE: No scroll parallax on polaroid — it's drag-managed by Framer Motion.
      // Mixing GSAP scroll transforms + Framer drag causes misalignment.

      gsap.to(secondaryBadgeRef.current, {
        yPercent: -28,
        rotate: -2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. Desktop mouse parallax (zero React re-renders)
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop && containerRef.current) {
        const handleMouseMove = (e) => {
          const rect = containerRef.current.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(secondaryBadgeRef.current, {
            x: relX * -14,
            y: relY * -14,
            rotate: relX * -3 + 4,
            duration: 0.9,
            ease: "power2.out",
          });

          gsap.to(headlineRef.current, {
            x: relX * 4,
            y: relY * 4,
            duration: 0.8,
            ease: "power2.out",
          });
        };

        const containerEl = containerRef.current;
        containerEl.addEventListener("mousemove", handleMouseMove);
        return () => containerEl.removeEventListener("mousemove", handleMouseMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100svh] pt-20 sm:pt-20 md:pt-14 pb-16 flex flex-col justify-between overflow-hidden border-b border-[var(--border-color)]"
    >
      {/* Background GIF Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/backgroundHero.gif"
          alt=""
          fill
          unoptimized
          priority
          className="object-cover object-center opacity-[0.18] dark:opacity-[0.22] mix-blend-luminosity filter contrast-[1.1]"
        />
        {/* Soft Gradient Overlay for Optimal Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/70 via-transparent to-[var(--bg-primary)]/80" />
      </div>

      {/* Hairline Grid Background overlay */}
      <div
        aria-hidden
        className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-color) 1px, transparent 1px), linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "12.5% 80px",
        }}
      />

      {/* Subtle Background Glow Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-500/10 blur-[130px] z-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-12 -left-24 w-80 h-80 rounded-full bg-indigo-500/10 blur-[110px] z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 my-auto flex flex-col justify-between h-full">
        {/* Top Metadata Row */}
        <div className="hero-meta-row flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[var(--border-color)]">
          <div className="hero-meta-left text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase space-y-1">
            <div>{siteConfig.location}</div>
            <div>{siteConfig.experience}</div>
          </div>
          <div className="hero-meta-right text-xs font-mono font-bold tracking-widest text-[var(--text-main)] uppercase">
            FRONTEND ENGINEER
          </div>
        </div>

        {/* Central Editorial Layout (Typography + Polaroid) */}
        <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines & Greeting */}
          <div className="lg:col-span-7 space-y-4">
            {/* Dynamic Greeting */}
            <div className="hero-greeting-box flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="overflow-hidden inline-block h-5">
                <span ref={greetingRef} className="inline-block">
                  {GREETINGS[greetingIdx]}
                </span>
              </span>
              <span className="text-[var(--text-dim)] font-normal ml-1">
                I&apos;M AKASH
              </span>
            </div>

            {/* Stable Main Headline */}
            <div ref={headlineRef} className="hero-headline-container">
              <h1
                className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem] xl:text-[6.8rem] font-normal leading-[1.03] tracking-tight uppercase text-[var(--text-main)] selection:bg-amber-300 selection:text-slate-950"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                <div className="overflow-hidden py-0.5">
                  <div className="hero-headline-line block">AKASH P</div>
                </div>
                <div className="overflow-hidden py-0.5">
                  <div className="hero-headline-line block">NEXT.JS</div>
                </div>
                <div className="overflow-hidden py-0.5">
                  <div className="hero-headline-line block">DEVELOPER</div>
                </div>
              </h1>
            </div>
          </div>

          {/* Right Column: Physical Polaroid Card & Secondary Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end py-6 lg:py-0">
            {/* Secondary Subordinate Floating Badge */}
            <div
              ref={secondaryBadgeRef}
              className="absolute -top-4 left-6 sm:left-12 lg:-left-6 z-20 px-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-hover)] text-xs font-mono font-bold tracking-widest text-[var(--text-main)] shadow-xl shadow-black/40 flex items-center gap-2 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>2.5+ YRS PROD</span>
            </div>

            {/* Physical Polaroid Photo Card (Draggable) */}
            <motion.div
              ref={polaroidRef}
              drag
              dragMomentum={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              whileDrag={{ scale: 1.04, rotate: 0, cursor: "grabbing", boxShadow: "0 35px 80px -10px rgba(0,0,0,0.6)" }}
              whileHover={{ scale: 1.02 }}
              style={{ zIndex: 10 }}
              className="relative w-64 sm:w-72 md:w-80 bg-[#fbfcfd] dark:bg-[#161822] p-3.5 pt-3.5 pb-6 rounded-md border border-slate-200/80 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transform-gpu transition-shadow duration-300 hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.65)] select-none cursor-grab active:cursor-grabbing group"
            >
              {/* Drag Indicator Badge */}
              <div className="absolute -top-3 -right-3 z-30 opacity-80 group-hover:opacity-100 transition-opacity bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 pointer-events-none">
                <Move className="w-2.5 h-2.5" />
                <span>DRAG</span>
              </div>

              {/* Photo Frame Container */}
              <div className="relative aspect-[6/6] w-full overflow-hidden rounded-sm bg-slate-900 border border-black/10 pointer-events-none">
                <Image
                  src="/me.jpg"
                  alt="Akash P — Next.js Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-center filter contrast-[1.05] saturate-[0.95] pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Polaroid Caption Label */}
              <div className="pt-3 flex items-center justify-between font-mono text-[11px] tracking-wider text-slate-700 dark:text-slate-300 uppercase pointer-events-none">
                <span className="font-semibold">Akash P • Kozhikode</span>
                <span className="text-slate-400 dark:text-slate-500 font-normal">2026</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lower Content Grid */}
        <div className="hero-footer-grid pt-6 border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
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
