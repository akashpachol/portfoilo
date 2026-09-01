"use client";

import { aboutData } from "./aboutData";
import { MapPin } from "lucide-react";

export default function AboutLocation() {
  return (
    <div className="about-location-badge relative z-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 text-xs font-mono text-[var(--text-muted)] hover:border-[var(--about-accent)]/50 transition-colors">

      <div className="relative flex items-center justify-center">
        <MapPin className="w-4 h-4 text-[var(--about-accent)]" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--about-accent)] animate-ping" />
      </div>
      <span className="font-semibold">{aboutData.location}</span>
    </div>
  );
}
