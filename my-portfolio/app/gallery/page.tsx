"use client";
import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import { Sekuya } from "next/font/google";
const sekuya = Sekuya({subsets: ["latin"], weight: ["400"]})

const items = [
  { src: "/jobless1.jpg", className: "md:col-span-2 md:row-span-2" },
  { src: "/orca.jpg", className: "md:col-span-1 md:row-span-1" },
  { src: "/smiling.jpg", className: "md:col-span-1 md:row-span-1" },
  { src: "/mount.jpg", className: "md:col-span-1 md:row-span-2" },
  { src: "/rick.png", className: "md:col-span-2 md:row-span-1" },
  { src: "/minecraft.jpg", className: "md:col-span-1 md:row-span-1" },
  { src: "/wall1.jpg", className: "md:col-span-1 md:row-span-1" },
  { src: "/collesium.png", className: "md:col-span-1 md:row-span-1" },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">

      <Navbar />

      {/* Bento Grid */}
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className={sekuya.className + " flex justify-center text-black dark:text-white p-3 font-semibold text-xl"}>
          <h1>MY FAVORITE IMAGES FROM THE INTERNET</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-4">

          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(item.src)}
              className={`relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-neutral-900 group cursor-pointer ${item.className}`}
            >
              <Image
                src={item.src}
                alt="bento image"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="preview"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}