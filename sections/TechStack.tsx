// sections/TechStack.tsx
import { Section } from "@/components/Section";

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Stripe",
  "Node.js",
  "Vercel",
];

export function TechStack() {
  return (
    <Section id="tech">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Tech-Stack & Arbeitsweise
      </h2>
      <p className="text-slate-300 text-sm md:text-base mb-6 max-w-2xl">
        Ich setze auf moderne Tools und einen schlanken Workflow – vom
        lokalen Development bis zur automatischen Auslieferung über Vercel.
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
