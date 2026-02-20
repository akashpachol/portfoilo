"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-950 border-t border-white/5">
            <Container>
                <div className="flex flex-col items-center text-center gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter text-white max-w-4xl"
                    >
                        Let's build something <span className="text-zinc-600">extraordinary.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4"
                    >
                        <Link
                            href="mailto:hello@akash.dev"
                            className="group flex items-center gap-4 text-2xl md:text-4xl font-medium text-white hover:text-indigo-400 transition-colors"
                        >
                            <span>hello@akash.dev</span>
                            <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
                        </Link>
                    </motion.div>

                    <div className="flex gap-8 mt-12">
                        {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social, index) => (
                            <motion.a
                                key={social}
                                href="#"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className="text-sm md:text-base text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
                            >
                                {social}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
