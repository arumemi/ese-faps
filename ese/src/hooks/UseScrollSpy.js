import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the currently active section
           for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sectionIds[i]);
                    return;
                }
            }
            setActiveSection(null);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds, offset]);

    return activeSection;
};

        //smoth scroll to section


        export const scrollToSection = (sectionID, offset = 80) => {
            const section = document.getElementById(sectionID);

            if (section) {
                const top = section.offsetTop - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        };
        



















