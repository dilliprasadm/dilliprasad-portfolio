"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ShaderBackground } from "@/components/shared/ShaderBackground";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % siteConfig.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePosition({ x, y });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-20 bg-surface"
    >
      {/* Interactive WebGL Shader */}
      <ShaderBackground />

      {/* Surface Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/30 to-surface pointer-events-none z-[1]" />

      {/* Architectural Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[2] max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full h-full">
        <div className="w-full h-full relative">
          <div className="absolute inset-y-0 left-0 w-[1px] bg-outline-variant/15" />
          <div className="absolute inset-y-0 left-1/4 w-[1px] bg-outline-variant/10 hidden md:block" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-outline-variant/10 hidden md:block" />
          <div className="absolute inset-y-0 left-3/4 w-[1px] bg-outline-variant/10 hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-[1px] bg-outline-variant/15" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-24 md:py-32 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative">
          {/* Left Column: Massive Headline & Role */}
          <div className="col-span-1 md:col-span-7 flex flex-col items-start">
            {/* Intro Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-label-technical text-primary uppercase tracking-[0.2em]">
                HELLO, I&apos;M
              </span>
            </motion.div>

            {/* Massive Name with Parallax */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
                transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="relative w-full mb-6"
            >
              <h1 className="font-display text-[64px] sm:text-[88px] md:text-[100px] lg:text-[120px] font-black text-primary leading-[0.92] tracking-tighter text-glow uppercase select-none">
                DILLI<br />PRASAD
              </h1>
            </motion.div>

            {/* Animated Role Cycler */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-12 overflow-hidden mb-6"
            >
              <div
                className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: `translateY(-${currentRoleIndex * 48}px)`,
                }}
              >
                {siteConfig.titles.map((role) => (
                  <div
                    key={role}
                    className="h-12 flex items-center font-display text-[22px] md:text-[26px] font-light italic text-on-surface-variant tracking-wide"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-5 mt-6 md:mt-0"
          >
            <div className="bg-surface-container/40 backdrop-blur-xl p-8 md:p-10 relative border-l border-t border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Top Accent Highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <p className="font-body text-body-md text-on-surface-variant mb-8 leading-relaxed">
                {siteConfig.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, "projects")}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-7 py-3.5 font-mono text-label-technical uppercase tracking-widest hover:bg-primary-fixed-dim hover:-translate-y-[2px] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.12)] group"
                >
                  Explore My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-on-surface border border-outline-variant/60 px-7 py-3.5 font-mono text-label-technical uppercase tracking-widest hover:text-primary hover:border-primary transition-colors group"
                >
                  Let&apos;s Connect
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Availability Status */}
              <div className="inline-flex items-center gap-3 bg-surface-container-high/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/[0.06]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-blue" />
                </span>
                <span className="font-mono text-[11px] tracking-wider text-on-surface-variant uppercase">
                  {siteConfig.availability}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-on-surface-variant uppercase [writing-mode:vertical-rl] mb-2">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-outline-variant/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-primary animate-scrollLine" />
        </div>
      </motion.div>
    </section>
  );
}
