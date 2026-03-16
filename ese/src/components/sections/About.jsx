import React from 'react'
import {Download, Code2, Sparkles, Target, Eye, TrendingUp, Users, Clock, FileCode} from 'lucide-react'
import {PERSONAL_INFO} from '../../utils/constants'
import { useTranslation } from 'react-i18next'

import FadeIn from '../animation/FadeIn'


const About = () => {
  const { t } = useTranslation()
  const aboutStats = [
    t('about.stats.frontEnd', { returnObjects: true }),
    t('about.stats.detail', { returnObjects: true }),
    t('about.stats.improving', { returnObjects: true }),
    t('about.stats.collaboration', { returnObjects: true }),
    t('about.stats.reliable', { returnObjects: true }),
    t('about.stats.maintainable', { returnObjects: true }),
  ]

  return (
    <section id="about" className='relative min-h-screen py-12 md:py-20 bg-black overflow-hidden'>
       
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/**main grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center'>
            {/**left column */}
            <div className='flex flex-col gap-4 md:gap-6'>
              <FadeIn delay={60}>
                <div className='inline-flex items-center gap-2.5 px-4 py-2 md:px-5 md:py-2.5 border border-lime-500/20 rounded-full hover:bg-lime-500/10 transition-colors w-fit bg-lime-500/5'>
                  <Code2 className='w-3 h-3 md:w-4 md:h-4 text-lime-400' />
                  <span className='text-xs md:text-sm text-lime-300 font-medium'>{t('about.badge')}</span>
                  <Sparkles className='w-3 h-3 md:w-4 md:h-4 text-yellow-400 animate-pulse' />
                </div>
              </FadeIn>
              
              <FadeIn delay={100}>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight'>
                  {t('about.title')}
                </h2>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className='flex flex-col gap-3 md:gap-4'>
                  {[t('about.bio')].map((paragraph, index) => (
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
                  <span>{t('about.downloadResume')}</span>
                </button>
              </FadeIn>
            </div>

            {/**right column - stats */}
            <FadeIn delay={300}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-8 lg:mt-0'>
                {aboutStats.map((stat, index) => {
                  // Icon mapping based on index or value
                  const iconMap = [
                    Target,      // Front-End Specialist
                    Eye,         // Detail Oriented
                    TrendingUp,  // Always Improving
                    Users,       // Easy to Work With
                    Clock,       // Reliable
                    FileCode     // Maintainable Code
                  ];
                  const IconComponent = iconMap[index] || Code2;
                  
                  return (
                    <div key={index} className='relative p-4 md:p-5 border border-lime-500/20 sm:border-lime-500/10 rounded-xl hover:border-lime-500/30 transition-all duration-300 hover:bg-lime-500/5 group bg-lime-500/3 sm:bg-white/2 ring-1 ring-white/10 sm:ring-0'>
                      <div className='flex items-start gap-3 mb-3'>
                        <div className='shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-lime-400/20 sm:bg-lime-400/10 border border-lime-400/30 sm:border-lime-400/20 flex items-center justify-center group-hover:bg-lime-400/30 sm:group-hover:bg-lime-400/20 group-hover:scale-110 transition-all duration-300'>
                          <IconComponent className='w-5 h-5 md:w-6 md:h-6 text-lime-400' />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h3 className='text-base sm:text-lg md:text-xl font-bold sm:font-semibold text-white mb-1.5 leading-tight tracking-tight sm:tracking-normal'>
                            {stat.value}
                          </h3>
                          <p className='text-xs sm:text-sm text-gray-300 sm:text-gray-400 leading-relaxed font-medium sm:font-normal'>
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>


          {/** */}

                
        </div>
    </section>
  )
}

export default About
