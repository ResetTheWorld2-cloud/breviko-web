"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    name: "Jonathan Ive",
    principle: "Schönheit durch Notwendigkeit",
    description:
      "Jede App bekommt ein eigenes, unverwechselbares Design-Universum. Spring-Physics, materielle Tiefe, haptisches Feedback. Interfaces die sich echt anfühlen.",
    accent: "var(--amethyst)",
    icon: "✦",
  },
  {
    name: "Golden Krishna",
    principle: "Das beste Interface ist keins",
    description:
      "Jeder Screen muss beweisen, dass er existieren muss. Was automatisiert werden kann, wird automatisiert. Was bleibt, ist ein Meisterwerk.",
    accent: "var(--teal)",
    icon: "◯",
  },
  {
    name: "Toyota Lean",
    principle: "Keine Verschwendung, nur Wert",
    description:
      "Muda-Eliminierung in jeder User Journey. Jidoka für intelligente Automatisierung. Poka-Yoke macht Fehler unmöglich. Kaizen in jeder Iteration.",
    accent: "var(--amber)",
    icon: "△",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophie" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Philosophie
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Warum es funktioniert.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Drei bewährte Frameworks verschmolzen zu einem Design-System. Nicht nacheinander angewandt — gleichzeitig.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              className="group relative p-8 rounded-2xl bg-bg/60 border border-border hover:border-amber/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: index * 0.15,
              }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-6 opacity-40 group-hover:opacity-80 transition-opacity"
                style={{ color: pillar.accent }}
              >
                {pillar.icon}
              </div>

              {/* Name */}
              <p
                className="text-xs font-mono tracking-[0.2em] uppercase mb-2"
                style={{ color: pillar.accent }}
              >
                {pillar.name}
              </p>

              {/* Principle */}
              <h3 className="text-lg font-bold text-text mb-3">
                {pillar.principle}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-muted/60 italic max-w-2xl mx-auto text-sm">
            &ldquo;Perfektion ist nicht dann erreicht, wenn man nichts mehr hinzufügen kann, sondern wenn man nichts mehr weglassen kann — und das was bleibt, ist wunderschön.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
