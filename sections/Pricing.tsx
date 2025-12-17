// sections/Pricing.tsx
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const includes = [
  "Klare Ziel- & Offer-Definition",
  "Conversion-orientierte Seitenstruktur",
  "Next.js + Tailwind Build",
  "Performance & Core Web Vitals",
  "SEO Basics + Schema",
  "Tracking / Analytics Setup",
  "Deploy & Übergabe",
];

const fit = [
  {
    title: "Passt gut, wenn…",
    points: [
      "du ein klares Ziel hast (Leads, Sales, Launch)",
      "du Qualität & Performance willst",
      "du schnell und strukturiert live gehen möchtest",
    ],
  },
  {
    title: "Passt eher nicht, wenn…",
    points: [
      "du nur „irgendeine Webseite“ brauchst",
      "der Preis das einzige Entscheidungskriterium ist",
      "du ohne Ziel oder Ownership starten willst",
    ],
  },
];

export function Pricing() {
  return (
    <Reveal>
      <Section className="pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Zusammenarbeit & Scope
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base max-w-2xl">
              Jedes Projekt ist unterschiedlich. Statt fixer Paketpreise bekommst du
              einen klaren Scope, ein festes Angebot – und keine Überraschungen.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/demo"
              className="px-4 py-2 rounded-xl border border-slate-700 text-sm text-slate-200 hover:border-sky-400 hover:text-sky-200 transition"
            >
              Demo ansehen
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-sky-500 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
            >
              Projekt anfragen
            </a>
          </div>
        </div>

        {/* Fit / No-Fit */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {fit.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <h3 className="text-base font-semibold">{block.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {block.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-transparent p-5">
          <p className="text-sm text-slate-200 font-medium mb-3">
            Immer enthalten
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            {includes.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400 max-w-xl">
          Nach einer kurzen Abstimmung erhältst du ein fixes Angebot auf Basis des
          Scopes – transparent und verbindlich.
        </p>
      </Section>
    </Reveal>
  );
}
