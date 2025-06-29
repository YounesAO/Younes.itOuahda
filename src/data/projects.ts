export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'iot'| 'other';

export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ProjectSection {
  title: string;
  content: string[];
}

export interface Collaborator {
  name: string;
  role: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: ProjectImage[];
  sections: ProjectSection[];
  features: string[];
  challenges: string[];
  learnings: string[];
  collaborators: Collaborator[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Agricultural BI Analysis Platform',
    description: 'A cutting-edge business intelligence project that transforms agricultural data analysis and climate data with historical crop performance metrics to provide actionable insights for farmers and agricultural businesses. Key features include predictive analytics for crop yields, automated climate impact assessment, and interactive data visualization dashboards that help optimize farming decisions and resource allocation.',
    image: 'https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: ['other'],
    technologies: ['Talend', 'Oracle', 'Pentaho', 'ETL', 'BI', 'Data Visualization'],
    githubUrl: 'https://www.fao.org/faostat/en/#data',
    images: [
      {
        url: '/cropsarch.png',
        caption: 'Data pipeline visualization and ETL processes'
      },
      {
        url: '/crops3.png',
        caption: 'BI dashboard showing climate impact analytics'
      },
      {
        url: '/crops2.png',
        caption: 'BI dashboard showing climate impact analytics'
      },
      {
        url: '/crops1.png',
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
    ],
    collaborators: [
       {
    name: 'Amina Miskar',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/miskaraminaa',
    linkedinUrl: 'http://ma.linkedin.com/in/amina-miskar-ba6864208'
  },
      {
    name: 'Saifeddine Douidy',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/SaifeddineDouidy',
    linkedinUrl: 'http://ma.linkedin.com/in/saifeddine-douidy-87aa62251'
  }
    ]
  },
  {
    id: 2,
    title: 'Vocal Pathology Detection App',
    description: "A mobile app for recording vocal audio and sending it to a pretrained AI model hosted on a Flask API. Built with Expo (React Native). Includes a web admin panel (Flask) for managing pathologies and their descriptions.",
    image: '/vocal-path.png',
    category: ['mobile','ai','web'],
    technologies: [
      'React Native',
      'Expo',
      'Flask',
      'MongoDB'
    ],
    githubUrl: 'https://github.com/YounesAO/PFA-Vocal-Care',
    images: [
      {
        url: '/vocal-path-arch.png',
        caption: 'System Achiticture of the app '
      },
      {
        url: '/vocal-path-uis.png',
        caption: 'APP UI for detecting pathologies'
      }
    ],
    sections: [
      {
        title: 'Project Overview',
        content: [
          "Mobile app built with Expo (React Native) to record voice and send it to Flask API.",
          "Web admin panel (Flask) to manage pathology names and descriptions."
        ]
      },
      {
        title: 'Technical Implementation',
        content: [
          "Uses Expo for cross-platform mobile development.",
          "Flask API serves a pretrained AI model and handles audio processing.",
          "MongoDB for storing pathology data.",
          "Web admin panel is built using Flask."
        ]
      }
    ],
    features: [
      "Voice recording on mobile",
      "Send audio to Flask API for inference",
      "Admin panel to edit pathologies and their descriptions"
    ],
    challenges: [
      "Handling audio data on mobile and backend",
      "Integrating mobile app and Flask API"
    ],
    learnings: [
      "React Native/Expo mobile development",
      "Flask API integration",
      "Basic admin dashboard with Flask"
    ],
    collaborators: [
      {
    name: 'Assia Boujnah',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/assia1905',
    linkedinUrl: 'https://www.linkedin.com/in/assia-boujnah-524839278'
  },{
    name: 'Abdellah El Gharbi',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/abdellah-elgharbi/',
    linkedinUrl: 'https://www.linkedin.com/in/abdellah-el-ghabri-397844292/'
  }
    ]
  },
  {
    id: 3,
    title: 'Exam Surveillance System',
    description: 'A comprehensive online examination platform that ensures academic integrity through advanced AI-powered monitoring and behavioral analysis. The system employs sophisticated computer vision algorithms and WebRTC technology to detect potential cheating attempts while maintaining student privacy. Features include multi-camera monitoring, automated suspicious activity detection, and detailed analytics for exam administrators, making it an essential tool for educational institutions conducting remote examinations.',
    image: 'https://l-express.ca/wp-content/uploads/2023/02/iStock-525409577-1024x683.jpg',
    category: ['web'],
    technologies: [
    "Java",
    "Spring Boot",
    "MySQL",
    "React.js",
    "React Router",
    "Chart.js",
    "Tailwind CSS",
    "JWT "
  ],
    githubUrl: 'https://github.com/YounesAO/ExamSessionManger',
    images: [
      {
        url: '/exam1arch.png',
        caption: 'System Architecture'
      },
      {
        url: '/exam1lang.png',
        caption: 'App stack languages'
      }
    ],
    
  "sections": [
    {
      "title": "Project Overview",
      "content": [
        "Developed a web application for planning and managing exam sessions",
        "Implements secure backend with Java Spring Boot",
        "Modern frontend interface built using React.js",
        "Automates the assignment of professors to exam sessions for proctoring"
      ]
    },
    {
      "title": "Technical Implementation",
      "content": [
        "Backend built with Spring Boot, Spring Security, Hibernate (JPA), and MySQL",
        "Frontend built with React.js, React Router, Chart.js, and Tailwind CSS",
        "Implements JWT authentication, OTP, and password recovery via email",
        "Automated scheduling and dynamic assignment of professors to exam sessions",
        "Supports student importation via CSV files"
      ]
    }
  ],
  "features": [
    "Secure user authentication (login, OTP, password recovery)",
    "Teacher and department management (add, update, remove)",
    "Automated and manual creation of exam sessions",
    "Automatic assignment of professors to exam sessions",
    "Interactive admin dashboard with statistics and analytics",
    "Management of exam rooms and resources",
    "Student importation via CSV files"
  ],
  "challenges": [
    "Ensuring reliable scheduling and data consistency",
    "Managing authentication and access controls securely",
    "Handling user roles and permissions",
    "Robust CSV parsing and import for students"
  ],
  "learnings": [
    "Secure REST API development with Java Spring Boot and JWT",
    "Role-based access and authentication workflows",
    "Automated scheduling and resource assignment algorithms",
    "Integrating CSV file handling in web applications"
  ]
,
    collaborators: [
       {
    name: 'Amina Miskar',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/miskaraminaa',
    linkedinUrl: 'http://ma.linkedin.com/in/amina-miskar-ba6864208'
  }, {
    name: 'Ayoub Harati',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/ayoub-aav/',
    linkedinUrl: 'https://www.linkedin.com/in/ayoub-harati-2026a22b9/'
  }, {
    name: 'Aya El Abidi',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/yaelaya/',
    linkedinUrl: 'http://ma.linkedin.com/in/aya-el-abidi-118b36305'
  }
    ]
  },
  {
    "id": 4,
    "title": "EduXGame Platform",
    "description": "EduXGame is an innovative educational platform designed to make learning engaging and effective through gamification. The platform transforms traditional education by integrating adaptive learning algorithms, interactive games, and real-time analytics. Key features include personalized learning paths, a comprehensive achievement system, progress tracking dashboards, and detailed analytics for educators. EduXGame aims to foster motivation and deeper knowledge retention for learners of all ages.",
    "image": "https://github.com/aya-elloubab/EduXGame/blob/main/eduXgame-mobile/app/src/main/res/mipmap-hdpi/logo.png?raw=true",
    "category": ['mobile','ai'],
    "technologies": [
        "Spring Boot",
        "Android",
        "Gamification",
        "Educational Technology",
        "Adaptive Learning",
        "Analytics",
        "TypeScript",
        "Java"
    ],
    "githubUrl": "https://github.com/aya-elloubab/EduXGame",
    "images": [
        {
            "url":"/edugameuis.png",
            "caption": "Gamified learning interface"
        },
        {
            "url": "/edugamearch.png",
            "caption": "System architecture diagram"
        }
    ],
   "sections": [
  {
    "title": "Project Overview",
    "content": [
      "The EduXGame platform was meticulously built using Spring Boot and Java, leveraging these technologies to provide a solid, scalable foundation for delivering engaging, gamified educational experiences. By combining robust backend architecture with innovative design, the project enables seamless integration of interactive content and real-time feedback, making learning more dynamic and enjoyable for users of all ages. This approach ensures the platform can easily grow to accommodate new features and evolving educational needs.",
      "A dedicated Android mobile companion app extends the platform's accessibility and allows learners to engage with educational content anytime, anywhere.",
      "Interactive educational content and challenges were implemented to keep students motivated and make learning both effective and fun.",
      "A robust progress tracking and achievement system lets students and educators monitor performance, celebrate milestones, and identify growth areas."
    ]
  },
  {
    "title": "Technical Implementation",
  "content": [
    "The backend of EduXGame is powered by Spring Boot, enabling a scalable and modular architecture that supports reliable user management, content delivery, and seamless integration with the platform's front-end and mobile components. By exposing carefully designed RESTful APIs, the system ensures smooth communication and data synchronization between different parts of the application. This robust technical foundation allows for efficient handling of user requests and future expansion of features.",
    "Gamification mechanics such as badges, leaderboards, and progress bars are integrated to foster motivation and engagement.",
    "The Android client was developed to provide learners with mobile access, notifications, and real-time updates.",
    "Advanced analytics are implemented to track learning progression and user engagement across the platform."
  ]
  }
],
    "features": [
        "Interactive learning modules",
        "Gamification elements and rewards",
        "Progress and achievement tracking",
        "Mobile companion app",
        "Learning analytics dashboards",
        "Personalized learning paths"
    ],
    "challenges": [
        "Designing engaging UI for diverse learners",
        "Balancing educational content with game mechanics",
        "Synchronizing data across web and mobile platforms",
        "Optimizing performance for real-time interactions"
    ],
    "learnings": [
        "Principles of educational technology",
        "Effective gamification strategies",
        "Spring Boot backend development",
        "Android mobile application development"
    ],
    "collaborators": [
        {
    name: 'Aya Elloubab',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/aya-elloubab/',
    linkedinUrl: 'https://www.linkedin.com/in/aya-elloubab-22b3312b0/'
  }
    ]
},
  {
    id: 5,
    title: 'ESTD Club Management System',
    description: 'A comprehensive web-based platform that streamlines university club operations and enhances member engagement. The system provides powerful tools for event management, member communication, and administrative tasks. Features include automated event scheduling, member attendance tracking, resource management, and integrated communication tools, making it the perfect solution for managing university clubs and student organizations efficiently.',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: ['web'],
    technologies: ['PHP', 'Bootstrap', 'MySQL', 'Web Development', 'Event Management', 'Member Portal'],
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
    ],
    collaborators: [
       {
    name: 'Oussama Ajebli',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/OSSAMAAJ/',
    linkedinUrl: 'https://www.linkedin.com/in/oussama-ajebli-449b06246/'
  },
  {
    name: 'Ismail Er Ramdany',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/ismailErramdany',
    linkedinUrl: 'https://www.linkedin.com/in/ismail-er-ramdany-2083b7240/'
  }
    ]
  },
  {
  id: 6,
  title: 'IoT Smart Cane for Elderly and Visually Impaired',
  description: 'An innovative IoT-enabled smart cane designed to enhance safety and independence for elderly individuals and visually impaired users. The device integrates multiple sensors including ultrasonic sensors for obstacle detection, an MPU6050 accelerometer/gyroscope for fall detection, and ESP32 for connectivity. The system provides real-time alerts to caregivers, GPS tracking for emergency situations, and secure Bluetooth Low Energy communication. This wearable IoT solution addresses critical mobility challenges while ensuring user safety through intelligent monitoring and automated emergency response capabilities.',
  image: '/banneriot.png',
  category: ['iot','mobile'],
  technologies: ['ESP32', 'IoT', 'Bluetooth LE', 'Firebase', 'Ultrasonic Sensors', 'MPU6050', 'Wearable Technology', 'Real-time Database'],
  githubUrl: 'https://github.com/YounesAO',
  images: [
    {
      url: '/iotmentage.png',
      caption: 'Smart cane prototype with integrated sensors'
    },
    {
      url: '/screensiot.png',
      caption: 'IoT connectivity and mobile app interface'
    },
    {
      url: '/iotarch.png',
      caption: 'Architecture of the projet system'
    }
  ],
  sections: [
    {
      title: 'Project Overview',
      content: [
        'Designed IoT-enabled smart cane for elderly and visually impaired users',
        'Integrated multiple sensors for obstacle and fall detection',
        'Implemented secure communication protocols',
        'Developed real-time alert system for caregivers and family members'
      ]
    },
    {
      title: 'Technical Implementation',
      content: [
        'Used ESP32 microcontroller for connectivity and processing',
        'Integrated HC-SR04 ultrasonic sensors for obstacle detection',
        'Implemented MPU6050 accelerometer/gyroscope for fall detection',
        'Developed Firebase real-time database integration for data storage'
      ]
    }
  ],
  features: [
    'Obstacle detection using ultrasonic sensors',
    'Fall detection with accelerometer/gyroscope',
    'Real-time GPS tracking and emergency alerts',
    'Mobile and web application interfaces',
    'Automated caregiver notifications',
    'Firebase cloud data storage'
  ],
  challenges: [
    'Implementing secure IoT communication protocols',
    'Optimizing sensor accuracy for real-world conditions',
    'Ensuring reliable fall detection algorithms',
    'Balancing battery life with functionality',
    'Creating user-friendly interface for elderly users'
  ],
  learnings: [
    'IoT system design and implementation',
    'Sensor integration and data processing',
    'Bluetooth LE security protocols',
    'Real-time database management',
    'Wearable device development',
    'Embedded systems programming'
  ],
  collaborators: [
    {
      name: 'Mohamed Amine EL MASKYNE',
      role: 'Core team Collaborator',
      githubUrl: 'https://github.com/MOHAMED-AMINE11',
      linkedinUrl: 'https://www.linkedin.com/in/mohamed-amine-el-maskyne-b6037a301/'
    },
    {
      name: 'Younes AIT OUAHDA',
      role: 'Core team Collaborator',
      githubUrl: 'https://github.com/YounesAO',
      linkedinUrl: 'https://www.linkedin.com/in/younes-ait-ouahda/'
    },
      {
    name: 'Assia Boujnah',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/assia1905',
    linkedinUrl: 'https://www.linkedin.com/in/assia-boujnah-524839278'
  },{
    name: 'Abdellah El Gharbi',
    role: 'Core team Collaborator',
    githubUrl: 'https://github.com/abdellah-elgharbi/',
    linkedinUrl: 'https://www.linkedin.com/in/abdellah-el-ghabri-397844292/'
  },
    {
      name: 'Fatima KHALIL',
      role: 'Core team Collaborator',
      githubUrl: 'https://github.com/fatikhalil',
      linkedinUrl: 'https://www.linkedin.com/in/fatima-khalil-82679032a/'
    }
  ]
}
];