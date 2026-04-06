"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beliefs = [
  {
    statement: "Kompliziert kann jeder.",
    explanation:
      "Jeder kann Features stapeln. Es braucht Disziplin, sie wegzulassen. Wir bauen so lange ab, bis nur noch das übrig ist was du wirklich brauchst.",
  },
  {
    statement: "Hässlich ist nicht fertig.",
    explanation:
      "Deine App, deine Website — das ist deine Visitenkarte. Wenn sie gut aussieht, vertrauen dir die Leute. Wenn nicht, klicken sie weg. Design ist kein Extra, es ist Pflicht.",
  },
  {
    statement: "Weniger Klicks, mehr Ergebnis.",
    explanation:
      "Drei Taps statt zwölf. Ein Bildschirm statt fünf. Wir fragen bei jedem Element: Braucht der Nutzer das wirklich? Wenn nein, fliegt es raus.",
  },
  {
    statement: "Klein schlägt groß.",
    explanation:
      "Kein Overhead, keine Abstimmungsrunden. Du sagst morgens was du brauchst, abends gibt es einen Prototyp. So schnell ist keine Agentur.",
  },
];

export default function DNA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="manifest" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Versprechen
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-3xl">
            Vier Dinge, die wir
            <br />
            <span className="text-muted">anders machen.</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-12 py-10 border-t border-border hover:border-amber/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-text group-hover:text-amber transition-colors">
                {belief.statement}
              </h3>
              <p className="text-muted leading-relaxed self-center">
                {belief.explanation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
