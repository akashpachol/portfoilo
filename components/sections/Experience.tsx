"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

const experiences = [
  {
    index: "01",
    role: "React Developer",
    company: "Datamoo.ai",
    period: "2024 — PRESENT",
    duration: "1+ yr",
    description:
      "Building and maintaining highly responsive user interfaces using React.js. Collaborating with backend teams to integrate REST APIs, optimize rendering performance, and deliver pixel-perfect, accessible components.",
    tags: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "Redux"],
    accent: "#4f8eff",
    accentRgb: "79,142,255",
    gradient: "135deg, rgba(79,142,255,0.08) 0%, rgba(34,211,238,0.04) 100%",
  },
  {
    index: "02",
    role: "Full Stack Developer",
    company: "Brototype",
    period: "2023 — 2024",
    duration: "1 yr",
    description:
      "Developed end-to-end full stack applications using the MERN stack. Designed scalable MongoDB schemas, built Express REST APIs, and crafted dynamic React UIs with a focus on performance and clean architecture.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Socket.io"],
    accent: "#a855f7",
    accentRgb: "168,85,247",
    gradient: "135deg, rgba(168,85,247,0.08) 0%, rgba(236,72,153,0.04) 100%",
  },
];

/* ── Parallax card hook ── */
function useCardParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 30 });
  const glowX = useTransform(x, [-0.5, 0.5], [20, 80]);
  const glowY = useTransform(y, [-0.5, 0.5], [20, 80]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return { rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave };
}

/* ── Single experience card ── */
function ExperienceCard({ exp, cardIndex }: { exp: (typeof experiences)[0]; cardIndex: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const { rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave } = useCardParallax();

  /* scroll-driven line draw */
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lineProgress } = useScroll({
    target: lineRef,
    offset: ["start 90%", "end 40%"],
  });
  const lineScale = useTransform(lineProgress, [0, 1], [0, 1]);

  /* floating */
  const floatY = useMotionValue(0);

  return (
    <div ref={cardRef} className="relative flex gap-6 md:gap-10">
      {/* ── Timeline column ── */}
      <div ref={lineRef} className="hidden md:flex flex-col items-center flex-shrink-0 w-6 pt-1">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: cardIndex * 0.15 + 0.2, type: "spring", stiffness: 300 }}
          className="relative w-4 h-4 rounded-full flex-shrink-0 z-10 flex items-center justify-center"
          style={{ boxShadow: `0 0 16px ${exp.accent}80, 0 0 32px ${exp.accent}30` }}
        >
          <div className="w-4 h-4 rounded-full" style={{ background: exp.accent }} />
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: cardIndex * 0.3 }}
            className="absolute inset-0 rounded-full"
            style={{ background: exp.accent }}
          />
        </motion.div>

        {/* Animated line */}
        <div className="relative flex-1 w-[1px] mt-2 overflow-hidden bg-white/5">
          <motion.div
            style={{ scaleY: lineScale, originY: 0 }}
            className="absolute inset-0 w-full"
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(to bottom, ${exp.accent}90, ${exp.accent}20, transparent)`,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{
          duration: 0.9,
          delay: cardIndex * 0.18,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex-1 mb-6 md:mb-10"
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            y: { duration: 5 + cardIndex, repeat: Infinity, ease: "easeInOut", delay: cardIndex * 1.2 },
          }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          whileHover={{ scale: 1.025 }}
          className="relative rounded-[24px] overflow-hidden cursor-default group"
          style={{
            background: `linear-gradient(${exp.gradient})`,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid rgba(${exp.accentRgb}, 0.18)`,
            boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(${exp.accentRgb},0.08), inset 0 1px 0 rgba(255,255,255,0.06)`,
          }}
        >
          {/* Dynamic spotlight glow that follows mouse */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(${exp.accentRgb},0.12) 0%, transparent 60%)`,
            }}
          />

          {/* Light reflection sweep on hover */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{ x: "200%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.06) 50%, transparent 80%)",
              transform: "skewX(-15deg)",
            }}
          />

          {/* Top border glow */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, rgba(${exp.accentRgb},0.6), transparent)` }}
          />

          <div className="p-6 md:p-10">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex flex-col gap-1.5">
                {/* Index + period (mobile) */}
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-xs font-mono tracking-widest"
                    style={{ color: `rgba(${exp.accentRgb},0.6)` }}
                  >
                    {exp.index}
                  </span>
                  <span className="md:hidden text-xs font-mono text-white/25 tracking-widest uppercase">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                  {exp.role}
                </h3>

                <div className="flex items-center gap-2 mt-0.5">
                  <span
                    className="text-sm font-semibold font-mono"
                    style={{ color: exp.accent }}
                  >
                    {exp.company}
                  </span>
                  <span className="text-white/15">·</span>
                  <span className="text-xs text-white/30 font-mono">{exp.duration}</span>
                </div>
              </div>

              {/* Period badge (desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: cardIndex * 0.18 + 0.4 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full flex-shrink-0"
                style={{
                  background: `rgba(${exp.accentRgb},0.08)`,
                  border: `1px solid rgba(${exp.accentRgb},0.2)`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: exp.accent, boxShadow: `0 0 6px ${exp.accent}` }}
                />
                <span className="text-xs font-mono text-white/50 tracking-widest uppercase whitespace-nowrap">
                  {exp.period}
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-white/45 font-light leading-relaxed text-sm md:text-[15px] mb-8">
              {exp.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, ti) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.75, y: 8 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: cardIndex * 0.18 + 0.5 + ti * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wide cursor-default transition-shadow"
                  style={{
                    color: `rgba(${exp.accentRgb},0.85)`,
                    background: `rgba(${exp.accentRgb},0.08)`,
                    border: `1px solid rgba(${exp.accentRgb},0.22)`,
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Section ── */
export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  /* Parallax orbs */
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["-5%", "25%"]);

  /* Heading clip reveal */
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  const titleWords = ["Where", "I've"];
  const subtitleWords = ["contributed."];

  return (
    <div ref={sectionRef}>
      <Section id="experience" className="bg-transparent relative overflow-hidden">

        {/* ── Ambient orbs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: orb1Y }}
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
            animate={{ opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle, rgba(79,142,255,1) 0%, transparent 70%)", y: orb1Y } as React.CSSProperties}
          />
          <motion.div
            style={{ y: orb2Y }}
            className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full"
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ background: "radial-gradient(circle, rgba(168,85,247,1) 0%, transparent 70%)", y: orb2Y } as React.CSSProperties}
          />
          <motion.div
            style={{ y: orb3Y }}
            className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full"
            animate={{ opacity: [0.03, 0.07, 0.03] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{ background: "radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)", y: orb3Y } as React.CSSProperties}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col gap-10 md:gap-14">

            {/* ── Header ── */}
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <span className="text-white/25 font-mono text-sm tracking-widest">03</span>
                <div className="w-10 h-[1px] bg-white/10" />
                <span className="text-white/25 font-mono text-xs tracking-[0.3em] uppercase">Experience</span>
              </motion.div>

              <h2 ref={headingRef} className="flex flex-col gap-1 overflow-hidden">
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={headingInView ? { y: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white"
                  >
                    Where I&apos;ve
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={headingInView ? { y: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400"
                  >
                    contributed.
                  </motion.span>
                </span>
              </h2>
            </div>

            {/* ── Timeline cards ── */}
            <div className="flex flex-col">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.index} exp={exp} cardIndex={i} />
              ))}
            </div>

          </div>
        </Container>
      </Section>
    </div>
  );
}
