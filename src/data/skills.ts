import { SiJavascript, SiTypescript, SiPython, SiCplusplus, SiPostgresql } from 'react-icons/si';
import { SiReact, SiVuedotjs, SiAngular, SiTailwindcss, SiRedux, SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs, SiExpress, SiDjango, SiSpring, SiMongodb, SiGraphql } from 'react-icons/si';
import { SiGit, SiDocker, SiWebpack, SiJest, SiJenkins, SiAmazon } from 'react-icons/si';

export type SkillCategory = 'languages' | 'frontend' | 'backend' | 'tools' | 'other';

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon: React.ComponentType;
  color: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', level: 90, category: 'languages', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', level: 85, category: 'languages', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', level: 80, category: 'languages', icon: SiPython, color: '#3776AB' },
  { name: 'C++', level: 65, category: 'languages', icon: SiCplusplus, color: '#00599C' },
  { name: 'SQL', level: 85, category: 'languages', icon: SiPostgresql, color: '#336791' },
  
  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Vue.js', level: 80, category: 'frontend', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Angular', level: 70, category: 'frontend', icon: SiAngular, color: '#DD0031' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux', level: 85, category: 'frontend', icon: SiRedux, color: '#764ABC' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: SiNextdotjs, color: '#000000' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', level: 85, category: 'backend', icon: SiExpress, color: '#000000' },
  { name: 'Django', level: 75, category: 'backend', icon: SiDjango, color: '#092E20' },
  { name: 'Spring Boot', level: 70, category: 'backend', icon: SiSpring, color: '#6DB33F' },
  { name: 'MongoDB', level: 80, category: 'backend', icon: SiMongodb, color: '#47A248' },
  { name: 'GraphQL', level: 75, category: 'backend', icon: SiGraphql, color: '#E10098' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools', icon: SiGit, color: '#F05032' },
  { name: 'Docker', level: 80, category: 'tools', icon: SiDocker, color: '#2496ED' },
  { name: 'Webpack', level: 85, category: 'tools', icon: SiWebpack, color: '#8DD6F9' },
  { name: 'Jest', level: 80, category: 'tools', icon: SiJest, color: '#C21325' },
  { name: 'Jenkins', level: 75, category: 'tools', icon: SiJenkins, color: '#D24939' },
  { name: 'AWS', level: 70, category: 'tools', icon: SiAmazon, color: '#232F3E' },
];