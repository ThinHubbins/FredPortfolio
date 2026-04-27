import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Sekuya } from "next/font/google";
import { Average } from "next/font/google";
import { Mulish } from "next/font/google";
import Marquee from "react-fast-marquee";
import Latest from "../components/latest";


const sekuya = Sekuya({ subsets: ["latin"], weight: "400" });
const average = Average({ subsets: ["latin"], weight: "400" });
const mulish = Mulish({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Bootstrap",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
  ];
  const marquee = [
    "Frontend Dev",
    "Backend Architect",
    "API Design",
    "Database Modeling",
    "Open Source",
    "Technical Writing",
    "CI/CD Pipelines",
    "System Design",
  ];
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 dark:bg-black text-black dark:text-white">
      <Navbar />
      <div className="p-4 sm:p-6">
        

        {/* Subtitle */}
        <div className="text-gray-600 mt-16 sm:mt-24 lg:mt-30">
          <p className={mulish.className + " text-xs sm:text-md font-normal text-gray-400"}>
            {`//  FULLSTACK DEVELOPER . LAGOS, NIGERIA`}
          </p>
        </div>

        {/* Hero row: name/bio left, stats right */}
        <div className="flex flex-col sm:flex-row w-full items-start sm:items-end justify-between gap-10 sm:gap-6">

          {/* Left column */}
          <div className="flex-1">
            <h1 className={sekuya.className + " text-4xl sm:text-5xl font-bold w-min"}>
              Chinweze Fredrick
            </h1>
            <p className={average.className + " mt-4 text-xl sm:text-2xl max-w-sm text-gray-400"}>
              Building the web, one commit at a time.
            </p>
            <div className={average.className + " mt-8 sm:mt-20 text-md max-w-sm text-gray-900 dark:text-gray-200"}>
              I write about what it actually feels like to go from zero to
              shipping production code - the bugs, the breakthroughs, the
              frameworks that click, and the ones that don&apos;t.
            </div>
            <div className="mt-10 sm:mt-30 flex flex-wrap max-w-md items-start gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="py-1 px-3 border border-gray-400 text-sm font-light"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — stats */}
          {/* On mobile: horizontal row; on sm+: vertical stack (original layout) */}
          <div className="flex flex-row sm:flex-col gap-8 sm:gap-0 w-full sm:w-auto justify-around sm:justify-start">
            <div className="flex flex-col items-center justify-center">
              <h1 className={sekuya.className + " text-4xl sm:text-5xl"}>5+</h1>
              <p className={average.className + " text-gray-400 text-sm sm:text-base text-center"}>Years Coding</p>
            </div>
            <div className="flex flex-col sm:mt-20 items-center justify-center">
              <h1 className={sekuya.className + " text-4xl sm:text-5xl"}>30+</h1>
              <p className={average.className + " text-gray-400 text-sm sm:text-base text-center"}>Projects Shipped</p>
            </div>
            <div className="flex flex-col sm:mt-20 items-center justify-center">
              <h1 className={sekuya.className + " text-4xl sm:text-5xl"}>12K+</h1>
              <p className={average.className + " text-gray-400 text-sm sm:text-base text-center"}>Lines Of Thoughts</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <Marquee
          speed={100}
          gradient={false}
          className="bg-black dark:bg-gray-200 text-white dark:text-black font-normal mt-16 sm:mt-20"
        >
          {marquee.map((item) => (
            <div key={item} className="py-3 px-2">
              {item} •
            </div>
          ))}
        </Marquee>

        <Latest />
        <footer className="w-full px-4 md:px-16 pb-10 mt-10">
        
                <div className="relative overflow-hidden rounded-2xl border border-black/30 dark:border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black px-8 py-14 mb-6 flex flex-col items-center justify-center text-center">
                <div className="flex items-center justify-center">
                </div>
                  <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-green-100 dark:bg-green-900/20 blur-2xl pointer-events-none" />
        
                  <span className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase text-purple-500 dark:text-purple-400 mb-3">
                    Stay in the loop
                  </span>
        
                  <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    Fredrick&apos;s Newsletter
                  </h2>
        
                  <p className="relative z-10 text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-md mb-8">
                    Updates on my projects, experiments, and creative journey — straight
                    to your inbox.
                  </p>
        
                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                    <form action="https://formspree.io/f/mbdqvrbl"
                      method="POST"
>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm"
                    />
                    <button className="w-full sm:w-auto whitespace-nowrap mt-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 text-sm">
                      Subscribe →
                    </button>
                    </form>
                  </div>
        
                  <p className="relative z-10 text-xs text-gray-400 dark:text-gray-600 mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
                
              </footer>
        <Footer />
      </div>
    </main>
  );
}