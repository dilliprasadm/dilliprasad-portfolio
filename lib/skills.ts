export interface Skill {
  id: string;
  name: string;
  category: "mobile" | "frontend" | "backend" | "motion" | "devops";
  categoryLabel: string;
  level: "Production Core" | "Architecture" | "Advanced";
  experience: string;
  description: string;
  highlight: string;
  projects: string[];
}

export interface SkillCategoryInfo {
  id: "all" | "mobile" | "frontend" | "backend" | "motion" | "devops";
  label: string;
  count: number;
}

export const skillsData: Skill[] = [
  // --- Mobile & Flutter ---
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
      "Deep understanding of Dart OOP, streams, isolates for heavy background tasks, null-safety, and asynchronous event loops.",
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

  // --- Frontend & Modern Web ---
  {
    id: "react",
    name: "React (v18 / v19)",
    category: "frontend",
    categoryLabel: "Modern Frontend",
    level: "Production Core",
    experience: "Component Architecture",
    description:
      "Building scalable, reusable component hierarchies with advanced custom hooks, concurrent rendering, and strict performance profiling.",
    highlight: "Custom hooks, Context API, Memoization, Suspense",
    projects: ["MoneyWise", "NPK Business Solutions", "Portfolio"],
  },
  {
    id: "nextjs",
    name: "Next.js (App Router)",
    category: "frontend",
    categoryLabel: "Modern Frontend",
    level: "Architecture",
    experience: "SSR & Static Platforms",
    description:
      "Enterprise Next.js architecture utilizing Server Components (RSC), dynamic routing, Route Handlers, SEO metadata engines, and ISR.",
    highlight: "React Server Components, SEO optimization, ISR caching",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MARUMiTRA", "NPK Solutions"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Modern Frontend",
    level: "Production Core",
    experience: "Type Systems & Safety",
    description:
      "Strict static typing, complex generic interfaces, union discriminators, and type-safe API contracts preventing runtime defects.",
    highlight: "Generics, Discriminated unions, API type inference",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MoneyWise", "Portfolio"],
  },
  {
    id: "javascript-es6",
    name: "Modern JavaScript (ESNext)",
    category: "frontend",
    categoryLabel: "Modern Frontend",
    level: "Production Core",
    experience: "Core Fundamentals",
    description:
      "Deep mastery of JavaScript runtime internals, closures, prototype chaining, asynchronous event loops, and DOM manipulation APIs.",
    highlight: "Event loop, Promises, Async/Await, Canvas API",
    projects: ["Temperature Converter", "Basic Form", "Diwali Page"],
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS (v3 / v4)",
    category: "frontend",
    categoryLabel: "Modern Frontend",
    level: "Production Core",
    experience: "Design Systems & UI",
    description:
      "Crafting bespoke editorial design systems, micro-interactions, responsive fluid typography, and dark-mode glassmorphic themes.",
    highlight: "Custom design tokens, fluid clamp sizing, dark noir themes",
    projects: ["All Web Platforms & Mobile UI"],
  },
  {
    id: "responsive-design",
    name: "Responsive & Accessibility",
    category: "frontend",
    categoryLabel: "Modern Frontend",
    level: "Production Core",
    experience: "Cross-Device UX",
    description:
      "Designing seamlessly across ultra-wide monitors, tablets, and handheld devices with semantic HTML5 and accessible WCAG standards.",
    highlight: "Mobile-first layouts, ARIA accessibility, touch ergonomics",
    projects: ["HSM Grand Inn", "Manish Jewellers", "MARUMiTRA"],
  },

  // --- Backend, Cloud & Databases ---
  {
    id: "supabase",
    name: "Supabase & PostgreSQL",
    category: "backend",
    categoryLabel: "Cloud & Database",
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
    categoryLabel: "Cloud & Database",
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
    categoryLabel: "Cloud & Database",
    level: "Production Core",
    experience: "Data Integration",
    description:
      "Consuming, designing, and optimizing structured REST endpoints with error boundary handling, optimistic UI updates, and retry policies.",
    highlight: "Optimistic updates, token interceptors, payload validation",
    projects: ["All Applications"],
  },
  {
    id: "pdf-thermal-printing",
    name: "PDF & Thermal Hardware Printing",
    category: "backend",
    categoryLabel: "Cloud & Database",
    level: "Advanced",
    experience: "Document Generation",
    description:
      "Dynamic procedural PDF invoice generation, multi-page business balance sheets, thermal receipt printer connectivity, and CSV batch exports.",
    highlight: "Dynamic PDF layouts, thermal Bluetooth printing, CSV exports",
    projects: ["Marble Centre"],
  },

  // --- Motion, Interactive Graphics & UI Craft ---
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
    projects: ["Portfolio", "HSM Grand Inn", "MARUMiTRA"],
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
    name: "HTML5 Canvas Particle Systems",
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
    name: "Lenis & Editorial UI Craft",
    category: "motion",
    categoryLabel: "Motion & UI Craft",
    level: "Production Core",
    experience: "Experiential Frontend",
    description:
      "Integrating momentum-based smooth scrolling, architectural grid alignments, bespoke typography layouts, and noir aesthetic storytelling.",
    highlight: "Momentum scrolling, editorial layout, typography hierarchies",
    projects: ["MARUMiTRA", "HSM Grand Inn"],
  },

  // --- DevOps & System Design ---
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
    name: "Lighthouse & Core Web Vitals",
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
    name: "System Design & App Architecture",
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
  { id: "mobile", label: "Mobile & Flutter", count: skillsData.filter((s) => s.category === "mobile").length },
  { id: "frontend", label: "Frontend & React", count: skillsData.filter((s) => s.category === "frontend").length },
  { id: "backend", label: "Backend & Cloud", count: skillsData.filter((s) => s.category === "backend").length },
  { id: "motion", label: "Motion & UI Craft", count: skillsData.filter((s) => s.category === "motion").length },
  { id: "devops", label: "DevOps & Architecture", count: skillsData.filter((s) => s.category === "devops").length },
];

export const engineeringHighlights = [
  {
    metric: "100%",
    label: "Cross-Platform Delivery",
    detail: "Production apps shipped across Android, iOS & Web with native performance.",
  },
  {
    metric: "0-Lag",
    label: "60fps Visual Motion",
    detail: "GPU-accelerated WebGL shaders & Framer Motion physics.",
  },
  {
    metric: "Offline-1st",
    label: "Resilient Architecture",
    detail: "Local SQLite caching & seamless cloud synchronization via Supabase.",
  },
  {
    metric: "95+",
    label: "Lighthouse Performance",
    detail: "Engineered for optimal Core Web Vitals, speed, and clean semantic code.",
  },
];
