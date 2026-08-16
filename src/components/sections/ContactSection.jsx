"use client";

import TextReveal from "../ui/TextReveal";
import { siteConfig } from "@/config/site";
import { Mail, Phone, Globe, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
            // GET IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[var(--text-main)] mb-12">
            Let&apos;s build something <br className="hidden sm:block" />
            <span className="text-gradient">that lasts.</span>
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-7 space-y-4">
            <TextReveal delay={0.1}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--text-dim)] uppercase">
                      Email
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </TextReveal>

            <TextReveal delay={0.2}>
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--text-dim)] uppercase">
                      Phone
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                      {siteConfig.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </TextReveal>

            <TextReveal delay={0.3}>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent)]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--text-dim)] uppercase">
                      LinkedIn
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                      akash-p
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </TextReveal>
          </div>

          {/* Quick note & Location */}
          <div className="lg:col-span-5">
            <TextReveal delay={0.4}>
              <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-6">
                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                  <span>{siteConfig.location}</span>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] leading-relaxed">
                  💡 Direct email is the fastest route for work inquiries or architectural discussions.
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
