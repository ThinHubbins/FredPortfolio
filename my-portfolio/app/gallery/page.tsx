import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-[115vh] md:min-h-screen flex-col items-center p-4 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <h1 className="text-4xl font-bold">Welcome to My Gallery</h1>
      <p className="mt-4 text-lg text-gray-600">Explore my projects and skills.</p>
          <div className="">
      <Footer />
    </div>
    </main>
  )
}