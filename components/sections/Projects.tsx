"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
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
            A curated portfolio of web experiences, enterprise software, and open-source tooling engineered with precision.
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
                    <div className="font-mono text-label-technical text-on-surface-variant mb-6 tracking-widest">
                      {project.number}
                    </div>

                    <h3 className="font-display text-[32px] sm:text-[40px] md:text-[44px] font-bold text-primary mb-2 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="font-mono text-label-technical text-accent-blue mb-6 uppercase tracking-widest font-medium">
                      {project.category}
                    </p>

                    <p className="font-body text-base md:text-[18px] text-on-surface-variant mb-8 leading-relaxed">
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

                  {/* Project Media */}
                  <motion.div
                    data-cursor="project"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-7/12 overflow-hidden rounded-xl bg-surface-container-lowest border border-white/[0.08] relative group/img shadow-[0_10px_40px_rgba(0,0,0,0.6)] cursor-pointer"
                  >
                    <a
                      href={project.live || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                        className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
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
