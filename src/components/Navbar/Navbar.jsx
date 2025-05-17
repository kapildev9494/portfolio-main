import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key press to close mobile menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Handle click outside mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Smooth scroll function with proper focus management
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      // Set focus for screen readers
      section.focus();
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 ${
          isScrolled ? "bg-[#050414] bg-opacity-95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto">
          <div className="text-white py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg md:text-xl font-semibold cursor-pointer">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick('about');
                }}
                className="focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414] rounded-md px-2 py-1"
                aria-label="Kapildev Latchubhukta - Home"
              >
                <span className="text-[#8245ec]">&lt;</span>
                <span className="text-white">Kapildev</span>
                <span className="text-[#8245ec]">/</span>
                <span className="text-white">Latchubhukta</span>
                <span className="text-[#8245ec]">&gt;</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-300">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 hover:text-[#8245ec] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414] ${
                      activeSection === item.id ? "text-[#8245ec]" : ""
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="hidden lg:flex space-x-4">
              <a
                href="https://github.com/kapildev9494"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414]"
                aria-label="Visit Kapildev's GitHub profile (opens in new tab)"
              >
                <FaGithub size={20} aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kapil-dev-latchubhukta-b28258128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414]"
                aria-label="Visit Kapildev's LinkedIn profile (opens in new tab)"
              >
                <FaLinkedin size={20} aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-[#8245ec] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414] transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FiX size={24} aria-hidden="true" />
              ) : (
                <FiMenu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-[#050414] bg-opacity-95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-[#8245ec] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-200"
              aria-label="Close menu"
            >
              <FiX size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.id} role="none">
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200 hover:text-[#8245ec] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414] ${
                      activeSection === item.id ? "text-[#8245ec] bg-gray-800" : "text-gray-300"
                    }`}
                    role="menuitem"
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links in mobile menu */}
          <div className="border-t border-gray-700 pt-6 mt-6">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/kapildev9494"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414]"
                aria-label="Visit Kapildev's GitHub profile (opens in new tab)"
              >
                <FaGithub size={24} aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kapil-dev-latchubhukta-b28258128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414]"
                aria-label="Visit Kapildev's LinkedIn profile (opens in new tab)"
              >
                <FaLinkedin size={24} aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;