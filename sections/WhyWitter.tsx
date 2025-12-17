// sections/WhyWitter.tsx
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const points = [
  {
    title: "Performance, die man spürt",
    text: "Schnelle Ladezeiten & Core Web Vitals als Standard – ideal für SEO und Paid Traffic.",
  },
  {
    title: "Conversion statt Deko",
    text: "Struktur, Copy-Flow und CTAs werden bewusst gebaut – damit Besucher handeln, nicht nur scrollen.",
  },
  {
    title: "Payments & Tracking sauber integriert",
    text: "Stripe, Events, Analytics – so kannst du messen, optimieren und Umsatz nicht im Nebel betreiben.",
  },
  {
    title: "Direkt mit dem Entwickler",
    text: "Kurze Wege, klare Kommunikation, schnelle Iterationen. Kein Agentur-Overhead.",
  },
];

export function WhyWitter() {
  return (
    <Reveal>
      <Section className="pt-16 md:pt-24">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Warum das funktioniert
        </h2>
        <p className="mt-3 text-slate-300 text-sm md:text-base max-w-2xl">
          Du bekommst ein Setup, das nicht nur gut aussieht, sondern messbar
          performt – technisch und inhaltlich.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition transform-gpu hover:border-sky-500/30 hover:bg-slate-900/70 hover:-translate-y-[1px]"
            >
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Reveal>
  );
}
