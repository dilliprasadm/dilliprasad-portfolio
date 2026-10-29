"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import {
  skillsData,
  skillCategoriesList,
  engineeringHighlights,
  Skill,
} from "@/lib/skills";
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  SqlIcon,
  NextjsIcon,
  TailwindIcon,
  HtmlIcon,
  FlutterIcon,
  DartIcon,
  SupabaseIcon,
  FirebaseIcon,
  GitIcon,
  FramerMotionIcon,
  WebglIcon,
  VercelIcon,
  CodeChipIcon,
} from "@/components/shared/TechIcons";
import {
  Smartphone,
  Globe,
  Database,
  Sparkles,
  GitBranch,
  Layers,
  ArrowUpRight,
  Flame,
  Printer,
  MousePointer2,
  Gauge,
  Workflow,
  Cpu,
} from "lucide-react";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "web" | "mobile" | "backend" | "motion" | "devops"
  >("all");
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const renderSkillIcon = (iconType: string, className = "w-7 h-7") => {
    switch (iconType) {
      case "react":
        return <ReactIcon className={className} />;
      case "javascript":
        return <JavaScriptIcon className={className} />;
      case "typescript":
        return <TypeScriptIcon className={className} />;
      case "python":
        return <PythonIcon className={className} />;
      case "sql":
        return <SqlIcon className={className} />;
      case "nextjs":
        return <NextjsIcon className={className} />;
      case "tailwind":
        return <TailwindIcon className={className} />;
      case "html":
        return <HtmlIcon className={className} />;
      case "flutter":
        return <FlutterIcon className={className} />;
      case "dart":
        return <DartIcon className={className} />;
      case "supabase":
        return <SupabaseIcon className={className} />;
      case "firebase":
        return <FirebaseIcon className={className} />;
      case "git":
        return <GitIcon className={className} />;
      case "framer":
        return <FramerMotionIcon className={className} />;
      case "webgl":
        return <WebglIcon className={className} />;
      case "vercel":
        return <VercelIcon className={className} />;
      case "flame":
        return <Flame className={`${className} text-[#FF5722]`} />;
      case "printer":
        return <Printer className={`${className} text-[#A855F7]`} />;
      case "scroll":
        return <MousePointer2 className={`${className} text-[#E2E8F0]`} />;
      case "gauge":
        return <Gauge className={`${className} text-[#10B981]`} />;
      case "architecture":
        return <Workflow className={`${className} text-[#6366F1]`} />;
      default:
        return <CodeChipIcon className={className} />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Architecture":
        return "text-accent-purple border-accent-purple/30 bg-accent-purple/10";
      case "Core Production":
        return "text-accent-blue border-accent-blue/30 bg-accent-blue/10";
      case "Advanced":
        return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
      default:
        return "text-primary border-white/10 bg-white/5";
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full py-stack-lg bg-background text-on-surface flex flex-col justify-center overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background Blueprint Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              height="60"
              id="blueprint-grid"
              patternUnits="userSpaceOnUse"
              width="60"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect fill="url(#blueprint-grid)" height="100%" width="100%" />
        </svg>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel number="03" label="SKILLS & ARCHITECTURE" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[48px] sm:text-[68px] md:text-[84px] font-black text-primary leading-[0.92] tracking-tighter uppercase select-none"
            >
              ENGINEERED<br />TO SHIP.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[20px] md:text-[24px] font-light text-on-surface-variant max-w-2xl italic leading-relaxed"
            >
              Mastery across modern web engineering (React, TypeScript, Python, SQL), native cross-platform mobile apps (Flutter, Dart), and real-time cloud backends.
            </motion.p>
          </div>

          {/* Live Indicator Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 md:mt-0 flex items-center gap-3 px-6 py-3 rounded-full bg-[#141414]/90 border border-white/[0.08] backdrop-blur-md shadow-lg"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981] animate-pulse" />
            <span className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase font-medium">
              PRODUCTION SHIPPED · 2026
            </span>
          </motion.div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14 pb-4 border-b border-white/[0.06]">
          {skillCategoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-md font-mono text-[12px] uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-on-primary font-bold shadow-[0_0_20px_rgba(255,255,255,0.18)] translate-y-[-1px]"
                    : "text-on-surface-variant hover:text-primary hover:bg-white/[0.05] border border-white/[0.04]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-black/25 text-black"
                      : "bg-surface-container-high text-on-surface-variant/80"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid: Clean Modern Interactive Tech Tiles */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const isHovered = hoveredSkillId === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                  onMouseEnter={() => setHoveredSkillId(skill.id)}
                  onMouseLeave={() => setHoveredSkillId(null)}
                  className="relative p-6 rounded-xl border border-white/[0.07] bg-surface-container-lowest/70 hover:bg-surface-container-low/80 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
                >
                  {/* Ambient Brand Color Radial Glow on Hover */}
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[60px] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: skill.brandColor }}
                  />

                  <div>
                    {/* Header: Official Logo Tile + Level Badge */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      {/* Logo Frame */}
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high/60 border border-white/[0.08] flex items-center justify-center p-2.5 shadow-inner group-hover:border-white/20 group-hover:scale-105 transition-all duration-300">
                        {renderSkillIcon(skill.iconType, "w-7 h-7")}
                      </div>

                      {/* Level Badge */}
                      <span
                        className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border font-medium ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Title & Domain */}
                    <div className="space-y-1 mb-3">
                      <h3 className="font-display text-[22px] font-bold text-primary tracking-tight group-hover:text-accent-blue transition-colors">
                        {skill.name}
                      </h3>
                      <p className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase">
                        {skill.experience}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-body text-[13px] text-on-surface-variant/90 leading-relaxed mb-5">
                      {skill.description}
                    </p>
                  </div>

                  {/* Shipped In Real Projects */}
                  <div className="pt-3 border-t border-white/[0.05] mt-auto">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="font-mono text-[9px] text-on-surface-variant/60 uppercase tracking-widest font-semibold">
                        Shipped In
                      </span>
                      <span className="w-1 h-1 rounded-full bg-accent-blue/60" />
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.projects.map((proj) => (
                        <a
                          key={proj}
                          href="#projects"
                          className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-surface-container-high/90 text-on-surface/90 border border-white/[0.05] hover:border-accent-blue/50 hover:text-accent-blue transition-colors flex items-center gap-1"
                        >
                          <span>{proj}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Engineering Benchmark Metrics Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/[0.06]">
          {engineeringHighlights.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-surface-container-lowest/60 border border-white/[0.05] flex flex-col justify-between group hover:border-accent-blue/40 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="font-display text-[38px] md:text-[44px] font-black text-primary group-hover:text-accent-blue transition-colors tracking-tight">
                  {stat.metric}
                </div>
                <div className="font-mono text-[12px] text-primary uppercase tracking-widest font-semibold mt-1 mb-2">
                  {stat.label}
                </div>
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
