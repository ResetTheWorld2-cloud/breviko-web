"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="6" width="22" height="36" rx="4" stroke="var(--amber)" strokeWidth="2" />
        <rect x="18" y="6" width="22" height="30" rx="4" stroke="var(--amber)" strokeWidth="2" opacity="0.4" />
        <circle cx="19" cy="38" r="2" fill="var(--amber)" opacity="0.6" />
        <rect x="13" y="12" width="12" height="3" rx="1.5" fill="var(--amber)" opacity="0.3" />
        <rect x="13" y="18" width="8" height="2" rx="1" fill="var(--amber)" opacity="0.2" />
      </svg>
    ),
    title: "Apps & Websites",
    subtitle: "iOS, Web, von Idee bis Launch",
    description:
      "Native iOS Apps mit SwiftUI. Moderne Websites mit Next.js. Keine Templates, kein Baukasten — maßgeschneidert, performant, schön. Vom ersten Wireframe bis zum Store-Release.",
    features: ["iOS Apps (Swift)", "Websites (Next.js)", "Lean-UX Design", "App Store Launch"],
    accent: "var(--amber)",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="20" r="10" stroke="var(--amethyst)" strokeWidth="2" />
        <circle cx="24" cy="20" r="4" fill="var(--amethyst)" opacity="0.3" />
        <path d="M18 32C18 32 20 36 24 36C28 36 30 32 30 32" stroke="var(--amethyst)" strokeWidth="2" opacity="0.5" />
        <path d="M24 36V42" stroke="var(--amethyst)" strokeWidth="2" opacity="0.4" />
        <path d="M20 42H28" stroke="var(--amethyst)" strokeWidth="2" opacity="0.4" />
        <path d="M15 14L12 8" stroke="var(--amethyst)" strokeWidth="1.5" opacity="0.3" />
        <path d="M33 14L36 8" stroke="var(--amethyst)" strokeWidth="1.5" opacity="0.3" />
        <path d="M24 10V4" stroke="var(--amethyst)" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
    title: "KI-Agenten & Automatisierung",
    subtitle: "Intelligente Workflows, die arbeiten",
    description:
      "Custom AI Agents die deine Prozesse übernehmen. Angebote schreiben, Daten auswerten, Kunden antworten — rund um die Uhr, ohne Aufsicht. Keine Spielerei, sondern echte Arbeitserleichterung.",
    features: ["Custom AI Agents", "Workflow-Automatisierung", "API-Integrationen", "Autonome Prozesse"],
    accent: "var(--amethyst)",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="6" y="12" width="36" height="24" rx="3" stroke="var(--emerald)" strokeWidth="2" />
        <path d="M6 18H42" stroke="var(--emerald)" strokeWidth="1.5" opacity="0.3" />
        <rect x="10" y="22" width="12" height="2" rx="1" fill="var(--emerald)" opacity="0.3" />
        <rect x="10" y="26" width="8" height="2" rx="1" fill="var(--emerald)" opacity="0.2" />
        <rect x="10" y="30" width="16" height="2" rx="1" fill="var(--emerald)" opacity="0.15" />
        <circle cx="35" cy="27" r="5" stroke="var(--emerald)" strokeWidth="1.5" opacity="0.4" />
        <path d="M33 27L35 29L38 25" stroke="var(--emerald)" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    title: "KI-Beratung & Schulungen",
    subtitle: "Verstehen, einsetzen, profitieren",
    description:
      "Wo lohnt sich KI wirklich? Welche Tools passen? Wie nutzt dein Team sie produktiv? Ehrliche Analyse, praxisnahe Workshops, messbare Ergebnisse. Kein Hype, nur Substanz.",
    features: ["Potenzial-Analyse", "Team-Workshops", "Prompt Engineering", "Tool-Integration"],
    accent: "var(--emerald)",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Leistungen
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-3xl">
            Die meisten reden über KI.
            <br />
            <span className="text-muted">Wir bauen damit.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-bg/60 border border-border hover:border-amber/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
            >
              {/* Glow on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700"
                style={{ background: service.accent }}
              />

              <div className="relative">
                <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-text mb-1 group-hover:text-amber transition-colors">
                  {service.title}
                </h3>
                <p
                  className="text-xs font-mono tracking-wide mb-4"
                  style={{ color: service.accent }}
                >
                  {service.subtitle}
                </p>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-muted/70 bg-bg-elevated px-2.5 py-1 rounded-md border border-border"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
