export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  focus: string;
  domain: string;
  contributions: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "INDEPENDENT",
    period: "2023 — PRESENT",
    description:
      "Building modern web experiences, focusing on responsive interfaces, frontend architecture, and production-ready applications. Bridging the gap between design intent and engineering execution.",
    focus: "React, Next.js, TypeScript",
    domain: "Architecture & UI Systems",
    contributions: [
      "Engineered scalable design systems & reusable component architectures.",
      "Optimized critical rendering paths and responsive viewport layouts.",
      "Integrated complex REST APIs and state synchronization flows.",
    ],
  },
  {
    id: "exp-2",
    role: "Software Developer Intern",
    company: "JAVA HOME CLOUD",
    period: "2023",
    description:
      "The foundation of my journey—learning real-world project structures and delivery workflows. Exposed to the rigors of version control, code reviews, and agile development cycles.",
    focus: "JS, React, Web Fundamentals",
    domain: "Web Engineering",
    contributions: [
      "Developed modular UI components and responsive layouts.",
      "Participated in agile sprints, git branching workflows, and QA cycles.",
      "Collaborated on client-facing features and performance benchmarks.",
    ],
  },
];

export const progressionSteps = [
  "FOUNDATIONS",
  "PRODUCTS",
  "SYSTEMS",
  "EXPERIENCES",
];
