"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Terminal, Copy, Check, BookOpen, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/lib/projects";

interface TerminalMockupProps {
  project: Project;
  isEven: boolean;
}

export function TerminalMockup({ project, isEven }: TerminalMockupProps) {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const snippetString = project.terminalSnippet ? project.terminalSnippet.join("\n") : "$ git status";

  return (
    <div
      className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Project Narrative & Tooling Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-5/12 flex flex-col"
      >
        {/* Meta Header */}
        <div className="font-mono text-label-technical text-on-surface-variant mb-6 tracking-widest flex items-center gap-3">
          <span>{project.number}</span>
          <span className="w-8 h-[1px] bg-outline-variant/40" />
          <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full border text-amber-400 border-amber-400/30 bg-amber-400/10 flex items-center gap-1.5 shadow-[0_0_12px_rgba(251,191,36,0.15)]">
            <Terminal className="w-3 h-3 text-amber-400" />
            <span>Developer Docs & Tools</span>
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

        {/* Architecture Highlights with Checkmarks */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 mb-8 p-4 rounded-xl bg-surface-container-low/60 border border-white/[0.05] backdrop-blur-md">
            <span className="font-mono text-[10px] text-amber-400/80 uppercase tracking-widest block font-bold mb-2">
              Technical Documentation Specs
            </span>
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-on-surface/90 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
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
              className="px-3 py-1 bg-surface-container-low text-on-surface font-mono text-[11px] rounded-md border border-white/[0.06] hover:border-amber-400/30 transition-colors"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-mono text-[12px] font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] active:scale-95 group/btn"
          >
            <span>
              {project.id === "git-commands" ? "View Git Guide & Repo" : "Launch Utility Tool"}
            </span>
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
                GitHub Repository
              </span>
            </a>
          )}
        </div>
      </motion.div>

      {/* Cybernetic Developer Terminal Frame */}
      <motion.div
        data-cursor="project"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-7/12"
      >
        <div className="relative group/term">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover/term:opacity-60 transition-opacity duration-700 pointer-events-none" />

          {/* Terminal Box */}
          <div className="relative w-full overflow-hidden rounded-xl bg-[#0c0d12] border border-white/[0.09] shadow-[0_16px_50px_rgba(0,0,0,0.8)] group-hover/term:border-amber-400/40 transition-all duration-500 flex flex-col">
            {/* Terminal Window Chrome */}
            <div className="w-full bg-[#13151d] border-b border-white/[0.08] px-4 py-3 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              </div>

              {/* Terminal Title Pill */}
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-black/60 border border-white/[0.06] font-mono text-[11px] text-amber-300/90">
                <Terminal className="w-3 h-3 text-amber-400" />
                <span>dilliprasad ~ {project.id}.md</span>
              </div>

              {/* Copy Snippet Button */}
              <button
                onClick={() => handleCopy(snippetString)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-[10px] font-mono text-on-surface-variant hover:text-white transition-all active:scale-95"
                title="Copy code commands"
              >
                {copiedSnippet ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Interactive Code Snippet Area */}
            {project.terminalSnippet && (
              <div className="bg-[#090a0f] border-b border-white/[0.06] p-4 font-mono text-xs text-amber-300/90 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-on-surface-variant/60 uppercase tracking-widest pb-1 border-b border-white/[0.04]">
                  <span>Interactive Terminal Snippet</span>
                  <span className="text-emerald-400">● Verified</span>
                </div>
                {project.terminalSnippet.map((line, lIdx) => (
                  <div key={lIdx} className="flex items-center gap-2 font-mono">
                    <span className="text-on-surface-variant/50 select-none">&gt;</span>
                    <span className="text-primary/95">{line}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Media Viewport Preview */}
            <a
              href={project.live || project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-[16/9] overflow-hidden bg-black group/view"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/view:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Hover Floating Action Pill */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover/view:opacity-100 transition-all duration-300 translate-y-2 group-hover/view:translate-y-0">
                <div className="px-4 py-2 rounded-full bg-black/90 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <span>Open Documentation & Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
