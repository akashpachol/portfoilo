"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress of the 330vh parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── LEFT SIDE: Description Text Cross-Fade & Translation Transforms ──
  const slide1TextOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const slide1TextY = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 0, -20]);
  const slide1TextBlur = useTransform(scrollYProgress, [0, 0.25, 0.35], ["blur(0px)", "blur(0px)", "blur(8px)"]);

  const slide2TextOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const slide2TextY = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [20, 0, 0, -20]);
  const slide2TextBlur = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]);

  const slide3TextOpacity = useTransform(scrollYProgress, [0.6, 0.7, 1.0], [0, 1, 1]);
  const slide3TextY = useTransform(scrollYProgress, [0.6, 0.7, 1.0], [20, 0, 0]);
  const slide3TextBlur = useTransform(scrollYProgress, [0.6, 0.7, 1.0], ["blur(8px)", "blur(0px)", "blur(0px)"]);

  // ── RIGHT SIDE: Card Stack Overlay Transforms (Z-index scale, opacity, blur, rotateX) ──
  // Card 1: E-Commerce
  const card1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.25, 0.35], [0.98, 0.98, 0.92]);
  const card1RotateX = useTransform(scrollYProgress, [0, 0.25, 0.35], [5.8, 5.8, 10]);
  const card1Y = useTransform(scrollYProgress, [0, 0.25, 0.35], ["3%", "3%", "12%"]);
  const card1Blur = useTransform(scrollYProgress, [0, 0.25, 0.35], ["blur(3px)", "blur(3px)", "blur(12px)"]);
  const card1Z = useTransform(scrollYProgress, [0, 0.25, 0.35], [10, 10, 0]);

  // Card 2: Website Builder
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0.92, 0.98, 0.98, 0.92]);
  const card2RotateX = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [10, 5.8, 5.8, 10]);
  const card2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], ["12%", "3%", "3%", "12%"]);
  const card2Blur = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], ["blur(12px)", "blur(3px)", "blur(3px)", "blur(12px)"]);
  const card2Z = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0, 11, 11, 0]);

  // Card 3: Venue Booking
  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1.0], [0, 1, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.6, 0.7, 1.0], [0.92, 0.98, 0.98]);
  const card3RotateX = useTransform(scrollYProgress, [0.6, 0.7, 1.0], [10, 5.8, 5.8]);
  const card3Y = useTransform(scrollYProgress, [0.6, 0.7, 1.0], ["12%", "3%", "3%"]);
  const card3Blur = useTransform(scrollYProgress, [0.6, 0.7, 1.0], ["blur(12px)", "blur(3px)", "blur(3px)"]);
  const card3Z = useTransform(scrollYProgress, [0.6, 0.7, 1.0], [0, 12, 12]);

  // ── HEADER INDICATORS: Scroll-linked indicator tags ──
  const line1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.3]);
  const line2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0.3, 1, 1, 0.3]);
  const line3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1.0], [0.3, 1, 1]);

  return (
    <section ref={containerRef} id="work" className="relative bg-black" style={{ height: "330vh" }}>
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 1: Layered background glows */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 40%, rgba(255, 138, 61, 0.22), transparent 70%), radial-gradient(50% 40% at 20% 70%, rgba(246, 178, 107, 0.16), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(255,138,61,0.25), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_55%,rgba(0,0,0,0.85)_100%)]" />

        {/* Section Header Indicator */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-8 md:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
              (03) — Selected Work
            </span>
          </div>
          
          <div className="pointer-events-auto flex items-center gap-6">
            <div className="flex items-center gap-3">
              <motion.div
                className="h-[2px] rounded-full bg-[color:var(--primary)] w-4"
                style={{ opacity: line1Opacity }}
              />
              <motion.span
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-white"
                style={{ opacity: line1Opacity }}
              >
                01
              </motion.span>
            </div>
            <div className="flex items-center gap-3">
              <motion.div
                className="h-[2px] rounded-full bg-[color:var(--primary)] w-4"
                style={{ opacity: line2Opacity }}
              />
              <motion.span
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-white"
                style={{ opacity: line2Opacity }}
              >
                02
              </motion.span>
            </div>
            <div className="flex items-center gap-3">
              <motion.div
                className="h-[2px] rounded-full bg-[color:var(--primary)] w-4"
                style={{ opacity: line3Opacity }}
              />
              <motion.span
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-white"
                style={{ opacity: line3Opacity }}
              >
                03
              </motion.span>
            </div>
          </div>
        </div>

        {/* Main Grid content */}
        <div className="relative z-10 mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-12 md:gap-16 md:px-12">
          {/* Left Column: Heading and Details */}
          <div className="md:col-span-5">
            <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-7xl text-white">
              Deep dives into <em className="text-[color:var(--primary)] not-italic font-normal">our craft.</em>
            </h2>
            
            {/* Overlay description text area */}
            <div className="relative mt-10 h-[180px]">
              {/* Slide 1 */}
              <motion.div
                style={{
                  opacity: slide1TextOpacity,
                  y: slide1TextY,
                  filter: slide1TextBlur,
                }}
                className="absolute inset-0"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-[color:var(--primary)]">
                    01 / Commerce OS
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.01em] md:text-4xl text-white">
                  E-Commerce Platforms
                </h3>
                <p className="mt-4 max-w-md text-sm text-white/65 md:text-base leading-relaxed">
                  High-performance gold & electronics commerce with dynamic pricing, SSR/ISR product surfaces and shared UI libraries.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "GraphQL", "TurboRepo", "Tailwind", "Node.js"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Slide 2 */}
              <motion.div
                style={{
                  opacity: slide2TextOpacity,
                  y: slide2TextY,
                  filter: slide2TextBlur,
                }}
                className="absolute inset-0"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-[color:var(--primary)]">
                    02 / Visual Builder
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.01em] md:text-4xl text-white">
                  GuppyX Website Builder
                </h3>
                <p className="mt-4 max-w-md text-sm text-white/65 md:text-base leading-relaxed">
                  A Wix-style builder with a JSON-driven rendering engine, plugin widgets and drag-and-drop layout system.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "React", "Node.js", "TypeScript"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Slide 3 */}
              <motion.div
                style={{
                  opacity: slide3TextOpacity,
                  y: slide3TextY,
                  filter: slide3TextBlur,
                }}
                className="absolute inset-0"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-[color:var(--primary)]">
                    03 / Realtime System
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.01em] md:text-4xl text-white">
                  BookMeVenue
                </h3>
                <p className="mt-4 max-w-md text-sm text-white/65 md:text-base leading-relaxed">
                  Real-time venue booking ecosystem with vendor dashboards, availability matrices and optimistic UI updates.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "Redux", "Node.js", "MongoDB"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-white/40">
              <span>Scroll</span>
              <span className="inline-block h-px w-10 bg-white/30" />
            </div>
          </div>

          {/* Right Column: Stacked Card Deck */}
          <div className="relative h-[70vh] md:col-span-7 md:h-[78vh]">
            {/* Card 1: Commerce OS */}
            <motion.div
              style={{
                opacity: card1Opacity,
                scale: card1Scale,
                rotateX: card1RotateX,
                y: card1Y,
                filter: card1Blur,
                zIndex: card1Z,
              }}
              className="absolute inset-0 transition-shadow duration-300"
            >
              <div className="group relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500">
                {/* Glow layer behind image */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-90"
                  style={{
                    background: "radial-gradient(60% 60% at 50% 50%, rgba(255,138,61,0.45), transparent 70%)",
                  }}
                />
                
                <img
                  src="/assets/project-ecom-DYSEifme.jpg"
                  alt="E-Commerce Platforms"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transform: "scale(1.08)" }}
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-soft-light opacity-70"
                  style={{
                    background: "radial-gradient(80% 60% at 30% 20%, rgba(255,138,61,0.35), transparent 70%)",
                  }}
                />

                {/* Badge tags */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                    Live · Production
                  </span>
                </div>
                
                <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Commerce OS</div>
                  <div className="mt-0.5 font-display text-xl leading-none text-white">01</div>
                </div>

                {/* Card Content Footer */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                        Storefront · Scalability
                      </div>
                      <h4 className="mt-2 font-display text-3xl leading-tight tracking-[-0.01em] text-white md:text-5xl">
                        E-Commerce Platforms
                      </h4>
                    </div>
                    <a
                      href="#contact"
                      className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] backdrop-blur-md transition-all duration-300 hover:border-[color:var(--primary)]/60 hover:bg-[color:var(--primary)]/10 md:inline-flex text-white"
                    >
                      View case
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                      Sub-second loads at increased concurrency.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Website Builder */}
            <motion.div
              style={{
                opacity: card2Opacity,
                scale: card2Scale,
                rotateX: card2RotateX,
                y: card2Y,
                filter: card2Blur,
                zIndex: card2Z,
              }}
              className="absolute inset-0 transition-shadow duration-300"
            >
              <div className="group relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500">
                {/* Glow layer behind image */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-90"
                  style={{
                    background: "radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.45), transparent 70%)",
                  }}
                />
                
                <img
                  src="/assets/project-guppyx-Cc1YQV9Z.jpg"
                  alt="GuppyX Website Builder"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transform: "scale(1.08)" }}
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-soft-light opacity-70"
                  style={{
                    background: "radial-gradient(80% 60% at 30% 20%, rgba(139,92,246,0.35), transparent 70%)",
                  }}
                />

                {/* Badge tags */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                    Live · Production
                  </span>
                </div>
                
                <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Visual Builder</div>
                  <div className="mt-0.5 font-display text-xl leading-none text-white">02</div>
                </div>

                {/* Card Content Footer */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                        Low-Code · Platform
                      </div>
                      <h4 className="mt-2 font-display text-3xl leading-tight tracking-[-0.01em] text-white md:text-5xl">
                        GuppyX Website Builder
                      </h4>
                    </div>
                    <a
                      href="#contact"
                      className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] backdrop-blur-md transition-all duration-300 hover:border-[color:var(--primary)]/60 hover:bg-[color:var(--primary)]/10 md:inline-flex text-white"
                    >
                      View case
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                      Non-technical users deploy in minutes.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: BookMeVenue */}
            <motion.div
              style={{
                opacity: card3Opacity,
                scale: card3Scale,
                rotateX: card3RotateX,
                y: card3Y,
                filter: card3Blur,
                zIndex: card3Z,
              }}
              className="absolute inset-0 transition-shadow duration-300"
            >
              <div className="group relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500">
                {/* Glow layer behind image */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-90"
                  style={{
                    background: "radial-gradient(60% 60% at 50% 50%, rgba(246,178,107,0.45), transparent 70%)",
                  }}
                />
                
                <img
                  src="/assets/project-bookme-CIZOKQXw.jpg"
                  alt="BookMeVenue"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transform: "scale(1.08)" }}
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-soft-light opacity-70"
                  style={{
                    background: "radial-gradient(80% 60% at 30% 20%, rgba(246,178,107,0.35), transparent 70%)",
                  }}
                />

                {/* Badge tags */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                    Live · Production
                  </span>
                </div>
                
                <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Realtime System</div>
                  <div className="mt-0.5 font-display text-xl leading-none text-white">03</div>
                </div>

                {/* Card Content Footer */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                        Realtime · Booking OS
                      </div>
                      <h4 className="mt-2 font-display text-3xl leading-tight tracking-[-0.01em] text-white md:text-5xl">
                        BookMeVenue
                      </h4>
                    </div>
                    <a
                      href="#contact"
                      className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] backdrop-blur-md transition-all duration-300 hover:border-[color:var(--primary)]/60 hover:bg-[color:var(--primary)]/10 md:inline-flex text-white"
                    >
                      View case
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                      Thousands of monthly bookings, zero drift.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global grain layer */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 opacity-[0.06] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>')]" />
      </div>
    </section>
  );
}
