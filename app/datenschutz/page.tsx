// app/datenschutz/page.tsx
export default function DatenschutzPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-sm text-slate-100 space-y-8">
      <a
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-md bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400 transition"
      >
        <span>←</span>
        <span>Zurück zur Startseite</span>
      </a>

      <h1 className="text-3xl font-semibold mb-4">Datenschutzerklärung</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        <p>Florian Witter</p>
        <p>[Straße + Hausnummer]</p>
        <p>[PLZ + Ort]</p>
        <p className="mt-2">E-Mail: support@secret-prompts.io</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Dienstleister (z. B. Vercel)
          gehostet. Der Hoster verarbeitet in unserem Auftrag Bestands-, Kontakt-,
          Inhalts-, Vertrags-, Nutzungs-, Meta- und Kommunikationsdaten von
          Besuchern dieser Website.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
          Interesse liegt in einer sicheren und performanten Bereitstellung
          dieser Website.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Server-Logfiles</h2>
        <p>
          Beim Besuch dieser Website werden automatisch Informationen erfasst,
          die Ihr Browser übermittelt (sogenannte Server-Logfiles), z. B.:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-200">
          <li>IP-Adresse (ggf. gekürzt oder anonymisiert)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>aufgerufene Seite bzw. Datei</li>
          <li>übertragene Datenmenge</li>
          <li>Browsertyp und -version</li>
          <li>verwendetes Betriebssystem</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          Das berechtigte Interesse liegt in der technischen Bereitstellung und
          Sicherheit der Website. Logfiles werden regelmäßig automatisch
          gelöscht.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          4. Kontaktaufnahme per E-Mail
        </h2>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben inklusive
          der von Ihnen freiwillig übermittelten Daten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen gespeichert.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertrag /
          vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Kommunikation).
        </p>
        <p>
          Diese Daten werden nicht ohne Ihre Einwilligung an Dritte
          weitergegeben und gelöscht, sobald sie für die Bearbeitung nicht mehr
          erforderlich sind oder keine gesetzlichen Aufbewahrungspflichten
          bestehen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Cookies und Analyse-Tools</h2>
        <p>
          Aktuell werden auf dieser Website keine Cookies zu Analyse- oder
          Trackingzwecken eingesetzt. Sollte sich dies ändern, wird diese
          Datenschutzerklärung entsprechend angepasst.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Ihre Rechte</h2>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen das Recht
          auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
          Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ggf.
          ein Recht auf Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
          können Sie sich jederzeit an mich wenden: support@secret-prompts.io
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei der zuständigen
          Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind,
          dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO
          verstößt.
        </p>
      </section>
    </main>
  );
}
