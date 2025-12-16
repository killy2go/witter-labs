// app/impressum/page.tsx
export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-sm text-slate-100">
      <a
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-md bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400 transition"
      >
        <span>←</span>
        <span>Zurück zur Startseite</span>
      </a>

      <h1 className="text-3xl font-semibold mb-8">Impressum</h1>

      <div className="space-y-6 text-slate-200">
        <div>
          <p className="font-semibold mb-1">Angaben gemäß § 5 TMG</p>
          <p>Florian Witter</p>
          <p>Grüntalstr. 8</p>
          <p>96465 Neustadt</p>
        </div>

        <div>
          <p className="font-semibold mb-1">Kontakt</p>
          <p>E-Mail: support@secret-prompts.io</p>
        </div>

        <div>
          <p className="font-semibold mb-1">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </p>
          <p>Florian Witter</p>
          <p>Grüntalstr. 8</p>
          <p>96465 Neustadt</p>
        </div>
      </div>
    </main>
  );
}
