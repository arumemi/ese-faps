import React from 'react'
import {services} from '../../data/service'
import * as Icons from 'lucide-react'
import { Wrench } from 'lucide-react'
import FadeIn from '../animation/FadeIn'

const Service = () => {
  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-4000'></div>
        <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 opacity-20 rounded-full filter blur-3xl animate-blob'></div>
      </div>

      {/* Grid Pattern */}
      <div 
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn delay={0}>
          <div className='text-center mb-16'>
            <div className='flex items-center justify-center gap-2 bg-primary/10 mb-4 border border-primary/30 rounded-full px-4 py-2 mx-auto w-max'>
              <Wrench className='w-5 h-5 text-primary'/>
              <span className='text-primary font-medium'>O Que Ofereço</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Construído para inovação. Projetado para resultados
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              Ofereço uma ampla gama de serviços para ajudar empresas a estabelecer uma forte presença online e atingir seus objetivos digitais.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className='bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1'>
                  <div className='mb-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                      <IconComponent className='w-6 h-6 text-primary'/>
                    </div>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400'>
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Service