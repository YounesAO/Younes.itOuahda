import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-600';
      case 'internship': return 'bg-blue-600';
      case 'freelance': return 'bg-purple-600';
      case 'part-time': return 'bg-orange-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50" />

      {/* Subtle decorative elements */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl" />

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
            <Briefcase size={16} />
            Career Journey
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Work </span>
            <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            My professional journey and the valuable experiences that have shaped my skills.
          </p>

          <div className="w-24 h-1 mx-auto rounded-full bg-blue-600 dark:bg-blue-400" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-lg z-10"
                style={{ transform: 'translateX(-50%)' }}
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${getTypeColor(exp.type)}`}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;