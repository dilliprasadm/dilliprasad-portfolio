"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { primarySkills, skillCategories } from "@/lib/skills";

const columnWaveConfig = [
  {
    staggerClass: "mt-0",
    waveDelayClass: "tech-wave-card-1",
    isPrimaryAccent: true,
    hasDot: false,
  },
  {
    staggerClass: "mt-12 md:mt-24",
    waveDelayClass: "tech-wave-card-2",
    isPrimaryAccent: false,
    hasDot: false,
  },
  {
    staggerClass: "mt-6 md:-mt-8 lg:-mt-12",
    waveDelayClass: "tech-wave-card-3",
    isPrimaryAccent: false,
    hasDot: false,
  },
  {
    staggerClass: "mt-16 md:mt-12",
    waveDelayClass: "tech-wave-card-4",
    isPrimaryAccent: false,
    hasDot: true,
  },
];

export function TechStack() {
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  return (
    <section
      id="tech-stack"
      className="relative w-full py-stack-lg bg-background text-on-surface flex flex-col justify-center overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background Tech Vector Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="60" id="tech-grid" patternUnits="userSpaceOnUse" width="60">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#262626" strokeWidth="0.5" />
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 relative">
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel number="04" label="TECH STACK" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[48px] sm:text-[68px] md:text-[84px] font-black text-primary leading-[0.92] tracking-tighter uppercase select-none"
            >
              THE TOOLS<br />BEHIND<br />THE WORK.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[20px] md:text-[24px] font-light text-on-surface-variant max-w-xl italic leading-relaxed"
            >
              A focused toolkit for building modern, responsive, scalable, and interactive digital experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 md:mt-0 flex items-center gap-3 px-6 py-3 rounded-full bg-[#171717]/80 border border-white/[0.06] backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_#3B82F6] animate-pulse" />
            <span className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase font-medium">
              CURRENT TOOLKIT / 2026
            </span>
          </motion.div>
        </div>

        {/* Primary Tech Ecosystem Banner (Static - Not Floating) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-6 items-baseline justify-center border-y border-[#262626] py-14 relative overflow-hidden group">
            {/* Hover sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            {primarySkills.map((skill, index) => (
              <React.Fragment key={skill.name}>
                <span
                  onMouseEnter={() => setActiveDetail(skill.detail)}
                  onMouseLeave={() => setActiveDetail(null)}
                  className="font-display text-[42px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-black text-primary hover:text-accent-blue transition-colors cursor-crosshair relative inline-block group/item select-none"
                >
                  {skill.name}
                  {skill.version && (
                    <span className="absolute -top-3 -right-5 font-mono text-[11px] text-on-surface-variant opacity-0 group-hover/item:opacity-100 transition-opacity font-normal">
                      {skill.version}
                    </span>
                  )}
                </span>
                {index < primarySkills.length - 1 && (
                  <span className="text-on-surface-variant/30 text-[32px] md:text-[60px] hidden sm:inline select-none">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Dynamic Active Detail Indicator */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 -bottom-3 font-mono text-label-technical text-accent-blue tracking-widest bg-background px-4 py-1 border border-accent-blue/30 transition-opacity duration-300 pointer-events-none uppercase ${
              activeDetail ? "opacity-100" : "opacity-0"
            }`}
          >
            {activeDetail || "HOVER TO INSPECT"}
          </div>
        </motion.div>

        {/* 4 Categorized Columns with Undulating Wave Floating Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start pt-6 pb-16">
          {skillCategories.map((category, index) => {
            const config = columnWaveConfig[index % columnWaveConfig.length];

            return (
              <div
                key={category.id}
                className={`tech-wave-card ${config.waveDelayClass} ${config.staggerClass} relative group pl-6`}
              >
                {/* Left Architectural Accent Line */}
                <div
                  className={`absolute left-0 top-0 w-[2px] h-full transition-all duration-500 ${
                    config.isPrimaryAccent
                      ? "bg-accent-blue shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                      : "bg-[#262626] group-hover:bg-accent-blue group-hover:shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                  }`}
                />

                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] text-on-surface-variant tracking-widest font-medium">
                      {category.number}
                    </div>
                    <h3 className="font-display text-[24px] md:text-[26px] font-bold text-primary tracking-tight flex items-center gap-2">
                      <span>{category.title}</span>
                      {config.hasDot && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_#3B82F6] animate-pulse inline-block" />
                      )}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-4 font-body text-[17px] text-on-surface-variant">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="hover:text-primary transition-colors cursor-default flex justify-between items-center group/item py-0.5"
                      >
                        <span>{skill}</span>
                        <span className="w-0 group-hover/item:w-8 h-[1px] bg-accent-blue transition-all duration-300 block" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
