import React from 'react'

const FadeIn = ({children, delay = 0, duration=500, threshold=0.1}) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
              //Trigger animation when elements come into view
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                })
            },
            { threshold: threshold, rootMargin: '0px 0px -50px 0px' } //trigers slightly before
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold, isVisible]);

  return (
    <div ref={elementRef}
    className={`transition-opacity duration-${duration} ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
      }}
      >
      {children}
    </div>
  )
}

export default FadeIn