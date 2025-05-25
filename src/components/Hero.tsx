import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, FileText, Mail, MapPin } from 'lucide-react';
import Button from './ui/Button';
import photo from '../assets/photo.png';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    'Computer Science Engineer',
    'Full-Stack Developer', 
    'DevOps Enthusiast',
    'BI Specialist'
  ];
  
  const typingSpeed = 100;
  const pauseTime = 2000;
  
  useEffect(() => {
    const currentText = roles[currentRole];
    
    if (typedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentRole]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          rgba(59, 130, 246, 0.15) 0%, 
          rgba(147, 51, 234, 0.1) 25%, 
          rgba(236, 72, 153, 0.05) 50%, 
          transparent 70%),
          linear-gradient(135deg, 
          #0f172a 0%, 
          #1e293b 25%, 
          #0f172a 50%, 
          #1e293b 75%, 
          #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-3xl animate-pulse top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-600/15 blur-3xl animate-pulse bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animation-delay-1000"></div>
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl animate-pulse top-3/4 left-1/3 animation-delay-2000"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        ></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Location & Status */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>El Jadida, Morocco</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Available for opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                Hello, I'm{' '}
                <span 
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 5 - 2.5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`
                  }}
                >
                  Younes
                </span>
              </h1>
              
              {/* Animated Role */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-3xl md:text-4xl text-gray-300 font-light">
                  <span className="text-blue-400">&gt;</span>{' '}
                  {typedText}
                  <span className="animate-pulse text-blue-400">|</span>
                </h2>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I craft{' '}
              <span className="text-blue-400 font-semibold">exceptional digital experiences</span>{' '}
              with clean code and modern technologies. Passionate about creating{' '}
              <span className="text-purple-400 font-semibold">elegant solutions</span>{' '}
              to complex problems.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="relative flex items-center gap-2">
                  View My Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
              
              <button
                className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl overflow-hidden transform transition-all duration-300 hover:border-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/20"
              >
                <span className="flex items-center gap-2">
                  <FileText size={18} className="group-hover:rotate-12 transition-transform" />
                  Download CV
                </span>
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-4">
              <a
                href="https://github.com/YounesAO"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20"
              >
                <Github size={24} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/younes-ait-ouahda"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20"
              >
                <Linkedin size={24} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="mailto:younes.atouahda@gmail.com"
                className="group p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20"
              >
                <Mail size={24} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* 3D Frame */}
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96 transform-gpu transition-transform duration-500"
                style={{
                  transform: `
                    perspective(1000px) 
                    rotateX(${mousePosition.y * 10 - 5}deg) 
                    rotateY(${mousePosition.x * 10 - 5}deg)
                    translateZ(50px)
                  `
                }}
              >
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-gradient-x">
                  <div className="w-full h-full rounded-3xl bg-gray-900"></div>
                </div>
                
                {/* Profile Image */}
                <img
                  src={photo}
                  alt="Younes Ait Ouahda"
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-2 rounded-3xl bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce animation-delay-2000"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-pink-400 rounded-full animate-bounce animation-delay-3000"></div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl scale-110 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="group p-4 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 animate-bounce hover:animate-none"
          >
            <ArrowDown size={24} className="text-blue-400 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
      `}</style>
    </section>
  );
};

export default Hero;