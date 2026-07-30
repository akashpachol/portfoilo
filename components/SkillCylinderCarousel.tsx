"use client";

import React, { useState, useEffect, useRef } from "react";
import { Code2, Cpu, Sparkles, Layers, Terminal, Database, ArrowRight, CheckCircle2 } from "lucide-react";

interface SkillCardData {
  id: number;
  skillName: string;
  category: string;
  level: string;
  percentage: number;
  experience: string;
  gradient: string;
  glowColor: string;
  tags: string[];
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const skillCards: SkillCardData[] = [
  {
    id: 1,
    skillName: "Next.js 16 & React 19",
    category: "Frontend Architecture",
    level: "Master",
    percentage: 98,
    experience: "5+ Years Experience",
    gradient: "from-blue-600/30 via-indigo-600/20 to-purple-800/30",
    glowColor: "rgba(59, 130, 246, 0.3)",
    tags: ["App Router", "Turbopack", "Server Actions", "SSG/SSR"],
    features: [
      "Enterprise App Router Architecture",
      "High-Performance Server Components",
      "Sub-second First Contentful Paint",
      "SEO & OpenGraph Optimizations",
    ],
    icon: Code2,
  },
  {
    id: 2,
    skillName: "TypeScript & ESNext",
    category: "Type-Safe Systems",
    level: "Expert",
    percentage: 95,
    experience: "4+ Years Experience",
    gradient: "from-sky-500/30 via-blue-600/20 to-teal-700/30",
    glowColor: "rgba(14, 165, 233, 0.3)",
    tags: ["Generics", "AST Parsing", "Strict Compiler", "Zod Validation"],
    features: [
      "Strict End-to-End Type Safety",
      "Complex Generic Abstractions",
      "Runtime Data Validation with Zod",
      "Zero Any Runtime Policies",
    ],
    icon: Terminal,
  },
  {
    id: 3,
    skillName: "Tailwind CSS v4",
    category: "UI & Design Systems",
    level: "Master",
    percentage: 96,
    experience: "4+ Years Experience",
    gradient: "from-teal-400/30 via-emerald-600/20 to-green-800/30",
    glowColor: "rgba(20, 184, 166, 0.3)",
    tags: ["Glassmorphism", "Custom Tokens", "Fluid Responsive", "60fps Anims"],
    features: [
      "Custom Modern Design Systems",
      "Liquid Glass & Dynamic Micro-anims",
      "WCAG AA Accessibility Pacing",
      "Fluid Clamp Layout Engine",
    ],
    icon: Layers,
  },
  {
    id: 4,
    skillName: "3D Graphics & Shaders",
    category: "Creative Engineering",
    level: "Advanced",
    percentage: 90,
    experience: "3+ Years Experience",
    gradient: "from-purple-600/30 via-pink-600/20 to-rose-700/30",
    glowColor: "rgba(168, 85, 247, 0.3)",
    tags: ["Three.js", "WebGL Shaders", "Framer Motion", "GSAP Timeline"],
    features: [
      "Volumetric 3D Cylinder & Scene Loops",
      "Custom GLSL Fragment Shaders",
      "Frame-Accurate Video Controls",
      "GPU-Accelerated Parallax",
    ],
    icon: Cpu,
  },
  {
    id: 5,
    skillName: "AI Systems & Agents",
    category: "LLM & Automation",
    level: "Advanced",
    percentage: 92,
    experience: "2+ Years Experience",
    gradient: "from-amber-500/30 via-orange-600/20 to-red-700/30",
    glowColor: "rgba(245, 158, 11, 0.3)",
    tags: ["Vercel AI SDK", "Prompt Chains", "Vector Search", "Adaptive UI"],
    features: [
      "Streaming Conversational UI",
      "Autonomous Multi-Agent Systems",
      "Embeddings & Vector Retrieval",
      "Cognitive Ergonomics Pacing",
    ],
    icon: Sparkles,
  },
  {
    id: 6,
    skillName: "Node.js & Backend",
    category: "Core API & Edge",
    level: "Advanced",
    percentage: 91,
    experience: "4+ Years Experience",
    gradient: "from-violet-600/30 via-fuchsia-600/20 to-purple-900/30",
    glowColor: "rgba(139, 92, 246, 0.3)",
    tags: ["REST / GraphQL", "Edge Functions", "Redis Caching", "PostgreSQL"],
    features: [
      "Distributed Edge Microservices",
      "Low-Latency Caching Layers",
      "Real-Time WebSockets & Streams",
      "Secure Auth & Rate-Limiting",
    ],
    icon: Database,
  },
];

export const SkillCylinderCarousel: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const progressRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startProgressRef = useRef(0);

  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mouseCurrentRef = useRef({ x: 0, y: 0 });

