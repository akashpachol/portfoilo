"use client";

import React from "react";
import { Mail, Plus } from "lucide-react";
import { DriftLogo } from "./DriftLogo";

interface AboutSectionProps {
  onSayHello: () => void;
  onStayInformed: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onSayHello,
  onStayInformed,
}) => {
  return (
    <section className="bg-[#F6E4CF] rounded-t-[25px] relative z-30 py-20 md:py-32 px-6 text-[#321C04]">
      <div className="max-w-6xl mx-auto">
        {/* Top Area (centered, max-w-3xl) */}
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[#321C04] text-base md:text-lg text-center leading-relaxed max-w-lg mb-8 font-normal">
            We craft tools that move with your rhythm, not over it. Designed for
            ease, presence, and flow.
          </p>

          {/* Two buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Button 1: Say hello */}
            <button
              onClick={onSayHello}
              className="bg-[#321C04] text-[#FFF9F2] rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-[#1F1003] transition-colors cursor-pointer group active:scale-95 duration-150"
            >
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#321C04]" />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
                Say hello
              </span>
            </button>

            {/* Button 2: Stay informed */}
            <button
              onClick={onStayInformed}
              className="bg-[#D9C4AA] text-[#321C04] rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-[#CEBA9E] transition-colors cursor-pointer group active:scale-95 duration-150"
            >
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <Plus className="w-4 h-4 text-[#321C04]" />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
                Stay informed
              </span>
            </button>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="my-16 md:my-24 flex flex-row items-center gap-0.5 w-full">
          <div className="w-2 h-2 rounded-full bg-[#D9C4AA] shrink-0" />
          <div className="flex-1 h-[2px] bg-[#D9C4AA]" />
          <div className="w-2 h-2 rounded-full bg-[#D9C4AA] shrink-0" />
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left Column: Custom SVG Logo + Label */}
          <div className="flex items-start gap-4 shrink-0">
            <DriftLogo size={40} fill="#321C04" />
            <div className="text-xs uppercase tracking-widest font-semibold text-[#321C04] leading-tight pt-1">
              Calm /<br />
              Amplified
            </div>
          </div>

          {/* Right Column: Large Paragraph */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-[#321C04] max-w-4xl">
            We make AI tools and assistants. But, most importantly, we help you
            remember what gentle productivity looks like when software moves with
            you, not over you. We create systems that carry the cognitive weight,
            so you can attend to what truly counts.
          </p>
        </div>
      </div>
    </section>
  );
};
