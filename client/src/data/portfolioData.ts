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
  { name: 'JavaScript', level: 90, category: 'languages' },
  { name: 'Python', level: 85, category: 'languages' },
  { name: 'C#', level: 80, category: 'languages' },
  { name: 'C++', level: 75, category: 'languages' },
  { name: 'SQL', level: 85, category: 'languages' },
  { name: 'HTML5', level: 95, category: 'languages' },
  { name: 'CSS3', level: 90, category: 'languages' },
  { name: 'PHP', level: 70, category: 'languages' },

  // Frameworks & Libraries
  { name: 'React', level: 90, category: 'frameworks' },
  { name: '.NET', level: 80, category: 'frameworks' },
  { name: 'Django', level: 75, category: 'frameworks' },
  { name: 'NUXT', level: 70, category: 'frameworks' },
  { name: 'Node.js', level: 85, category: 'frameworks' },
  { name: 'Express', level: 80, category: 'frameworks' },

  // Tools & Databases
  { name: 'MySQL', level: 85, category: 'tools' },
  { name: 'MongoDB', level: 80, category: 'tools' },
  { name: 'SQL Server', level: 85, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'XAMPP', level: 80, category: 'tools' },
  { name: 'Power BI', level: 75, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 'cleopatra-eyewear',
    title: 'Cleopatra Eyewear Collection',
    description: 'Full-stack e-commerce web application for eyewear retail business with React frontend, Node.js Express backend, and Drizzle ORM for database interactions. Features customer-facing e-commerce functionality and administrative features for managing products, bookings, and users.',
    technologies: ['React', 'Node.js', 'Vite', 'Express', 'Drizzle ORM', 'React Query'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: true,
  },
  {
    id: 'airfare-prediction',
    title: 'Airfare Price Prediction ML',
    description: 'Machine learning research project to predict airline ticket prices based on factors like departure time, seasonality, airline, route, and booking window. Implemented data preprocessing, feature engineering, and model selection using Python with comprehensive visualizations.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: true,
  },
  {
    id: 'university-management',
    title: 'University Management System',
    description: 'Comprehensive C# .NET application for university administration featuring modules for student enrollment, registration, academic record management, faculty details, course assignments, scheduling, and curriculum management.',
    technologies: ['C#', '.NET Framework', 'SQL Server', 'Visual Studio'],
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: true,
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    description: 'Python-based restaurant management application with Qt Designer interface featuring menu management, order processing algorithms, inventory management capabilities, and user authentication with role-based permissions.',
    technologies: ['Python', 'Qt Designer', 'DSA Concepts'],
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    featured: false,
  },
  {
    id: 'pakwheels-scraping',
    title: 'PakWheels Data Scraping',
    description: 'Advanced Python web scraping project utilizing DSA concepts to implement efficient algorithms for extracting comprehensive data such as car listings, specifications, and pricing information from PakWheels website with data processing and cleaning.',
    technologies: ['Python', 'Tkinter', 'Web Scraping', 'DSA Concepts'],
    githubUrl: '#',
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
  title: 'Full Stack Developer & Computer Science Student',
  email: 'mudassirnaveed303@gmail.com',
  phone: '+92 309 9603075',
  location: '3A/19 Jinnah Park Sultan Pura G.T. Road Lahore',
  linkedIn: 'https://linkedin.com/in/mudassir',
  github: 'https://github.com/mudassir',
  hackerrank: 'https://hackerrank.com/mudassir',
  bio: 'Passionate about creating innovative web solutions and exploring the endless possibilities of technology. Currently pursuing my BS in Computer Science while building real-world applications.',
  profileImage: '@assets/Mudassir-removebg-preview_1750000650615.jpg',
};
