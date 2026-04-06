"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-sapphire/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amethyst/3 rounded-full blur-[80px] animate-pulse [animation-delay:4s]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--muted) 1px, transparent 1px), linear-gradient(90deg, var(--muted) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-20 h-20 border border-amber/10 rounded-2xl"
        animate={{ rotate: [0, 90, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-12 h-12 border border-sapphire/10 rounded-full"
        animate={{ y: [0, 15, 0], x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] right-[5%] w-3 h-3 bg-amber/20 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[35%] left-[15%] w-2 h-2 bg-amethyst/20 rounded-full"
        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          <p className="text-amber font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-8">
            Apps. Websites. KI. Aus Bad Salzuflen.
          </p>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
        >
          <span className="text-text">Keine Zeit für</span>
          <br />
          <span className="text-text">Papierkram?</span>
          <br />
          <span className="text-amber">Gut so.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.7 }}
        >
          Auftragsbücher voll, gute Leute schwer zu finden, nach Feierabend noch Büro? Wir bauen dir digitale Lösungen die{" "}
          <span className="text-text/80">Arbeit abnehmen statt welche zu machen.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.9 }}
        >
          <a
            href="#leistungen"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-amber text-bg-deep font-semibold rounded-full hover:bg-amber/90 transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            Wie wir dir helfen
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-muted rounded-full hover:border-amber/50 hover:text-amber transition-all"
          >
            Erstgespräch — kostenlos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1"
          animate={{ borderColor: ["var(--border)", "var(--amber)", "var(--border)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-amber rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
