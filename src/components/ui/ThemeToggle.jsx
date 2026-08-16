"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--border-hover)] transition-all duration-200"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700" />
      )}
    </button>
  );
}
