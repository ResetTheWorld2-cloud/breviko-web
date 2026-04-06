"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export default function ProjectCard({
  project,
  index,
  isInView,
}: ProjectCardProps) {
  return (
    <motion.article
      className="group relative rounded-2xl bg-bg/60 border border-border hover:border-amber/30 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ y: -6 }}
    >
      {/* Accent top bar */}
      <div
        className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: project.accentColor }}
      />

      <div className="p-6 sm:p-8">
        {/* Header: Icon + Status */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{project.icon}</span>
          <span
            className="text-xs font-mono px-3 py-1 rounded-full border"
            style={{
              color: project.statusColor,
              borderColor: project.statusColor,
              background: `color-mix(in srgb, ${project.statusColor} 10%, transparent)`,
            }}
          >
            {project.statusLabel}
          </span>
        </div>

        {/* Title + Tagline */}
        <h3 className="text-xl font-bold text-text mb-1 group-hover:text-amber transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-amber/70 font-medium mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-xs text-muted bg-bg-elevated px-2.5 py-1 rounded-md border border-border"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-muted/60 tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        {/* App Store Link */}
        {project.appStoreUrl && (
          <a
            href={project.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm text-amber hover:text-amber/80 transition-colors"
          >
            Im App Store ansehen
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
  );
}
