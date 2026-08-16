"use client";

import { useState, useEffect, useRef } from "react";
import TextReveal from "../ui/TextReveal";
import { siteConfig } from "@/config/site";
import { Mail, Phone, Globe, MapPin, ArrowUpRight, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading-line",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.to(".contact-form-box", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section ref={containerRef} id="contact" className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            09 — Contact
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[var(--text-main)] mb-16">
            <span className="contact-heading-line block">Let&apos;s build something</span>
            <span className="contact-heading-line block text-gradient">that lasts.</span>
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <TextReveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="contact-form-box p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-6"
              >
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[var(--text-main)] text-[var(--bg-primary)] font-mono font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <span>MESSAGE SENT! THANK YOU</span>
                  ) : (
                    <>
                      <span>Start a conversation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </TextReveal>
          </div>

          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <TextReveal delay={0.2}>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[var(--text-dim)] uppercase">
                        Email
                      </div>
                      <div className="text-sm sm:text-base font-mono font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                        {siteConfig.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-all" />
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[var(--text-dim)] uppercase">
                        Phone
                      </div>
                      <div className="text-sm sm:text-base font-mono font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                        {siteConfig.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-all" />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)]">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[var(--text-dim)] uppercase">
                        LinkedIn
                      </div>
                      <div className="text-sm sm:text-base font-mono font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                        akash-p
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-all" />
                </a>
              </div>
            </TextReveal>

            <TextReveal delay={0.3}>
              <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-dim)] leading-relaxed">
                  Direct email is the fastest route.
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
