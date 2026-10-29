export interface Skill {
  id: string;
  name: string;
  category: "web" | "mobile" | "backend" | "motion" | "devops";
  categoryLabel: string;
  level: "Production Core" | "Architecture" | "Advanced";
  experience: string;
  description: string;
  highlight: string;
  projects: string[];
}

export interface SkillCategoryInfo {
  id: "all" | "web" | "mobile" | "backend" | "motion" | "devops";
  label: string;
  count: number;
}

export const skillsData: Skill[] = [
  // ==========================================
  // 1. CORE WEB & PROGRAMMING SKILLS (FIRST)
  // ==========================================
  {
    id: "react",
    name: "React (v18 / v19)",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Production Core",
    experience: "Component Architecture",
    description:
      "Architecting component-driven user interfaces with concurrent rendering, custom hooks, context state management, and strict performance profiling.",
    highlight: "Custom hooks, Context API, Suspense, Performance Memoization",
    projects: ["MoneyWise", "NPK Business Solutions", "Portfolio", "3D Portfolio"],
  },
  {
    id: "javascript",
    name: "JavaScript (ESNext)",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Production Core",
    experience: "Core Fundamentals & Runtime",
    description:
      "Deep mastery of JavaScript runtime internals, asynchronous event loops, closures, prototype inheritance, DOM manipulation, and modern ES6+ paradigms.",
    highlight: "Event loop, Promises, Async/Await, Canvas API, DOM APIs",
    projects: ["Temperature Converter", "Basic Form", "Diwali Page", "MoneyWise"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Production Core",
    experience: "Static Typing & Architecture",
    description:
      "Writing strict, type-safe enterprise codebases with generics, discriminated unions, utility types, and strongly typed API contracts preventing runtime defects.",
    highlight: "Generics, Discriminated Unions, Strict Null Checks, Type Inference",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MoneyWise", "Portfolio Platform"],
  },
  {
    id: "python",
    name: "Python",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Advanced",
    experience: "Backend Scripting & Algorithms",
    description:
      "Proficient in Python for backend data scripting, algorithmic problem solving, RESTful service integration, and automated workflow scripts.",
    highlight: "Object-oriented scripting, data processing, backend automation",
    projects: ["System Design Practise", "Algorithm Tooling"],
  },
  {
    id: "sql",
    name: "SQL & Databases",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Architecture",
    experience: "Relational Queries & Schemas",
    description:
      "Relational database design, writing complex SQL queries, joins, indexes, transactions, schema migrations, and Row-Level Security (RLS) enforcement.",
    highlight: "PostgreSQL, SQLite, Table Normalization, Indexing, Joins & RLS",
    projects: ["Marble Centre", "Qelvani Jewellers", "Pranavic Clinic"],
  },
  {
    id: "nextjs",
    name: "Next.js (App Router)",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Architecture",
    experience: "SSR & Static Platforms",
    description:
      "Enterprise full-stack Next.js architecture utilizing React Server Components (RSC), dynamic server routing, Route Handlers, ISR, and automated SEO metadata engines.",
    highlight: "React Server Components, SEO optimization, ISR caching, Edge routes",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MARUMiTRA", "NPK Solutions"],
  },
  {
    id: "html-css",
    name: "HTML5 & Semantic Web",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Production Core",
    experience: "Accessibility & Standards",
    description:
      "Crafting clean, accessible, semantic HTML5 structures adhering to WCAG standards, SEO crawlability, and modern responsive viewports.",
    highlight: "Semantic tags, ARIA roles, SEO meta tags, OpenGraph",
    projects: ["All Web Platforms"],
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS (v3 / v4)",
    category: "web",
    categoryLabel: "Web & Frontend",
    level: "Production Core",
    experience: "Design Systems & UI",
    description:
      "Engineering bespoke editorial design systems, dark-mode glassmorphic aesthetics, responsive fluid typography clamp sizing, and micro-interactions.",
    highlight: "Custom design tokens, fluid clamp sizing, dark noir themes",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MARUMiTRA", "Portfolio"],
  },

  // ==========================================
  // 2. MOBILE & CROSS-PLATFORM (FLUTTER)
  // ==========================================
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Production Core",
    experience: "Cross-Platform Android & iOS",
    description:
      "Architecting clean, performant, production-ready cross-platform applications with pixel-perfect custom widgets and platform channels.",
    highlight: "Custom widgets, lifecycle optimization, native bridging",
    projects: ["Qelvani Jewellers", "Marble Centre", "Pranavic Clinic", "Lumino Kids"],
  },
  {
    id: "dart",
    name: "Dart",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Production Core",
    experience: "Language & Concurrency",
    description:
      "Deep understanding of Dart OOP, streams, isolates for heavy background tasks, sound null-safety, and asynchronous event loops.",
    highlight: "Streams, Isolates, Asynchronous architecture",
    projects: ["Qelvani Jewellers", "Marble Centre", "Pranavic Clinic", "Lumino Kids"],
  },
  {
    id: "riverpod",
    name: "Flutter Riverpod",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Architecture",
    experience: "State Management",
    description:
      "Compile-safe, decoupled reactive state architecture with state notifiers, auto-dispose providers, and unified dependency injection.",
    highlight: "StateNotifiers, AsyncNotifier, dependency injection",
    projects: ["Qelvani Jewellers"],
  },
  {
    id: "provider",
    name: "Provider & Bloc Patterns",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Production Core",
    experience: "Reactive State",
    description:
      "Scoped model state propagation, business logic decoupling, and maintainable view-model architectures across multi-screen flows.",
    highlight: "ChangeNotifier, Consumer pattern, clean architecture",
    projects: ["Pranavic Clinic", "Stay Sathi"],
  },
  {
    id: "flame-engine",
    name: "Flame 2D Engine",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Advanced",
    experience: "Game Dev & Animation",
    description:
      "2D game physics, sprite animation cycles, collision detection, and interactive canvas components for interactive educational games.",
    highlight: "Sprite animations, game loops, sound integration",
    projects: ["Lumino Kids"],
  },
  {
    id: "offline-sqlite",
    name: "Offline-First SQLite",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Architecture",
    experience: "Local Persistence",
    description:
      "Zero-latency offline data caching, queued background mutation sync, and reliable on-device persistence for mission-critical enterprise apps.",
    highlight: "SQLite relational caching, conflict resolution, offline queue",
    projects: ["Marble Centre", "Pranavic Clinic"],
  },

  // ==========================================
  // 3. BACKEND, CLOUD & REAL-TIME
  // ==========================================
  {
    id: "supabase",
    name: "Supabase & BaaS",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Architecture",
    experience: "BaaS & Relational DB",
    description:
      "Relational schema modeling, Row Level Security (RLS) policies, Realtime WebSocket subscriptions, storage buckets, and auth triggers.",
    highlight: "PostgreSQL schemas, RLS policies, Realtime listeners",
    projects: ["Qelvani Jewellers", "Marble Centre", "Pranavic Clinic"],
  },
  {
    id: "firebase",
    name: "Firebase Ecosystem",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Production Core",
    experience: "Auth & Cloud Firestore",
    description:
      "Full-stack Firebase implementation including Google/Email Authentication, Firestore NoSQL collections, Cloud Messaging (FCM), and Hosting.",
    highlight: "Google OAuth, Firestore queries, Cloud Messaging FCM",
    projects: ["MoneyWise", "Qelvani Jewellers"],
  },
  {
    id: "rest-apis",
    name: "RESTful APIs & Webhooks",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Production Core",
    experience: "Data Integration",
    description:
      "Consuming, designing, and optimizing structured REST endpoints with error boundary handling, optimistic UI updates, and retry policies.",
    highlight: "Optimistic updates, token interceptors, payload validation",
    projects: ["All Applications"],
  },
  {
    id: "pdf-thermal-printing",
    name: "PDF & Thermal Printing",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Advanced",
    experience: "Document Generation",
    description:
      "Dynamic procedural PDF invoice generation, multi-page business balance sheets, thermal receipt printer connectivity, and CSV batch exports.",
    highlight: "Dynamic PDF layouts, thermal Bluetooth printing, CSV exports",
    projects: ["Marble Centre"],
  },

  // ==========================================
  // 4. MOTION, GRAPHICS & UI CRAFT
  // ==========================================
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "motion",
    categoryLabel: "Motion & UI Craft",
    level: "Production Core",
    experience: "Fluid UI Physics",
    description:
      "Crafting high-end cinematic scroll reveals, layout morphing animations, staggered entrance choreography, and physics-based interactions.",
    highlight: "Layout animations, scroll-linked parallax, exit transitions",
    projects: ["Portfolio Platform", "HSM Grand Inn", "MARUMiTRA"],
  },
  {
    id: "webgl-shaders",
    name: "WebGL & GLSL Shaders",
    category: "motion",
    categoryLabel: "Motion & UI Craft",
    level: "Advanced",
    experience: "Creative Coding & Graphics",
    description:
      "Custom procedural fragment and vertex shaders, GPU-accelerated atmospheric background distortions, and interactive mouse field dynamics.",
    highlight: "GLSL Fragment shaders, noise generators, canvas buffers",
    projects: ["Hero Section Shader", "Interactive Canvas Engine"],
  },
  {
    id: "canvas-particles",
    name: "HTML5 Canvas Particles",
    category: "motion",
    categoryLabel: "Motion & UI Craft",
    level: "Advanced",
    experience: "60fps GPU Graphics",
    description:
      "Zero-latency mathematical particle simulations with physics drag, dynamic alpha decay, and cursor-following luminous spark trails.",
    highlight: "60fps particle engine, sub-pixel physics, blend modes",
    projects: ["Custom Cursor Spark Engine"],
  },
  {
    id: "lenis-smooth-scroll",
    name: "Lenis & Smooth Scrolling",
    category: "motion",
    categoryLabel: "Motion & UI Craft",
    level: "Production Core",
    experience: "Experiential Frontend",
    description:
      "Integrating momentum-based smooth scrolling, architectural grid alignments, bespoke typography layouts, and noir aesthetic storytelling.",
    highlight: "Momentum scrolling, editorial layout, typography hierarchies",
    projects: ["MARUMiTRA", "HSM Grand Inn"],
  },

  // ==========================================
  // 5. DEVOPS, SYSTEM DESIGN & CLOUD
  // ==========================================
  {
    id: "git-github",
    name: "Git & Advanced Workflows",
    category: "devops",
    categoryLabel: "DevOps & Architecture",
    level: "Architecture",
    experience: "Version Control Mastery",
    description:
      "Multi-branch release pipelines, interactive rebasing, cherry-picking, pull request code auditing, and git submodule architectures.",
    highlight: "Author of comprehensive Git Commands Reference Guide",
    projects: ["Git Reference Guide", "All Projects"],
  },
  {
    id: "vercel-edge",
    name: "Vercel & Edge Deployment",
    category: "devops",
    categoryLabel: "DevOps & Architecture",
    level: "Production Core",
    experience: "Cloud Hosting & CI/CD",
    description:
      "Automated continuous deployment (CI/CD), multi-domain canonical redirects, edge middleware caching, and zero-downtime rollouts.",
    highlight: "Edge CDN, automatic build caches, 308 domain routing",
    projects: ["dilliprasad.vercel.app", "HSM Grand Inn", "Manish Jewellers"],
  },
  {
    id: "performance-optimization",
    name: "Lighthouse & Web Vitals",
    category: "devops",
    categoryLabel: "DevOps & Architecture",
    level: "Architecture",
    experience: "Speed & Web Vitals",
    description:
      "Minimizing bundle sizes, tree-shaking, responsive image transcoding, font preloading, and achieving 95+ performance scores.",
    highlight: "First Contentful Paint (FCP), Cumulative Layout Shift (CLS), tree-shaking",
    projects: ["Portfolio Platform", "HSM Grand Inn"],
  },
  {
    id: "system-design",
    name: "System Design & Architecture",
    category: "devops",
    categoryLabel: "DevOps & Architecture",
    level: "Advanced",
    experience: "Scalable Systems",
    description:
      "Designing resilient client-server boundaries, decoupled state contracts, offline synchronization models, and modular component ecosystems.",
    highlight: "Clean Architecture, repository pattern, offline-sync protocols",
    projects: ["Pranavic Clinic", "Marble Centre", "NPK Solutions"],
  },
];

