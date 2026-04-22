"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageTransition() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const tl = gsap.timeline();

    // panels slide in
    tl.to(topRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power3.inOut",
    })
    .to(bottomRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power3.inOut",
    }, "<"); // run together

    // hold
    tl.to({}, { duration: 0.3 });

    // panels slide out
    tl.to(topRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power3.inOut",
    })
    .to(bottomRef.current, {
      y: "100%",
      duration: 0.8,
      ease: "power3.inOut",
    }, "<");

  }, [pathname]);

  return (
    <>
      <div
        ref={topRef}
        className="fixed top-0 left-0 w-full h-1/2 dark:bg-white bg-black -translate-y-full z-[9999]"
      />
      <div
        ref={bottomRef}
        className="fixed bottom-0 left-0 w-full h-1/2 dark:bg-white bg-black translate-y-full z-[9999]"
      />
    </>
  );
}