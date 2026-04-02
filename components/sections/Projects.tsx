"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce MERN App",
    category: "Full Stack",
    description: "Full-featured e-commerce platform with auth, product catalog, cart, and secure payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    accentRgb: "79,142,255",
    accent: "#4f8eff",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Event Booking Platform",
    category: "Next.js · TypeScript",
    description: "Discover and book local events with real-time availability, ticket generation, and organizer dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    accentRgb: "168,85,247",
    accent: "#a855f7",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI SaaS Dashboard",
    category: "React · OpenAI",
    description: "Analytics dashboard powered by AI for sentiment analysis and business insights with real-time charts.",
    tech: ["React", "Tailwind CSS", "Recharts", "OpenAI"],
    accentRgb: "34,211,238",
    accent: "#22d3ee",
    liveUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 30 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 });
  const glowX = useTransform(mx, [-0.5, 0.5], [20, 80]);
  const glowY = useTransform(my, [-0.5, 0.5], [20, 80]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      /* Mobile: full width stacked. md+: fixed width for horizontal scroll */
      className="w-full md:w-[55vw] lg:w-[42vw] flex-shrink-0 group cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative rounded-[20px] md:rounded-[24px] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(${project.accentRgb},0.08), rgba(${project.accentRgb},0.03))`,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid rgba(${project.accentRgb},0.15)`,
          boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(${project.accentRgb},0.06)`,
        }}
      >
        <motion.div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(${project.accentRgb},0.1) 0%, transparent 55%)` }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] z-10"
          style={{ background: `linear-gradient(90deg, transparent, rgba(${project.accentRgb},0.5), transparent)` }} />

        {/* Preview area */}
        <div className="relative w-full aspect-[16/9] overflow-hidden"
          style={{ background: `linear-gradient(135deg, rgba(${project.accentRgb},0.12), rgba(${project.accentRgb},0.04))` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[3.5rem] md:text-[5rem] font-black tracking-tighter select-none"
              style={{ color: `rgba(${project.accentRgb},0.06)` }}>
              {project.title.split(" ")[0].toUpperCase()}
            </span>
          </div>
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: `linear-gradient(rgba(${project.accentRgb},1) 1px, transparent 1px), linear-gradient(90deg, rgba(${project.accentRgb},1) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

          {/* Hover overlay */}
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-3 z-20"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
            <a href={project.liveUrl} onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs md:text-sm font-medium"
              style={{ background: `rgba(${project.accentRgb},0.2)`, border: `1px solid rgba(${project.accentRgb},0.3)`, backdropFilter: "blur(12px)" }}>
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </a>
            <a href={project.githubUrl} onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs md:text-sm font-medium"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}>
              <Github className="w-3.5 h-3.5" /> Code
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-8 flex flex-col gap-3 md:gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em]"
                style={{ color: `rgba(${project.accentRgb},0.6)` }}>{project.category}</span>
              <h3 className="text-lg md:text-2xl font-bold text-white mt-1 group-hover:text-white/90 transition-colors">
                {project.title}
              </h3>
            </div>
            <span className="text-white/15 font-mono text-sm mt-1 flex-shrink-0">0{index + 1}</span>
          </div>
          <p className="text-white/35 text-xs md:text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-mono"
                style={{ color: `rgba(${project.accentRgb},0.7)`, background: `rgba(${project.accentRgb},0.08)`, border: `1px solid rgba(${project.accentRgb},0.15)` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Mobile: vertical stack. Desktop: horizontal scroll pinned */
function MobileProjects() {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  );
}

function DesktopProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container className="w-full">
          <div className="flex flex-col gap-8 w-full pt-6">
            <SectionHeader />
            <motion.div style={{ x }} className="flex gap-8 mt-4 w-fit pb-8 pr-[50vw]">
              {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <>
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="flex items-center gap-4">
        <span className="text-white/25 font-mono text-sm tracking-widest">02</span>
        <div className="w-10 h-[1px] bg-white/10" />
        <span className="text-white/25 font-mono text-xs tracking-[0.3em] uppercase">Selected Work</span>
      </motion.div>
      <div className="overflow-hidden">
        <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
          Projects
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">.</span>
        </motion.h2>
      </div>
    </>
  );
}

export function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <section id="projects" className="relative bg-transparent py-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,142,255,0.04) 0%, transparent 70%)" }} />
        <Container>
          <div className="flex flex-col gap-8">
            <SectionHeader />
            <MobileProjects />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="relative bg-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,142,255,0.04) 0%, transparent 70%)" }} />
      <DesktopProjects />
    </section>
  );
}

// end of file
