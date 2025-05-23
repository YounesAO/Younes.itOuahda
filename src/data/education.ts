export type EducationItemType = 'education' | 'work' | 'certification';

export interface EducationItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: EducationItemType;
}

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    organization: 'Stanford University',
    period: '2018 - 2022',
    description: 'Graduated with honors. Specialized in Artificial Intelligence and Software Engineering. Participated in various hackathons and coding competitions.',
    type: 'education',
  },
  {
    title: 'Software Engineering Intern',
    organization: 'Google',
    period: 'Summer 2021',
    description: 'Worked on the development of new features for Google Maps. Collaborated with a team of experienced developers to implement and test features.',
    type: 'work',
  },
  {
    title: 'High School Diploma',
    organization: 'Tech High School',
    period: '2014 - 2018',
    description: 'Graduated as valedictorian with a focus on mathematics and computer science. Led the school\'s programming club.',
    type: 'education',
  },
  {
    title: 'Junior Web Developer',
    organization: 'Startup XYZ',
    period: '2019 - 2020 (Part-time)',
    description: 'Developed and maintained websites for various clients. Worked with technologies such as React, Node.js, and MongoDB.',
    type: 'work',
  },
  {
    title: 'AWS Certified Developer',
    organization: 'Amazon Web Services',
    period: 'March 2022',
    description: 'Earned certification demonstrating proficiency in developing, deploying, and debugging cloud-based applications using AWS.',
    type: 'certification',
  },
  {
    title: 'Full-Stack Web Development',
    organization: 'Udacity',
    period: 'June 2020',
    description: 'Completed an intensive program covering front-end and back-end technologies, databases, and deployment strategies.',
    type: 'certification',
  },
];