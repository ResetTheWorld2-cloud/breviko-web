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
    tagline: "Dein Angelbegleiter mit KI",
    description:
      "Angelspot-Karte, digitales Fangbuch und KI-Fischerkennung in einer App. 56+ heimische Fischarten mit Steckbriefen, Schonzeiten und Fangtipps. Offline-fähig.",
    status: "live",
    statusLabel: "Live im App Store",
    statusColor: "var(--emerald)",
    tech: ["SwiftUI", "CoreML", "MapKit", "Swift Charts"],
    highlights: [
      "KI-Fischerkennung on-device",
      "56+ Fischarten-Lexikon",
      "Wetter + Mondphasen",
      "Offline-First",
    ],
    accentColor: "var(--teal)",
    icon: "🎣",
  },
  {
    id: "meetingcost",
    name: "MeetingCost",
    tagline: "Was kostet dieses Meeting wirklich?",
    description:
      "Echtzeit-Kostenzähler für Meetings. Jede Sekunde, jeder Teilnehmer, jeder Euro — live sichtbar. Report Cards zum Teilen. Macht unsichtbare Verschwendung sichtbar.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    statusColor: "var(--amber)",
    tech: ["SwiftUI", "Swift Charts", "StoreKit 2", "ShareLink"],
    highlights: [
      "Live-Kostenzähler mit Spring-Physics",
      "Teilbare Report Cards",
      "Meeting-Analytik",
      "Meilenstein-Gamification",
    ],
    accentColor: "var(--amber)",
    icon: "⏱",
  },
  {
    id: "salesmate",
    name: "SalesMate",
    tagline: "Voice-First für den Außendienst",
    description:
      "Sprachmemo-App für Außendienstler. Natürlich sprechen, KI transkribiert und generiert automatisch Arbeitsaufträge. Kunden, Material, Unterschrift — alles in einer App.",
    status: "mvp",
    statusLabel: "MVP",
    statusColor: "var(--sapphire)",
    tech: ["SwiftUI", "AVFoundation", "CoreLocation", "KI-Transkription"],
    highlights: [
      "Voice-First Workflow",
      "KI-Arbeitsauftrag-Generierung",
      "Offline-First mit Sync",
      "Foto + Unterschrift",
    ],
    accentColor: "var(--coral)",
    icon: "🎙",
  },
  {
    id: "gembawerk",
    name: "GembaWerk",
    tagline: "Lean-UX als Audit-Engine",
    description:
      "40+ automatisierte Lean-UX-Checks über 7 Prinzipien: Muda, Jidoka, Poka-Yoke, Flow, Kontext, Ive-Design und Krishna-Reduktion. Qualitätssicherung als Code.",
    status: "development",
    statusLabel: "In Entwicklung",
    statusColor: "var(--coral)",
    tech: ["SwiftUI", "Lean UX", "Audit-Engine"],
    highlights: [
      "40+ automatisierte Checks",
      "7 Lean-Prinzipien",
      "Quality Gate für alle Projekte",
    ],
    accentColor: "var(--amethyst)",
    icon: "🔍",
  },
  {
    id: "arbeitszeitencounter",
    name: "ArbeitszeitenCounter",
    tagline: "Zeiterfassung, maximal reduziert",
    description:
      "Die einfachste Zeiterfassung die es gibt. Lean-UX-Prinzipien in ihrer radikalsten Form — minimaler Input, maximaler Insight.",
    status: "development",
    statusLabel: "In Entwicklung",
    statusColor: "var(--coral)",
    tech: ["SwiftUI", "SwiftData"],
    highlights: [
      "Minimal-Interface",
      "Automatische Erkennung",
      "Lean-UX Radikal",
    ],
    accentColor: "var(--sapphire)",
    icon: "⏰",
  },
  {
    id: "fishclassifier",
    name: "FishClassifier",
    tagline: "On-Device ML Fisch-Erkennung",
    description:
      "Produktions-CoreML-Modell trainiert auf PyTorch. Erkennt Fischarten direkt auf dem Gerät — ohne Cloud, ohne Latenz, ohne Datenschutzbedenken. Powert FishingBuddy.",
    status: "trained",
    statusLabel: "Trainiert & Integriert",
    statusColor: "var(--emerald)",
    tech: ["PyTorch", "CoreML", "CoreMLTools", "Python"],
    highlights: [
      "On-Device Inference",
      "Zero Latenz",
      "Privacy-First",
      "Kein API-Kosten",
    ],
    accentColor: "var(--emerald)",
    icon: "🧠",
  },
];
