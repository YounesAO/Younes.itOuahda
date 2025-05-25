import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import photo from '../assets/photo.png';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Engineer';
  const typingSpeed = 150;
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-300">
        <div className="absolute w-96 h-96 rounded-full bg-blue-300 dark:bg-blue-600 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-purple-300 dark:bg-purple-600 blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left md:max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
              Hello, I'm <span className="text-blue-600 dark:text-blue-400">Younes AO</span>
            </h1>
            
            <div className="h-12 mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 inline-block transition-colors duration-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors duration-300 max-w-xl">
              I build exceptional digital experiences with clean code and modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <Button primary onClick={scrollToProjects}>
                View My Work
              </Button>
              <Button secondary href="/resume.pdf" download>
                <FileText size={18} className="mr-2" />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={photo}
                alt="Younes Ait Ouahda"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl transition-colors duration-300"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;