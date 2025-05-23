import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { education } from '../data/education';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Education & <span className="text-blue-600 dark:text-blue-400">Credentials</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My academic journey and professional certifications.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            
            {education.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } mb-16 last:mb-0`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 flex items-center justify-center shadow-md z-10">
                    {item.type === 'education' ? (
                      <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
                    ) : item.type === 'work' ? (
                      <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Award size={20} className="text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 dark:border-blue-400">
                    <div className="flex items-center mb-2 md:hidden">
                      {item.type === 'education' ? (
                        <GraduationCap size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      ) : item.type === 'work' ? (
                        <Briefcase size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      ) : (
                        <Award size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      )}
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {item.period}
                      </span>
                    </div>
                    <span className="hidden md:block text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{item.organization}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;