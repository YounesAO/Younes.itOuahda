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
    title: 'Agricultural BI Analysis Platform',
    description: 'Advanced business intelligence platform analyzing climate emissions impact on agricultural crops using ETL pipelines and data visualization.',
    image: 'https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'other',
    technologies: ['Talend', 'Oracle', 'Pentaho', 'ETL', 'BI'],
    githubUrl: 'https://github.com/YounesAO',
    images: [
      {
        url: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Data pipeline visualization and ETL processes'
      },
      {
        url: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'BI dashboard showing climate impact analytics'
      }
    ],
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Developed ETL pipelines to process agricultural and climate data',
          'Created comprehensive BI dashboards for crop yield analysis',
          'Implemented data warehousing solutions using Oracle database',
          'Generated automated reports using Pentaho reporting tools'
        ]
      },
      {
        title: 'Technical Implementation',
        content: [
          'Used Talend for data integration and transformation processes',
          'Designed star schema database architecture for optimal querying',
          'Created interactive dashboards with drill-down capabilities',
          'Implemented data quality checks and validation processes'
        ]
      }
    ],
    features: [
      'ETL data pipelines',
      'Climate impact analysis',
      'Crop yield predictions',
      'Interactive BI dashboards',
      'Automated reporting',
      'Data quality monitoring'
    ],
    challenges: [
      'Handling large volumes of agricultural data',
      'Integrating multiple data sources',
      'Ensuring data accuracy and consistency',
      'Creating meaningful visualizations'
    ],
    learnings: [
      'Advanced ETL techniques',
      'Business intelligence best practices',
      'Data warehousing concepts',
      'Oracle database optimization'
    ]
  },
  {
    id: 2,
    title: 'Vocal Pathology Detection App',
    description: 'Mobile application for diagnosing vocal disorders using machine learning and audio processing technologies.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'Flask', 'Machine Learning', 'Audio Processing'],
    githubUrl: 'https://github.com/YounesAO',
    images: [
      {
        url: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Mobile app interface for voice recording'
      },
      {
        url: 'https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'ML analysis results and diagnosis interface'
      }
    ],
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Built cross-platform mobile app using React Native and Expo',
          'Integrated machine learning models for vocal pathology detection',
          'Developed Flask backend API for audio processing',
          'Implemented real-time audio analysis and diagnosis'
        ]
      },
      {
        title: 'Technical Implementation',
        content: [
          'Used advanced audio processing algorithms for feature extraction',
          'Trained ML models for pattern recognition in vocal disorders',
          'Created intuitive mobile interface for healthcare professionals',
          'Implemented secure data handling for medical information'
        ]
      }
    ],
    features: [
      'Real-time voice recording',
      'ML-powered diagnosis',
      'Cross-platform compatibility',
      'Healthcare data security',
      'Audio feature extraction',
      'Professional reporting'
    ],
    challenges: [
      'Accurate audio processing on mobile devices',
      'Training ML models with limited data',
      'Ensuring medical-grade accuracy',
      'Cross-platform audio handling'
    ],
    learnings: [
      'Mobile machine learning implementation',
      'Audio signal processing',
      'Healthcare app development',
      'React Native performance optimization'
    ]
  },
  {
    id: 3,
    title: 'Exam Surveillance System',
    description: 'Anti-cheating web application with real-time monitoring capabilities for online examinations.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Java EE', 'Next.js', 'Real-time Monitoring', 'WebRTC'],
    githubUrl: 'https://github.com/YounesAO',
    images: [
      {
        url: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Real-time monitoring dashboard'
      },
      {
        url: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Exam interface with surveillance features'
      }
    ],
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Developed comprehensive exam surveillance system',
          'Implemented real-time monitoring with Java EE backend',
          'Created modern frontend interface using Next.js',
          'Integrated anti-cheating detection algorithms'
        ]
      },
      {
        title: 'Technical Implementation',
        content: [
          'Used WebRTC for real-time video monitoring',
          'Implemented behavioral analysis for cheating detection',
          'Created secure exam environment with access controls',
          'Developed automated flagging system for suspicious activities'
        ]
      }
    ],
    features: [
      'Real-time video monitoring',
      'Behavioral analysis',
      'Automated cheating detection',
      'Secure exam environment',
      'Admin dashboard',
      'Detailed reporting'
    ],
    challenges: [
      'Real-time processing performance',
      'Privacy and security concerns',
      'Cross-browser compatibility',
      'Scalable monitoring architecture'
    ],
    learnings: [
      'Real-time web technologies',
      'Video processing and analysis',
      'Security implementation',
      'Java EE enterprise development'
    ]
  },
  {
    id: 4,
    title: 'EduGame Platform',
    description: 'Gamified learning environment for students with interactive educational content and progress tracking.',
    image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Spring Boot', 'Android', 'Gamification', 'Educational Technology'],
    githubUrl: 'https://github.com/YounesAO',
    images: [
      {
        url: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Gamified learning interface'
      },
      {
        url: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Progress tracking and achievements system'
      }
    ],
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Built gamified learning platform using Spring Boot',
          'Developed Android mobile companion app',
          'Implemented interactive educational content',
          'Created comprehensive progress tracking system'
        ]
      },
      {
        title: 'Technical Implementation',
        content: [
          'Used Spring Boot for robust backend architecture',
          'Integrated gamification elements and reward systems',
          'Developed RESTful APIs for mobile app integration',
          'Implemented user analytics and learning insights'
        ]
      }
    ],
    features: [
      'Interactive learning modules',
      'Gamification elements',
      'Progress tracking',
      'Mobile companion app',
      'Achievement system',
      'Learning analytics'
    ],
    challenges: [
      'Engaging user interface design',
      'Balancing education and entertainment',
      'Cross-platform synchronization',
      'Performance optimization'
    ],
    learnings: [
      'Educational technology principles',
      'Gamification strategies',
      'Spring Boot development',
      'Android app development'
    ]
  },
  {
    id: 5,
    title: 'ESTD Club Management System',
    description: 'Full-stack web application for university club administration with member management and event organization.',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['PHP', 'Bootstrap', 'MySQL', 'Web Development'],
    githubUrl: 'https://github.com/YounesAO',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Club management dashboard'
      },
      {
        url: 'https://images.pexels.com/photos/1181619/pexels-photo-1181619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Event organization and member management'
      }
    ],
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Developed comprehensive club management system',
          'Implemented member registration and management',
          'Created event organization and scheduling features',
          'Built responsive interface using Bootstrap framework'
        ]
      },
      {
        title: 'Technical Implementation',
        content: [
          'Used PHP for server-side development',
          'Designed normalized MySQL database schema',
          'Implemented user authentication and role management',
          'Created responsive design for all devices'
        ]
      }
    ],
    features: [
      'Member management',
      'Event organization',
      'User authentication',
      'Responsive design',
      'Admin dashboard',
      'Activity tracking'
    ],
    challenges: [
      'Database design optimization',
      'User role management',
      'Responsive layout implementation',
      'Data security and validation'
    ],
    learnings: [
      'Full-stack PHP development',
      'Database design principles',
      'Bootstrap framework',
      'Web application security'
    ]
  }
];