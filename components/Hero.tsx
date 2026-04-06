"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sapphire/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amethyst/3 rounded-full blur-[80px] animate-pulse [animation-delay:4s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--muted) 1px, transparent 1px), linear-gradient(90deg, var(--muted) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Systemhaus & Interaktiv-Studio
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
        >
          <span className="text-text">BREV</span>
          <span className="text-amber">I</span>
          <span className="text-text">KO</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.6 }}
        >
          Wir bauen Apps die sich{" "}
          <span className="text-text font-medium">richtig anfühlen.</span>
        </motion.p>

        <motion.p
          className="text-muted text-base max-w-lg mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Lean-UX Engineering. iOS. Swift. Aus Ostwestfalen.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.0 }}
        >
          <a
            href="#projekte"
            className="inline-flex items-center justify-center px-8 py-3 bg-amber text-bg-deep font-semibold rounded-full hover:bg-amber/90 transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            Unsere Projekte
          </a>
          <a
            href="#dna"
            className="inline-flex items-center justify-center px-8 py-3 border border-border text-muted rounded-full hover:border-amber/50 hover:text-amber transition-all"
          >
            Wie wir bauen
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
