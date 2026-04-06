"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/5 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-text mb-6 leading-tight">
            App-Idee? KI-Frage?
            <br />
            <span className="text-amber">Einfach schreiben.</span>
          </h2>
          <p className="text-muted mb-12 max-w-lg mx-auto text-lg">
            Kein Kontaktformular mit 12 Feldern. Kein Chatbot. Eine E-Mail, eine Antwort. So einfach sollte alles sein.
          </p>
        </motion.div>

        <motion.a
          href="mailto:hello@breviko.de"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-amber text-bg-deep font-bold rounded-full hover:bg-amber/90 transition-all text-lg"
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
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13L2 4" />
          </svg>
          hello@breviko.de
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </motion.a>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-16 text-xs text-muted/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span>Antwort innerhalb 24h</span>
          <span className="text-border">|</span>
          <span>Erstgespräch kostenlos</span>
          <span className="text-border">|</span>
          <span>DSGVO-konform</span>
        </motion.div>
      </div>
    </section>
  );
}
