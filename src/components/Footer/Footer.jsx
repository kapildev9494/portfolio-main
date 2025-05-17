import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  // Enhanced smooth scroll function with error handling
  const handleScroll = (sectionId) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    } catch (error) {
      console.warn(`Navigation error for section: ${sectionId}`, error);
    }
  };

  // Navigation items with accessibility improvements
  const navigationItems = [
    { name: 'About', id: 'about', ariaLabel: 'Navigate to About section' },
    { name: 'Skills', id: 'skills', ariaLabel: 'Navigate to Skills section' },
    { name: 'Experience', id: 'experience', ariaLabel: 'Navigate to Experience section' },
    { name: 'Projects', id: 'projects', ariaLabel: 'Navigate to Projects section' },
    { name: 'Education', id: 'education', ariaLabel: 'Navigate to Education section' },
  ];

  // Social media links with proper accessibility
  const socialMediaLinks = [
    { 
      icon: <FaLinkedin aria-hidden="true" />, 
      link: 'https://linkedin.com/in/kapildev-latchubhukta', 
      label: 'LinkedIn Profile',
      name: 'LinkedIn'
    },
    { 
      icon: <FaGithub aria-hidden="true" />, 
      link: 'https://github.com/kapildev-latchubhukta', 
      label: 'GitHub Profile',
      name: 'GitHub'
    },
    { 
      icon: <FaTwitter aria-hidden="true" />, 
      link: 'https://twitter.com/kapildev-latchubhukta', 
      label: 'Twitter Profile',
      name: 'Twitter'
    },
    { 
      icon: <FaInstagram aria-hidden="true" />, 
      link: 'https://instagram.com/kapildev-latchubhukta', 
      label: 'Instagram Profile',
      name: 'Instagram'
    },
    { 
      icon: <FaYoutube aria-hidden="true" />, 
      link: 'https://youtube.com/@kapildev-latchubhukta', 
      label: 'YouTube Channel',
      name: 'YouTube'
    },
  ];

  return (
    <footer 
      className="bg-gradient-to-t from-gray-900 to-transparent text-white py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
      role="contentinfo"
      aria-label="Website footer"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Kapildev Latchubhukta
            </h2>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
              Full-Stack Developer passionate about creating innovative solutions 
              and building exceptional user experiences.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <div className="flex items-center justify-center md:justify-start">
                <MdEmail className="mr-2" aria-hidden="true" />
                <span>mailmekapildev@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MdLocationOn className="mr-2" aria-hidden="true" />
                <span>Available for Remote Work</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
            <nav role="navigation" aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-2">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="w-full text-left hover:text-purple-400 text-gray-300 text-sm lg:text-base py-2 px-3 rounded-md transition-all duration-200 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialMediaLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-2xl text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2"
                  aria-label={item.label}
                  title={item.name}
                >
                  {item.icon}
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Let&apos;s build something amazing together!
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <p>
              © {new Date().getFullYear()} Kapildev Latchubhukta. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <button 
              className="hover:text-purple-400 transition-colors duration-200 focus:outline-none focus:text-purple-400"
              onClick={() => console.log('Privacy Policy clicked')}
            >
              Privacy Policy
            </button>
            <button 
              className="hover:text-purple-400 transition-colors duration-200 focus:outline-none focus:text-purple-400"
              onClick={() => console.log('Terms of Service clicked')}
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 shadow-lg hover:shadow-purple-500/25"
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;