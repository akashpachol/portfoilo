import { siteConfig } from "@/config/site";
import { projectsData } from "@/config/projects";

export default function sitemap() {
  const routes = [
    "",
    ...projectsData.map((project) => `/work/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
