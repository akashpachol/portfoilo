"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SKILLS } from "@/lib/data";

export function Skills() {
    return (
        <section className="py-16 border-y border-white/5 bg-zinc-900/10">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left shrink-0"
                    >
                        <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase text-white font-geist-mono">( Tech Stack )</h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-3 max-w-4xl">
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="px-5 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
