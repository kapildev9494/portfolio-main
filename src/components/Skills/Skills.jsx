import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 font-sans bg-gradient-to-b from-[#050414] via-[#0a0520] to-[#050414] relative"
    aria-label="Technical Skills and Expertise"
  >
    <div className="container mx-auto max-w-7xl">
      {/* Section Title */}
      <header className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          TECHNICAL SKILLS
        </h2>
        <div className="w-24 md:w-32 h-1 bg-[#8245ec] mx-auto mb-4" role="presentation" />
        <p className="text-gray-400 text-base md:text-lg xl:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          A comprehensive collection of my technical skills and expertise, 
          honed through various projects and professional experiences
        </p>
      </header>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {SkillsInfo.map((category, categoryIndex) => (
          <article
            key={category.title}
            className="group bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-opacity-70 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center group-hover:text-purple-300 transition-colors duration-300">
              {category.title}
            </h3>

            {/* Skills Grid with Tilt Effect */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              className="w-full"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center justify-center space-x-2 md:space-x-3 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 border border-gray-600 hover:border-purple-400 rounded-2xl py-3 px-3 md:py-4 md:px-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                    role="listitem"
                  >
                    <img
                      src={skill.logo}
                      alt=""
                      className="w-6 h-6 md:w-8 md:h-8 object-contain group-hover/skill:scale-110 transition-transform duration-300"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover/skill:text-white font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>

            {/* Skills count indicator */}
            <div className="mt-6 text-center">
              <span className="text-xs text-gray-500 font-medium">
                {category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-12 md:mt-16 text-center">
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-3 text-white font-semibold text-sm md:text-base shadow-lg">
          <span className="mr-2">🚀</span>
          Total Skills: {SkillsInfo.reduce((total, category) => total + category.skills.length, 0)}
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-purple-600 rounded-full opacity-5 blur-2xl" aria-hidden="true" />
    <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-600 rounded-full opacity-5 blur-2xl" aria-hidden="true" />
  </section>
);

export default Skills;