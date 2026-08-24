export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  skills: string[];
}

export const primarySkills = [
  { name: "REACT", version: "v18+", detail: "COMPONENT-DRIVEN UI" },
  { name: "NEXT.JS", version: "v14+", detail: "SSR & STATIC GENERATION" },
  { name: "TYPESCRIPT", version: "", detail: "STATIC TYPING & ARCHITECTURE" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    number: "[01]",
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    id: "ui-motion",
    number: "[02]",
    title: "UI & MOTION",
    skills: ["Tailwind CSS", "CSS", "Framer Motion", "Responsive Design"],
  },
  {
    id: "mobile-rt",
    number: "[03]",
    title: "MOBILE & RT",
    skills: ["Flutter", "Dart", "Firebase", "Agora RTC"],
  },
  {
    id: "workflow",
    number: "[04]",
    title: "WORKFLOW",
    skills: ["Git & GitHub", "Figma", "Vercel", "REST APIs"],
  },
];
