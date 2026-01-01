"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { contactLinks } from "../../data/contact_links_data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const headtitleRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([headtitleRef.current, contentRef.current], {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          backgroundPosition: "200% center",
          duration: 3,
          repeat: -1,
          ease: "none",
        });
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 30,
          delay: index * 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-linear-to-br from-emerald-400 via-cyan-300 to-lime-300"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2
          ref={headtitleRef}
          className="SpaceGrotesk text-5xl sm:text-6xl font-bold"
        >
          Let’s <span className="text-purple-700/70">Connect</span>
        </h2>
        <p
          ref={contentRef}
          className="mt-4 text-lg text-slate-900 max-w-xl mx-auto"
        >
          Have an idea, a question, or a project in mind? I’m always open to
          meaningful conversations.
        </p>
      </div>

      {/* Card */}
      <div
        ref={contentRef}
        className="relative max-w-5xl mx-auto rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl p-10 md:p-16"
      >
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-lime-400/30 rounded-br-3xl" />

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h3
              ref={titleRef}
              className="Outfit text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-lime-400"
            >
              I’d love to hear from you
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you’re starting something new, need help refining an idea,
              or just want to say hello reach out anytime.
            </p>

            <div ref={imageRef} className="pt-6">
              <Image
                src="/stats.gif"
                alt="zentral_app"
                width={180}
                height={180}
                className="object-contain drop-shadow-2xl opacity-90"
              />
            </div>
          </div>

          {/* Contact actions */}
          <div className="flex flex-col gap-5">
            {contactLinks.map((contact, index) => (
              <Link
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                href={contact.href}
                target="_blank"
              >
                <span className="text-white font-semibold tracking-wide">
                  {contact.title}
                </span>

                <span className="text-white/50 text-base tracking-wider">
                  {contact.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
