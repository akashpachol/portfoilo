export const projectsData = [
  {
    id: "01",
    slug: "e-commerce-platforms",
    company: "Nexteons",
    title: "E-COMMERCE PLATFORMS",
    shortDescription:
      "Contributed to 5+ production-level e-commerce platforms across categories including gold and electronics.",
    tags: ["Next.js", "React.js", "GraphQL", "REST APIs", "TurboRepo"],
    role: "Next.js Developer — Nexteons",
    period: "2024 — Present",
    overview:
      "A group of production e-commerce storefronts built on a shared Next.js foundation. Work spanned catalogue browsing, cart and checkout journeys, and the integrations that keep pricing and inventory accurate across storefronts in different categories.",
    features: [
      "Product listings",
      "Product filters",
      "Cart",
      "Checkout",
      "Order workflows",
      "Pricing integration",
      "Inventory integration",
      "GraphQL APIs",
      "REST APIs",
      "Shared components",
    ],
    architecture: [
      "TurboRepo monorepo hosting multiple storefront applications.",
      "Shared component layer reused across platforms.",
      "GraphQL through Apollo Client alongside REST API integrations.",
      "SSR and ISR for SEO-critical catalogue and product pages.",
    ],
    challenges: [
      "Keeping a shared component layer flexible enough for several storefronts without forking it per platform.",
      "Serving SEO-critical commerce pages fast while keeping pricing and inventory data current.",
    ],
    nextSlug: "guppyx",
    nextTitle: "GUPPYX",
  },
  {
    id: "02",
    slug: "guppyx",
    company: "Nexteons",
    title: "GUPPYX WEBSITE BUILDER",
    displayTitle: "GUPPYX",
    subtitle: "WEBSITE BUILDER",
    shortDescription:
      "Widget-based website builder inspired by the flexibility of modern visual website builders.",
    tags: ["Next.js", "React.js"],
    role: "Next.js Developer — Nexteons",
    period: "2024 — Present",
    overview:
      "A visual website builder where pages are assembled from configurable widgets. The rendering layer reads configuration and composes the interface at runtime, so layouts stay flexible without bespoke code for every page.",
    features: [
      "Widget-based architecture",
      "Reusable components",
      "Dynamic UI",
      "Configuration-based rendering",
      "Flexible layouts",
    ],
    architecture: [
      "Widget registry mapping configuration to React components.",
      "Configuration-driven rendering pipeline in Next.js.",
      "Reusable component primitives shared across widgets.",
    ],
    challenges: [
      "Designing a widget contract general enough for arbitrary layouts yet strict enough to stay type-safe.",
      "Rendering dynamic, configuration-driven pages without losing Next.js performance characteristics.",
    ],
    nextSlug: "bookmevenue",
    nextTitle: "BOOKMEVENUE",
  },
  {
    id: "03",
    slug: "bookmevenue",
    company: "",
    title: "BOOKMEVENUE",
    shortDescription:
      "Event booking platform with user, vendor and admin modules.",
    tags: ["React.js", "REST APIs"],
    role: "Frontend Developer",
    period: "2023",
    overview:
      "An event booking platform split into three distinct experiences — customers discovering and booking, vendors managing their listings, and administrators overseeing the platform — each with its own dashboard and workflows.",
    features: [
      "User module",
      "Vendor module",
      "Admin module",
      "Dashboards",
      "Booking workflows",
      "API integration",
    ],
    architecture: [
      "Role-based module separation across user, vendor and admin surfaces.",
      "REST API integration for bookings and listings.",
      "Reusable dashboard and form components in React.",
    ],
    challenges: [
      "Modelling three different roles on one shared interface layer.",
      "Keeping booking workflows predictable across dashboards.",
    ],
    nextSlug: "e-commerce-platforms",
    nextTitle: "E-COMMERCE PLATFORMS",
  },
];
