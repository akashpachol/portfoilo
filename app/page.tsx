import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://akashpachol.vercel.app/#website",
      url: "https://akashpachol.vercel.app/",
      name: "Akash P — Frontend Architect & Creative Developer",
      description:
        "Senior Frontend Developer & Creative Engineer specializing in Next.js, React, TypeScript, and immersive web experiences.",
      publisher: { "@id": "https://akashpachol.vercel.app/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://akashpachol.vercel.app/#person",
      name: "Akash P",
      url: "https://akashpachol.vercel.app/",
      jobTitle: "Frontend Architect & Creative Developer",
      description:
        "Senior Frontend Developer specializing in Next.js, React, TypeScript, and Creative Development. Building high-performance, award-worthy digital products.",
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        
        "Node.js",
        "Web Performance",
        "UI/UX Design",
        "Creative Development",
      ],
      sameAs: [
        "https://github.com/akashpachol",
        "https://www.linkedin.com/in/akash-p-97198b216/",
        "https://www.instagram.com/__.aaakash.___/?next=%2F",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://akashpachol.vercel.app/#webpage",
      url: "https://akashpachol.vercel.app/",
      name: "Akash P | Frontend Architect & Creative Developer",
      isPartOf: { "@id": "https://akashpachol.vercel.app/#website" },
      about: { "@id": "https://akashpachol.vercel.app/#person" },
      description:
        "Portfolio of Akash P — Frontend Architect & Creative Developer. Explore projects, skills, and experience in modern web development.",
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
