"use client";

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { H2, P } from "@/components/ui/Typography";

export function About() {
  const circleSkills = [
    { name: "React.js", progress: 92 },
    { name: "Next.js", progress: 85 },
    { name: "Node.js", progress: 80 },
  ];

  const linearSkills = [
    { name: "TypeScript", progress: 88 },
    { name: "MongoDB", progress: 75 },
    { name: "Tailwind CSS", progress: 95 },
  ];

  return (
    <Section id="about" className="bg-background py-24 md:py-32 relative">
      <Container>
        <div className="flex flex-col gap-16 md:gap-32">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-zinc-500 font-mono text-sm tracking-widest">01</span>
              <div className="w-12 h-[1px] bg-zinc-800" />
              <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">About</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column: Headline and Bio */}
            <div className="flex flex-col gap-12">
              <H2 className="text-5xl md:text-6xl tracking-tighter font-bold text-foreground leading-[1.1]">
                Crafting digital<br />experiences with<br />
                <span className="italic text-zinc-500 font-light">precision.</span>
              </H2>
              
              <div className="flex flex-col gap-8 text-zinc-400 font-light leading-relaxed text-lg">
                <P>
                  I'm Akash, a Full Stack Developer passionate about building performant, scalable web applications. I specialize in the MERN stack and modern JavaScript ecosystems, turning complex requirements into clean, maintainable solutions.
                </P>
                <P>
                  With hands-on experience across React.js, Next.js, Node.js, TypeScript, and MongoDB, I focus on writing code that is both functional and elegant. Every project is an opportunity to push the boundaries of what's possible.
                </P>
              </div>
            </div>

            {/* Right Column: Skills */}
            <div className="flex flex-col gap-16 pt-2">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Technical Proficiency</span>
              
              {/* Circular Progress (Primary Skills) */}
              <div className="grid grid-cols-3 gap-6">
                {circleSkills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-6">
                    <div className="relative w-24 h-24">
                      {/* Background Circle */}
                      <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-zinc-900"
                        />
                        {/* Progress Circle Loop */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="283"
                          strokeDashoffset="283"
                          initial={{ strokeDashoffset: 283 }}
                          whileInView={{ strokeDashoffset: 283 - (283 * skill.progress) / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Linear Progress (Secondary Skills) */}
              <div className="flex flex-col gap-8 mt-4">
                {linearSkills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-zinc-500">{skill.progress}%</span>
                    </div>
                    <div className="w-full h-[2px] bg-zinc-900 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
