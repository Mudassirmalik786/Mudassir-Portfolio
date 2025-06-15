import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo, downloadResume } from '../utils/smoothScroll';
import { personalInfo } from '../data/portfolioData';
import profileImage from '@assets/Mudassir-removebg-preview_1750000650615.jpg';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Mudassir';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    // Cursor blinking effect
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="text-white/90 text-xl md:text-2xl mb-2">Hi, I'm</div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight mb-4">
                  Muhammad Mudassir
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                  Computer Science Student & Developer
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-200 font-light max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                University of Engineering and Technology, Lahore
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {personalInfo.bio}
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                onClick={() => smoothScrollTo('projects')}
                className="bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <i className="fas fa-code mr-2"></i>
                View Projects
              </button>
              <button
                onClick={downloadResume}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href={personalInfo.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fab fa-hackerrank text-2xl"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative animate-float">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white/10 backdrop-blur-sm p-8 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Muhammad Mudassir - Professional Photo"
                  className="w-full h-full object-cover rounded-full border-4 border-white/20"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.i 
          className="fas fa-chevron-down text-2xl cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => smoothScrollTo('about')}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
