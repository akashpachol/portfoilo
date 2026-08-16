"use client";

export default function MarqueeBanner() {
  const items = [
    "Scalable digital experiences",
    "Next.js",
    "Monorepo architecture",
    "Performance first",
  ];

  return (
    <section className="py-8 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/50 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Double array for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 px-6">
            <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
