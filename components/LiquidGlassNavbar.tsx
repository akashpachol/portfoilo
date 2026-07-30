"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface LiquidGlassNavbarProps {
  onNavClick?: (item: string) => void;
}

export const LiquidGlassNavbar: React.FC<LiquidGlassNavbarProps> = ({
  onNavClick,
}) => {
  const [activeItem, setActiveItem] = useState("Home");
  const navItems = ["Home", "Features", "Company", "Pricing"];

  const handleClick = (item: string) => {
    setActiveItem(item);
    if (onNavClick) onNavClick(item);
  };

  return (
    <header className="sticky top-[30px] z-50 mx-auto w-fit max-w-[95vw]">
      <nav
        className="px-5 sm:px-7 py-3 rounded-[16px] backdrop-blur-[50px] flex items-center gap-6 sm:gap-10 transition-all duration-300 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "inset 0px 4px 4px 0px rgba(255, 255, 255, 0.25), 0px 10px 30px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Brand Logo "Taskly" in Fustat font */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-7 h-7 rounded-lg bg-black/10 flex items-center justify-center border border-black/10 group-hover:scale-105 transition-transform">
            <span className="font-fustat font-extrabold text-black text-sm">T</span>
          </div>
          <span className="font-fustat font-extrabold text-xl sm:text-2xl text-black tracking-tight">
            Taskly
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black/80">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`transition-colors duration-200 cursor-pointer relative py-1 hover:text-black ${
                activeItem === item ? "text-black font-semibold" : "text-black/70"
              }`}
            >
              {item}
              {activeItem === item && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/80 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Glassy SignUp Button with Arrow Icon */}
        <button
          onClick={() => handleClick("SignUp")}
          className="px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold text-black flex items-center gap-2 transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-sm group"
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "inset 0px 2px 4px 0px rgba(255, 255, 255, 0.5), 0px 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <span>SignUp</span>
          <ArrowRight className="w-4 h-4 text-black transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </nav>
    </header>
  );
};
