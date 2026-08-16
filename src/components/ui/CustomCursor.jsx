"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.getAttribute("data-cursor") === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-neutral-400/40 mix-blend-difference"
        animate={{
          x: position.x - (isHovered ? 24 : 16),
          y: position.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
      />
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-white mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 400 }}
      />
    </>
  );
}
