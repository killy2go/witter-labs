// sections/Hero.tsx
import { Section } from "@/components/Section";

export function Hero() {
  return (
    <Section className="pt-12 md:pt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="flex-1 space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            WITTER LABS · NEXT.JS · STRIPE
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Konversionsstarke{" "}
            <span className="text-sky-400">Landingpages</span> für
            Solopreneure & kleine Businesses.
          </h1>
          <p className="text-slate-300 max-w-xl text-sm md:text-base">
            Ich entwickle ultraschnelle, moderne Landingpages mit Next.js und
            React – optimiert für Performance, SEO und messbare Ergebnisse.
            Auf Wunsch mit Stripe-Integration, Hosting und laufender Betreuung.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-sky-500 text-sm font-medium hover:bg-sky-400 transition"
            >
              Projekt anfragen
            </a>
            <a
              href="#services"
              className="px-5 py-2.5 rounded-full border border-slate-700 text-sm hover:border-sky-400 hover:text-sky-200 transition"
            >
              Services & Preise
            </a>
            <span className="text-xs text-slate-400">
              Antwort in der Regel innerhalb von 24 Stunden.
            </span>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative mx-auto h-48 md:h-64 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900/40 overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_55%)]" />
            <div className="relative h-full flex flex-col justify-center items-center gap-2">
              <p className="text-xs text-slate-300 uppercase tracking-[0.3em]">
                Lighthouse Score
              </p>
              <p className="text-4xl md:text-5xl font-semibold text-sky-400">
                95–100
              </p>
              <p className="text-xs text-slate-400 text-center max-w-xs">
                Fokus auf schnelle Ladezeiten, Best Practices und sauberen Code
                – ideal für Paid Traffic, SEO und seriöse Auftritte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
