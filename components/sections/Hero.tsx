"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Hero() {
  // Mouse coordinates mapped to -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 180, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform offsets for different cards to create multi-layered parallax depth
  const card1X = useTransform(smoothMouseX, (x) => x * 40);
  const card1Y = useTransform(smoothMouseY, (y) => y * 40);

  const card2X = useTransform(smoothMouseX, (x) => x * -25);
  const card2Y = useTransform(smoothMouseY, (y) => y * -25);

  const card3X = useTransform(smoothMouseX, (x) => x * 30);
  const card3Y = useTransform(smoothMouseY, (y) => y * 30);

  const card4X = useTransform(smoothMouseX, (x) => x * -15);
  const card4Y = useTransform(smoothMouseY, (y) => y * 15);

  const card5X = useTransform(smoothMouseX, (x) => x * 20);
  const card5Y = useTransform(smoothMouseY, (y) => y * -20);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden grain"
    >
      {/* Background System */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src="/assets/hero-bg-HUJt_7Hq.jpg"
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,transparent_0%,#050505_75%)]" />
      </div>

      {/* Layer 2 & 3: Ambient Glow blobs behind cards */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute right-[8%] top-[18%] h-64 w-64 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,61,0.45), transparent 70%)",
          }}
        />
        <div
          className="absolute right-[35%] bottom-[15%] h-48 w-48 rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(246,178,107,0.4), transparent 70%)",
          }}
        />

        {/* ── CARD 1: Code snippet card (Top Right) ── */}
        <motion.div
          style={{ x: card1X, y: card1Y }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[4%] top-[12%] hidden w-[360px] lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-4, -3, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
            }}
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                hero.tsx
              </span>
            </div>
            <pre className="mt-3 font-mono text-[11px] leading-relaxed text-white/80">
              <span className="text-[color:var(--primary)]">export</span>{" "}
              <span className="text-[color:var(--gold)]">function</span>{" "}
              <span className="text-white">Hero</span>() {"{"}
              {"\n"}  <span className="text-[color:var(--primary)]">return</span> (
              {"\n"}    <span className="text-white/50">&lt;</span>
              <span className="text-[color:var(--gold)]">section</span>
              <span className="text-white/50">&gt;</span>
              {"\n"}      <span className="text-white/50">&lt;</span>
              <span className="text-[color:var(--gold)]">Cinematic</span>{" "}
              <span className="text-[color:var(--primary)]">scroll</span>
              <span className="text-white/50">=</span>
              <span className="text-white">{"{true}"}</span>
              <span className="text-white/50">/&gt;</span>
              {"\n"}    <span className="text-white/50">&lt;/</span>
              <span className="text-[color:var(--gold)]">section</span>
              <span className="text-white/50">&gt;</span>
              {"\n"}  );
              {"\n"}{"}"}
            </pre>
          </motion.div>
        </motion.div>

        {/* ── CARD 2: Zsh terminal card (Middle Right) ── */}
        <motion.div
          style={{ x: card2X, y: card2Y }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[26%] top-[42%] hidden w-[280px] xl:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [3, 2, 3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
            }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                ~/akash · zsh
              </span>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--primary)]" />
            </div>
            <div className="mt-3 space-y-1 font-mono text-[11px] text-white/80">
              <p>
                <span className="text-[color:var(--primary)]">$</span> bun run
                build
              </p>
              <p className="text-white/50">▸ compiled in 412ms</p>
              <p className="text-[color:var(--gold)]">✓ LCP 0.8s · CLS 0.00</p>
              <p>
                <span className="text-[color:var(--primary)]">$</span> deploy
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARD 3: Performance lighthouse card (Bottom Right) ── */}
        <motion.div
          style={{ x: card3X, y: card3Y }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[6%] bottom-[12%] hidden w-[240px] md:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-2, -1, -2] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
            }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              Performance
            </p>
            <p className="mt-3 font-display text-4xl text-[color:var(--gold)]">
              98<span className="text-white/40 text-2xl">/100</span>
            </p>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--gold)]"
              />
            </div>
            <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span>Lighthouse</span>
              <span className="text-[color:var(--primary)]">+12%</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARD 4: Deploy status card (Center Left) ── */}
        <motion.div
          style={{ x: card4X, y: card4Y }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[40%] top-[20%] hidden w-[260px] xl:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [5, 4, 5] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--gold)] font-display text-sm text-black">
                ⌘
              </div>
              <div className="min-w-0">
                <p className="truncate font-mono text-[11px] uppercase tracking-[0.22em] text-white/80">
                  Deploy succeeded
                </p>
                <p className="truncate text-[11px] text-white/50">
                  main → production · 24s
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARD 5: Tech stack list card (Bottom Left) ── */}
        <motion.div
          style={{ x: card5X, y: card5Y }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[8%] bottom-[20%] hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col gap-2"
          >
            <div className="rounded-full border border-white/15 bg-black/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
              Next.js
            </div>
            <div className="rounded-full border border-white/15 bg-black/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
              TypeScript
            </div>
            <div className="rounded-full border border-white/15 bg-black/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
              GraphQL
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-white/30" />
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/60">
            MERN · Next.js · Kannur, IN
          </span>
        </motion.div>

        {/* Hero Title */}
        <h1 className="mt-8 font-display text-[14vw] font-normal leading-[0.92] tracking-[-0.02em] text-balance md:text-[9vw]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Building Scalable
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              <span className="italic text-[color:var(--primary)]">digital</span>{" "}
              experiences.
            </motion.span>
          </span>
        </h1>

        {/* Description & Buttons Grid */}
        <div className="mt-12 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 24 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 md:col-start-1"
          >
            <p className="max-w-md text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              I’m <span className="text-white">Akash</span> — a Next.js & MERN
              developer crafting high-performance frontend systems, scalable
              architectures and cinematic, conversion-driven interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 24 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 md:col-span-5 md:col-start-8 md:justify-end"
          >
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] transition-[transform,background,color] duration-300 ease-out will-change-transform bg-[color:var(--primary)] text-[color:var(--primary-foreground)] shadow-[0_10px_60px_-10px_rgba(255,138,61,0.6)] hover:shadow-[0_20px_80px_-10px_rgba(255,138,61,0.8)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Selected Work
                  <span className="inline-block h-px w-6 bg-current opacity-80 transition-all duration-300 group-hover:w-10" />
                </span>
              </a>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] transition-[transform,background,color] duration-300 ease-out will-change-transform border border-white/15 text-white hover:border-white/40 hover:bg-white/5 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get in Touch
                  <span className="inline-block h-px w-6 bg-current opacity-80 transition-all duration-300 group-hover:w-10" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Footer Index */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-6 md:mt-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/40">
            Scroll
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/40">
            (01) — Index
          </span>
        </div>
      </div>
    </section>
  );
}
