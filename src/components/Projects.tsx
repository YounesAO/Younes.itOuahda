import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, ProjectCategory } from '../data/projects';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [isLoading, setIsLoading] = useState(false);
  
  // Use useMemo to optimize filtering performance
  const filteredProjects = useMemo(() => {
    setIsLoading(true);
    const filtered = activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
    setTimeout(() => setIsLoading(false), 300); // Simulate loading for smooth transition
    return filtered;
  }, [activeCategory]);
  
  const categories: Array<ProjectCategory | 'all'> = ['all', 'web', 'mobile', 'ai', 'other'];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto"
        >
          Explore my portfolio of innovative projects, showcasing expertise in web development, mobile applications, and cutting-edge technologies.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500 shadow-lg shadow-blue-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow-md'
              }`}
              aria-pressed={activeCategory === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <div className="col-span-full flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl  group transform hover:-translate-y-2"
                  role="article"
                  aria-labelledby={`project-title-${project.id}`}
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex space-x-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label={`View ${project.title} GitHub repository`}
                          >
                            <Github size={20} className="text-white" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label={`View ${project.title} live project`}
                          >
                            <ExternalLink size={20} className="text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 
                        id={`project-title-${project.id}`}
                        className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      >
                        {project.title}
                      </h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        {
                          web: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
                          mobile: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
                          ai: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
                          other: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                        }[project.category]
                      }`}>
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-md"
                    >
                      View Details
                      <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;