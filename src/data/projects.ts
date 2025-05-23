export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'other';

export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ProjectSection {
  title: string;
  content: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: ProjectImage[];
  sections: ProjectSection[];
  features: string[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart, checkout, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    images: [
      {
        url: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Product listing page with advanced filtering'
      },
      {
        url: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Shopping cart with real-time updates'
      },
      {
        url: 'https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Admin dashboard for inventory management'
      }
    ],
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Built a scalable e-commerce platform using the MERN stack',
          'Implemented secure payment processing with Stripe integration',
          'Created a responsive design that works seamlessly across all devices',
          'Developed an admin dashboard for inventory and order management'
        ]
      },
      {
        title: 'Technical Implementation',
        content: [
          'Used Redux for state management and handling complex data flows',
          'Implemented JWT authentication for secure user sessions',
          'Created RESTful APIs following best practices',
          'Optimized database queries for better performance'
        ]
      }
    ],
    features: [
      'User authentication and authorization',
      'Product search and filtering',
      'Shopping cart functionality',
      'Secure payment processing',
      'Order tracking system',
      'Admin dashboard'
    ],
    challenges: [
      'Implementing real-time inventory updates',
      'Optimizing performance for large product catalogs',
      'Handling concurrent transactions',
      'Ensuring secure payment processing'
    ],
    learnings: [
      'Advanced state management patterns',
      'Security best practices in e-commerce',
      'Performance optimization techniques',
      'Real-time data synchronization'
    ]
  },
  // Add more projects with similar detailed structure
];