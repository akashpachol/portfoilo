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
      <main className="flex flex-col w-full bg-[#050510] text-foreground selection:bg-blue-500/20 selection:text-white">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
