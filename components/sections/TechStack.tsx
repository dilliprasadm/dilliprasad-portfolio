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
  Smartphone,
  Globe,
  Database,
  Sparkles,
  GitBranch,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  Terminal,
  Activity,
  Zap,
} from "lucide-react";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "mobile" | "frontend" | "backend" | "motion" | "devops"
  >("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skillsData[0]);

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "mobile":
        return <Smartphone className="w-3.5 h-3.5" />;
      case "frontend":
        return <Globe className="w-3.5 h-3.5" />;
      case "backend":
        return <Database className="w-3.5 h-3.5" />;
      case "motion":
        return <Sparkles className="w-3.5 h-3.5" />;
      case "devops":
        return <GitBranch className="w-3.5 h-3.5" />;
      default:
        return <Cpu className="w-3.5 h-3.5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Architecture":
        return "text-accent-purple border-accent-purple/30 bg-accent-purple/10";
      case "Production Core":
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
      {/* Background Blueprint Vector Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              height="60"
              id="tech-grid"
              patternUnits="userSpaceOnUse"
              width="60"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#262626"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect fill="url(#tech-grid)" height="100%" width="100%" />
          <line stroke="#262626" strokeWidth="1" x1="15%" x2="15%" y1="0" y2="100%" />
          <line stroke="#262626" strokeWidth="1" x1="85%" x2="85%" y1="0" y2="100%" />
          <circle className="animate-pulse opacity-40" cx="15%" cy="30%" fill="#3B82F6" r="4" />
          <circle className="animate-pulse opacity-40" cx="85%" cy="70%" fill="#3B82F6" r="4" />
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
              <SectionLabel number="03" label="SKILLS & CAPABILITIES" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[48px] sm:text-[68px] md:text-[84px] font-black text-primary leading-[0.92] tracking-tighter uppercase select-none"
            >
              SKILLS &<br />TECHNICAL<br />MASTERY.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[20px] md:text-[24px] font-light text-on-surface-variant max-w-2xl italic leading-relaxed"
            >
              A multi-disciplinary engineering toolkit spanning native Flutter mobile development, modern React/Next.js web architectures, real-time cloud data, and fluid WebGL interactions.
            </motion.p>
          </div>

          {/* Interactive Live Blueprint Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 md:mt-0 flex items-center gap-3 px-6 py-3 rounded-full bg-[#171717]/80 border border-white/[0.06] backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_#3B82F6] animate-pulse" />
            <span className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase font-medium">
              VERIFIED IN PRODUCTION
            </span>
          </motion.div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2 border-b border-white/[0.06]">
          {skillCategoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-[12px] uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-on-primary font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    : "text-on-surface-variant hover:text-primary hover:bg-white/[0.04]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-black/20 text-black font-extrabold"
                      : "bg-surface-container-high text-on-surface-variant"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Interactive Skills Matrix + Live Blueprint HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left / Main Matrix: Skill Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill.id === skill.id;

                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    onClick={() => setSelectedSkill(skill)}
                    className={`relative p-6 rounded-lg border transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                      isSelected
                        ? "bg-surface-container-high/90 border-accent-blue shadow-[0_8px_30px_rgba(59,130,246,0.15)] ring-1 ring-accent-blue/40"
                        : "bg-surface-container-lowest/60 border-white/[0.06] hover:border-white/[0.15] hover:bg-surface-container-low/50"
                    }`}
                  >
                    {/* Top Row: Category Icon & Level Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-on-surface-variant tracking-wider uppercase">
                        {getCategoryIcon(skill.category)}
                        <span>{skill.categoryLabel}</span>
                      </div>

                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded-full border font-medium ${getLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Title & Focus */}
                    <div className="space-y-1.5 mb-4">
                      <h3 className="font-display text-[22px] font-bold text-primary tracking-tight group-hover:text-accent-blue transition-colors">
                        {skill.name}
                      </h3>
                      <p className="font-mono text-[11px] text-accent-blue/90 uppercase tracking-widest">
                        {skill.experience}
                      </p>
                    </div>

                    {/* Brief Capability */}
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5 line-clamp-2">
                      {skill.description}
                    </p>

                    {/* Shipped Projects Tag Pills */}
                    <div className="pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5 items-center">
                      <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-wider mr-1">
                        Projects:
                      </span>
                      {skill.projects.slice(0, 2).map((proj) => (
                        <span
                          key={proj}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-surface-container-high/80 text-on-surface border border-white/[0.04]"
                        >
                          {proj}
                        </span>
                      ))}
                      {skill.projects.length > 2 && (
                        <span className="font-mono text-[10px] text-accent-blue">
                          +{skill.projects.length - 2} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Column: Live Architectural Inspector HUD */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="relative p-7 rounded-xl bg-surface-container-high/40 border border-white/[0.08] backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* Top Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent-blue" />
                  <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest font-semibold">
                    SKILL INSPECTOR HUD
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 uppercase">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Inspector Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] text-accent-blue uppercase tracking-widest">
                      {selectedSkill.categoryLabel}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant" />
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${getLevelColor(
                        selectedSkill.level
                      )}`}
                    >
                      {selectedSkill.level}
                    </span>
                  </div>

                  <h4 className="font-display text-[30px] font-black text-primary tracking-tight leading-tight">
                    {selectedSkill.name}
                  </h4>
                  <p className="font-mono text-[12px] text-on-surface-variant tracking-wider mt-1">
                    Domain: {selectedSkill.experience}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-widest block">
                    Architectural Role & Description
                  </span>
                  <p className="font-body text-base text-on-surface leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-container-lowest/80 border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center gap-2 text-accent-blue font-mono text-[11px] uppercase tracking-wider font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Technical Highlights</span>
                  </div>
                  <p className="font-mono text-[12px] text-on-surface-variant">
                    {selectedSkill.highlight}
                  </p>
                </div>

                {/* Shipped In Real Projects */}
                <div className="space-y-2.5">
                  <span className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-widest block">
                    Shipped In Real Projects ({selectedSkill.projects.length})
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.projects.map((proj) => (
                      <a
                        key={proj}
                        href="#projects"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-surface-container-low border border-white/[0.08] hover:border-accent-blue/50 text-primary font-mono text-[11px] transition-colors group/link"
                      >
                        <span>{proj}</span>
                        <ArrowUpRight className="w-3 h-3 text-on-surface-variant group-hover/link:text-accent-blue transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Engineering Benchmark Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/[0.06]">
          {engineeringHighlights.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-surface-container-lowest/50 border border-white/[0.04] flex flex-col justify-between group hover:border-accent-blue/30 transition-colors"
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
