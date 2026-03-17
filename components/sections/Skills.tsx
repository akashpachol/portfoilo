"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { H2 } from "@/components/ui/Typography";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

export function Skills() {
  return (
    <Section id="skills" className="bg-background">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
            <div className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm tracking-widest uppercase font-semibold">
                ( Tech Stack )
              </span>
              <H2>My Expertise</H2>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-6 py-4 md:px-8 md:py-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm cursor-default transition-colors hover:bg-zinc-800 hover:border-zinc-700"
              >
                <span className="text-xl md:text-3xl font-medium text-white tracking-tight">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
