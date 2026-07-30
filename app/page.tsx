"use client";

import React, { useState } from "react";
import { LiquidGlassNavbar } from "@/components/LiquidGlassNavbar";
import { VideoScrubberBackground } from "@/components/VideoScrubberBackground";
import { MainframeHero } from "@/components/MainframeHero";
import { MainframeFeatures } from "@/components/MainframeFeatures";
import { PartnerSection } from "@/components/PartnerSection";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAction = (label: string) => {
    const targetId = label.toLowerCase();
    const targetElement = document.getElementById(targetId) || document.getElementById("features");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setToastMessage(`Action: "${label}"`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <main className="relative min-h-screen w-full text-white font-sans selection:bg-white selection:text-black">
      {/* 1. STRONG LIQUID GLASS NAVBAR */}
      <LiquidGlassNavbar onNavClick={handleAction} />

      {/* 2. BACKGROUND VIDEO (mouse-scrub controlled) */}
      <VideoScrubberBackground />

      {/* 3. HERO SECTION */}
      <MainframeHero onPillClick={handleAction} />

      {/* 4. 3D HORIZONTAL CYLINDER CAROUSEL WITH VOLUMETRIC SKILL CARDS */}

      {/* 5. FEATURES SECTION */}
      <MainframeFeatures onActionClick={handleAction} />

      {/* 6. PARTNER SECTION */}
      <PartnerSection onChatClick={() => handleAction("Chat with Viktor")} />

      {/* Footer */}
      <footer className="relative z-10 bg-black text-white/50 border-t border-white/10 py-10 px-6 text-xs text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white font-medium">
            <span className="font-fustat font-bold text-white text-sm">Taskly</span>
            <span className="text-white/40">•</span>
            <span>Mainframe®</span>
          </div>
          <div>All Rights Reserved © {new Date().getFullYear()}</div>
        </div>
      </footer>

      {/* Toast Notification Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-full text-sm font-medium shadow-2xl animate-fade-in-down flex items-center gap-2 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
