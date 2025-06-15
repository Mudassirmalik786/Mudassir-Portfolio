import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experiences } from '../data/portfolioData';

const ExperienceSection = () => {
  const { isVisible, setElementRef } = useScrollAnimation(0.2);

  const getExperienceTypeColor = (type: string) => {
    const colorMap = {
      internship: 'bg-primary',
      volunteer: 'bg-accent',
      fulltime: 'bg-secondary',
    };
    return colorMap[type as keyof typeof colorMap] || 'bg-primary';
  };

  const getExperienceTypeIcon = (type: string) => {
    const iconMap = {
      internship: 'fas fa-user-graduate',
      volunteer: 'fas fa-hands-helping',
      fulltime: 'fas fa-briefcase',
    };
    return iconMap[type as keyof typeof iconMap] || 'fas fa-briefcase';
  };

  return (
    <section id="experience" className="py-20 bg-white" ref={setElementRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience in web development, software engineering, and technology internships.
          </p>
        </motion.div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-between' : 'justify-between flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl card-shadow border border-gray-100">
                    <div className="flex items-center mb-3">
                      <i className={`${getExperienceTypeIcon(experience.type)} text-lg mr-2`}></i>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {experience.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark mb-2">{experience.company}</h3>
                    <p className="font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                      {experience.position}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      {experience.duration} • {experience.location}
                    </p>
                    
                    <ul className="text-gray-600 text-sm space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <i className="fas fa-chevron-right text-xs text-primary mt-1 mr-2 flex-shrink-0"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${getExperienceTypeColor(experience.type)}`}></div>
                
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`bg-white p-6 rounded-2xl card-shadow border-l-4 ${
                experience.type === 'internship' ? 'border-primary' :
                experience.type === 'volunteer' ? 'border-accent' : 'border-secondary'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-3">
                <i className={`${getExperienceTypeIcon(experience.type)} text-lg mr-2`}></i>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {experience.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-2">{experience.company}</h3>
              <p className="font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                {experience.position}
              </p>
              <p className="text-gray-500 text-sm mb-3">
                {experience.duration} • {experience.location}
              </p>
              
              <ul className="text-gray-600 text-sm space-y-2">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i className="fas fa-chevron-right text-xs text-primary mt-1 mr-2 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
