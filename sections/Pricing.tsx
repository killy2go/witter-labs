// sections/Pricing.tsx
import { Section } from "@/components/Section";

const items = [
  {
    title: "Landingpage-Entwicklung",
    price: "ab 290–790 €",
    text: "Komplette Landingpage mit 4–6 Sektionen, responsive Design und Deployment auf Vercel.",
  },
  {
    title: "Stripe-Integration",
    price: "ab 150–400 €",
    text: "Anbindung von Stripe Checkout oder Zahlungsabwicklung für digitale Produkte oder Services.",
  },
  {
    title: "Wartung & Updates",
    price: "49–149 € / Monat",
    text: "Kleine Änderungen, technische Pflege und Optimierungen nach dem Launch – optional buchbar.",
  },
];

export function Pricing() {
  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Preisrahmen & Zusammenarbeit
      </h2>
      <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl">
        Jede Landingpage ist individuell – die meisten Projekte bewegen sich in
        den folgenden Bereichen. Nach einer kurzen Anfrage kann ich dir ein
        konkretes Angebot machen.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3"
          >
            <h3 className="text-sm md:text-base font-semibold">
              {item.title}
            </h3>
            <p className="text-sm font-semibold text-sky-400">{item.price}</p>
            <p className="text-xs md:text-sm text-slate-300 flex-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
