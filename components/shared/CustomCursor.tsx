"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastX = -1;
    let lastY = -1;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "rgba(59, 130, 246, ",  // Electric Blue
      "rgba(168, 85, 247, ", // Soft Purple
      "rgba(255, 255, 255, ", // White
    ];

    const addParticles = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        const colorBase = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed * 0.4,
          vy: Math.sin(angle) * speed * 0.4 - 0.2,
          size: Math.random() * 2.5 + 1.2,
          alpha: 0.85,
          color: colorBase,
        });
      }

      // Limit particle count for high 60fps performance
      if (particles.length > 80) {
        particles = particles.slice(particles.length - 80);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lastX !== -1 && lastY !== -1) {
        const dist = Math.hypot(x - lastX, y - lastY);
        // Add more particles when moving faster
        const count = Math.min(Math.floor(dist / 8) + 1, 4);
        addParticles(x, y, count);
      } else {
        addParticles(x, y, 2);
      }

      lastX = x;
      lastY = y;
    };

    const handleScroll = () => {
      if (lastX !== -1 && lastY !== -1) {
        addParticles(lastX, lastY, 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.022; // Smooth fade out
        p.size = Math.max(0, p.size - 0.03);

        if (p.alpha <= 0 || p.size <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#3B82F6";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[999999] block hidden md:block"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
