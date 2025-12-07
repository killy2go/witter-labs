// sections/Contact.tsx
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Lass uns dein Projekt starten
      </h2>
      <p className="text-slate-300 text-sm md:text-base mb-6 max-w-2xl">
        Schreib mir kurz, was du vorhast (Landingpage, Produkt, Ziel) – ich
        melde mich mit ein paar Fragen und einem klaren Vorschlag.
      </p>

      <div className="space-y-3 text-sm md:text-base">
        <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-slate-400">E-Mail:</span>
          <a
            href="mailto:support@secret-prompts.io"
            className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
          >
            support@secret-prompts.io
          </a>
        </p>
      </div>

      <div className="mt-5">
        <a
          href="https://de.fiverr.com/s/zWgk8Do"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-slate-900 text-sm font-semibold hover:bg-sky-400 transition"
        >
          <span>Zu meinem Fiverr-Profil</span>
        </a>
      </div>
    </Section>
  );
}
