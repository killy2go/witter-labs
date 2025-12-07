// sections/Projects.tsx
import { Section } from "@/components/Section";
import Image from "next/image";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Ausgewähltes Projekt
      </h2>
      <p className="text-slate-300 text-sm md:text-base mb-6 max-w-2xl">
        Ein kurzer Einblick in ein Projekt, das zeigt, wie ich Landingpages
        technisch und optisch umsetze.
      </p>

      <div className="grid md:grid-cols-[1.4fr_minmax(0,1fr)] gap-6 items-stretch">
        {/* Text-/Info-Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col justify-between">
          <div className="space-y-2 mb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Secret Prompts · Creator Tool
            </p>
            <h3 className="text-lg md:text-xl font-semibold">
              Dark-UI Landingpage für virale Prompt-Packs
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Landingpage für ein KI-Prompt-Produkt mit Fokus auf klare
              Struktur, schnelles Laden und einem modernen, dunklen Interface.
            </p>
          </div>

          <ul className="text-xs md:text-sm text-slate-300 space-y-1 mb-4">
            <li>• Next.js + Tailwind CSS</li>
            <li>• Hosting über Vercel</li>
            <li>• Lighthouse Score Desktop: 99 / 100 / 100 / 94</li>
          </ul>

          <a
            href="https://secret-prompts.io"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-xs md:text-sm text-sky-400 hover:text-sky-300 underline underline-offset-2"
          >
            Projekt live ansehen
          </a>
        </div>

        {/* Screenshot-Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden flex items-center justify-center">
          <Image
            src="/secret-prompts-hero.png"
            alt="Secret Prompts Landingpage"
            width={1365}
            height={768}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
