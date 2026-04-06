"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    letter: "B",
    word: "Bauen",
    description: "Solide Fundamente. Keine Abkürzungen, kein Quick-and-Dirty.",
  },
  {
    letter: "R",
    word: "Reduzieren",
    description: "Komplexität ist der Feind. Jede Funktion muss sich rechtfertigen.",
  },
  {
    letter: "E",
    word: "Entwickeln",
    description: "Innovation ist Pflicht. Wir entwickeln mit dem Blick nach vorn.",
  },
  {
    letter: "V",
    word: "Vereinfachen",
    description: "Jede Interaktion so einfach wie möglich. Benutzen, nicht nachdenken.",
  },
  {
    letter: "I",
    word: "Implementieren",
    description: "Schnell ausführen. Bauen, messen, lernen. Lean in der Praxis.",
  },
  {
    letter: "K",
    word: "Kommunizieren",
    description: "Transparent nach innen und außen. Keine Dark Patterns.",
  },
  {
    letter: "O",
    word: "Optimieren",
    description: "Kaizen in jeder Iteration. Gut genug ist der Start, nie das Ziel.",
  },
];

export default function DNA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dna" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Unsere DNA
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            So bauen wir.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.letter}
              className="group relative p-6 rounded-2xl bg-bg/80 border border-border hover:border-amber/40 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl font-bold text-amber/20 group-hover:text-amber/60 transition-colors mb-2 font-mono">
                {pillar.letter}
              </div>
              <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-amber transition-colors">
                {pillar.word}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
