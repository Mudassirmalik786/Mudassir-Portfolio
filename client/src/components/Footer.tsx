import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{personalInfo.name}</h3>
            <p className="text-gray-200 mb-4">
              Full Stack Developer & Computer Science Student passionate about creating 
              innovative web solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href={personalInfo.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-hackerrank text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-200 hover:text-white transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-2 text-gray-200">
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2 text-gray-400"></i>
                {personalInfo.email}
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-2 text-gray-400"></i>
                {personalInfo.phone}
              </p>
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-200">
            &copy; {currentYear} {personalInfo.name}. All rights reserved. Built with passion using React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
