"use client";

import React, { useState } from "react";
import { Sparkles, HelpCircle } from "lucide-react";

interface NavbarProps {
  onScrollToFeatures: () => void;
  onOpenModal: (type: "ai" | "faq") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToFeatures,
  onOpenModal,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Floating Pill */}
      <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center justify-between gap-10 sm:gap-16 min-w-[280px] sm:min-w-[340px]">
        <span className="text-lg font-bold tracking-tight text-black">
          Drift.
        </span>

        {/* Animated Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={menuOpen}
          className="w-6 h-5 relative flex flex-col justify-between items-center focus:outline-none cursor-pointer group p-0.5"
        >
          <span
            className={`w-5 h-[2px] bg-black rounded-full transition-all duration-300 transform origin-center ${
              menuOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)" }}
          />
          <span
            className={`w-5 h-[2px] bg-black rounded-full transition-all duration-300 transform origin-center ${
              menuOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)" }}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      <nav
        className={`mt-3 w-52 bg-white rounded-2xl shadow-xl p-2.5 flex flex-col gap-1 transition-all duration-300 transform origin-top border border-black/5 ${
          menuOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            setMenuOpen(false);
            onScrollToFeatures();
          }}
          className="px-4 py-2.5 text-sm font-medium text-black hover:bg-black/5 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer"
        >
          <span>Features</span>
          <span className="text-xs text-black/40">01-03</span>
        </button>
        <button
          onClick={() => {
            setMenuOpen(false);
            onOpenModal("ai");
          }}
          className="px-4 py-2.5 text-sm font-medium text-black hover:bg-black/5 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer"
        >
          <span>Drift AI</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
        </button>
        <button
          onClick={() => {
            setMenuOpen(false);
            onOpenModal("faq");
          }}
          className="px-4 py-2.5 text-sm font-medium text-black hover:bg-black/5 rounded-xl transition-colors text-left flex items-center justify-between cursor-pointer"
        >
          <span>FAQ</span>
          <HelpCircle className="w-3.5 h-3.5 text-black/40" />
        </button>
      </nav>
    </header>
  );
};
