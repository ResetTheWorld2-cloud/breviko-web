"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    phase: "01",
    title: "Apps die einfach funktionieren",
    text: "Angefangen hat alles mit einer Frage: Warum sind die meisten Apps so kompliziert? Heute bauen wir Apps die so einfach sind, dass niemand eine Anleitung braucht. 6 Stück bisher, alle laufen.",
    accent: "var(--amber)",
  },
  {
    phase: "02",
    title: "Websites die verkaufen",
    text: "Gutes Produkt, schlechte Website? Passiert leider ständig. Wir bauen moderne Webauftritte die auf jedem Gerät funktionieren — schnell, schön und mit einem klaren Ziel: dein Geschäft wachsen lassen.",
    accent: "var(--sapphire)",
  },
  {
    phase: "03",
    title: "KI die wirklich arbeitet",
    text: "Während andere noch überlegen ob KI relevant ist, bauen wir schon Agenten die Angebote schreiben, Daten sortieren und Kundenfragen beantworten. Nicht als Experiment — im echten Einsatz.",
    accent: "var(--amethyst)",
  },
  {
    phase: "04",
    title: "Wissen das bleibt",
    text: "Die beste Investition? Dein Team. Unsere Workshops machen aus KI-Skeptikern KI-Anwender. Praxisnah, an einem Tag, mit Tools die am nächsten Morgen schon genutzt werden.",
    accent: "var(--emerald)",
  },
];

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="py-32 px-6 bg-bg-deep relative overflow-hidden" ref={ref}>
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Warum BREVIKO
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-4xl">
            Alles aus einer Hand.
            <br />
            <span className="text-muted">Von jemandem der es selbst benutzt.</span>
          </h2>
          <p className="text-muted mt-6 max-w-2xl text-lg">
            Keine Agentur mit 40 Leuten die sich abstimmen müssen. Sondern ein Entwickler der jeden Tag mit den neuesten Technologien arbeitet — und genau weiß was funktioniert und was nur gut klingt.
          </p>
        </motion.div>

        <div className="space-y-2">
          {timeline.map((item, index) => (
            <motion.div
              key={item.phase}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 py-10 border-t border-border hover:border-amber/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              <div
                className="text-4xl font-bold font-mono opacity-20 group-hover:opacity-60 transition-opacity"
                style={{ color: item.accent }}
              >
                {item.phase}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text mb-3 group-hover:text-amber transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-2xl">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xl sm:text-2xl text-text/80 font-medium max-w-3xl leading-relaxed">
            Das Ergebnis? Du bekommst alles was du brauchst — App, Website, KI, Schulung — ohne zwischen fünf Dienstleistern hin und her zu springen.{" "}
            <span className="text-amber">Ein Ansprechpartner. Schnelle Ergebnisse. Faire Preise.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
