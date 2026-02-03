import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../utils/scrollToSection";
import FadeIn from "../animation/FadeIn";
import RadialGradientBackground from "../background/RadiaGradientBackground";
import heroImage from "../../assets/esse.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/*content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        {/*Grid - left and right columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/*LEFT COLUMN - CONTENT */}
          <div className="text-left space-y-4 md:space-y-6">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mt-16 md:mt-20 mb-4 md:mb-8 border border-lime-500/20 rounded-full max-w-full overflow-hidden">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-lime-400 fill-lime-400 flex-shrink-0" />
                <span className="text-xs md:text-sm text-white tracking-wide truncate">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-4 md:mb-6">
                Desenvolvedor Front-end <br className="hidden sm:block" /> & Design<br/>UI
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Construindo aplicações modernas e escaláveis com React, Next.js,
                Tailwind CSS, Node.js e muito mais tecnologias de ponta.
                Transformando ideias em realidade.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contacts")}
                className="inline-flex items-center justify-center gap-2 mb-6 md:mb-12 group px-6 py-3 text-sm md:text-base bg-lime-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors w-full sm:w-auto"
              >
                Entre em Contato
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-3 md:pr-6 lg:pr-10 last:border-r-0 even:border-r-0 md:even:border-r"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-lime-300">
                      {stat.value}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/*RIGHT COLUMN - DEVELOPER IMAGE*/}
          <FadeIn delay={200}>
            <div className="relative mt-8 md:mt-0">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto md:ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden ">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>
                {/**image container */}
                <div className="relative rounded-2xl overflow-hidden m-[2px] h-[calc(100%-2px)]">
                  <img
                    src={heroImage}
                    alt="Ese Fapohunda - React Developer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/**technologies logos */}
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center justify-center gap-3 md:gap-6 bg-black/70 backdrop-blur-md py-2 md:py-3 px-3 md:px-6 rounded-full border border-lime-400/30 shadow-lg shadow-lime-400/20">
                      <SiReact
                        className="w-5 h-5 md:w-7 md:h-7 text-[#61DAFB] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.8)] transition-all duration-300 cursor-pointer"
                        title="React"
                      />
                      <SiNextdotjs
                        className="w-5 h-5 md:w-7 md:h-7 text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer"
                        title="Next.js"
                      />
                      <SiTailwindcss
                        className="w-5 h-5 md:w-7 md:h-7 text-[#06B6D4] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 cursor-pointer"
                        title="Tailwind CSS"
                      />
                      <SiNodedotjs
                        className="w-5 h-5 md:w-7 md:h-7 text-[#339933] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(51,153,51,0.8)] transition-all duration-300 cursor-pointer"
                        title="Node.js"
                      />
                      <SiMongodb
                        className="w-5 h-5 md:w-7 md:h-7 text-[#47A248] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(71,162,72,0.8)] transition-all duration-300 cursor-pointer"
                        title="MongoDB"
                      />
                      <SiTypescript
                        className="w-5 h-5 md:w-7 md:h-7 text-[#3178C6] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(49,120,198,0.8)] transition-all duration-300 cursor-pointer"
                        title="TypeScript"
                      />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/**scroll indicator */}

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-1 md:gap-2 text-lime-400 hover:text-yellow-400 transition-colors group"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce group-hover:animate-none" />
          
        </button>
      </div>
    </section>
  );
};

export default Hero;
