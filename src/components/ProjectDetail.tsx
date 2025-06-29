import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle, AlertCircle, Lightbulb, X, ZoomIn } from 'lucide-react';
import { projects } from '../data/projects';
import Button from './ui/Button';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageClick = (image: { url: string; caption: string }) => {
    setSelectedImage(image);
    setZoomLevel(1);
  };

  const handleZoom = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newZoom = Math.min(Math.max(0.5, zoomLevel + delta), 3);
    setZoomLevel(newZoom);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project not found
          </h2>
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-20">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="relative h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <motion.h1 
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  {project.title}
                </motion.h1>
                <motion.div 
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  {project.githubUrl && (
                    <Button href={project.githubUrl}>
                      <Github size={20} className="mr-2" />
                      View Source
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button primary href={project.liveUrl}>
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Project Sections */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {project.sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Project Images */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Gallery
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative group cursor-pointer"
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end justify-between p-4">
                      <p className="text-white text-sm">
                        {image.caption}
                      </p>
                      <ZoomIn className="text-white w-5 h-5" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Challenges and Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
                  Challenges
                </h2>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-4"
                >
                  {project.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInLeft}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      {challenge}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
                  Key Learnings
                </h2>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-4"
                >
                  {project.learnings.map((learning, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInRight}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                      {learning}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            {/* Technologies */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-3"
              >
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    variants={fadeInUp}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Categories */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Categories
              </h2>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.category.map(cat => (
                  <span key={cat} className={`text-xs px-3 py-1 rounded-full font-medium ${
                    {
                      web: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
                      mobile: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
                      ai: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
                      iot: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
                      other: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                    }[cat]
                  }`}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Collaborators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.collaborators.map((collaborator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {collaborator.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {collaborator.role}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={collaborator.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={collaborator.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-0 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <div
                className="overflow-auto max-h-[90vh]"
                onWheel={handleZoom}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="rounded-lg"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center',
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </div>
              <p className="text-white text-center mt-4">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;