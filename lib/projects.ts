export type ProjectStatus =
  | "live"
  | "coming-soon"
  | "mvp"
  | "development"
  | "trained";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  statusColor: string;
  tech: string[];
  highlights: string[];
  accentColor: string;
  icon: string;
  appStoreUrl?: string;
}

export const projects: Project[] = [
  {
    id: "fishingbuddy",
    name: "FishingBuddy",
    tagline: "Weil Angeln mehr ist als Warten",
    description:
      "Aus einer Leidenschaft fürs Angeln wurde eine App: Spots finden, Fänge dokumentieren, Fische per KI erkennen. 56+ heimische Arten, Wetter, Mondphasen — alles offline verfügbar.",
    status: "live",
    statusLabel: "Im App Store",
    statusColor: "var(--emerald)",
    tech: ["SwiftUI", "CoreML", "MapKit"],
    highlights: [
      "KI-Fischerkennung",
      "56+ Fischarten",
      "Funktioniert ohne Internet",
    ],
    accentColor: "var(--teal)",
    icon: "🎣",
  },
  {
    id: "meetingcost",
    name: "MeetingCost",
    tagline: "Das Meeting das keiner wollte — live in Euro",
    description:
      "Jeder kennt Meetings die zu lang dauern. Diese App zeigt live was sie kosten: pro Sekunde, pro Teilnehmer. Spoiler: es ist mehr als du denkst. Und plötzlich werden Meetings kürzer.",
    status: "coming-soon",
    statusLabel: "Bald verfügbar",
    statusColor: "var(--amber)",
    tech: ["SwiftUI", "Swift Charts"],
    highlights: [
      "Live-Kostenzähler",
      "Teilbare Report Cards",
      "Meetings werden kürzer",
    ],
    accentColor: "var(--amber)",
    icon: "⏱",
  },
  {
    id: "salesmate",
    name: "SalesMate",
    tagline: "Einfach reinsprechen, der Rest passiert von selbst",
    description:
      "Für alle die nach dem Kundentermin keine Lust auf Tippen haben: einfach erzählen was war. Die KI macht den Bericht, den Arbeitsauftrag und die Doku. Fertig.",
    status: "mvp",
    statusLabel: "MVP",
    statusColor: "var(--sapphire)",
    tech: ["SwiftUI", "KI-Transkription"],
    highlights: [
      "Einfach reinsprechen",
      "KI schreibt den Bericht",
      "Funktioniert offline",
    ],
    accentColor: "var(--coral)",
    icon: "🎙",
  },
  {
    id: "gembawerk",
    name: "GembaWerk",
    tagline: "Unser internes Qualitäts-Gewissen",
    description:
      "40+ automatische Checks die jedes unserer Projekte durchlaufen muss. Damit nichts rausgeht was nicht gut genug ist. Unser Anspruch, als Code verpackt.",
    status: "development",
    statusLabel: "Intern im Einsatz",
    statusColor: "var(--coral)",
    tech: ["SwiftUI", "Audit-Engine"],
    highlights: [
      "40+ Qualitäts-Checks",
      "Jedes Projekt wird geprüft",
    ],
    accentColor: "var(--amethyst)",
    icon: "🔍",
  },
  {
    id: "arbeitszeitencounter",
    name: "ArbeitszeitenCounter",
    tagline: "Zeiterfassung ohne Gedöns",
    description:
      "Starten. Stoppen. Fertig. Die einfachste Zeiterfassung die wir uns vorstellen konnten. Weil die meisten Tools mehr nerven als helfen.",
    status: "development",
    statusLabel: "In Entwicklung",
    statusColor: "var(--coral)",
    tech: ["SwiftUI"],
    highlights: [
      "Maximal einfach",
      "Kein Schnickschnack",
    ],
    accentColor: "var(--sapphire)",
    icon: "⏰",
  },
  {
    id: "fishclassifier",
    name: "FishClassifier",
    tagline: "Maschine lernt Fische kennen",
    description:
      "Ein KI-Modell das Fische erkennt — trainiert auf echten Daten, läuft direkt auf dem iPhone. Keine Cloud, keine Wartezeit, kein Datenschutz-Problem. Steckt in FishingBuddy drin.",
    status: "trained",
    statusLabel: "Trainiert & im Einsatz",
    statusColor: "var(--emerald)",
    tech: ["PyTorch", "CoreML"],
    highlights: [
      "Läuft auf dem iPhone",
      "Keine Cloud nötig",
      "Privacy-First",
    ],
    accentColor: "var(--emerald)",
    icon: "🧠",
  },
];
