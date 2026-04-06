"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const letters = [
  { char: "B", meaning: "Bauen", color: "var(--amber)" },
  { char: "R", meaning: "Reduzieren", color: "var(--ruby)" },
  { char: "E", meaning: "Entwickeln", color: "var(--emerald)" },
  { char: "V", meaning: "Vereinfachen", color: "var(--sapphire)" },
  { char: "I", meaning: "Implementieren", color: "var(--amber)" },
  { char: "K", meaning: "Kommunizieren", color: "var(--amethyst)" },
  { char: "O", meaning: "Optimieren", color: "var(--teal)" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        {/* Interactive BREVIKO letters */}
        <div className="flex justify-center gap-1 sm:gap-2 mb-12">
          {letters.map((l, i) => (
            <motion.div
              key={l.char}
              className="group relative cursor-default"
              whileHover={{ y: -8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span
                className="text-3xl sm:text-5xl font-bold text-muted/20 group-hover:text-opacity-100 transition-colors duration-300 block"
                style={{ ["--hover-color" as string]: l.color }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = l.color; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ""; }}
              >
                {l.char}
              </span>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span
                  className="text-[10px] font-mono tracking-wider whitespace-nowrap px-2 py-1 rounded-md border border-border bg-bg-elevated"
                  style={{ color: l.color }}
                >
                  {l.meaning}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted">
          <span className="text-muted/40 text-xs">
            &copy; {new Date().getFullYear()} BREVIKO
          </span>

          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="hover:text-amber transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-amber transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
