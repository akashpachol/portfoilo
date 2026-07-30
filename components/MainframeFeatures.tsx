"use client";

import React, { useState, useEffect, useRef } from "react";

export interface MainframeFeatureItem {
  id: number;
  sectionId: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  video: string;
  badge: string;
}

const mainframeFeatures: MainframeFeatureItem[] = [
  {
    id: 0,
    sectionId: "labs",
    tag: "01 / LABS",
    title: "Adaptive Response Systems",
    subtitle: "Intelligent Human-AI Interfaces",
    description:
      "Mainframe crafts custom interface agents that carry cognitive weight, adapt to user rhythm, and turn complex data streams into calm, actionable motion.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4",
    badge: "A.R.I.A Engine",
  },
  {
    id: 1,
    sectionId: "studio",
    tag: "02 / STUDIO",
    title: "Immersive Web & Brand Engineering",
    subtitle: "Award-grade Digital Experiences",
    description:
      "From high-precision typography and spatial layouts to custom WebGL shaders and mouse-scrubbed video controls, we build web architectures that command authority.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4",
    badge: "Spatial Web",
  },
  {
    id: 2,
    sectionId: "openings",
    tag: "03 / OPENINGS",
    title: "Cognitive Ergonomics & Quiet Pacing",
    subtitle: "Software Built for Focus",
    description:
      "We strip away decision fatigue. Our design systems prioritize deep focus, calm interaction states, and effortless utility that respects executive function.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4",
    badge: "Quiet Flow",
  },
];

interface MainframeFeaturesProps {
  onActionClick?: (label: string) => void;
}

export const MainframeFeatures: React.FC<MainframeFeaturesProps> = ({
  onActionClick,
}) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerActive = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveFeature(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const observerReveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setRevealedCards((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observerActive.observe(card);
        observerReveal.observe(card);
      }
    });

    return () => {
      observerActive.disconnect();
      observerReveal.disconnect();
    };
  }, []);

  const scrollToCard = (index: number) => {
    setActiveFeature(index);
    const target = cardRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="features"
      className="relative z-10 px-5 sm:px-8 md:px-10 py-24 md:py-40 bg-black/60 backdrop-blur-xl text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-20 xl:gap-36 items-start">
        {/* Sticky Left Navigation (Desktop) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32 mb-16 lg:mb-0">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              Mainframe Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight text-white">
              Systems engineered for presence, speed & clarity
            </h2>
          </div>

          {/* Interactive Nav buttons */}
          <nav className="hidden lg:flex flex-col gap-3 my-auto">
            {mainframeFeatures.map((item) => {
              const isActive = activeFeature === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToCard(item.id)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl font-medium text-sm sm:text-base transition-all duration-300 backdrop-blur-md border cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-white text-black border-white shadow-xl scale-[1.02]"
                      : "bg-white/5 text-white/60 hover:text-white border-white/10 hover:bg-white/10"
                  }`}
                >
                  <span>{item.title}</span>
                  <span className="text-xs opacity-60">{item.tag}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Action CTA */}
          <div className="hidden lg:flex bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex-col gap-3">
            <p className="text-xs text-white/70 leading-relaxed">
              Have a visionary project in mind? We partner with founders and brands worldwide.
            </p>
            <button
              onClick={() => onActionClick && onActionClick("Initiate Brief")}
              className="w-full bg-white text-black py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors cursor-pointer active:scale-95 duration-150"
            >
              Initiate a Brief →
            </button>
          </div>
        </div>

        {/* Right Column: Scroll-Revealed Cards */}
        <div className="flex flex-col">
          {mainframeFeatures.map((item, index) => {
            const isRevealed = revealedCards[index];
            return (
              <div
                key={item.id}
                id={item.sectionId}
                data-index={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col gap-6 mb-16 lg:mb-32 transition-all duration-700 ease-out transform ${
                  isRevealed
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-16"
                }`}
              >
                {/* Header Badge & Tag */}
                <div className="flex items-center justify-between text-xs tracking-widest uppercase font-semibold text-white/50 border-b border-white/10 pb-4">
                  <span>{item.tag}</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm text-white/60 font-normal">
                    {item.subtitle}
                  </div>
                </div>

                {/* Video Showcase */}
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/40 w-full relative border border-white/10 shadow-2xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    src={item.video}
                  />
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Interactive Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() =>
                      onActionClick && onActionClick(`Explore ${item.title}`)
                    }
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white hover:text-white/70 transition-colors cursor-pointer"
                  >
                    <span>Explore capability</span>
                    <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
