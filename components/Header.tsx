"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CTA } from "@/components/CTA";

const NAV = [
  { id: "services", label: "Services" },
  { id: "tech", label: "Tech-Stack" },
  { id: "about", label: "Über mich" },
];

export function Header() {
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // ✅ 1-Klick Smooth Scroll + Hash setzen
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  // Scroll-Spy
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        threshold: [0.15, 0.25, 0.35],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Header Blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition",
        scrolled
          ? "bg-slate-950/80 backdrop-blur border-b border-slate-800/70"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo -> immer nach oben */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("top");
              setActiveId("");
            }}
            className="font-semibold text-slate-100"
          >
            Witter <span className="text-sky-400">Labs</span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => {
              const isActive = activeId === n.id;
              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(n.id);
                  }}
                  className={[
                    "relative text-sm transition-colors",
                    isActive
                      ? "text-sky-300"
                      : "text-slate-200/80 hover:text-slate-100",
                  ].join(" ")}
                >
                  {n.label}
                  <span
                    className={[
                      "pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full rounded-full transition",
                      isActive ? "bg-sky-400 opacity-100" : "bg-transparent opacity-0",
                    ].join(" ")}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA -> 1 Klick nach Contact */}
          <CTA
            href="#contact"
            variant="primary"
            className="px-4 py-2"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              scrollToId("contact");
            }}
          >
            Projekt anfragen
          </CTA>
        </div>
      </div>
    </header>
  );
}
