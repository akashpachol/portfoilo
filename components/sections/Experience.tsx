"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { H2, H3, P } from "@/components/ui/Typography";

const experiences = [
  {
    role: "React Developer",
    company: "Datamoo.ai",
    period: "2024 - PRESENT",
    description: "Building and maintaining highly responsive user interfaces using React.js. Collaborating with backend teams to integrate APIs and improve overall application performance. Ensuring seamless cross-browser compatibility and optimized components."
  },
  {
    role: "Full Stack Developer",
    company: "Brototype",
    period: "2023 - 2024",
    description: "Developed end-to-end full stack applications using the MERN stack. Designed scalable database architectures and implemented complex functionality, ensuring an excellent user experience and high product quality."
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-background py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-16 md:gap-32">
          
          {/* Header */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <span className="text-zinc-500 font-mono text-sm tracking-widest">03</span>
              <div className="w-12 h-[1px] bg-zinc-800" />
              <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Experience</span>
            </div>

            <H2 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[1.1]">
              Where I've<br />
              <span className="italic text-zinc-500 font-light">contributed.</span>
            </H2>
          </div>

          {/* Experience List */}
          <div className="flex flex-col border-t border-zinc-900 mt-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 py-12 border-b border-zinc-900 hover:bg-zinc-900/20 transition-colors duration-500 px-4 md:px-0"
              >
                {/* Period */}
                <div className="md:col-span-3 flex items-start">
                  <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mt-1">
                    {exp.period}
                  </span>
                </div>

                {/* Role & Details */}
                <div className="md:col-span-9 flex flex-col md:flex-row justify-between gap-8 md:gap-16">
                  <div className="flex flex-col gap-2 md:w-1/3">
                    <H3 className="text-2xl md:text-3xl text-foreground font-bold group-hover:text-zinc-300 transition-colors">
                      {exp.role}
                    </H3>
                    <span className="text-lg text-zinc-500">
                      {exp.company}
                    </span>
                  </div>

                  <div className="md:w-2/3">
                    <P className="text-zinc-400 font-light leading-relaxed">
                      {exp.description}
                    </P>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
