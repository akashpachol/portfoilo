import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Akash P",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-main)] px-6 py-24">
      <div className="max-w-lg text-center space-y-6">
        <div className="text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
          404 — NOT FOUND
        </div>
        <h1
          className="text-4xl sm:text-6xl font-normal tracking-tight uppercase text-[var(--text-main)]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base font-mono text-[var(--text-muted)] leading-relaxed">
          The route you navigated to does not exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--text-main)] text-[var(--bg-primary)] text-xs font-mono font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN HOME</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
