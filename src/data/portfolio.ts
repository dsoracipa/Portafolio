// ============================================
// PORTFOLIO DATA - Daniel Felipe Soracipa
// ============================================
// Este archivo contiene todos los datos del portafolio de forma centralizada
// No inventes datos; usa solo información real del CV

// ============================================
// INTERFACES & TYPES
// ============================================

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // nombre del ícono (ej: 'github', 'linkedin', 'email')
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  titlesRotating: string[];
  description: string;
  profileImage: string;
  cvFile: string;
  location: string;
  phone: string;
  email: string;
  emailAlt: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  achievements: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  fullDescription: string;
  features: string[];
  isDeployed: boolean;
  dateRange: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  iconComponent?: string; // nombre del componente de react-icons
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  relevantCourses?: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ContactReason {
  text: string;
}

// ============================================
// PROFILE DATA
// ============================================

export const profile: Profile = {
  name: 'Daniel Felipe Soracipa',
  firstName: 'Daniel',
  lastName: 'Soracipa',
  title: 'Junior Software Engineer',
  titlesRotating: [
    'Full-Stack Developer',
    'Backend Engineer',
    'Software Developer',
    'React Developer'
  ],
  description:
    'Junior Software Engineer focused on shipping full-stack features with Python and modern web stacks. Experiencia práctica en sistemas en producción con React + PHP, automatización de workflows con n8n, y GitHub Actions para CI/CD.',
  profileImage: `${import.meta.env.BASE_URL}Profile.png`,
  cvFile: '/cv.pdf', // TODO: Agregar archivo CV en public/cv.pdf
  location: 'Bogotá, Colombia',
  phone: '+57 3167940188',
  email: 'danisora375@gmail.com',
  emailAlt: 'dsoracipa@unal.edu.co'
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/dsoracipa',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daniel-soracipa-torres-042920209/',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:danisora375@gmail.com',
    icon: 'email'
  }
];

// ============================================
// EXPERIENCE
// ============================================

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full-Stack Developer (Student Assistant)',
    company: 'Office of Environmental Management (OGA)',
    location: 'Universidad Nacional de Colombia',
    startDate: 'Oct 2025',
    endDate: 'Dec 2025',
    isCurrent: false,
    achievements: [
      'Mantenimiento y evolución de sistema interno en entorno real con acceso a servidor y base de datos',
      'Desarrollo de features en React (frontend) + PHP (backend), priorizando confiabilidad y mantenibilidad',
      'Implementación de workflow n8n: detecta reportes nuevos, registra trazabilidad (status/fecha/actor) y envía correos a revisores y liderazgo',
      'Automatización de despliegues con GitHub Actions, reduciendo pasos manuales significativamente'
    ]
  },
  {
    id: 2,
    title: 'Teaching Assistant (Course Monitor) - Programming',
    company: 'Universidad Nacional de Colombia',
    location: 'Bogotá, Colombia',
    startDate: 'Jul 2025',
    endDate: 'Sept 2025',
    isCurrent: false,
    achievements: [
      'Apoyo a estudiantes en debugging, fundamentos de programación y guía de resolución de problemas',
      'Soporte logístico y seguimiento del progreso académico de los estudiantes'
    ]
  }
];

// ============================================
// CERTIFICATIONS
// ============================================

export const certifications: Certification[] = [
  // TODO: Agregar certificaciones si existen
  // Actualmente no hay certificaciones en el CV proporcionado
];

// ============================================
// EDUCATION
// ============================================

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Sc. Computing and Systems Engineering',
    institution: 'Universidad Nacional de Colombia',
    location: 'Bogotá, Colombia',
    startDate: 'Feb 2022',
    endDate: 'Present',
    isCurrent: true,
    relevantCourses: [
      'Software Architecture',
      'Software Engineering',
      'Databases',
      'Operating Systems',
      'Networks'
    ]
  }
];

// ============================================
// PROJECTS
// ============================================

