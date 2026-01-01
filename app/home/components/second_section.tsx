"use client";

import { useState, CSSProperties, MouseEvent, useEffect, useRef } from "react";
import codingSkillsData from "../../data/coding_skills_data";
import Image from "next/image";
import { CircleArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "./slider/slider";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface SpotlightCardStyle extends CSSProperties {
  "--x"?: string;
  "--y"?: string;
}

export default function SecondSection() {
  const [currentIndex, setIndex] = useState<number>(0);
  const slidesLength: number = 3;

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const development = useRef<HTMLDivElement>(null);
  const languages = useRef<HTMLDivElement>(null);
  const flutterRef = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      if (navigationRef.current) {
        gsap.from(navigationRef.current, {
          scrollTrigger: {
            trigger: navigationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Title section animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Development section animation
      if (development.current) {
        gsap.from(development.current.children, {
          scrollTrigger: {
            trigger: development.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        });
      }

      if (languages.current) {
        gsap.from(languages.current.children, {
          scrollTrigger: {
            trigger: languages.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      }

      // Flutter section animation
      if (flutterRef.current) {
        gsap.from(flutterRef.current, {
          scrollTrigger: {
            trigger: flutterRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (slider.current) {
        gsap.from(slider.current, {
          scrollTrigger: {
            trigger: slider.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0.8,
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleSpotlight(e: MouseEvent<HTMLDivElement>): void {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }

  function onNext(): void {
    if (currentIndex + slidesLength < codingSkillsData.length) {
      setIndex(currentIndex + slidesLength);
    }
  }

  function onPrevious(): void {
    if (currentIndex > 0) {
      setIndex(currentIndex - slidesLength);
    }
  }

  const visibleSlides = codingSkillsData.slice(
    currentIndex,
    currentIndex + slidesLength
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-linear-150 from-black/90 to-black items-center py-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="grid md:grid-cols-2 items-center gap-16 mb-16"
        >
          <div className="space-y-6">
            <button className="px-4 py-2 border border-white/30 rounded-full text-md hover:bg-white/10 transition-colors text-white">
              <span className="flex gap-2">
                <CircleArrowDown className="self-center" />
                Why Choose Me
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2 SpaceGrotesk text-2xl md:text-3xl font-semibold tracking-tight leading-snug antialiased bg-linear-to-br from-cyan-500 via-green-400 to-lime-400 bg-clip-text text-transparent">
              Delivering exceptional results through proven process and
              dedicated team
            </p>

            {/* underline */}
            <span className="block w-full border-b-2 border-white"></span>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-2 gap-8 items-center justify-center">
          <div ref={titleRef} className="flex items-center">
            <div className="space-y-4">
              <h1 className="SpaceGrotesk text-4xl md:text-5xl font-bold text-white leading-tight">
                My Extensive List of{" "}
                <span className="bg-linear-to-r from-cyan-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h1>
            </div>
          </div>

          <div ref={navigationRef} className="flex justify-center items-center">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full p-2">
              <motion.button
                className="cursor-pointer px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                onClick={onPrevious}
                disabled={currentIndex === 0}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>

              <motion.button
                className="cursor-pointer px-6 py-3 rounded-full bg-linear-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                onClick={onNext}
                disabled={
                  currentIndex + slidesLength >= codingSkillsData.length
                }
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Features Grid with Spotlight Effect */}
        <motion.div className="mt-12 grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleSlides.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                  rotateX: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  scale: 0.9,
                  rotateX: 10,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: 0.5,
                  boxShadow: "0 8px 30px rgba(255,255,255,0.15)",
                }}
                className="spotlight-card relative flex flex-col gap-3 p-6 rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                onMouseMove={handleSpotlight}
                style={
                  {
                    "--x": "0px",
                    "--y": "0px",
                  } as SpotlightCardStyle
                }
              >
                <div className="spotlight-overlay absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={40}
                    height={40}
                  />

                  <h3 className="text-white text-lg font-semibold mt-2 mb-2">
                    {skill.title}
                  </h3>

                  <p className="Outfit text-white/70 text-sm md:text-base leading-relaxed font-light">
                    {skill.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modern Web Development Section */}
        <div
          ref={development}
          className="mt-32 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="SpaceGrotesk text-3xl md:text-4xl font-bold text-white leading-tight">
              Modern Web{" "}
              <span className="bg-linear-to-r from-cyan-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                Development
              </span>
            </h2>
            <p className="Inconsolata text-lg text-white/70 leading-relaxed">
              Building dynamic, high-performance websites with React, Next.js,
              and Tailwind CSS. Bringing designs to life with smooth Framer
              Motion animations and cutting-edge web technologies that deliver
              exceptional user experiences.
            </p>
            <div className="px-4 py-3 bg-linear-to-tl from-cyan-500/20 via-green-500/20 to-lime-500/20 border border-cyan-400/30 rounded-xl text-white font-semibold text-xl md:text-2xl">
              Technologies
            </div>
            <div ref={languages} className="SpaceGrotesk flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors">
                React
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors">
                Next.js
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors">
                Framer Motion
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors">
                TypeScript
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/developer_window.gif"
              alt="Web development animation"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Flutter Section */}
        <div
          ref={flutterRef}
          className="mt-32 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* SVG Image */}
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="https://assets.codepen.io/2621168/svgtest.svg"
              alt="Mobile development illustration"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>

          {/* Flutter Content */}
          <div
            className="spotlight-card order-3 md:order-2 max-w-2xl px-6 py-6 rounded-2xl space-y-4 bg-white/5 border border-white/15 backdrop-blur-xl shadow-xl shadow-black/30"
            onMouseMove={handleSpotlight}
            style={
              {
                "--x": "0px",
                "--y": "0px",
              } as SpotlightCardStyle
            }
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
              Currently Learning
            </span>

            <h2 className="SpaceGrotesk text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Mobile Development with{" "}
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Flutter
              </span>
            </h2>

            <p className="Inconsolata text-white/70 text-base leading-relaxed">
              Expanding my expertise into cross-platform mobile development with
              Flutter, with a strong focus on building reusable and responsive
              widgets, writing clean and optimized Dart code, and following best
              practices for scalable application architecture.
            </p>

            <p className="Inconsolata text-white/70 text-base leading-relaxed">
              I am actively working with RESTful APIs, handling asynchronous
              data flows, and implementing modern state management using{" "}
              <span className="text-cyan-300 font-medium">Riverpod</span> to
              ensure predictable state, maintainable codebases, and
              high-performance user experiences across mobile platforms.
            </p>

            <div
              ref={languages}
              className="SpaceGrotesk flex flex-wrap gap-2 pt-2"
            >
              {[
                "Flutter Widgets",
                "Optimized Dart Code",
                "REST APIs",
                "Async & Futures",
                "Riverpod State Management",
                "Clean Architecture",
                "Cross-Platform UI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/60 text-white/80 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div ref={slider} className="mt-32">
          <Slider />
        </div>
      </div>
    </section>
  );
}
