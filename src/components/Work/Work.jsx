import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoading, setImageLoading] = useState({});

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedProject) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [selectedProject]);

  // Handle image loading states
  const handleImageLoad = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: true }));
  };

  const handleImageError = (event) => {
    event.target.src = '/api/placeholder/600/400';
    event.target.alt = 'Project image unavailable';
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          PROJECTS
        </h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-base lg:text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid - Enhanced Responsive */}
      <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-gray-900/95 backdrop-blur-sm border border-gray-700/60 rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-purple-500/30 hover:-translate-y-2 hover:border-purple-500/50 focus-within:ring-2 focus-within:ring-purple-500/50"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleOpenModal(project)}
            role="button"
            aria-label={`View ${project.title} project details`}
          >
            {/* Project Image with Loading State */}
            <div className="relative overflow-hidden bg-gray-800">
              {!imageLoading[project.id] && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <div className="aspect-video">
                <img
                  src={project.image || '/api/placeholder/600/400'}
                  alt={`${project.title} preview`}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    imageLoading[project.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm lg:text-base line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags - Enhanced styling */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-xs lg:text-sm font-semibold text-purple-300 rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-purple-900/60"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="inline-block bg-gray-700/50 text-xs lg:text-sm font-medium text-gray-400 rounded-full px-3 py-1.5">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* View indicator */}
              <div className="flex justify-end">
                <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                  Click to view details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal - Keeping your basic structure */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600/50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
            
            {/* Close Button - Enhanced */}
            <div className="flex justify-end p-4 lg:p-6 border-b border-gray-700/50">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-2xl lg:text-3xl font-bold hover:bg-gray-700/50 rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="flex flex-col">
                
                {/* Project Image */}
                <div className="w-full flex justify-center bg-gray-900 px-4 lg:px-6 pb-6">
                  <img
                    src={selectedProject.image || '/api/placeholder/800/450'}
                    alt={`${selectedProject.title} detailed view`}
                    className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-2xl"
                    onError={handleImageError}
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 lg:p-8">
                  <h3 
                    id="modal-title"
                    className="text-2xl lg:text-3xl font-bold text-white mb-4"
                  >
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-base lg:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Extended description if available */}
                  {selectedProject.longDescription && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">About This Project</h4>
                      <p className="text-gray-400 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                  )}

                  {/* All Tags */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-sm font-semibold text-purple-300 rounded-lg px-4 py-2 text-center transition-all duration-300 hover:bg-purple-900/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Live Button - Enhanced */}
                  <div className="flex justify-center">
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white py-3 px-8 lg:py-4 lg:px-10 rounded-full text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25"
                      style={{
                        boxShadow: '0 0 30px rgba(130, 69, 236, 0.3)',
                      }}
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Project
                    </a>
                  </div>

                  {/* Additional project info */}
                  {(selectedProject.github || selectedProject.category || selectedProject.year) && (
                    <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-gray-700/50">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200"
                        >
                          View Source Code
                        </a>
                      )}
                      {selectedProject.category && (
                        <span className="text-gray-500 text-sm">
                          Category: {selectedProject.category}
                        </span>
                      )}
                      {selectedProject.year && (
                        <span className="text-gray-500 text-sm">
                          Year: {selectedProject.year}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;