"use client";

import React, { useState } from "react";

interface MainframeNavbarProps {
  onNavClick?: (target: string) => void;
}

export const MainframeNavbar: React.FC<MainframeNavbarProps> = ({
  onNavClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    if (onNavClick) onNavClick(target);
  };

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <header className="fixed top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent pointer-events-auto">
        {/* Logo (left) */}
        <div className="flex flex-row items-center gap-3">
          <span className="text-[21px] sm:text-[26px] tracking-tight font-normal text-black">
            Mainframe®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-black select-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            ✳︎
          </span>
        </div>

        {/* Desktop Nav Links (center, hidden below md) */}
        <nav className="hidden md:flex flex-row items-center text-[23px] text-black">
          <a
            href="#labs"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Labs");
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Labs
          </a>
          <span>,&nbsp;</span>
          <a
            href="#studio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Studio");
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Studio
          </a>
          <span>,&nbsp;</span>
          <a
            href="#openings"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Openings");
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Openings
          </a>
          <span>,&nbsp;</span>
          <a
            href="#shop"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Shop");
            }}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Shop
          </a>
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Get in touch");
            }}
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger (visible below md) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col justify-center items-center gap-[5px] z-20 focus:outline-none cursor-pointer p-1"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-transform duration-300 transform origin-center ${
              mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-transform duration-300 transform origin-center ${
              mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Overlay (z-index: 9) */}
      <div
        className={`fixed inset-0 z-9 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#labs"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("Labs");
          }}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity cursor-pointer"
        >
          Labs
        </a>
        <a
          href="#studio"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("Studio");
          }}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity cursor-pointer"
        >
          Studio
        </a>
        <a
          href="#openings"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("Openings");
          }}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity cursor-pointer"
        >
          Openings
        </a>
        <a
          href="#shop"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("Shop");
          }}
          className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity cursor-pointer"
        >
          Shop
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("Get in touch");
          }}
          className="text-[32px] font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer mt-4"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};
