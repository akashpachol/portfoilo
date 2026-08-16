import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[var(--text-muted)]">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-[var(--text-main)] tracking-widest">
            AKASH P
          </span>
          <span className="text-[var(--text-dim)]">•</span>
          <span>NEXT.JS DEVELOPER</span>
        </div>

        <nav className="flex items-center space-x-6">
          <Link href="/#work" className="hover:text-[var(--text-main)] transition-colors">
            WORK
          </Link>
          <Link href="/#about" className="hover:text-[var(--text-main)] transition-colors">
            ABOUT
          </Link>
          <Link href="/#experience" className="hover:text-[var(--text-main)] transition-colors">
            EXPERIENCE
          </Link>
          <Link href="/#contact" className="hover:text-[var(--text-main)] transition-colors">
            CONTACT
          </Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            LINKEDIN
          </a>
        </nav>

        <div className="text-[var(--text-dim)]">
          © 2026 AKASH P
        </div>
      </div>
    </footer>
  );
}
