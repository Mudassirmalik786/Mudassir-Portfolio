import { motion } from 'framer-motion';
import { useSkillAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolioData';

const SkillsSection = () => {
  const { animateSkills, setSkillsRef } = useSkillAnimation();

  const skillCategories = {
    languages: skills.filter(skill => skill.category === 'languages'),
    frameworks: skills.filter(skill => skill.category === 'frameworks'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const categoryInfo = {
    languages: {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      color: 'primary',
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: 'fas fa-layer-group',
      color: 'secondary',
    },
    tools: {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      color: 'accent',
    },
  };

  const getColorClass = (color: string) => {
    const colorMap = {
      primary: 'bg-gray-800',
      secondary: 'bg-gray-600',
      accent: 'bg-gray-700',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-800';
  };

  const getIconBgClass = (color: string) => {
    const colorMap = {
      primary: 'bg-gray-100 text-gray-800',
      secondary: 'bg-gray-100 text-gray-600',
      accent: 'bg-gray-100 text-gray-700',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={setSkillsRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern web technologies and programming languages with hands-on project experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => {
            const info = categoryInfo[category as keyof typeof categoryInfo];
            
            return (
              <motion.div
                key={category}
                className="bg-white p-8 rounded-2xl card-shadow border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getIconBgClass(info.color)}`}>
                    <i className={`${info.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-dark">{info.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-dark font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${getColorClass(info.color)} shadow-sm`}
                          initial={{ width: 0 }}
                          animate={animateSkills ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.3) + (skillIndex * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
