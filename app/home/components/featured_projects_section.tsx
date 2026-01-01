import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import projects from "../../data/projects_data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjectsI() {
  const titleContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeLineRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);
  const techRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleContentRef.current) {
        gsap.from(titleContentRef.current, {
          scrollTrigger: {
            trigger: titleContentRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out(0.5)",
        });
      }

      if (timeLineRef.current) {
        gsap.fromTo(
          timeLineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      }

      if (projectsRef.current.length > 0) {
        projectsRef.current.forEach((project, index) => {
          if (!project) return;
          gsap.set(project, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.9,
          });
          gsap.to(project, {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          });
        });
      }

      if (techRef.current.length > 0) {
        techRef.current.forEach((tech, index) => {
          gsap.set(tech, { opacity: 0, y: 20 });
          gsap.to(tech, {
            opacity: 1,
            y: index % 2 === 0 ? 0 : 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: tech,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          });
        });
      }
    }, [containerRef, timeLineRef, projectsRef]);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-8 sm:mt-12 lg:mt-16 bg-linear-to-tl from-gray-900/75 to-black backdrop-blur-xl border border-white/20 shadow-2xl text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden rounded-2xl">
      <div
        ref={containerRef}
        className="mt-16 sm:mt-24 lg:mt-10 timeline-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          ref={titleContentRef}
          className="Outfit mb-16 sm:mb-20 lg:mb-24 section-title text-center"
        >
          <h2 className="SpaceGrotesk text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            Tons of Projects Built
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            throughout My Programming Journey
          </p>
        </div>

        {/* Desktop Timeline Line */}
        <div
          ref={timeLineRef}
          className="hidden lg:block w-1 rounded-full bg-linear-to-b from-cyan-500 via-lime-500 h-full absolute left-1/2 transform -translate-x-1/2"
        />

        {/* Mobile Timeline Line */}
        <div className="lg:hidden absolute left-6 sm:left-8 top-0 w-0.5 bg-linear-to-b from-cyan-500 via-lime-500 h-full" />

        <div className="space-y-12 sm:space-y-16 lg:space-y-20 mt-12 sm:mt-16 lg:mt-20 relative">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) projectsRef.current[i] = el;
              }}
              className="relative"
            >
              {/* Desktop Layout (lg and above) */}
              <div
                className={`hidden lg:flex items-center w-full ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-6/12 ${i % 2 === 0 ? "order-1" : "order-2"}`}
                >
                  <div className="bg-linear-to-tl from-gray-900 to-cyan-500/5 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden group">
                    <div className="p-6">
                      {/* Badges */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                          <span className="Inter px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                            {project.year}
                          </span>
                        </div>
                        <span className="SpaceGrotesk px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded border border-cyan-500/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="mt-5 space-y-2">
                        <h3 className="Outfit text-xl font-base leading-tight text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="Inconsolata text-gray-300 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div
                        ref={(el) => {
                          if (el) techRef.current[i] = el;
                        }}
                        className="flex items-center justify-end mt-4 gap-2 flex-wrap"
                      >
                        {project.tech.map((tech, index) => (
                          <div
                            key={index}
                            className="bg-yellow-200/20 text-yellow-200 text-xs px-3 py-1 rounded-full border border-yellow-200/30"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>

                      {/* GitHub Link */}
                      <div className="flex items-center justify-end mt-4">
                        <Link href={`${project.githubUrl}`} target="_blank">
                          <span className="SpaceGrotesk inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                            View on GitHub
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                          </span>
                        </Link>
                      </div>

                      <div className="bg-yellow-200/20 rounded-full w-16 h-16 absolute -bottom-8 -right-8" />
                    </div>
                  </div>
                </div>

                {/* Desktop Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-400/30 transition-all duration-300" />
                    <div className="relative w-6 h-6 rounded-full border-4 border-slate-700 bg-slate-900 overflow-hidden shadow-xl group-hover:border-green-500 transition-all duration-300">
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-all duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Layout (below lg) */}
              <div className="lg:hidden flex items-start gap-4 sm:gap-6">
                {/* Mobile Timeline Node */}
                <div className="relative shrink-0 z-10 mt-2">
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full border-3 sm:border-4 border-slate-700 bg-slate-900 overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-emerald-500" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping" />
                </div>

                {/* Mobile Card */}
                <div className="flex-1 pb-4">
                  <div className="bg-linear-to-br from-cyan-500/5 to-emerald-500/5 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden group">
                    <div className="p-4 sm:p-6">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                          <span className="Inter px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                            {project.year}
                          </span>
                        </div>
                        <span className="SpaceGrotesk px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded border border-cyan-500/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2 mb-4">
                        <h3 className="Outfit text-lg sm:text-xl font-base leading-tight text-white">
                          {project.title}
                        </h3>
                        <p className="Inconsolata text-sm sm:text-base text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div
                        ref={(el) => {
                          if (el) techRef.current[i] = el;
                        }}
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        {project.tech.map((tech, index) => (
                          <div
                            key={index}
                            className="bg-yellow-200/20 text-yellow-200 text-xs px-2.5 py-1 rounded-full border border-yellow-200/30"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>

                      {/* GitHub Link */}
                      <div>
                        <Link href={`${project.githubUrl}`} target="_blank">
                          <span className="SpaceGrotesk inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                            View on GitHub
                            <svg
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                          </span>
                        </Link>
                      </div>

                      <div className="bg-yellow-200/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
