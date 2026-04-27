import { Sekuya } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";

const sekuya = Sekuya({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto_Condensed({ subsets: ["latin"], weight: ["400", "600"] });

export default function Latest() {
  const experiences = [
    {
      dates: "2019 – 2021",
      title: "Self-Taught Developer",
      meta: "The Internet",
      description:
        "Started with HTML, CSS, and JavaScript from YouTube tutorials. Built small projects, broke things constantly, and slowly turned curiosity into real skills.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      dates: "2021 – Present",
      title: "Frontend Web Developer",
      meta: "Freelance · Agency Work",
      description:
        "Built responsive web apps and dashboards using React and Next.js. Focused on performance, UI systems, SEO, and clean user experiences.",
      tags: ["React", "Next.js", "TailwindCSS", "GSAP"],
    },
    {
      dates: "2025 – Present",
      title: "Full-Stack Developer",
      meta: "Freelance · Personal Projects",
      description:
        "Built and shipped full-stack applications and SaaS ideas including Luminex, Luxhome, Sitcity, and Ghost Pen. Worked across frontend, backend, and authentication systems.",
      tags: ["Next.js", "Node.js", "Firebase", "MongoDB", "TailwindCSS"],
    },
    {
      dates: "2025",
      title: "Shopify & E-commerce Developer",
      meta: "De Rich Bakery",
      description:
        "Built and managed a Shopify-based store with a custom comic-style UI and WhatsApp checkout flow, focused on conversion and user experience.",
      tags: ["Shopify", "UI Design", "E-commerce"],
    },
    {
      dates: "2024 – Present",
      title: "Content Creator & Automation Builder",
      meta: "TikTok · YouTube Automation",
      description:
        "Creating tech content, growing social platforms, and building automation tools like upload schedulers and Telegram-controlled bots.",
      tags: ["TikTok", "Automation", "Content Creation"],
    },
  ];

  const myStack = [
    {
      title1: "// 01_frontend",
      title: "Frontend",
      lists: [
        "React / Next.js",
        "Typescript",
        "Tailwind CSS",
        "GSAP",
        "Zustand",
        "Testing (Vitest)",
      ],
      letter: "F",
    },
    {
      title1: "// 02_backend",
      title: "Backend",
      lists: [
        "Node.js / Express",
        "Rest API development",
        "SaaS / Product Backend Thinking",
        "WebSocket",
        "JWT / OAuth",
        "Microservices",
      ],
      letter: "R",
    },
    {
      title1: "// 03_data",
      title: "Data & Infra",
      lists: ["MongoDB / CI/CD (GitHub Actions)", "Firebase Data Handling"],
      letter: "E",
    },
    {
      title1: "// 04_craft",
      title: "Craft",
      lists: [
        "System Design",
        "Code Review",
        "Fast Execution",
        "Business-Minded Developer",
        "Creativity",
        "Learn While Building",
      ],
      letter: "D",
    },
  ];

  const posts = [
    {
      id: "02",
      title1: "BACKEND",
      head: "Why I Stopped Being Scared of Databases",
      content:
        "MongoDB felt like a wall—until I started thinking in relationships instead of documents. That shift changed everything. A practical guide for frontend devs crossing over.",
      date: "Apr 26 · MongoDB",
    },
    {
      id: "03",
      title1: "FRONTEND",
      head: "The React Mental Model Nobody Teaches You",
      content:
        "Components aren't just functions. They're tiny state machines with opinions. Once I internalized that, debugging became almost enjoyable. Almost.",
      date: "Apr 24 · React",
    },
    {
      id: "04",
      title1: "CAREER",
      head: "Shipping Your First Side Project Is the Degree",
      content:
        "No interview, no portfolio, no GitHub streak proved my competence like deploying something real that solved a real problem. Here's the one that changed everything.",
      date: "Apr 12 · Career",
    },
  ];

  return (
    <main className="mt-20">
      {/* Section heading */}
      <div className={`${sekuya.className} text-4xl sm:text-5xl mb-10`}>LATEST</div>

      {/* Featured post — stacks on mobile */}
      <div className="border-t-2 border-b-2 border-black dark:border-white w-full flex flex-col sm:flex-row sm:h-[600px]">
        {/* Code panel */}
        <div className="w-full sm:w-1/2 bg-black dark:bg-gray-100 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <span
              className={`${roboto.className} py-1 px-2 text-gray-400 dark:text-gray-500 text-sm font-light border border-gray-600 dark:border-gray-400`}
            >
              FEATURED POST
            </span>

            <pre className="mt-6 text-gray-200 dark:text-gray-800 text-xs sm:text-sm leading-relaxed font-mono overflow-x-auto">
              <code>{`async function learnFullstack() {
  const foundation = await master({
    html: true, css: true,
    js: "deeply"
  });

  const frontend = await build(
    "React components",
    "state machines",
    "pixel-perfect UIs"
  );

  const backend = await explore([
    "Node", "Express",
  ]);

  return ship(frontend + backend);
}`}</code>
            </pre>
          </div>

          <span
            className={`${sekuya.className} text-[80px] sm:text-[120px] font-bold leading-none text-right text-white/10 dark:text-black/10 select-none`}
          >
            01
          </span>
        </div>

        {/* Text panel */}
        <div className="w-full sm:w-1/2 bg-gray-100 dark:bg-black p-6 sm:p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-4 sm:gap-6">
            <span className={`${roboto.className} text-gray-400 dark:text-gray-500 text-sm`}>
              {`// ORIGIN STORY`}
            </span>

            <h2
              className={`${roboto.className} text-2xl sm:text-4xl font-semibold leading-tight text-black dark:text-white`}
            >
              How I Went from Zero to Fullstack in 18 Months
            </h2>

            <p className={`${roboto.className} text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base`}>
              I didn&apos;t have a CS degree, a bootcamp certificate, or a
              mentor. What I had was a broken laptop, a 2G connection, and a
              stubborn refusal to stop. This is the honest story of my first 18
              months learning to code — what I got wrong, what eventually
              clicked, and the exact moment I felt like a real developer.
            </p>
          </div>

          <div>
            <hr className="border-gray-300 dark:border-gray-700 mb-6" />
            <div className="flex justify-between items-center">
              <span className={`${roboto.className} text-gray-400 text-sm`}>
                April 20 2026
              </span>
              <Link
                href={`/blog/01`}
                className={`${roboto.className} px-6 sm:px-10 py-3 text-sm font-semibold
                  bg-black text-gray-300
                  dark:bg-white dark:text-gray-700
                  border border-black dark:border-white
                  hover:bg-white hover:text-black hover:border-black
                  dark:hover:bg-black dark:hover:text-white dark:hover:border-white
                  transition-colors duration-150`}
              >
                READ →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Other posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-l-2 border-black dark:border-white">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border-r-2 border-b-2 border-black dark:border-white p-6 sm:p-8 flex flex-col gap-4 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className={`${roboto.className} text-xs text-gray-400 dark:border-gray-600 px-2 py-1`}>
                {post.title1}
              </span>
              <span
                className={`${sekuya.className} text-4xl sm:text-5xl font-bold text-gray-400 dark:text-gray-700 leading-none select-none`}
              >
                {post.id}
              </span>
            </div>

            <h3 className={`${roboto.className} text-lg sm:text-xl font-semibold text-black dark:text-white leading-snug`}>
              {post.head}
            </h3>

            <p className={`${roboto.className} text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1`}>
              {post.content}
            </p>

            <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
              <span className={`${roboto.className} text-xs text-gray-400`}>{post.date}</span>
              <span
                className={`${roboto.className} text-xs text-gray-400 dark:hover:text-white hover:text-black hover:cursor-pointer transition-colors`}
              >
                <Link href={`/blog/${post.id}`}>READ →</Link>
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Journey section — stacks on mobile */}
      <div className="w-full flex flex-col sm:flex-row min-h-auto sm:min-h-[800px] border-b-2 dark:border-white border-black">
        {/* Left panel */}
        <div className="p-8 sm:p-20 w-full sm:w-1/2 bg-black dark:bg-gray-100 flex flex-col gap-6">
          <span className={`${roboto.className} text-gray-400 dark:text-gray-500 text-sm`}>
            {`// MY JOURNEY`}
          </span>
          <h2 className={`${roboto.className} text-4xl sm:text-7xl font-semibold leading-tight text-white dark:text-black`}>
            The Road So Far
          </h2>
          <p className={`${roboto.className} text-gray-300 text-base sm:text-lg dark:text-gray-700 leading-relaxed`}>
            Every developer&apos;s path is non-linear. Mine involved a lot of
            detours, dead ends, and one particularly humbling regex. Here&apos;s
            the honest version.
          </p>
          <span
            className={`${sekuya.className} mt-auto text-[80px] sm:text-[120px] font-bold leading-none text-right text-white/10 dark:text-black/10 select-none`}
          >
            05
          </span>
        </div>

        {/* Right panel — experiences */}
        <div className="p-6 sm:p-10 w-full sm:w-1/2 bg-gray-100 dark:bg-black flex flex-col justify-center overflow-y-auto">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-[60px_1fr] sm:grid-cols-[70px_1fr] gap-x-4 sm:gap-x-6 py-5 sm:py-6 border-t border-gray-300 dark:border-gray-800 last:border-b last:border-gray-300 last:dark:border-gray-800"
            >
              <span
                className={`${roboto.className} text-xs text-gray-400 dark:text-gray-500 leading-relaxed pt-0.5`}
              >
                {exp.dates}
              </span>

              <div>
                <h3 className={`${roboto.className} text-base font-medium text-black dark:text-white mb-0.5`}>
                  {exp.title}
                </h3>
                <p className={`${roboto.className} text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2`}>
                  {exp.meta}
                </p>
                <p className={`${roboto.className} text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${roboto.className} font-mono text-[11px] px-2 py-0.5 rounded border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-900`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Stack heading */}
      <div className="flex justify-between items-center">
        <div className={`${sekuya.className} text-4xl sm:text-5xl my-10`}>MY STACK</div>
        <div className="font-semibold text-sm text-gray-400">What I build with</div>
      </div>

      {/* Stack grid — 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="border-t-2 border-b-2 border-black dark:border-white w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l-2 border-black dark:border-white">
          {myStack.map((stack) => (
            <div
              key={stack.title}
              className="border-r-2 border-b-2 lg:border-b-0 border-black dark:border-white p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[410px]"
            >
              <div className="flex flex-col">
                <span className={`${roboto.className} text-gray-400 dark:text-gray-500 text-sm mb-4`}>
                  {stack.title1}
                </span>
                <h3 className={`${roboto.className} text-2xl font-bold text-black dark:text-white mb-4`}>
                  {stack.title}
                </h3>
                <hr className="border-gray-200 dark:border-gray-800 mb-4" />
                <ul className="flex flex-col gap-2">
                  {stack.lists.map((item) => (
                    <li
                      key={item}
                      className={`${roboto.className} text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2`}
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <span
                className={`${sekuya.className} text-[60px] sm:text-[72px] leading-none text-right text-black/10 dark:text-white/10 select-none`}
              >
                {stack.letter}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* About + Philosophy — stacks on mobile */}
      <div className="border-t-2 border-b-2 border-black dark:border-white w-full flex flex-col sm:flex-row sm:h-[750px]">
        {/* About panel */}
        <div className="w-full sm:w-1/2 bg-gray-100 dark:bg-black p-6 sm:p-10 flex flex-col justify-between">
          <div className="max-w-sm">
            <span className={`${roboto.className} text-gray-500 dark:text-gray-400 text-sm`}>
              {`// ABOUT ME`}
            </span>
            <h2 className={`${roboto.className} text-2xl sm:text-4xl font-semibold leading-tight text-black dark:text-white`}>
              Engineer. Writer. Perpetual Learner.
            </h2>

            <div className="mt-6 text-gray-800 dark:text-gray-200 text-sm sm:text-md leading-relaxed font-mono">
              I&apos;m a fullstack developer based in Lagos, Nigeria. I started
              teaching myself to code in 2019, fuelled by curiosity and an
              embarrassing number of Stack Overflow tabs. These days I build
              production systems for startups and write honestly about
              everything I learn along the way. This blog is my public notebook
              — a place to think through technical ideas, document my journey,
              and hopefully make someone else&apos;s path a little smoother than
              mine was.
            </div>
          </div>
          <div className="text-gray-400 text-sm mt-10 sm:mt-50 dark:text-gray-500">
            Available for freelance · Q3 2026
            <span className="ml-2 text-xl text-green-400">&bull;</span>
          </div>
        </div>

        {/* Philosophy panel */}
        <div className="w-full sm:w-1/2 bg-black dark:bg-gray-100 p-6 sm:p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-4 sm:gap-6">
            <span className={`${roboto.className} text-gray-500 dark:text-gray-400 text-sm`}>
              {`// MY PHILOSOPHY`}
            </span>

            <h2 className={`${roboto.className} text-2xl sm:text-4xl font-semibold leading-tight text-white dark:text-black`}>
              &quot;The best code isn&apos;t clever. It&apos;s the code the next
              developer can read at 2am and immediately understand.&quot;
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}