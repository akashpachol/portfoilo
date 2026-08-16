import { notFound } from "next/navigation";
import { projectsData } from "@/config/projects";
import CaseStudyView from "@/components/work/CaseStudyView";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study | Akash P`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | Akash P`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
