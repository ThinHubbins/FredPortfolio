import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import PageTransition from "./components/transition";
import SmoothScroll from "./components/smoothscroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odinaka.com"),

  title: {
    default: "Fredrick Chinweze | Full-Stack Web Developer in Nigeria",
    template: "%s | Fredrick Chinweze",
  },

  description:
    "Fredrick Chinweze is a full-stack web developer in Nigeria specializing in React, Next.js, MERN stack, frontend engineering, and modern UI design. Explore projects, skills, and development work.",

  keywords: [
    "Fredrick Chinweze",
    "Fredrick",
    "Full Stack Developer",
    "Web Developer Nigeria",
    "Frontend Developer Nigeria",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "Portfolio Website",
    "Hire Web Developer Nigeria",
    "UI Engineer",
  ],

  authors: [{ name: "Fredrick Chinweze" }],
  creator: "Fredrick Chinweze",
  publisher: "Fredrick Chinweze",

  applicationName: "Fredrick Portfolio",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Fredrick Chinweze | Full-Stack Web Developer in Nigeria",
    description:
      "Portfolio of Fredrick Chinweze — full-stack developer building modern digital experiences with React, Next.js, MERN stack, and scalable architecture.",
    url: "https://odinaka.com",
    siteName: "Fredrick Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pfp.png",
        width: 1200,
        height: 630,
        alt: "Fredrick Chinweze Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fredrick Chinweze | Full-Stack Web Developer",
    description:
      "Modern portfolio built with Next.js, React, TailwindCSS, and creative UI systems.",
    images: ["/pfp.png"],
    creator: "@yourhandle",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-site-verification-code",
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fredrick Chinweze",
    url: "https://odinaka.com",
    image: "https://odinaka.com/pfp.png",
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, MERN stack, and modern UI engineering.",
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "UI Design",
      "Frontend Engineering",
      "SEO",
    ],
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://x.com/yourusername",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("theme");
                if (
                  savedTheme === "dark" ||
                  (!savedTheme &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
                ) {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>

      <body
        className={`${inter.className} bg-white text-black dark:bg-black dark:text-white antialiased`}
      >
        <PageTransition />

        <div id="page-wrapper" className="min-h-screen flex flex-col">
          <main className="flex-1">
            <SmoothScroll>{children}</SmoothScroll>
          </main>
        </div>
      </body>
    </html>
  );
}