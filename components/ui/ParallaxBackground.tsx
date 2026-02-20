"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";

export function ParallaxBackground() {
    const { scrollY } = useScroll();

    // Parallax effects for different layers
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 50]);

    // Mouse position for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const { clientX, clientY } = event;
        mouseX.set(clientX);
        mouseY.set(clientY);
    }

    // Smooth mouse movement
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Dynamic background gradient based on mouse
    const background = useMotionTemplate`radial-gradient(600px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

    // Listen to window mouse move to ensure it works even if hovering over other elements
    useEffect(() => {
        const handleWindowMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleWindowMouseMove);
        return () => window.removeEventListener("mousemove", handleWindowMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-black selection:bg-indigo-500/30">
            {/* Spotlight Effect */}
            <motion.div
                className="absolute inset-0 opacity-100"
                style={{ background }}
            />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Glowing Orbs / Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Layer 1: Slow moving large faint orbs */}
                <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
                <motion.div style={{ y: y2 }} className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen opacity-30" />

                {/* Floating Tech Elements (Abstract) */}
                <motion.div
                    style={{ y: y3, rotate: 45 }}
                    className="absolute top-[30%] right-[20%] w-32 h-32 border border-white/5 rounded-full"
                    animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    style={{ y: y2, rotate: -12 }}
                    className="absolute bottom-[20%] left-[15%] w-64 h-64 border border-white/5 rounded-full"
                    animate={{ rotate: [-12, 12, -12], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%] pointer-events-none" />
        </div>
    );
}
