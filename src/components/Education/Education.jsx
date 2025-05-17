import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-sans bg-skills-gradient clip-path-custom-3"
      role="region"
      aria-labelledby="education-heading"
    >
      {/* Section Title */}
      <header className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
        <h2 id="education-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          EDUCATION
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mb-4 rounded-full" aria-hidden="true"></div>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </header>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Timeline Line - Hidden on mobile/tablet */}
        <div 
          className="hidden lg:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-gray-400 to-purple-500 h-full transform -translate-x-1/2"
          aria-hidden="true"
        ></div>

        {/* Education Entries */}
        <div className="space-y-8 lg:space-y-16">
          {education.map((edu, index) => (
            <article
              key={edu.id}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Desktop Timeline Circle - Hidden on mobile/tablet */}
              <div 
                className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-purple-500 w-16 h-16 rounded-full justify-center items-center z-10 shadow-lg"
                aria-hidden="true"
              >
                <img
                  src={edu.img}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>

              {/* Content Section */}
              <div
                className={`w-full lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pr-8 xl:pr-16" : "lg:pl-8 xl:pl-16"
                }`}
              >
                <div className="bg-gray-900/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700/60 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-purple-500/25">
                  {/* Institution Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <div className="w-20 h-16 sm:w-24 sm:h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={edu.img}
                        alt={`${edu.school} logo`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/96/80';
                          e.target.alt = `${edu.school} logo placeholder`;
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight hover:text-purple-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base sm:text-lg text-purple-300 font-medium mb-2">
                        {edu.school}
                      </h4>
                      <time 
                        className="text-sm sm:text-base text-gray-400 font-medium"
                        dateTime={edu.date}
                      >
                        {edu.date}
                      </time>
                    </div>
                  </div>

                  {/* Academic Details */}
                  <div className="space-y-4">
                    {edu.grade && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-purple-400 font-semibold text-sm sm:text-base">Grade:</span>
                        <span className="text-white font-medium text-sm sm:text-base">{edu.grade}</span>
                      </div>
                    )}
                    
                    {edu.desc && (
                      <div>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {edu.desc}
                        </p>
                      </div>
                    )}

                    {/* Key Coursework */}
                    {edu.coursework && (
                      <div>
                        <h5 className="text-purple-400 font-semibold mb-3 text-sm sm:text-base">
                          Key Coursework:
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-purple-900/60 hover:border-purple-400/50"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {edu.achievements && (
                      <div>
                        <h5 className="text-purple-400 font-semibold mb-3 text-sm sm:text-base">
                          Achievements:
                        </h5>
                        <ul className="space-y-2" role="list">
                          {edu.achievements.map((achievement, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                            >
                              <span 
                                className="text-purple-400 mt-1 flex-shrink-0"
                                aria-hidden="true"
                              >
                                •
                              </span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* GPA or Additional Info */}
                    {edu.gpa && (
                      <div className="pt-4 border-t border-gray-700/50">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="text-purple-400 font-semibold text-sm sm:text-base">GPA:</span>
                          <span className="text-white font-medium text-sm sm:text-base">{edu.gpa}</span>
                        </div>
                      </div>
                    )}

                    {/* Honors or Distinctions */}
                    {edu.honors && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor, idx) => (
                            <span
                              key={idx}
                              className="bg-green-900/30 text-green-300 text-xs sm:text-sm px-3 py-1.5 rounded-full border border-green-500/30 font-medium"
                            >
                              {honor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Spacer for Desktop Layout */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </article>
          ))}
        </div>

        {/* Desktop Timeline End Indicator */}
        <div 
          className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
};

export default Education;