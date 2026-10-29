export interface ProjectHotspot {
  title: string;
  subtitle: string;
  xPercent: number; // percentage from left
  yPercent: number; // percentage from top
}

export interface ProjectTelemetry {
  engine?: string;
  state?: string;
  storage?: string;
  fps?: string;
  rendering?: string;
  network?: string;
  lighthouse?: string;
  latency?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  type: "mobile" | "web" | "docs";
  description: string;
  technologies: string[];
  image: string;
  alt: string;
  displayUrl: string;
  github?: string;
  live?: string;
  metrics?: string;
  highlights?: string[];
  terminalSnippet?: string[];
  hotspots?: ProjectHotspot[];
  telemetry?: ProjectTelemetry;
}

export const projects: Project[] = [
  // ==========================================
  // 1. WEB PLATFORMS & SAAS (NEXT.JS / REACT)
  // ==========================================
  {
    id: "hsm-grand-inn",
    number: "01 / 13",
    title: "HSM Grand Inn",
    category: "Luxury Hospitality Website",
    type: "web",
    description:
      "A completely bespoke digital front door and booking experience for a premier luxury hotel in Chittoor. Features seamless room reservations, architectural photography showcases, and fluid scroll interactions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/hsm-grand-inn.png",
    alt: "HSM Grand Inn Luxury Hotel website preview in Chittoor with hotel facade and booking CTA.",
    displayUrl: "hsm-grandinn.vercel.app",
    live: "https://hsm-grandinn.vercel.app/",
    github: "https://github.com/dilliprasadm/hsm-grand-inn",
    metrics: "Next.js App Router · 98 Lighthouse",
    highlights: [
      "Server-side rendered dynamic room catalogs",
      "Fluid Lenis momentum scroll physics",
      "Bespoke hotel booking & enquiry flow",
    ],
    telemetry: {
      rendering: "Next.js 14 SSR + App Router",
      network: "Vercel Global Edge CDN",
      lighthouse: "98 Performance · 100 SEO",
      latency: "<120ms Edge TTFB",
    },
  },
  {
    id: "manish-jewellers",
    number: "02 / 13",
    title: "Manish Jewellers",
    category: "Luxury Jewellery Atelier",
    type: "web",
    description:
      "An editorial, high-performance web experience crafted for a historic Rajasthan jewellery atelier (est. 1910). Showcasing royal Jadau, Polki, and certified gold collections with WhatsApp direct enquiry integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    image: "/images/projects/manish-jewellers.png",
    alt: "Manish Jewellers high-end luxury editorial website preview featuring royal bridal collections.",
    displayUrl: "manish-jewellers-ajmer.vercel.app",
    live: "https://manish-jewellers-ajmer.vercel.app/",
    github: "https://github.com/dilliprasadm/manish_jewellers",
    metrics: "Editorial Design · WhatsApp API",
    highlights: [
      "High-res royal bridal catalog showcase",
      "WhatsApp automated product enquiry hooks",
      "Zero-layout shift typography system",
    ],
    telemetry: {
      rendering: "Zero-CLS Typography Pipeline",
      network: "Vercel Global Edge",
      lighthouse: "96 Performance · 99 Best Practices",
      latency: "WhatsApp Direct Ingestion",
    },
  },
  {
    id: "npk-business-solutions",
    number: "03 / 13",
    title: "NPK Business Solutions",
    category: "Enterprise IT & Digital Transformation",
    type: "web",
    description:
      "Official portal for NPK Business Solutions (Zoho Authorized Partner), delivering end-to-end ERP implementations (Zoho, Tally Prime, NetSuite), Salesforce CRM, Power BI analytics, and low-code automations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    image: "/images/projects/npk-business-solutions.png",
    alt: "NPK Business Solutions corporate platform showcasing finance, operations, and automation.",
    displayUrl: "npkbss.in",
    live: "https://www.npkbss.in/",
    github: "https://github.com/dilliprasadm/npk-business-solutions",
    metrics: "Enterprise IT · Zoho Partner",
    highlights: [
      "ERP & CRM capability architecture showcase",
      "Cloudflare Edge network deployment",
      "Automated corporate lead ingestion",
    ],
    telemetry: {
      rendering: "Enterprise Dynamic Routing",
      network: "Cloudflare Edge Security",
      lighthouse: "Zoho Certified Partner Portal",
      latency: "Global Anycast Routing",
    },
  },
  {
    id: "marumitra",
    number: "04 / 13",
    title: "MARUMiTRA",
    category: "Software Consultancy & Agency",
    type: "web",
    description:
      "A high-impact corporate website for a DPIIT-recognized IT consultancy and software engineering company in Jaipur. Highlights AI solutions, custom software engineering, and modern cloud architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis Scroll"],
    image: "/images/projects/marumitra.png",
    alt: "MARUMiTRA software consultancy agency website showcasing AI services and digital innovation.",
    displayUrl: "marumitra.com",
    live: "https://marumitra.com/",
    github: "https://github.com/dilliprasadm",
    metrics: "DPIIT Recognized · Agency Platform",
    highlights: [
      "Fluid dark-noir glassmorphic design system",
      "Interactive services matrix",
      "Full-funnel client project estimator",
    ],
    telemetry: {
      rendering: "Framer Motion GPU Pipeline",
      network: "Vercel Edge Platform",
      lighthouse: "99 Performance · 100 SEO",
      latency: "<90ms First Byte (TTFB)",
    },
  },
  {
    id: "money-wise",
    number: "05 / 13",
    title: "MoneyWise (MyMoney)",
    category: "Personal Finance & Expense Manager",
    type: "web",
    description:
      "A secure, responsive personal finance tracking web application. Features Google Authentication, real-time balance calculations, recurring bill reminders, and person-wise debt settlement tracking.",
    technologies: ["React", "TypeScript", "Vite", "Firebase Auth", "Firestore"],
    image: "/images/projects/money-wise.png",
    alt: "MoneyWise personal finance dashboard showing wallet balance, transactions, and dues.",
    displayUrl: "mymoney-cf6c2.web.app",
    live: "https://mymoney-cf6c2.web.app/",
    github: "https://github.com/dilliprasadm/money-wise",
    metrics: "Firebase Auth · Realtime Firestore",
    highlights: [
      "Person-wise debt settlement calculation engine",
      "Real-time balance ledger with Firestore listeners",
      "Google OAuth 2.0 zero-friction sign-in",
    ],
    telemetry: {
      rendering: "Client-Side LocalStorage Architecture",
      network: "100% Private Client-Side",
      lighthouse: "Zero Cloud Data Leak",
      latency: "<15ms Instant Computation",
    },
  },

  // ==========================================
  // 2. NATIVE MOBILE APPLICATIONS (FLUTTER)
  // ==========================================
  {
    id: "qelvani-jewellers",
    number: "06 / 13",
    title: "Qelvani Jewellers",
    category: "Luxury Jewellery Mobile App",
    type: "mobile",
    description:
      "A high-end luxury e-commerce and product catalog mobile application built for fine jewellery customers and retail staff. Features real-time Supabase database synchronization, Riverpod state management, secure OTP authentication, video showcase feeds, and push notifications.",
    technologies: ["Flutter", "Dart", "Supabase", "Riverpod", "Firebase", "REST APIs"],
    image: "/images/projects/qelvani-jewellers.jpg",
    alt: "Qelvani Jewellers luxury mobile application showcase with royal bridal collections and catalog.",
    displayUrl: "Mobile App · Flutter / Supabase",
    github: "https://github.com/marumitra-demos/qelvani-jewellers",
    live: "https://github.com/marumitra-demos/qelvani-jewellers",
    metrics: "60fps Smooth · Realtime Supabase",
    highlights: [
      "StateNotifier reactive Riverpod state management",
      "Realtime Supabase WebSocket price & stock sync",
      "Secure OTP Phone & Biometric Auth gate",
    ],
    hotspots: [
      {
        title: "Supabase Realtime Stream",
        subtitle: "WebSocket auto-syncing catalog & live gold price changes",
        xPercent: 72,
        yPercent: 24,
      },
      {
        title: "Riverpod StateNotifier",
        subtitle: "Immutable UI state & reactive multi-step checkout flow",
        xPercent: 28,
        yPercent: 68,
      },
    ],
    telemetry: {
      engine: "Flutter 3.22 / Dart 3",
      state: "Riverpod 2.5 (StateNotifier)",
      storage: "Supabase Realtime PostgreSQL",
      fps: "60.0 FPS Locked",
    },
  },
  {
    id: "marble-center",
    number: "07 / 13",
    title: "Marble Centre",
    category: "Enterprise ERP & Customer Management Mobile App",
    type: "mobile",
    description:
      "A high-performance operational and customer management mobile application for stone and marble enterprises. Engineered with offline-first SQLite persistence, automated PDF quotation and invoice generation, thermal receipt printing, CSV export, and cloud synchronization.",
    technologies: ["Flutter", "Dart", "Supabase", "PDF & Printing", "Offline SQLite", "CSV Export"],
    image: "/images/projects/marble-center.jpg",
    alt: "Marble Centre enterprise mobile application interface showing inventory management and customer orders.",
    displayUrl: "Mobile App · Flutter / SQLite",
    github: "https://github.com/marumitra-clients/marble-customer-management",
    live: "https://github.com/marumitra-clients/marble-customer-management",
    metrics: "Offline-First · Thermal Printing",
    highlights: [
      "Offline SQLite with background sync reconciliation",
      "Dynamic PDF invoice & quotation generation engine",
      "ESC/POS Thermal Bluetooth printer integration",
    ],
    hotspots: [
      {
        title: "Offline SQLite Cache",
        subtitle: "Zero-latency local CRUD with cloud reconciliation",
        xPercent: 28,
        yPercent: 28,
      },
      {
        title: "ESC/POS Thermal Driver",
        subtitle: "Bluetooth byte stream formatting for 58mm/80mm receipts",
        xPercent: 74,
        yPercent: 72,
      },
    ],
    telemetry: {
      engine: "Flutter 3.22 / Dart 3",
      state: "Clean Repository Pattern",
      storage: "Offline SQLite (sqflite)",
      fps: "60.0 FPS Locked",
    },
  },
  {
    id: "pranavic-clinic",
    number: "08 / 13",
    title: "Pranavic Clinic",
    category: "Healthcare & Clinic Queue Mobile App",
    type: "mobile",
    description:
      "A native mobile clinic management application built for doctors and healthcare staff. Facilitates real-time patient token queues (Waiting, In-Chamber, On-Hold), instant normalized patient registration, appointments scheduling, and decoupled medical billing tracking.",
    technologies: ["Flutter", "Dart", "Supabase", "Provider", "Offline-First", "REST APIs"],
    image: "/images/projects/pranavic-clinic.png",
    alt: "Pranavic Clinic native mobile application interface for live queue and appointment management.",
    displayUrl: "Mobile App · Flutter / Supabase",
    github: "https://github.com/dilliprasadm/pranavic-mobile",
    live: "https://github.com/dilliprasadm/pranavic-mobile",
    metrics: "Live Queue · Provider Architecture",
    highlights: [
      "Tri-state patient queue orchestration (Waiting / In-Chamber / On-Hold)",
      "Clean Architecture business layer with repository pattern",
      "Realtime appointment rescheduling & ledger tracking",
    ],
    hotspots: [
      {
        title: "Tri-State Patient Queue",
        subtitle: "FIFO queue orchestration (Waiting / In-Chamber / On-Hold)",
        xPercent: 74,
        yPercent: 26,
      },
      {
        title: "Clean Domain Architecture",
        subtitle: "Decoupled repository layer with offline fallback",
        xPercent: 26,
        yPercent: 68,
      },
    ],
    telemetry: {
      engine: "Flutter 3.22 / Dart 3",
      state: "Provider Architecture",
      storage: "Supabase PostgreSQL RLS",
      fps: "60.0 FPS Locked",
    },
  },
  {
    id: "lumino-kids",
    number: "09 / 13",
    title: "Lumino Kids",
    category: "Interactive Kids Learning & Game Mobile App",
    type: "mobile",
    description:
      "A gamified early-learning mobile application built with Flutter and the Flame 2D game engine. Features interactive drag-and-drop jigsaw puzzles, 30+ frame animated 3D mascot feedback, audio narration effects, and text-to-speech (TTS) voice synthesis for kids.",
    technologies: ["Flutter", "Dart", "Flame Engine", "Flame Audio", "TTS Voice", "Gamification"],
    image: "/images/projects/lumino-kids.png",
    alt: "Lumino Kids interactive mobile game application showcasing 3D mascot and learning puzzles.",
    displayUrl: "Mobile App · Flutter / Flame",
    github: "https://github.com/dilliprasadm/lumino-kids",
    live: "https://github.com/dilliprasadm/lumino-kids",
    metrics: "Flame 2D Engine · Interactive Canvas",
    highlights: [
      "Flame 2D sub-pixel physics loop & sprite collision",
      "Animated interactive 3D mascot feedback states",
      "Text-to-speech phonetic synthesis engine",
    ],
    hotspots: [
      {
        title: "Flame 2D Physics Loop",
        subtitle: "Sub-pixel sprite collision & jigsaw snapping tick",
        xPercent: 70,
        yPercent: 30,
      },
      {
        title: "Phonetic TTS Voice Engine",
        subtitle: "Real-time speech synthesis for interactive kid feedback",
        xPercent: 30,
        yPercent: 66,
      },
    ],
    telemetry: {
      engine: "Flutter 3.22 + Flame 2D",
      state: "Interactive Game Loop",
      storage: "Local Asset Bundles",
      fps: "60.0 FPS Locked",
    },
  },

  // ==========================================
  // 3. DEVELOPER TOOLS, DOCS & UTILITIES
  // ==========================================
  {
    id: "git-commands",
    number: "10 / 13",
    title: "Git Commands Reference Guide",
    category: "Developer Documentation & Open Source",
    type: "docs",
    description:
      "A comprehensive, structured reference guide for Git commands and industry best practices. Covers branching strategies, pull requests, interactive rebasing, cherry-picking, stash workflows, and merge conflict resolution.",
    technologies: ["Git", "GitHub", "Markdown", "DevOps", "Shell"],
    image: "/images/projects/git-commands.png",
    alt: "Git commands technical documentation and workflow reference guide.",
    displayUrl: "github.com/dilliprasadm/git-commands",
    live: "https://github.com/dilliprasadm/git-commands",
    github: "https://github.com/dilliprasadm/git-commands",
    metrics: "Open Source · Terminal Cheatsheet",
    highlights: [
      "Full Git lifecycle commands reference",
      "Multi-branch release pipelines & rebase guide",
      "Interactive command snippets with quick copy",
    ],
    terminalSnippet: [
      "$ git checkout -b feature/dynamic-queue",
      "$ git commit -m 'feat: optimize rls query latency'",
      "$ git push origin main --tags",
    ],
  },
  {
    id: "temperature-converter",
    number: "11 / 13",
    title: "Temperature Converter Website",
    category: "Interactive Utility Tool",
    type: "docs",
    description:
      "A real-time, bidirectional temperature conversion web application supporting Celsius, Fahrenheit, and Kelvin scales with instant formula calculations and clean responsive UI.",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    image: "/images/projects/temperature-converter.png",
    alt: "Clean temperature converter web application showing real-time unit conversion.",
    displayUrl: "dilliprasadm.github.io/Temperature-Converter-Website",
    live: "https://dilliprasadm.github.io/Temperature-Converter-Website/",
    github: "https://github.com/dilliprasadm/Temperature-Converter-Website",
    metrics: "Zero-Latency DOM Engine",
    highlights: [
      "Bidirectional mathematical formula execution",
      "Sub-pixel responsive flex layout",
      "Keyboard-accessible input formatting",
    ],
    terminalSnippet: [
      "const toFahrenheit = (c) => (c * 9/5) + 32;",
      "const toKelvin = (c) => c + 273.15;",
    ],
  },
  {
    id: "basic-form",
    number: "12 / 13",
    title: "Basic Registration Form",
    category: "Form Validation & UI Component",
    type: "docs",
    description:
      "A structured client-side user registration interface engineered with robust regex validations, accessible input formatting, real-time error states, and responsive styling.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Validation API"],
    image: "/images/projects/basic-form.png",
    alt: "Registration form interface with field validations and clean styling.",
    displayUrl: "dilliprasadm.github.io/Basic-form",
    live: "https://dilliprasadm.github.io/Basic-form/",
    github: "https://github.com/dilliprasadm/Basic-form",
    metrics: "Regex Validation Engine",
    highlights: [
      "Custom regex pattern validator",
      "WCAG accessible focus rings & ARIA live errors",
      "Cross-browser input normalization",
    ],
    terminalSnippet: [
      "const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;",
      "validator.validate(formData); // PASS",
    ],
  },
  {
    id: "diwali-shopping",
    number: "13 / 13",
    title: "Diwali Shopping Page",
    category: "E-Commerce Festive Landing Page",
    type: "docs",
    description:
      "A vibrant, festive e-commerce product landing page ('Parley Crackers') crafted for seasonal shopping, featuring visual product cards, category navigation, and responsive celebratory banners.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    image: "/images/projects/diwali-shopping.png",
    alt: "Diwali festive shopping landing page with cracker products and festival themes.",
    displayUrl: "dilliprasadm.github.io/Diwali-shopping-page",
    live: "https://dilliprasadm.github.io/Diwali-shopping-page/",
    github: "https://github.com/dilliprasadm/Diwali-shopping-page",
    metrics: "Festive E-Commerce UI",
    highlights: [
      "CSS grid catalog with pricing cards",
      "Festive particle celebration header",
      "Lightweight zero-dependency architecture",
    ],
    terminalSnippet: [
      "<section class='cracker-catalog'>",
      "  <div class='product-card' data-stock='active'>",
    ],
  },
];
