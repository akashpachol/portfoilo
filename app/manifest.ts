import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Akash P — Frontend Architect & Creative Developer",
        short_name: "Akash P",
        description:
            "Senior Frontend Developer specializing in Next.js, React, and Creative Development.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
