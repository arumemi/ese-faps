
import React from 'react'
import {Download, Code2, Sparkles} from 'lucide-react'
import {PERSONAL_INFO, ABOUT_STATS} from '../../utils/constants'
import RadialGradientBackground from '../background/RadiaGradientBackground'
import FadeIn from '../animation/FadeIn'


const About = () => {
  return (
    <section id="about" className='relative min-h-screen py-12 md:py-20 bg-black overflow-hidden'>
        <RadialGradientBackground variant="about" />
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/**main grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center'>
            {/**left column */}
            <div className='flex flex-col gap-4 md:gap-6'>
              <FadeIn delay={60}>
                <div className='inline-flex items-center gap-2.5 px-4 py-2 md:px-5 md:py-2.5 border border-lime-500/20 rounded-full hover:bg-lime-500/10 transition-colors w-fit bg-lime-500/5'>
                  <Code2 className='w-3 h-3 md:w-4 md:h-4 text-lime-400' />
                  <span className='text-xs md:text-sm text-lime-300 font-medium'>Full-Stack Developer</span>
                  <Sparkles className='w-3 h-3 md:w-4 md:h-4 text-yellow-400 animate-pulse' />
                </div>
              </FadeIn>
              
              <FadeIn delay={100}>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight'>
                  Crafting Awesome Digital Experiences
                </h2>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className='flex flex-col gap-3 md:gap-4'>
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className='text-sm sm:text-base text-gray-300 leading-relaxed'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <button 
                  onClick={() => window.open(PERSONAL_INFO.resume)}
                  className='inline-flex items-center justify-center gap-3 bg-lime-400 hover:bg-lime-300 text-black rounded-lg px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20 w-full sm:w-fit group'
                >
                  <Download className='w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce' />
                  <span>Download Resume</span>
                </button>
              </FadeIn>
            </div>

            {/**right column - stats */}
            <FadeIn delay={300}>
              <div className='grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-8 lg:mt-0'>
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className='relative p-4 md:p-6 border border-lime-500/10 rounded-xl hover:border-lime-500/30 transition-all duration-300 hover:bg-lime-500/5 group'>
                    <div className='absolute left-0 top-4 md:top-6 w-1 h-8 md:h-12 bg-linear-to-b from-lime-400 via-cyan-400 to-transparent rounded-full'></div>
                    <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-lime-400 mb-1 md:mb-2 font-mono group-hover:scale-110 transition-transform'>
                      {stat.value}
                    </div>
                    <p className='text-xs sm:text-sm text-gray-400 leading-snug'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>


          {/** */}

                
        </div>
    </section>
  )
}

export default About
