"use client";

import { forwardRef } from "react";

const AboutDecorativePath = forwardRef(function AboutDecorativePath(
  { dotRef },
  pathRef
) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none flex items-center justify-center">
      <svg
        className="w-full h-full opacity-90 dark:opacity-95"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >

        <defs>
          <linearGradient id="aboutStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="30%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="65%" stopColor="#00d2ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Thick, crisp primary center-origin continuous organic zigzag stroke */}
        <path
          ref={pathRef}
          d="M 500 60 C 380 140, 260 210, 480 290 C 680 360, 800 430, 520 520 C 250 600, 320 700, 500 780 C 660 850, 580 910, 500 970"
          fill="none"
          stroke="url(#aboutStrokeGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="about-path-element"
        />

        {/* Premium endpoint circular marker attached to active stroke tip */}
        <circle
          ref={dotRef}
          cx="500"
          cy="60"
          r="7.5"
          fill="#38bdf8"
          stroke="#ffffff"
          strokeWidth="2"
          className="about-dot-element opacity-0"
        />
      </svg>
    </div>
  );
});

export default AboutDecorativePath;
