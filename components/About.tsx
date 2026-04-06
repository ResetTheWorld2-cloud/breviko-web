"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber" className="py-32 px-6 bg-bg-deep" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Über
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Wer dahinter steckt.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.2,
          }}
        >
          {/* Avatar / Visual */}
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-40 rounded-2xl bg-bg border border-border flex items-center justify-center">
              <span className="text-5xl text-amber/40 font-bold font-mono">
                C
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-xl font-bold text-text mb-4">
              Christian
              <span className="text-muted font-normal text-base ml-2">
                Gründer & Entwickler
              </span>
            </h3>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                BREVIKO ist ein Systemhaus & Interaktiv-Studio aus Ostwestfalen. Fokus: iOS Apps mit Swift und SwiftUI die durch Lean-UX-Prinzipien nicht nur funktionieren, sondern sich richtig anfühlen.
              </p>
              <p>
                Die Philosophie verbindet drei Welten: die radikale Einfachheit von Toyota&apos;s Lean Manufacturing, das ikonische Designdenken von Jonathan Ive und die Interface-Reduktion von Golden Krishna. Das Ergebnis: Apps die so klar sind WEIL sie schön sind — und so schön WEIL sie klar sind.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "6+", label: "Apps" },
                { value: "iOS", label: "Plattform" },
                { value: "OWL", label: "Standort" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-bg border border-border"
                >
                  <div className="text-xl font-bold text-amber font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
