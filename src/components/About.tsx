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
          
          <div className="prose prose-lg text-center dark:prose-invert max-w-none mb-12">
            <p>
              I'm a curious and driven software engineer, passionate about crafting impactful digital solutions through clean code, smart design, and automation. Whether it's frontend interfaces, backend logic, or deployment pipelines, I enjoy building complete systems that serve real needs.
            </p>
            <p>
              My approach blends technical depth with a strong sense of product usability. I'm constantly learning, iterating, and experimenting with new tools and ideas — from modern frameworks to data pipelines, containerization, and cloud-native development.
            </p>
            <p>
              Outside of coding, I enjoy exploring new tech trends, sharing knowledge, and contributing to solutions that make everyday tasks smarter, faster, and more accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Code size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Creative Coder</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                I transform ideas into scalable applications using modern web and software technologies.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                  <Book size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Lifelong Learner</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                I thrive on discovering new technologies, concepts, and patterns to stay sharp and innovative.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900">
                  <Coffee size={24} className="text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">Tech Optimist</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                I believe technology, when used thoughtfully, has the power to simplify lives and unlock potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
