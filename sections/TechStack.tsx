// sections/TechStack.tsx
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const pillars = [
  {
    title: "Performance by default",
    desc: "Core Web Vitals, saubere Bundles, schnelle Fonts & Images – damit Paid Traffic nicht verbrennt.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Payments & Automations",
    desc: "Checkout, Webhooks, Abos und E-Mail-Flows – production-ready und sauber getestet.",
    tags: ["Stripe", "Node.js", "Webhooks"],
  },
  {
    title: "SEO & Messbarkeit",
    desc: "Metadata, Schema, Tracking Events – damit du weißt, was funktioniert und was nicht.",
    tags: ["SEO", "Schema.org", "Analytics"],
  },
  {
    title: "Ship & Iterate",
    desc: "Schneller Release-Zyklus mit sauberem Deployment und klarer Übergabe.",
    tags: ["Vercel", "Git", "CI/CD"],
  },
];

const workflow = ["Kickoff", "Structure", "Build", "Launch", "Iterate"];

export function TechStack() {
  return (
    <Reveal>
      <Section id="tech" className="pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Tech-Stack & Arbeitsweise
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base max-w-2xl">
              Tools sind Mittel zum Zweck. Entscheidend sind Performance, saubere
              Payments und Messbarkeit – damit du Ergebnisse siehst.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1">
              Lighthouse 95–100
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1">
              SEO + Schema
            </span>
            <span className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1">
              Tracking Events
            </span>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Workflow
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {workflow.map((w, i) => (
              <div key={w} className="flex items-center gap-2">
                <span className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-1 text-sm text-slate-200">
                  {w}
                </span>
                {i !== workflow.length - 1 && (
                  <span className="text-slate-600">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition transform-gpu hover:border-sky-500/30 hover:bg-slate-900/70 hover:-translate-y-[1px]"
            >
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Reveal>
  );
}
