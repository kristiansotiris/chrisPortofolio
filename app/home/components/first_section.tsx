"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { PhoneCall, BriefcaseBusiness } from "lucide-react";

export default function FirstSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headlineRef.current || !paragraphRef.current || !buttonRef.current)
        return;

      gsap.set(headlineRef.current.children, { opacity: 0, y: 50 });
      gsap.set(paragraphRef.current, { opacity: 0, y: 30 });
      gsap.set(buttonRef.current, { opacity: 0, y: 20, scale: 0.9 });

      // Timeline for sequential animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate headline words and spans separately
      tl.to(
        headlineRef.current.children,
        {
          toggleActions: "play reverse play reverse",
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        },
        0.2
      )
        .to(
          paragraphRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          0.6
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
          },
          0.9
        );

      gsap.to(buttonRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  function handlePortofolio() {
    window.open(
      "https://drive.google.com/file/d/1ZoPNE98jWXWaE4gq6ywkC3ikfKXDGaD4/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br  from-green-300 via-cyan-200 to-lime-300 opacity-100 filter blur-3xl"
        animate={{
          rotate: [0, 5, -5, 0], // existing rotation
          scale: [1, 1.05, 1, 1.05], // subtle scaling for a breathing effect
          opacity: [0.9, 1, 0.9, 1], // fading in/out subtly
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformOrigin: "50% 50%" }}
      />

      {/* Content */}
      <div className="SpaceGrotesk relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
        >
          <span className="inline-block">Trusted</span>{" "}
          <span className="inline-block bg-black text-white rounded-lg px-3 py-1">
            Partner
          </span>{" "}
          <span className="inline-block">for</span>{" "}
          <span className="inline-block">Your</span>{" "}
          <span className="inline-block">Website</span>{" "}
          <span className="inline-block bg-black rounded-lg text-white px-3 py-1">
            Develop.
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="mt-12 text-base md:text-xl text-gray-800 max-w-2xl leading-relaxed tracking-wide font-medium"
        >
          Building the world&apos;s best marketing websites for over a decade.
          Your trusted partner for strategy, design, and dev.
        </p>
        <div
          ref={buttonRef}
          className="flex flex-col md:flex-row gap-2 items-center justify-center "
        >
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/kristian-sotiri/",
                "_blank"
              );
            }}
            className="cursor-pointer flex gap-3 mt-8 px-8 py-3 border-2 border-black text-black rounded-md font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            <PhoneCall size={20} className="self-center" />
            Schedule a Call
          </button>
          <button
            onClick={handlePortofolio}
            className="cursor-pointer flex gap-3 mt-8 px-8 py-3 border-2 border-black text-black rounded-md font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            <BriefcaseBusiness size={20} />
            View My Portofolio
          </button>
        </div>
      </div>
    </section>
  );
}
