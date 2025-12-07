// sections/Services.tsx
import { Section } from "@/components/Section";

const services = [
  {
    title: "Landingpage-Entwicklung",
    description:
      "Individuelle Landingpages mit Next.js und React – schnell, modern und auf dein Ziel ausgerichtet (Leads, Calls, Sales).",
  },
  {
    title: "Stripe-Integration",
    description:
      "Einrichtung von Stripe Checkout, Zahlungsabwicklung und Abomodellen für digitale Produkte, Services oder Memberships.",
  },
  {
    title: "Hosting & Deployment",
    description:
      "Setup auf Vercel inkl. Domain-Anbindung, SSL und optimierter Performance. Du brauchst keinen eigenen Server.",
  },
  {
    title: "Wartung & Feinschliff",
    description:
      "Auf Wunsch übernehme ich laufende Updates, kleinere Änderungen und Conversion-Optimierungen.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Was ich mit Witter Labs anbiete
      </h2>
      <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl">
        Fokus auf klaren Strukturen, schneller Umsetzung und technisch sauberen
        Lösungen. Ideal für Solopreneure, Creator und kleine Unternehmen.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="text-sm md:text-base font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
