"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ArrowDownRight, ArrowUpRight, Code2, Layers, Cpu, Database, Blocks, Sparkles } from "lucide-react";

const ROLES = ["Frontend Architect", "Full Stack Developer", "Creative Engineer", "React Specialist"];

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 2000);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      }
      setPaused(true);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      }
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, paused, roleIdx]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1em] bg-blue-400 rounded-full align-middle"
      />
    </span>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  btnStyle?: React.CSSProperties;
}

function MagneticButton({ children, className, href, btnStyle }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a ref={ref} href={href} style={{ x: sx, y: sy, ...btnStyle }}
      onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {children}
    </motion.a>
  );
}

/* Floating boxes — hidden on mobile, shown md+ */
const FLOATING_BOXES = [
  { label: "REACT",   Icon: Code2,    mx: "-28vw", my: "-16vh", delay: 0,   dur: 7  },
  { label: "NODE",    Icon: Database, mx: "28vw",  my: "-20vh", delay: 1,   dur: 9  },
  { label: "NEXT.JS", Icon: Layers,   mx: "32vw",  my: "6vh",   delay: 2,   dur: 8  },
  { label: "BLOCKS",  Icon: Blocks,   mx: "-32vw", my: "14vh",  delay: 0.5, dur: 11 },
  { label: "TS",      Icon: Cpu,      mx: "20vw",  my: "22vh",  delay: 1.5, dur: 10 },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });
  const orb1X = useTransform(springX, [-1, 1], [-30, 30]);
  const orb1Y = useTransform(springY, [-1, 1], [-30, 30]);
  const orb2X = useTransform(springX, [-1, 1], [25, -25]);
  const orb2Y = useTransform(springY, [-1, 1], [25, -25]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mouseX, mouseY]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: "easeOut" as const } },
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#03030f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#080820] via-[#03030f] to-[#0c0318]" />
        <motion.div style={{ x: orb1X, y: orb1Y, background: "radial-gradient(circle, rgba(79,142,255,0.09) 0%, transparent 70%)" }}
          className="absolute top-[15%] left-[15%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none" />
        <motion.div style={{ x: orb2X, y: orb2Y, background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
          className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <ParticleBackground />

      {/* Floating tech boxes — desktop only */}
      <div className="hidden md:flex absolute inset-0 z-0 pointer-events-none overflow-hidden items-center justify-center">
        {FLOATING_BOXES.map((b, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: ["-10px", "10px", "-10px"], rotate: [0, 2, -2, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: b.delay + 1 },
              scale:   { duration: 0.8, delay: b.delay + 1 },
              y:       { duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: b.delay },
              rotate:  { duration: b.dur + 2, repeat: Infinity, ease: "easeInOut", delay: b.delay },
            }}
            className="absolute flex flex-col items-center gap-2"
            style={{ marginLeft: b.mx, marginTop: b.my }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
              <b.Icon size={16} strokeWidth={1.5} className="text-blue-400/60" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-white/20">{b.label}</span>
          </motion.div>
        ))}
        <div className="absolute left-16 text-[9px] uppercase tracking-[0.35em] font-mono text-white/15">Full Stack</div>
        <div className="absolute right-16 text-[9px] uppercase tracking-[0.35em] font-mono text-white/15">Engineer</div>
      </div>

      {/* Main content */}
      <Container className="relative z-10 flex flex-col items-center justify-center text-center px-5">
        <motion.div variants={container} initial="hidden" animate="show"
          className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-4xl">

          {/* Badge */}
          <motion.div variants={item}>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] md:text-xs font-mono text-white/50 tracking-[0.2em] uppercase">Available for work</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Typing role */}
          <motion.div variants={item} className="text-base md:text-2xl font-light text-white/50 h-7 md:h-8 flex items-center">
            <TypingText />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} className="text-xs md:text-base text-white/30 font-light tracking-wide max-w-xs md:max-w-sm leading-relaxed">
            Crafting immersive digital experiences with clean code and thoughtful design.
          </motion.p>

          {/* Meta row */}
          <motion.div variants={item} className="flex items-center gap-3 md:gap-5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-white/20">
            <span>MERN · React · Next.js</span>
            <div className="w-4 md:w-6 h-[1px] bg-white/10" />
            <span>India</span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex items-center gap-3 mt-1 w-full justify-center">
            <MagneticButton href="#contact"
              className="group relative flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 rounded-2xl overflow-hidden text-white font-medium text-sm md:text-base"
              btnStyle={{ background: "linear-gradient(135deg, rgba(79,142,255,0.2), rgba(168,85,247,0.2))", border: "1px solid rgba(79,142,255,0.3)", backdropFilter: "blur(20px)" }}>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(79,142,255,0.15), rgba(168,85,247,0.15))" }} />
              <motion.span initial={{ x: "-100%" }} whileHover={{ x: "200%" }} transition={{ duration: 0.6 }}
                className="absolute inset-0 w-1/3 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)", transform: "skewX(-15deg)" }} />
              <span className="relative z-10">Hire Me</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>

            <MagneticButton href="#projects"
              className="group relative flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 rounded-2xl overflow-hidden text-white/60 font-medium hover:text-white transition-colors duration-300 text-sm md:text-base"
              btnStyle={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}>
              <motion.span initial={{ x: "-100%" }} whileHover={{ x: "200%" }} transition={{ duration: 0.6 }}
                className="absolute inset-0 w-1/3 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.05) 50%, transparent 80%)", transform: "skewX(-15deg)" }} />
              <span className="relative z-10">View Work</span>
              <ArrowDownRight className="w-4 h-4 relative z-10 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={item} className="flex flex-col items-center gap-2 mt-6 md:mt-12 text-white/15 hover:text-white/35 transition-colors cursor-pointer">
            <span className="text-[9px] uppercase tracking-[0.4em] font-mono">Scroll</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-current to-transparent" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
