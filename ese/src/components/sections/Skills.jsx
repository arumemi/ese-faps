import React from "react";
import { Technology } from "../../data/Tecnology";
import FadeIn from "../animation/FadeIn";
import * as Icons from "lucide-react";
import RadialGradientBackground from "../background/RadiaGradientBackground";

const Skills = () => {
  //category skills mapping
  const skillCategories = {
    "Frontend Development": [
      Technology.find((s) => s.name === "JavaScript"),
      Technology.find((s) => s.name === "React.js"),
      Technology.find((s) => s.name === "TypeScript"),
      Technology.find((s) => s.name === "Next.js"),
      Technology.find((s) => s.name === "HTML5"),
      Technology.find((s) => s.name === "CSS3"),
      Technology.find((s) => s.name === "Tailwind CSS"),
      Technology.find((s) => s.name === "Redux"),
    ].filter(Boolean),
    "Backend & APIs": [
      Technology.find((s) => s.name === "Node.js"),
      Technology.find((s) => s.name === "MongoDB"),
      Technology.find((s) => s.name === "REST API"),
    ].filter(Boolean),
    "Tools & Platforms": [
      Technology.find((s) => s.name === "Git & GitHub"),
      Technology.find((s) => s.name === "Figma"),
      Technology.find((s) => s.name === "Vite"),
      Technology.find((s) => s.name === "Responsive Design"),
    ].filter(Boolean),
  };

  // get proficiency percentage
  const getProficiencyPercentage = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50;
  };

  //get levels color
  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/40",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/40",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/40",
    };
    return colors[level] || "text-gray-500 bg-gray-500/20 border-gray-500/40";
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-12 md:py-20 bg-black overflow-hidden"
    >
      {/**   <RadialGradientBackground variant="skills" />*/}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
              Skills & Expertise
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Organized view of my technical skills across different domains
            </p>
          </div>
        </FadeIn>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={categoryIndex} delay={300 + categoryIndex * 100}>
                <div className="bg-linear-to-br from-white/5 to-white/2 border border-lime-500/10 rounded-2xl p-6 md:p-8 hover:border-lime-500/30 transition-all duration-300">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-linear-to-b from-lime-400 to-cyan-400 rounded-full"></div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col gap-4">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = Icons[skill.icon] || Icons.Code2;
                      const proficiency = getProficiencyPercentage(skill.level);

                      return (
                        <div key={skillIndex} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-lime-400 group-hover:scale-110 transition-transform" />
                              <div className="flex flex-col">
                                <span className="text-sm md:text-base text-gray-300 font-medium group-hover:text-lime-400 transition-colors">
                                  {skill.name}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {proficiency}%
                                </span>
                              </div>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-[10px] font-medium border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-linear-to-r from--200 to-lime-400 transition-all duration-1000 ease-out rounded-full"
                              style={{ width: `${proficiency}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
