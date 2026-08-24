"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { experiences, progressionSteps } from "@/lib/experience";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  return (
    <section
      id="experience"
      className="relative w-full py-stack-lg bg-surface text-on-surface flex flex-col justify-center overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient Section Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen opacity-30 -z-10">
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-transparent blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tl from-accent-blue/15 via-accent-purple/5 to-transparent blur-[140px]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <SectionLabel number="03" label="EXPERIENCE" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 relative hidden sm:block"
          >
            <span className="block font-display text-[96px] md:text-[140px] font-black text-surface-container-high tracking-tighter leading-none select-none">
              03
            </span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[42px] sm:text-[56px] md:text-[68px] font-black text-primary leading-[0.95] tracking-tight mb-6"
            >
              BUILDING.<br />
              <span className="text-on-surface-variant/70">LEARNING.</span><br />
              SHIPPING.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[20px] md:text-[24px] font-light text-on-surface-variant max-w-2xl leading-relaxed italic"
            >
              A growing journey of building products, solving problems, and turning ideas into working digital experiences.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Progression Timeline Container */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex mb-24">
        {/* Left Axis / Tech Progression */}
        <div className="hidden lg:flex flex-col w-32 shrink-0 border-r border-surface-container-highest/60 relative pr-8">
          <div className="sticky top-40 flex flex-col items-end gap-16">
            <div className="flex flex-col items-end gap-4 text-on-surface-variant font-mono text-[11px] tracking-widest text-right">
              <span className="text-primary font-bold">JS</span>
              <ArrowDown className="w-3.5 h-3.5 text-accent-blue" />
              <span>REACT</span>
              <ArrowDown className="w-3.5 h-3.5 text-accent-blue" />
              <span>NEXT.JS</span>
            </div>

            {/* Abstract Tech Stack Vector */}
            <div className="w-full flex justify-end opacity-30">
              <svg height="120" viewBox="0 0 40 120" width="40">
                <path
                  d="M40 0 L40 120 M30 20 L40 20 M20 60 L40 60 M10 100 L40 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="flex-1 lg:pl-16 flex flex-col gap-20 relative">
          {/* Vertical Connector Line */}
          <div className="absolute left-0 lg:left-16 top-4 bottom-4 w-[1px] bg-surface-container-highest/60" />

          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative pl-8 md:pl-16 group"
              >
                {/* Node Dot */}
                <div className="absolute left-0 top-3 w-3 h-3 bg-surface border border-primary rounded-full -translate-x-1.5 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-150 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]" />

                {/* Timeline Heading */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-accent-blue mb-1 tracking-widest uppercase font-medium">
                      {exp.period}
                    </span>
                    <h3 className="font-display text-[26px] md:text-[32px] font-bold text-primary tracking-tight leading-snug">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="px-3.5 py-1 bg-surface-container text-on-surface-variant font-mono text-[11px] rounded-sm border border-surface-container-highest tracking-wider uppercase font-medium">
                    {exp.company}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="bg-surface-container-low/40 backdrop-blur-xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 border border-white/[0.06] group-hover:border-white/[0.12] group-hover:bg-surface-container-low/70">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-blue/30" />

                  <p className="font-body text-base md:text-[18px] text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-x-12 gap-y-6 mb-6">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-xs text-surface-tint tracking-widest uppercase">
                        FOCUS
                      </span>
                      <span className="font-body text-primary font-medium">
                        {exp.focus}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-xs text-surface-tint tracking-widest uppercase">
                        DOMAIN
                      </span>
                      <span className="font-body text-primary font-medium">
                        {exp.domain}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Contributions */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-surface-container-highest/60 pt-6 mt-4"
                      >
                        <span className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-3 font-medium">
                          NOTABLE CONTRIBUTIONS /
                        </span>
                        <ul className="font-body text-on-surface-variant text-sm space-y-2.5 list-none">
                          {exp.contributions.map((c, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="mt-6 font-mono text-[11px] text-accent-blue/80 hover:text-accent-blue transition-colors flex items-center gap-1 uppercase tracking-widest cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        <span>COLLAPSE CONTRIBUTIONS</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>VIEW CONTRIBUTIONS</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progression Path Visual Storytelling Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 overflow-hidden py-12 border-t border-surface-container-highest/60"
      >
        <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-between gap-6 relative z-10">
          <div className="font-mono text-xs text-surface-tint tracking-[0.2em] uppercase font-medium">
            PROGRESSION PATH //
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 md:gap-8 font-display text-[18px] sm:text-[24px] md:text-[28px] font-bold text-surface-container-highest tracking-tight">
            {progressionSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="hover:text-primary transition-colors duration-500 cursor-default text-on-surface-variant/60">
                  {step}
                </span>
                {idx < progressionSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-accent-blue/40 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
