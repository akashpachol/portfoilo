"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const step = Math.ceil(Math.random() * 8) + 2;
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return next;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)", filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03030f] overflow-hidden"
        >
          {/* Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/8 blur-[80px] pointer-events-none" />

          {/* Counter */}
          <div className="relative flex flex-col items-center gap-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(5rem,15vw,10rem)] font-bold tracking-tighter leading-none tabular-nums"
                style={{
                  background: "linear-gradient(135deg, #fff 40%, rgba(79,142,255,0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {String(progress).padStart(2, "0")}
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-[1px] bg-white/8 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #4f8eff, #a855f7)",
                  boxShadow: "0 0 12px rgba(79,142,255,0.6)",
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-mono text-white/25 tracking-[0.4em] uppercase"
            >
              Loading
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
