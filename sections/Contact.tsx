"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const projectType = (formData.get("projectType") || "").toString().trim();
    const budget = (formData.get("budget") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      setError("Bitte fülle mindestens Name, E-Mail und Nachricht aus.");
      setStatus("error");
      return;
    }

    if (!email.includes("@")) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          budget,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(
          data?.error ||
            "Es ist ein Fehler beim Versenden aufgetreten. Bitte versuch es später erneut."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        "Es konnte keine Verbindung zum Server aufgebaut werden. Bitte versuch es später noch einmal."
      );
      setStatus("error");
    }
  }

  return (
    <Reveal>
      <Section id="contact" className="pt-16 md:pt-24 scroll-mt-24">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          {/* Text + Formular */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Lass uns dein Projekt starten
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl">
              Schreib mir kurz, was du vorhast – ich melde mich mit ein paar
              Rückfragen und einem klaren Vorschlag für Umsetzung, Timeline
              und Budget.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 md:p-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                    placeholder="Wie darf ich dich ansprechen?"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    E-Mail *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                    placeholder="dein.name@beispiel.de"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Projekt-Typ
                  </label>
                  <select
                    name="projectType"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bitte auswählen
                    </option>
                    <option>Landingpage (Neubau)</option>
                    <option>Relaunch / Redesign</option>
                    <option>Stripe-Integration</option>
                    <option>Technischer Feinschliff / Performance</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Budget (optional)
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                    defaultValue=""
                  >
                    <option value="">Noch offen</option>
                    <option>bis 500 €</option>
                    <option>500 – 1.500 €</option>
                    <option>1.500 – 3.000 €</option>
                    <option>3.000 € +</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Kurz dein Projekt / Ziel *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500 resize-y"
                  placeholder="Worum geht es? Was soll die Landingpage erreichen?"
                />
              </div>

              {error && (
                <p className="text-xs text-red-400">
                  {error}
                </p>
              )}

              {status === "success" && !error && (
                <p className="text-xs text-emerald-400">
                  Danke! Deine Nachricht wurde versendet – ich melde mich in der
                  Regel innerhalb von 24 Stunden.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {status === "loading" ? "Wird gesendet…" : "Projektanfrage senden"}
              </button>

              <p className="text-[11px] text-slate-400">
                * Pflichtfelder. Deine Angaben werden nur zur Bearbeitung deiner
                Anfrage verwendet.
              </p>
            </form>
          </div>

          {/* Direkte Kontaktinfos / Fiverr */}
          <div className="space-y-4 text-sm md:text-base">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                Direkt kontaktieren
              </h3>
              <p className="text-slate-300 text-sm mb-2">
                Alternativ kannst du mich auch direkt erreichen:
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="text-slate-400">E-Mail: </span>
                  <a
                    href="mailto:support@secret-prompts.io"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    support@secret-prompts.io
                  </a>
                </p>
                <p>
                  <span className="text-slate-400">Fiverr: </span>
                  <a
                    href="https://de.fiverr.com/s/zWgk8Do"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    fiverr.com/sellers/flo_witt
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 text-xs text-slate-400">
              <p>
                In der Regel kannst du mit einer ersten Rückmeldung innerhalb von{" "}
                <span className="text-slate-200 font-medium">24 Stunden</span>{" "}
                rechnen.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Reveal>
  );
}
