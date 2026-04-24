import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import PageTransition from "./components/transition";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fredrick | Full-Stack Web Developer",
    template: "%s | Fredrick Portfolio",
  },
  description:
    "Fredrick is a full-stack web developer specializing in React, Next.js, and modern UI design. Explore projects, skills, and development wor.",
  keywords: [
    "Fredrick",
    "web developer",
    "full stack developer",
    "Next.js developer",
    "React developer",
    "frontend developer",
    "portfolio",
    "JavaScript developer",
    "Nigeria developer",
    "Chinweze Fredrick",
    "Chinweze"
  ],
  authors: [{ name: "Fredrick" }],
  creator: "Fredrick",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Fredrick | Full-Stack Web Developer",
    description:
      "Fredrick Chinweze — MERN stack engineer shaping web experiences through modern design and solid architecture.",
    url: "https://your-domain.com",
    siteName: "Fredrick Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fredrick Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fredrick | Full-Stack Web Developer",
    description:
      "Modern web developer portfolio built with Next.js and tailwindcss.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* ✅ Runs before paint — no flash */}
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') document.documentElement.classList.add('dark');
            } catch(e) {}
          `
        }} />
      </head>
     <body className={inter.className}>
  <PageTransition />

  <div id="page-wrapper" className="min-h-screen flex flex-col">
    <main className="flex-1">
      {children}
    </main>


  </div>
</body>
    </html>
  );
}