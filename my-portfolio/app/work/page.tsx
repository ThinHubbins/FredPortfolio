"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);

  const work = [
  {
    id: "01",
    title: "Ghost Pen",
    description: "Ghost Pen is a full-stack web application built with Node.js and React, enabling users to anonymously submit and share sensitive content through a secure, privacy-focused system designed to reduce emotional burden while preserving user identity.",
    imageUrl: "/ghostpen.png",
    tag: "Web-App",
    year: "2026",
    url: "https://ghost-pen-mu.vercel.app/",
    skills: [
      { name: "React",      skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js",    skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB",    skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js", skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Bootstrap",  skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    id: "02",
    title: "Luminex",
    description: "Luminex is a frontend-focused crypto landing page that implements client-side authentication using localStorage for managing user session state.",
    imageUrl: "/luminex.png",
    tag: "Web",
    year: "2026",
    url: "https://trueblock-luminex.onrender.com/index.html",
    skills: [
      { name: "React", skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "CSS",   skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    id: "03",
    title: "LuxHome",
    description: "LuxHome is a full-stack real estate platform that enables property listing, discovery, and booking workflows, connecting buyers and sellers through a dynamic web interface.",
    imageUrl: "/luxhome.png",
    tag: "Product",
    year: "2026",
    url: "https://luxhome.archsaintnexus.com/",
    skills: [
      { name: "Next.js",     skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js",     skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB",     skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js",  skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Tailwind CSS",skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "04",
    title: "Expense Pilot",
    description: "Expense Pilot is a comprehensive expense tracking application designed to simplify financial management for individuals and small businesses.",
    imageUrl: "/expense.png",
    tag: "Web-App",
    year: "2026",
    url: "https://expense-pilot-0s44.onrender.com/",
    skills: [
      { name: "React",     skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Bootstrap", skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    id: "05",
    title: "SitCity",
    description: "Sitcity is a frontend landing page for an eCommerce chair manufacturing brand, built with React for component-based UI, Bootstrap for responsive layout and grid structuring, and GSAP for timeline-driven animations.",
    imageUrl: "/sitcity1.png",
    tag: "Web",
    year: "2026",
    url: "https://sitcity-ab19.onrender.com/",
    skills: [
      { name: "React",     skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Bootstrap", skillImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "GSAP",      skillImg: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
    ],
  },
];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance ──────────────────────────────────────────
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".hero-label", { y: 16, opacity: 0, duration: 0.6 })
        .from(
          ".hero-title-line",
          { y: 80, opacity: 0, duration: 0.9, stagger: 0.12 },
          "-=0.3",
        )
        .from(
          ".hero-divider",
          { scaleX: 0, opacity: 0, duration: 0.8, transformOrigin: "left" },
          "-=0.4",
        )
        .from(".hero-count", { y: 10, opacity: 0, duration: 0.5 }, "-=0.5");
      gsap.to(".hero-title-line:last-child", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // ── Each project row ───────────────────────────────────────
      rowsRef.current.forEach((row) => {
        if (!row) return;

        // Query inside the actual img-pane, not relying on direction:rtl layout
        const imgPane = row.querySelector<HTMLElement>(".img-pane");
        const img = row.querySelector<HTMLElement>(".img-pane img");
        const tag = row.querySelector<HTMLElement>(".tag-pill");
        const year = row.querySelector<HTMLElement>(".year-label");
        const heading = row.querySelector<HTMLElement>("h2");
        const desc = row.querySelector<HTMLElement>("p");
        const link = row.querySelector<HTMLElement>(".arrow-link");
        const bigNum = row.querySelector<HTMLElement>(".big-number");
        const clipStart = "inset(0 100% 0 0)";
        const clipEnd = "inset(0 0% 0 0)";

        // Initial states
        gsap.set(row, { opacity: 0.15 });
        gsap.set(imgPane, { clipPath: clipStart });
        gsap.set(img, { scale: 1.2 });
        gsap.set([tag, year, heading, desc, link], { y: 30, opacity: 0 });
        gsap.set(bigNum, { y: 40, opacity: 0 });

        // Scroll-triggered entrance
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        });

        tl.to(row, { opacity: 1, duration: 0.4 })
          .to(
            imgPane,
            { clipPath: clipEnd, duration: 1, ease: "power4.inOut" },
            0,
          )
          .to(img, { scale: 1, duration: 1.2, ease: "power3.out" }, 0)
          .to(tag, { y: 0, opacity: 0.6, duration: 0.5 }, 0.3)
          .to(year, { y: 0, opacity: 0.3, duration: 0.5 }, 0.4)
          .to(heading, { y: 0, opacity: 1, duration: 0.6 }, 0.45)
          .to(desc, { y: 0, opacity: 0.5, duration: 0.5 }, 0.55)
          .to(link, { y: 0, opacity: 0.6, duration: 0.5 }, 0.65)
          .to(
            bigNum,
            { y: 0, opacity: 0.08, duration: 0.9, ease: "power2.out" },
            0.2,
          );

        // Parallax on image
        gsap.to(img, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Hover: big number brightens
        row.addEventListener("mouseenter", () =>
          gsap.to(bigNum, { opacity: 0.15, duration: 0.4 }),
        );
        row.addEventListener("mouseleave", () =>
          gsap.to(bigNum, { opacity: 0.08, duration: 0.4 }),
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=DM+Mono:wght@300;400&display=swap');

        .work-page { font-family: 'DM Mono', monospace; }
        .display-font { font-family: 'Playfair Display', serif; }

        .project-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          border-top: 1px solid currentColor;
          opacity: 0.15;
        }
        .project-row:last-of-type { border-bottom: 1px solid currentColor; }

        /* ── FIX: swap columns with grid order instead of direction:rtl ── */
        .project-row.reverse .img-pane  { order: 2; }
        .project-row.reverse .info-pane { order: 1; }

        .img-pane {
          overflow: hidden;
          position: relative;
        }
        .img-pane img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
        }

        .info-pane {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .big-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(6rem, 12vw, 10rem);
          font-weight: 900;
          line-height: 1;
          opacity: 0;
          position: absolute;
          bottom: 1.5rem;
          right: 2rem;
          pointer-events: none;
        }

        .tag-pill {
          display: inline-block;
          border: 1px solid currentColor;
          padding: 0.2rem 0.75rem;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .arrow-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: inherit;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, gap 0.2s ease;
          width: fit-content;
        }
        .arrow-link:hover { border-color: currentColor; gap: 0.9rem; }

        .hero-title-line { display: block; overflow: hidden; }

        @media (max-width: 768px) {
          .project-row { grid-template-columns: 1fr; }
          .project-row.reverse .img-pane  { order: unset; }
          .project-row.reverse .info-pane { order: unset; }
          .img-pane { min-height: 260px; }
        }
      `}</style>

      <main className="work-page flex flex-col min-h-screen bg-[#f5f2ed] dark:bg-[#0c0c0a] text-[#0c0c0a] dark:text-[#f5f2ed]">
        <Navbar />

        {/* Hero */}
        <section ref={heroRef} className="px-6 md:px-12 pt-16 pb-10">
          <p className="hero-label text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-4">
            Selected Work
          </p>
          <h1 className="display-font text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tight overflow-hidden">
            <span className="hero-title-line">My</span>
            <span className="hero-title-line italic opacity-40">Projects</span>
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <span className="hero-divider h-px flex-1 bg-current opacity-20" />
            <span className="hero-count text-[0.65rem] tracking-widest uppercase opacity-40">
              {work.length} Latest projects
            </span>
          </div>
        </section>

        {/* Project rows */}
        <section className="flex-1">
          {work.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) rowsRef.current[i] = el;
              }}
              className={`project-row ${i % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="img-pane">
                <Image
                  src={project.imageUrl}
                  fill
                  alt={project.title}
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="info-pane">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="tag-pill">{project.tag}</span>
                    <span className="year-label text-[0.65rem] tracking-widest opacity-30">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="display-font text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight mb-4">
                    {project.title}
                  </h2>

                  <p className="text-[0.8rem] leading-relaxed opacity-50 max-w-xs">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(project.skills ?? []).map((skill) => (
                      <div
                        key={skill.name}
                        className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1 gap-2"
                      >
                        <Image
                          src={skill.skillImg}
                          alt={skill.name}
                          width={14}
                          height={14}
                          className="opacity-80"
                        />

                        <span className="text-[0.65rem] font-mono tracking-widest uppercase opacity-70">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={project.url}
                  className="arrow-link mt-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M7 1l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <span className="big-number">{project.id}</span>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-16">
          <Footer />
        </div>
      </main>
    </>
  );
}
