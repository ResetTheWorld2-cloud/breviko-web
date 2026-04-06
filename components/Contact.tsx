"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Lass uns reden.
          </h2>
          <p className="text-muted mb-10 max-w-lg mx-auto">
            Projekt-Idee? Zusammenarbeit? Oder einfach mal austauschen über Lean-UX, Swift oder gutes App-Design?
          </p>
        </motion.div>

        <motion.a
          href="mailto:hello@breviko.de"
          className="inline-flex items-center gap-3 px-8 py-4 bg-amber text-bg-deep font-semibold rounded-full hover:bg-amber/90 transition-all text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.2,
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13L2 4" />
          </svg>
          hello@breviko.de
        </motion.a>
      </div>
    </section>
  );
}
