"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Smartphone, Globe, Terminal, Code2 } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { projects } from "@/lib/projects";
import { MobileMockup } from "@/components/sections/projects/MobileMockup";
import { BrowserMockup } from "@/components/sections/projects/BrowserMockup";
import { TerminalMockup } from "@/components/sections/projects/TerminalMockup";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "mobile" | "web" | "docs">("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  const mobileCount = projects.filter((p) => p.type === "mobile").length;
  const webCount = projects.filter((p) => p.type === "web").length;
  const docsCount = projects.filter((p) => p.type === "docs").length;

  return (
    <section
      id="projects"
      className="relative w-full py-stack-lg bg-surface flex flex-col justify-center overflow-hidden border-t border-white/[0.04]"
    >
      {/* Architectural Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full h-full z-0 opacity-15">
        <div className="w-[1px] h-full bg-outline-variant" />
        <div className="w-[1px] h-full bg-outline-variant hidden md:block" />
        <div className="w-[1px] h-full bg-outline-variant hidden lg:block" />
        <div className="w-[1px] h-full bg-outline-variant" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop mb-14 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel number="02" label="SELECTED WORK & ARCHITECTURES" />
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-6 max-w-lg"
          >
            <p className="font-display text-[20px] md:text-[24px] font-light text-on-surface-variant leading-relaxed italic text-left md:text-right">
              Tailored engineering showcases for production web platforms, native mobile architectures, and open-source developer tooling & docs.
            </p>

            {/* Differentiated Category Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container-low/80 border border-white/[0.08] rounded-xl backdrop-blur-md shadow-lg">
              {/* All */}
              <button
                onClick={() => setActiveFilter("all")}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg transition-all duration-300 ${
                  activeFilter === "all"
                    ? "bg-primary text-on-primary font-bold shadow-md"
                    : "text-on-surface-variant hover:text-primary hover:bg-white/[0.04]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All ({projects.length})</span>
              </button>

              {/* Web Platforms */}
              <button
                onClick={() => setActiveFilter("web")}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg transition-all duration-300 ${
                  activeFilter === "web"
                    ? "bg-primary text-on-primary font-bold shadow-md"
                    : "text-on-surface-variant hover:text-primary hover:bg-white/[0.04]"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Web ({webCount})</span>
              </button>

              {/* Mobile Apps */}
              <button
                onClick={() => setActiveFilter("mobile")}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg transition-all duration-300 ${
                  activeFilter === "mobile"
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "text-on-surface-variant hover:text-cyan-400 hover:bg-white/[0.04]"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Apps ({mobileCount})</span>
              </button>

              {/* Developer Tools & Docs */}
              <button
                onClick={() => setActiveFilter("docs")}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg transition-all duration-300 ${
                  activeFilter === "docs"
                    ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                    : "text-on-surface-variant hover:text-amber-400 hover:bg-white/[0.04]"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Tools & Docs ({docsCount})</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Differentiated Projects Showcase Feed */}
      <div className="flex flex-col w-full z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full relative group"
              >
                {/* Horizontal Divider Line */}
                <div className="h-[1px] w-full bg-surface-container-highest/50" />

                <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-20 md:py-28">
                  {/* Category-Adaptive Presentation */}
                  {project.type === "mobile" && (
                    <MobileMockup project={project} isEven={isEven} />
                  )}

                  {project.type === "web" && (
                    <BrowserMockup project={project} isEven={isEven} />
                  )}

                  {project.type === "docs" && (
                    <TerminalMockup project={project} isEven={isEven} />
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>

        {/* Bottom Section Divider */}
        <div className="h-[1px] w-full bg-surface-container-highest/50" />
      </div>
    </section>
  );
}
