// sections/Hero.tsx
import Link from "next/link";
import { de } from "@/content/de";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

export function Hero() {
  const { hero } = de;

  return (
    <Section id="top" className="pt-16 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        {/* Left: Copy */}
        <div className="lg:col-span-7">
          <p className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs tracking-widest text-slate-300">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
            {hero.headline}
          </h1>

          <p className="mt-5 max-w-2xl text-slate-300 text-sm md:text-base">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTA href="/demo" variant="secondary" className="px-5 py-3">
              Demo ansehen
            </CTA>
            <CTA href="#contact" variant="primary" className="px-5 py-3">
              Projekt anfragen
            </CTA>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1">
              SEO + Schema ready
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1">
              Sauberes Tracking
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1">
              Wartbar & skalierbar
            </span>
          </div>
        </div>

        {/* Right: Proof */}
        <div className="lg:col-span-5">
          <div className="grid gap-4">
            {hero.proof.map((p) => (
              <div
                key={p.title}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-5 overflow-hidden transition transform-gpu hover:border-sky-500/40 hover:bg-slate-900/70 hover:-translate-y-[1px]">
                
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl" />
                
                <div className="relative">
                  <span className="inline-flex rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-[10px] uppercase tracking-widest text-slate-400">
                    {p.badge}
                  </span>
                  
                  <h3 className="mt-3 text-base font-semibold">
                    {p.title}
                  </h3>
                  
                  <p className="mt-1 text-sm text-slate-300">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Credibility note */}
          <div className="mt-4 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-transparent p-5">
            <p className="text-sm text-slate-300">
              Fokus auf Ergebnisse statt Buzzwords. Du bekommst ein Setup,
              das schnell live geht und langfristig sauber erweitert werden kann.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
