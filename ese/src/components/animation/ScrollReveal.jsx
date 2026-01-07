import React from 'react'
import { useScrollReveal } from '../../hooks/UseScrollReaveal';

const ScrollReveal = ({
      children,
      animation = 'fadeUp',
      delay = 0,
      duration = 800,
}) => {
  const {ref, isVisible} = useScrollReveal({threshold: 0.1});

  const animationClasses = {
    fadeUp: isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    fadeIn: isVisible ? 'opacity-100' : 'opacity-0',
    slideInLeft: isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0',
    slideInRight: isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
    scaleIn: isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',

} 

          const visibleCless = 'opacity-100 translate-y-0 scale-100'


  return (
  
    <>
    <div
    ref={ref}
    className={`
    transition-all duration-${duration} ease-in-out
    ${isVisible ? visibleCless : ''}
    ${animationClasses[Animation]} `}
    style={{  
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
    }}
    >
      {Children}
    </div>
    </>
  )
}

export default ScrollReveal
