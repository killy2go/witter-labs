// sections/About.tsx
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Über Witter Labs</h2>
      <p className="text-slate-300 text-sm md:text-base max-w-2xl space-y-2">
        <span>
          Hinter Witter Labs stehe ich, Florian – Entwickler mit Fokus auf
          moderne Landingpages, Stripe-Integrationen und einen sauberen
          technischen Stack.
        </span>
        <span className="block mt-3">
          Statt aufgeblähter Projekte liegt mein Schwerpunkt auf klaren Zielen,
          schlanken Umsetzungen und einer Kommunikation, die verständlich bleibt
          – auch ohne Technik-Background.
        </span>
      </p>
    </Section>
  );
}
