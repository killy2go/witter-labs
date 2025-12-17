// sections/About.tsx
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import Image from "next/image";

const highlights = [
  {
    title: "Direkt mit dem Entwickler",
    desc: "Kurze Wege, schnelle Iterationen, klare Entscheidungen. Kein Agentur-Overhead.",
  },
  {
    title: "Outcome-first",
    desc: "Struktur, Copy-Flow und Performance werden bewusst gebaut – damit Besucher handeln.",
  },
  {
    title: "Sauber & wartbar",
    desc: "Du bekommst Code, den man erweitern kann – ohne Chaos und ohne Abhängigkeiten.",
  },
  {
    title: "Verlässlich & transparent",
    desc: "In der Regel Rückmeldung innerhalb von 24 Stunden. Du weißt immer, wo wir stehen und was als Nächstes passiert.",
  },
];

const facts = [
  { k: "Fokus", v: "Landingpages • Stripe • Performance" },
  { k: "Stack", v: "Next.js • React • TypeScript • Tailwind" },
  { k: "Kommunikation", v: "klar, schnell, ohne Tech-Blabla" },
];

export function About() {
  return (
    <Reveal>
      <Section id="about" className="pt-16 md:pt-24">
        {/* Top row: text + avatar */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-semibold">Über Witter Labs</h2>

            <p className="mt-3 text-slate-300 text-sm md:text-base max-w-2xl">
              Ich bin Florian – Entwickler mit Fokus auf performante Landingpages und
              saubere Stripe-Integrationen. Mein Anspruch: schnell live gehen, sauber
              messen und dann iterieren.
            </p>

            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl">
              Wenn du Klarheit im Scope willst und eine Umsetzung, die nicht bei „sieht gut aus“
              endet, sondern Ergebnisse liefert – dann passt das.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
              {facts.map((f) => (
                <span
                  key={f.k}
                  className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1"
                >
                  <span className="text-slate-400">{f.k}:</span>{" "}
                  <span className="text-slate-200">{f.v}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: Avatar only */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                  <Image
                    src="/florian.png"
                    alt="Florian – Witter Labs"
                    fill
                    className="object-cover object-[50%_35%]"
                    sizes="64px"
                    priority
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-100">Florian</p>
                  <p className="text-xs text-slate-400">
                    Developer · Landingpages · Stripe · Performance
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Ich arbeite direkt mit dir – von Struktur & Copy-Flow bis Build, Launch und Tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: highlights */}
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition transform-gpu hover:border-sky-500/30 hover:bg-slate-900/70 hover:-translate-y-[1px]"
            >
              <h3 className="text-base font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}

          {/* Quick Check full width */}
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-transparent p-5">
            <p className="text-sm text-slate-300">
              <span className="text-slate-50 font-medium">Quick Check:</span>{" "}
              Wenn du mir 5 Minuten Kontext gibst (Ziel, Angebot, Beispiele), bekommst du
              von mir einen klaren Vorschlag für Struktur, Scope und Umsetzung.
            </p>
          </div>
        </div>
      </Section>
    </Reveal>
  );
}
