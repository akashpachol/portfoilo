"use client";

import React, { useState, useEffect, useRef } from "react";
import { FeatureCard, FeatureItem } from "./FeatureCard";

const featureData: FeatureItem[] = [
  {
    id: 0,
    title: "Built for ease, not urgency",
    description:
      "Drift strips away the noise that makes organizing feel draining. Every surface is made to be soft, quiet, and intuitive so you can move forward, not get stuck decoding.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4",
  },
  {
    id: 1,
    title: "The gentlest way to start",
    description:
      "Beginning your day should feel natural, not daunting. Drift eases you into motion with subtle cues and a quiet view of what deserves your energy right now.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4",
  },
  {
    id: 2,
    title: "Deep, undivided focus",
    description:
      "No interruptions, no clutter. Drift holds you in the present task with a stripped-back layout that softens all else until you are truly ready to shift.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4",
  },
];

interface FeaturesSectionProps {
  onStartFree: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onStartFree,
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
      { threshold: 0.6 }
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
    <section id="features" className="relative px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48 z-30">
      {/* Fixed Background Image behind content */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85')",
        }}
      />

      {/* CSS Grid Layout on lg+ */}
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-24 xl:gap-48 items-start">
        {/* Left Column (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32 mb-16 lg:mb-0">
          {/* Heading */}
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal">
            Software that flows with your mind, not over it
          </h2>

          {/* Feature Nav Buttons (hidden below lg) */}
          <nav className="hidden lg:flex flex-col gap-3 my-auto">
            {featureData.map((item) => {
              const isActive = activeFeature === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToCard(item.id)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl font-medium text-base transition-all duration-300 backdrop-blur-sm border border-white/10 cursor-pointer ${
                    isActive
                      ? "bg-black/20 text-white shadow-md border-white/20"
                      : "bg-black/20 text-white/40 hover:text-white/80"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </nav>

          {/* Bottom CTA (hidden below lg) */}
          <div className="hidden lg:flex bg-black/25 backdrop-blur-md rounded-xl flex-row items-center justify-between pl-6 pr-1 py-1 border border-white/10 gap-4 mt-6">
            <span className="text-white text-sm font-medium">
              No noise. No complicated systems. Just your day, gently sorted.
            </span>
            <button
              onClick={onStartFree}
              className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors whitespace-nowrap cursor-pointer active:scale-95 duration-150"
            >
              Start for free
            </button>
          </div>
        </div>

        {/* Right Column (Scrolling Cards) */}
        <div className="flex flex-col">
          {featureData.map((item, index) => (
            <FeatureCard
              key={item.id}
              item={item}
              index={index}
              isRevealed={revealedCards[index]}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
