import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { NoiseOverlay } from "@/components/shared/NoiseOverlay";
import { CustomCursor } from "@/components/shared/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Subtle Noise Texture Overlay */}
      <NoiseOverlay />

      {/* Persistent Glass Navigation */}
      <Navbar />

      {/* Continuous Single-Page Journey */}
      <main className="w-full relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      {/* Single Footer at the End of the Page */}
      <Footer />
    </div>
  );
}
