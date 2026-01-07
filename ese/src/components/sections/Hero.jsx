import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollToSection';
import FadeIn from '../animation/FadeIn';
import RadialGradientBackground from '../background/RadiaGradientBackground';

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden bg-black'>
      <RadialGradientBackground variant="hero"/>

      {/*content container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> 

        {/*Grid - left and right columns */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          
          {/*LEFT COLUMN - CONTENT */}
          <div className='text-left space-y-6'>
            <FadeIn delay={0}>
              <div className='inline-flex items-center gap-2.5 /px-[20px] py-3.75 mb-8 /bg-gradient-to-r from-lime-500/10 via-yellow-400/15 to-lime-400/20 border border-lime-500/20 rounded-full'>
                <Star className='w-4 h-4 text-lime-400 fill-lime-400' />
                <span className='text-xs md:text-sm text-white tracking-wide'>
                  {PERSONAL_INFO.name} • {PERSONAL_INFO.title}
                </span>
              </div>
            </FadeIn>
        
            <FadeIn delay={100}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6'>
                Front-end Developer <br /> & UI Developer
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className='text-base md:text-lg text-gray-300 mb-8'>Building modern, scalable application with React, Next.js, Tailwind CSS, Node.js, and lots more cutting-edge technologies. Transforming ideas into reality.</p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <button onClick={() => scrollToSection('contacts')} className='inline-flex items-center gap-2 mb-12 group px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors'>
                Contact Me
              </button>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full'>
                {STATS.map((stat, index) => (
                  <div key={index} className='text-left border-r border-white/50 pr-10 last:border-r-0'>
                    <h3 className='text-2xl font-bold text-lime-300'>{stat.value}</h3>
                    <p className='text-sm text-gray-500 leading-snug'>{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            
           
          </div>

          {/*RIGHT COLUMN - DEVELOPER IMAGE*/}
         <FadeIn delay={200}>
                  <div className='relative'>
                    <div className='relative overflow-hidden rounded-2xl asppect-4/5 max-w-/[500px] ml-auto group'>
                      <div className='absolute inset-0 rounded-2xl overflow-hidden '>
                        <div className='absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl'></div>
                      </div>
                      {/**image container */}
                      <div className='relative rounded-2xl overflow-hidden m-[2px] h-[calc(100%-2px)]'>
                        <img
                      src='/images/hero-image.jpg'
                      alt='Ese Fapohunda - React Developer'
                      className='w-full h-full object-cover '
                    />
                      </div>
                      {/**technologies logos */}
                      <div className='absolute bottom-6 left-6 right-6 z-20'>
                        <FadeIn delay={500}>
                          <div className='flex items-center justify-center gap-6 bg-black/70 backdrop-blur-md py-3 px-6 rounded-full border border-lime-400/30 shadow-lg shadow-lime-400/20'>
                            <SiReact className='w-7 h-7 text-[#61DAFB] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.8)] transition-all duration-300 cursor-pointer' title='React' />
                            <SiNextdotjs className='w-7 h-7 text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer' title='Next.js' />
                            <SiTailwindcss className='w-7 h-7 text-[#06B6D4] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 cursor-pointer' title='Tailwind CSS' />
                            <SiNodedotjs className='w-7 h-7 text-[#339933] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(51,153,51,0.8)] transition-all duration-300 cursor-pointer' title='Node.js' />
                            <SiMongodb className='w-7 h-7 text-[#47A248] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(71,162,72,0.8)] transition-all duration-300 cursor-pointer' title='MongoDB' />
                          </div>
                        </FadeIn>
                      </div>
                    </div>
                  </div>
         </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Hero