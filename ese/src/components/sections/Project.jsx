import React from "react";
import FadeIn from "../animation/FadeIn";
import RadialGradientBackground from "../background/RadiaGradientBackground";
import {
  projects as Projects,
  categories as categorys,
} from "../../data/project";
import {
  Briefcase,
  Sparkles,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

const Project = () => {
  const [activateCategory, setActivateCategory] = React.useState("All");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollContainerRef = React.useRef(null);

  const filteredProjects =
    activateCategory === "All"
      ? Projects
      : Projects.filter((project) => project.category === activateCategory);

  //reset carousel index on category change
  const handleCategoryChange = (category) => {
    setActivateCategory(category);
    setCurrentIndex(0);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const ScrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Try to find a card element to compute width; fallback to third of container
      const card = container.querySelector("[data-project-card]");
      const cardWidth = card
        ? card.offsetWidth + parseInt(getComputedStyle(card).marginRight || 0)
        : container.offsetWidth / 3;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };
  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    ScrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    ScrollToIndex(newIndex);
  };

  //CATEGORY ICON MAPPING
  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full-Stack": Zap,
    Other: Sparkles,
  };

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black">
      {/* <RadialGradientBackground />*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-94 h-94 bg-primary/20 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl">
        {" "}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 mb-4 sm:mb-6 text-white rounded-full">
              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span className="text-xs sm:text-sm font-medium text-primary">Meu Trabalho</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-3 sm:mb-4 px-4">
              Projetos Em Destaque
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4">
              Explore uma seleção dos meus projetos recentes, mostrando minhas habilidades em
              desenvolvimento web e design.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CATEGORY FILTER */}
      <FadeIn delay={100}>
        <div className="flex justify-start md:justify-center mb-8 md:mb-16 gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-2 snap-x snap-mandatory">
          {categorys.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`group relative flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 shrink-0 snap-start touch-manipulation ${
                activateCategory === category
                  ? "bg-black text-white/60 border-lime-600"
                  : "bg-black text-gray-200 border-gray-300 hover:bg-lime-100 hover:text-gray-900 active:scale-95"
              }`}
            >
              <div className={`relative flex items-center gap-1.5 sm:gap-2 z-20`}>
                {categoryIcons[category] &&
                  React.createElement(categoryIcons[category], {
                    className: `${
                      activateCategory === category
                        ? "text-white"
                        : "text-gray-500 group-hover:text-gray-700"
                    } w-3.5 h-3.5 sm:w-4 sm:h-4`,
                  })}
                <span className="text-xs sm:text-sm whitespace-nowrap">{category}</span>
              </div>
              {activateCategory === category && (
                <div className="absolute inset-0 rounded-full transition-all duration-300 bg-primary opacity-30 z-10"></div>
              )}
            </button>
          ))}
        </div>
      </FadeIn>
      {/* PROJECT CAROUSEL */}
      <FadeIn delay={200}>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-3 sm:gap-4 md:gap-6 pb-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-project-card
                  className="w-[85vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start snap-always"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/**navigation arrow */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 active:scale-95 text-white rounded-full duration-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10 touch-manipulation"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= filteredProjects.length - 1}
                className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 active:scale-95 text-white rounded-full duration-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10 touch-manipulation"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </button>
            </>
          )}

          {/**navigation dots */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center mt-6 gap-2 sm:gap-3">
              {Array.from({
                length: filteredProjects.length,
              }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => ScrollToIndex(idx)}
                  className={`transition-all duration-300 rounded-full touch-manipulation ${
                    currentIndex === idx
                      ? "bg-primary w-6 sm:w-8 h-2"
                      : "bg-gray-300 w-2 h-2 hover:bg-gray-500 active:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

export default Project;
