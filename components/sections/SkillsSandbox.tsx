"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";
import { Skill, skillsData } from "@/lib/skills";
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
  NodeIcon,
  PostgresIcon,
  ThreejsIcon,
  SqliteIcon,
  VscodeIcon,
  RestApiIcon,
  CodeChipIcon,
} from "@/components/shared/TechIcons";
import {
  Sparkles,
  RotateCcw,
  Compass,
  Magnet,
  Zap,
  ArrowUpRight,
  Flame,
  Printer,
  MousePointer2,
  Gauge,
  Workflow,
  X,
  Maximize2,
} from "lucide-react";

interface SkillsSandboxProps {
  activeCategory: "all" | "web" | "mobile" | "backend" | "motion" | "devops";
  onSelectSkill?: (skill: Skill) => void;
}

// Inter-skill connection links for constellation laser canvas
const SKILL_CONNECTIONS: [string, string][] = [
  ["react", "nextjs"],
  ["react", "typescript"],
  ["react", "javascript"],
  ["react", "tailwind-css"],
  ["javascript", "typescript"],
  ["python", "sql"],
  ["flutter", "dart"],
  ["flutter", "riverpod"],
  ["flutter", "provider"],
  ["flutter", "offline-sqlite"],
  ["supabase", "sql"],
  ["firebase", "react"],
  ["supabase", "rest-apis"],
  ["framer-motion", "react"],
  ["webgl-shaders", "canvas-particles"],
  ["git-github", "vercel-edge"],
  ["nextjs", "vercel-edge"],
  ["offline-sqlite", "sql"],
];

