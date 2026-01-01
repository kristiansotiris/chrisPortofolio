"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FeaturedProjects from "./featured_projects_section";

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const contentTitleRef = useRef<HTMLHeadingElement>(null);
  const contentParagraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const gsp = gsap.context(() => {
      // Animate the image container
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
          y: 80,
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out(1.7, 0.5)",
        });
      }

      if (contentTitleRef.current) {
        gsap.from(contentTitleRef.current, {
          scrollTrigger: {
            trigger: contentTitleRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          duration: 1,
          ease: "power2.out(0.5)",
        });
      }

      // Animate the paragraph
      if (contentParagraphRef.current) {
        gsap.from(contentParagraphRef.current, {
          scrollTrigger: {
            trigger: contentParagraphRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    });

    return () => gsp.revert();
  }, []);

  return (
    <>
      <section id="projects" className="relative min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-green-300 via-cyan-200 to-lime-300 opacity-90 blur-3xl"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1, 1.05],
            opacity: [0.8, 1, 0.8, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ transformOrigin: "50% 50%" }}
        />

        {/* Content Container */}
        <div
          ref={contentRef}
          className="mt-24 bg-linear-250 rounded-2xl from-black/90 to-gray-900 relative z-10 max-w-7xl mx-auto px-12 py-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="w-full">
              <div className="relative aspect-square rounded-2xl overflow-hidden p-8">
                <Image
                  width={500}
                  height={500}
                  src="/designer_developer.gif"
                  alt="Featured Project"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <div
                className="bg-linear-to-l
                        from-white/5
                        to-white/5
                        border
                        border-white/30
                        rounded-full px-2 py-1"
              >
                <p className="SpaceGrotesk uppercase text-xs md:text-base font-semibold text-gray-300">
                  available for{" "}
                  <span className="bg-linear-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                    work opportunities
                  </span>
                </p>
              </div>

              <div className="bg-linear-to-bl rounded-xl from-white/5 to-white/5 p-6 md:p-8 space-y-6 shadow-lg shadow-white/10 border border-white/20">
                <h2
                  ref={contentTitleRef}
                  className="Outfit text-4xl md:text-6xl font-bold leading-tight"
                >
                  <span className="text-white/75">Building Amazing </span>
                  <span className="bg-linear-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                    Digital Experiences
                  </span>
                </h2>

                <p
                  ref={contentParagraphRef}
                  className="Archivo text-lg md:text-xl text-gray-500 leading-relaxed"
                >
                  <span className="text-white/90 font-base">
                    I specialize in crafting stunning websites and applications
                    that captivate users.{" "}
                  </span>
                  Vision to life with cutting-edge technology and creative
                  solutions.
                </p>

                <div className="flex justify-center md:justify-start pt-4">
                  <button
                    ref={buttonRef}
                    onClick={() => {
                      window.location.href =
                        "mailto:kristiansotiri1@gmail.com?subject=Work Opportunity&body=Hello Kristian, I would like to discuss a work opportunity with you...";
                    }}
                    className="Outfit cursor-pointer px-8 py-4 bg-linear-to-r from-cyan-600 to-green-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturedProjects />
      </section>
    </>
  );
}
