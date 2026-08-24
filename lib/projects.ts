export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  alt: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "hsm-grand-inn",
    number: "01 / 09",
    title: "HSM Grand Inn",
    category: "Luxury Hospitality Website",
    description:
      "A completely bespoke digital front door and booking experience for a premier luxury hotel in Chittoor. Features seamless room reservations, architectural photography showcases, and fluid scroll interactions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW7z5dxqwfzLApKS1-LvvlIr-BhAmH_eoKGxsZmh9nDzP-zjk9BjvbFOhvY84ICiUUqE37T2zYeJ3wTiXpqMc1H_r8Zlz6eBAI0Wp7Uf63BJpGdyw2RoLrPwb1lW33iM87hxYZQHio3Nr-VsCVQqXbREBkkRI2LDKrvm5aGKU_MsevWqt1HUOBfgPmwkLUiUTARrAPMT52nkkkBa4U1u6TFNB9XYDgEr83CgLZDey2ef2Dc39V5WR-aA",
    alt: "Luxurious boutique hospitality website interface featuring architectural photography and suite booking.",
    live: "https://hsm-grandinn.vercel.app/",
    github: "https://github.com/dilliprasadm/hsm-grand-inn",
  },
  {
    id: "manish-jewellers",
    number: "02 / 09",
    title: "Manish Jewellers",
    category: "Luxury Jewellery Atelier",
    description:
      "An editorial, high-performance web experience crafted for a historic Rajasthan jewellery atelier (est. 1910). Showcasing royal Jadau, Polki, and certified gold collections with WhatsApp direct enquiry integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXRIIer_xAJ1Hsyl7t7Z8BUoP0gIGJZ6U3d20Sgp7rZe4InEPI__pu4OT7QVXW9OWCsFsvZFAZl6kvNW1FJMqhhOZqCvBezV4N2JGY-UgFC9d8KnLXzu3za6aX6rTpKFirogLk9MahPG_1LPp4azAPupyFRpwPztIDgXD55NYFx8J9I5-Ri71uQcE7u46i-8GS1yq6hffa_i3ujT3U0GMIF11YulP0q6NeyBHSMGmbn5UPcYdA5a0gXQ",
    alt: "A highly polished, dark luxury editorial website preview for Manish Jewellers with royal polki and diamond necklace.",
    live: "https://manish-jewellers-ajmer.vercel.app/",
    github: "https://github.com/dilliprasadm/manish_jewellers",
  },
  {
    id: "npk-business-solutions",
    number: "03 / 09",
    title: "NPK Business Solutions",
    category: "Enterprise IT & Digital Transformation",
    description:
      "Official portal for NPK Business Solutions (Zoho Authorized Partner), delivering end-to-end ERP implementations (Zoho, Tally Prime, NetSuite), Salesforce CRM, Power BI analytics, and low-code automations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMQ6l3snpGl4rXv0J-glRQmYYWbB03erNB5tGHnge3buK0iUQVaHT6myFfTZKpmJvrzlXkk92VxPXhtryDkRlJIpkd086WZIk_En4UOEE235iDNMDtANN-XOwSHVFASiZKRZr0KNf6RWhTGHJ6lFwLicMdbZMs42lA0wKIBEVTlNoRqaf4rhYb4Btvqta2nrMlthvVpx5znPrxvkBcXrV-Et0_xZJ1GIg_xa1G-I5KZS_a4zwkAz-mAA",
    alt: "Corporate enterprise technology portal for NPK Business Solutions featuring digital transformation services.",
    live: "https://www.npkbss.in/",
    github: "https://github.com/dilliprasadm/npk-business-solutions",
  },
  {
    id: "marumitra",
    number: "04 / 09",
    title: "MARUMiTRA",
    category: "Software Consultancy & Agency",
    description:
      "A high-impact corporate website for a DPIIT-recognized IT consultancy and software engineering company in Jaipur. Highlights AI solutions, custom software engineering, and modern cloud architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis Scroll"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd_v46isgU4pDlU28DcYBlaCnz436XXsBS7o2ql1ntHK4cns4mNYaPqq9Weh17cAfn4TOQwa5ZOHp0aZap9r3JmV_6KjGffz5tWM1tOuPxaIFI5O8tZgcOUGdFI8T7BDJ-A2PoJR0qpVGASeexRxY9Vt3SpUtuSZAbY6Q_VZk3UbLtfznvTaHuvbR6fZOXzKhYgbGpJc0HnryP0qr1t17BT1h5NMIkBHdy71QqJEpTShkvrSs2sr5uJg",
    alt: "Modern software consultancy agency website showcasing AI services and custom development.",
    live: "https://marumitra.com/",
    github: "https://github.com/dilliprasadm",
  },
  {
    id: "git-commands",
    number: "05 / 09",
    title: "Git Commands Reference Guide",
    category: "Developer Documentation & Open Source",
    description:
      "A comprehensive, structured reference guide for Git commands and industry best practices. Covers branching strategies, pull requests, advanced merge conflicts, and team collaboration workflows.",
    technologies: ["Git", "GitHub", "Markdown", "DevOps"],
    image:
      "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?q=80&w=1200&auto=format&fit=crop",
    alt: "Git version control and branching workflow documentation interface.",
    live: "https://github.com/dilliprasadm/git-commands",
    github: "https://github.com/dilliprasadm/git-commands",
  },
  {
    id: "money-wise",
    number: "06 / 09",
    title: "MoneyWise (MyMoney)",
    category: "Personal Finance & Expense Manager",
    description:
      "A secure, responsive personal finance tracking web application. Features Google Authentication, real-time balance calculations, recurring bill reminders, and person-wise debt settlement tracking.",
    technologies: ["React", "TypeScript", "Vite", "Firebase Auth", "Firestore"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern personal finance dashboard interface showing expense graphs and balance breakdown.",
    live: "https://mymoney-cf6c2.web.app/",
    github: "https://github.com/dilliprasadm/money-wise",
  },
  {
    id: "temperature-converter",
    number: "07 / 09",
    title: "Temperature Converter Website",
    category: "Interactive Utility Tool",
    description:
      "A real-time, bidirectional temperature conversion web application supporting Celsius, Fahrenheit, and Kelvin scales with instant formula calculations and clean responsive UI.",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    image:
      "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?q=80&w=1200&auto=format&fit=crop",
    alt: "Clean temperature converter web application showing real-time unit conversion.",
    live: "https://dilliprasadm.github.io/Temperature-Converter-Website/",
    github: "https://github.com/dilliprasadm/Temperature-Converter-Website",
  },
  {
    id: "basic-form",
    number: "08 / 09",
    title: "Basic Registration Form",
    category: "Form Validation & UI Component",
    description:
      "A structured client-side user registration interface engineered with robust regex validations, accessible input formatting, and responsive cross-device layout styling.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Validation API"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    alt: "Registration form interface with field validations and clean styling.",
    live: "https://dilliprasadm.github.io/Basic-form/",
    github: "https://github.com/dilliprasadm/Basic-form",
  },
  {
    id: "diwali-shopping",
    number: "09 / 09",
    title: "Diwali Shopping Page",
    category: "E-Commerce Festive Landing Page",
    description:
      "A vibrant, festive e-commerce product landing page ('Parley Crackers') crafted for seasonal festive shopping, featuring visual product cards and responsive celebratory banners.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    alt: "Diwali festive shopping landing page with cracker products and festival themes.",
    live: "https://dilliprasadm.github.io/Diwali-shopping-page/",
    github: "https://github.com/dilliprasadm/Diwali-shopping-page",
  },
];
