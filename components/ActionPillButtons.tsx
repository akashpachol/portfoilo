"use client";

import React, { useState, useEffect } from "react";

interface ActionPillButtonsProps {
  onPillClick?: (label: string) => void;
}

export const ActionPillButtons: React.FC<ActionPillButtonsProps> = ({
  onPillClick,
}) => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("hello@mainframe.co");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    if (onPillClick) onPillClick("Copy Email");
  };

  const whitePills = [
    "Pitch us an idea",
    "Come work here",
    "Send a brief hello",
    "See how we operate",
  ];

  return (
    <div
      className={`flex flex-wrap gap-y-1 transition-all duration-400 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease",
      }}
    >
      {/* 4 White Pill Buttons */}
      {whitePills.map((label) => (
        <button
          key={label}
          onClick={() => onPillClick && onPillClick(label)}
          className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm active:scale-95"
        >
          {label}
        </button>
      ))}

      {/* 1 Outline Pill Button */}
      <button
        onClick={handleCopyEmail}
        className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer group active:scale-95"
      >
        <span>
          Reach us:{" "}
          <span className="underline underline-offset-1">
            {copied ? "Copied to clipboard!" : "hello@mainframe.co"}
          </span>
        </span>

        {/* 12x12 Copy Icon (inline SVG of two overlapping rectangles) */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-200 group-hover:scale-110"
        >
          <rect
            x="4"
            y="1"
            width="7"
            height="7"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <rect
            x="1"
            y="4"
            width="7"
            height="7"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>
      </button>
    </div>
  );
};
