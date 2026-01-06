import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, FileText, Mail, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import photo from '../assets/photo.png';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  const typingSpeed = 100;

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  useEffect(() => {
    const fullText = roles[currentRole];

    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      const timeout = setTimeout(() => {
        setTypedText('');
        setIsTypingComplete(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentRole]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: import.meta.env.VITE_GITHUB_URL,
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={22} />,
      href: import.meta.env.VITE_LINKEDIN_URL,
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={22} />,
      href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`,
      label: 'Email',
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Clean background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-500" />

      {/* Subtle decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] dark:opacity-[0.05] bg-blue-500"
          style={{ top: '10%', right: '10%' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] dark:opacity-[0.05] bg-blue-500"
          style={{ bottom: '10%', left: '10%' }}
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 py-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Available for Internship
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-gray-900 dark:text-white">Hello, I'm </span>
              <span className="text-blue-600 dark:text-blue-400">Younes AO</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              className="h-14 mb-8 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400">{typedText}</span>
                <motion.span
                  animate={{ opacity: isTypingComplete ? [1, 0] : 1 }}
                  transition={{ duration: 0.5, repeat: isTypingComplete ? Infinity : 0 }}
                  className="inline-block w-1 h-10 bg-blue-600 dark:bg-blue-400 ml-1 align-middle"
                />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I craft <span className="text-blue-600 dark:text-blue-400 font-medium">exceptional digital experiences</span> with
              clean code and modern technologies. Passionate about turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={18} />
                View My Work
              </motion.button>
              <motion.a
                href="/Younes_Ait_Ouahda_CV.pdf"
                download
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Simple ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-blue-500/20 animate-pulse-glow" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={photo}
                    alt="Younes Ait Ouahda"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;