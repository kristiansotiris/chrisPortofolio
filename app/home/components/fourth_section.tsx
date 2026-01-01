"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import projectshowcase from "../../data/project_show_data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FourthSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gradientRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const footerTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title word-by-word animation
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        gsap.from(words, {
          opacity: 0,
          y: 40,
          rotateX: -30,
          stagger: 0.06,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        });
      }

      // Gradient shimmer
      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          backgroundPosition: "200% center",
          duration: 3,
          repeat: -1,
          ease: "none",
        });
      }

      // Description text fade in
      if (textRef.current) {
        const paragraphs = textRef.current.querySelectorAll("p");
        gsap.from(paragraphs, {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        });
      }

      // Project cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateY: index % 2 === 0 ? -10 : 10,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.5,
            },
          }
        );
      });

      // Footer text
      if (footerTextRef.current) {
        gsap.from(footerTextRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerTextRef.current,
            start: "top 85%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-24 md:py-32 bg-linear-to-br from-emerald-400 via-cyan-300 to-lime-300 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="mx-auto max-w-6xl bg-linear-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 rounded-3xl shadow-2xl backdrop-blur-xl p-6 sm:p-8 md:p-12 lg:p-16 relative z-10 border border-white/10">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-lime-400/30 rounded-br-3xl" />

        {/* Title */}
        <h2
          ref={titleRef}
          className="max-w-4xl text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
        >
          <span className="word inline-block mr-3">Every</span>
          <span
            ref={gradientRef}
            className="word inline-block mr-3 bg-linear-to-r from-cyan-400 via-lime-400 to-pink-400 bg-clip-text text-transparent font-extrabold"
            style={{ backgroundSize: "200% auto" }}
          >
            Product
          </span>
          <span className="word inline-block mr-3">starts</span>
          <span className="word inline-block mr-3">with</span>
          <span className="word inline-block mr-3">an</span>
          <span className="word inline-block mr-3 relative">
            <span className="relative z-10">idea,</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-linear-to-r from-cyan-500/50 to-lime-500/50 -rotate-1 blur-sm" />
          </span>
          <br className="hidden sm:block" />
          <span className="word inline-block mr-3 text-gray-400">but</span>
          <span className="word inline-block mr-3 text-gray-400">not</span>
          <span className="word inline-block mr-3 text-gray-400">every</span>
          <span className="word inline-block mr-3 text-gray-400">idea</span>
          <span className="word inline-block mr-3 text-gray-400">becomes</span>
          <span className="word inline-block mr-3 text-gray-400">a</span>
          <span className="word inline-block relative">
            <span className="bg-linear-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent font-extrabold">
              Product.
            </span>
            <span className="absolute -right-3 top-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <span className="absolute -right-3 top-0 w-2 h-2 bg-cyan-400 rounded-full" />
          </span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Description Text */}
          <div
            ref={textRef}
            className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -left-2 top-0 w-1 h-full bg-linear-to-b from-cyan-400 via-lime-400 to-transparent rounded-full" />
              <p className="pl-6">
                Great products don&apos;t happen by accident. They are shaped by
                countless decisions technical, visual, and strategic made long
                before a single line of code reaches production.
              </p>
            </div>

            <p className="pl-6">
              Each project showcased below began as a raw concept, refined
              through iteration, problem-solving, and real-world constraints.
              The goal wasn&apos;t just to build something that looks good, but
              to create experiences that feel{" "}
              <span className="text-cyan-400 font-semibold">intuitive</span>,{" "}
              <span className="text-lime-400 font-semibold">purposeful</span>,
              and <span className="text-pink-400 font-semibold">resilient</span>{" "}
              over time.
            </p>

            <div className="pl-6 pt-4 border-t border-slate-700/50">
              <p className="text-gray-400 italic">
                Explore the work below to see how ideas evolve into functional,
                scalable digital products built with intent, precision, and
                respect for the end user.
              </p>
            </div>
          </div>

          {/* Right: Project Cards */}
          <div className="space-y-6 order-1 lg:order-2">
            {projectshowcase.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
              >
                {/* Placeholder gradient background */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30" />
                <Image
                  fill
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                  {index === 0 ? "📊" : index === 1 ? "🛍️" : "💬"}
                </div>

                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-xl px-4 py-3 sm:px-5 sm:py-4 w-full border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors duration-500 transform group-hover:translate-y-0 translate-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-white text-base sm:text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {project.description}
                        </p>
                      </div>
                      <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/40 transition-colors">
                        <svg
                          className="w-4 h-4 text-cyan-400 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p
            ref={footerTextRef}
            className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl"
          >
            From performance optimization to thoughtful UI interactions, these
            products reflect a balance between{" "}
            <span className="text-cyan-400 font-semibold">design clarity</span>{" "}
            and{" "}
            <span className="text-lime-400 font-semibold">
              engineering discipline
            </span>
            . Every detail serves a function, and every feature earns its place.
          </p>
        </div>
      </div>
    </section>
  );
}
