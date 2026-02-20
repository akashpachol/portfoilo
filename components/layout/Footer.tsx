import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative h-[80vh] flex flex-col justify-end bg-zinc-950 text-white overflow-hidden pb-10">
            <Container className="flex flex-col gap-10">
                {/* Mega Text */}
                <div className="flex flex-col leading-[0.8]">
                    <h2 className="text-[12vw] font-bold font-oswald uppercase tracking-tighter text-zinc-800 select-none">
                        Let&apos;s Work
                    </h2>
                    <h2 className="text-[12vw] font-bold font-oswald uppercase tracking-tighter text-white select-none">
                        Together
                    </h2>
                </div>

                {/* Footer Meta */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10">
                    <div className="flex flex-col gap-2">
                        <Link href="mailto:hello@akash.dev" className="text-2xl md:text-3xl font-oswald hover:text-indigo-400 transition-colors">
                            hello@akash.dev
                        </Link>
                        <p className="text-zinc-500 text-sm">
                            &copy; {new Date().getFullYear()} Akash P. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6 mt-6 md:mt-0">
                        <Link href="https://github.com" target="_blank" className="font-geist-mono text-sm uppercase hover:text-indigo-400 transition-colors">
                            Github
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="font-geist-mono text-sm uppercase hover:text-indigo-400 transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="font-geist-mono text-sm uppercase hover:text-indigo-400 transition-colors">
                            Twitter
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
