import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://akashpachol.vercel.app/#website",
      url: "https://akashpachol.vercel.app/",
      name: "Akash P — Full Stack Developer",
      description: "Portfolio of Akash P, specializing in Next.js, React, Node.js, and immersive web experiences.",
      inLanguage: "en-US",
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col w-full bg-[#050505] text-foreground selection:bg-blue-500/20 selection:text-white">
        <Hero />
        
        {/* Horizontal Marquee */}
        <section className="relative border-y border-white/10 bg-black py-8">
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-16 whitespace-nowrap">
              {[
                "Next.js", "React.js", "TypeScript", "GraphQL", "TurboRepo", "Node.js",
                "MongoDB", "Tailwind CSS", "Performance", "SSR / ISR", "Core Web Vitals", "System Design",
                "Next.js", "React.js", "TypeScript", "GraphQL", "TurboRepo", "Node.js",
                "MongoDB", "Tailwind CSS", "Performance", "SSR / ISR", "Core Web Vitals", "System Design"
              ].map((tech, index) => (
                <span key={index} className="flex items-center gap-16 font-display text-3xl italic text-white/40 md:text-5xl">
                  {tech}
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                </span>
              ))}
            </div>
          </div>
        </section>

        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
