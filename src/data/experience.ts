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
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    period: 'Jun 2023 - Sep 2023',
    type: 'internship',
    description: [
      'Developed and implemented new features for Google Maps using React and TypeScript',
      'Collaborated with senior engineers to optimize application performance, reducing load time by 30%',
      'Participated in code reviews and contributed to team documentation',
      'Created automated testing suites using Jest and React Testing Library'
    ],
    technologies: ['React', 'TypeScript', 'Jest', 'GraphQL', 'Git']
  },
  {
    id: 2,
    title: 'Junior Web Developer',
    company: 'Tech Startup XYZ',
    location: 'San Francisco, CA',
    period: 'Jan 2023 - May 2023',
    type: 'part-time',
    description: [
      'Built responsive web applications using React and Next.js',
      'Implemented user authentication and authorization using JWT',
      'Developed RESTful APIs using Node.js and Express',
      'Worked with MongoDB for database management'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 3,
    title: 'Freelance Developer',
    company: 'Self-employed',
    location: 'Remote',
    period: 'Sep 2022 - Dec 2022',
    type: 'freelance',
    description: [
      'Designed and developed custom websites for small businesses',
      'Created e-commerce solutions using Shopify and custom React components',
      'Implemented SEO best practices and analytics tracking',
      'Managed client relationships and project timelines'
    ],
    technologies: ['React', 'Shopify', 'WordPress', 'CSS', 'JavaScript']
  }
];