export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  type: 'internship' | 'volunteer' | 'fulltime';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
  percentage?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'C', level: 85, category: 'languages' },
  { name: 'C++', level: 80, category: 'languages' },
  { name: 'C#', level: 85, category: 'languages' },
  { name: 'Python', level: 90, category: 'languages' },
  { name: 'JavaScript', level: 90, category: 'languages' },
  { name: 'HTML5', level: 95, category: 'languages' },
  { name: 'CSS3', level: 90, category: 'languages' },
  { name: 'PHP', level: 75, category: 'languages' },
  { name: 'SQL', level: 85, category: 'languages' },

  // Frameworks & Libraries
  { name: '.NET Framework', level: 85, category: 'frameworks' },
  { name: 'React', level: 90, category: 'frameworks' },
  { name: 'Django', level: 80, category: 'frameworks' },
  { name: 'NUXT', level: 75, category: 'frameworks' },
  { name: 'Node.js', level: 85, category: 'frameworks' },

  // Tools & Platforms
  { name: 'Visual Studio Code', level: 95, category: 'tools' },
  { name: 'MS SQL Server', level: 85, category: 'tools' },
  { name: 'MySQL', level: 85, category: 'tools' },
  { name: 'MongoDB', level: 80, category: 'tools' },
  { name: 'PHPMyAdmin', level: 80, category: 'tools' },
  { name: 'MS Power BI', level: 75, category: 'tools' },
  { name: 'EdrawMax', level: 70, category: 'tools' },
  { name: 'XAMPP', level: 85, category: 'tools' },
  { name: 'Overleaf LaTeX', level: 70, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 'airfare-prediction',
    title: 'Airfare Price Prediction Using Machine Learning',
    description: 'Developed a machine learning model to predict airline ticket prices based on factors like departure time, seasonality, airline, route, and booking window. Implemented data preprocessing, feature engineering, and model selection using Python with comprehensive data visualizations using Matplotlib & Seaborn.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://drive.google.com/file/d/1a5BYhusXZtD9iUm6VbWiAwRo2DiXJrNh/view?usp=sharing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: true,
  },
  {
    id: 'cleopatra-eyewear',
    title: 'Cleopatra Eyewear Collection',
    description: 'Full-stack web application for an eyewear retail business with customer-facing e-commerce functionality and administrative features for managing products, bookings, and users. Built with React frontend, Node.js Express backend, and Drizzle ORM for database interactions.',
    technologies: ['React', 'Node.js', 'Vite', 'Express', 'Drizzle ORM', 'React Query', 'React Hook Form'],
    githubUrl: 'https://github.com/Mudassirmalik786/Cleopatra-Eyewear-Functional',
    liveUrl: 'https://cleopatra-eyewear.vercel.app',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: true,
  },
  {
    id: 'university-management',
    title: 'University Management System',
    description: 'Comprehensive C# .NET application featuring modules for student enrollment, registration, and academic record management. Designed interfaces for managing faculty details, course assignments, scheduling, and curriculum management with efficient database operations.',
    technologies: ['C#', '.NET Framework', 'Visual Studio Enterprise', 'SQL Server', 'Database Concepts'],
    githubUrl: 'https://github.com/Mudassirmalik786/DataBase-University-Management-System',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: true,
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    description: 'Python-based restaurant management application with Qt Designer interface. Implemented functionalities for managing menus, efficient order processing algorithms, user authentication mechanisms, and integrated inventory management capabilities.',
    technologies: ['Python', 'Qt Designer', 'Visual Studio Code', 'DSA Concepts'],
    githubUrl: 'https://github.com/Mudassirmalik786/Restaurant-Management-System-DSA',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: false,
  },
  {
    id: 'pakwheels-scraping',
    title: 'Scrapping of Pak Wheels',
    description: 'Advanced Python web scraping project utilizing DSA concepts to implement efficient algorithms for extracting comprehensive data such as car listings, specifications, and pricing information from the Pak Wheels website with data processing and cleaning algorithms.',
    technologies: ['Python', 'Tkinter', 'Visual Studio Code', 'DSA Concepts', 'Web Scraping'],
    githubUrl: 'https://github.com/Mudassirmalik786/Scrapping-project',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: 'punjab-police',
    company: 'Punjab Police, GOP',
    position: 'Intern / Volunteer',
    duration: 'August 2024 – October 2024',
    location: 'Lahore, Pakistan',
    description: [
      'Assisted in administrative and field operations under supervision of Punjab Police officials',
      'Conducted observational visits to multiple police departments, including crime investigation units, IT cells, and community policing offices',
      'Gained practical experience in law enforcement procedures and community service initiatives',
    ],
    type: 'volunteer',
  },
  {
    id: 'webdev-ecc',
    company: 'WebDev & ECC International',
    position: 'Web Developer',
    duration: 'May 2024 – August 2024',
    location: 'Remote',
    description: [
      'Designed and developed responsive, interactive, and visually appealing websites and web applications using modern web technologies such as HTML5, CSS3, and JavaScript',
      'Conducted thorough testing and debugging to ensure the reliability, performance, and security of web solutions across different browsers and devices',
      'Collaborated with team members to deliver high-quality web projects on time',
    ],
    type: 'internship',
  },
  {
    id: 'codsoft',
    company: 'CodSoft',
    position: 'Web Developer',
    duration: 'September 2023 – October 2023',
    location: 'Remote',
    description: [
      'Crafted visually captivating, interactive, and user-centric websites and web applications by leveraging cutting-edge web technologies, including HTML5, CSS3, and JavaScript',
      'Navigated the dynamic landscape of web development trends and standards, infusing projects with innovative approaches and best practices to stay ahead of the curve',
      'Participated in code reviews and team collaboration to maintain high code quality standards',
    ],
    type: 'internship',
  },
];

