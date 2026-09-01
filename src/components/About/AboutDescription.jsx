"use client";

import { aboutData } from "./aboutData";

export default function AboutDescription() {
  return (
    <div className="relative z-10 space-y-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl">

      {aboutData.description.map((paragraph, index) => (
        <div key={index} className="about-desc-p overflow-hidden">
          <p className="about-desc-inner block opacity-0 translate-y-[30px] transition-all duration-300">
            {paragraph}
          </p>
        </div>
      ))}
    </div>
  );
}
