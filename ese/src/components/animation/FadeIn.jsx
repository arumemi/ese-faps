import React from 'react'

const FadeIn = ({children, delay = 0, duration = 500, threshold = 0.1}) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
        const currentElement = elementRef.current;
        
        const observer = new IntersectionObserver(
            (entries) => {
              //Trigger animation when elements come into view
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                })
            },
            { threshold: threshold, rootMargin: '0px 0px -50px 0px' } //triggers slightly before
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, isVisible]);

  return (
    <div 
      ref={elementRef}
      className={`transition-all ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn