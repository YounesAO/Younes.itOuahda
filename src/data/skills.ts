import { SiJavascript, SiPython,SiPhp, SiCplusplus, SiPostgresql } from 'react-icons/si';
import { SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3 } from 'react-icons/si';
import { SiApachehadoop , SiLaravel, SiSpring, SiMongodb, SiMysql, SiOracle } from 'react-icons/si';
import { SiGit, SiDocker, SiLinux, SiAmazon, SiGithub, SiAndroid } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { FaTools } from "react-icons/fa";
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
  { name: 'JavaScript', level: 65, category: 'languages', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', level: 68, category: 'languages', icon: SiPython, color: '#3776AB' },
  { name: 'Java', level: 65, category: 'languages', icon: FaJava, color: '#ED8B00' },
  { name: 'PHP', level: 62, category: 'languages', icon: SiPhp, color: '#777BB4' },
  { name: 'C', level: 55, category: 'languages', icon: SiCplusplus, color: '#00599C' },
  { name: 'SQL', level: 65, category: 'languages', icon: SiPostgresql, color: '#336791' },
  
  // Frontend
  { name: 'React', level: 68, category: 'frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', level: 65, category: 'frontend', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', level: 65, category: 'frontend', icon: SiBootstrap, color: '#7952B3' },
  { name: 'HTML/CSS', level: 90, category: 'frontend', icon: SiHtml5, color: '#E34F26' },
  { name: 'React Native', level: 60, category: 'frontend', icon: SiReact, color: '#61DAFB' },
  
  // Backend
  { name: 'Laravel', level: 65, category: 'backend', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Spring Boot', level: 62, category: 'backend', icon: SiSpring, color: '#6DB33F' },
  { name: 'MySQL', level: 68, category: 'backend', icon: SiMysql, color: '#4479A1' },
  { name: 'OracleDB', level: 62, category: 'backend', icon: SiOracle, color: '#F80000' },
  { name: 'MongoDB', level: 60, category: 'backend', icon: SiMongodb, color: '#47A248' },
  { name: 'SQL Server', level: 58, category: 'backend', icon: DiMsqlServer, color: '#CC2927' },
  
  // Tools & DevOps
  { name: 'Git', level: 90, category: 'tools', icon: SiGit, color: '#F05032' },
  { name: 'Docker', level: 65, category: 'tools', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', level: 58, category: 'tools', icon: SiAmazon, color: '#232F3E' },
  { name: 'Linux', level: 65, category: 'tools', icon: SiLinux, color: '#FCC624' },
  { name: 'GitHub', level: 68, category: 'tools', icon: SiGithub, color: '#181717' },
  { name: 'Android Studio', level: 55, category: 'tools', icon: SiAndroid, color: '#3DDC84' },
  
  // Other/Specialized
  { name: 'Talend', level: 60, category: 'other', icon: FaTools , color: '#FF6D70' },
  { name: 'Pentaho', level: 58, category: 'other', icon: FaTools, color: '#0066CC' },
  { name: 'Hadoop', level: 55, category: 'other', icon: SiApachehadoop , color: '#FF8C00' },
  { name: 'Machine Learning', level: 50, category: 'other', icon: SiPython, color: '#3776AB' },
  { name: 'CI/CD', level: 62, category: 'other', icon: SiGithub, color: '#2088FF' },
  { name: 'Scrum', level: 65, category: 'other', icon: SiGithub, color: '#009639' },
];