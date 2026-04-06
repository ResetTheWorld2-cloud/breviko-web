"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const frameworks = [
  {
    name: "Jonathan Ive",
    quote: "Einfachheit ist die Überwindung von Komplexität.",
    description:
      "Jede App bekommt ein eigenes visuelles Universum. Spring-Physics statt linearer Animationen. Oberflächen mit Gewicht. Interfaces die sich anfühlen wie ein physisches Produkt.",
    accent: "var(--amethyst)",
  },
  {
    name: "Golden Krishna",
    quote: "The best interface is no interface.",
    description:
      "Jeder Screen muss seine Existenz rechtfertigen. Was das System weiß, fragt es nicht. Was automatisiert werden kann, wird automatisiert. Was bleibt, ist ein Meisterwerk.",
    accent: "var(--teal)",
  },
  {
    name: "Toyota Lean",
    quote: "Eliminiere Verschwendung. Überall. Immer.",
    description:
      "Muda in der User Journey finden und töten. Jidoka: das System denkt mit. Poka-Yoke: Fehler sind unmöglich. Kaizen: heute besser als gestern.",
    accent: "var(--amber)",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophie" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Methode
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-3xl">
            Drei Genies.
            <br />
            <span className="text-muted">Ein System.</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {frameworks.map((fw, index) => (
            <motion.div
              key={fw.name}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-border hover:border-amber/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: index * 0.12,
              }}
            >
              <div>
                <p
                  className="text-xs font-mono tracking-[0.15em] uppercase mb-2"
                  style={{ color: fw.accent }}
                >
                  {fw.name}
                </p>
                <p className="text-sm text-muted/50 italic">
                  &ldquo;{fw.quote}&rdquo;
                </p>
              </div>
              <p className="text-text/80 leading-relaxed text-lg">
                {fw.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