export const education: Education[] = [
  {
    id: 'uet-lahore',
    institution: 'University of Engineering and Technology',
    degree: 'Bachelor of Computer Science',
    duration: 'December 2022 - June 2026',
    location: 'Lahore, Pakistan',
    grade: 'CGPA: 3.37',
  },
  {
    id: 'pgc',
    institution: 'Punjab Group of Colleges',
    degree: 'Computer Science Intermediate',
    duration: 'August 2020 - July 2022',
    location: 'Lahore, Pakistan',
    percentage: '93.45%',
  },
  {
    id: 'valiant-high',
    institution: 'Valiant High School',
    degree: 'Science Matriculation',
    duration: 'August 2018 - July 2020',
    location: 'Lahore, Pakistan',
    percentage: '93.36%',
  },
];

export const certifications: Certification[] = [
  {
    id: 'frontend-webdev',
    name: 'Frontend Web Development Internship',
    issuer: 'WebDev Masters and ECC International',
  },
  {
    id: 'professional-voice',
    name: 'Finding Your Professional Voice: Confidence & Impact',
    issuer: 'Coursera',
  },
  {
    id: 'beta-mlsa',
    name: 'Beta MLSA',
    issuer: 'Microsoft',
  },
  {
    id: 'sql-advanced',
    name: 'SQL Advanced',
    issuer: 'HackerRank',
  },
];

export const personalInfo = {
  name: 'Muhammad Mudassir',
  title: 'BS Computer Science Student | Tech Enthusiast',
  email: 'mudassirnaveed303@gmail.com',
  phone: '+923099603075',
  location: '3A/19 Jinnah Park Sultan Pura G.T. Road Lahore',
  linkedIn: 'https://www.linkedin.com/in/muhammad-mudassir-870b8a261/',
  github: 'https://github.com/Mudassirmalik786',
  hackerrank: 'https://www.hackerrank.com/profile/mudassirnaveed31',
  bio: 'Passionate Computer Science student with 3+ years of hands-on experience in web development and modern technologies. Committed to creating innovative solutions that bridge the gap between design and functionality.',
  profileImage: '@assets/Mudassir-removebg-preview_1750000650615.jpg',
  cgpa: '3.37',
  university: 'University of Engineering and Technology, Lahore',
};