  // 60fps Render Loop
  useEffect(() => {
    let animFrameId: number;

    const renderLoop = () => {
      if (!isDraggingRef.current) {
        progressRef.current += 0.0022;
      }

      mouseCurrentRef.current.x +=
        (mouseTargetRef.current.x - mouseCurrentRef.current.x) * 0.06;
      mouseCurrentRef.current.y +=
        (mouseTargetRef.current.y - mouseCurrentRef.current.y) * 0.06;

      setProgress(progressRef.current);
      animFrameId = requestAnimationFrame(renderLoop);
    };

    animFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animFrameId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseTargetRef.current = {
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingRef.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startXRef.current = clientX;
    startProgressRef.current = progressRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startXRef.current;
    progressRef.current = startProgressRef.current - deltaX * 0.003;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const toggleFlip = (cardId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const totalCards = skillCards.length;
  const radius = 680;

  return (
    <section className="relative w-full h-[85vh] bg-black overflow-hidden flex flex-col items-center justify-center select-none py-12 border-y border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="absolute top-8 text-center z-20 pointer-events-none px-4">
        <h2 className="text-white text-2xl sm:text-4xl font-bold tracking-tight font-fustat">
          Core Skills & Technical Mastery
        </h2>
        <p className="text-white/50 text-xs sm:text-sm mt-1">
          Drag horizontally to rotate 3D cylinder • Click card to view deep breakdown
        </p>
      </div>

      {/* 3D Scene Wrapper */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing perspective-1350"
      >
        {/* 3D Cylinder Container */}
        <div
          className="relative w-[340px] sm:w-[380px] h-[230px] sm:h-[250px] preserve-3d transition-transform duration-75 ease-out"
          style={{
            transform: `rotateX(${-mouseCurrentRef.current.y * 12}deg) rotateY(${
              mouseCurrentRef.current.x * 16
            }deg)`,
          }}
        >
          {skillCards.map((card, index) => {
            const angleStep = (2 * Math.PI) / totalCards;
            const angle = (index - progress) * angleStep;

            const x = Math.sin(angle) * radius;
            const z = (Math.cos(angle) - 1) * radius;
            const rotateY = angle * (180 / Math.PI);

            const cosVal = Math.cos(angle);
            const opacity = Math.max(0, (cosVal + 0.3) / 1.3);
            const isFlipped = !!flippedCards[card.id];
            const IconComp = card.icon;

            return (
              <div
                key={card.id}
                onClick={(e) => toggleFlip(card.id, e)}
                className="absolute inset-0 preserve-3d cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  pointerEvents: opacity < 0.2 ? "none" : "auto",
                }}
              >
                {/* 3D Edge Layer Stacking (Volumetric Depth) */}
                {[-3, -2, -1, 1, 2, 3].map((offset) => (
                  <div
                    key={offset}
                    className="absolute inset-0 rounded-2xl bg-black/80 border border-white/10 pointer-events-none"
                    style={{
                      transform: `translateZ(${offset * 1.5}px)`,
                    }}
                  />
                ))}

                {/* Main Card Flip Container */}
                <div
                  className="relative w-full h-full rounded-2xl preserve-3d transition-transform duration-700 ease-in-out shadow-2xl border border-white/20"
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    boxShadow: `0 20px 50px ${card.glowColor}`,
                  }}
                >
                  {/* ==================================================== */}
                  {/* FRONT FACE OF NORMAL SKILL CARD */}
                  {/* ==================================================== */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden bg-gradient-to-br ${card.gradient} bg-black/90 p-5 flex flex-col justify-between border border-white/25 shadow-2xl backdrop-blur-xl`}
                  >
                    {/* Background Dot Grid Pattern */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                    {/* Top Row: Category Pill + Skill Icon */}
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wider text-white/80 uppercase px-3 py-1 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
                        {card.category}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-inner">
                        <IconComp className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Skill Title & Level Percentage Meter */}
                    <div className="relative z-20 my-auto pt-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                        {card.skillName}
                      </h3>

                      {/* Level Progress Bar */}
                      <div className="mt-3">
                        <div className="flex justify-between items-center text-xs font-semibold text-white/80 mb-1">
                          <span>Proficiency</span>
                          <span className="text-emerald-400">{card.level} ({card.percentage}%)</span>
                        </div>
                        <div className="w-full bg-white/15 rounded-full h-2 overflow-hidden p-0.5 border border-white/10">
                          <div
                            className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full rounded-full transition-all duration-1000"
                            style={{ width: `${card.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Key Tech Badges */}
                    <div className="relative z-20 flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                      {card.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/10 text-white/90 border border-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ==================================================== */}
                  {/* BACK FACE OF NORMAL SKILL CARD (Flipped 180deg) */}
                  {/* ==================================================== */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden bg-black/95 p-5 flex flex-col justify-between border border-white/25 shadow-2xl backdrop-blur-xl"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    {/* Header */}
                    <div className="relative z-20 flex items-center justify-between border-b border-white/15 pb-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                        <IconComp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{card.skillName}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {card.experience}
                      </span>
                    </div>

                    {/* Key Capabilities / Bullet Features */}
                    <div className="relative z-20 space-y-1.5 my-auto">
                      {card.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-white/80 font-normal leading-tight"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer Flip CTA Indicator */}
                    <div className="relative z-20 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-white/60">
                      <span>Click to flip back</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white/60" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
