import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';
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
      className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-600 blur-3xl top-1/4 left-1/4"></div>
        <div className="absolute w-64 h-64 rounded-full bg-purple-300 dark:bg-purple-600 blur-3xl bottom-1/4 right-1/4"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Hello, I'm <span className="text-blue-600 dark:text-blue-400">John Doe</span>
            </h1>
            
            <div className="h-10 mb-8">
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 inline-block">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
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
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20 blur-xl"></div>
              <img
                src={photo}
                alt="John Doe"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;