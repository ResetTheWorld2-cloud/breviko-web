"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    phase: "01",
    title: "Apps die Probleme lösen",
    text: "Angefangen mit einer einfachen Frage: Warum sind die meisten Apps so schlecht? Zu viele Features, zu wenig Fokus. Also: selbst machen. Lean. Reduziert. Schön.",
    accent: "var(--amber)",
  },
  {
    phase: "02",
    title: "Websites die konvertieren",
    text: "Gutes Produkt, schlechte Website? Passiert nicht mehr. Moderne Webauftritte mit der gleichen Obsession für Detail und Performance wie die Apps.",
    accent: "var(--sapphire)",
  },
  {
    phase: "03",
    title: "KI die wirklich arbeitet",
    text: "Während andere noch überlegen ob KI relevant ist, bauen wir bereits Agenten die Angebote schreiben, Prozesse steuern und Teams entlasten. Keine Demos — Produktion.",
    accent: "var(--amethyst)",
  },
  {
    phase: "04",
    title: "Wissen das bleibt",
    text: "Die beste Investition? Dein Team. Workshops und Schulungen die aus Zuschauern Anwender machen. Praxisnah, sofort einsetzbar, ohne Bullshit.",
    accent: "var(--emerald)",
  },
];

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="py-32 px-6 bg-bg-deep relative overflow-hidden" ref={ref}>
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Die Geschichte
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-4xl">
            Von der ersten App
            <br />
            <span className="text-muted">zum kompletten digitalen Werkzeugkasten.</span>
          </h2>
          <p className="text-muted mt-6 max-w-2xl text-lg">
            BREVIKO ist aus der Überzeugung entstanden, dass man für großartige digitale Produkte kein großes Team braucht — sondern die richtigen Prinzipien, die richtigen Werkzeuge und den Willen, immer am Puls der Technik zu bleiben.
          </p>
        </motion.div>

        {/* Timeline */}
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
              {/* Phase number */}
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

        {/* Closing statement */}
        <motion.div
          className="mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xl sm:text-2xl text-text/80 font-medium max-w-3xl leading-relaxed">
            Heute ist BREVIKO ein digitaler Allrounder — Apps, Websites, KI-Agenten, Beratung. Alles aus einer Hand, alles nach den gleichen Prinzipien:{" "}
            <span className="text-amber">reduziert auf das was zählt.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
