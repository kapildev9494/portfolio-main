import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 font-sans"
      aria-label="About Kapildev Latchubhukta"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Skip to content link for screen readers */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded">
              Skip to main content
            </a>
            
            {/* Greeting */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>
            
            {/* Name */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
              Kapildev Latchubhukta
            </h2>
            
            {/* Skills Heading with Typing Effect */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  'Front End Developer',
                  'Web Developer',
                  'React Developer',
                  'Full Stack Developer',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]" aria-hidden="true">{cursor}</span>
                )}
              />
            </div>
            
            {/* About Me Paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am a full-stack developer with over 5+ years of experience in
              building scalable web applications. Skilled in both front-end and
              back-end development, I specialize in the MERN stack and other
              modern technologies to create seamless user experiences and
              efficient solutions.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-white py-3 px-6 md:px-8 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414]"
                style={{
                  background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}
                aria-label="Contact Kapildev Latchubhukta"
              >
                CONTACT ME
              </a>
              <a
                href="https://drive.google.com/file/d/1VGt9DN9rqSlvnBvWB3RSvCu1iC-P9zNG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-white py-3 px-6 md:px-8 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#050414]"
                style={{
                  background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}
                aria-label="Download Kapildev's CV (opens in new tab)"
              >
                DOWNLOAD CV
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </div>
          
          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] border-4 border-purple-700 rounded-full overflow-hidden"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Portrait of Kapildev Latchubhukta - Full Stack Developer"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_30px_rgba(130,69,236,0.5)]"
                loading="lazy"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;