export const skillCategoriesList: SkillCategoryInfo[] = [
  { id: "all", label: "All Skills", count: skillsData.length },
  { id: "web", label: "Web & Core (React, JS, Python, SQL)", count: skillsData.filter((s) => s.category === "web").length },
  { id: "mobile", label: "Mobile & Flutter", count: skillsData.filter((s) => s.category === "mobile").length },
  { id: "backend", label: "Cloud & Backend", count: skillsData.filter((s) => s.category === "backend").length },
  { id: "motion", label: "Motion & UI Craft", count: skillsData.filter((s) => s.category === "motion").length },
  { id: "devops", label: "DevOps & Architecture", count: skillsData.filter((s) => s.category === "devops").length },
];

export const engineeringHighlights = [
  {
    metric: "100%",
    label: "Cross-Platform Delivery",
    detail: "Production apps shipped across Web (React/Next.js) & Mobile (Flutter/Android/iOS).",
  },
  {
    metric: "0-Lag",
    label: "60fps Visual Motion",
    detail: "GPU-accelerated WebGL shaders & Framer Motion physics.",
  },
  {
    metric: "Offline-1st",
    label: "Relational SQL & Cloud",
    detail: "PostgreSQL, SQLite caching & seamless cloud synchronization via Supabase.",
  },
  {
    metric: "95+",
    label: "Lighthouse Performance",
    detail: "Engineered for optimal Core Web Vitals, speed, and clean semantic architecture.",
  },
];
