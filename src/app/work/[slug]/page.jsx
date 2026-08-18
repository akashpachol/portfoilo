import { notFound } from "next/navigation";
import { projectsData } from "@/config/projects";
import { siteConfig } from "@/config/site";
import CaseStudyView from "@/components/work/CaseStudyView";
import { getCaseStudySchema, getBreadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  const projectUrl = `${siteConfig.url}/work/${project.slug}`;
  const title = `${project.title} — Case Study | Akash P`;
  const description = project.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title,
      description,
      url: projectUrl,
      type: "article",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const caseStudySchema = getCaseStudySchema(project);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Work", url: "/#work" },
    { name: project.title, url: `/work/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyView project={project} />
    </>
  );
}
