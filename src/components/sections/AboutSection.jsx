"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutDecorativePath from "../About/AboutDecorativePath";
import AboutIntro from "../About/AboutIntro";
import AboutDescription from "../About/AboutDescription";
import AboutExperience from "../About/AboutExperience";
import AboutFocus from "../About/AboutFocus";
import AboutLocation from "../About/AboutLocation";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // 1. Reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        ".about-line-inner, .about-desc-inner, .about-exp-block, .about-focus-item, .about-location-badge",
        { opacity: 1, y: 0, transform: "none" }
      );
      gsap.set(".about-divider-line", { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const pathEl = pathRef.current;
      const dotEl = dotRef.current;

      // 2. SVG path stroke drawing & synchronized endpoint marker (NO PINNING)
      if (pathEl) {
        const pathLength = pathEl.getTotalLength();
        gsap.set(pathEl, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        if (dotEl) {
          const initialPoint = pathEl.getPointAtLength(0);
          gsap.set(dotEl, {
            cx: initialPoint.x,
            cy: initialPoint.y,
            opacity: 0,
          });
        }

        gsap.to(pathEl, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 0.5,
            onUpdate: (self) => {
              if (dotEl && pathEl) {
                const currentProgress = self.progress;
                const activePoint = pathEl.getPointAtLength(
                  currentProgress * pathLength
                );
                gsap.set(dotEl, {
                  cx: activePoint.x,
                  cy: activePoint.y,
                  opacity: currentProgress > 0.01 ? 1 : 0,
                });
              }
            },
          },
        });
      }

      // 3. Natural viewport entry reveals for text content blocks
      gsap.to(".about-eyebrow", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(".about-line-inner", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".about-desc-inner", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-desc-inner",
          start: "top 85%",
        },
      });

      gsap.fromTo(
        ".about-exp-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-exp-block",
            start: "top 85%",
          },
        }
      );

      gsap.to(".about-divider-line", {
        scaleX: 1,
        duration: 0.7,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-exp-block",
          start: "top 80%",
        },
      });

      gsap.fromTo(
        ".about-focus-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".about-focus-item",
            start: "top 88%",
          },
        }
      );

      gsap.fromTo(
        ".about-location-badge",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-location-badge",
            start: "top 90%",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 border-t border-[var(--border-color)] overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Decorative Organic Center-Origin SVG Path */}
      <AboutDecorativePath ref={pathRef} dotRef={dotRef} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Intro Section (Eyebrow + Masked Headline) */}
        <AboutIntro />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7">
            <AboutDescription />
          </div>

          {/* Role, Company, Focus List & Location */}
          <div className="lg:col-span-5 space-y-8">
            <AboutExperience />
            <AboutFocus />
            <AboutLocation />
          </div>
        </div>
      </div>
    </section>
  );
}
