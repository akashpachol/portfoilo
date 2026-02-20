"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Smooth spring physics for the scroll progress to give a "premium" heavy feel
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // Scale from 1 to 35 (massive zoom) as user scrolls down
    // We use smoothProgress for a buttery feel
    const scale = useTransform(smoothProgress, [0, 1], [1, 35]);

    // Text stays visible longer:
    // Opacity: Stays 1 until 30% scroll, then fades out by 60%
    const textOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 1, 0]);

    // Text moves away faster to create parallax
    const textY = useTransform(smoothProgress, [0, 0.5], [0, 150]);

    // Text spreads outwards (X axis) slightly as image grows
    const leftTextX = useTransform(smoothProgress, [0, 0.5], [0, -100]);
    const rightTextX = useTransform(smoothProgress, [0, 0.5], [0, 100]);

    return (
        <section ref={containerRef} className="relative flex h-[130vh] flex-col overflow-hidden pt-24 md:pt-32">
            {/* Sticky Container for the visual lock */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                <Container className="relative z-10 flex flex-col items-center justify-center h-full">

                    {/* Intro Block (Hello!) */}
                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col items-center gap-4 mb-20 md:mb-32 scale-90 md:scale-100 origin-center relative z-40"
                    >
                        <div className="flex items-center gap-8 md:gap-12">
                            {/* Left Bracket */}
                            <span className="text-6xl md:text-8xl font-thin text-white font-oswald tracking-tighter transform -translate-y-2">(</span>

                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-white uppercase mb-2 font-geist-mono">Hello!</span>
                                <div className="text-center">
                                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-[300px] font-light">
                                        I&apos;m Akash P, a web <br />
                                        developer and engineer. <br />
                                        Welcome to my portfolio!
                                    </p>
                                </div>
                            </div>

                            {/* Right Bracket */}
                            <span className="text-6xl md:text-8xl font-thin text-white font-oswald tracking-tighter transform -translate-y-2">)</span>
                        </div>
                    </motion.div>

                    {/* Massive Creative Text - Single Line Layout */}
                    <div className="w-full flex items-center justify-center relative z-20 gap-2 md:gap-4 mt-8 pointer-events-none">

                        {/* "Creative" - Staggered Reveal */}
                        <motion.div
                            style={{ opacity: textOpacity, x: leftTextX, y: textY }}
                            className="flex overflow-hidden relative z-50 mix-blend-difference"
                        >
                            {Array.from("Creative").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: i * 0.05 + 0.2
                                    }}
                                    className="text-[10vw] leading-none font-bold font-oswald text-white tracking-tighter block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Central Image Placeholder - ZOOMS */}
                        <motion.div
                            style={{ scale }}
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "15vw", opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="h-[10vw] rounded-2xl overflow-hidden relative border border-white/10 bg-zinc-900 shrink-0 z-30"
                        >
                            {/* Dummy Image Gradient */}
                            <div className="w-full h-full bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-oswald text-xl opacity-50">
                                    [ IMG ]
                                </div>
                                <img
                                    src="/pexels-jakubzerdzicki-34212896.jpg"
                                    alt="Creative Coding"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* "dev" - Staggered Reveal */}
                        <motion.div
                            style={{ opacity: textOpacity, x: rightTextX, y: textY }}
                            className="flex overflow-hidden relative z-50 mix-blend-difference"
                        >
                            {Array.from("dev").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: i * 0.05 + 0.6
                                    }}
                                    className="text-[10vw] leading-none font-bold font-oswald text-white tracking-tighter block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                </Container>
            </div>
        </section>
    );
}
