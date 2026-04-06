import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — BREVIKO",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-bg-deep text-text">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-muted hover:text-amber transition-colors text-sm mb-8 inline-block"
        >
          &larr; Zurück
        </Link>

        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-6 text-muted leading-relaxed">
          <div>
            <h2 className="text-text font-semibold mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Diese Website erhebt keine personenbezogenen Daten. Es werden
              keine Cookies gesetzt, kein Tracking eingesetzt und keine Daten
              an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-2">
              2. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der
              Website werden automatisch Informationen in Server-Log-Dateien
              gespeichert, die Ihr Browser übermittelt (IP-Adresse, Zeitpunkt,
              Seite). Diese Daten werden nicht mit anderen Datenquellen
              zusammengeführt.
            </p>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-2">
              3. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
              Bearbeitung der Anfrage gespeichert. Eine Weitergabe an Dritte
              erfolgt nicht.
            </p>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-2">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung und Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten. Kontaktieren Sie uns unter:
              hello@breviko.de
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
