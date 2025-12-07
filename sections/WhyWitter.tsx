// sections/WhyWitter.tsx
import { Section } from "@/components/Section";

const points = [
  {
    title: "Performance im Fokus",
    text: "Lighthouse Scores von 95–100 sind Standard – keine langsamen, überladenen Seiten.",
  },
  {
    title: "Konversionsorientiert",
    text: "Struktur, Texte und Layout sind auf dein Ziel ausgerichtet: Leads, Calls oder direkte Verkäufe.",
  },
  {
    title: "Moderner Tech-Stack",
    text: "Next.js, React, Tailwind CSS, Stripe und Vercel – statt veralteter Baukastensysteme.",
  },
  {
    title: "Schnelle, klare Zusammenarbeit",
    text: "Kurze Wege, saubere Umsetzung, keine Agentur-Overhead. Du sprichst direkt mit dem Entwickler.",
  },
];

export function WhyWitter() {
  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Warum Witter Labs?
      </h2>
      <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl">
        Keine Baukasten-Websites, sondern schlanke, gezielt aufgebaute
        Landingpages, die technisch und inhaltlich überzeugen.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {points.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="text-sm md:text-base font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
