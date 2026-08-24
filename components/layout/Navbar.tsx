"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["home", "about", "projects", "experience", "tech-stack", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav bg-[#0e0e0e]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#141313]/60 backdrop-blur-md border-b border-white/[0.04]"
        }`}
      >
        <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-10 lg:gap-12">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center group cursor-pointer"
              aria-label="Dilli Prasad Home"
            >
              <div className="w-10 h-10 border border-outline/30 flex items-center justify-center font-display font-black text-[20px] tracking-tighter text-primary group-hover:border-primary transition-colors bg-surface-container-lowest/50">
                DP
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {siteConfig.navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-mono text-label-technical uppercase tracking-[0.15em] transition-all relative py-2 ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Socials, CTA, & Mobile Hamburger */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 font-mono text-label-technical uppercase tracking-widest hover:bg-primary-fixed-dim transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.08)]"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors border border-white/10 rounded-sm"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-20 z-40 bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-white/10 lg:hidden px-margin-mobile py-8 flex flex-col gap-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {siteConfig.navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-mono text-base uppercase tracking-widest py-3 border-b border-white/5 flex items-center justify-between ${
                      isActive ? "text-primary font-bold pl-2 border-l-2 border-primary" : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-6">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs"
                >
                  <Github className="w-4 h-4" /> GITHUB
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs"
                >
                  <Linkedin className="w-4 h-4" /> LINKEDIN
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="bg-primary text-on-primary px-4 py-2 font-mono text-xs uppercase tracking-widest"
              >
                LET&apos;S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
