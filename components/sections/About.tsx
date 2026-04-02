"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { MapPin, Briefcase, Code2, Coffee } from "lucide-react";

const stats = [
  { value: "3+",  label: "Years Exp",   Icon: Briefcase },
  { value: "20+", label: "Projects",    Icon: Code2     },
  { value: "∞",   label: "Coffee",      Icon: Coffee    },
  { value: "IN",  label: "India",       Icon: MapPin    },
];

const circleSkills = [
  { name: "React",   pct: 95, color: "#4f8eff" },
  { name: "Next.js", pct: 90, color: "#a855f7" },
  { name: "Node.js", pct: 82, color: "#22d3ee" },
];

const linearSkills = [
  { name: "TypeScript",   pct: 88, color: "#4f8eff" },
  { name: "MongoDB",      pct: 78, color: "#a855f7" },
  { name: "Tailwind CSS", pct: 95, color: "#22d3ee" },
];

/* ─────────────────────────────────────────
   Code lines data — rendered with colours
───────────────────────────────────────── */
type Token = { text: string; color: string };
type CodeLine = { indent: number; tokens: Token[] };

const CODE_LINES: CodeLine[] = [
  { indent: 0, tokens: [{ text: "const ", color: "#a855f7" }, { text: "developer", color: "#4f8eff" }, { text: " = {", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "name", color: "#22d3ee" }, { text: ": ", color: "#e2e8f0" }, { text: '"Akash P"', color: "#86efac" }, { text: ",", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "role", color: "#22d3ee" }, { text: ": ", color: "#e2e8f0" }, { text: '"Full Stack Dev"', color: "#86efac" }, { text: ",", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "stack", color: "#22d3ee" }, { text: ": [", color: "#e2e8f0" }] },
  { indent: 2, tokens: [{ text: '"React"', color: "#86efac" }, { text: ", ", color: "#e2e8f0" }, { text: '"Next.js"', color: "#86efac" }, { text: ",", color: "#e2e8f0" }] },
  { indent: 2, tokens: [{ text: '"Node.js"', color: "#86efac" }, { text: ", ", color: "#e2e8f0" }, { text: '"MongoDB"', color: "#86efac" }, { text: ",", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "],", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "available", color: "#22d3ee" }, { text: ": ", color: "#e2e8f0" }, { text: "true", color: "#fb923c" }, { text: ",", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "passion", color: "#22d3ee" }, { text: ": ", color: "#e2e8f0" }, { text: '"Building great UX"', color: "#86efac" }] },
  { indent: 0, tokens: [{ text: "}", color: "#e2e8f0" }, { text: ";", color: "#a855f7" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "// Let's build something", color: "#475569" }] },
  { indent: 0, tokens: [{ text: "developer", color: "#4f8eff" }, { text: ".hire(", color: "#e2e8f0" }, { text: "you", color: "#fb923c" }, { text: ");", color: "#e2e8f0" }] },
];

