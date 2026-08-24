import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dilli Prasad | Frontend Developer & UI Architect",
  description:
    "Production-quality portfolio of Dilli Prasad, a Frontend Developer crafting high-performance, modern, and interactive digital experiences with React, Next.js, and TypeScript.",
  keywords: [
    "Dilli Prasad",
    "Frontend Developer",
    "UI Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Dilli Prasad" }],
  creator: "Dilli Prasad",
  metadataBase: new URL("https://dilliprasad.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dilliprasad.com",
    title: "Dilli Prasad | Frontend Developer & UI Architect",
    description:
      "Frontend Developer focused on building modern, responsive, and high-performance digital experiences.",
    siteName: "Dilli Prasad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilli Prasad | Frontend Developer & UI Architect",
    description:
      "Frontend Developer focused on building modern, responsive, and high-performance digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased font-body">
        {children}
      </body>
    </html>
  );
}
