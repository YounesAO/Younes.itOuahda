import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { skills, SkillCategory } from '../data/skills';
import { LucideIcon, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories: Array<{ key: SkillCategory | 'all'; label: string; icon: string }> = [
    { key: 'all', label: 'All Skills', icon: '✨' },
    { key: 'languages', label: 'Languages', icon: '💻' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'tools', label: 'DevOps', icon: '🛠️' },
    { key: 'other', label: 'Other', icon: '🚀' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  // Skills to display
  const displaySkills = filteredSkills;

  const getSkillLevel = (level: number): { text: string; color: string; bgColor: string } => {
    if (level >= 85) return { text: 'Expert', color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-100 dark:bg-green-900/30' };
    if (level >= 70) return { text: 'Advanced', color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-100 dark:bg-blue-900/30' };
    if (level >= 55) return { text: 'Proficient', color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-100 dark:bg-purple-900/30' };
    if (level >= 40) return { text: 'Intermediate', color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-100 dark:bg-orange-900/30' };
    return { text: 'Learning', color: 'text-gray-600 dark:text-gray-400', bgColor: 'bg-gray-100 dark:bg-gray-700' };
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900" />

      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl" />

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
            <Code2 size={16} />
            Tech Stack
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Skills & </span>
            <span className="text-blue-600 dark:text-blue-400">Technologies</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>

          <div className="w-24 h-1 mx-auto rounded-full bg-blue-600 dark:bg-blue-400" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${activeCategory === category.key
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

        {/* Skills Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 -ml-6"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 -mr-6"
          >
            <ChevronRight size={24} />
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-hidden py-4 px-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displaySkills.map((skill, index) => {
              const Icon = skill.icon as LucideIcon;
              const levelInfo = getSkillLevel(skill.level);

              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredSkill(`${skill.name}-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group flex-shrink-0"
                >
                  <motion.div
                    className="relative w-36 h-36 bg-white dark:bg-gray-800 rounded-2xl p-4 text-center border border-gray-200 dark:border-gray-700 shadow-md cursor-pointer flex flex-col items-center justify-center"
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon container */}
                    <motion.div
                      className="w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}15` }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon
                        size={24}
                        style={{ color: skill.color }}
                      />
                    </motion.div>

                    {/* Skill name */}
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm truncate">
                      {skill.name}
                    </h4>



                    {/* Progress indicator (visible on hover) */}
                    <motion.div
                      className="absolute bottom-2 left-2 right-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Programming Languages', value: skills.filter(s => s.category === 'languages').length, icon: '💻' },
            { label: 'Frontend Technologies', value: skills.filter(s => s.category === 'frontend').length, icon: '🎨' },
            { label: 'Backend & Databases', value: skills.filter(s => s.category === 'backend').length, icon: '⚙️' },
            { label: 'Tools & Platforms', value: skills.filter(s => s.category === 'tools').length + skills.filter(s => s.category === 'other').length, icon: '🛠️' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;