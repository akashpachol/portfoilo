import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeBanner from "@/components/sections/MarqueeBanner";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import MethodologySection from "@/components/sections/MethodologySection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { getWebPageSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export default function Home() {
  const webPageSchema = getWebPageSchema({
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  });

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] overflow-x-hidden">
        <CustomCursor />
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <MarqueeBanner />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ArchitectureSection />
          <MethodologySection />
          <PerformanceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