/* ─────────────────────────────────────────
   Animated code window
───────────────────────────────────────── */
function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorLine, setCursorLine] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCursorLine(visibleLines);
    }, 120);
    return () => clearTimeout(t);
  }, [visibleLines]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 28 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 28 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      animate={{ y: [0, -10, 0] }}
      transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      className="relative w-full max-w-md mx-auto md:max-w-md"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-6 rounded-[40px] opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(79,142,255,0.6), rgba(168,85,247,0.6))" }}
      />

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: "rgba(34,211,238,0.1)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(34,211,238,0.25)",
          boxShadow: "0 0 20px rgba(34,211,238,0.15)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider">Live</span>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        animate={{ y: [0, 6, 0], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: "rgba(168,85,247,0.1)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(168,85,247,0.25)",
          boxShadow: "0 0 20px rgba(168,85,247,0.15)",
        }}
      >
        <Code2 className="w-3 h-3 text-purple-400/80" />
        <span className="text-[10px] font-mono text-purple-400/80 uppercase tracking-wider">TypeScript</span>
      </motion.div>

      {/* Glass window */}
      <div
        className="relative rounded-[24px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,30,0.9), rgba(15,10,35,0.95))",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Top border glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,255,0.5), rgba(168,85,247,0.5), transparent)" }}
        />

        {/* Title bar */}
        <div
          className="flex items-center justify-between px-5 py-3.5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[11px] font-mono text-white/25 tracking-wider">developer.ts</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
            <span className="text-[9px] font-mono text-white/20">TS</span>
          </div>
        </div>

        {/* Code body */}
        <div className="p-4 md:p-5 font-mono text-[11px] md:text-[12.5px] leading-[1.75] md:leading-[1.85] min-h-[220px] md:min-h-[280px] overflow-x-auto">
          {/* Line numbers + code */}
          {CODE_LINES.slice(0, visibleLines).map((line, li) => (
            <motion.div
              key={li}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-4 group"
            >
              {/* Line number */}
              <span className="select-none text-white/15 w-4 text-right flex-shrink-0 text-[11px] mt-px">
                {li + 1}
              </span>
              {/* Code */}
              <span style={{ paddingLeft: `${line.indent * 16}px` }} className="flex flex-wrap">
                {line.tokens.map((tok, ti) => (
                  <span key={ti} style={{ color: tok.color }}>{tok.text}</span>
                ))}
                {/* Blinking cursor on current line */}
                {li === cursorLine && visibleLines < CODE_LINES.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[2px] h-[14px] bg-blue-400 rounded-full ml-0.5 align-middle"
                  />
                )}
              </span>
            </motion.div>
          ))}

          {/* Idle cursor after all lines typed */}
          {visibleLines >= CODE_LINES.length && (
            <div className="flex items-start gap-4">
              <span className="select-none text-white/15 w-4 text-right flex-shrink-0 text-[11px]">
                {CODE_LINES.length + 1}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[2px] h-[14px] bg-blue-400/60 rounded-full align-middle"
              />
            </div>
          )}
        </div>

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-5 py-2 border-t"
          style={{ borderColor: "rgba(255,255,255,0.04)", background: "rgba(79,142,255,0.04)" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-blue-400/50 uppercase tracking-wider">TypeScript</span>
            <span className="text-white/10">·</span>
            <span className="text-[9px] font-mono text-white/20">UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
            <span className="text-[9px] font-mono text-white/20">No errors</span>
          </div>
        </div>
      </div>

      {/* Stats row below window */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {stats.map(({ value, label, Icon }) => (
          <motion.div
            key={label}
            whileHover={{ y: -3, scale: 1.04 }}
            className="flex flex-col items-center gap-1 p-3 rounded-2xl cursor-default"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Icon className="w-3 h-3 text-white/20" />
            <span className="text-sm font-bold text-white">{value}</span>
            <span className="text-[8px] text-white/20 font-mono text-center leading-tight">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={sectionRef}>
      <Section id="about" className="bg-transparent relative overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(79,142,255,0.06) 0%, transparent 70%)" }}
          />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)" }}
          />
        </motion.div>

        <Container className="relative z-10">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-white/25 font-mono text-sm tracking-widest">01</span>
              <div className="w-10 h-[1px] bg-white/10" />
              <span className="text-white/25 font-mono text-xs tracking-[0.3em] uppercase">About</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <CodeWindow />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="flex flex-col gap-10"
              >
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-[1.1]"
                  >
                    Crafting digital<br />experiences with{" "}
                    <span className="italic font-light grad-blue-purple">precision.</span>
                  </motion.h2>
                </div>

                <div className="flex flex-col gap-4 text-white/40 font-light leading-relaxed text-[15px]">
                  <p>I&apos;m Akash, a Full Stack Developer passionate about building performant, scalable web applications. I specialize in the MERN stack and modern JavaScript ecosystems.</p>
                  <p>Every project is an opportunity to push the boundaries — clean architecture, smooth UX, and code that scales.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/25 font-mono">Proficiency</span>
                  <div className="grid grid-cols-3 gap-4">
                    {circleSkills.map((s, i) => (
                      <div key={s.name} className="flex flex-col items-center gap-3">
                        <div className="relative w-16 h-16">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                            <motion.circle
                              cx="50" cy="50" r="42" fill="none"
                              stroke={s.color} strokeWidth="4"
                              strokeDasharray="264" strokeDashoffset="264"
                              initial={{ strokeDashoffset: 264 }}
                              whileInView={{ strokeDashoffset: 264 - (264 * s.pct) / 100 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                              strokeLinecap="round"
                              style={{ filter: `drop-shadow(0 0 6px ${s.color}80)` }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-mono text-white/50">{s.pct}%</span>
                          </div>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest text-white/30 font-mono">{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {linearSkills.map((s, i) => (
                    <div key={s.name} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest">
                        <span className="text-white/50">{s.name}</span>
                        <span className="text-white/25">{s.pct}%</span>
                      </div>
                      <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ background: `linear-gradient(90deg, ${s.color}70, ${s.color})`, boxShadow: `0 0 8px ${s.color}50` }}
                        >
                          <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, delay: 1.5 + i * 0.1, ease: "easeInOut" }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
