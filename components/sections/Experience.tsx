"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  const fadeInUp = {
    initial: { opacity: 0, filter: "blur(8px)", y: 24 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  };

  const cardReveal = (delay: number) => ({
    initial: { opacity: 0, filter: "blur(8px)", y: 28 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="experience"
      className="relative border-t border-white/10 bg-[color:var(--card)] px-6 py-32 md:px-10 md:py-44 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div {...fadeInUp}>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
              (04) — Experience
            </span>
          </div>
          <h2 className="mt-6 font-display text-6xl leading-[1] tracking-[-0.01em] md:text-8xl text-white">
            A career built on{" "}
            <em className="text-[color:var(--primary)] not-italic font-normal">craft.</em>
          </h2>
        </motion.div>

        {/* Career Grid */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:grid-cols-2">
          
          {/* Job 1: Nexteons */}
          <motion.div
            {...cardReveal(0)}
            className="group relative bg-[color:var(--card)] p-8 transition-colors duration-500 hover:bg-black md:p-12"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--primary)]">
                  Sep 2024 — Present
                </p>
                <h3 className="mt-3 font-display text-4xl tracking-tight md:text-5xl text-white">
                  Nexteons
                </h3>
                <p className="mt-1 text-white/60 font-mono text-[11px] uppercase tracking-[0.1em]">
                  Next.js Developer
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-white/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
            </div>

            <ul className="mt-8 space-y-3 text-white/70 text-sm md:text-base leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Led migration to a TurboRepo monorepo for shared, scalable codebases.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Built SEO-optimized Next.js surfaces with SSR &amp; ISR strategies.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Integrated GraphQL/REST with caching layers and dynamic imports.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Designed reusable component systems across production apps.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "GraphQL", "TurboRepo", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors group-hover:border-white/20 group-hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Job 2: Datamoo.ai */}
          <motion.div
            {...cardReveal(0.15)}
            className="group relative bg-[color:var(--card)] p-8 transition-colors duration-500 hover:bg-black md:p-12"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--primary)]">
                  Sep 2022 — Apr 2023
                </p>
                <h3 className="mt-3 font-display text-4xl tracking-tight md:text-5xl text-white">
                  Datamoo.ai
                </h3>
                <p className="mt-1 text-white/60 font-mono text-[11px] uppercase tracking-[0.1em]">
                  React.js Developer
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-white/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
            </div>

            <ul className="mt-8 space-y-3 text-white/70 text-sm md:text-base leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Built modular React UI components and reusable systems.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Architected centralized Redux flows for complex workflows.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Collaborated with backend teams for performant API integration.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-[color:var(--primary)]" />
                <span>Shipped responsive, conversion-focused UI patterns.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "Redux", "Node.js", "MongoDB", "REST"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors group-hover:border-white/20 group-hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
