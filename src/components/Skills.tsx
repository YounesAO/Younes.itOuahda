import React from 'react';
import { motion } from 'framer-motion';
import { skills, SkillCategory } from '../data/skills';
import { LucideIcon } from 'lucide-react';

const Skills: React.FC = () => {
  const categoryOrder: SkillCategory[] = ['languages', 'frontend', 'backend', 'tools', 'other'];

  // Function to convert percentage to descriptive level
  const getSkillLevel = (level: number): { text: string; color: string } => {
    if (level >= 90) return { text: 'Excellent', color: 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200' };
    if (level >= 75) return { text: 'Strong', color: 'bg-rose-100 dark:bg-rose-800 text-rose-800 dark:text-rose-200' };
    if (level >= 60) return { text: 'Good', color: 'bg-violet-100 dark:bg-violet-800 text-violet-800 dark:text-violet-200' };
    if (level >= 40) return { text: 'Basic', color: 'bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200' };
    return { text: 'New', color: 'bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200' };
  };

  const slideInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          A comprehensive overview of my technical skills and competencies.
        </motion.p>

        <div className="space-y-16">
          {categoryOrder.map((category, index) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={index % 2 === 0 ? slideInRight : slideInLeft}
              transition={{ delay: index * 0.2 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 capitalize">
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => {
                    const Icon = skill.icon as LucideIcon;
                    const skillLevel = getSkillLevel(skill.level);
                    
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillIndex % 2 === 0 ? slideInRight : slideInLeft}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-all duration-300 group"
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
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${skillLevel.color}`}>
                            {skillLevel.text}
                          </span>
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