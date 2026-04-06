import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — BREVIKO",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-bg-deep text-text">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-muted hover:text-amber transition-colors text-sm mb-8 inline-block"
        >
          &larr; Zurück
        </Link>

        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-muted leading-relaxed">
          <div>
            <h2 className="text-text font-semibold mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              BREVIKO
              <br />
              Christian [Nachname]
              <br />
              [Straße Nr.]
              <br />
              [PLZ Ort]
            </p>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-2">Kontakt</h2>
            <p>
              E-Mail: hello@breviko.de
            </p>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Christian [Nachname]
              <br />
              [Adresse wie oben]
            </p>
          </div>

          <div>
            <h2 className="text-text font-semibold mb-2">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
