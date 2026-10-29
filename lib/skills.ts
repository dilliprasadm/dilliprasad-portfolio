export interface Skill {
  id: string;
  name: string;
  iconType: string;
  brandColor: string;
  category: "web" | "mobile" | "backend" | "motion" | "devops";
  categoryLabel: string;
  level: "Core Production" | "Architecture" | "Advanced";
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
  // 1. WEB & CORE PROGRAMMING (FIRST)
  // ==========================================
  {
    id: "react",
    name: "React",
    iconType: "react",
    brandColor: "#61DAFB",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Core Production",
    experience: "v18 / v19 · UI Architecture",
    description:
      "Component-driven architectures, custom hooks, concurrent rendering, context state propagation, and strict performance profiling.",
    highlight: "Custom hooks, Context API, Suspense, Performance Memoization",
    projects: ["MoneyWise", "NPK Solutions", "Portfolio", "3D Portfolio"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    iconType: "javascript",
    brandColor: "#F7DF1E",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Core Production",
    experience: "ESNext · Modern Runtime",
    description:
      "Runtime internals, asynchronous event loops, closures, prototype chaining, DOM APIs, Canvas 2D engine, and modern ES6+ paradigms.",
    highlight: "Event loop, Promises, Async/Await, Canvas API, DOM APIs",
    projects: ["Temperature Converter", "Basic Form", "Diwali Page", "MoneyWise"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    iconType: "typescript",
    brandColor: "#3178C6",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Core Production",
    experience: "Strict Static Typing",
    description:
      "Strict typing, complex generics, union discriminators, interface polymorphism, and end-to-end type safety eliminating runtime bugs.",
    highlight: "Generics, Discriminated Unions, Strict Null Checks, Type Inference",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MoneyWise", "Portfolio"],
  },
  {
    id: "python",
    name: "Python",
    iconType: "python",
    brandColor: "#3776AB",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Advanced",
    experience: "Scripting & Algorithms",
    description:
      "Object-oriented programming, data structures, algorithmic automation, API integrations, and backend workflow scripting.",
    highlight: "Object-oriented scripting, data processing, backend automation",
    projects: ["System Design Practise", "Algorithm Tooling"],
  },
  {
    id: "sql",
    name: "SQL & Relational DB",
    iconType: "sql",
    brandColor: "#336791",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Architecture",
    experience: "PostgreSQL & SQLite",
    description:
      "Relational database design, query optimization, joins, indexes, schema migrations, and Row-Level Security (RLS) enforcement.",
    highlight: "PostgreSQL, SQLite, Table Normalization, Indexing, Joins & RLS",
    projects: ["Marble Centre", "Qelvani Jewellers", "Pranavic Clinic"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    iconType: "nextjs",
    brandColor: "#FFFFFF",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Architecture",
    experience: "App Router · SSR & RSC",
    description:
      "Full-stack Next.js platforms with React Server Components (RSC), dynamic server routing, Route Handlers, ISR, and automated SEO metadata.",
    highlight: "React Server Components, SEO optimization, ISR caching, Edge routes",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MARUMiTRA", "NPK Solutions"],
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    iconType: "tailwind",
    brandColor: "#06B6D4",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Core Production",
    experience: "v3 / v4 · Design Systems",
    description:
      "Bespoke editorial design systems, dark-mode glassmorphic aesthetics, fluid responsive clamp typography, and micro-interactions.",
    highlight: "Custom design tokens, fluid clamp sizing, dark noir themes",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MARUMiTRA", "Portfolio"],
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    iconType: "html",
    brandColor: "#E34F26",
    category: "web",
    categoryLabel: "Web & Core",
    level: "Core Production",
    experience: "Semantic & Responsive",
    description:
      "Semantic HTML5 structures, WCAG accessibility compliance, modern CSS Grid/Flexbox layouts, and cross-browser rendering.",
    highlight: "Semantic tags, ARIA roles, SEO meta tags, CSS Variables",
    projects: ["All Web Platforms"],
  },

  // ==========================================
  // 2. MOBILE & CROSS-PLATFORM (FLUTTER)
  // ==========================================
  {
    id: "flutter",
    name: "Flutter",
    iconType: "flutter",
    brandColor: "#02569B",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Core Production",
    experience: "Cross-Platform iOS & Android",
    description:
      "Native mobile architecture, custom rendering pipelines, platform channels, lifecycle optimization, and smooth 60fps mobile UI.",
    highlight: "Custom widgets, lifecycle optimization, native bridging",
    projects: ["Qelvani Jewellers", "Marble Centre", "Pranavic Clinic", "Lumino Kids"],
  },
  {
    id: "dart",
    name: "Dart",
    iconType: "dart",
    brandColor: "#0175C2",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Core Production",
    experience: "Language & Concurrency",
    description:
      "Dart OOP, streams, isolates for heavy background computational tasks, sound null-safety, and asynchronous event loops.",
    highlight: "Streams, Isolates, Asynchronous architecture",
    projects: ["Qelvani Jewellers", "Marble Centre", "Pranavic Clinic", "Lumino Kids"],
  },
  {
    id: "riverpod",
    name: "Flutter Riverpod",
    iconType: "flutter",
    brandColor: "#00B4AB",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Architecture",
    experience: "Reactive State Architecture",
    description:
      "Compile-safe reactive state management with state notifiers, auto-dispose providers, and unified dependency injection.",
    highlight: "StateNotifiers, AsyncNotifier, dependency injection",
    projects: ["Qelvani Jewellers"],
  },
  {
    id: "provider",
    name: "Provider & Bloc",
    iconType: "flutter",
    brandColor: "#54C5F8",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Core Production",
    experience: "Scoped Business Logic",
    description:
      "ChangeNotifier state patterns, business logic decoupling, and maintainable view-model architectures across multi-screen flows.",
    highlight: "ChangeNotifier, Consumer pattern, clean architecture",
    projects: ["Pranavic Clinic", "Stay Sathi"],
  },
  {
    id: "flame-engine",
    name: "Flame 2D Engine",
    iconType: "flame",
    brandColor: "#FF5722",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Advanced",
    experience: "Mobile Games & Physics",
    description:
      "2D game physics, sprite animation cycles, collision detection, and interactive canvas components for interactive educational games.",
    highlight: "Sprite animations, game loops, sound integration",
    projects: ["Lumino Kids"],
  },
  {
    id: "offline-sqlite",
    name: "Offline SQLite",
    iconType: "sql",
    brandColor: "#4169E1",
    category: "mobile",
    categoryLabel: "Native Mobile",
    level: "Architecture",
    experience: "On-Device Persistence",
    description:
      "Zero-latency offline data caching, queued background mutation sync, and reliable on-device persistence for mission-critical enterprise apps.",
    highlight: "SQLite relational caching, conflict resolution, offline queue",
    projects: ["Marble Centre", "Pranavic Clinic"],
  },

  // ==========================================
  // 3. CLOUD, BACKEND & APIS
  // ==========================================
  {
    id: "supabase",
    name: "Supabase & BaaS",
    iconType: "supabase",
    brandColor: "#3ECF8E",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Architecture",
    experience: "Relational DB & Realtime",
    description:
      "PostgreSQL schemas, Row-Level Security (RLS) policies, Realtime WebSocket subscriptions, storage buckets, and auth triggers.",
    highlight: "PostgreSQL schemas, RLS policies, Realtime listeners",
    projects: ["Qelvani Jewellers", "Marble Centre", "Pranavic Clinic"],
  },
  {
    id: "firebase",
    name: "Firebase Ecosystem",
    iconType: "firebase",
    brandColor: "#FFCA28",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Core Production",
    experience: "Auth, Firestore & FCM",
    description:
      "Full-stack Firebase implementation including Google/Email Auth, Firestore NoSQL collections, Cloud Messaging (FCM), and Hosting.",
    highlight: "Google OAuth, Firestore queries, Cloud Messaging FCM",
    projects: ["MoneyWise", "Qelvani Jewellers"],
  },
  {
    id: "rest-apis",
    name: "REST APIs & Webhooks",
    iconType: "api",
    brandColor: "#3B82F6",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Core Production",
    experience: "Data Integration & Sync",
    description:
      "Consuming, designing, and optimizing structured REST endpoints with error boundary handling, optimistic UI updates, and retry policies.",
    highlight: "Optimistic updates, token interceptors, payload validation",
    projects: ["All Applications"],
  },
  {
    id: "pdf-thermal-printing",
    name: "PDF & Thermal Printing",
    iconType: "printer",
    brandColor: "#A855F7",
    category: "backend",
    categoryLabel: "Cloud & Backend",
    level: "Advanced",
    experience: "Hardware & Document Engine",
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
    iconType: "framer",
    brandColor: "#0055FF",
    category: "motion",
    categoryLabel: "Motion & Graphics",
    level: "Core Production",
    experience: "Fluid UI Physics & Springs",
    description:
      "Cinematic scroll reveals, layout morphing animations, staggered entrance choreography, and physics-based interactions.",
    highlight: "Layout animations, scroll-linked parallax, exit transitions",
    projects: ["Portfolio Platform", "HSM Grand Inn", "MARUMiTRA"],
  },
  {
    id: "webgl-shaders",
    name: "WebGL & GLSL Shaders",
    iconType: "webgl",
    brandColor: "#990000",
    category: "motion",
    categoryLabel: "Motion & Graphics",
    level: "Advanced",
    experience: "GPU Shaders & Math",
    description:
      "Custom procedural fragment and vertex shaders, GPU-accelerated atmospheric background distortions, and interactive mouse field dynamics.",
    highlight: "GLSL Fragment shaders, noise generators, canvas buffers",
    projects: ["Hero Section Shader", "Interactive Canvas Engine"],
  },
  {
    id: "canvas-particles",
    name: "HTML5 Canvas Particles",
    iconType: "sparkles",
    brandColor: "#38BDF8",
    category: "motion",
    categoryLabel: "Motion & Graphics",
    level: "Advanced",
    experience: "60fps GPU Graphics Engine",
    description:
      "Zero-latency mathematical particle simulations with physics drag, dynamic alpha decay, and cursor-following luminous spark trails.",
    highlight: "60fps particle engine, sub-pixel physics, blend modes",
    projects: ["Custom Cursor Spark Engine"],
  },
  {
    id: "lenis-smooth-scroll",
    name: "Lenis Smooth Scroll",
    iconType: "scroll",
    brandColor: "#E2E8F0",
    category: "motion",
    categoryLabel: "Motion & Graphics",
    level: "Core Production",
    experience: "Experiential Scroll Physics",
    description:
      "Momentum-based smooth scrolling, architectural grid alignments, bespoke typography layouts, and noir aesthetic digital storytelling.",
    highlight: "Momentum scrolling, editorial layout, typography hierarchies",
    projects: ["MARUMiTRA", "HSM Grand Inn"],
  },

  // ==========================================
  // 5. DEVOPS, SYSTEM DESIGN & CLOUD
  // ==========================================
  {
    id: "git-github",
    name: "Git & GitHub",
    iconType: "git",
    brandColor: "#F05032",
    category: "devops",
    categoryLabel: "DevOps & Tooling",
    level: "Architecture",
    experience: "Branching, PRs & Workflows",
    description:
      "Multi-branch release pipelines, interactive rebasing, cherry-picking, pull request code auditing, and git submodule architectures.",
    highlight: "Author of comprehensive Git Commands Reference Guide",
    projects: ["Git Reference Guide", "All Projects"],
  },
  {
    id: "vercel-edge",
    name: "Vercel & Edge Deployment",
    iconType: "vercel",
    brandColor: "#FFFFFF",
    category: "devops",
    categoryLabel: "DevOps & Tooling",
    level: "Core Production",
    experience: "Edge CDN & CI/CD Pipelines",
    description:
      "Automated continuous deployment (CI/CD), multi-domain canonical redirects, edge middleware caching, and zero-downtime rollouts.",
    highlight: "Edge CDN, automatic build caches, 308 domain routing",
    projects: ["dilliprasad.vercel.app", "HSM Grand Inn", "Manish Jewellers"],
  },
  {
    id: "performance-optimization",
    name: "Lighthouse & Web Vitals",
    iconType: "gauge",
    brandColor: "#10B981",
    category: "devops",
    categoryLabel: "DevOps & Tooling",
    level: "Architecture",
    experience: "Speed & Core Web Vitals",
    description:
      "Minimizing bundle sizes, tree-shaking, responsive image transcoding, font preloading, and achieving 95+ performance scores.",
    highlight: "First Contentful Paint (FCP), Cumulative Layout Shift (CLS), tree-shaking",
    projects: ["Portfolio Platform", "HSM Grand Inn"],
  },
  {
    id: "system-design",
    name: "System Design & Architecture",
    iconType: "architecture",
    brandColor: "#6366F1",
    category: "devops",
    categoryLabel: "DevOps & Tooling",
    level: "Advanced",
    experience: "Clean Architecture & State",
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
  { id: "motion", label: "Motion & Graphics", count: skillsData.filter((s) => s.category === "motion").length },
  { id: "devops", label: "DevOps & Tooling", count: skillsData.filter((s) => s.category === "devops").length },
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
