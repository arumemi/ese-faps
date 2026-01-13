import React from "react";
import { Technology } from "../../data/Tecnology";
import { Code2, Sparkles, Zap, Database, Smartphone, Figma, Github } from "lucide-react";
import { SiJavascript, SiReact, SiNodedotjs, SiCss3, SiHtml5, SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux, SiVite } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import FadeIn from "../animation/FadeIn";

const Technolgy = () => {
  // Icon mapping
  const iconMap = {
    'js': SiJavascript,
    'react': SiReact,
    'node': SiNodedotjs,
    'css3': SiCss3,
    'html5': SiHtml5,
    'ts': SiTypescript,
    'nextjs': SiNextdotjs,
    'tailwind': SiTailwindcss,
    'database': Database,
    'github': Github,
    'redux': SiRedux,
    'figma': Figma,
    'api': TbApi,
    'vite': SiVite,
    'smartphone': Smartphone,
  };

  return (
    <section
      id="technology"
      className="relative min-h-screen py-12 md:py-20 bg-black overflow-hidden"
    >
     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 md:px-5 md:py-2.5 border border-lime-500/20 rounded-full hover:bg-lime-500/10 transition-colors bg-lime-500/5 mb-4">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-lime-400" />
              <span className="text-xs md:text-sm text-lime-300 font-medium">
                Technical Skills
              </span>
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 animate-pulse" />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
              Technologies & Tools
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              An overview of my technical expertise and proficiency
              levels
            </p>
          </FadeIn>
        </div>

        {/* Skills Categories Grid */}
        <FadeIn delay={500}>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Technology.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={index} 
                      className="group relative flex flex-col items-center p-4 border border-lime-500/10 rounded-xl hover:border-lime-500/30 transition-all duration-300 hover:bg-lime-500/5 cursor-pointer">
                      <IconComponent className='text-3xl text-lime-400 group-hover:text-lime-300 group-hover:scale-110 transition-all duration-300'/>
                      <div className='text-sm md:text-base text-gray-300 mt-2 font-medium text-center'>
                          {skill.name}
                      </div>

                      {/**Hover effect */}
                      <div className='absolute inset-0 rounded-xl bg-linear-to-r from-lime-400/0 via-lime-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                      </div>
                    </div>
                  );
                })}
            </div>
        </FadeIn>
       
      </div>
    </section>
  );
};

export default Technolgy;