export function SkillsSandbox({
  activeCategory,
  onSelectSkill,
}: SkillsSandboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pillRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodyMap = useRef<Map<string, Matter.Body>>(new Map());
  const dimensionsRef = useRef({ width: 900, height: 560 });

  const [selectedSkill, setSelectedSkill] = useState<Skill>(skillsData[0]); // Default React
  const [isHudOpen, setIsHudOpen] = useState(true);
  const [gravityMode, setGravityMode] = useState<"normal" | "zero" | "invert">(
    "normal"
  );
  const [draggedSkillId, setDraggedSkillId] = useState<string | null>(null);

  // Helper to render the authentic vector logo
  const renderSkillIcon = (iconType: string, className = "w-5 h-5") => {
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
      case "node":
        return <NodeIcon className={className} />;
      case "postgres":
        return <PostgresIcon className={className} />;
      case "threejs":
        return <ThreejsIcon className={className} />;
      case "sqlite":
        return <SqliteIcon className={className} />;
      case "vscode":
        return <VscodeIcon className={className} />;
      case "api":
        return <RestApiIcon className={className} />;
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
      case "sparkles":
        return <Sparkles className={`${className} text-[#38BDF8]`} />;
      default:
        return <CodeChipIcon className={className} />;
    }
  };

  // Setup Matter.js Physics Engine & Loop
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth > 0 ? container.clientWidth : 960;
    const height = container.clientHeight > 0 ? container.clientHeight : 560;
    dimensionsRef.current = { width, height };

    // 1. Create Physics Engine
    const engine = Matter.Engine.create({
      gravity: {
        x: 0,
        y: 0.9,
        scale: 0.001,
      },
    });
    engineRef.current = engine;
    const world = engine.world;

    // 2. Setup Background Canvas
    const canvas = canvasRef.current;
    let ctx: CanvasRenderingContext2D | null = null;
    if (canvas) {
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
    }

    // 3. Thick Impenetrable Boundary Walls (150px thick)
    const wallThickness = 150;
    const wallOptions: Matter.IChamferableBodyDefinition = {
      isStatic: true,
      restitution: 0.8,
      friction: 0.2,
      render: { visible: false },
    };

    const ground = Matter.Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width * 3,
      wallThickness,
      wallOptions
    );
    const ceiling = Matter.Bodies.rectangle(
      width / 2,
      -wallThickness / 2,
      width * 3,
      wallThickness,
      wallOptions
    );
    const leftWall = Matter.Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height * 3,
      wallOptions
    );
    const rightWall = Matter.Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 3,
      wallOptions
    );

    Matter.Composite.add(world, [ground, ceiling, leftWall, rightWall]);

    // 4. Create Bodies for all 26 Skills
    // CRITICAL: Spawn EVERY skill inside the visible arena [y = 45 to y = 285]
    // Web & Core skills (React, JS, TS, Python, SQL) occupy row 0 front-and-center!
    const bodies: Matter.Body[] = [];
    const newBodyMap = new Map<string, Matter.Body>();

    const cols = Math.max(3, Math.min(6, Math.floor((width - 60) / 180)));
    const colWidth = (width - 80) / cols;

    skillsData.forEach((skill, index) => {
      const pillWidth = Math.max(145, Math.min(215, skill.name.length * 8.5 + 74));
      const pillHeight = 48;

      const col = index % cols;
      const row = Math.floor(index / cols);

      // Distribute evenly in the upper half of the arena
      const startX = 40 + col * colWidth + colWidth / 2 + (Math.random() - 0.5) * 20;
      const startY = 45 + row * 48 + (Math.random() - 0.5) * 10;

      const body = Matter.Bodies.rectangle(startX, startY, pillWidth, pillHeight, {
        chamfer: { radius: 24 },
        restitution: 0.72, // Bouncy & lively
        friction: 0.06,
        frictionAir: 0.02,
        density: 0.002,
        label: skill.id,
      });

      // Initial gentle rotational kick
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 1.5,
        y: Math.random() * 1.5 + 0.5,
      });

      bodies.push(body);
      newBodyMap.set(skill.id, body);
    });

    bodyMap.current = newBodyMap;
    Matter.Composite.add(world, bodies);

    // 5. Setup Mouse Constraint for Dragging & Throwing
    const mouse = Matter.Mouse.create(container);
    // Use pixelRatio = 1 to guarantee 1:1 CSS pixel alignment on Windows/High-DPI screens
    mouse.pixelRatio = 1;

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.25,
        damping: 0.1,
        render: { visible: false },
      },
    });

    Matter.Composite.add(world, mouseConstraint);

    // Track drag state
    let dragStartPos = { x: 0, y: 0 };
    let dragStartTime = 0;

    Matter.Events.on(mouseConstraint, "startdrag", (event: any) => {
      const draggedBody = event?.body as Matter.Body | undefined;
      if (draggedBody && draggedBody.label) {
        setDraggedSkillId(draggedBody.label);
      }
      dragStartPos = { ...mouse.position };
      dragStartTime = Date.now();
    });

    Matter.Events.on(mouseConstraint, "enddrag", (event: any) => {
      setDraggedSkillId(null);
      const draggedBody = event?.body as Matter.Body | undefined;

      const dist = Math.hypot(
        mouse.position.x - dragStartPos.x,
        mouse.position.y - dragStartPos.y
      );
      const timeDiff = Date.now() - dragStartTime;

      // Tap to inspect if released without a long drag
      if (dist < 12 && timeDiff < 400 && draggedBody && draggedBody.label) {
        const found = skillsData.find((s) => s.id === draggedBody.label);
        if (found) {
          setSelectedSkill(found);
          setIsHudOpen(true);
          if (onSelectSkill) onSelectSkill(found);
        }
      }
    });

    // 6. High-Performance Animation Loop
    let animationFrameId: number;

    const updateLoop = () => {
      const currentWidth = dimensionsRef.current.width;
      const currentHeight = dimensionsRef.current.height;

      // Sync DOM elements with Matter bodies + defensive boundary clamp
      newBodyMap.forEach((body, skillId) => {
        // Enforce soft boundary clamp so pills never tunnel out under extreme blasts
        const halfW = 70;
        const halfH = 22;

        if (body.position.x < halfW) {
          Matter.Body.setPosition(body, { x: halfW, y: body.position.y });
          Matter.Body.setVelocity(body, {
            x: Math.abs(body.velocity.x) * 0.5,
            y: body.velocity.y,
          });
        } else if (body.position.x > currentWidth - halfW) {
          Matter.Body.setPosition(body, {
            x: currentWidth - halfW,
            y: body.position.y,
          });
          Matter.Body.setVelocity(body, {
            x: -Math.abs(body.velocity.x) * 0.5,
            y: body.velocity.y,
          });
        }

        if (body.position.y < halfH + 8) {
          Matter.Body.setPosition(body, { x: body.position.x, y: halfH + 8 });
          Matter.Body.setVelocity(body, {
            x: body.velocity.x,
            y: Math.abs(body.velocity.y) * 0.5,
          });
        } else if (body.position.y > currentHeight - halfH - 8) {
          Matter.Body.setPosition(body, {
            x: body.position.x,
            y: currentHeight - halfH - 8,
          });
          Matter.Body.setVelocity(body, {
            x: body.velocity.x,
            y: -Math.abs(body.velocity.y) * 0.5,
          });
        }

        const el = pillRefs.current.get(skillId);
        if (el) {
          const pillWidth = el.offsetWidth || 140;
          const pillHeight = el.offsetHeight || 44;
          const x = body.position.x - pillWidth / 2;
          const y = body.position.y - pillHeight / 2;
          const deg = (body.angle * 180) / Math.PI;

          el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`;
        }
      });

      // Ambient Zero-G float drift if in zero gravity mode
      if (engine.gravity.y === 0) {
        newBodyMap.forEach((body) => {
          Matter.Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * 0.0002,
            y: (Math.random() - 0.5) * 0.0002,
          });
        });
      }

      // Draw Laser Constellation Links on Background Canvas
      if (ctx && canvas) {
        ctx.clearRect(0, 0, currentWidth, currentHeight);

        SKILL_CONNECTIONS.forEach(([idA, idB]) => {
          const bodyA = newBodyMap.get(idA);
          const bodyB = newBodyMap.get(idB);

          if (bodyA && bodyB) {
            const dx = bodyA.position.x - bodyB.position.x;
            const dy = bodyA.position.y - bodyB.position.y;
            const distance = Math.hypot(dx, dy);

            if (distance < 240) {
              const alpha = (1 - distance / 240) * 0.3;
              ctx.beginPath();
              ctx.moveTo(bodyA.position.x, bodyA.position.y);
              ctx.lineTo(bodyB.position.x, bodyB.position.y);
              ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();

              // Central glowing spark node
              const midX = (bodyA.position.x + bodyB.position.x) / 2;
              const midY = (bodyA.position.y + bodyB.position.y) / 2;
              ctx.beginPath();
              ctx.arc(midX, midY, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 1.5})`;
              ctx.fill();
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    // 7. Start Engine Runner
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);
    animationFrameId = requestAnimationFrame(updateLoop);

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      dimensionsRef.current = { width: newWidth, height: newHeight };

      if (canvas && ctx) {
        canvas.width = newWidth * (window.devicePixelRatio || 1);
        canvas.height = newHeight * (window.devicePixelRatio || 1);
        canvas.style.width = `${newWidth}px`;
        canvas.style.height = `${newHeight}px`;
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }

      // Reposition walls
      Matter.Body.setPosition(ground, {
        x: newWidth / 2,
        y: newHeight + wallThickness / 2,
      });
      Matter.Body.setPosition(ceiling, {
        x: newWidth / 2,
        y: -wallThickness / 2,
      });
      Matter.Body.setPosition(leftWall, {
        x: -wallThickness / 2,
        y: newHeight / 2,
      });
      Matter.Body.setPosition(rightWall, {
        x: newWidth + wallThickness / 2,
        y: newHeight / 2,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  // Gravity Mode Controller
  const setGravity = useCallback((mode: "normal" | "zero" | "invert") => {
    setGravityMode(mode);
    if (!engineRef.current) return;

    if (mode === "normal") {
      engineRef.current.gravity.y = 0.9;
      engineRef.current.gravity.x = 0;
    } else if (mode === "zero") {
      engineRef.current.gravity.y = 0;
      engineRef.current.gravity.x = 0;
      bodyMap.current.forEach((body) => {
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 3,
        });
      });
    } else if (mode === "invert") {
      engineRef.current.gravity.y = -0.75;
      engineRef.current.gravity.x = 0;
    }
  }, []);

  // Supernova Radial Scatter Blast
  const triggerChaosBlast = useCallback(() => {
    const { width, height } = dimensionsRef.current;
    const centerX = width / 2;
    const centerY = height / 2;

    bodyMap.current.forEach((body) => {
      const dx = body.position.x - centerX;
      const dy = body.position.y - centerY;
      const dist = Math.hypot(dx, dy) || 1;
      const forceMag = 0.04 + Math.random() * 0.035;

      Matter.Body.applyForce(body, body.position, {
        x: (dx / dist) * forceMag,
        y: (dy / dist) * forceMag - 0.025,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.15);
    });
  }, []);

  // Center Magnetic Vortex
  const triggerVortex = useCallback(() => {
    const { width, height } = dimensionsRef.current;
    const centerX = width / 2;
    const centerY = height / 2;

    bodyMap.current.forEach((body) => {
      const dx = centerX - body.position.x;
      const dy = centerY - body.position.y;
      const dist = Math.hypot(dx, dy) || 1;

      Matter.Body.setVelocity(body, {
        x: (dx / dist) * 4.5,
        y: (dy / dist) * 4.5,
      });
    });
  }, []);

  // Reset & Re-cascade All Skills Inside Arena
  const triggerReset = useCallback(() => {
    const { width } = dimensionsRef.current;
    const cols = Math.max(3, Math.min(6, Math.floor((width - 60) / 180)));
    const colWidth = (width - 80) / cols;

    setGravity("normal");

    let idx = 0;
    bodyMap.current.forEach((body) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const x = 40 + col * colWidth + colWidth / 2 + (Math.random() - 0.5) * 20;
      const y = 45 + row * 48 + (Math.random() - 0.5) * 10;

      Matter.Body.setPosition(body, { x, y });
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 1.5,
        y: Math.random() * 1.5 + 0.5,
      });
      Matter.Body.setAngle(body, (Math.random() - 0.5) * 0.2);
      idx++;
    });
  }, [setGravity]);

  // Toss selected skill pill into the air
  const tossSkill = useCallback((skillId: string) => {
    const body = bodyMap.current.get(skillId);
    if (body) {
      Matter.Body.applyForce(body, body.position, {
        x: (Math.random() - 0.5) * 0.06,
        y: -0.09 - Math.random() * 0.05,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
    }
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] bg-[#0c0d10] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Top Physics Control Deck */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-white/[0.07] bg-[#111317]/90 backdrop-blur-md z-20 relative">
        {/* Left: Physics Engine Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
              Anti-Gravity Physics Lab
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.05] text-[10px] font-mono text-on-surface-variant">
            <span>2D Rigid-Body</span>
            <span className="text-white/30">|</span>
            <span>26 Tokens</span>
          </div>
        </div>

        {/* Right: Interactive Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Gravity Mode Selector */}
          <div className="flex items-center p-1 rounded-lg bg-black/40 border border-white/[0.08] text-xs">
            <button
              onClick={() => setGravity("normal")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                gravityMode === "normal"
                  ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              title="Earth gravity: pills fall and bounce naturally"
            >
              Earth (1g)
            </button>
            <button
              onClick={() => setGravity("zero")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all flex items-center gap-1 ${
                gravityMode === "zero"
                  ? "bg-purple-500 text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              title="Zero gravity: weightless orbital drift"
            >
              <Compass className="w-3 h-3" />
              Zero-G
            </button>
            <button
              onClick={() => setGravity("invert")}
              className={`px-2.5 py-1 rounded font-mono text-[11px] transition-all ${
                gravityMode === "invert"
                  ? "bg-amber-400 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.4)]"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              title="Inverted anti-gravity: floats up"
            >
              Invert (-g)
            </button>
          </div>

          {/* Action: Chaos Blast */}
          <button
            onClick={triggerChaosBlast}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-cyan-400/40 text-on-surface font-mono text-[11px] font-medium transition-all active:scale-95"
            title="Explosive radial blast: scatter all skill tokens!"
          >
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span className="hidden md:inline">Scatter</span>
          </button>

          {/* Action: Magnetic Vortex */}
          <button
            onClick={triggerVortex}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-purple-400/40 text-on-surface font-mono text-[11px] font-medium transition-all active:scale-95"
            title="Attract all skill tokens toward center"
          >
            <Magnet className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden md:inline">Vortex</span>
          </button>

          {/* Action: Reset */}
          <button
            onClick={triggerReset}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-on-surface-variant hover:text-primary transition-all active:rotate-180 duration-300"
            title="Reset and cascade all skills from top"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Physics Arena */}
      <div
        ref={containerRef}
        className="relative w-full h-[520px] sm:h-[580px] cursor-grab active:cursor-grabbing select-none overflow-hidden touch-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, #151821 0%, #090a0d 100%)",
        }}
      >
        {/* Subtle Cybernetic Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

        {/* Constellation Canvas (Laser connection threads) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0"
        />

        {/* Floating Hint Overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-10 px-4 py-1.5 rounded-full bg-black/60 border border-white/[0.06] backdrop-blur-md flex items-center gap-2">
          <span className="text-[11px] font-mono text-on-surface-variant/90 tracking-wide">
            💡 Drag & throw any skill pill · Tap pill for telemetry
          </span>
        </div>

        {/* DOM-Synced Interactive Physics Skill Badges */}
        {skillsData.map((skill, index) => {
          const isCategoryMatch =
            activeCategory === "all" || skill.category === activeCategory;
          const isSelected = selectedSkill.id === skill.id;
          const isDragged = draggedSkillId === skill.id;

          // Initial positions so they render immediately without jumping
          const initCol = index % 5;
          const initRow = Math.floor(index / 5);
          const initX = 60 + initCol * 170;
          const initY = 50 + initRow * 48;

          return (
            <div
              key={skill.id}
              ref={(el) => {
                if (el) pillRefs.current.set(skill.id, el);
                else pillRefs.current.delete(skill.id);
              }}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => {
                setSelectedSkill(skill);
                setIsHudOpen(true);
                if (onSelectSkill) onSelectSkill(skill);
              }}
              className={`absolute top-0 left-0 will-change-transform z-10 flex items-center gap-2.5 px-3.5 py-2 rounded-full border backdrop-blur-md transition-opacity duration-300 group cursor-pointer select-none ${
                isCategoryMatch ? "opacity-100" : "opacity-30"
              } ${
                isSelected
                  ? "bg-[#181c24] border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.45)] z-20 scale-105"
                  : "bg-[#13151b]/95 border-white/[0.12] hover:border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
              } ${
                isDragged
                  ? "scale-110 shadow-[0_0_30px_rgba(255,255,255,0.3)] z-30"
                  : ""
              }`}
              style={{
                transform: `translate3d(${initX}px, ${initY}px, 0)`,
                boxShadow: isSelected
                  ? `0 0 20px ${skill.brandColor}50, inset 0 0 10px ${skill.brandColor}20`
                  : undefined,
              }}
            >
              {/* Authentic Vector Logo Tile (Enlarged) */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center p-1 shrink-0 bg-white/[0.08] border border-white/[0.14] group-hover:scale-110 transition-transform shadow-inner"
                style={{
                  boxShadow: `0 0 12px ${skill.brandColor}40`,
                }}
              >
                {renderSkillIcon(skill.iconType, "w-6 h-6")}
              </div>

              {/* Skill Name */}
              <span className="font-display font-bold text-[13px] text-primary tracking-tight whitespace-nowrap">
                {skill.name}
              </span>

              {/* Subtle Category/Level dot indicator */}
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: skill.brandColor }}
              />
            </div>
          );
        })}

        {/* Live Holographic Telemetry Inspector Card (Collapsible) */}
        {selectedSkill && isHudOpen && (
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 left-3 sm:left-auto max-w-none sm:max-w-[380px] p-4 sm:p-5 rounded-xl bg-[#12141a]/95 border border-cyan-500/30 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.9)] z-30 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Ambient Brand Aura in HUD */}
            <div
              className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-[45px] opacity-25 pointer-events-none"
              style={{ backgroundColor: selectedSkill.brandColor }}
            />

            {/* Header: Logo, Name, Close Button */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-xl bg-surface-container-high/90 border border-white/[0.12] flex items-center justify-center p-2.5 shadow-inner"
                  style={{
                    boxShadow: `0 0 20px ${selectedSkill.brandColor}40`,
                  }}
                >
                  {renderSkillIcon(selectedSkill.iconType, "w-8 h-8")}
                </div>

                <div>
                  <h4 className="font-display text-[18px] font-black text-primary tracking-tight">
                    {selectedSkill.name}
                  </h4>
                  <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                    {selectedSkill.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold uppercase">
                  {selectedSkill.level}
                </span>
                <button
                  onClick={() => setIsHudOpen(false)}
                  className="p-1 rounded-md text-on-surface-variant hover:text-primary hover:bg-white/[0.08] transition-colors ml-1"
                  title="Minimize telemetry HUD"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-[12px] text-on-surface-variant leading-relaxed mb-4">
              {selectedSkill.description}
            </p>

            {/* Highlight */}
            <div className="p-2.5 rounded-md bg-white/[0.03] border border-white/[0.05] mb-3">
              <span className="font-mono text-[9px] text-on-surface-variant/60 uppercase tracking-widest block mb-1">
                Architecture Highlight
              </span>
              <p className="font-mono text-[11px] text-primary/90 font-medium">
                {selectedSkill.highlight}
              </p>
            </div>

            {/* Shipped In Real Projects Links */}
            <div className="space-y-1.5">
              <span className="font-mono text-[9px] text-on-surface-variant/60 uppercase tracking-widest block font-semibold">
                Shipped in Production Projects:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedSkill.projects.map((proj) => (
                  <a
                    key={proj}
                    href="#projects"
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.05] hover:bg-cyan-500/20 text-on-surface hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-400/40 transition-colors flex items-center gap-1 group/link"
                  >
                    <span>{proj}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-60 group-hover/link:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Action: Toss This Skill Button */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="font-mono text-[10px] text-on-surface-variant/60">
                Interactive Pill: Active
              </span>
              <button
                onClick={() => tossSkill(selectedSkill.id)}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-mono text-[11px] font-bold transition-all active:scale-95"
              >
                <span>Fling / Toss</span>
                <Sparkles className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Minimized Floating HUD Pill Button */}
        {selectedSkill && !isHudOpen && (
          <button
            onClick={() => setIsHudOpen(true)}
            className="absolute bottom-4 right-4 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#12141a]/95 border border-cyan-500/40 text-cyan-300 font-mono text-[11px] shadow-2xl backdrop-blur-md hover:bg-cyan-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold">Telemetry: {selectedSkill.name}</span>
            <Maximize2 className="w-3 h-3 text-cyan-400 opacity-80" />
          </button>
        )}
      </div>

      {/* Bottom Physics Arena Status Strip */}
      <div className="px-5 py-2.5 bg-[#0f1115] border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold">MODE:</span>
          <span>{gravityMode.toUpperCase()} GRAVITY FIELD</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Web & Core (Priority 1st)</span>
          <span className="text-white/20">|</span>
          <span>Kinetic Elastic Collisions: 0.72e</span>
        </div>
      </div>
    </div>
  );
}
