"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, filter: "blur(8px)", y: 24 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <>
      {/* ── SECTION 8: CONTACT ── */}
      <section
        id="contact"
        className="relative isolate overflow-hidden border-t border-white/10 bg-black px-6 py-32 md:px-10 md:py-48"
      >
        {/* Ambient bottom glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-1/2 -z-10 h-[120%] glow-orange opacity-70 blur-[120px]"
        />

        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/50">
                (08) — Contact
              </span>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="mt-8 font-display text-[14vw] leading-[0.92] tracking-[-0.02em] text-balance md:text-[10vw] text-white">
              Let’s build something{" "}
              <em className="text-[color:var(--primary)] not-italic font-normal">amazing</em>{" "}
              together.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-10 md:grid-cols-12">
            
            {/* Description */}
            <motion.div
              {...fadeInUp}
              className="md:col-span-6 flex flex-col justify-between"
            >
              <p className="max-w-md text-lg text-white/65 leading-relaxed">
                I’m always interested in exciting products, scalable platforms
                and innovative frontend experiences. Drop a line — let’s ship
                something memorable.
              </p>
              
              {/* Button */}
              <div className="mt-10 md:mt-0">
                <a
                  href="mailto:akashpachol2001@gmail.com"
                  className="group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] transition-[transform,background,color] duration-300 ease-out will-change-transform bg-[color:var(--primary)] text-[color:var(--primary-foreground)] shadow-[0_10px_60px_-10px_rgba(255,138,61,0.6)] hover:shadow-[0_20px_80px_-10px_rgba(255,138,61,0.8)] hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Conversation
                    <span className="inline-block h-px w-6 bg-current opacity-80 transition-all duration-300 group-hover:w-10" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Contact details list */}
            <motion.div {...fadeInUp} className="md:col-span-6">
              <div className="space-y-2">
                
                {/* Email */}
                <a href="mailto:akashpachol2001@gmail.com" className="block group">
                  <div className="flex items-center justify-between border-b border-white/10 py-5 transition-colors duration-300 group-hover:border-[color:var(--primary)]/60">
                    <div className="flex items-center gap-4">
                      <Mail className="h-4 w-4 text-[color:var(--primary)]" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
                        Email
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xl md:text-2xl text-white transition-colors duration-300 group-hover:text-[color:var(--primary)]">
                        akashpachol2001@gmail.com
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center justify-between border-b border-white/10 py-5">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-4 w-4 text-[color:var(--primary)]" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
                      Based in
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl md:text-2xl text-white">
                      Kannur, India
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/akashp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center justify-between border-b border-white/10 py-5 transition-colors duration-300 group-hover:border-[color:var(--primary)]/60">
                    <div className="flex items-center gap-4">
                      <Linkedin className="h-4 w-4 text-[color:var(--primary)]" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
                        LinkedIn
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xl md:text-2xl text-white transition-colors duration-300 group-hover:text-[color:var(--primary)]">
                        /in/akashp
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/akashp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center justify-between border-b border-white/10 py-5 transition-colors duration-300 group-hover:border-[color:var(--primary)]/60">
                    <div className="flex items-center gap-4">
                      <Github className="h-4 w-4 text-[color:var(--primary)]" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
                        GitHub
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xl md:text-2xl text-white transition-colors duration-300 group-hover:text-[color:var(--primary)]">
                        @akashp
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-[color:var(--primary)]" />
                    </div>
                  </div>
                </a>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative border-t border-white/10 bg-black px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
            © 2026 Akash P. — Crafted in Kannur.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
            Next.js · React · TypeScript · TurboRepo
          </p>
        </div>
      </footer>
    </>
  );
}
