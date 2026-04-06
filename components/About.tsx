"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber" className="py-32 px-6 bg-bg-deep" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Über uns
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-3xl">
            Kein Großraumbüro.
            <br />
            <span className="text-muted">Trotzdem großartige Ergebnisse.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="space-y-6">
            <p className="text-lg text-text/80 leading-relaxed">
              Hi, ich bin Christian. Ich baue Apps, Websites und KI-Lösungen — direkt, ohne Umwege, ohne Agentur-Aufschlag. Du redest mit dem der dein Projekt baut, nicht mit einem Vertriebler.
            </p>
            <p className="text-muted leading-relaxed">
              BREVIKO ist bewusst klein gehalten. Kein Büro mit Empfangsdame, kein Fuhrpark. Dafür: kurze Wege, schnelle Entscheidungen und Preise ohne Overhead. Was andere Agenturen für den Kickertisch ausgeben, sparst du dir.
            </p>
            <p className="text-muted leading-relaxed">
              Ob eine einfache Website, eine komplexe App oder die Frage &ldquo;wie kann KI uns helfen?&rdquo; — schreib mir einfach. Wenn ich dir helfen kann, sag ich ja. Wenn nicht, sag ich dir ehrlich wer es besser kann.
            </p>

            {/* BREVIKO meaning */}
            <div className="pt-6 mt-6 border-t border-border">
              <p className="text-xs font-mono text-muted/50 tracking-[0.2em] uppercase mb-4">
                Wofür steht BREVIKO?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { l: "B", w: "Bauen" },
                  { l: "R", w: "Reduzieren" },
                  { l: "E", w: "Entwickeln" },
                  { l: "V", w: "Vereinfachen" },
                  { l: "I", w: "Implementieren" },
                  { l: "K", w: "Kommunizieren" },
                  { l: "O", w: "Optimieren" },
                ].map((p) => (
                  <div
                    key={p.l}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="font-bold text-amber text-lg">{p.l}</span>
                    <span>{p.w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats — zielgruppenrelevant */}
          <div className="space-y-4">
            {[
              { value: 50000, suffix: "+", label: "Excel-Zeilen verarbeitet", icon: "📊" },
              { value: 120000, suffix: "+", label: "Zeilen Code geschrieben", icon: "💻" },
              { value: 100, suffix: "%", label: "der Kunden würden uns weiterempfehlen", icon: "⭐" },
              { value: 0, suffix: "€", label: "Agentur-Overhead in deiner Rechnung", icon: "🎯" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group flex items-center gap-4 p-5 rounded-xl bg-bg border border-border hover:border-amber/30 transition-all"
              >
                <span className="text-2xl w-10 text-center">{stat.icon}</span>
                <div>
                  <div className="text-2xl font-bold text-amber">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
