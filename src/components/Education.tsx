import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { education } from '../data/education';

const Education: React.FC = () => {
  // Separate education and work items
  const educationItems = education.filter(item => item.type === 'education');
  const workItems = education.filter(item => item.type === 'work');

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900" />

      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl" />

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
            <GraduationCap size={16} />
            Background
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Education & </span>
            <span className="text-blue-600 dark:text-blue-400">Training</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            My academic journey and professional development path.
          </p>

          <div className="w-24 h-1 mx-auto rounded-full bg-blue-600 dark:bg-blue-400" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-blue-600 text-white">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Path</h3>
            </div>

            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900" />

              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-lg z-10" />

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={14} className="text-blue-600 dark:text-blue-400" />
                      {item.period}
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>

                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {item.organization}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-600 text-white">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Path</h3>
            </div>

            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900" />

              {workItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900 shadow-lg z-10" />

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={14} className="text-purple-600 dark:text-purple-400" />
                      {item.period}
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>

                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      {item.organization}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;