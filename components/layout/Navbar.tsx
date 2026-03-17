"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = ["About", "Projects", "Experience", "Contact"];

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-all duration-500 ${
        isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <a href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
        Akash.
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs tracking-widest uppercase font-mono text-zinc-500 hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase font-mono text-foreground"
        >
          Let's Talk
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        </a>
        
        {/* Mobile Menu Toggle - higher z-index to stay above full screen menu */}
        <button
          className="md:hidden text-zinc-500 hover:text-foreground transition-colors relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at right top)" }}
            animate={{ clipPath: "circle(150% at right top)" }}
            exit={{ clipPath: "circle(0% at right top)", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 min-h-screen bg-background z-[55] flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-10 w-full">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground hover:text-zinc-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-80 transition-opacity w-full sm:w-auto"
              >
                Let's Talk
              </motion.a>
            </nav>
            
            {/* Decorative element for menu */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.05 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="absolute bottom-10 left-10 text-[10vw] font-bold tracking-tighter pointer-events-none"
            >
              Akash.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
