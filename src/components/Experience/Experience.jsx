import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-sans bg-skills-gradient clip-path-custom-2"
      role="region"
      aria-labelledby="experience-heading"
    >
      {/* Section Title */}
      <header className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
        <h2 id="experience-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          EXPERIENCE
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mb-4 rounded-full" aria-hidden="true"></div>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          A collection of my professional journey and the roles I've embraced across various organizations
        </p>
      </header>

      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Timeline Line - Hidden on mobile/tablet */}
        <div 
          className="hidden lg:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-gray-400 to-purple-500 h-full transform -translate-x-1/2"
          aria-hidden="true"
        ></div>

        {/* Experience Entries */}
        <div className="space-y-8 lg:space-y-16">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Desktop Timeline Circle - Hidden on mobile/tablet */}
              <div 
                className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-purple-500 w-16 h-16 rounded-full justify-center items-center z-10 shadow-lg"
                aria-hidden="true"
              >
                <img
                  src={experience.img}
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
                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <div className="w-20 h-16 sm:w-24 sm:h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={experience.img}
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/96/80';
                          e.target.alt = `${experience.company} logo placeholder`;
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight hover:text-purple-400 transition-colors duration-300">
                        {experience.role}
                      </h3>
                      <h4 className="text-base sm:text-lg text-purple-300 font-medium mb-2">
                        {experience.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <time 
                          className="text-sm sm:text-base text-gray-400 font-medium"
                          dateTime={experience.date}
                        >
                          {experience.date}
                        </time>
                        {experience.location && (
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500" aria-hidden="true">📍</span>
                            <span className="text-sm text-gray-500">
                              {experience.location}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mb-6">
                    <h5 className="text-purple-400 font-semibold mb-3 text-sm sm:text-base">
                      Role Overview:
                    </h5>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {experience.desc}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  {experience.achievements && (
                    <div className="mb-6">
                      <h5 className="text-purple-400 font-semibold mb-3 text-sm sm:text-base">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2" role="list">
                        {experience.achievements.map((achievement, idx) => (
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

                  {/* Skills Section */}
                  <div className="mb-6">
                    <h5 className="text-purple-400 font-semibold mb-3 text-sm sm:text-base">
                      Technologies & Skills:
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                      {experience.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-block text-center bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-xs lg:text-sm font-semibold text-purple-300 rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-purple-900/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  {experience.metrics && (
                    <div className="mb-6">
                      <h5 className="text-purple-400 font-semibold mb-3 text-sm sm:text-base">
                        Impact & Results:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {experience.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-3 text-center"
                          >
                            <div className="text-purple-300 text-lg sm:text-xl font-bold">
                              {metric.value}
                            </div>
                            <div className="text-gray-400 text-xs sm:text-sm">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Additional Links */}
                  {(experience.project_links || experience.certifications) && (
                    <div className="pt-4 border-t border-gray-700/50">
                      {experience.project_links && (
                        <div className="mb-4">
                          <h6 className="text-purple-400 font-medium mb-3 text-sm sm:text-base">
                            Related Projects:
                          </h6>
                          <div className="flex flex-wrap gap-3">
                            {experience.project_links.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 underline decoration-dotted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                                aria-label={`View project: ${link.name}`}
                              >
                                <svg 
                                  className="w-4 h-4 mr-1" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                {link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {experience.certifications && (
                        <div>
                          <h6 className="text-purple-400 font-medium mb-3 text-sm sm:text-base">
                            Certifications Earned:
                          </h6>
                          <div className="flex flex-wrap gap-2">
                            {experience.certifications.map((cert, idx) => (
                              <span
                                key={idx}
                                className="bg-green-900/30 text-green-300 text-xs sm:text-sm px-3 py-1.5 rounded-full border border-green-500/30 font-medium"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Employment Type */}
                  {experience.type && (
                    <div className="pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Employment Type:</span>
                        <span className="text-purple-300 text-sm font-medium bg-purple-900/20 px-3 py-1 rounded-full border border-purple-500/30">
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  )}
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

export default Experience;