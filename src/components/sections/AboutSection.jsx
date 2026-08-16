"use client";

import TextReveal from "../ui/TextReveal";
import { siteConfig } from "@/config/site";
import { CheckCircle2, MapPin } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Scalable frontend architecture",
    "Performance optimization",
    "SEO & rendering strategy",
    "Reusable component systems",
    "API integration",
  ];

  return (
    <section id="about" className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
            // ABOUT ME
          </div>
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed">
            <TextReveal delay={0.1}>
              <p>
                I&apos;m a Next.js developer with 2.5+ years of experience shipping production-grade web applications. My work sits where interface craft meets architecture — component systems, rendering strategy and the data layer that holds it all together.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p>
                Day to day that means Next.js and React with TypeScript, Node.js and Express on the server, GraphQL through Apollo Client alongside REST APIs, and TurboRepo monorepos that keep multiple applications sharing one coherent component layer — tuned for performance and SEO.
              </p>
            </TextReveal>
          </div>

          {/* Highlight Summary Card */}
          <div className="lg:col-span-5">
            <TextReveal delay={0.3}>
              <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-sm space-y-6">
                <div>
                  <div className="text-xl font-bold text-[var(--text-main)]">
                    Next.js Developer
                  </div>
                  <div className="text-sm font-medium text-[var(--accent)] mt-0.5">
                    Nexteons
                  </div>
                </div>

                <ul className="space-y-3">
                  {highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-[var(--text-muted)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-2 text-xs text-[var(--text-dim)]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
