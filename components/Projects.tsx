"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projekte" className="py-32 px-6 bg-bg-deep" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="text-amber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Eigene Projekte
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-text mb-4 leading-tight max-w-3xl">
            Gebaut aus Neugier.
            <br />
            <span className="text-muted">Geblieben weil&apos;s funktioniert.</span>
          </h2>
          <p className="text-muted max-w-2xl mt-6 text-lg">
            Neben Kundenprojekten bauen wir eigene Apps — weil uns Probleme begegnen die wir lösen wollen. Jedes Projekt ist aus einer echten Idee entstanden, nicht aus einem Briefing. Das merkt man.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
