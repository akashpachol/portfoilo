"use client";

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { H2, H3, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce MERN Application",
    description: "A full-featured e-commerce platform built with the MERN stack. Features include user authentication, product catalog, shopping cart, and secure payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Event Booking Platform",
    description: "A comprehensive platform for discovering and booking local events. Includes real-time availability checking, ticket generation, and a dashboard for event organizers.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI SaaS Dashboard",
    description: "An analytics dashboard powered by AI to provide sentiment analysis and business insights. Fully responsive and features real-time data visualization.",
    tech: ["React", "Tailwind CSS", "Recharts", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]); // Adjust based on number of projects

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-background">
      {/* Marquee Ticker */}
      <div className="absolute top-0 w-full overflow-hidden border-y border-zinc-900 py-4 z-10 bg-background/50 backdrop-blur-md">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-16 items-center text-zinc-500 font-mono text-sm tracking-widest uppercase"
        >
          {Array(10).fill(["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS"]).flat().map((item, i) => (
            <span key={i} className="flex items-center gap-16">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container className="w-full">
          <div className="flex flex-col gap-12 w-full pt-20">
            {/* Header */}
            <div className="flex items-center gap-4 pl-4 md:pl-0">
              <span className="text-zinc-500 font-mono text-sm tracking-widest">02</span>
              <div className="w-12 h-[1px] bg-zinc-800" />
              <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Selected Work</span>
            </div>

            <H2 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground pl-4 md:pl-0">
              Projects<span className="text-zinc-600">.</span>
            </H2>

            <motion.div style={{ x }} className="flex gap-8 md:gap-16 mt-12 w-fit pb-12 pr-[50vw]">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col gap-6 group"
                >
                  {/* Image Placeholder */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-zinc-800/50 bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-4 border border-white/5 rounded-xl pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
                      <span className="text-4xl font-bold text-zinc-500 tracking-widest uppercase">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 px-2">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 font-mono text-sm tracking-widest">0{index + 1}</span>
                      <H3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-zinc-300 transition-colors">
                        {project.title}
                      </H3>
                    </div>

                    <P className="text-zinc-400 font-light leading-relaxed">
                      {project.description}
                    </P>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-900 mt-2">
                      <a href={project.liveUrl} className="flex items-center gap-2 text-foreground hover:text-zinc-400 transition-colors text-sm font-medium">
                        View Live <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a href={project.githubUrl} className="flex items-center gap-2 text-zinc-500 hover:text-foreground transition-colors text-sm font-medium ml-4">
                        <Github className="w-4 h-4" /> Source
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
