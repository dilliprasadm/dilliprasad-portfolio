"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Globe } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-stack-lg bg-surface flex flex-col justify-center overflow-hidden border-t border-white/[0.04]"
    >
      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full h-full z-0 opacity-15">
        <div className="w-[1px] h-full bg-outline-variant" />
        <div className="w-[1px] h-full bg-outline-variant hidden md:block" />
        <div className="w-[1px] h-full bg-outline-variant hidden lg:block" />
        <div className="w-[1px] h-full bg-outline-variant" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop mb-20 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel number="02" label="SELECTED WORK" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-black text-primary lowercase tracking-tighter leading-[0.95] select-none"
            >
              Selected<br />Work
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[20px] md:text-[24px] font-light text-on-surface-variant max-w-md leading-relaxed italic"
          >
            A curated portfolio of web experiences, enterprise platforms, and open-source tooling engineered with precision.
          </motion.p>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="flex flex-col w-full z-10">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <article key={project.id} className="w-full relative group">
              {/* Divider */}
              <div className="h-[1px] w-full bg-surface-container-highest/50" />

              <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-20 md:py-28">
                <div
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-5/12 flex flex-col"
                  >
                    <div className="font-mono text-label-technical text-on-surface-variant mb-6 tracking-widest flex items-center gap-3">
                      <span>{project.number}</span>
                      <span className="w-8 h-[1px] bg-outline-variant/40" />
                      <span className="text-[11px] text-accent-blue font-semibold uppercase">{project.category}</span>
                    </div>

                    <h3 className="font-display text-[32px] sm:text-[40px] md:text-[44px] font-bold text-primary mb-4 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="font-body text-base md:text-[17px] text-on-surface-variant mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 bg-surface-container-low/80 text-on-surface font-mono text-[12px] rounded-sm border border-white/[0.04]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-6">
                      <a
                        href={project.live || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-label-technical text-primary hover:text-accent-blue transition-colors group/btn py-1"
                      >
                        <span className="tracking-widest uppercase font-medium">
                          {project.id === "git-commands" ? "VIEW REPOSITORY" : "VIEW LIVE DEMO"}
                        </span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>

                      {project.github && project.github !== project.live && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-label-technical text-on-surface-variant hover:text-primary transition-colors py-1"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span className="tracking-widest uppercase font-medium">
                            SOURCE CODE
                          </span>
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* High-Resolution Interactive Browser Mockup */}
                  <motion.div
                    data-cursor="project"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-7/12 overflow-hidden rounded-xl bg-surface-container-lowest border border-white/[0.08] relative group/img shadow-[0_12px_45px_rgba(0,0,0,0.65)] hover:border-accent-blue/30 transition-colors duration-500 flex flex-col"
                  >
                    {/* macOS Browser Header */}
                    <div className="w-full bg-surface-container-high/60 border-b border-white/[0.06] px-4 py-2.5 flex items-center justify-between backdrop-blur-md">
                      {/* Window Controls */}
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      </div>

                      {/* URL Bar */}
                      <a
                        href={project.live || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-lowest/80 border border-white/[0.06] hover:border-accent-blue/40 transition-colors group/url max-w-[280px] sm:max-w-[340px] truncate"
                      >
                        <Globe className="w-3 h-3 text-on-surface-variant group-hover/url:text-accent-blue transition-colors flex-shrink-0" />
                        <span className="font-mono text-[11px] text-on-surface-variant group-hover/url:text-primary transition-colors truncate">
                          {project.displayUrl || "preview"}
                        </span>
                        <ExternalLink className="w-2.5 h-2.5 text-on-surface-variant/50 group-hover/url:text-accent-blue transition-colors ml-auto flex-shrink-0" />
                      </a>

                      {/* Live Indicator */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest hidden sm:inline">
                          LIVE
                        </span>
                      </div>
                    </div>

                    {/* Screenshot Viewport */}
                    <a
                      href={project.live || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full aspect-[16/10] overflow-hidden bg-surface-container-lowest"
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                        priority={index < 2}
                        className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 pointer-events-none" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </article>
          );
        })}
        {/* Bottom divider */}
        <div className="h-[1px] w-full bg-surface-container-highest/50" />
      </div>
    </section>
  );
}
