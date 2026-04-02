"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [variant, setVariant] = useState<"default" | "hover" | "click">("default");
  const [label, setLabel] = useState("");
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springCfg = { damping: 28, stiffness: 600, mass: 0.5 };
  const x = useSpring(cursorX, springCfg);
  const y = useSpring(cursorY, springCfg);

  /* Trailing dot — slower spring */
  const trailX = useSpring(cursorX, { damping: 40, stiffness: 200 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 200 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a,button,[data-cursor]");
      if (el) {
        setVariant("hover");
        setLabel((el as HTMLElement).dataset.cursor || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const down = () => setVariant("click");
    const up = () => setVariant((v) => (v === "click" ? "default" : v));

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:flex items-center justify-center"
        style={{
          translateX: x,
          translateY: y,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: variant === "hover" ? 48 : variant === "click" ? 20 : 32,
          height: variant === "hover" ? 48 : variant === "click" ? 20 : 32,
          opacity: 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="w-full h-full rounded-full border"
          animate={{
            borderColor: variant === "hover" ? "rgba(79,142,255,0.8)" : "rgba(255,255,255,0.4)",
            backgroundColor: variant === "click" ? "rgba(79,142,255,0.3)" : "transparent",
            boxShadow: variant === "hover" ? "0 0 16px rgba(79,142,255,0.4)" : "none",
          }}
          transition={{ duration: 0.2 }}
        />
        {label && (
          <span className="absolute text-[9px] font-mono text-white/70 tracking-widest uppercase whitespace-nowrap">
            {label}
          </span>
        )}
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden md:block w-1.5 h-1.5 rounded-full bg-blue-400/60"
        style={{
          translateX: trailX,
          translateY: trailY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
}
