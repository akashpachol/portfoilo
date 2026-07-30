"use client";

import React from "react";
import { Navbar } from "./Navbar";

interface HeroSectionProps {
  onStartFree: () => void;
  onScrollToFeatures: () => void;
  onOpenModal: (type: "ai" | "faq") => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartFree,
  onScrollToFeatures,
  onOpenModal,
}) => {
  return (
    <section className="relative h-screen overflow-hidden mb-[-25px] w-full flex flex-col justify-between">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4"
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* Navbar */}
      <Navbar
        onScrollToFeatures={onScrollToFeatures}
        onOpenModal={onOpenModal}
      />

      {/* Hero Content (bottom-aligned) */}
      <div className="relative z-20 flex flex-col justify-end h-full pb-12 md:pb-16 px-4 max-w-6xl mx-auto w-full items-center text-center">
        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight">
          <div>Own your time</div>
          <div>
            without{" "}
            <em
              className="not-italic"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
              }}
            >
              the stress
            </em>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-sm md:text-base font-medium max-w-[420px] mx-auto mt-4 mb-6 leading-relaxed">
          Drift is a calm, ADHD-friendly planner that turns scattered ideas into
          a clear path
        </p>

        {/* CTA Bar */}
        <div className="bg-black/25 backdrop-blur-md rounded-xl flex flex-row items-center pl-6 pr-1 py-1 border border-white/10 max-w-fit mx-auto gap-3 md:gap-6 shadow-2xl">
          <span className="text-white text-sm font-medium hidden sm:inline">
            No noise. No complicated systems. Just your day, gently sorted.
          </span>
          <span className="text-white text-sm font-medium sm:hidden">
            No noise. Just your day, gently sorted.
          </span>
          <button
            onClick={onStartFree}
            className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors whitespace-nowrap cursor-pointer active:scale-95 duration-150"
          >
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
};
