import React from 'react';
import { Code, Book, Zap, ArrowRight, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeIn = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const features = [
    {
      icon: <Code size={28} />,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      title: "Creative Coder",
      description: "I transform ideas into scalable applications using modern web and software technologies.",
      link: "#projects",
      stats: "6+ Projects"
    },
    {
      icon: <Book size={28} />,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      title: "Lifelong Learner",
      description: "I thrive on discovering new technologies, concepts, and patterns to stay sharp and innovative.",
      link: "#skills",
      stats: "20+ Technologies"
    },
    {
      icon: <Zap size={28} />,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      title: "Problem Solver",
      description: "I love tackling complex challenges and turning them into elegant, efficient solutions.",
      link: "#experience",
      stats: "4+ Internships"
    }
  ];

  const highlights = [
    { icon: <Target size={20} />, text: "Full-Stack Development" },
    { icon: <Zap size={20} />, text: "DevOps & CI/CD" },
    { icon: <Heart size={20} />, text: "Clean Architecture" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900" />

      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/[0.03] dark:bg-blue-500/[0.05] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/[0.03] dark:bg-purple-500/[0.05] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-gray-900 dark:text-white">Crafting </span>
              <span className="text-blue-600 dark:text-blue-400">Digital Excellence</span>
            </motion.h2>

            <motion.div
              variants={fadeIn}
              className="w-24 h-1 mx-auto rounded-full bg-blue-600 dark:bg-blue-400"
            />
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">curious and driven software engineer</span>,
                  passionate about crafting impactful digital solutions through clean code, smart design, and automation.
                  Whether it's frontend interfaces, backend logic, or deployment pipelines, I enjoy building complete systems that serve real needs.
                </motion.p>

                <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  My approach blends <span className="font-semibold text-purple-600 dark:text-purple-400">technical depth</span> with
                  a strong sense of product usability. I'm constantly learning, iterating, and experimenting with new tools and ideas —
                  from modern frameworks to data pipelines, containerization, and cloud-native development.
                </motion.p>

                <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Outside of coding, I enjoy exploring new tech trends, sharing knowledge, and contributing to solutions
                  that make everyday tasks <span className="font-semibold text-orange-600 dark:text-orange-400">smarter, faster, and more accessible</span>.
                </motion.p>
              </div>

              {/* Highlights */}
              <motion.div
                variants={fadeIn}
                className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative"
              >
                <motion.div
                  className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center ${feature.color} mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${feature.bgColor} ${feature.color}`}>
                        {feature.stats}
                      </span>
                    </div>

                    {/* Link */}
                    <motion.a
                      href={feature.link}
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
