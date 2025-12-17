// sections/Services.tsx
import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";


const deliverables = [
  {
    title: "Landingpage (Design + Build)",
    desc: "Conversion-orientierte Struktur, saubere UI, Next.js + Tailwind. Mobile-first & wartbar.",
  },
  {
    title: "Stripe & Payments (optional)",
    desc: "Checkout, Webhooks, Abos – production-grade integriert, inkl. sauberer States & Edge Cases.",
  },
  {
    title: "Launch-Ready Setup",
    desc: "SEO-Basics, Schema, Analytics/Tracking & Deploy – damit du messen und iterieren kannst.",
  },
];

const scope = [
  "Kickoff + Ziel/Offer Klarheit",
  "Wireframe/Section-Plan",
  "Build + Performance",
  "Launch + Handover",
];

export function Services() {
  return (
    <Reveal>
      <Section id="services" className="pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Was du bekommst
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base max-w-2xl">
              Kein Baukasten, keine Agentur-Overhead. Ein klarer Scope, saubere
              Umsetzung – und eine Seite, die du messen und verbessern kannst.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/demo"
              className="px-4 py-2 rounded-xl border border-slate-700 text-sm text-slate-200 hover:border-sky-400 hover:text-sky-200 transition"
            >
              Demo ansehen
            </Link>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-sky-500 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
            >
              Projekt anfragen
            </a>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition transform-gpu hover:border-sky-500/30 hover:bg-slate-900/70 hover:-translate-y-[1px]"
            >
              <h3 className="text-base font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-transparent p-5">
          <p className="text-sm text-slate-300">
            <span className="text-slate-50 font-medium">Typischer Ablauf:</span>{" "}
            {scope.join(" → ")}
          </p>
        </div>
      </Section>
    </Reveal>
  );
}
