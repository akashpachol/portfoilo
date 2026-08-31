import { siteConfig } from "@/config/site";

/**
 * Person JSON-LD Schema
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "AkashPachol",
    givenName: "Akash",
    familyName: "Pachol",
    jobTitle: "Next.js Developer",
    worksFor: {
      "@type": "Organization",
      name: "Nexteons",
    },
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "GraphQL",
      "Node.js",
      "Express.js",
      "TurboRepo",
      "Frontend Architecture",
      "Web Performance Optimization",
      "Technical SEO",
    ],
  };
}

/**
 * WebSite JSON-LD Schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Person",
      name: "Akash P",
    },
    inLanguage: "en-US",
  };
}

/**
 * WebPage JSON-LD Schema
 */
export function getWebPageSchema({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: name || siteConfig.title,
    description: description || siteConfig.description,
    url: url || siteConfig.url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    author: {
      "@type": "Person",
      name: "Akash P",
    },
    inLanguage: "en-US",
  };
}

/**
 * BreadcrumbList JSON-LD Schema
 */
export function getBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Case Study / CreativeWork JSON-LD Schema
 */
export function getCaseStudySchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.shortDescription,
    author: {
      "@type": "Person",
      name: "Akash P",
      jobTitle: "Next.js Developer",
    },
    publisher: {
      "@type": "Organization",
      name: project.company || "Portfolio",
    },
    url: `${siteConfig.url}/work/${project.slug}`,
    keywords: project.tags ? project.tags.join(", ") : undefined,
    inLanguage: "en-US",
  };
}