export const projects: Project[] = [
  {
    id: 1,
    title: 'RunPath - Cloud-native Microservices',
    description:
      'Despliegue de microservicios cloud-native en Google Kubernetes Engine (GKE) con arquitectura escalable y containerización completa.',
    image: `${import.meta.env.BASE_URL}projects/runpath.png`,
    technologies: [
      'Kubernetes',
      'Docker',
      'GCP',
      'GKE',
      'Microservices',
      { name: 'Spring Boot', iconComponent: 'SiSpringboot' },
      { name: 'RabbitMQ', iconComponent: 'SiRabbitmq' },
      { name: 'Nginx', iconComponent: 'SiNginx' }
    ],
    githubUrl: 'https://github.com/ArquiSoft-Grupo-2B',
    liveUrl: 'TBD',
    fullDescription:
      'Proyecto de despliegue de servicios de rutas utilizando arquitectura de microservicios cloud-native. Implementación completa en Google Cloud Platform (GCP) utilizando Google Kubernetes Engine (GKE), con containerización de servicios, configuración de Deployments, Services, ConfigMaps, Secrets e Ingress para gestión de tráfico.\n\nDesarrollé el microservicio de notificaciones con Java y Spring Boot para el envío de correos electrónicos y recordatorios, consumiendo eventos desde RabbitMQ. Además, configuramos Nginx como reverse proxy, balanceador de carga y WAF para proteger y optimizar el acceso tanto web como móvil.',
    features: [
      'Arquitectura de microservicios escalable',
      'Containerización con Docker',
      'Kubernetes Deployments y Services',
      'Gestión de configuración con ConfigMaps y Secrets',
      'Ingress para routing de peticiones',
      'Despliegue en GCP GKE'
    ],
    isDeployed: false,
    dateRange: 'Aug 2025 – Dec 2025'
  },
  {
    id: 2,
    title: 'Project Management CRUD - Django + React',
    description:
      'Sistema completo de gestión de proyectos con API REST en Django y UI moderna en React, incluyendo validaciones, paginación y manejo de estados.',
    image: `${import.meta.env.BASE_URL}projects/crud-django.png`,
    technologies: ['Django', 'React', 'REST API', 'PostgreSQL', 'Vite'],
    githubUrl: 'https://github.com/dsoracipa/Crud_Django_React',
    liveUrl: 'TBD',
    fullDescription:
      'Aplicación full-stack para gestión de proyectos con backend Django REST Framework y frontend React. Implementa CRUD completo con validaciones tanto en backend como frontend, paginación de resultados, manejo de estados de loading/error, y confirmaciones de usuario. Flujo end-to-end desde API hasta base de datos y UI.',
    features: [
      'API REST con Django REST Framework',
      'Validaciones en backend y frontend',
      'Paginación de resultados',
      'UI React con manejo de loading/error',
      'Confirmaciones de acciones críticas',
      'Flujo E2E completo: API → BD → UI'
    ],
    isDeployed: false,
    dateRange: 'Sept 2025'
  },
  {
    id: 3,
    title: 'AgroConecta',
    description:
      'Plataforma de conexión agrícola liderada como Frontend Lead de equipo de 3 personas, con arquitectura feature-based y flujos data-heavy.',
    image: `${import.meta.env.BASE_URL}projects/agroconecta.png`,
    technologies: ['React', 'TypeScript', 'Cypress', 'Feature-Based Architecture'],
    githubUrl: 'https://github.com/SwEng2-2025i-nutrias/Agroconecta-Front-end/tree/feature/Users-Chat',
    liveUrl: 'TBD',
    fullDescription:
      'Proyecto donde lideré el equipo de frontend (3 personas) manejando requirements, planning, documentación, delegación y delivery. Arquitectura basada en features con componentes reutilizables, implementación de flujos complejos de datos incluyendo publicación de contenido, búsqueda/filtrado, y UI de mensajería. Testing end-to-end con Cypress.',
    features: [
      'Liderazgo de equipo frontend (3 personas)',
      'Arquitectura feature-based escalable',
      'Componentes reutilizables y modulares',
      'Flujos de publicación y búsqueda avanzada',
      'UI de mensajería en tiempo real',
      'Testing E2E con Cypress'
    ],
    isDeployed: false,
    dateRange: 'Feb 2025 – Jul 2025'
  },
  {
    id: 4,
    title: 'RepoTestes - Sistema de Gestión de Pruebas',
    description:
      'Sistema de gestión y organización de repositorios de pruebas con seguimiento de resultados y análisis de cobertura.',
    image: `${import.meta.env.BASE_URL}projects/repotestes.png`,
    technologies: ['React', 'Node.js', 'MongoDB', 'Jest', 'Testing'],
    githubUrl: 'https://github.com/SwEng2-2025i-nutrias/testing/tree/user-chat-test',
    liveUrl: 'TBD',
    fullDescription:
      'Plataforma para gestionar repositorios de pruebas y testing. Permite organizar, ejecutar y analizar resultados de pruebas de software, con dashboards de cobertura y reportes detallados. Incluye integración con frameworks de testing populares y visualización de métricas de calidad de código.',
    features: [
      'Gestión centralizada de repositorios de pruebas',
      'Dashboard de cobertura de código',
      'Integración con Jest y otros frameworks',
      'Reportes detallados de resultados',
      'Análisis de tendencias de calidad',
      'Visualización de métricas en tiempo real'
    ],
    isDeployed: false,
    dateRange: 'TBD'
  },
  {
    id: 5,
    title: 'UN Chaza',
    description:
      'Visibiliza negocios informales “chazas” dentro del campus; vendedores registran productos; estudiantes consultan oferta.',
    image: `${import.meta.env.BASE_URL}projects/UnChaza.png`,
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'Supabase',
      'JWT',
      'bcryptjs',
      'Swagger',
      'Jest',
      'Supertest',
      { name: 'Bootstrap', iconComponent: 'SiBootstrap' }
    ],
    githubUrl: 'https://github.com/dsoracipa/Proyecto_IngeSoft',
    liveUrl: 'TBD',
    fullDescription:
      'Backend desarrollado con NestJS, TypeScript, PostgreSQL, TypeORM y Supabase. Autenticación JWT + bcryptjs, documentación con Swagger. Incluye API REST, lógica de negocio con arquitectura limpia, CRUD de usuarios y productos, pruebas unitarias/integración con Jest y Supertest.\n\nEn el frontend utilicé Bootstrap para el diseño responsivo y componentes visuales.',
    features: [
      'Diseñé API REST + lógica de negocio con arquitectura limpia.',
      'CRUD usuarios/productos',
      'Pruebas unitarias e integración con Jest + Supertest',
      'Documentación interactiva con Swagger',
      'Autenticación JWT y cifrado de contraseñas con bcryptjs',
      'Persistencia con PostgreSQL y TypeORM',
      'Gestión de usuarios y productos vía Supabase'
    ],
    isDeployed: false,
    dateRange: '2025'
  }
];

