"use client";

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ArrowDownRight, Code2, Layers, Cpu, Database, Blocks } from "lucide-react";

const floatingBoxes = [
  { label: "REACT", Icon: Code2, x: "-30vw", y: "-15vh", delay: 0 },
  { label: "NODE", Icon: Database, x: "30vw", y: "-25vh", delay: 1 },
  { label: "DEVELOPER", Icon: Layers, x: "35vw", y: "0vh", delay: 2 },
  { label: "NEXT", Icon: Blocks, x: "-35vw", y: "15vh", delay: 0.5 },
  { label: "TS", Icon: Cpu, x: "25vw", y: "20vh", delay: 1.5 },
];

export function Hero() {

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pt-20">
      <ParticleBackground />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Boxes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {floatingBoxes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{
              y: ["-15px", "15px", "-15px"],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            className="absolute flex flex-col items-center gap-2 text-zinc-600"
            style={{ 
              marginLeft: item.x, 
              marginTop: item.y 
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/5 flex items-center justify-center shadow-2xl">
              <item.Icon size={20} strokeWidth={1} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-medium opacity-50">{item.label}</span>
          </motion.div>
        ))}

        {/* Static Left/Right Texts */}
        <div className="absolute left-8 lg:left-24 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono text-zinc-500 font-medium">Full Stack</div>
        <div className="absolute right-8 lg:right-24 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono text-zinc-500 font-medium">Engineer</div>
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Central Dark Overlay Photo Area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm md:max-w-md h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden -z-10 mix-blend-overlay opacity-30">
           <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-background" />
           <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-foreground/50 tracking-widest uppercase">GQD$SKA</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl"
        >
          {/* Removed Main Headline as requested */}

          {/* Sub Row */}
          <div className="flex items-center gap-6 md:gap-12 mt-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-zinc-500 font-medium z-10">
            <span>Mern - React - Next.Js</span>
            <div className="w-12 hidden md:block h-[1px] bg-zinc-800" />
            <span>Based in India</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex flex-col items-center gap-12"
          >
            <button className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-80 transition-opacity">
              Let's talk
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
            </button>

            <div className="flex flex-col items-center gap-2 mt-12 md:mt-24 text-zinc-500 hover:text-foreground transition-colors cursor-pointer">
              <span className="text-xs uppercase tracking-[0.2em] font-mono">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
