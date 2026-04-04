"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

const expertise = [
  {
    category: "Frontend",
    number: "01",
    accent: "#4f8eff",
    gradient: "from-blue-500/15 to-cyan-500/5",
    border: "rgba(79,142,255,0.2)",
    glow: "rgba(79,142,255,0.12)",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 82 },
    ],
  },
  {
    category: "Backend",
    number: "02",
    accent: "#a855f7",
    gradient: "from-purple-500/15 to-pink-500/5",
    border: "rgba(168,85,247,0.2)",
    glow: "rgba(168,85,247,0.12)",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "WebSockets", level: 70 },
    ],
  },
  {
    category: "Database & DevOps",
    number: "03",
    accent: "#22d3ee",
    gradient: "from-cyan-500/15 to-teal-500/5",
    border: "rgba(34,211,238,0.2)",
    glow: "rgba(34,211,238,0.12)",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 72 },
      { name: "Redis", level: 65 },
      { name: "TurboRepo", level: 80 },
      { name: "Docker", level: 68 },
    ],
  },
];

const floatingTags = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "MongoDB", "Tailwind", "Framer Motion", "GraphQL", "Redux",
  "Prisma", "Docker", "Git", "GSAP", "TurboRepo",
];

function SkillBar({ name, level, accent, index }: { name: string; level: number; accent: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs font-mono text-white/50 uppercase tracking-wider">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
          className="text-xs font-mono"
          style={{ color: `${accent}99` }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${accent}80, ${accent})` }}
        >
          {/* Shimmer */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, delay: index * 0.08 + 1, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ExpertiseCard({ group, gi }: { group: (typeof expertise)[0]; gi: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      className="glass rounded-3xl p-8 flex flex-col gap-8 border group cursor-default"
      style={{
        y, opacity, scale,
        borderColor: group.border,
        boxShadow: `0 0 40px ${group.glow}, 0 0 0 1px ${group.border}`,
        background: `linear-gradient(135deg, ${group.glow}, transparent)`,
      } }
    >
      {/* Card header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: `${group.accent}80` }}>
            {group.number}
          </span>
          <h3 className="text-xl font-bold text-white">{group.category}</h3>
        </div>
        {/* Animated ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 rounded-full border flex-shrink-0"
          style={{ borderColor: `${group.accent}30`, borderTopColor: group.accent }}
        />
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-4">
        {group.skills.map((skill, si) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} accent={group.accent} index={si} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={sectionRef}>
    <Section id="skills" className="bg-transparent relative overflow-hidden">
      {/* Parallax ambient blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/4 rounded-full blur-[80px]" />
      </motion.div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-white/30 font-mono text-sm tracking-widest">04</span>
              <div className="w-12 h-[1px] bg-white/10" />
              <span className="text-white/30 font-mono text-sm tracking-widest uppercase">Tech Stack</span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
              >
                My Expertise
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">.</span>
              </motion.h2>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((group, gi) => (
              <ExpertiseCard key={group.category} group={group} gi={gi} />
            ))}
          </div>

          {/* Animated floating tags row */}
          <div className="relative overflow-hidden py-4">
            {/* Top row — left to right */}
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 w-max mb-3"
            >
              {[...floatingTags, ...floatingTags].map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-3 py-1.5 md:px-4 md:py-2 glass rounded-2xl text-xs md:text-sm font-mono text-white/40 border border-white/5 whitespace-nowrap cursor-default hover:text-white/70 hover:border-white/15 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            {/* Bottom row — right to left */}
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 w-max"
            >
              {[...floatingTags.slice().reverse(), ...floatingTags.slice().reverse()].map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-3 py-1.5 md:px-4 md:py-2 glass rounded-2xl text-xs md:text-sm font-mono text-white/30 border border-white/5 whitespace-nowrap cursor-default hover:text-white/60 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
    </div>
  );
}
