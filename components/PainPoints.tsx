"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pains = [
  {
    pain: "Auftragsbücher sind voll — aber der Papierkram frisst den Feierabend.",
    solution: "Digitale Prozesse die sich selbst erledigen. Rapporte, Angebote, Dokumentation — automatisch.",
  },
  {
    pain: "Gute Mitarbeiter? Kaum zu bekommen. Und die Guten ertrinken in Verwaltung.",
    solution: "KI-Agenten übernehmen die Routinearbeit. Dein Team macht das wofür du es eingestellt hast.",
  },
  {
    pain: "Die Konkurrenz hat schon eine App. Du hast noch Durchschlag-Formulare.",
    solution: "Eine eigene App oder Website — in Wochen, nicht Monaten. So einfach wie WhatsApp, aber für dein Geschäft.",
  },
  {
    pain: "KI ist überall in den Nachrichten. Aber wo fängt man an?",
    solution: "Mit einem ehrlichen Gespräch. Was bringt dir was, was ist Hype? Wir sortieren das für dich.",
  },
];

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 bg-bg-deep" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Kommt dir das bekannt vor?
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-3xl">
            Dein Geschäft läuft.
            <br />
            <span className="text-muted">Aber du läufst hinterher.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {pains.map((item, index) => (
            <motion.div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 md:gap-12 p-6 md:p-8 rounded-2xl border border-border hover:border-amber/20 bg-bg/40 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              <div className="flex gap-3">
                <span className="text-ruby/40 text-lg mt-0.5 shrink-0">✕</span>
                <p className="text-text/70 leading-relaxed">
                  {item.pain}
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald/60 text-lg mt-0.5 shrink-0">→</span>
                <p className="text-muted leading-relaxed group-hover:text-text/70 transition-colors">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
