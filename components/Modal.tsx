"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Sparkles } from "lucide-react";

export type ModalType = "start" | "contact" | "newsletter" | "ai" | "faq";

interface ModalProps {
  modalType: ModalType | null;
  onClose: () => void;
  onOpenStartModal?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalType,
  onClose,
  onOpenStartModal,
}) => {
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!modalType) return null;

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setEmailInput("");
      }, 2200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in-down">
      <div className="bg-[#FFF9F2] text-[#321C04] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#D9C4AA]">
        <button
          onClick={() => {
            onClose();
            setSubmitted(false);
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#D9C4AA]/30 flex items-center justify-center hover:bg-[#D9C4AA]/60 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-[#321C04]" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
            <h3 className="text-2xl font-bold">You&apos;re on the list</h3>
            <p className="text-sm text-[#321C04]/70">
              We&apos;ve sent a gentle confirmation to your inbox. Welcome to Drift.
            </p>
          </div>
        ) : modalType === "start" ? (
          <div>
            <h3 className="text-2xl font-semibold mb-2">Start your Drift</h3>
            <p className="text-sm text-[#321C04]/70 mb-6">
              Experience a calm planner crafted specifically for ADHD minds. Enter your email to begin.
            </p>
            <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9C4AA] text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]"
              />
              <button
                type="submit"
                className="bg-[#321C04] text-[#FFF9F2] py-3 rounded-xl font-medium hover:bg-[#1F1003] transition-colors cursor-pointer"
              >
                Get Early Access
              </button>
            </form>
          </div>
        ) : modalType === "contact" ? (
          <div>
            <h3 className="text-2xl font-semibold mb-2">Say Hello</h3>
            <p className="text-sm text-[#321C04]/70 mb-6">
              We love hearing feedback from users and thinkers. Drop us a note anytime.
            </p>
            <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9C4AA] text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]"
              />
              <textarea
                rows={3}
                placeholder="Your message (optional)..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9C4AA] text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04] resize-none"
              />
              <button
                type="submit"
                className="bg-[#321C04] text-[#FFF9F2] py-3 rounded-xl font-medium hover:bg-[#1F1003] transition-colors cursor-pointer"
              >
                Send Note
              </button>
            </form>
          </div>
        ) : modalType === "newsletter" ? (
          <div>
            <h3 className="text-2xl font-semibold mb-2">Stay Informed</h3>
            <p className="text-sm text-[#321C04]/70 mb-6">
              Get occasional quiet updates on software design, cognitive flow, and new Drift updates.
            </p>
            <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9C4AA] text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]"
              />
              <button
                type="submit"
                className="bg-[#321C04] text-[#FFF9F2] py-3 rounded-xl font-medium hover:bg-[#1F1003] transition-colors cursor-pointer"
              >
                Subscribe Gently
              </button>
            </form>
          </div>
        ) : modalType === "ai" ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <h3 className="text-2xl font-semibold">Drift AI Assistant</h3>
            </div>
            <p className="text-sm text-[#321C04]/70 mb-6 leading-relaxed">
              Our AI assistant gently parses messy brain dumps, voice notes, and scattered thoughts into clear, low-friction micro-actions without pushing rigid timelines.
            </p>
            <div className="bg-[#D9C4AA]/30 p-4 rounded-xl mb-6 text-xs text-[#321C04] space-y-2">
              <div className="font-semibold text-sm">Key Capabilities:</div>
              <div>• Auto-categorizes tasks by mental effort</div>
              <div>• Suggests single next steps to eliminate paralysis</div>
              <div>• Adapts to your energy levels seamlessly</div>
            </div>
            <button
              onClick={() => {
                if (onOpenStartModal) onOpenStartModal();
              }}
              className="w-full bg-[#321C04] text-[#FFF9F2] py-3 rounded-xl font-medium hover:bg-[#1F1003] transition-colors cursor-pointer"
            >
              Try Drift AI
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#321C04]/80 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <div className="font-semibold text-[#321C04]">How is Drift different from other planners?</div>
                <p className="mt-1 text-[#321C04]/70">
                  Drift is designed around cognitive pacing rather than task velocity. It prevents overwhelm by presenting only what matters right now.
                </p>
              </div>
              <div>
                <div className="font-semibold text-[#321C04]">Is Drift built specifically for ADHD?</div>
                <p className="mt-1 text-[#321C04]/70">
                  Yes! Every screen, color choice, and interaction was designed to reduce executive dysfunction and decision fatigue.
                </p>
              </div>
              <div>
                <div className="font-semibold text-[#321C04]">Does Drift sync across devices?</div>
                <p className="mt-1 text-[#321C04]/70">
                  Yes, instant real-time sync across mobile, desktop, and web platforms.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
