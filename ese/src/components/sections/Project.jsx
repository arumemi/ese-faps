import React from 'react'
import FadeIn from '../animation/FadeIn'
import RadialGradientBackground from '../background/RadiaGradientBackground'
import {Projects, categorys} from '../../data/Projects'
import { Briefcase, Sparkles, Target, Globe, Pallet, Zap , ChevronLeft, ChevronRight  } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'

const Project = () => {
    const [activateCategory, setActivateCategory] = React.useState('All');
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const scrollContainerRef = React.useRef(null);

    const filteredProjects = activateCategory === 'All'
    ? Projects
    : Projects.filter(project => project.category === activateCategory);

    //reset carousel index on category change
    const handleCategoryChange = (category) => {
        setActivateCategory(category);
        setCurrentIndex(0);

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    };
        const ScrollToIndex = (index) => {
            setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const CardWidth = container.offsetWidth / 3; //assuming 3 cards are visible
            container.scrollTo({
                left: index * CardWidth,
                behavior: 'smooth',
            });
        }
    };
            const nextSlide = () => {
                const newIndex = Math.min(currentIndex + 1, filteredProjects.length - 3);
                ScrollToIndex(newIndex);
            };

            const prevSlide = () => {
                const newIndex = Math.max(currentIndex - 1, 0);
                ScrollToIndex(newIndex);
            };
            
  return (
    <div>Projects</div>
  )
}

export default Project