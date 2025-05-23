import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My journey in the software development industry.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      {
                        'full-time': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
                        'part-time': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
                        'internship': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
                        'freelance': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
                      }[exp.type]
                    }`}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Briefcase size={16} className="mr-2 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;