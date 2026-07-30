"use client";

import React from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ActionPillButtons } from "./ActionPillButtons";

interface MainframeHeroProps {
  onPillClick?: (label: string) => void;
}

export const MainframeHero: React.FC<MainframeHeroProps> = ({
  onPillClick,
}) => {
  const { displayed, done } = useTypewriter(
    "Glad you stopped in. Good taste tends to find us. Now, what are we building?",
    38,
    600
  );

  return (
    <section className="relative z-1 h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-xl relative z-10">
        {/* 1. Blurred Intro Label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6 text-black font-normal"
          style={{
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.3,
            filter: "blur(4px)",
          }}
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe&apos;s Adaptive Response Interface Agent
        </div>

        {/* 2. Typewriter Text */}
        <p
          className="text-black mb-5 sm:mb-6 font-normal min-h-[54px]"
          style={{
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.35,
          }}
        >
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
          )}
        </p>

        {/* 3. Action Pill Buttons */}
        <ActionPillButtons onPillClick={onPillClick} />
      </div>
    </section>
  );
};
