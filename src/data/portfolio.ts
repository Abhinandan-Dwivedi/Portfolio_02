export type SocialLink = {
  label: string;
  url: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  name: string;
  descriptor: string;
  period?: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image: string;
};

export const personalInfo = {
  name: 'Abhinandan Dwivedi',
  summary:
    'Computer Science undergraduate focused on full-stack web development, building responsive applications across frontend, backend, and API layers.',
  email: 'abhinandandw17@gmail.com',
  phone: '+91-8687669818',
  linkedin: 'https://linkedin.com/in/abhinandan-dwivedi-97922329a/',
  github: 'https://github.com/Abhinandan-Dwivedi',
  resume: 'https://drive.google.com/file/d/1hI78kVYFYDYW4GG_YfFd_g4k2edLjGNP/view?usp=sharing',
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: personalInfo.github },
  { label: 'LinkedIn', url: personalInfo.linkedin },
  { label: 'Email', url: `mailto:${personalInfo.email}` },
];

export const education = {
  institution: 'Indian Institute of Information Technology (IIIT), Sonepat',
  location: 'Sonepat, Haryana, India',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  cgpa: '8.15 / 10',
  duration: '2023 — 2027',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['C++', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    title: 'Web technologies',
    items: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Qdrant', 'vector databases'], 
  },
  {
    title: 'AI & machine learning',
    items: ['Gemini API', 'Groq APIs', 'RAG', 'LLM Applications', 'Prompt Engineering', 'LLM Integration'],
  },
  {
    title: 'Cloud & developer tools',
    items: ['Git', 'GitHub', 'Linux', 'Docker', 'AWS', 'CI/CD', 'VS Code'],
  },
  {
    title: 'Core concepts',
    items: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'OOPS'],
  },
];

export const projects: Project[] = [
  {
    name: 'PLAY',
    descriptor: 'AI-powered video & social app',
    period: 'Jan 2026 — Apr 2026',
    description:
      'A full-stack video platform with JWT authentication and automatic token renewal. Video summaries use Gemini API and Cloudinary with asynchronous upload processing; MongoDB aggregation pipelines power community feed endpoints.',
    technologies: ['MERN', 'Gemini API', 'Cloudinary', 'JWT', 'MongoDB'],
    github: 'https://github.com/Abhinandan-Dwivedi/Play-app',
    live: 'https://play-app-frontend-seven.vercel.app/',
    image: '/projects/play.png',
  },
  {
    name: 'FleetTrack',
    descriptor: 'Real-time fleet tracking & delivery management',
    period: 'May 2026 — Jul 2026',
    description:
      'A multi-tenant SaaS platform built with Next.js, TypeScript, and tRPC. Live GPS updates are broadcast with Pusher WebSockets and Leaflet, with tenant-isolated channels, role-based authorization, and a PostgreSQL/Prisma data model.',
    technologies: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Prisma', 'Pusher', 'Leaflet'],
    github: 'https://github.com/Abhinandan-Dwivedi/fleet-tracker',
    live: 'https://fleet-tracker-tau.vercel.app/',
    image: '/projects/fleettrack.png',
  },
  {
    name: 'AI-Powered Investor Decision Intelligence',
    descriptor: 'Research over annual reports',
    description:
      'A full-stack RAG platform that answers investor questions over annual reports with cited sources. PDF ingestion, semantic retrieval, cross-encoder reranking, KPI extraction, and an evaluation harness form the research pipeline.',
    technologies: ['Python', 'FastAPI', 'React', 'Qdrant', 'PostgreSQL', 'Docker', 'Gemini API'],
    github: 'https://github.com/Abhinandan-Dwivedi/AI-Powered-Investor-Decision-Intelligence',
    image: '/projects/investor-decision-intelligence.png',
  },
];

export const experience = {
  company: 'Software Development & Open Source Contributions',
  role: 'Self-Directed Projects; GitHub',
  location: 'Remote',
  period: '2024 — Present',
  bullets: [
    'Developed and deployed 5+ full-stack applications using React, Next.js, TypeScript, Node.js, and MongoDB to Vercel and Render, implementing RESTful APIs and authentication end-to-end.',
    'Containerized application services with Docker to standardize local development environments across 5+ projects.',
    'Tested and validated 15+ REST API endpoints using Postman across projects, identifying and resolving integration issues that reduced API-related bugs by 20%.',
  ],
};

export const achievements = [
  {
    title: 'Competitive programming',
    description: 'Solved 700+ algorithmic problems across LeetCode, CodeChef, GeeksforGeeks, and HackerRank.',
    value: '700+',
    links: [
      { label: 'LeetCode', url: 'https://leetcode.com/u/dwabhi2006/' },
      { label: 'CodeChef', url: 'https://www.codechef.com/users/abhinandan74' },
    ],
  },
  {
    title: 'JEE Advanced 2023',
    description: 'Achieved All India Rank (AIR) 15,543 (top 6% of 250,000+ candidates).',
    value: 'AIR 15,543',
    links: [],
  },
];
