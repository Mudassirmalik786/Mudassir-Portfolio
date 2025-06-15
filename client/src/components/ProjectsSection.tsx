import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/portfolioData';

const ProjectsSection = () => {
  const { isVisible, setElementRef } = useScrollAnimation(0.1);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-light" ref={setElementRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, data science, and software engineering.
          </p>
        </motion.div>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl card-shadow overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="fas fa-external-link-alt text-2xl mb-2"></i>
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary font-medium transition-colors duration-300 flex items-center"
                    >
                      <i className="fab fa-github mr-2"></i>View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary font-medium transition-colors duration-300 flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary font-medium transition-colors duration-300 flex items-center"
                    >
                      <i className="fas fa-play mr-2"></i>Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3 
              className="text-2xl font-bold text-dark mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Other Notable Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white p-6 rounded-xl card-shadow border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                >
                  <h4 className="text-lg font-bold text-dark mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-sm font-medium transition-colors duration-300"
                      >
                        <i className="fab fa-github mr-1"></i>Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-sm font-medium transition-colors duration-300"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i>Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="https://github.com/Mudassirmalik786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
