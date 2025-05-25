export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'part-time' | 'internship' | 'freelance';
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software & DevOps Intern',
    company: 'Assab Vision',
    location: 'France',
    period: 'Jul 2024 - Aug 2024',
    type: 'internship',
    description: [
      'Developed ERP/CRM modules using Next.js and Tailwind CSS for enhanced user experience',
      'Implemented Sanity CMS integration for content management and dynamic data handling',
      'Deployed applications on VPS with optimized server configurations',
      'Managed CI/CD pipelines for automated deployments and continuous integration'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'VPS', 'CI/CD', 'DevOps']
  },
  {
    id: 2,
    title: 'Web Developer Intern',
    company: 'ADMDI',
    location: 'Morocco',
    period: 'Apr 2023 - Jun 2023',
    type: 'internship',
    description: [
      'Built comprehensive car rental platform with Laravel framework and MySQL database',
      'Optimized database queries and improved application performance by 25%',
      'Implemented user authentication and booking management system',
      'Developed responsive frontend interfaces for better user experience'
    ],
    technologies: ['Laravel', 'MySQL', 'PHP', 'HTML/CSS', 'JavaScript']
  },
  {
    id: 3,
    title: 'Full-Stack Intern',
    company: 'Ouahda Solutions',
    location: 'Morocco',
    period: 'Jun 2022 - Jul 2022',
    type: 'internship',
    description: [
      'Created point-of-sale (POS) system with PHP and MySQL backend',
      'Integrated Chart.js for analytics and data visualization dashboards',
      'Developed inventory management and sales tracking features',
      'Implemented real-time reporting and analytics for business insights'
    ],
    technologies: ['PHP', 'MySQL', 'Chart.js', 'JavaScript', 'HTML/CSS']
  }
];