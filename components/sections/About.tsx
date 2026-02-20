"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ArrowDownRight } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-10 md:py-16 bg-zinc-950">
            <Container>
                <div className="flex flex-col gap-6 md:gap-12">
                    {/* Header with Oswald Font */}
                    <div className="flex flex-col gap-2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-geist-mono text-zinc-500 text-sm tracking-widest uppercase"
                        >
                            ( About Me )
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-9xl font-bold font-oswald text-white tracking-tighter leading-[0.9] max-w-5xl"
                        >
                            DESIGNING THE <br /> FUTURE OF <span className="text-zinc-600">WEB</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-start border-t border-zinc-800 pt-6">
                        <div className="md:col-span-4">
                            <span className="flex items-center gap-2 text-zinc-500 font-medium">
                                <ArrowDownRight className="w-5 h-5" />
                                BIOGRAPHY
                            </span>
                        </div>

                        <div className="md:col-span-8 flex flex-col gap-8">
                            <div className="text-xl md:text-3xl text-zinc-300 leading-tight font-light space-y-6">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    I am a passionate frontend architect with a keen eye for detail and a love for motion.
                                    My journey began with a curiosity for how things move on the screen, leading me to
                                    master technologies like Next.js, WebGL, and Framer Motion.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-zinc-500"
                                >
                                    I specialize in creating immersive digital experiences that leave a lasting impression.
                                    Whether it&apos;s a high-performance e-commerce site or a creative portfolio, I bring
                                    ideas to life with clean code and fluid animations.
                                </motion.p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-8 pt-8 md:pt-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-5xl md:text-7xl font-bold font-oswald text-white mb-2">05+</h3>
                                    <span className="font-geist-mono text-xs text-zinc-500 uppercase tracking-widest">Years of Experience</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <h3 className="text-5xl md:text-7xl font-bold font-oswald text-white mb-2">40+</h3>
                                    <span className="font-geist-mono text-xs text-zinc-500 uppercase tracking-widest">Successful Projects</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
