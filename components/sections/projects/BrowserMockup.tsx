"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe,
  CheckCircle2,
  Zap,
  Server,
  Activity,
} from "lucide-react";
import { Project } from "@/lib/projects";

interface BrowserMockupProps {
  project: Project;
  isEven: boolean;
}

export function BrowserMockup({ project, isEven }: BrowserMockupProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center w-full ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Project Narrative & Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-5/12 flex flex-col"
      >
        {/* Meta Header */}
        <div className="font-mono text-label-technical text-on-surface-variant mb-4 sm:mb-6 tracking-widest flex flex-wrap items-center gap-2 sm:gap-3">
          <span>{project.number}</span>
          <span className="w-6 sm:w-8 h-[1px] bg-outline-variant/40" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full border text-primary border-white/[0.12] bg-surface-container-high flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>Web Platform</span>
          </span>
          <span className="text-[10px] sm:text-[11px] text-on-surface-variant/70 uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-[28px] sm:text-[38px] md:text-[46px] font-black text-primary mb-3 sm:mb-4 tracking-tight leading-[1.08] break-words">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm sm:text-base md:text-[17px] text-on-surface-variant mb-5 sm:mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Platform Engineering Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 mb-6 p-3.5 sm:p-4 rounded-xl bg-surface-container-low/70 border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[9px] sm:text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                Platform Engineering
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Production Live</span>
              </span>
            </div>
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-on-surface/90 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Stack Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 sm:px-3 py-1 bg-surface-container-low text-on-surface font-mono text-[10px] sm:text-[11px] rounded-md border border-white/[0.06] hover:border-cyan-400/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
          <a
            href={project.live || project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-primary hover:bg-white text-on-primary font-mono text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-all shadow-md active:scale-95 group/btn"
          >
            <span>Visit Live Platform</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>

          {project.github && project.github !== project.live && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-on-surface-variant hover:text-primary transition-colors py-1 group/gh"
            >
              <Github className="w-4 h-4 text-on-surface-variant group-hover/gh:text-primary" />
              <span className="tracking-widest uppercase font-semibold">
                Source Code
              </span>
            </a>
          )}
        </div>
      </motion.div>

      {/* Modern Studio Production Console Viewport (Linear / Vercel Style) */}
      <motion.div
        data-cursor="project"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-7/12"
      >
        <div className="relative group/studio w-full">
          {/* Ambient Directional Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-cyan-500/15 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover/studio:opacity-60 transition-opacity duration-700 pointer-events-none" />

          {/* Studio Canvas Container */}
          <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#0c0d12] border border-white/[0.09] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover/studio:border-cyan-400/35 transition-all duration-500 flex flex-col">
            {/* Studio Header Bar */}
            <div className="w-full bg-[#111319]/95 border-b border-white/[0.07] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 backdrop-blur-md">
              {/* Left: Deployment Breadcrumb & Status */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px] text-on-surface-variant min-w-0">
                  <span className="text-white/40 shrink-0">app</span>
                  <span className="text-white/20 shrink-0">/</span>
                  <span className="text-primary font-medium tracking-tight truncate max-w-[130px] xs:max-w-[180px] sm:max-w-[240px] md:max-w-none">
                    {project.displayUrl}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 font-mono text-[8px] sm:text-[9px] text-emerald-400 font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Edge Live</span>
                </span>
              </div>

              {/* Right: Real Engineering Telemetry & Launch Action */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {project.telemetry?.lighthouse && (
                  <div className="hidden xs:flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono text-[9px] sm:text-[10px] text-cyan-300">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>{project.telemetry.lighthouse.split("·")[0]}</span>
                  </div>
                )}
                <a
                  href={project.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 sm:px-2.5 py-1 rounded bg-white/[0.06] hover:bg-cyan-500/20 hover:border-cyan-400/40 border border-white/[0.08] font-mono text-[9px] sm:text-[10px] text-primary hover:text-cyan-300 flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Cinematic High-Res Screen Viewport (16:10) */}
            <a
              href={project.live || project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-[16/10] overflow-hidden bg-black group/viewport"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/viewport:scale-[1.02]"
              />

              {/* Edge Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Hover / Tap Action Pill */}
              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 opacity-0 group-hover/viewport:opacity-100 transition-all duration-300 translate-y-2 group-hover/viewport:translate-y-0">
                <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/85 border border-white/20 text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <span>Launch Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            </a>

            {/* Bottom Production Architecture Telemetry Bar */}
            {project.telemetry && (
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0e1015] border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-mono text-on-surface-variant">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Server className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="text-white/60">RUNTIME:</span>
                  <span className="text-primary font-medium truncate max-w-[160px] sm:max-w-none">
                    {project.telemetry.rendering || "Next.js SSR"}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-white/60">NETWORK:</span>
                  <span className="text-cyan-300">
                    {project.telemetry.network || "Vercel Edge"}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="text-emerald-400">
                    {project.telemetry.latency || "<120ms TTFB"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
