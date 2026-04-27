import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[115vh] md:min-h-screen flex-col items-center p-4 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <div className="w-full grid gap-6 items-start lg:grid-cols-[250px_1fr_2fr] md:grid-cols-[300px_2fr] grid-cols-1 mt-10 mb-20">
        {/* GRID 1 — FIXED */}
        <div className="hidden lg:block">
          <div className="fixed top-[30%] left-6 w-[250px]">
            <div className="p-4 dark:bg-black flex items-center">
              <div className="hover:translate-x-2 hover:cursor-pointer transition-transform duration-300 inline-flex items-center gap-2">
                <div className="h-px w-5 bg-black/20 dark:bg-white/20"></div>
                <Link href="#introduction">
                  <span>Introduction</span>
                </Link>
              </div>
            </div>
            <div className="p-4 dark:bg-black flex items-center">
              <div className="hover:translate-x-2 hover:cursor-pointer transition-transform duration-300 inline-flex items-center gap-2">
                <div className="h-px w-5 bg-black/20 dark:bg-white/20"></div>
                <Link href="#work-experience">
                  <span>Work Experience</span>
                </Link>
              </div>
            </div>
            <div className="p-4 dark:bg-black flex items-center">
              <div className="hover:translate-x-2 hover:cursor-pointer transition-transform duration-300 inline-flex items-center gap-2">
                <div className="h-px w-5 bg-black/20 dark:bg-white/20"></div>
                <Link href="#studies">
                  <span>Studies</span>
                </Link>
              </div>
            </div>
            <div className="p-4 dark:bg-black flex items-center">
              <div className="hover:translate-x-2 hover:cursor-pointer transition-transform duration-300 inline-flex items-center gap-2">
                <div className="h-px w-5 bg-black/20 dark:bg-white/20"></div>
                <Link href="#skills">
                  <span>Technical Skills</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* GRID 2 — STICKY */}
        <div className="lg:col-start-2 h-full">
          <div className="sticky top-15 self-start">
            <div className="p-4 flex flex-col items-center justify-center rounded-xl">
              <Image
                src="/pfp.png"
                alt="profile-pic"
                width={190}
                height={190}
                className="rounded-xl"
              />
              <div className="flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-white/80"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-black dark:text-white text-md font-normal">
                  Africa/Nigeria
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <div className="px-5 text-black/70 dark:text-white/70 py-0.5 bg-white dark:bg-black border border-black/70 font-bold dark:border-white/50 rounded-lg text-sm text-center">
                  English
                </div>
                <div className="px-5 text-black/70 dark:text-white/70 py-0.5 bg-white dark:bg-black border border-black/70 font-bold dark:border-white/50 rounded-lg text-sm text-center">
                  Igbo
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID 3 — SCROLL */}
        <div className="text-left w-full px-1 md:px-0">
          {/* ── INTRODUCTION ── */}
          <section id="introduction">
            <div className="flex items-center flex-col md:items-start">
              <a
                href="https://cal.com/fredy-chinweze-ojsasb/project-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 font-semibold rounded-full border border-black/20 dark:border-white/20 px-3 py-1.5 mb-8 transition-colors duration-200"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 md:size-5 shrink-0"
                >
                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs md:text-sm">Schedule a call</span>
                <span className="p-1 border border-gray-300 dark:border-white/20 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 sm:size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>

              <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold sm:mb-4 text-black dark:text-white leading-tight">
                Chinweze Fredrick
              </h1>
              <p className="text-md sm:text-xl text-gray-600 dark:text-gray-400 sm:mb-6">
                Full-Stack MERN Developer
              </p>
              <div className="flex flex-wrap gap-3 mt-2 mb-8">
                <a
                  href="https://github.com/ThinHubbins"
                  target="_blank"
                  className="p-2 sm:px-3 sm:py-1.5 border border-gray-200 dark:border-white/10 flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-300"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={15}
                    height={15}
                    className="dark:invert w-5 sm:w-5"
                  />
                  <span className="sm:block hidden text-sm">Github</span>
                </a>

                <a
                  href="mailto:fredychinweze@gmail.com"
                  target="_blank"
                  className="p-2 sm:px-3 sm:py-1.5 border border-gray-200 dark:border-white/10 flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-300"
                >
                  <Image
                    src="/email.svg"
                    alt="Email"
                    width={15}
                    height={15}
                    className="dark:invert w-5 sm:w-5"
                  />
                  <span className="sm:block hidden text-sm">Email</span>
                </a>

                <a
                  href="https://www.instagram.com/fredy__art?igsh=a3pkYWJ5eHYwN3Ex"
                  target="_blank"
                  className="p-2 sm:px-3 sm:py-1.5 border border-gray-200 dark:border-white/10 flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-300"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={15}
                    height={15}
                    className="dark:invert w-5 sm:w-5"
                  />
                  <span className="sm:block hidden text-sm">Instagram</span>
                </a>
              </div>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl">
              I build things for the web and I do it well. From database to
              interface, I craft fast, scalable, and purposeful applications
              using MongoDB, Express.js, React, and Node.js. Every line of code
              is a step forward — I&apos;m always learning, always leveling up,
              and always shipping.{" "}
              <span className="font-semibold text-black dark:text-white">
                Available for exciting projects that challenge me to grow.
              </span>
            </p>
          </section>

          {/* ── WORK EXPERIENCE ── */}
          <section id="work-experience" className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white">
              Work Experience
            </h2>

            <div className="rounded-2xl dark:border-white/10 overflow-hidden">
              <div className="p-5 sm:p-6 dark:border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <span className="text-lg font-semibold text-black dark:text-white block">
                      Frontend Developer Intern — Archsaint Nexus
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      Lead Frontend Developer
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0 mt-1 sm:mt-0">
                    2026 – 2026
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                  Contributed to multiple real-world projects, working closely
                  with designers and developers to build responsive,
                  high-performance web applications.
                </p>
              </div>

              {/* Project — Sitcity */}
              <div className="p-5 sm:p-6 flex flex-col lg:flex-row gap-5 dark:border-white/10">
                <div className="relative shrink-0 w-full sm:w-[220px]">
                  <Image
                    src="/sitcity1.png"
                    alt="SitCity"
                    width={220}
                    height={140}
                    className="rounded-lg p-1 border border-gray-300 dark:border-gray-600 object-cover sm:w-[220px] h-[140px]"
                  />
                  <div className="absolute bottom-2 left-2">
                    <a
                      href="https://sitcity-ab19.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white bg-black/60 hover:bg-black/80 transition px-2.5 py-1 rounded-md text-xs">
                        SitCity ↗
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="font-bold text-black dark:text-white">
                    Sitcity
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Partnered with design to translate Figma concepts into
                    production-ready, responsive interfaces with pixel-level
                    precision.
                  </p>
                </div>
              </div>

              {/* Project — LuxHome */}
              <div className="p-5 sm:p-6 flex flex-col lg:flex-col xl:flex-row gap-5">
                <div className="relative shrink-0 w-full sm:w-[220px]">
                  <Image
                    src="/luxhome.png"
                    alt="LuxHome"
                    width={220}
                    height={140}
                    className="rounded-lg p-1 border border-gray-300 dark:border-gray-600 object-cover sm:w-[220px] h-[140px]"
                  />
                  <div className="absolute bottom-2 left-2">
                    <a
                      href="https://luxhome.archsaintnexus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white bg-black/60 hover:bg-black/80 transition px-2.5 py-1 rounded-md text-xs">
                        LuxHome ↗
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="font-bold text-black dark:text-white">
                    LuxHome
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Led frontend development of the host property listing
                    module, collaborating cross-functionally with design and
                    backend teams to deliver a scalable, user-centric submission
                    flow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── STUDIES ── */}
          <section id="studies" className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white">
              Studies
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-black dark:text-white">
                  Ekiti State University
                </span>
                <span className="text-md text-gray-600 dark:text-gray-400 font-semibold">
                  Studied Geolophysics
                </span>
              </div>

              <div className="flex mt-10 flex-col">
                <span className="text-xl font-semibold text-black dark:text-white">
                  {`<h1> Code Tech Academy </h1>`}
                </span>
                <span className="text-md text-gray-600 dark:text-gray-400 font-semibold">
                  Studied Full-Stack Web Development (MERN Stack)
                </span>
              </div>
            </div>
          </section>
          <section id="skills" className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white">
              Technical Skills
            </h2>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-black dark:text-white">
                Frontend
              </span>
              <span className="text-md text-gray-600 dark:text-gray-400 font-semibold mb-4">
                React and Next.js to build fast, scalable web apps with a focus
                on performance and SEO, TypeScript for reliability, Tailwind CSS
                and Bootstrap for responsive UI, and GSAP for smooth animations.
              </span>

              <div className="flex flex-col lg:flex-row gap-5 dark:border-white/10">
                <div className="relative shrink-0 w-[220px]">
                  <Image
                    src="/sitcity1.png"
                    alt="SitCity"
                    width={220}
                    height={140}
                    className="rounded-lg p-1 border border-gray-300 dark:border-gray-600 object-cover w-[220px] h-[140px]"
                  />
                  <div className="absolute bottom-2 left-2">
                    <a
                      href="https://sitcity-ab19.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white bg-black/60 hover:bg-black/80 transition px-2.5 py-1 rounded-md text-xs">
                        SitCity ↗
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="font-bold text-black dark:text-white">
                    Sitcity
                  </span>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex flex-wrap gap-2">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/reactjs.svg"
                        alt="react"
                        width={20}
                        height={20}
                        className="color-invert rounded-full"
                      />
                      <span>React.js</span>
                    </div>
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/bootstrap.svg"
                        alt="bootstrap"
                        width={20}
                        height={20}
                      />
                      <span>Bootstrap</span>
                    </div>
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/gsap.svg"
                        alt="gsap"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>GSAP</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex mt-5 flex-col xl:flex-row gap-5 dark:border-white/10">
                <div className="relative shrink-0 w-[220px]">
                  <Image
                    src="/luxhome.png"
                    alt="LuxHome"
                    width={220}
                    height={140}
                    className="rounded-lg p-1 border border-gray-300 dark:border-gray-600 object-cover w-[220px] h-[140px]"
                  />
                  <div className="absolute bottom-2 left-2">
                    <a
                      href="https://luxhome.archsaintnexus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white bg-black/60 hover:bg-black/80 transition px-2.5 py-1 rounded-md text-xs">
                        LuxHome ↗
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="font-bold text-black dark:text-white">
                    LuxHome
                  </span>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex flex-wrap gap-2">
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/nextjs.svg"
                        alt="nextjs"
                        width={20}
                        height={20}
                        className="color-invert rounded-full"
                      />
                      <span>Next.js</span>
                    </div>
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/gsap.svg"
                        alt="gsap"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>GSAP</span>
                    </div>
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/tailwind.svg"
                        alt="tailwind"
                        width={20}
                        height={20}
                        className="color-invert"
                      />
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/typeScript.svg"
                        alt="typescript"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-xl mt-10 font-semibold text-black dark:text-white">
                Backend
              </span>
              <span className="text-md text-gray-600 dark:text-gray-400 font-semibold mb-4">
                Backend developer using Node.js to build fast, scalable APIs and
                server-side applications with a focus on performance, security,
                and efficient data handling.
              </span>

              <div className="flex flex-col xl:flex-row gap-5 dark:border-white/10">
                <div className="relative shrink-0 w-[220px]">
                  <Image
                    src="/ghostpen.png"
                    alt="GhostPen"
                    width={220}
                    height={140}
                    className="rounded-lg p-1 border border-gray-300 dark:border-gray-600 object-cover w-[220px] h-[140px]"
                  />
                  <div className="absolute bottom-2 left-2">
                    <a
                      href="https://ghost-pen-mu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white bg-black/60 hover:bg-black/80 transition px-2.5 py-1 rounded-md text-xs">
                        GhostPen ↗
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="font-bold text-black dark:text-white">
                    GhostPen
                  </span>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex flex-wrap gap-2">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/reactjs.svg"
                        alt="react"
                        width={20}
                        height={20}
                        className="color-invert rounded-full"
                      />
                      <span>React.js</span>
                    </div>
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/nodejs.svg"
                        alt="nodejs"
                        width={20}
                        height={20}
                        className="color-invert rounded-full"
                      />
                      <span>Node.js</span>
                    </div>
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/mongodb.svg"
                        alt="mongodb"
                        width={20}
                        height={20}
                        className="color-invert rounded-full"
                      />
                      <span>MongoDB</span>
                    </div>
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/expressjs.svg"
                        alt="expressjs"
                        width={20}
                        height={20}
                        className="color-invert rounded-full"
                      />
                      <span>Express.js</span>
                    </div>
                    <div className="flex bg-gray-200 dark:bg-gray-700 items-center border border-gray-300 dark:border-gray-600 rounded-full px-2 gap-2 mt-4">
                      <Image
                        src="/bootstrap.svg"
                        alt="bootstrap"
                        width={20}
                        height={20}
                        className="color-invert rounded-full"
                      />
                      <span>Bootstrap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
