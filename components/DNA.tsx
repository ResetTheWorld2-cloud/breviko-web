"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beliefs = [
  {
    statement: "Komplexität ist Faulheit.",
    explanation:
      "Jeder kann Features stapeln. Es braucht Disziplin, sie wegzulassen. Wir streichen so lange, bis nur noch das Wesentliche übrig ist.",
  },
  {
    statement: "Schönheit ist kein Extra.",
    explanation:
      "Eine App die funktioniert aber hässlich ist, ist nicht fertig. Design ist keine Dekoration — es ist die Funktion selbst.",
  },
  {
    statement: "Der beste Screen ist keiner.",
    explanation:
      "Bevor wir einen Screen designen, fragen wir: Muss er überhaupt existieren? Oft ist die Antwort nein.",
  },
  {
    statement: "Klein schlägt groß.",
    explanation:
      "Kein Management-Overhead. Keine Abstimmungsrunden. Eine Idee morgens, ein Prototyp abends. Das ist unser Vorteil.",
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
            Manifest
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-3xl">
            Vier Überzeugungen.
            <br />
            <span className="text-muted">Kein Bullshit.</span>
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

        {/* BREVIKO DNA Pillars — compact */}
        <motion.div
          className="mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xs font-mono text-muted tracking-[0.2em] uppercase mb-8">
            B.R.E.V.I.K.O — Die 7 Säulen
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { l: "B", w: "Bauen" },
              { l: "R", w: "Reduzieren" },
              { l: "E", w: "Entwickeln" },
              { l: "V", w: "Vereinfachen" },
              { l: "I", w: "Implementieren" },
              { l: "K", w: "Kommunizieren" },
              { l: "O", w: "Optimieren" },
            ].map((p) => (
              <span
                key={p.l}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted hover:border-amber/40 hover:text-amber transition-all cursor-default"
              >
                <span className="font-bold text-amber/60">{p.l}</span>
                {p.w}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
