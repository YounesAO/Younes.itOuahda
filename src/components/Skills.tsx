import React from 'react';
import { motion } from 'framer-motion';
import { skills, SkillCategory } from '../data/skills';

const Skills: React.FC = () => {
  const categoryOrder: SkillCategory[] = ['languages', 'frontend', 'backend', 'tools', 'other'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          A comprehensive overview of my technical skills and competencies.
        </motion.p>

        <div className="space-y-16">
          {categoryOrder.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 capitalize">
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="p-2 rounded-lg transition-colors"
                            style={{ backgroundColor: `${skill.color}20` }}
                          >
                            <Icon 
                              size={24} 
                              style={{ color: skill.color }}
                              className="transition-transform group-hover:scale-110"
                            />
                          </div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                        </div>
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 dark:bg-blue-400"
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;