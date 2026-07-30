"use client";

import React, { forwardRef } from "react";
import { DriftLogo } from "./DriftLogo";

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  video: string;
}

interface FeatureCardProps {
  item: FeatureItem;
  index: number;
  isRevealed: boolean;
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ item, index, isRevealed }, ref) => {
    return (
      <div
        id={`feature-card-${index}`}
        data-index={index}
        ref={ref}
        className={`bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/10 flex flex-col gap-6 mb-16 lg:mb-32 transition-all duration-700 ease-out transform ${
          isRevealed
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-16"
        }`}
      >
        {/* SVG Logo */}
        <DriftLogo size={40} fill="rgba(255,255,255,0.8)" />

        {/* Title */}
        <h3 className="text-white text-xl md:text-2xl font-medium">
          {item.title}
        </h3>

        {/* Video */}
        <div className="aspect-video rounded-2xl overflow-hidden bg-black/30 w-full relative shadow-inner">
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
        <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";
