"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface Particle {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
  createdAt: number;
}

const partnerThumbnails = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
];

interface PartnerSectionProps {
  onChatClick?: () => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({
  onChatClick,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastSpawnTimeRef = useRef<number>(0);
  const imageIndexRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Spawning logic on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const now = performance.now();
    if (now - lastSpawnTimeRef.current < 80) return; // 80ms minimum spacing

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const src = partnerThumbnails[imageIndexRef.current % partnerThumbnails.length];
    imageIndexRef.current++;

    const rotation = Math.random() * 20 - 10; // -10deg to +10deg

    const newParticle: Particle = {
      id: Math.random() + now,
      x,
      y,
      src,
      rotation,
      createdAt: now,
    };

    lastSpawnTimeRef.current = now;
    setParticles((prev) => [...prev, newParticle]);
  };

  // requestAnimationFrame loop to cleanup particles older than 1000ms and trigger smooth animation
  const updateParticles = useCallback(() => {
    const now = performance.now();
    setParticles((prev) => prev.filter((p) => now - p.createdAt < 1000));
    animFrameRef.current = requestAnimationFrame(updateParticles);
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(updateParticles);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [updateParticles]);

  return (
    <section className="w-full py-12 px-6 bg-transparent relative z-10">
      {/* Large white container (max-w-7xl, py-48, rounded-[40px], subtle shadow) */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="max-w-7xl mx-auto py-24 sm:py-36 md:py-48 rounded-[40px] shadow-xl  relative overflow-hidden flex flex-col items-center justify-center text-center px-6 border border-black/5 select-none"
      >
        {/* Spawned Particle Thumbnails Layer */}
        {particles.map((p) => {
          const age = performance.now() - p.createdAt;
          const progress = Math.min(1, age / 1000);
          const opacity = 1 - progress;
          const scale = 1 - 0.4 * progress; // Scales down smoothly from 1 to 0.6

          return (
            <div
              key={p.id}
              className="absolute pointer-events-none z-10 transition-opacity"
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${scale})`,
                opacity,
              }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-black/10">
                <Image
                  src={p.src}
                  alt="Partner Thumbnail"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          );
        })}

        {/* Centered Heading */}
        <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12 tracking-tight leading-[1.1] z-20 relative">
          Partner with us
        </h2>

        {/* CTA Button: Dark pill with Viktor avatar */}
        <button
          onClick={onChatClick}
          className="bg-[#0D212C] text-white rounded-full px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-4 hover:scale-[1.03] transition-all cursor-pointer shadow-xl active:scale-95 z-20 relative group border border-white/10"
        >
          {/* Circular avatar image */}
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white/20 relative shadow-md">
            <Image
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Viktor"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <span className="text-base sm:text-lg font-medium tracking-tight">
            Start chat with Viktor
          </span>
        </button>
      </div>
    </section>
  );
};
