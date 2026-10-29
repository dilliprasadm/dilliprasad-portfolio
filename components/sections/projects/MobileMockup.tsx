"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Smartphone,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Info,
} from "lucide-react";
import { Project } from "@/lib/projects";

interface MobileMockupProps {
  project: Project;
  isEven: boolean;
}

export function MobileMockup({ project, isEven }: MobileMockupProps) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <div
      className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Project Narrative & Engineering Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col"
      >
        {/* Meta Header */}
        <div className="font-mono text-label-technical text-on-surface-variant mb-6 tracking-widest flex items-center gap-3">
          <span>{project.number}</span>
          <span className="w-8 h-[1px] bg-outline-variant/40" />
          <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full border text-cyan-400 border-cyan-400/30 bg-cyan-400/10 flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
            <Smartphone className="w-3 h-3 text-cyan-400" />
            <span>Native Mobile Architecture</span>
          </span>
          <span className="text-[11px] text-on-surface-variant/70 hidden sm:inline uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-[34px] sm:text-[42px] md:text-[48px] font-black text-primary mb-4 tracking-tight leading-[1.05]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-base md:text-[17px] text-on-surface-variant mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Engineering Architecture Specs */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 mb-6 p-4 rounded-xl bg-surface-container-low/70 border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                Flutter System Architecture
              </span>
              <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>60 FPS Target</span>
              </span>
            </div>
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-on-surface/90 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-surface-container-low text-on-surface font-mono text-[11px] rounded-md border border-white/[0.06] hover:border-cyan-400/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <a
            href={project.live || project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-[12px] font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95 group/btn"
          >
            <span>Explore Application</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>

          {project.github && project.github !== project.live && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-on-surface-variant hover:text-primary transition-colors py-1 group/gh"
            >
              <Github className="w-4 h-4 text-on-surface-variant group-hover/gh:text-primary" />
              <span className="tracking-widest uppercase font-semibold">
                Source Code
              </span>
            </a>
          )}
        </div>
      </motion.div>

      {/* Frameless Mobile Architectural Canvas */}
      <motion.div
        data-cursor="project"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center py-4"
      >
        <div className="relative group/mobile flex flex-col items-center w-full max-w-[360px]">
          {/* Ambient Directional Radial Glow */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-3xl opacity-40 group-hover/mobile:opacity-70 transition-opacity duration-700 pointer-events-none" />

          {/* Frameless Mobile Screen Canvas (NO fake buttons, NO fake dynamic island) */}
          <div className="relative w-full aspect-[9/16.5] rounded-3xl overflow-hidden bg-[#0c0d12] border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06)] group-hover/mobile:border-cyan-400/40 transition-all duration-500">
            {/* Project Image Viewport */}
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 640px) 300px, 360px"
              className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/mobile:scale-[1.03]"
            />

            {/* Specular Edge Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40 pointer-events-none" />

            {/* Floating Top Telemetry HUD (Minimalist, Real Metrics) */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
              <div className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-1.5 font-mono text-[10px] text-white/90 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>FLUTTER ENGINE · 60FPS</span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/30 font-mono text-[10px] text-cyan-300 shadow-md">
                {project.telemetry?.state || "NATIVE DART"}
              </div>
            </div>

            {/* Interactive Architecture Hotspots */}
            {project.hotspots &&
              project.hotspots.map((hotspot, hIdx) => {
                const isOpen = activeHotspot === hIdx;

                return (
                  <div
                    key={hIdx}
                    className="absolute z-20"
                    style={{
                      left: `${hotspot.xPercent}%`,
                      top: `${hotspot.yPercent}%`,
                    }}
                  >
                    <div className="relative group/hotspot -translate-x-1/2 -translate-y-1/2">
                      {/* Pulse Ring */}
                      <span className="absolute -inset-1 rounded-full bg-cyan-400/40 animate-ping pointer-events-none" />

                      {/* Hotspot Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveHotspot(isOpen ? null : hIdx);
                        }}
                        onMouseEnter={() => setActiveHotspot(hIdx)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shadow-xl backdrop-blur-md transition-all ${
                          isOpen
                            ? "bg-cyan-400 text-black scale-110 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                            : "bg-black/80 text-cyan-300 border border-cyan-400/60 hover:bg-cyan-500 hover:text-black"
                        }`}
                        title={hotspot.title}
                      >
                        +
                      </button>

                      {/* Architecture Tooltip Card */}
                      <div
                        className={`absolute z-30 bottom-9 left-1/2 -translate-x-1/2 w-[220px] p-3 rounded-xl bg-[#11131a]/95 border border-cyan-400/40 shadow-2xl backdrop-blur-xl transition-all duration-200 pointer-events-none ${
                          isOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-[10px] uppercase font-bold mb-1">
                          <Cpu className="w-3 h-3" />
                          <span>{hotspot.title}</span>
                        </div>
                        <p className="font-mono text-[11px] text-white/90 leading-snug">
                          {hotspot.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* Hover Floating Action Pill */}
            <a
              href={project.live || project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center p-4 bg-black/40 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300"
            >
              <div className="px-4 py-2 rounded-full bg-black/85 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-2xl backdrop-blur-md hover:scale-105 transition-transform">
                <span>Open Mobile Experience</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* Under-Screen Flutter Runtime Spec Strip */}
          {project.telemetry && (
            <div className="w-full mt-3 px-3 py-2 rounded-xl bg-surface-container-low/80 border border-white/[0.06] backdrop-blur-md grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-on-surface-variant/60 uppercase">
                  Engine
                </span>
                <span className="font-mono text-[10px] text-primary font-semibold truncate">
                  {project.telemetry.engine?.split(" ")[0] || "Flutter"}
                </span>
              </div>
              <div className="flex flex-col border-x border-white/[0.06]">
                <span className="font-mono text-[9px] text-on-surface-variant/60 uppercase">
                  Storage
                </span>
                <span className="font-mono text-[10px] text-cyan-300 font-semibold truncate">
                  {project.telemetry.storage?.split(" ")[0] || "Supabase"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-on-surface-variant/60 uppercase">
                  VSync
                </span>
                <span className="font-mono text-[10px] text-emerald-400 font-semibold truncate">
                  60.0 FPS
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
