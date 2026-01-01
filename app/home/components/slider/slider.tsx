import Marquee from "react-fast-marquee";
import codingSkillsSlider from "../../../data/languages_slider_data";
import Image from "next/image";

export default function Slider() {
  return (
    <div className=" w-full py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 space-y-4 px-6">
        <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
          <span className="text-green-400 text-sm font-semibold tracking-wide">
            TECH STACK
          </span>
        </div>
        <h2 className="SpaceGrotesk text-3xl md:text-4xl font-bold text-white">
          Technologies I{" "}
          <span className="bg-linear-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
            Work With
          </span>
        </h2>
      </div>

      {/* Slider with linear Edges */}
      <div className=" relative">
        {/* Marquee */}
        <Marquee direction="right" speed={50}>
          {codingSkillsSlider.map((skill) => (
            <div key={skill.id} className="mx-6 md:mx-8">
              {/* Card Container */}
              <div className="group relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/30  hover:shadow-xl hover:shadow-cyan-500/40">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 rounded-2xl blur-sm transition-opacity duration-300"></div>

                {/* Icon */}
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={80}
                  height={80}
                  className="relative z-10 object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
