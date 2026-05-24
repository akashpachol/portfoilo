"use client";

import { motion } from "framer-motion";

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, filter: "blur(8px)", y: 24 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  };

  const statCardReveal = (delay: number) => ({
    initial: { opacity: 0, filter: "blur(8px)", y: 28 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="about"
      className="relative bg-black px-6 py-32 md:px-10 md:py-44 overflow-hidden"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-12">
        {/* Left Column: Portrait & Title */}
        <div className="md:col-span-5">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
                (02) — About
              </span>
            </div>
          </motion.div>

          <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl group">
            {/* Ambient orange glow behind portrait */}
            <div
              className="absolute inset-0 -z-10 opacity-60 blur-3xl transition-all duration-75 group-hover:scale-110"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,138,61,0.35), transparent 70%)",
              }}
            />
            
            <img
              src="/assets/portrait-Wv2duvyx.jpg"
              alt="Akash P portrait"
              className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Visual gradient vignette */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-display text-3xl italic text-white">Akash P.</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/60">
                  Frontend Engineer
                </p>
              </div>
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
                Kannur, IN
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Heading & Stats Grid */}
        <div className="md:col-span-7 md:pl-10 flex flex-col justify-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-5xl leading-[1.05] tracking-[-0.01em] text-balance md:text-7xl text-white">
              I design and engineer{" "}
              <em className="text-[color:var(--gold)] not-italic font-normal">cinematic</em>
              , high-performance web platforms — from{" "}
              <em className="text-[color:var(--primary)] not-italic font-normal">
                scalable storefronts
              </em>{" "}
              to dynamic low-code builders.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div {...fadeInUp}>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                With 2.5+ years building production-grade applications, I focus
                on clean architecture, reusable component systems, and
                conversion-driven interfaces that feel as fast as they look.
              </p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                Currently shipping at <span className="text-white font-medium">Nexteons</span>{" "}
                — leading the move to TurboRepo monorepos, SEO-optimized
                Next.js surfaces and storefronts with sub-second load
                performance.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] md:grid-cols-4">
            <motion.div
              {...statCardReveal(0)}
              className="bg-[color:var(--card)] p-6 transition-all duration-300 hover:bg-black hover:scale-[1.02] group"
            >
              <p className="font-display text-4xl text-[color:var(--gold)] md:text-5xl transition-colors group-hover:text-[color:var(--primary)]">
                2.5+
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                Years experience
              </p>
            </motion.div>

            <motion.div
              {...statCardReveal(0.1)}
              className="bg-[color:var(--card)] p-6 transition-all duration-300 hover:bg-black hover:scale-[1.02] group"
            >
              <p className="font-display text-4xl text-[color:var(--gold)] md:text-5xl transition-colors group-hover:text-[color:var(--primary)]">
                5+
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                Production apps
              </p>
            </motion.div>

            <motion.div
              {...statCardReveal(0.2)}
              className="bg-[color:var(--card)] p-6 transition-all duration-300 hover:bg-black hover:scale-[1.02] group"
            >
              <p className="font-display text-4xl text-[color:var(--gold)] md:text-5xl transition-colors group-hover:text-[color:var(--primary)]">
                1000s
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                Bookings handled
              </p>
            </motion.div>

            <motion.div
              {...statCardReveal(0.3)}
              className="bg-[color:var(--card)] p-6 transition-all duration-300 hover:bg-black hover:scale-[1.02] group"
            >
              <p className="font-display text-4xl text-[color:var(--gold)] md:text-5xl transition-colors group-hover:text-[color:var(--primary)]">
                &lt;1s
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                Avg page load
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
