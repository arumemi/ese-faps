
    import { useEffect ,useState, useRef} from 'react';

    export const useScrollReveal = (options = {}) => {
        const{
            threshold = 0.1,
            root = null,
            rootMargin = '0px',
            once = true,
        } = options;

        const [isVisible, setIsVisible] = useState(false);
        const elementRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                        if (once && elementRef.current) {
                            observer.unobserve(elementRef.current);
                        }
                    }
                    { threshold, root, rootMargin }
                }
            );

            if (elementRef.current) {
                observer.observe(elementRef.current);
            }
            return () => {
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            };
        }, [threshold, root, rootMargin, once]);

        return [elementRef, isVisible];
    }