import Navbar from "./components/navbar";
import Link from "next/link";
import Image from "next/image";
import Idea from "./components/idea";

export default function Home() {

  return (
    <main className="flex min-h-[115vh] md:min-h-screen flex-col items-center p-4 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      
      <Link href="/work" className="work flex items-center gap-1 text-xs bg-black/10 dark:bg-white/10 font-semibold rounded-full border border-black/20 dark:border-white/20 px-2 py-2 mt-[50px]">
        <span className="text-md">Orbit - UI</span>
        <span className="inline-block w-px h-5 bg-gray-400 dark:bg-gray-600 mx-2"></span>
        <span className="text-gray-600 dark:text-gray-300">Featured Work</span>
      </Link>

      <h1 className="text-3xl max-w-5xl font-bold text-center mt-8 text-black dark:text-white lg:text-6xl">
        Creativity is the spark that turns ordinary moments into magic
      </h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-3xl text-center">
        Fredrick Chinweze — MERN stack engineer shaping web experiences through modern design and solid architecture.
      </p>
      <Link href="/about" className="work flex items-center gap-1 text-sm bg-black/10 dark:bg-white/10 font-semibold rounded-full border border-black/20 dark:border-white/20 px-3 py-1 mt-10">
       <Image className="mx-1 border-[1px] border-white/50 rounded-full" src="/pfp.png" alt="Fredrick Chinweze" width={20} height={20} />
        <span>About</span>
        <span className="inline-block w-3 h-0.5 bg-black dark:bg-white mx-2"></span>
        <span>Chinweze</span>
      </Link>
      <Idea />
    </main>
  )
}