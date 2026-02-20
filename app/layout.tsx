import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/Cursor";
import { Grain } from "@/components/ui/Grain";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashpachol.vercel.app/"),
  title: {
    default: "Akash P | Frontend Architect & Creative Developer",
    template: "%s | Akash P",
  },
  description:
    "Senior Frontend Developer & Creative Engineer specializing in Next.js, React, TypeScript, and immersive web experiences. Building high-performance, award-worthy digital products.",
  keywords: [
    "Akash P",
    "Frontend Developer",
    "Frontend Architect",
    "Creative Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer Portfolio",
    "UI/UX Engineer",
    "Full Stack Developer",
    "Framer Motion",
    "GSAP",
    "Web Animations",
    "India",
  ],
  authors: [{ name: "Akash P", url: "https://akashpachol.vercel.app/" }],
  creator: "Akash P",
  publisher: "Akash P",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashpachol.vercel.app/",
    siteName: "Akash P — Portfolio",
    title: "Akash P | Frontend Architect & Creative Developer",
    description:
      "Senior Frontend Developer & Creative Engineer specializing in Next.js, React, TypeScript, and immersive web experiences.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Akash P — Frontend Architect & Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash P | Frontend Architect & Creative Developer",
    description:
      "Senior Frontend Developer & Creative Engineer specializing in Next.js, React, TypeScript, and immersive web experiences.",
    images: ["/opengraph-image"],
    creator: "@akashp_dev",
  },
  alternates: {
    canonical: "https://akashpachol.vercel.app/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased bg-black text-white`}
      >
        {/* <Providers> */}
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <ParallaxBackground />
          <Grain />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        {/* </Providers> */}
      </body>
    </html>
  );
}
