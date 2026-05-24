"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Workflow,
  Gauge,
  CodeXml,
  Zap,
  Sparkles,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export function Skills() {
  const fadeInUp = {
    initial: { opacity: 0, filter: "blur(8px)", y: 24 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const cardReveal = (delay: number) => ({
    initial: { opacity: 0, filter: "blur(8px)", y: 28 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <>
      {/* ── SECTION 5: TECH STACK ── */}
      <section className="relative bg-black px-6 py-32 md:px-10 md:py-44 overflow-hidden border-t border-white/10">
        <div className="mx-auto max-w-[1400px]">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
                (05) — Tech Stack
              </span>
            </div>
            <h2 className="mt-6 max-w-4xl font-display text-6xl leading-[1] tracking-[-0.01em] md:text-8xl text-white">
              Tools for building{" "}
              <em className="text-[color:var(--gold)] not-italic font-normal">expensive</em>-feeling
              software.
            </h2>
          </motion.div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:grid-cols-2 lg:grid-cols-4">
            
            {/* Box 1: Frontend */}
            <motion.div
              {...cardReveal(0)}
              className="group relative bg-[color:var(--card)] p-8 transition-colors duration-500 hover:bg-black"
            >
              <div className="flex items-center justify-between">
                <Layers className="h-6 w-6 text-[color:var(--primary)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  01
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl text-white">Frontend</h3>
              <ul className="mt-6 space-y-2 text-sm text-white/65 leading-relaxed">
                {["Next.js", "React.js", "TypeScript", "JavaScript ES6+", "Redux", "Tailwind CSS", "Material UI"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 2: Backend */}
            <motion.div
              {...cardReveal(0.1)}
              className="group relative bg-[color:var(--card)] p-8 transition-colors duration-500 hover:bg-black"
            >
              <div className="flex items-center justify-between">
                <Database className="h-6 w-6 text-[color:var(--primary)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  02
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl text-white">Backend &amp; Data</h3>
              <ul className="mt-6 space-y-2 text-sm text-white/65 leading-relaxed">
                {["Node.js", "Express", "NestJS", "MongoDB", "Mongoose"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 3: Architecture & APIs */}
            <motion.div
              {...cardReveal(0.2)}
              className="group relative bg-[color:var(--card)] p-8 transition-colors duration-500 hover:bg-black"
            >
              <div className="flex items-center justify-between">
                <Workflow className="h-6 w-6 text-[color:var(--primary)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  03
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl text-white">Architecture &amp; APIs</h3>
              <ul className="mt-6 space-y-2 text-sm text-white/65 leading-relaxed">
                {["GraphQL", "Apollo", "REST", "TurboRepo", "Monorepo", "Micro-frontends", "MVC"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 4: Performance */}
            <motion.div
              {...cardReveal(0.3)}
              className="group relative bg-[color:var(--card)] p-8 transition-colors duration-500 hover:bg-black"
            >
              <div className="flex items-center justify-between">
                <Gauge className="h-6 w-6 text-[color:var(--primary)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  04
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl text-white">Performance</h3>
              <ul className="mt-6 space-y-2 text-sm text-white/65 leading-relaxed">
                {["SSR", "ISR", "Core Web Vitals", "Code Splitting", "Caching", "System Design"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 6: SERVICES ── */}
      <section className="relative border-t border-white/10 bg-[color:var(--card)] px-6 py-32 md:px-10 md:py-44 overflow-hidden">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 md:grid-cols-12">
            
            <motion.div {...fadeInUp} className="md:col-span-5 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-white/30" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
                    (06) — Services
                  </span>
                </div>
                <h2 className="mt-6 font-display text-6xl leading-[1] tracking-[-0.01em] md:text-7xl text-white">
                  Engagements I take on.
                </h2>
                <p className="mt-6 max-w-md text-white/60 leading-relaxed text-sm md:text-base">
                  From greenfield products to performance rescues — selective, senior, end-to-end.
                </p>
              </div>
            </motion.div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-2">
                
                {/* Service 1 */}
                <motion.div
                  {...cardReveal(0)}
                  className="group relative bg-[color:var(--card)] p-7 transition-all duration-300 hover:bg-black"
                >
                  <CodeXml className="h-5 w-5 text-[color:var(--primary)]" />
                  <h3 className="mt-6 font-display text-2xl text-white">Full Stack Web Development</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    End-to-end product engineering across the MERN &amp; Next.js stack.
                  </p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  {...cardReveal(0.1)}
                  className="group relative bg-[color:var(--card)] p-7 transition-all duration-300 hover:bg-black"
                >
                  <Zap className="h-5 w-5 text-[color:var(--primary)]" />
                  <h3 className="mt-6 font-display text-2xl text-white">Next.js Development</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    SSR, ISR, edge-ready frontends with elite Core Web Vitals.
                  </p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                </motion.div>

                {/* Service 3 */}
                <motion.div
                  {...cardReveal(0.15)}
                  className="group relative bg-[color:var(--card)] p-7 transition-all duration-300 hover:bg-black"
                >
                  <Layers className="h-5 w-5 text-[color:var(--primary)]" />
                  <h3 className="mt-6 font-display text-2xl text-white">Frontend Architecture</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    Monorepos, shared UI libraries, scalable React systems.
                  </p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                </motion.div>

                {/* Service 4 */}
                <motion.div
                  {...cardReveal(0.2)}
                  className="group relative bg-[color:var(--card)] p-7 transition-all duration-300 hover:bg-black"
                >
                  <Gauge className="h-5 w-5 text-[color:var(--primary)]" />
                  <h3 className="mt-6 font-display text-2xl text-white">Performance Optimization</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    Bundle, render and rendering-path optimization.
                  </p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                </motion.div>

                {/* Service 5 */}
                <motion.div
                  {...cardReveal(0.25)}
                  className="group relative bg-[color:var(--card)] p-7 transition-all duration-300 hover:bg-black"
                >
                  <Sparkles className="h-5 w-5 text-[color:var(--primary)]" />
                  <h3 className="mt-6 font-display text-2xl text-white">E-Commerce Engineering</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    Storefronts that scale: pricing, search, checkout, SEO.
                  </p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                </motion.div>

                {/* Service 6 */}
                <motion.div
                  {...cardReveal(0.3)}
                  className="group relative bg-[color:var(--card)] p-7 transition-all duration-300 hover:bg-black"
                >
                  <Cpu className="h-5 w-5 text-[color:var(--primary)]" />
                  <h3 className="mt-6 font-display text-2xl text-white">Component Systems</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    Design-system-grade libraries with strong DX.
                  </p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 7: TESTIMONIALS (WORDS) ── */}
      <section className="relative bg-black px-6 py-32 md:px-10 md:py-44 overflow-hidden border-t border-white/10">
        <div className="mx-auto max-w-[1400px]">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
                (07) — Words
              </span>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            
            {/* Testimonial 1 */}
            <motion.div {...fadeInUp}>
              <figure className="glass relative h-full rounded-3xl p-10 group transition-all duration-500 hover:border-white/20">
                {/* Ambient orange glow in the card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-3xl glow-orange opacity-20 blur-2xl transition-all duration-75 group-hover:scale-105"
                  style={{
                    background: "radial-gradient(circle, rgba(255,138,61,0.25), transparent 70%)",
                  }}
                />
                
                <span className="font-display text-7xl leading-none text-[color:var(--primary)]/70 select-none block">
                  “
                </span>
                
                <blockquote className="mt-2 font-display text-2xl leading-snug md:text-3xl text-white">
                  Akash consistently delivers scalable, performance-focused frontend systems with excellent attention to detail.
                </blockquote>
                
                <figcaption className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm text-white/80 font-medium">Engineering Lead</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                    Nexteons
                  </span>
                </figcaption>
              </figure>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div {...fadeInUp}>
              <figure className="glass relative h-full rounded-3xl p-10 group transition-all duration-500 hover:border-white/20">
                {/* Ambient orange glow in the card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-3xl glow-orange opacity-20 blur-2xl transition-all duration-75 group-hover:scale-105"
                  style={{
                    background: "radial-gradient(circle, rgba(255,138,61,0.25), transparent 70%)",
                  }}
                />
                
                <span className="font-display text-7xl leading-none text-[color:var(--primary)]/70 select-none block">
                  “
                </span>
                
                <blockquote className="mt-2 font-display text-2xl leading-snug md:text-3xl text-white">
                  Strong problem-solving skills and modern frontend architecture expertise — a multiplier on any product team.
                </blockquote>
                
                <figcaption className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm text-white/80 font-medium">Product Manager</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                    Datamoo.ai
                  </span>
                </figcaption>
              </figure>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
