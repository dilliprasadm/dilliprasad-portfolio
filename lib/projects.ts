export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  type: "mobile" | "web";
  description: string;
  technologies: string[];
  image: string;
  alt: string;
  displayUrl: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  // --- Mobile Projects ---
  {
    id: "qelvani-jewellers",
    number: "01 / 13",
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
  },
  {
    id: "marble-center",
    number: "02 / 13",
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
  },
  {
    id: "pranavic-clinic",
    number: "03 / 13",
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
  },
  {
    id: "lumino-kids",
    number: "04 / 13",
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
  },

  // --- Web Projects ---
  {
    id: "hsm-grand-inn",
    number: "05 / 13",
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
  },
  {
    id: "manish-jewellers",
    number: "06 / 13",
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
  },
  {
    id: "npk-business-solutions",
    number: "07 / 13",
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
  },
  {
    id: "marumitra",
    number: "08 / 13",
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
  },
  {
    id: "money-wise",
    number: "09 / 13",
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
  },
  {
    id: "git-commands",
    number: "10 / 13",
    title: "Git Commands Reference Guide",
    category: "Developer Documentation & Open Source",
    type: "web",
    description:
      "A comprehensive, structured reference guide for Git commands and industry best practices. Covers branching strategies, pull requests, advanced merge conflicts, and team collaboration workflows.",
    technologies: ["Git", "GitHub", "Markdown", "DevOps"],
    image: "/images/projects/git-commands.png",
    alt: "Git commands technical documentation and workflow reference guide.",
    displayUrl: "github.com/dilliprasadm/git-commands",
    live: "https://github.com/dilliprasadm/git-commands",
    github: "https://github.com/dilliprasadm/git-commands",
  },
  {
    id: "temperature-converter",
    number: "11 / 13",
    title: "Temperature Converter Website",
    category: "Interactive Utility Tool",
    type: "web",
    description:
      "A real-time, bidirectional temperature conversion web application supporting Celsius, Fahrenheit, and Kelvin scales with instant formula calculations and clean responsive UI.",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    image: "/images/projects/temperature-converter.png",
    alt: "Clean temperature converter web application showing real-time unit conversion.",
    displayUrl: "dilliprasadm.github.io/Temperature-Converter-Website",
    live: "https://dilliprasadm.github.io/Temperature-Converter-Website/",
    github: "https://github.com/dilliprasadm/Temperature-Converter-Website",
  },
  {
    id: "basic-form",
    number: "12 / 13",
    title: "Basic Registration Form",
    category: "Form Validation & UI Component",
    type: "web",
    description:
      "A structured client-side user registration interface engineered with robust regex validations, accessible input formatting, and responsive cross-device layout styling.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Validation API"],
    image: "/images/projects/basic-form.png",
    alt: "Registration form interface with field validations and clean styling.",
    displayUrl: "dilliprasadm.github.io/Basic-form",
    live: "https://dilliprasadm.github.io/Basic-form/",
    github: "https://github.com/dilliprasadm/Basic-form",
  },
  {
    id: "diwali-shopping",
    number: "13 / 13",
    title: "Diwali Shopping Page",
    category: "E-Commerce Festive Landing Page",
    type: "web",
    description:
      "A vibrant, festive e-commerce product landing page ('Parley Crackers') crafted for seasonal festive shopping, featuring visual product cards and responsive celebratory banners.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    image: "/images/projects/diwali-shopping.png",
    alt: "Diwali festive shopping landing page with cracker products and festival themes.",
    displayUrl: "dilliprasadm.github.io/Diwali-shopping-page",
    live: "https://dilliprasadm.github.io/Diwali-shopping-page/",
    github: "https://github.com/dilliprasadm/Diwali-shopping-page",
  },
];
