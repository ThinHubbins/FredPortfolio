"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./footer";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    num: "01",
    tag: "Platform",
    title: "Two platform,\none login",
    sub: "Switch between Scholar and Vendor anytime — your account follow you everywhere",
    cta: "One account. Plenty possibilities dey oo my brothers and sisters !!.",
    bg: "#26215C",
    text: "#EEEDFE",
    muted: "#AFA9EC",
    accent: "#7F77DD",
  },
  {
    num: "02",
    tag: "Scholar",
    title: "Your courses.\nYour rooms.",
    sub: "Every course for your school get im own live study room — join the ones wey you dey offer",
    cta: "Read sharp, no do alone.",
    bg: "#04342C",
    text: "#E1F5EE",
    muted: "#5DCAA5",
    accent: "#1D9E75",
  },
  {
    num: "03",
    tag: "Marketplace",
    title: "Buy and sell\nfor campus sef dey!!",
    sub: "Textbooks, gadgets, cloths — na students for your school dey sell am, no be random people online",
    cta: "Your campus. Your market.",
    bg: "#712B13",
    text: "#FAECE7",
    muted: "#F0997B",
    accent: "#D85A30",
  },
  {
    num: "04",
    tag: "Vendor",
    title: "Sell more,\npay less",
    sub: "As your sales dey grow, you go rank up — commission go drop from 25% reach 5%",
    cta: "The more you sell, the more money remain your hand.",
    bg: "#0C447C",
    text: "#E6F1FB",
    muted: "#85B7EB",
    accent: "#378ADD",
  },
  {
    num: "05",
    tag: "Early Access",
    title: "We dey come\nyour campus",
    sub: "₦2,500 go give you 3 semesters full Scholar access — be among the first for your school",
    cta: "Early access dey open soon →",
    bg: "#5f1749",
    text: "#fce8f5",
    muted: "#d991c6",
    accent: "#91eb85",
  },
];

export default function CardStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null); // ← store GSAP context

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const STEP = 450;

    // Wrap everything in a GSAP context scoped to the section
    // This guarantees clean revert on unmount — no stale DOM refs
    ctxRef.current = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      gsap.set(cardsRef.current, { y: 1000 });

      cardsRef.current.forEach((card, i) => {
        const stackedY = (cards.length - 1 - i) * -10;
        const stackedScale = 1 - (cards.length - 1 - i) * 0.04;

        gsap.to(card, {
          y: stackedY,
          scale: stackedScale,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: `top+=${i * STEP} top`,
            end: `top+=${i * STEP + STEP} top`,
            scrub: 1,
          },
        });
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${cards.length * STEP}`,
        pin: true,
        pinSpacing: true,
      });
    }, section); // ← scope to section element

    return () => {
      // ctx.revert() kills all tweens, ScrollTriggers, and DOM changes
      // made inside this context — safe even if React already touched the DOM
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center px-6 pt-12 pb-8 gap-3 max-w-lg mx-auto"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400 dark:text-purple-300">
          I HAVE AN IDEA!!
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
          Campus <span className="text-purple-500">Plug</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          The student platform that turns your campus into a community — study
          together, trade together.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400 dark:text-gray-500">
            Scroll to explore
          </span>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="relative w-full h-screen flex items-start justify-center pt-10 overflow-hidden"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="absolute w-[88vw] sm:w-[520px] md:w-[600px] lg:w-[680px] rounded-3xl flex flex-col justify-between overflow-hidden"
            style={{
              height: 260,
              background: card.bg,
              zIndex: i + 1,
              boxShadow: `0 32px 64px -12px ${card.accent}55`,
            }}
          >
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-10"
              style={{ background: card.accent }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-[0.07]"
              style={{ background: card.text }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full"
                  style={{ color: card.accent, background: `${card.accent}22` }}
                >
                  {card.tag}
                </span>
                <span
                  className="text-xs font-medium opacity-40 tabular-nums"
                  style={{ color: card.text }}
                >
                  {card.num} / {String(cards.length).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h2
                  className="text-2xl sm:text-3xl font-semibold leading-snug whitespace-pre-line mb-2"
                  style={{ color: card.text }}
                >
                  {card.title}
                </h2>
                <p
                  className="text-sm leading-relaxed opacity-60 max-w-sm"
                  style={{ color: card.text }}
                >
                  {card.sub}
                </p>
              </div>

              <p
                className="text-xs font-semibold tracking-wide"
                style={{ color: card.muted }}
              >
                {card.cta}
              </p>
            </div>
          </div>
        ))}
      </div>
      <footer className="w-full px-4 md:px-16 pb-10 mt-10">

        <div className="relative overflow-hidden rounded-2xl border border-black/30 dark:border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black px-8 py-14 mb-6 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/dogy.gif"
            alt="Dogy"
            width={100}
            height={100}
            className="w-24 h-24 sm:w-30 sm:h-30"
          />
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
                      method="POST">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm"
            />
            <button className="w-full mt-2 sm:w-auto whitespace-nowrap px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 text-sm">
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
    </>
  );
}
