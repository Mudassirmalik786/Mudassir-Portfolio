import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { education, certifications } from '../data/portfolioData';

const AboutSection = () => {
  const { isVisible, setElementRef } = useScrollAnimation(0.2);

  const quickFacts = [
    { label: 'CGPA', value: '3.37', icon: 'fas fa-graduation-cap' },
    { label: 'Projects', value: '5+', icon: 'fas fa-project-diagram' },
    { label: 'Technologies', value: '15+', icon: 'fas fa-code' },
    { label: 'Work Experience', value: '3', icon: 'fas fa-briefcase' },
  ];

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={setElementRef}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Computer Science student at UET Lahore with proven expertise in full-stack development, 
            machine learning, and software engineering through multiple internships and real-world projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Education */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                <i className="fas fa-graduation-cap text-primary mr-3"></i>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="border-l-4 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                    <h4 className="font-semibold text-dark text-lg">{edu.institution}</h4>
                    <p className="text-gray-600 font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                    {(edu.grade || edu.percentage) && (
                      <p className="text-sm text-primary font-medium mt-1">
                        {edu.grade || `Percentage: ${edu.percentage}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Facts */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                <i className="fas fa-chart-line text-secondary mr-3"></i>
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <i className={`${fact.icon} text-2xl text-primary mb-2`}></i>
                    <div className="text-3xl font-bold text-primary">{fact.value}</div>
                    <div className="text-sm text-gray-600 leading-tight">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Professional Image */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                alt="Modern professional office environment with multiple workstations"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            
            {/* Certifications */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                <i className="fas fa-certificate text-accent mr-3"></i>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <i className="fas fa-award text-accent mt-1"></i>
                    <div>
                      <p className="text-gray-700 font-medium">{cert.name}</p>
                      <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
