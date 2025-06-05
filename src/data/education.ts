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
    title: 'Engineering Degree in Computer Science (2ITE)',
    organization: 'Ecole Nationale des Sciences Appliquées d\'El Jadida (ENSAJ)',
    period: '2023 - 2026',
    description: 'Currently pursuing an Engineering Degree in Computer Science with focus on Full-Stack Development and DevOps. Specializing in modern web technologies ,Big Data and business intelligence.',
    type: 'education',
  },
  {
    title: 'DUT in Computer Engineering',
    organization: 'Ecole Supérieure de Technologie de Dakhla',
    period: '2021 - 2023',
    description: 'Completed a technical degree in Computer Engineering with strong foundation in programming, databases, and software development methodologies.',
    type: 'education',
  },
  {
    title: 'SSoftware Engineer Intern',
    organization: 'Assab Vision (France)',
    period: 'Jul 2024 - Aug 2024',
    description: 'Developed ERP/CRM modules using Next.js and Tailwind CSS. Implemented Sanity CMS integration and deployed on VPS. Managed CI/CD pipelines for automated deployments.',
    type: 'work',
  },
  {
    title: 'Web Developer Intern',
    organization: 'ADMDI (Morocco)',
    period: 'Apr 2023 - Jun 2023',
    description: 'Built car rental platform with Laravel/MySQL, Integrated dashboard for tracking business insights',
    type: 'work',
  },
  {
    title: 'Full-Stack Intern',
    organization: 'Ouahda Solutions (Morocco)',
    period: 'Jun 2022 - Jul 2022',
    description: 'Created POS system with PHP/MySQL and Chart.js analytics. Developed comprehensive point-of-sale solution with data visualization.',
    type: 'work',
  },
];