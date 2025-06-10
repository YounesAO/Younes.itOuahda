import React from 'react';
import { Code, Book, Coffee, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
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
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const features = [
    {
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" />,
      bgColor: "bg-blue-100 dark:bg-blue-900",
      title: "Creative Coder",
      description: "I transform ideas into scalable applications using modern web and software technologies.",
      link: "#projects"
    },
    {
      icon: <Book size={24} className="text-purple-600 dark:text-purple-400" />,
      bgColor: "bg-purple-100 dark:bg-purple-900",
      title: "Lifelong Learner",
      description: "I thrive on discovering new technologies, concepts, and patterns to stay sharp and innovative.",
      link: "#skills"
    },
    {
      icon: <Coffee size={24} className="text-teal-600 dark:text-teal-400" />,
      bgColor: "bg-teal-100 dark:bg-teal-900",
      title: "Tech Optimist",
      description: "I believe technology, when used thoughtfully, has the power to simplify lives and unlock potential.",
      link: "#contact"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="prose prose-lg text-center dark:prose-invert max-w-none mb-12"
          >
            <motion.p variants={fadeIn}>
              I'm a curious and driven software engineer, passionate about crafting impactful digital solutions through clean code, smart design, and automation. Whether it's frontend interfaces, backend logic, or deployment pipelines, I enjoy building complete systems that serve real needs.
            </motion.p>
            <motion.p variants={fadeIn}>
              My approach blends technical depth with a strong sense of product usability. I'm constantly learning, iterating, and experimenting with new tools and ideas — from modern frameworks to data pipelines, containerization, and cloud-native development.
            </motion.p>
            <motion.p variants={fadeIn}>
              Outside of coding, I enjoy exploring new tech trends, sharing knowledge, and contributing to solutions that make everyday tasks smarter, faster, and more accessible.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className={`p-3 rounded-full ${feature.bgColor}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  {feature.description}
                </p>
                <motion.a
                  href={feature.link}
                  className="inline-flex items-center justify-center w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:underline"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
