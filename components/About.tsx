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
            Über BREVIKO
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text leading-tight max-w-3xl">
            Christian aus Bad Salzuflen.
            <br />
            <span className="text-muted">Baut Sachen die funktionieren.</span>
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
              Kein Büro in Berlin, kein Kickertisch, kein Bullshit. Dafür: schnelle Antworten, faire Preise und Ergebnisse die man anfassen kann.
            </p>
            <p className="text-muted leading-relaxed">
              BREVIKO ist bewusst klein. Weil klein bedeutet: du redest direkt mit dem der dein Projekt baut. Kein Projektmanager dazwischen, kein Briefing das dreimal übersetzt wird. Du sagst was du brauchst, ich sage was möglich ist, und dann bauen wir.
            </p>
            <p className="text-muted leading-relaxed">
              Dahinter steht ein Netzwerk aus erfahrenen Beratern die mitdenken wo es zählt. Und ein Arbeitsansatz der sich an den Besten orientiert: schnell, reduziert, ohne Verschwendung. Jede Funktion muss sich rechtfertigen. Was keinen Mehrwert bringt, fliegt raus.
            </p>
          </div>

          {/* Animated stats */}
          <div className="space-y-4">
            {[
              { value: 6, suffix: "+", label: "digitale Produkte gebaut", icon: "🚀" },
              { value: 56, suffix: "+", label: "Fischarten per KI erkannt", icon: "🐟" },
              { value: 40, suffix: "+", label: "Qualitäts-Checks pro Projekt", icon: "✓" },
              { value: 0, suffix: "", label: "Compiler Warnings", icon: "⚡" },
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
