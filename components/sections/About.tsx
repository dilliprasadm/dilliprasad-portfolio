"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { siteConfig } from "@/lib/site";

const coreFocusItems = [
  { number: "01", title: "Frontend Development" },
  { number: "02", title: "UI Engineering" },
  { number: "03", title: "Interactive Experiences" },
  { number: "04", Performance: "Performance & Quality", title: "Performance & Quality" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-stack-lg flex flex-col justify-center overflow-hidden bg-surface border-t border-white/[0.04]"
    >
      {/* Blueprint Grid & Ambient Glow */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none -z-10" />
      <div className="absolute -right-[15%] top-[10%] w-[55%] h-[75%] rounded-full bg-gradient-to-tr from-accent-blue/10 to-transparent blur-[140px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <SectionLabel number="01" label="ABOUT" />
        </motion.div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Massive Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-8 z-10"
          >
            <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] lg:text-[108px] font-black leading-[0.92] tracking-tighter text-on-surface select-none">
              <span className="block text-on-surface-variant/80">I DON&apos;T JUST</span>
              <span className="block relative group my-1">
                <span className="relative z-10 text-primary group-hover:text-accent-blue transition-colors duration-500 text-glow">
                  BUILD
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </span>
              <span className="block text-on-surface-variant/80">INTERFACES.</span>
              <span className="block text-primary mt-2">I BUILD</span>
              <span className="block relative inline-block my-2">
                <span className="relative z-10 text-primary text-glow-blue px-2">
                  EXPERIENCES
                </span>
                <svg
                  className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] text-accent-blue/40 pointer-events-none stroke-[0.75]"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <rect
                    fill="none"
                    height="94"
                    stroke="currentColor"
                    vectorEffect="non-scaling-stroke"
                    width="94"
                    x="3"
                    y="3"
                  />
                </svg>
              </span>
              <span className="block text-on-surface-variant/80 text-[36px] sm:text-[52px] md:text-[68px] mt-4 font-bold">
                PEOPLE WANT TO USE.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Bio & Core Focus Rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-4 flex flex-col gap-12 mt-8 lg:mt-24 relative z-10"
          >
            {/* Bio Glass Card */}
            <div className="space-y-6 relative p-8 bg-surface-container-low/40 backdrop-blur-xl border border-white/[0.06]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              <h3 className="font-mono text-[13px] tracking-widest text-primary flex items-center gap-3 uppercase">
                <span className="w-2 h-2 rounded-full bg-accent-blue relative">
                  <span className="absolute inset-0 rounded-full bg-accent-blue animate-ping opacity-75" />
                </span>
                FRONTEND DEVELOPER
              </h3>

              <p className="font-body text-[17px] md:text-[19px] leading-relaxed text-on-surface-variant font-light">
                I&apos;m <strong className="text-primary font-medium">Dilli Prasad</strong>, a Frontend Developer passionate about transforming complex ideas into modern, responsive, and interactive digital products. I focus on the intersection of technical precision and visual elegance.
              </p>
            </div>

            {/* Core Focus Interactive List */}
            <div className="space-y-0">
              <div className="font-mono text-xs text-outline tracking-[0.2em] mb-6 uppercase flex items-center gap-3">
                <span>Core Focus</span>
                <span className="flex-grow h-[1px] bg-outline-variant/30" />
              </div>

              {coreFocusItems.map((item) => (
                <div
                  key={item.number}
                  className="group relative py-6 border-b border-surface-variant/40 hover:bg-surface-container/40 transition-colors duration-300 cursor-pointer flex justify-between items-center px-4 -mx-4 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-accent-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="flex items-center gap-6 relative z-10">
                    <span className="font-mono text-outline/60 group-hover:text-accent-blue transition-colors text-sm font-medium">
                      {item.number}
                    </span>
                    <span className="font-display text-[22px] text-on-surface-variant group-hover:text-primary transition-colors font-medium">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-outline/60 group-hover:text-accent-blue transition-all duration-300 transform group-hover:translate-x-1.5 relative z-10" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Rotating Blueprint Reticle Decoration */}
        <div className="absolute bottom-6 right-10 lg:right-margin-desktop w-28 h-28 opacity-15 pointer-events-none hidden md:block">
          <svg
            className="w-full h-full text-primary animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M50 0 A50 50 0 1 1 49.99 0 Z M50 10 A40 40 0 1 0 50.01 10 Z"
              fill="currentColor"
              fillRule="evenodd"
            />
            <rect height="100" width="1.5" x="49.25" y="0" fill="currentColor" />
            <rect height="1.5" width="100" x="0" y="49.25" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
