"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

const EXPERIENCE = [
    {
        company: "TechNova",
        role: "Senior Frontend Engineer",
        period: "2023 - Present",
        description: "Leading the frontend team in building a next-gen SaaS platform. Implemented a new design system."
    },
    {
        company: "Creative Studio",
        role: "Creative Developer",
        period: "2021 - 2023",
        description: "Developed award-winning marketing sites with heavy use of WebGL and GSAP."
    },
    {
        company: "WebSolutions Inc.",
        role: "Frontend Developer",
        period: "2019 - 2021",
        description: "Built responsive e-commerce websites using React and Shopify using modern headless architecture."
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-10 md:py-16 bg-zinc-950 border-t border-zinc-900">
            <Container>
                <div className="flex flex-col gap-6 md:gap-12">
                    <div className="flex flex-col gap-2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-geist-mono text-zinc-500 text-sm tracking-widest uppercase"
                        >
                            ( Career Path )
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-9xl font-bold font-oswald text-white tracking-tighter max-w-5xl"
                        >
                            Experience
                        </motion.h2>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-10">
                        {EXPERIENCE.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative pl-8 border-l border-zinc-800"
                            >
                                <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                                    <span className="text-sm text-zinc-500 font-mono">{job.period}</span>
                                </div>
                                <h4 className="text-zinc-400 mb-4">{job.role}</h4>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {job.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
