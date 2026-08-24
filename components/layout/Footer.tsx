import React from "react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-16 border-t border-white/5 relative z-20">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="space-y-2">
            <div className="font-display text-[28px] md:text-[32px] font-black tracking-tighter text-primary">
              {siteConfig.name}
            </div>
            <p className="font-body text-base text-on-surface-variant">
              Frontend Developer & Architect
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label-technical text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase"
            >
              GITHUB
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label-technical text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase"
            >
              LINKEDIN
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-label-technical text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase"
            >
              EMAIL
            </a>
          </div>
        </div>

        {/* Bottom Metadata Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant font-mono text-[11px] tracking-wider uppercase">
          <div className="text-center md:text-left">
            {siteConfig.footer.copyright}
          </div>

          <div className="text-center text-on-surface-variant/60 tracking-[0.2em] hidden lg:block">
            {siteConfig.footer.tagline}
          </div>

          <div className="flex items-center gap-6">
            <span>LOCATED IN {siteConfig.location}</span>
            <span className="w-1 h-1 rounded-full bg-accent-blue" />
            <span className="text-primary">AVAILABLE FOR WORK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
