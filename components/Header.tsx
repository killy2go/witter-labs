// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Text */}
        <Link href="/#top" className="flex items-center gap-2">
          <Image
            src="/logo-128.png"
            width={32}
            height={32}
            alt="Witter Labs Logo"
            className="rounded-full"
          />
          <span className="font-semibold tracking-tight">
            Witter<span className="text-sky-400"> Labs</span>
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex gap-4 text-sm text-slate-300">
          <a href="/#services" className="hover:text-sky-400">
            Services
          </a>
          <a href="/#tech" className="hover:text-sky-400">
            Tech-Stack
          </a>
          <a href="/#about" className="hover:text-sky-400">
            Über mich
          </a>
          <a href="/#contact" className="hover:text-sky-400">
            Kontakt
          </a>
        </nav>

        {/* Mobile Menü-Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-2.5 py-1.5 text-xs text-slate-200 hover:border-sky-400 hover:text-sky-400 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          {/* Burger / X Icon */}
          <span className="relative w-4 h-3 flex flex-col justify-between">
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile-Dropdown – jetzt ohne Gap beim Schließen */}
      <div
        className={`
          md:hidden border-t border-slate-800 bg-slate-950/95 
          overflow-hidden transition-[max-height,opacity] duration-200 
          ${open ? "max-h-48 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm text-slate-200">
          <a
            href="/#services"
            className="hover:text-sky-400"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="/#tech"
            className="hover:text-sky-400"
            onClick={() => setOpen(false)}
          >
            Tech-Stack
          </a>
          <a
            href="/#about"
            className="hover:text-sky-400"
            onClick={() => setOpen(false)}
          >
            Über mich
          </a>
          <a
            href="/#contact"
            className="hover:text-sky-400"
            onClick={() => setOpen(false)}
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
