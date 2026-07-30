import React from "react";
import { DriftLogo } from "./DriftLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-30 bg-black/60 backdrop-blur-md border-t border-white/10 py-12 px-6 text-center text-white/50 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <DriftLogo size={24} fill="rgba(255,255,255,0.6)" />
          <span className="font-semibold text-white tracking-tight">Drift.</span>
        </div>
        <div>
          Designed for ease, presence, and calm flow. © {new Date().getFullYear()} Drift Inc.
        </div>
      </div>
    </footer>
  );
};
