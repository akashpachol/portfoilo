"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        id: "01",
        title: "Modevelle",
        category: "ECOMMERCE",
        year: "2024",
        description: "A demo e-commerce website for women's fashion, featuring product listings, cart functionality, and user authentication. Built using Next.js and the Shopify Storefront API.",
        tech: ["Next.js", "Shopify", "Tailwind"],
        link: "https://modevelle.vercel.app",
        color: "#1a1a1a" // Dark grey
    },
    {
        id: "02",
        title: "Vortex",
        category: "SAAS PLATFORM",
        year: "2023",
        description: "AI-powered analytics dashboard for data visualization. Drastically reduced rendering times for large datasets using Web Workers and GPU acceleration.",
        tech: ["React", "D3.js", "Python"],
        link: "#",
        color: "#2a2a2a" // Slightly lighter
    },
    {
        id: "03",
        title: "Apex",
        category: "FINTECH",
        year: "2023",
        description: "Mobile-first banking application layout with focus on accessibility and security. Implemented biometric authentication flow.",
        tech: ["React Native", "TypeScript"],
        link: "#",
        color: "#18181b" // Zinc 900
    },
    {
        id: "04",
        title: "Nebula",
        category: "PORTFOLIO",
        year: "2022",
        description: "Award-winning portfolio site for a digital agency. Winner of Awwwards Site of the Day. Features complex GSAP animations.",
        tech: ["GSAP", "Three.js", "Strapi"],
        link: "#",
        color: "#0f0f10" // Darker
    }
];

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeProject, setActiveProject] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update active project based on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.min(
                Math.floor(latest * PROJECTS.length),
                PROJECTS.length - 1
            );
            setActiveProject(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Simplified Projects for Mobile / Sticky for Desktop
    return (
        <section ref={containerRef} className="relative bg-zinc-950 text-white min-h-screen md:h-[350vh]">
            <div className="relative md:sticky md:top-0 md:h-screen md:overflow-hidden py-12 md:py-0">
                <Container className="h-full flex flex-col justify-center">

                    {/* Top Header - Hidden on Mobile to save space, or smaller */}
                    <div className="md:absolute top-8 left-0 w-full px-4 md:px-0 flex justify-between items-start z-10 mb-8 md:mb-0">
                        {/* Circular Counter */}
                        <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center">
                            <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-white/10"
                                />
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-white"
                                    strokeDasharray="301.59"
                                    strokeDashoffset={301.59 - (301.59 * ((activeProject + 1) / PROJECTS.length))}
                                    style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
                                />
                            </svg>
                            <div className="flex flex-col items-center justify-center text-center">
                                <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Project</span>
                                <span className="text-sm md:text-lg font-bold font-mono">
                                    {PROJECTS[activeProject].id} <span className="text-zinc-600">|</span> 04
                                </span>
                            </div>
                        </div>

                        <div className="hidden md:block text-right">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold uppercase">{PROJECTS[activeProject].category}</span>
                                <span className="text-xs text-zinc-500 font-mono">{PROJECTS[activeProject].year}</span>
                            </div>
                        </div>
                    </div>


                    {/* Main Content Split */}
                    <div className="flex flex-col md:flex-row h-full items-center gap-8 md:gap-0">

                        {/* Left Side: Text Info */}
                        <div className="w-full md:w-5/12 flex flex-col justify-center gap-6 relative z-20 pt-0 md:pt-0">
                            {/* Mobile: Show all projects as a list? Or keep the scroll sync logic?
                                For now, keeping the scroll sync logic but ensuring it fits on screen.
                            */}
                            <motion.div
                                key={activeProject}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-4"
                            >
                                <h2 className="text-5xl md:text-8xl font-bold font-oswald tracking-tighter leading-none">
                                    {PROJECTS[activeProject].title}
                                </h2>

                                <div className="md:hidden flex flex-col mb-2">
                                    <span className="text-xs font-bold uppercase text-zinc-500">{PROJECTS[activeProject].category}</span>
                                </div>

                                <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-md">
                                    {PROJECTS[activeProject].description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-2">
                                    {PROJECTS[activeProject].tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={PROJECTS[activeProject].link}
                                    className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-zinc-300 transition-colors"
                                >
                                    ( VISIT SITE )
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Side: Visuals */}
                        <div className="w-full md:w-7/12 h-[40vh] md:h-[80vh] relative flex items-center justify-center">
                            {/* Project Stacked Cards/Images */}
                            <div className="relative w-full h-full p-2 md:p-8">
                                {PROJECTS.map((project, index) => {
                                    const isActive = index === activeProject;
                                    return (
                                        <motion.div
                                            key={project.id}
                                            initial={false}
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                scale: isActive ? 1 : 0.95,
                                                x: isActive ? 0 : 100,
                                                rotate: isActive ? 0 : 5
                                            }}
                                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                            className="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10"
                                            style={{ backgroundColor: project.color, zIndex: isActive ? 10 : 0 }}
                                        >
                                            {/* Mockup / Image Placeholder */}
                                            <div className="w-full h-full relative group">
                                                <div className="absolute inset-x-4 md:inset-x-8 top-8 md:top-12 bottom-0 bg-zinc-950 rounded-t-xl overflow-hidden shadow-2xl transform translate-y-4 transition-transform duration-700 ease-out group-hover:translate-y-0">
                                                    {/* Browser Header Dummy */}
                                                    <div className="h-6 bg-zinc-800 flex items-center px-4 gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                    </div>
                                                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 font-oswald text-2xl md:text-4xl text-center px-4">
                                                        [ {project.title} Preview ]
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </section>
    );
}
