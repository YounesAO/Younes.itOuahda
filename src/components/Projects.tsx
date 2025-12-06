import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, ProjectCategory } from '../data/projects';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category.includes(activeCategory));
  }, [activeCategory]);

  const categories: Array<{ key: ProjectCategory | 'all'; label: string; icon: string }> = [
    { key: 'all', label: 'All Projects', icon: '🎯' },
    { key: 'web', label: 'Web Apps', icon: '🌐' },
    { key: 'mobile', label: 'Mobile', icon: '📱' },
    { key: 'ai', label: 'AI/ML', icon: '🤖' },
    { key: 'iot', label: 'IoT', icon: '📡' },
    { key: 'other', label: 'Other', icon: '⚡' },
  ];

  const getCategoryColor = (cat: ProjectCategory) => {
    const colors: Record<ProjectCategory, string> = {
      web: 'bg-blue-600',
      mobile: 'bg-green-600',
      ai: 'bg-purple-600',
      iot: 'bg-orange-600',
      other: 'bg-gray-600',
    };
    return colors[cat];
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50" />

      {/* Subtle decorative blobs */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4"
          >
            <Layers size={16} />
            Portfolio
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my portfolio of innovative projects, showcasing expertise in web development,
            mobile applications, AI, and cutting-edge technologies.
          </p>

          <div className="w-24 h-1 mx-auto rounded-full bg-blue-600 dark:bg-blue-400" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${activeCategory === category.key
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <motion.div
                  className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View source code"
                          >
                            <Github size={20} className="text-white" />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View live project"
                          >
                            <ExternalLink size={20} className="text-white" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Category badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className={`px-3 py-1 text-xs font-bold rounded-full text-white ${getCategoryColor(cat)}`}
                        >
                          {cat.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* View Details Link */}
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link"
                    >
                      <span>View Project Details</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;