// ============================================
// SKILLS
// ============================================

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: [
      { name: 'Python', iconComponent: 'FaPython' },
      { name: 'Django', iconComponent: 'SiDjango' },
      { name: 'NestJS', iconComponent: 'SiNestjs' },
      { name: 'Node.js', iconComponent: 'FaNodeJs' },
      { name: 'PHP', iconComponent: 'FaPhp' }
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', iconComponent: 'FaReact' },
      { name: 'JavaScript', iconComponent: 'SiJavascript' },
      { name: 'TypeScript', iconComponent: 'SiTypescript' },
      { name: 'Vite', iconComponent: 'SiVite' },
      { name: 'Tailwind CSS', iconComponent: 'SiTailwindcss' }
    ]
  },
  {
    name: 'Bases de datos',
    skills: [
      { name: 'PostgreSQL', iconComponent: 'SiPostgresql' },
      { name: 'MySQL', iconComponent: 'SiMysql' },
      { name: 'MariaDB', iconComponent: 'SiMariadb' },
      { name: 'MongoDB', iconComponent: 'SiMongodb' }
    ]
  },
  {
    name: 'DevOps / CI/CD',
    skills: [
      { name: 'Docker', iconComponent: 'FaDocker' },
      { name: 'Kubernetes', iconComponent: 'SiKubernetes' },
      { name: 'GCP', iconComponent: 'SiGooglecloud' },
      { name: 'GitHub Actions', iconComponent: 'SiGithubactions' }
    ]
  },
  {
    name: 'Control de versiones',
    skills: [
      { name: 'Git', iconComponent: 'FaGitAlt' },
      { name: 'GitHub', iconComponent: 'FaGithub' }
    ]
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Jest', iconComponent: 'SiJest' },
      { name: 'Cypress', iconComponent: 'SiCypress' },
      { name: 'Supertest', icon: '🔬' }
    ]
  },
  {
    name: 'Herramientas',
    skills: [
      { name: 'n8n', icon: '🔗' },
      { name: 'Swagger', iconComponent: 'SiSwagger' },
      { name: 'TypeORM', icon: '📦' }
    ]
  }
];

export const softSkills: string[] = [
  'Trabajo en equipo y colaboración',
  'Liderazgo de proyectos frontend',
  'Resolución de problemas técnicos',
  'Comunicación efectiva'
];

// ============================================
// LANGUAGES
// ============================================

export const languages: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' }
];

// ============================================
// CONTACT REASONS (Por qué trabajar conmigo)
// ============================================

export const contactReasons: ContactReason[] = [
  {
    text: 'Experiencia manteniendo sistemas reales con acceso a servidor y base de datos'
  },
  {
    text: 'Automatización de workflows con n8n para trazabilidad y notificaciones'
  },
  {
    text: 'Experiencia full-stack práctica: React + PHP + Bases de datos'
  },
  {
    text: 'Implementación de CI/CD con GitHub Actions para deploy automation'
  },
  {
    text: 'Buenas prácticas: APIs REST, testing E2E/unitario, arquitectura limpia'
  }
];
