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
    id: "manish-jewellers",
    number: "01 / 04",
    title: "Manish Jewellers",
    category: "Luxury Jewellery Website",
    description:
      "An editorial, high-performance web experience crafted for a premier luxury jewellery brand. Blending seamless WebGL interactions with ultra-crisp typography to elevate digital storytelling.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXRIIer_xAJ1Hsyl7t7Z8BUoP0gIGJZ6U3d20Sgp7rZe4InEPI__pu4OT7QVXW9OWCsFsvZFAZl6kvNW1FJMqhhOZqCvBezV4N2JGY-UgFC9d8KnLXzu3za6aX6rTpKFirogLk9MahPG_1LPp4azAPupyFRpwPztIDgXD55NYFx8J9I5-Ri71uQcE7u46i-8GS1yq6hffa_i3ujT3U0GMIF11YulP0q6NeyBHSMGmbn5UPcYdA5a0gXQ",
    alt: "A highly polished, dark luxury editorial website preview for a jewellery brand with diamond ring and marble texture.",
    live: "https://github.com/dilliprasadm",
  },
  {
    id: "marble-management",
    number: "02 / 04",
    title: "Marble Management",
    category: "Business Management Platform",
    description:
      "A sophisticated, data-driven dashboard architecture built for enterprise operations. Engineered for complex workflows, role-based access, and extreme data density without compromising on a minimalist UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMQ6l3snpGl4rXv0J-glRQmYYWbB03erNB5tGHnge3buK0iUQVaHT6myFfTZKpmJvrzlXkk92VxPXhtryDkRlJIpkd086WZIk_En4UOEE235iDNMDtANN-XOwSHVFASiZKRZr0KNf6RWhTGHJ6lFwLicMdbZMs42lA0wKIBEVTlNoRqaf4rhYb4Btvqta2nrMlthvVpx5znPrxvkBcXrV-Et0_xZJ1GIg_xa1G-I5KZS_a4zwkAz-mAA",
    alt: "A complex SaaS dashboard interface shown in dark mode with glowing data visualizations.",
    live: "https://github.com/dilliprasadm",
  },
  {
    id: "connect-rt",
    number: "03 / 04",
    title: "ConnectRT",
    category: "Real-Time Mobile App",
    description:
      "A low-latency, high-fidelity real-time video communication application. Architected with robust peer-to-peer connections wrapped in a fluid, tactile mobile interface.",
    technologies: ["Flutter", "Dart", "Firebase", "Agora RTC"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd_v46isgU4pDlU28DcYBlaCnz436XXsBS7o2ql1ntHK4cns4mNYaPqq9Weh17cAfn4TOQwa5ZOHp0aZap9r3JmV_6KjGffz5tWM1tOuPxaIFI5O8tZgcOUGdFI8T7BDJ-A2PoJR0qpVGASeexRxY9Vt3SpUtuSZAbY6Q_VZk3UbLtfznvTaHuvbR6fZOXzKhYgbGpJc0HnryP0qr1t17BT1h5NMIkBHdy71QqJEpTShkvrSs2sr5uJg",
    alt: "Sleek mobile app UI design mockup showcasing a real-time video calling application.",
    live: "https://github.com/dilliprasadm",
  },
  {
    id: "hsm-grand-inn",
    number: "04 / 04",
    title: "HSM Grand Inn",
    category: "Hospitality Website",
    description:
      "A completely bespoke digital front door for a boutique hotel. Fusing high-impact architectural photography with smooth, narrative-driven scroll animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW7z5dxqwfzLApKS1-LvvlIr-BhAmH_eoKGxsZmh9nDzP-zjk9BjvbFOhvY84ICiUUqE37T2zYeJ3wTiXpqMc1H_r8Zlz6eBAI0Wp7Uf63BJpGdyw2RoLrPwb1lW33iM87hxYZQHio3Nr-VsCVQqXbREBkkRI2LDKrvm5aGKU_MsevWqt1HUOBfgPmwkLUiUTARrAPMT52nkkkBa4U1u6TFNB9XYDgEr83CgLZDey2ef2Dc39V5WR-aA",
    alt: "Luxurious boutique hospitality website interface featuring architectural photography.",
    live: "https://github.com/dilliprasadm",
  },
];
