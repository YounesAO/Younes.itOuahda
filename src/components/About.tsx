import React from 'react';
import { Code, Book, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p>
              I'm a passionate software engineer student with a strong foundation in computer science and a love for building
              innovative solutions. My journey in technology began when I was 15, tinkering with basic HTML and CSS to create 
              simple websites. That early curiosity has evolved into a dedicated pursuit of software engineering excellence.
            </p>
            <p>
              Currently pursuing my Bachelor's degree in Computer Science, I balance my academic studies with hands-on 
              projects and continuous self-learning. I believe in the power of clean, efficient code and user-centered design
              to create impactful digital experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or 
              mentoring junior developers. I'm always open to new challenges and collaborative opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Code size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                I enjoy tackling complex problems and breaking them down into elegant, efficient solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                  <Book size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Continuous Learner</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Technology evolves rapidly, and I'm committed to staying at the forefront through constant learning.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900">
                  <Coffee size={24} className="text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Detail Oriented</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                I believe that excellence lies in the details, from code quality to user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;